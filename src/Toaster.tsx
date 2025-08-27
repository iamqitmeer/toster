import React, { useState, useEffect, useMemo } from 'react';
import { emitter } from './toast';
import type { Toast } from './toast';
import { ToastItem } from './ToastItem';

export type Position =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'bottom-center';

export interface ToasterProps {
  position?: Position;
  theme?: 'light' | 'dark' | 'system';
  className?: string;
  style?: React.CSSProperties;
}

const EXIT_ANIMATION_DURATION = 300;

export const Toaster: React.FC<ToasterProps> = ({
  position = 'bottom-right',
  theme = 'light',
  className,
  style,
}) => {
  const [toasts, setToasts] = useState<Map<string, Toast>>(new Map());

  useEffect(() => {
    const addHandler = (toast: Toast) => {
      setToasts((currentToasts) => {
        const newToasts = new Map(currentToasts);
        newToasts.set(toast.id, toast);
        return newToasts;
      });
    };

    const updateHandler = (updatedToast: Partial<Toast> & { id: string }) => {
      setToasts((currentToasts) => {
        const newToasts = new Map(currentToasts);
        const existingToast = newToasts.get(updatedToast.id);
        if (existingToast) {
          newToasts.set(updatedToast.id, { ...existingToast, ...updatedToast });
        }
        return newToasts;
      });
    };

    const removeHandler = (id: string | undefined) => {
      if (!id) {
        setToasts((currentToasts) => {
          const newToasts = new Map();
          currentToasts.forEach(toast => {
            newToasts.set(toast.id, { ...toast, visible: false });
          });
          setTimeout(() => setToasts(new Map()), EXIT_ANIMATION_DURATION);
          return newToasts;
        });
        return;
      }

      setToasts((currentToasts) => {
        const newToasts = new Map(currentToasts);
        const toastToRemove = newToasts.get(id);
        if (toastToRemove) {
          newToasts.set(id, { ...toastToRemove, visible: false });

          setTimeout(() => {
            setToasts((toastsAfterAnimation) => {
              const finalToasts = new Map(toastsAfterAnimation);
              finalToasts.delete(id);
              return finalToasts;
            });
          }, EXIT_ANIMATION_DURATION);
        }
        return newToasts;
      });
    };

    emitter.on('ADD', addHandler);
    emitter.on('UPDATE', updateHandler);
    emitter.on('REMOVE', removeHandler);

    return () => {
      emitter.off('ADD', addHandler);
      emitter.off('UPDATE', updateHandler);
      emitter.off('REMOVE', removeHandler);
    };
  }, []);

  const onDismiss = (id: string) => {
    emitter.emit('REMOVE', id);
  };

  const toastArray = useMemo(() => Array.from(toasts.values()), [toasts]);
  const isTopPosition = position.includes('top');
  
  const sortedToasts = isTopPosition ? toastArray : [...toastArray].reverse();

  const containerClass = `toster-container toster-container--${position} ${className || ''}`;

  return (
    <ul
      className={containerClass}
      data-theme={theme}
      style={style}
      aria-live="assertive"
      aria-atomic="true"
    >
      {sortedToasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </ul>
  );
};
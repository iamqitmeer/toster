import React, { useEffect, useCallback } from 'react';
import type { Toast } from './toast';

type ToastItemProps = {
  toast: Toast;
  onDismiss: (id: string) => void;
};

export const ToastItem: React.FC<ToastItemProps> = ({ toast, onDismiss }) => {
  const handleDismiss = useCallback(() => {
    onDismiss(toast.id);
  }, [toast.id, onDismiss]);

  useEffect(() => {
    if (toast.duration && toast.duration !== Infinity) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, toast.duration);
      return () => clearTimeout(timer);
    }
  }, [toast.duration, handleDismiss]);

  const toastClass = `toster-toast toster-toast--${toast.type}`;

  return (
    <li
      className={toastClass}
      data-visible={toast.visible}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="toster-toast-content">
        <div className="toster-toast-message">{toast.message}</div>
        {toast.description && (
          <div className="toster-toast-description">{toast.description}</div>
        )}
      </div>
      {toast.action && (
        <button
          className="toster-toast-action-button"
          onClick={(e) => {
            toast.action?.onClick(e);
            handleDismiss();
          }}
        >
          {toast.action.label}
        </button>
      )}
      <button
        aria-label="Close"
        className="toster-toast-close-button"
        onClick={handleDismiss}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </li>
  );
};
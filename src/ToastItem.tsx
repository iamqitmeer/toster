import React, { useEffect, useCallback } from 'react';
import type { Toast } from './toast';

type ToastItemProps = {
  toast: Toast;
  onDismiss: (id: string) => void;
};

const Icons = {
  success: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
  error: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>,
  warning: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>,
  info: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>,
  loading: () => <div className="toster-spinner"></div>,
  default: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>,
};

export const ToastItem: React.FC<ToastItemProps> = ({ toast, onDismiss }) => {
  const handleDismiss = useCallback(() => {
    onDismiss(toast.id);
  }, [toast.id, onDismiss]);

  useEffect(() => {
    if (toast.duration && toast.duration !== Infinity) {
      const timer = setTimeout(handleDismiss, toast.duration);
      return () => clearTimeout(timer);
    }
  }, [toast.duration, handleDismiss]);

  const ToastIcon = Icons[toast.type];
  const toastClass = `toster-toast toster-toast--${toast.type}`;

  return (
    <li
      className={toastClass}
      data-visible={toast.visible}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="toster-toast-icon">
        {toast.icon || <ToastIcon />}
      </div>
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
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </li>
  );
};
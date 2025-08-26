import React from 'react';
import { Emitter } from './utils/emitter';

export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'loading' | 'default';

export type Toast = {
  id: string;
  message: React.ReactNode;
  type: ToastType;
  description?: React.ReactNode;
  duration?: number;
  visible: boolean;
  action?: {
    label: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };
};

export type ToastOptions = Partial<Omit<Toast, 'id' | 'message' | 'visible'>>;

type PromiseMessages<T> = {
  loading: React.ReactNode;
  success: React.ReactNode | ((data: T) => React.ReactNode);
  error: React.ReactNode | ((error: any) => React.ReactNode);
};

type Events = {
  ADD: Toast;
  UPDATE: Partial<Toast> & { id: string };
  REMOVE: string | undefined;
};

const emitter = new Emitter<Events>();

const genId = () => Math.random().toString(36).substring(2, 9);
const DEFAULT_DURATION = 4000;

function createToast(message: React.ReactNode, options: ToastOptions = {}): string {
  const id = genId();
  const toast: Toast = {
    id,
    message,
    visible: true,
    type: options.type || 'default',
    ...options,
    duration: options.duration ?? DEFAULT_DURATION,
  };
  emitter.emit('ADD', toast);
  return id;
}

const toast = (message: React.ReactNode, options?: ToastOptions) =>
  createToast(message, { ...options, type: 'default' });

toast.success = (message: React.ReactNode, options?: ToastOptions) =>
  createToast(message, { ...options, type: 'success' });

toast.error = (message: React.ReactNode, options?: ToastOptions) =>
  createToast(message, { ...options, type: 'error' });

toast.warning = (message: React.ReactNode, options?: ToastOptions) =>
  createToast(message, { ...options, type: 'warning' });

toast.info = (message: React.ReactNode, options?: ToastOptions) =>
  createToast(message, { ...options, type: 'info' });

toast.promise = <T,>(
  promise: Promise<T>,
  messages: PromiseMessages<T>,
  options?: ToastOptions
) => {
  const id = createToast(messages.loading, { ...options, type: 'loading', duration: Infinity });
  
  promise
    .then((data) => {
      const message = typeof messages.success === 'function' ? messages.success(data) : messages.success;
      emitter.emit('UPDATE', { id, message, type: 'success', duration: options?.duration ?? DEFAULT_DURATION });
    })
    .catch((error) => {
      const message = typeof messages.error === 'function' ? messages.error(error) : messages.error;
      emitter.emit('UPDATE', { id, message, type: 'error', duration: options?.duration ?? DEFAULT_DURATION });
    });
    
  return id;
};

toast.dismiss = (id?: string) => {
  emitter.emit('REMOVE', id);
};

export { emitter, toast };
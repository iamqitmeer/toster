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
    UPDATE: Partial<Toast> & {
        id: string;
    };
    REMOVE: string | undefined;
};
declare const emitter: Emitter<Events>;
declare const toast: {
    (message: React.ReactNode, options?: ToastOptions): string;
    success(message: React.ReactNode, options?: ToastOptions): string;
    error(message: React.ReactNode, options?: ToastOptions): string;
    warning(message: React.ReactNode, options?: ToastOptions): string;
    info(message: React.ReactNode, options?: ToastOptions): string;
    promise<T>(promise: Promise<T>, messages: PromiseMessages<T>, options?: ToastOptions): string;
    dismiss(id?: string): void;
};
export { emitter, toast };

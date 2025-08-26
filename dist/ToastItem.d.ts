import React from 'react';
import type { Toast } from './toast';
type ToastItemProps = {
    toast: Toast;
    onDismiss: (id: string) => void;
};
export declare const ToastItem: React.FC<ToastItemProps>;
export {};

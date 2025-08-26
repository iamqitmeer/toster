import React from 'react';
export type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
export interface ToasterProps {
    position?: Position;
    theme?: 'light' | 'dark' | 'system';
    className?: string;
    style?: React.CSSProperties;
}
export declare const Toaster: React.FC<ToasterProps>;

type Callback<T> = (data: T) => void;
export declare class Emitter<T extends Record<string, unknown>> {
    private callbacks;
    on<K extends keyof T>(event: K, callback: Callback<T[K]>): void;
    emit<K extends keyof T>(event: K, data: T[K]): void;
    off<K extends keyof T>(event: K, callback: Callback<T[K]>): void;
}
export {};

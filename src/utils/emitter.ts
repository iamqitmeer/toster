type Callback<T> = (data: T) => void;

export class Emitter<T extends Record<string, unknown>> {
  private callbacks: { [K in keyof T]?: Array<Callback<T[K]>> } = {};

  on<K extends keyof T>(event: K, callback: Callback<T[K]>): void {
    if (!this.callbacks[event]) {
      this.callbacks[event] = [];
    }
    this.callbacks[event]?.push(callback);
  }

  emit<K extends keyof T>(event: K, data: T[K]): void {
    this.callbacks[event]?.forEach((callback) => callback(data));
  }

  off<K extends keyof T>(event: K, callback: Callback<T[K]>): void {
    this.callbacks[event] = this.callbacks[event]?.filter(
      (cb) => cb !== callback
    );
  }
}
export interface Http {
  create<T = any>(resource: string, data?: Record<any, any>): Promise<T>;
  read<T = any>(resource: string, data?: Record<any, any>): Promise<T>;
  update<T = any>(resource: string, data?: Record<any, any>): Promise<T>;
  delete<T = any>(resource: string, data?: Record<any, any>): Promise<T>;
}

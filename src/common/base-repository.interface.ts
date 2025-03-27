export interface IBaseRepository<T, R> {
  create(data: T): Promise<R>;
  findOne(id: string): Promise<R>;
  findAll(): Promise<T[]>;
  update(id: string, data: T): Promise<T>;
  delete(id: string): Promise<void>;
}

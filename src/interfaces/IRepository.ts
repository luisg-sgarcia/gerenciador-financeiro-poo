export default interface IRepository<T> {
  save(item: T): void;

  getAll(): T[];
}
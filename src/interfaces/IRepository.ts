export default interface IRepository<T> {
  salvar(item: T): void;

  listarTodos(): T[];
}
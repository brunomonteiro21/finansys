import { Category } from "../../categories/shared/category.model";

export class Entry {
  constructor(
    public id?: number,
    public name?: string,
    public descriptor?: string,
    public type?: string,
    public amount?: string,
    public date?: Date,
    public paid?: boolean,
    public categoryId?: number,
    public category?: Category
  ) { }

  public static types = {
    expense: 'Despesa',
    renevue: 'Receita'
  };

  public get paidText(): string {
    return this.paid ? 'Pago' : 'Pendente';
  }
}

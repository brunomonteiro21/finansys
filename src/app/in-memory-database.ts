import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';

export class InMemoryDataBase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: 'Moradia', description: 'Pagamentos de contas da casa' },
      { id: 2, name: 'Saúde', description: 'Plano de saúde e remédios' },
      { id: 3, name: 'Lazer', description: 'Cinema, parques, praias, etc' },
      { id: 4, name: 'Salário', description: 'Recebimento de salário' },
      { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer' }
    ];

    const entries: Entry[] = [
      { id: 1, name: 'Gás de cozinha', description: 'Descrição gás de cozinha', categoryId: categories[0].id, category: categories[0], paid: true, date: '01/01/2018', amount: '70,80', type: 'expense' } as Entry,
      { id: 2, name: 'Internet', description: 'Descrição internet', categoryId: categories[1].id, category: categories[1], paid: false, date: '02/11/2018', amount: '170,80', type: 'renevue' } as Entry
    ];

    return { categories, entries };
  }
}

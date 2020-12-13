import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataBase implements InMemoryDbService {
    createDb() {
        const categories = [
            { id: 1, name: 'Moradia', descricao: 'Pagamentos de contas da casa'},
            { id: 2, name: 'Saúde', descricao: 'Plano de saúde e remédios'},
            { id: 3, name: 'Lazer', descricao: 'Cinema, parques, praias, etc'},
            { id: 4, name: 'Salário', descricao: 'Recebimento de salário'},
            { id: 5, name: 'Freelas', descricao: 'Trabalhos como freelancer'}
        ];

        return categories;
    }
}
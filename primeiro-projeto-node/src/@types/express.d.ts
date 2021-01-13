/**
 * Quando queremos modificar a tipagem de uma biblioteca, devemos usar arquivos
 * de declaração com o nome da biblioteca que queremos sobrescrever.
 *
 * namespace é o mesmo da biblioteca que será modificada
 * export interface é qual definiçãop que será adicionada na definição existente
 */
declare namespace Express {
    export interface Request {
        user: {
            id: string;
        };
    }
}

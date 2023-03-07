import ADODB from 'node-adodb';

type MSAceessDBMethod = 'get'|'post'|'put'|'delete'

export interface MSAccessDBProps {
    sql: string;
    method?: MSAceessDBMethod;
} 

class MSAccessDBController {
    conn = ADODB.open("Driver={Microsoft Access Driver (*.mdb, *.accdb)};Dbq=C:/\PROD/\React/\production-doc-v1/\СУП-БД_V.2_2019-08-11.accdb;")
    sql: string = '';
    method: MSAceessDBMethod = 'get';
    response: [] = [];

    constructor(options: MSAccessDBProps) {
        this.sql = options.sql;
        this.method = options?.method || 'get'
    };

    // заносим асинхронно данные в базу MS Access
    async execute() {
        try {
            // получаем и возвращаем список записей
            if (this.method === 'get') {
                this.response = await this.conn.query(this.sql);
            } else {
                this.response = await this.conn.execute(this.sql);
            };
            return this.response
        } catch (e) {
            // обрабатываем ошибку
            console.error(e)
            return {'Error': e}
        }
    };

    async getSchema() {
        
    }
}

export default MSAccessDBController
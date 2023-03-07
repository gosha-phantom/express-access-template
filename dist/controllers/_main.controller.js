"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_adodb_1 = __importDefault(require("node-adodb"));
class MSAccessDBController {
    constructor(options) {
        this.conn = node_adodb_1.default.open("Driver={Microsoft Access Driver (*.mdb, *.accdb)};Dbq=C:/\PROD/\React/\production-doc-v1/\СУП-БД_V.2_2019-08-11.accdb;");
        this.sql = '';
        this.method = 'get';
        this.response = [];
        this.sql = options.sql;
        this.method = (options === null || options === void 0 ? void 0 : options.method) || 'get';
    }
    ;
    // заносим асинхронно данные в базу MS Access
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // получаем и возвращаем список записей
                if (this.method === 'get') {
                    this.response = yield this.conn.query(this.sql);
                }
                else {
                    this.response = yield this.conn.execute(this.sql);
                }
                ;
                return this.response;
            }
            catch (e) {
                // обрабатываем ошибку
                console.error(e);
                return { 'Error': e };
            }
        });
    }
    ;
    getSchema() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = MSAccessDBController;

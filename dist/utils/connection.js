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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrclConnection = void 0;
const oracledb = require('oracledb');
const config = {
    user: 's.kokkiligadda',
    password: 'LYISdRhrzUYnRWM03hRNNPvb',
    connectString: 'oracle.cise.ufl.edu:1521/orcl'
};
const OrclConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    oracledb.outFormat = oracledb.OBJECT;
    const conn = yield oracledb.getConnection(config);
    return conn;
});
exports.OrclConnection = OrclConnection;
//# sourceMappingURL=connection.js.map
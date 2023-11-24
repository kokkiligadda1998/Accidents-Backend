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
exports.queryHelper1 = void 0;
const connection_1 = require("../utils/connection");
const queries_1 = require("../utils/queries");
const queryHelper1 = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let conn = yield (0, connection_1.OrclConnection)();
        let query = queries_1.allQueries.Query1.replace("DBMS", data.Year);
        let result = yield conn.execute(query);
        conn.close();
        return {
            status: 200,
            isSuccess: true,
            data: result.rows
        };
    }
    catch (err) {
        return {
            status: 500,
            isSuccess: false,
            error: err.message
        };
    }
});
exports.queryHelper1 = queryHelper1;
//# sourceMappingURL=aHelper.js.map
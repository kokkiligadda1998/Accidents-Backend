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
exports.queryHelper8 = exports.queryHelper7 = exports.queryHelper6 = exports.queryHelper5 = exports.queryHelper4 = exports.queryHelper3 = exports.queryHelper2 = exports.queryHelper1 = void 0;
const connection_1 = require("../utils/connection");
const queries_1 = require("../utils/queries");
const queryHelper1 = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let conn = yield (0, connection_1.OrclConnection)();
        let query = queries_1.allQueries.Query1.replace("DBMS", data.Year);
        const cityArray = data.City.split(',').map(city => `'${city.trim()}'`);
        const citiesInQuotes = cityArray.join(', ');
        query = query.replace("DBMSCITY", citiesInQuotes);
        const stateArray = data.State.split(',').map(state => `'${state.trim()}'`);
        const stateInQuotes = stateArray.join(', ');
        query = query.replace("DBMSSTATE", stateInQuotes);
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
const queryHelper2 = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let conn = yield (0, connection_1.OrclConnection)();
        let query = queries_1.allQueries.Query2.replace("DBMS", data.Year);
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
exports.queryHelper2 = queryHelper2;
const queryHelper3 = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let conn = yield (0, connection_1.OrclConnection)();
        let query = queries_1.allQueries.Query3.replace("DBMS", data.Year);
        const cityArray = data.City.split(',').map(city => `'${city.trim()}'`);
        const citiesInQuotes = cityArray.join(', ');
        query = query.replace("DBMSCITY", citiesInQuotes);
        const stateArray = data.State.split(',').map(state => `'${state.trim()}'`);
        const stateInQuotes = stateArray.join(', ');
        query = query.replace("DBMSSTATE", stateInQuotes);
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
exports.queryHelper3 = queryHelper3;
const queryHelper4 = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let conn = yield (0, connection_1.OrclConnection)();
        let query = queries_1.allQueries.Query4.replace("DBMS", data.Year);
        const cityArray = data.City.split(',').map(city => `'${city.trim()}'`);
        const citiesInQuotes = cityArray.join(', ');
        query = query.replace("DBMSCITY", citiesInQuotes);
        const stateArray = data.State.split(',').map(state => `'${state.trim()}'`);
        const stateInQuotes = stateArray.join(', ');
        query = query.replace("DBMSSTATE", stateInQuotes);
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
exports.queryHelper4 = queryHelper4;
const queryHelper5 = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let conn = yield (0, connection_1.OrclConnection)();
        let query = queries_1.allQueries.Query5.replace("DBMS", data.Year);
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
exports.queryHelper5 = queryHelper5;
const queryHelper6 = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let conn = yield (0, connection_1.OrclConnection)();
        let query = queries_1.allQueries.Query6.replace("DBMS", data.Year);
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
exports.queryHelper6 = queryHelper6;
const queryHelper7 = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let conn = yield (0, connection_1.OrclConnection)();
        let result = yield conn.execute(queries_1.allQueries.Query7);
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
exports.queryHelper7 = queryHelper7;
const queryHelper8 = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let conn = yield (0, connection_1.OrclConnection)();
        let result = yield conn.execute(queries_1.allQueries.Query9);
        let data = result.rows;
        let sum = result.rows.reduce((acc, row) => acc + row.TABLE_COUNT, 0);
        data.push({ TOTAL_COUNT: "TOTAL COUNT", SUM: sum });
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
exports.queryHelper8 = queryHelper8;
//# sourceMappingURL=aHelper.js.map
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.query8 = exports.query7 = exports.query6 = exports.query5 = exports.query4 = exports.query3 = exports.query2 = exports.query1 = void 0;
const aHelper = __importStar(require("../helpers/aHelper"));
const query1 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqBody = req.body;
    try {
        const result = yield aHelper.queryHelper1(reqBody);
        if (result.isSuccess) {
            res.status(result.status).send({ isSuccess: result.isSuccess, data: result.data });
        }
        else {
            res.status(result.status).send({ isSuccess: result.isSuccess, err: result.error });
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ isSuccess: false, err: error.message });
    }
});
exports.query1 = query1;
const query2 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqBody = req.body;
    try {
        const result = yield aHelper.queryHelper2(reqBody);
        if (result.isSuccess) {
            res.status(result.status).send({ isSuccess: result.isSuccess, data: result.data });
        }
        else {
            res.status(result.status).send({ isSuccess: result.isSuccess, err: result.error });
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ isSuccess: false, err: error.message });
    }
});
exports.query2 = query2;
const query3 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqBody = req.body;
    try {
        const result = yield aHelper.queryHelper3(reqBody);
        if (result.isSuccess) {
            res.status(result.status).send({ isSuccess: result.isSuccess, data: result.data });
        }
        else {
            res.status(result.status).send({ isSuccess: result.isSuccess, err: result.error });
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ isSuccess: false, err: error.message });
    }
});
exports.query3 = query3;
const query4 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqBody = req.body;
    try {
        const result = yield aHelper.queryHelper4(reqBody);
        if (result.isSuccess) {
            res.status(result.status).send({ isSuccess: result.isSuccess, data: result.data });
        }
        else {
            res.status(result.status).send({ isSuccess: result.isSuccess, err: result.error });
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ isSuccess: false, err: error.message });
    }
});
exports.query4 = query4;
const query5 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqBody = req.body;
    try {
        const result = yield aHelper.queryHelper5(reqBody);
        if (result.isSuccess) {
            res.status(result.status).send({ isSuccess: result.isSuccess, data: result.data });
        }
        else {
            res.status(result.status).send({ isSuccess: result.isSuccess, err: result.error });
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ isSuccess: false, err: error.message });
    }
});
exports.query5 = query5;
const query6 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqBody = req.body;
    try {
        const result = yield aHelper.queryHelper6(reqBody);
        if (result.isSuccess) {
            res.status(result.status).send({ isSuccess: result.isSuccess, data: result.data });
        }
        else {
            res.status(result.status).send({ isSuccess: result.isSuccess, err: result.error });
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ isSuccess: false, err: error.message });
    }
});
exports.query6 = query6;
const query7 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield aHelper.queryHelper7();
        if (result.isSuccess) {
            res.status(result.status).send({ isSuccess: result.isSuccess, data: result.data });
        }
        else {
            res.status(result.status).send({ isSuccess: result.isSuccess, err: result.error });
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ isSuccess: false, err: error.message });
    }
});
exports.query7 = query7;
const query8 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield aHelper.queryHelper8();
        if (result.isSuccess) {
            res.status(result.status).send({ isSuccess: result.isSuccess, data: result.data });
        }
        else {
            res.status(result.status).send({ isSuccess: result.isSuccess, err: result.error });
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ isSuccess: false, err: error.message });
    }
});
exports.query8 = query8;
//# sourceMappingURL=aController.js.map
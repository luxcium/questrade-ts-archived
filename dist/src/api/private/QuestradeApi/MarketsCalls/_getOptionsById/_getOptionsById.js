"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const AxiosRequestApiFactory_1 = require("../../../core/AxiosRequestApiFactory");
// + _getOptionsById
/** _getOptionsSymbols */
exports._getOptionsById = (_axios = axios_1.default) => (credentials) => async (symbolID) => (await AxiosRequestApiFactory_1._axiosGetApi(_axios)(credentials)(`/symbols/${symbolID}/options`)()).optionChain;
//# sourceMappingURL=_getOptionsById.js.map
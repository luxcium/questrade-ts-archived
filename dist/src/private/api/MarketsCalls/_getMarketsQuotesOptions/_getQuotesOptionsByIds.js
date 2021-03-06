"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _getMarketsQuotesOptions_1 = require("./_getMarketsQuotesOptions");
exports._getQuotesOptionsByIds = function (credentials) { return function (optionIds) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        try {
            return [2 /*return*/, _getMarketsQuotesOptions_1._getMarketsQuotesOptions(credentials)(optionIds, 0, '', null, 0, 0)];
        }
        catch (error) {
            console.error(error.message);
            return [2 /*return*/, []];
        }
        return [2 /*return*/];
    });
}); }; };
//# sourceMappingURL=_getQuotesOptionsByIds.js.map
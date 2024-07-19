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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cds_1 = __importDefault(require("@sap/cds"));
exports.default = (srv) => {
    srv.before('CREATE', 'Books', (req) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('before creating Books');
        //const { CampaignHeader } = require('#cds-models/sap/capire/bookshop')
        const { Books } = yield Promise.resolve().then(() => __importStar(require('#cds-models/sap/capire/bookshop')));
        //  console.log('CampaignHeader', CampaignHeader)
    }));
    srv.on('someAction', (req) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('start someAction');
        console.log('req.data', req.data);
        let ID = req.data.ID;
        const { CampaignHeader } = cds_1.default.entities('sap.capire.bookshop');
        //const { CampaignHeader } = await import('#cds-models/sap/capire/bookshop')
        //const { CampaignHeader } = require('#cds-models/sap/capire/bookshop')
        const aCampaignData = yield SELECT.from(CampaignHeader).where({ 'ID': ID });
        if (aCampaignData)
            return 'S';
        return 'E';
    }));
};

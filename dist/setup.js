"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@jswork/next-require");
var node_fetch_1 = __importDefault(require("node-fetch"));
var yargs_parser_1 = __importDefault(require("yargs-parser"));
nx.require({
    pattern: ['@jswork/next-*', '@afeiship/next-*', '!@jswork/next-require'],
    scope: ['dependencies']
});
nx.global({
    args: yargs_parser_1.default(process.argv.slice(2)),
    http: nx.Fetch.getInstance({ fetch: node_fetch_1.default }),
    conf: new nx.YamlConfiguration({ path: './config.yml' })
});

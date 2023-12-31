"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.head = exports.options = exports.patch = exports.del = exports.put = exports.post = exports.get = exports.all = void 0;
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetadataKeys_1 = require("./MetadataKeys");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.Path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.Method, method, target, key);
        };
    };
}
exports.all = routeBinder(Methods_1.Methods.All);
exports.get = routeBinder(Methods_1.Methods.Get);
exports.post = routeBinder(Methods_1.Methods.Post);
exports.put = routeBinder(Methods_1.Methods.Put);
exports.del = routeBinder(Methods_1.Methods.Del);
exports.patch = routeBinder(Methods_1.Methods.Patch);
exports.options = routeBinder(Methods_1.Methods.Options);
exports.head = routeBinder(Methods_1.Methods.Head);

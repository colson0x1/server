import 'reflect-metadata';
import express from 'express';

export const router = express.Router();

export function controller(routePrefix: string) {
  return function (target: Function) {
    /* 
      tsconfig.json
      "target": "es5"
    */
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);

      if (path) {
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    }

    /* 
      tsconfig.json
      "target": "es2016"
      NOTE: In ES2016, class methods are no longer enumerable
      Resolution for es2016

      Object.getOwnPropertyNames(target.prototype).forEach((key) => {
        const routeHandler = target.prototype[key];
        const path = Reflect.getMetadata('path', target.prototype, key);

        if (path) {
          router.get(`${routePrefix}${path}`, routeHandler);
        }
      });
    */
  };
}
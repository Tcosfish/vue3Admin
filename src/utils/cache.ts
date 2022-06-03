/*
 * @Author: tcosfish
 * @Date: 2022-05-20 11:38:50
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-05-21 15:48:02
 * @FilePath: \vue3admin\src\utils\cache.ts
 */

type CacheType = "localStorage" | "sessionStorage";
type CacheParamsType = {
  key: string;
  value?: any;
};

class MyCache {
  _cacheMode: CacheType;

  constructor(cacheMode: CacheType) {
    this._cacheMode = cacheMode;
    try {
      window;
    } catch (e) {
      throw new Error("请在浏览器环境下执行!");
    }
  }

  setCache(key: string, value: any) {
    return this.cacheModeHandle("setItem", { key, value });
  }

  getCache(key: string) {
    return this.cacheModeHandle("getItem", { key });
  }

  removeCache(key: string, cacheMode: CacheType = this._cacheMode) {
    return this.cacheModeHandle("removeItem", { key }, cacheMode);
  }

  clearCache(cacheMode: CacheType = this._cacheMode) {
    return this.cacheModeHandle("clear", undefined, cacheMode);
  }

  cacheModeHandle(
    handle: string,
    params?: CacheParamsType,
    cacheMode: CacheType = this._cacheMode
  ) {
    let result: any = undefined;
    let cacheModeError: never;

    switch (cacheMode) {
      case "localStorage":
        if (!params) {
          globalThis.localStorage[handle]();
        } else if (params?.value) {
          globalThis.localStorage[handle](
            params?.key,
            JSON.stringify(params?.value)
          );
        } else {
          result = globalThis.localStorage[handle](params?.key);
        }
        break;
      case "sessionStorage":
        if (typeof params === null) {
          globalThis.sessionStorage[handle]();
        } else if (params?.value) {
          globalThis.sessionStorage[handle](
            params?.key,
            JSON.stringify(params?.value)
          );
        } else {
          result = globalThis.sessionStorage[handle](params?.key);
        }
        break;
      default:
        cacheModeError = cacheMode;
        return cacheModeError;
    }
    return result ? JSON.parse(result) : result;
  }
}

//

// test
// let myStatus = new MyCache("sessionStorage")
// myStatus.setCache("user", {name: "code", age: 18, gender: "man"})
// let result = myStatus.getCache("user")
// console.log(result)

export default new MyCache("localStorage");

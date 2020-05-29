declare module 'proxy-storage' {
  import { IPlainObject } from '@definitions/IPlainObject';

  /**
   * The `Storage` interface of the Web Storage API provides access to a particular domain's storage.
   * It allows, for example, the addition, modification, or deletion of stored data items.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Storage
   */
  export interface IWebStorage extends Storage {
    /**
     * A read-only property that returns the number of key/value pairs currently present in the list associated with the object.
     */
    readonly length: number;

    /**
     * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
     *
     * Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set.
     * Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.
     */
    setItem(key: string, value: any, options?: ICookieOptions): void;

    /**
     * Returns the current value associated with the given key, or null if the given key does not exist in the list associated with the object.
     */
    getItem<T = any>(key: string): T | null;

    /**
     * Removes the key/value pair with the given key from the list associated with the object, if a key/value pair with the given key exists.
     */
    removeItem(key: string, options?: ICookieOptions): void;

    /**
     * Empties the list associated with the object of all key/value pairs, if there are any.
     */
    clear(): void;

    /**
     * Returns the name of the nth key in the list, or null if n is greater than or equal to the number of key/value pairs in the object.
     */
    key(index: number): string | null;

    /**
     * Returns an object with all key/value pairs stored.
     */
    getAll(): IPlainObject;
  }

  /**
   * Specifies the static members of the class implementing this interface
   */
  export interface IWebStorageStatic {
    /**
     * Creates a WebStorage instance or get a previously created one.
     * @param storageType The type of the storage mechanism. It can be "localStorage", "sessionStorage", "cookieStorage", or "memoryStorage"
     * @param deepSearch Determines whether a transversal search should be performed on all storage mechanisms when calling getItem()
     */
    new (storageType: storageTypes, deepSearch?: boolean): IWebStorage;

    /**
     * Gets an object with information about which storage mechanisms are currently available in the browser.
     */
    getAvailableStorage(): IAvailableStorage;

    /**
     * Sets the reading order of the storage mechanisms when calling IWebStorage interface methods.
     * @param config An object containing all supported storage mechanisms
     */
    setStorageOrder(config: IStorageOrder): void;
  }

  export interface ICookieOptions {
    expires?: IDateConfig | Date;
    domain?: string;
    secure?: boolean;
    path?: string;
  }

  export interface ICookieMetadata {
    expires?: string;
    domain?: string;
    secure?: boolean;
    path?: string;
  }

  export interface IDateConfig {
    date?: Date;
    minutes?: number;
    hours?: number;
    days?: number;
    months?: number;
    years?: number;
  }

  export type storageTypes = 'localStorage' | 'sessionStorage' | 'cookieStorage' | 'memoryStorage';

  export type IStorageOrder = {
    [key in storageTypes]: number;
  };

  export type IStorageMechanism = {
    [key in storageTypes]: IWebStorage;
  };

  export type IAvailableStorage = {
    [key in storageTypes]: boolean;
  };

  export interface ISerializer {
    serialize(value: any): string;
    deserialize<T = any>(value: string): T;
  }

  export interface IMigratedStorage {
    source: string;
    getAll: IWebStorage['getAll'];
    getItem: IWebStorage['getItem'];
  }
}

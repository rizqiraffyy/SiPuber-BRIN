
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model CmsSetting
 * 
 */
export type CmsSetting = $Result.DefaultSelection<Prisma.$CmsSettingPayload>
/**
 * Model PpmDataSipuber
 * 
 */
export type PpmDataSipuber = $Result.DefaultSelection<Prisma.$PpmDataSipuberPayload>
/**
 * Model DailyDataSipuber
 * 
 */
export type DailyDataSipuber = $Result.DefaultSelection<Prisma.$DailyDataSipuberPayload>
/**
 * Model AnalDataSipuber
 * 
 */
export type AnalDataSipuber = $Result.DefaultSelection<Prisma.$AnalDataSipuberPayload>
/**
 * Model AlertManagement
 * 
 */
export type AlertManagement = $Result.DefaultSelection<Prisma.$AlertManagementPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsSetting`: Exposes CRUD operations for the **CmsSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsSettings
    * const cmsSettings = await prisma.cmsSetting.findMany()
    * ```
    */
  get cmsSetting(): Prisma.CmsSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ppmDataSipuber`: Exposes CRUD operations for the **PpmDataSipuber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PpmDataSipubers
    * const ppmDataSipubers = await prisma.ppmDataSipuber.findMany()
    * ```
    */
  get ppmDataSipuber(): Prisma.PpmDataSipuberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyDataSipuber`: Exposes CRUD operations for the **DailyDataSipuber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyDataSipubers
    * const dailyDataSipubers = await prisma.dailyDataSipuber.findMany()
    * ```
    */
  get dailyDataSipuber(): Prisma.DailyDataSipuberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analDataSipuber`: Exposes CRUD operations for the **AnalDataSipuber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalDataSipubers
    * const analDataSipubers = await prisma.analDataSipuber.findMany()
    * ```
    */
  get analDataSipuber(): Prisma.AnalDataSipuberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alertManagement`: Exposes CRUD operations for the **AlertManagement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlertManagements
    * const alertManagements = await prisma.alertManagement.findMany()
    * ```
    */
  get alertManagement(): Prisma.AlertManagementDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Device: 'Device',
    CmsSetting: 'CmsSetting',
    PpmDataSipuber: 'PpmDataSipuber',
    DailyDataSipuber: 'DailyDataSipuber',
    AnalDataSipuber: 'AnalDataSipuber',
    AlertManagement: 'AlertManagement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "device" | "cmsSetting" | "ppmDataSipuber" | "dailyDataSipuber" | "analDataSipuber" | "alertManagement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      CmsSetting: {
        payload: Prisma.$CmsSettingPayload<ExtArgs>
        fields: Prisma.CmsSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingPayload>
          }
          findFirst: {
            args: Prisma.CmsSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingPayload>
          }
          findMany: {
            args: Prisma.CmsSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingPayload>[]
          }
          create: {
            args: Prisma.CmsSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingPayload>
          }
          createMany: {
            args: Prisma.CmsSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingPayload>[]
          }
          delete: {
            args: Prisma.CmsSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingPayload>
          }
          update: {
            args: Prisma.CmsSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingPayload>
          }
          deleteMany: {
            args: Prisma.CmsSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingPayload>[]
          }
          upsert: {
            args: Prisma.CmsSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingPayload>
          }
          aggregate: {
            args: Prisma.CmsSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsSetting>
          }
          groupBy: {
            args: Prisma.CmsSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsSettingCountArgs<ExtArgs>
            result: $Utils.Optional<CmsSettingCountAggregateOutputType> | number
          }
        }
      }
      PpmDataSipuber: {
        payload: Prisma.$PpmDataSipuberPayload<ExtArgs>
        fields: Prisma.PpmDataSipuberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PpmDataSipuberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PpmDataSipuberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PpmDataSipuberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PpmDataSipuberPayload>
          }
          findFirst: {
            args: Prisma.PpmDataSipuberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PpmDataSipuberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PpmDataSipuberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PpmDataSipuberPayload>
          }
          findMany: {
            args: Prisma.PpmDataSipuberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PpmDataSipuberPayload>[]
          }
          create: {
            args: Prisma.PpmDataSipuberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PpmDataSipuberPayload>
          }
          createMany: {
            args: Prisma.PpmDataSipuberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PpmDataSipuberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PpmDataSipuberPayload>[]
          }
          delete: {
            args: Prisma.PpmDataSipuberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PpmDataSipuberPayload>
          }
          update: {
            args: Prisma.PpmDataSipuberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PpmDataSipuberPayload>
          }
          deleteMany: {
            args: Prisma.PpmDataSipuberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PpmDataSipuberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PpmDataSipuberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PpmDataSipuberPayload>[]
          }
          upsert: {
            args: Prisma.PpmDataSipuberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PpmDataSipuberPayload>
          }
          aggregate: {
            args: Prisma.PpmDataSipuberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePpmDataSipuber>
          }
          groupBy: {
            args: Prisma.PpmDataSipuberGroupByArgs<ExtArgs>
            result: $Utils.Optional<PpmDataSipuberGroupByOutputType>[]
          }
          count: {
            args: Prisma.PpmDataSipuberCountArgs<ExtArgs>
            result: $Utils.Optional<PpmDataSipuberCountAggregateOutputType> | number
          }
        }
      }
      DailyDataSipuber: {
        payload: Prisma.$DailyDataSipuberPayload<ExtArgs>
        fields: Prisma.DailyDataSipuberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyDataSipuberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDataSipuberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyDataSipuberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDataSipuberPayload>
          }
          findFirst: {
            args: Prisma.DailyDataSipuberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDataSipuberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyDataSipuberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDataSipuberPayload>
          }
          findMany: {
            args: Prisma.DailyDataSipuberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDataSipuberPayload>[]
          }
          create: {
            args: Prisma.DailyDataSipuberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDataSipuberPayload>
          }
          createMany: {
            args: Prisma.DailyDataSipuberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyDataSipuberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDataSipuberPayload>[]
          }
          delete: {
            args: Prisma.DailyDataSipuberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDataSipuberPayload>
          }
          update: {
            args: Prisma.DailyDataSipuberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDataSipuberPayload>
          }
          deleteMany: {
            args: Prisma.DailyDataSipuberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyDataSipuberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyDataSipuberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDataSipuberPayload>[]
          }
          upsert: {
            args: Prisma.DailyDataSipuberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDataSipuberPayload>
          }
          aggregate: {
            args: Prisma.DailyDataSipuberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyDataSipuber>
          }
          groupBy: {
            args: Prisma.DailyDataSipuberGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyDataSipuberGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyDataSipuberCountArgs<ExtArgs>
            result: $Utils.Optional<DailyDataSipuberCountAggregateOutputType> | number
          }
        }
      }
      AnalDataSipuber: {
        payload: Prisma.$AnalDataSipuberPayload<ExtArgs>
        fields: Prisma.AnalDataSipuberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalDataSipuberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalDataSipuberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalDataSipuberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalDataSipuberPayload>
          }
          findFirst: {
            args: Prisma.AnalDataSipuberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalDataSipuberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalDataSipuberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalDataSipuberPayload>
          }
          findMany: {
            args: Prisma.AnalDataSipuberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalDataSipuberPayload>[]
          }
          create: {
            args: Prisma.AnalDataSipuberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalDataSipuberPayload>
          }
          createMany: {
            args: Prisma.AnalDataSipuberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalDataSipuberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalDataSipuberPayload>[]
          }
          delete: {
            args: Prisma.AnalDataSipuberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalDataSipuberPayload>
          }
          update: {
            args: Prisma.AnalDataSipuberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalDataSipuberPayload>
          }
          deleteMany: {
            args: Prisma.AnalDataSipuberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalDataSipuberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalDataSipuberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalDataSipuberPayload>[]
          }
          upsert: {
            args: Prisma.AnalDataSipuberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalDataSipuberPayload>
          }
          aggregate: {
            args: Prisma.AnalDataSipuberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalDataSipuber>
          }
          groupBy: {
            args: Prisma.AnalDataSipuberGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalDataSipuberGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalDataSipuberCountArgs<ExtArgs>
            result: $Utils.Optional<AnalDataSipuberCountAggregateOutputType> | number
          }
        }
      }
      AlertManagement: {
        payload: Prisma.$AlertManagementPayload<ExtArgs>
        fields: Prisma.AlertManagementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertManagementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertManagementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertManagementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertManagementPayload>
          }
          findFirst: {
            args: Prisma.AlertManagementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertManagementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertManagementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertManagementPayload>
          }
          findMany: {
            args: Prisma.AlertManagementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertManagementPayload>[]
          }
          create: {
            args: Prisma.AlertManagementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertManagementPayload>
          }
          createMany: {
            args: Prisma.AlertManagementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertManagementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertManagementPayload>[]
          }
          delete: {
            args: Prisma.AlertManagementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertManagementPayload>
          }
          update: {
            args: Prisma.AlertManagementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertManagementPayload>
          }
          deleteMany: {
            args: Prisma.AlertManagementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertManagementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertManagementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertManagementPayload>[]
          }
          upsert: {
            args: Prisma.AlertManagementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertManagementPayload>
          }
          aggregate: {
            args: Prisma.AlertManagementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlertManagement>
          }
          groupBy: {
            args: Prisma.AlertManagementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertManagementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertManagementCountArgs<ExtArgs>
            result: $Utils.Optional<AlertManagementCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    device?: DeviceOmit
    cmsSetting?: CmsSettingOmit
    ppmDataSipuber?: PpmDataSipuberOmit
    dailyDataSipuber?: DailyDataSipuberOmit
    analDataSipuber?: AnalDataSipuberOmit
    alertManagement?: AlertManagementOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    devices: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | UserCountOutputTypeCountDevicesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    ppm_data: number
    daily_data: number
    anal_data: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ppm_data?: boolean | DeviceCountOutputTypeCountPpm_dataArgs
    daily_data?: boolean | DeviceCountOutputTypeCountDaily_dataArgs
    anal_data?: boolean | DeviceCountOutputTypeCountAnal_dataArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountPpm_dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PpmDataSipuberWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountDaily_dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyDataSipuberWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountAnal_dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalDataSipuberWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    full_name: string | null
    email: string | null
    password: string | null
    role: string | null
    isSoftDelete: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    full_name: string | null
    email: string | null
    password: string | null
    role: string | null
    isSoftDelete: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    full_name: number
    email: number
    password: number
    role: number
    isSoftDelete: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    full_name?: true
    email?: true
    password?: true
    role?: true
    isSoftDelete?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    full_name?: true
    email?: true
    password?: true
    role?: true
    isSoftDelete?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    full_name?: true
    email?: true
    password?: true
    role?: true
    isSoftDelete?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    full_name: string
    email: string
    password: string
    role: string
    isSoftDelete: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isSoftDelete?: boolean
    devices?: boolean | User$devicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isSoftDelete?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isSoftDelete?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isSoftDelete?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "full_name" | "email" | "password" | "role" | "isSoftDelete", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | User$devicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      devices: Prisma.$DevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      full_name: string
      email: string
      password: string
      role: string
      isSoftDelete: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    devices<T extends User$devicesArgs<ExtArgs> = {}>(args?: Subset<T, User$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly full_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly isSoftDelete: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.devices
   */
  export type User$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type DeviceSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type DeviceMinAggregateOutputType = {
    id: number | null
    device_name: string | null
    no_modem: string | null
    tanggal_paket: string | null
    user_id: number | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: number | null
    device_name: string | null
    no_modem: string | null
    tanggal_paket: string | null
    user_id: number | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    device_name: number
    no_modem: number
    tanggal_paket: number
    user_id: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type DeviceSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type DeviceMinAggregateInputType = {
    id?: true
    device_name?: true
    no_modem?: true
    tanggal_paket?: true
    user_id?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    device_name?: true
    no_modem?: true
    tanggal_paket?: true
    user_id?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    device_name?: true
    no_modem?: true
    tanggal_paket?: true
    user_id?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: number
    device_name: string
    no_modem: string | null
    tanggal_paket: string | null
    user_id: number
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_name?: boolean
    no_modem?: boolean
    tanggal_paket?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ppm_data?: boolean | Device$ppm_dataArgs<ExtArgs>
    daily_data?: boolean | Device$daily_dataArgs<ExtArgs>
    anal_data?: boolean | Device$anal_dataArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_name?: boolean
    no_modem?: boolean
    tanggal_paket?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_name?: boolean
    no_modem?: boolean
    tanggal_paket?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    device_name?: boolean
    no_modem?: boolean
    tanggal_paket?: boolean
    user_id?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "device_name" | "no_modem" | "tanggal_paket" | "user_id", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ppm_data?: boolean | Device$ppm_dataArgs<ExtArgs>
    daily_data?: boolean | Device$daily_dataArgs<ExtArgs>
    anal_data?: boolean | Device$anal_dataArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ppm_data: Prisma.$PpmDataSipuberPayload<ExtArgs>[]
      daily_data: Prisma.$DailyDataSipuberPayload<ExtArgs>[]
      anal_data: Prisma.$AnalDataSipuberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      device_name: string
      no_modem: string | null
      tanggal_paket: string | null
      user_id: number
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ppm_data<T extends Device$ppm_dataArgs<ExtArgs> = {}>(args?: Subset<T, Device$ppm_dataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PpmDataSipuberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    daily_data<T extends Device$daily_dataArgs<ExtArgs> = {}>(args?: Subset<T, Device$daily_dataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyDataSipuberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    anal_data<T extends Device$anal_dataArgs<ExtArgs> = {}>(args?: Subset<T, Device$anal_dataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalDataSipuberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'Int'>
    readonly device_name: FieldRef<"Device", 'String'>
    readonly no_modem: FieldRef<"Device", 'String'>
    readonly tanggal_paket: FieldRef<"Device", 'String'>
    readonly user_id: FieldRef<"Device", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device.ppm_data
   */
  export type Device$ppm_dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PpmDataSipuber
     */
    select?: PpmDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PpmDataSipuber
     */
    omit?: PpmDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PpmDataSipuberInclude<ExtArgs> | null
    where?: PpmDataSipuberWhereInput
    orderBy?: PpmDataSipuberOrderByWithRelationInput | PpmDataSipuberOrderByWithRelationInput[]
    cursor?: PpmDataSipuberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PpmDataSipuberScalarFieldEnum | PpmDataSipuberScalarFieldEnum[]
  }

  /**
   * Device.daily_data
   */
  export type Device$daily_dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDataSipuber
     */
    select?: DailyDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDataSipuber
     */
    omit?: DailyDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDataSipuberInclude<ExtArgs> | null
    where?: DailyDataSipuberWhereInput
    orderBy?: DailyDataSipuberOrderByWithRelationInput | DailyDataSipuberOrderByWithRelationInput[]
    cursor?: DailyDataSipuberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyDataSipuberScalarFieldEnum | DailyDataSipuberScalarFieldEnum[]
  }

  /**
   * Device.anal_data
   */
  export type Device$anal_dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalDataSipuber
     */
    select?: AnalDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalDataSipuber
     */
    omit?: AnalDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalDataSipuberInclude<ExtArgs> | null
    where?: AnalDataSipuberWhereInput
    orderBy?: AnalDataSipuberOrderByWithRelationInput | AnalDataSipuberOrderByWithRelationInput[]
    cursor?: AnalDataSipuberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalDataSipuberScalarFieldEnum | AnalDataSipuberScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model CmsSetting
   */

  export type AggregateCmsSetting = {
    _count: CmsSettingCountAggregateOutputType | null
    _avg: CmsSettingAvgAggregateOutputType | null
    _sum: CmsSettingSumAggregateOutputType | null
    _min: CmsSettingMinAggregateOutputType | null
    _max: CmsSettingMaxAggregateOutputType | null
  }

  export type CmsSettingAvgAggregateOutputType = {
    id: number | null
  }

  export type CmsSettingSumAggregateOutputType = {
    id: number | null
  }

  export type CmsSettingMinAggregateOutputType = {
    id: number | null
    thumbnail: string | null
    section: string | null
    content: string | null
  }

  export type CmsSettingMaxAggregateOutputType = {
    id: number | null
    thumbnail: string | null
    section: string | null
    content: string | null
  }

  export type CmsSettingCountAggregateOutputType = {
    id: number
    thumbnail: number
    section: number
    content: number
    _all: number
  }


  export type CmsSettingAvgAggregateInputType = {
    id?: true
  }

  export type CmsSettingSumAggregateInputType = {
    id?: true
  }

  export type CmsSettingMinAggregateInputType = {
    id?: true
    thumbnail?: true
    section?: true
    content?: true
  }

  export type CmsSettingMaxAggregateInputType = {
    id?: true
    thumbnail?: true
    section?: true
    content?: true
  }

  export type CmsSettingCountAggregateInputType = {
    id?: true
    thumbnail?: true
    section?: true
    content?: true
    _all?: true
  }

  export type CmsSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsSetting to aggregate.
     */
    where?: CmsSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSettings to fetch.
     */
    orderBy?: CmsSettingOrderByWithRelationInput | CmsSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsSettings
    **/
    _count?: true | CmsSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsSettingMaxAggregateInputType
  }

  export type GetCmsSettingAggregateType<T extends CmsSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsSetting[P]>
      : GetScalarType<T[P], AggregateCmsSetting[P]>
  }




  export type CmsSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsSettingWhereInput
    orderBy?: CmsSettingOrderByWithAggregationInput | CmsSettingOrderByWithAggregationInput[]
    by: CmsSettingScalarFieldEnum[] | CmsSettingScalarFieldEnum
    having?: CmsSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsSettingCountAggregateInputType | true
    _avg?: CmsSettingAvgAggregateInputType
    _sum?: CmsSettingSumAggregateInputType
    _min?: CmsSettingMinAggregateInputType
    _max?: CmsSettingMaxAggregateInputType
  }

  export type CmsSettingGroupByOutputType = {
    id: number
    thumbnail: string
    section: string
    content: string
    _count: CmsSettingCountAggregateOutputType | null
    _avg: CmsSettingAvgAggregateOutputType | null
    _sum: CmsSettingSumAggregateOutputType | null
    _min: CmsSettingMinAggregateOutputType | null
    _max: CmsSettingMaxAggregateOutputType | null
  }

  type GetCmsSettingGroupByPayload<T extends CmsSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsSettingGroupByOutputType[P]>
            : GetScalarType<T[P], CmsSettingGroupByOutputType[P]>
        }
      >
    >


  export type CmsSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    thumbnail?: boolean
    section?: boolean
    content?: boolean
  }, ExtArgs["result"]["cmsSetting"]>

  export type CmsSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    thumbnail?: boolean
    section?: boolean
    content?: boolean
  }, ExtArgs["result"]["cmsSetting"]>

  export type CmsSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    thumbnail?: boolean
    section?: boolean
    content?: boolean
  }, ExtArgs["result"]["cmsSetting"]>

  export type CmsSettingSelectScalar = {
    id?: boolean
    thumbnail?: boolean
    section?: boolean
    content?: boolean
  }

  export type CmsSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "thumbnail" | "section" | "content", ExtArgs["result"]["cmsSetting"]>

  export type $CmsSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      thumbnail: string
      section: string
      content: string
    }, ExtArgs["result"]["cmsSetting"]>
    composites: {}
  }

  type CmsSettingGetPayload<S extends boolean | null | undefined | CmsSettingDefaultArgs> = $Result.GetResult<Prisma.$CmsSettingPayload, S>

  type CmsSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsSettingCountAggregateInputType | true
    }

  export interface CmsSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsSetting'], meta: { name: 'CmsSetting' } }
    /**
     * Find zero or one CmsSetting that matches the filter.
     * @param {CmsSettingFindUniqueArgs} args - Arguments to find a CmsSetting
     * @example
     * // Get one CmsSetting
     * const cmsSetting = await prisma.cmsSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsSettingFindUniqueArgs>(args: SelectSubset<T, CmsSettingFindUniqueArgs<ExtArgs>>): Prisma__CmsSettingClient<$Result.GetResult<Prisma.$CmsSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsSettingFindUniqueOrThrowArgs} args - Arguments to find a CmsSetting
     * @example
     * // Get one CmsSetting
     * const cmsSetting = await prisma.cmsSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsSettingClient<$Result.GetResult<Prisma.$CmsSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSettingFindFirstArgs} args - Arguments to find a CmsSetting
     * @example
     * // Get one CmsSetting
     * const cmsSetting = await prisma.cmsSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsSettingFindFirstArgs>(args?: SelectSubset<T, CmsSettingFindFirstArgs<ExtArgs>>): Prisma__CmsSettingClient<$Result.GetResult<Prisma.$CmsSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSettingFindFirstOrThrowArgs} args - Arguments to find a CmsSetting
     * @example
     * // Get one CmsSetting
     * const cmsSetting = await prisma.cmsSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsSettingClient<$Result.GetResult<Prisma.$CmsSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsSettings
     * const cmsSettings = await prisma.cmsSetting.findMany()
     * 
     * // Get first 10 CmsSettings
     * const cmsSettings = await prisma.cmsSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsSettingWithIdOnly = await prisma.cmsSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsSettingFindManyArgs>(args?: SelectSubset<T, CmsSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsSetting.
     * @param {CmsSettingCreateArgs} args - Arguments to create a CmsSetting.
     * @example
     * // Create one CmsSetting
     * const CmsSetting = await prisma.cmsSetting.create({
     *   data: {
     *     // ... data to create a CmsSetting
     *   }
     * })
     * 
     */
    create<T extends CmsSettingCreateArgs>(args: SelectSubset<T, CmsSettingCreateArgs<ExtArgs>>): Prisma__CmsSettingClient<$Result.GetResult<Prisma.$CmsSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsSettings.
     * @param {CmsSettingCreateManyArgs} args - Arguments to create many CmsSettings.
     * @example
     * // Create many CmsSettings
     * const cmsSetting = await prisma.cmsSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsSettingCreateManyArgs>(args?: SelectSubset<T, CmsSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsSettings and returns the data saved in the database.
     * @param {CmsSettingCreateManyAndReturnArgs} args - Arguments to create many CmsSettings.
     * @example
     * // Create many CmsSettings
     * const cmsSetting = await prisma.cmsSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsSettings and only return the `id`
     * const cmsSettingWithIdOnly = await prisma.cmsSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsSetting.
     * @param {CmsSettingDeleteArgs} args - Arguments to delete one CmsSetting.
     * @example
     * // Delete one CmsSetting
     * const CmsSetting = await prisma.cmsSetting.delete({
     *   where: {
     *     // ... filter to delete one CmsSetting
     *   }
     * })
     * 
     */
    delete<T extends CmsSettingDeleteArgs>(args: SelectSubset<T, CmsSettingDeleteArgs<ExtArgs>>): Prisma__CmsSettingClient<$Result.GetResult<Prisma.$CmsSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsSetting.
     * @param {CmsSettingUpdateArgs} args - Arguments to update one CmsSetting.
     * @example
     * // Update one CmsSetting
     * const cmsSetting = await prisma.cmsSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsSettingUpdateArgs>(args: SelectSubset<T, CmsSettingUpdateArgs<ExtArgs>>): Prisma__CmsSettingClient<$Result.GetResult<Prisma.$CmsSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsSettings.
     * @param {CmsSettingDeleteManyArgs} args - Arguments to filter CmsSettings to delete.
     * @example
     * // Delete a few CmsSettings
     * const { count } = await prisma.cmsSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsSettingDeleteManyArgs>(args?: SelectSubset<T, CmsSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsSettings
     * const cmsSetting = await prisma.cmsSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsSettingUpdateManyArgs>(args: SelectSubset<T, CmsSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsSettings and returns the data updated in the database.
     * @param {CmsSettingUpdateManyAndReturnArgs} args - Arguments to update many CmsSettings.
     * @example
     * // Update many CmsSettings
     * const cmsSetting = await prisma.cmsSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsSettings and only return the `id`
     * const cmsSettingWithIdOnly = await prisma.cmsSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmsSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsSetting.
     * @param {CmsSettingUpsertArgs} args - Arguments to update or create a CmsSetting.
     * @example
     * // Update or create a CmsSetting
     * const cmsSetting = await prisma.cmsSetting.upsert({
     *   create: {
     *     // ... data to create a CmsSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsSetting we want to update
     *   }
     * })
     */
    upsert<T extends CmsSettingUpsertArgs>(args: SelectSubset<T, CmsSettingUpsertArgs<ExtArgs>>): Prisma__CmsSettingClient<$Result.GetResult<Prisma.$CmsSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSettingCountArgs} args - Arguments to filter CmsSettings to count.
     * @example
     * // Count the number of CmsSettings
     * const count = await prisma.cmsSetting.count({
     *   where: {
     *     // ... the filter for the CmsSettings we want to count
     *   }
     * })
    **/
    count<T extends CmsSettingCountArgs>(
      args?: Subset<T, CmsSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CmsSettingAggregateArgs>(args: Subset<T, CmsSettingAggregateArgs>): Prisma.PrismaPromise<GetCmsSettingAggregateType<T>>

    /**
     * Group by CmsSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CmsSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsSettingGroupByArgs['orderBy'] }
        : { orderBy?: CmsSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CmsSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsSetting model
   */
  readonly fields: CmsSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmsSetting model
   */
  interface CmsSettingFieldRefs {
    readonly id: FieldRef<"CmsSetting", 'Int'>
    readonly thumbnail: FieldRef<"CmsSetting", 'String'>
    readonly section: FieldRef<"CmsSetting", 'String'>
    readonly content: FieldRef<"CmsSetting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CmsSetting findUnique
   */
  export type CmsSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSetting
     */
    select?: CmsSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSetting
     */
    omit?: CmsSettingOmit<ExtArgs> | null
    /**
     * Filter, which CmsSetting to fetch.
     */
    where: CmsSettingWhereUniqueInput
  }

  /**
   * CmsSetting findUniqueOrThrow
   */
  export type CmsSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSetting
     */
    select?: CmsSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSetting
     */
    omit?: CmsSettingOmit<ExtArgs> | null
    /**
     * Filter, which CmsSetting to fetch.
     */
    where: CmsSettingWhereUniqueInput
  }

  /**
   * CmsSetting findFirst
   */
  export type CmsSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSetting
     */
    select?: CmsSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSetting
     */
    omit?: CmsSettingOmit<ExtArgs> | null
    /**
     * Filter, which CmsSetting to fetch.
     */
    where?: CmsSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSettings to fetch.
     */
    orderBy?: CmsSettingOrderByWithRelationInput | CmsSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsSettings.
     */
    cursor?: CmsSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsSettings.
     */
    distinct?: CmsSettingScalarFieldEnum | CmsSettingScalarFieldEnum[]
  }

  /**
   * CmsSetting findFirstOrThrow
   */
  export type CmsSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSetting
     */
    select?: CmsSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSetting
     */
    omit?: CmsSettingOmit<ExtArgs> | null
    /**
     * Filter, which CmsSetting to fetch.
     */
    where?: CmsSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSettings to fetch.
     */
    orderBy?: CmsSettingOrderByWithRelationInput | CmsSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsSettings.
     */
    cursor?: CmsSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsSettings.
     */
    distinct?: CmsSettingScalarFieldEnum | CmsSettingScalarFieldEnum[]
  }

  /**
   * CmsSetting findMany
   */
  export type CmsSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSetting
     */
    select?: CmsSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSetting
     */
    omit?: CmsSettingOmit<ExtArgs> | null
    /**
     * Filter, which CmsSettings to fetch.
     */
    where?: CmsSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSettings to fetch.
     */
    orderBy?: CmsSettingOrderByWithRelationInput | CmsSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsSettings.
     */
    cursor?: CmsSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSettings.
     */
    skip?: number
    distinct?: CmsSettingScalarFieldEnum | CmsSettingScalarFieldEnum[]
  }

  /**
   * CmsSetting create
   */
  export type CmsSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSetting
     */
    select?: CmsSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSetting
     */
    omit?: CmsSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a CmsSetting.
     */
    data: XOR<CmsSettingCreateInput, CmsSettingUncheckedCreateInput>
  }

  /**
   * CmsSetting createMany
   */
  export type CmsSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsSettings.
     */
    data: CmsSettingCreateManyInput | CmsSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsSetting createManyAndReturn
   */
  export type CmsSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSetting
     */
    select?: CmsSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSetting
     */
    omit?: CmsSettingOmit<ExtArgs> | null
    /**
     * The data used to create many CmsSettings.
     */
    data: CmsSettingCreateManyInput | CmsSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsSetting update
   */
  export type CmsSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSetting
     */
    select?: CmsSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSetting
     */
    omit?: CmsSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a CmsSetting.
     */
    data: XOR<CmsSettingUpdateInput, CmsSettingUncheckedUpdateInput>
    /**
     * Choose, which CmsSetting to update.
     */
    where: CmsSettingWhereUniqueInput
  }

  /**
   * CmsSetting updateMany
   */
  export type CmsSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsSettings.
     */
    data: XOR<CmsSettingUpdateManyMutationInput, CmsSettingUncheckedUpdateManyInput>
    /**
     * Filter which CmsSettings to update
     */
    where?: CmsSettingWhereInput
    /**
     * Limit how many CmsSettings to update.
     */
    limit?: number
  }

  /**
   * CmsSetting updateManyAndReturn
   */
  export type CmsSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSetting
     */
    select?: CmsSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSetting
     */
    omit?: CmsSettingOmit<ExtArgs> | null
    /**
     * The data used to update CmsSettings.
     */
    data: XOR<CmsSettingUpdateManyMutationInput, CmsSettingUncheckedUpdateManyInput>
    /**
     * Filter which CmsSettings to update
     */
    where?: CmsSettingWhereInput
    /**
     * Limit how many CmsSettings to update.
     */
    limit?: number
  }

  /**
   * CmsSetting upsert
   */
  export type CmsSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSetting
     */
    select?: CmsSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSetting
     */
    omit?: CmsSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the CmsSetting to update in case it exists.
     */
    where: CmsSettingWhereUniqueInput
    /**
     * In case the CmsSetting found by the `where` argument doesn't exist, create a new CmsSetting with this data.
     */
    create: XOR<CmsSettingCreateInput, CmsSettingUncheckedCreateInput>
    /**
     * In case the CmsSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsSettingUpdateInput, CmsSettingUncheckedUpdateInput>
  }

  /**
   * CmsSetting delete
   */
  export type CmsSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSetting
     */
    select?: CmsSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSetting
     */
    omit?: CmsSettingOmit<ExtArgs> | null
    /**
     * Filter which CmsSetting to delete.
     */
    where: CmsSettingWhereUniqueInput
  }

  /**
   * CmsSetting deleteMany
   */
  export type CmsSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsSettings to delete
     */
    where?: CmsSettingWhereInput
    /**
     * Limit how many CmsSettings to delete.
     */
    limit?: number
  }

  /**
   * CmsSetting without action
   */
  export type CmsSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSetting
     */
    select?: CmsSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSetting
     */
    omit?: CmsSettingOmit<ExtArgs> | null
  }


  /**
   * Model PpmDataSipuber
   */

  export type AggregatePpmDataSipuber = {
    _count: PpmDataSipuberCountAggregateOutputType | null
    _avg: PpmDataSipuberAvgAggregateOutputType | null
    _sum: PpmDataSipuberSumAggregateOutputType | null
    _min: PpmDataSipuberMinAggregateOutputType | null
    _max: PpmDataSipuberMaxAggregateOutputType | null
  }

  export type PpmDataSipuberAvgAggregateOutputType = {
    id: number | null
    device_id: number | null
    co: number | null
    so: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    pm1: number | null
    pm25: number | null
    pm10: number | null
    ispu_realtime: number | null
    v_bat: number | null
  }

  export type PpmDataSipuberSumAggregateOutputType = {
    id: number | null
    device_id: number | null
    co: number | null
    so: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    pm1: number | null
    pm25: number | null
    pm10: number | null
    ispu_realtime: number | null
    v_bat: number | null
  }

  export type PpmDataSipuberMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    device_id: number | null
    location: string | null
    co: number | null
    so: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    pm1: number | null
    pm25: number | null
    pm10: number | null
    ispu_realtime: number | null
    v_bat: number | null
  }

  export type PpmDataSipuberMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    device_id: number | null
    location: string | null
    co: number | null
    so: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    pm1: number | null
    pm25: number | null
    pm10: number | null
    ispu_realtime: number | null
    v_bat: number | null
  }

  export type PpmDataSipuberCountAggregateOutputType = {
    id: number
    created_at: number
    device_id: number
    location: number
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    ispu_realtime: number
    v_bat: number
    _all: number
  }


  export type PpmDataSipuberAvgAggregateInputType = {
    id?: true
    device_id?: true
    co?: true
    so?: true
    no2?: true
    o3?: true
    nh3?: true
    pm1?: true
    pm25?: true
    pm10?: true
    ispu_realtime?: true
    v_bat?: true
  }

  export type PpmDataSipuberSumAggregateInputType = {
    id?: true
    device_id?: true
    co?: true
    so?: true
    no2?: true
    o3?: true
    nh3?: true
    pm1?: true
    pm25?: true
    pm10?: true
    ispu_realtime?: true
    v_bat?: true
  }

  export type PpmDataSipuberMinAggregateInputType = {
    id?: true
    created_at?: true
    device_id?: true
    location?: true
    co?: true
    so?: true
    no2?: true
    o3?: true
    nh3?: true
    pm1?: true
    pm25?: true
    pm10?: true
    ispu_realtime?: true
    v_bat?: true
  }

  export type PpmDataSipuberMaxAggregateInputType = {
    id?: true
    created_at?: true
    device_id?: true
    location?: true
    co?: true
    so?: true
    no2?: true
    o3?: true
    nh3?: true
    pm1?: true
    pm25?: true
    pm10?: true
    ispu_realtime?: true
    v_bat?: true
  }

  export type PpmDataSipuberCountAggregateInputType = {
    id?: true
    created_at?: true
    device_id?: true
    location?: true
    co?: true
    so?: true
    no2?: true
    o3?: true
    nh3?: true
    pm1?: true
    pm25?: true
    pm10?: true
    ispu_realtime?: true
    v_bat?: true
    _all?: true
  }

  export type PpmDataSipuberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PpmDataSipuber to aggregate.
     */
    where?: PpmDataSipuberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PpmDataSipubers to fetch.
     */
    orderBy?: PpmDataSipuberOrderByWithRelationInput | PpmDataSipuberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PpmDataSipuberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PpmDataSipubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PpmDataSipubers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PpmDataSipubers
    **/
    _count?: true | PpmDataSipuberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PpmDataSipuberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PpmDataSipuberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PpmDataSipuberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PpmDataSipuberMaxAggregateInputType
  }

  export type GetPpmDataSipuberAggregateType<T extends PpmDataSipuberAggregateArgs> = {
        [P in keyof T & keyof AggregatePpmDataSipuber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePpmDataSipuber[P]>
      : GetScalarType<T[P], AggregatePpmDataSipuber[P]>
  }




  export type PpmDataSipuberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PpmDataSipuberWhereInput
    orderBy?: PpmDataSipuberOrderByWithAggregationInput | PpmDataSipuberOrderByWithAggregationInput[]
    by: PpmDataSipuberScalarFieldEnum[] | PpmDataSipuberScalarFieldEnum
    having?: PpmDataSipuberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PpmDataSipuberCountAggregateInputType | true
    _avg?: PpmDataSipuberAvgAggregateInputType
    _sum?: PpmDataSipuberSumAggregateInputType
    _min?: PpmDataSipuberMinAggregateInputType
    _max?: PpmDataSipuberMaxAggregateInputType
  }

  export type PpmDataSipuberGroupByOutputType = {
    id: number
    created_at: Date
    device_id: number
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    ispu_realtime: number
    v_bat: number
    _count: PpmDataSipuberCountAggregateOutputType | null
    _avg: PpmDataSipuberAvgAggregateOutputType | null
    _sum: PpmDataSipuberSumAggregateOutputType | null
    _min: PpmDataSipuberMinAggregateOutputType | null
    _max: PpmDataSipuberMaxAggregateOutputType | null
  }

  type GetPpmDataSipuberGroupByPayload<T extends PpmDataSipuberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PpmDataSipuberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PpmDataSipuberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PpmDataSipuberGroupByOutputType[P]>
            : GetScalarType<T[P], PpmDataSipuberGroupByOutputType[P]>
        }
      >
    >


  export type PpmDataSipuberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    device_id?: boolean
    location?: boolean
    co?: boolean
    so?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    pm1?: boolean
    pm25?: boolean
    pm10?: boolean
    ispu_realtime?: boolean
    v_bat?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ppmDataSipuber"]>

  export type PpmDataSipuberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    device_id?: boolean
    location?: boolean
    co?: boolean
    so?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    pm1?: boolean
    pm25?: boolean
    pm10?: boolean
    ispu_realtime?: boolean
    v_bat?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ppmDataSipuber"]>

  export type PpmDataSipuberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    device_id?: boolean
    location?: boolean
    co?: boolean
    so?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    pm1?: boolean
    pm25?: boolean
    pm10?: boolean
    ispu_realtime?: boolean
    v_bat?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ppmDataSipuber"]>

  export type PpmDataSipuberSelectScalar = {
    id?: boolean
    created_at?: boolean
    device_id?: boolean
    location?: boolean
    co?: boolean
    so?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    pm1?: boolean
    pm25?: boolean
    pm10?: boolean
    ispu_realtime?: boolean
    v_bat?: boolean
  }

  export type PpmDataSipuberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "device_id" | "location" | "co" | "so" | "no2" | "o3" | "nh3" | "pm1" | "pm25" | "pm10" | "ispu_realtime" | "v_bat", ExtArgs["result"]["ppmDataSipuber"]>
  export type PpmDataSipuberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type PpmDataSipuberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type PpmDataSipuberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $PpmDataSipuberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PpmDataSipuber"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      device_id: number
      location: string
      co: number
      so: number
      no2: number
      o3: number
      nh3: number
      pm1: number
      pm25: number
      pm10: number
      ispu_realtime: number
      v_bat: number
    }, ExtArgs["result"]["ppmDataSipuber"]>
    composites: {}
  }

  type PpmDataSipuberGetPayload<S extends boolean | null | undefined | PpmDataSipuberDefaultArgs> = $Result.GetResult<Prisma.$PpmDataSipuberPayload, S>

  type PpmDataSipuberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PpmDataSipuberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PpmDataSipuberCountAggregateInputType | true
    }

  export interface PpmDataSipuberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PpmDataSipuber'], meta: { name: 'PpmDataSipuber' } }
    /**
     * Find zero or one PpmDataSipuber that matches the filter.
     * @param {PpmDataSipuberFindUniqueArgs} args - Arguments to find a PpmDataSipuber
     * @example
     * // Get one PpmDataSipuber
     * const ppmDataSipuber = await prisma.ppmDataSipuber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PpmDataSipuberFindUniqueArgs>(args: SelectSubset<T, PpmDataSipuberFindUniqueArgs<ExtArgs>>): Prisma__PpmDataSipuberClient<$Result.GetResult<Prisma.$PpmDataSipuberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PpmDataSipuber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PpmDataSipuberFindUniqueOrThrowArgs} args - Arguments to find a PpmDataSipuber
     * @example
     * // Get one PpmDataSipuber
     * const ppmDataSipuber = await prisma.ppmDataSipuber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PpmDataSipuberFindUniqueOrThrowArgs>(args: SelectSubset<T, PpmDataSipuberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PpmDataSipuberClient<$Result.GetResult<Prisma.$PpmDataSipuberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PpmDataSipuber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PpmDataSipuberFindFirstArgs} args - Arguments to find a PpmDataSipuber
     * @example
     * // Get one PpmDataSipuber
     * const ppmDataSipuber = await prisma.ppmDataSipuber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PpmDataSipuberFindFirstArgs>(args?: SelectSubset<T, PpmDataSipuberFindFirstArgs<ExtArgs>>): Prisma__PpmDataSipuberClient<$Result.GetResult<Prisma.$PpmDataSipuberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PpmDataSipuber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PpmDataSipuberFindFirstOrThrowArgs} args - Arguments to find a PpmDataSipuber
     * @example
     * // Get one PpmDataSipuber
     * const ppmDataSipuber = await prisma.ppmDataSipuber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PpmDataSipuberFindFirstOrThrowArgs>(args?: SelectSubset<T, PpmDataSipuberFindFirstOrThrowArgs<ExtArgs>>): Prisma__PpmDataSipuberClient<$Result.GetResult<Prisma.$PpmDataSipuberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PpmDataSipubers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PpmDataSipuberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PpmDataSipubers
     * const ppmDataSipubers = await prisma.ppmDataSipuber.findMany()
     * 
     * // Get first 10 PpmDataSipubers
     * const ppmDataSipubers = await prisma.ppmDataSipuber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ppmDataSipuberWithIdOnly = await prisma.ppmDataSipuber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PpmDataSipuberFindManyArgs>(args?: SelectSubset<T, PpmDataSipuberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PpmDataSipuberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PpmDataSipuber.
     * @param {PpmDataSipuberCreateArgs} args - Arguments to create a PpmDataSipuber.
     * @example
     * // Create one PpmDataSipuber
     * const PpmDataSipuber = await prisma.ppmDataSipuber.create({
     *   data: {
     *     // ... data to create a PpmDataSipuber
     *   }
     * })
     * 
     */
    create<T extends PpmDataSipuberCreateArgs>(args: SelectSubset<T, PpmDataSipuberCreateArgs<ExtArgs>>): Prisma__PpmDataSipuberClient<$Result.GetResult<Prisma.$PpmDataSipuberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PpmDataSipubers.
     * @param {PpmDataSipuberCreateManyArgs} args - Arguments to create many PpmDataSipubers.
     * @example
     * // Create many PpmDataSipubers
     * const ppmDataSipuber = await prisma.ppmDataSipuber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PpmDataSipuberCreateManyArgs>(args?: SelectSubset<T, PpmDataSipuberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PpmDataSipubers and returns the data saved in the database.
     * @param {PpmDataSipuberCreateManyAndReturnArgs} args - Arguments to create many PpmDataSipubers.
     * @example
     * // Create many PpmDataSipubers
     * const ppmDataSipuber = await prisma.ppmDataSipuber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PpmDataSipubers and only return the `id`
     * const ppmDataSipuberWithIdOnly = await prisma.ppmDataSipuber.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PpmDataSipuberCreateManyAndReturnArgs>(args?: SelectSubset<T, PpmDataSipuberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PpmDataSipuberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PpmDataSipuber.
     * @param {PpmDataSipuberDeleteArgs} args - Arguments to delete one PpmDataSipuber.
     * @example
     * // Delete one PpmDataSipuber
     * const PpmDataSipuber = await prisma.ppmDataSipuber.delete({
     *   where: {
     *     // ... filter to delete one PpmDataSipuber
     *   }
     * })
     * 
     */
    delete<T extends PpmDataSipuberDeleteArgs>(args: SelectSubset<T, PpmDataSipuberDeleteArgs<ExtArgs>>): Prisma__PpmDataSipuberClient<$Result.GetResult<Prisma.$PpmDataSipuberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PpmDataSipuber.
     * @param {PpmDataSipuberUpdateArgs} args - Arguments to update one PpmDataSipuber.
     * @example
     * // Update one PpmDataSipuber
     * const ppmDataSipuber = await prisma.ppmDataSipuber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PpmDataSipuberUpdateArgs>(args: SelectSubset<T, PpmDataSipuberUpdateArgs<ExtArgs>>): Prisma__PpmDataSipuberClient<$Result.GetResult<Prisma.$PpmDataSipuberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PpmDataSipubers.
     * @param {PpmDataSipuberDeleteManyArgs} args - Arguments to filter PpmDataSipubers to delete.
     * @example
     * // Delete a few PpmDataSipubers
     * const { count } = await prisma.ppmDataSipuber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PpmDataSipuberDeleteManyArgs>(args?: SelectSubset<T, PpmDataSipuberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PpmDataSipubers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PpmDataSipuberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PpmDataSipubers
     * const ppmDataSipuber = await prisma.ppmDataSipuber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PpmDataSipuberUpdateManyArgs>(args: SelectSubset<T, PpmDataSipuberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PpmDataSipubers and returns the data updated in the database.
     * @param {PpmDataSipuberUpdateManyAndReturnArgs} args - Arguments to update many PpmDataSipubers.
     * @example
     * // Update many PpmDataSipubers
     * const ppmDataSipuber = await prisma.ppmDataSipuber.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PpmDataSipubers and only return the `id`
     * const ppmDataSipuberWithIdOnly = await prisma.ppmDataSipuber.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PpmDataSipuberUpdateManyAndReturnArgs>(args: SelectSubset<T, PpmDataSipuberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PpmDataSipuberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PpmDataSipuber.
     * @param {PpmDataSipuberUpsertArgs} args - Arguments to update or create a PpmDataSipuber.
     * @example
     * // Update or create a PpmDataSipuber
     * const ppmDataSipuber = await prisma.ppmDataSipuber.upsert({
     *   create: {
     *     // ... data to create a PpmDataSipuber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PpmDataSipuber we want to update
     *   }
     * })
     */
    upsert<T extends PpmDataSipuberUpsertArgs>(args: SelectSubset<T, PpmDataSipuberUpsertArgs<ExtArgs>>): Prisma__PpmDataSipuberClient<$Result.GetResult<Prisma.$PpmDataSipuberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PpmDataSipubers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PpmDataSipuberCountArgs} args - Arguments to filter PpmDataSipubers to count.
     * @example
     * // Count the number of PpmDataSipubers
     * const count = await prisma.ppmDataSipuber.count({
     *   where: {
     *     // ... the filter for the PpmDataSipubers we want to count
     *   }
     * })
    **/
    count<T extends PpmDataSipuberCountArgs>(
      args?: Subset<T, PpmDataSipuberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PpmDataSipuberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PpmDataSipuber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PpmDataSipuberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PpmDataSipuberAggregateArgs>(args: Subset<T, PpmDataSipuberAggregateArgs>): Prisma.PrismaPromise<GetPpmDataSipuberAggregateType<T>>

    /**
     * Group by PpmDataSipuber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PpmDataSipuberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PpmDataSipuberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PpmDataSipuberGroupByArgs['orderBy'] }
        : { orderBy?: PpmDataSipuberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PpmDataSipuberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPpmDataSipuberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PpmDataSipuber model
   */
  readonly fields: PpmDataSipuberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PpmDataSipuber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PpmDataSipuberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PpmDataSipuber model
   */
  interface PpmDataSipuberFieldRefs {
    readonly id: FieldRef<"PpmDataSipuber", 'Int'>
    readonly created_at: FieldRef<"PpmDataSipuber", 'DateTime'>
    readonly device_id: FieldRef<"PpmDataSipuber", 'Int'>
    readonly location: FieldRef<"PpmDataSipuber", 'String'>
    readonly co: FieldRef<"PpmDataSipuber", 'Float'>
    readonly so: FieldRef<"PpmDataSipuber", 'Float'>
    readonly no2: FieldRef<"PpmDataSipuber", 'Float'>
    readonly o3: FieldRef<"PpmDataSipuber", 'Float'>
    readonly nh3: FieldRef<"PpmDataSipuber", 'Float'>
    readonly pm1: FieldRef<"PpmDataSipuber", 'Float'>
    readonly pm25: FieldRef<"PpmDataSipuber", 'Float'>
    readonly pm10: FieldRef<"PpmDataSipuber", 'Float'>
    readonly ispu_realtime: FieldRef<"PpmDataSipuber", 'Int'>
    readonly v_bat: FieldRef<"PpmDataSipuber", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * PpmDataSipuber findUnique
   */
  export type PpmDataSipuberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PpmDataSipuber
     */
    select?: PpmDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PpmDataSipuber
     */
    omit?: PpmDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PpmDataSipuberInclude<ExtArgs> | null
    /**
     * Filter, which PpmDataSipuber to fetch.
     */
    where: PpmDataSipuberWhereUniqueInput
  }

  /**
   * PpmDataSipuber findUniqueOrThrow
   */
  export type PpmDataSipuberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PpmDataSipuber
     */
    select?: PpmDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PpmDataSipuber
     */
    omit?: PpmDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PpmDataSipuberInclude<ExtArgs> | null
    /**
     * Filter, which PpmDataSipuber to fetch.
     */
    where: PpmDataSipuberWhereUniqueInput
  }

  /**
   * PpmDataSipuber findFirst
   */
  export type PpmDataSipuberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PpmDataSipuber
     */
    select?: PpmDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PpmDataSipuber
     */
    omit?: PpmDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PpmDataSipuberInclude<ExtArgs> | null
    /**
     * Filter, which PpmDataSipuber to fetch.
     */
    where?: PpmDataSipuberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PpmDataSipubers to fetch.
     */
    orderBy?: PpmDataSipuberOrderByWithRelationInput | PpmDataSipuberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PpmDataSipubers.
     */
    cursor?: PpmDataSipuberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PpmDataSipubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PpmDataSipubers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PpmDataSipubers.
     */
    distinct?: PpmDataSipuberScalarFieldEnum | PpmDataSipuberScalarFieldEnum[]
  }

  /**
   * PpmDataSipuber findFirstOrThrow
   */
  export type PpmDataSipuberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PpmDataSipuber
     */
    select?: PpmDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PpmDataSipuber
     */
    omit?: PpmDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PpmDataSipuberInclude<ExtArgs> | null
    /**
     * Filter, which PpmDataSipuber to fetch.
     */
    where?: PpmDataSipuberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PpmDataSipubers to fetch.
     */
    orderBy?: PpmDataSipuberOrderByWithRelationInput | PpmDataSipuberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PpmDataSipubers.
     */
    cursor?: PpmDataSipuberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PpmDataSipubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PpmDataSipubers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PpmDataSipubers.
     */
    distinct?: PpmDataSipuberScalarFieldEnum | PpmDataSipuberScalarFieldEnum[]
  }

  /**
   * PpmDataSipuber findMany
   */
  export type PpmDataSipuberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PpmDataSipuber
     */
    select?: PpmDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PpmDataSipuber
     */
    omit?: PpmDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PpmDataSipuberInclude<ExtArgs> | null
    /**
     * Filter, which PpmDataSipubers to fetch.
     */
    where?: PpmDataSipuberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PpmDataSipubers to fetch.
     */
    orderBy?: PpmDataSipuberOrderByWithRelationInput | PpmDataSipuberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PpmDataSipubers.
     */
    cursor?: PpmDataSipuberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PpmDataSipubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PpmDataSipubers.
     */
    skip?: number
    distinct?: PpmDataSipuberScalarFieldEnum | PpmDataSipuberScalarFieldEnum[]
  }

  /**
   * PpmDataSipuber create
   */
  export type PpmDataSipuberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PpmDataSipuber
     */
    select?: PpmDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PpmDataSipuber
     */
    omit?: PpmDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PpmDataSipuberInclude<ExtArgs> | null
    /**
     * The data needed to create a PpmDataSipuber.
     */
    data: XOR<PpmDataSipuberCreateInput, PpmDataSipuberUncheckedCreateInput>
  }

  /**
   * PpmDataSipuber createMany
   */
  export type PpmDataSipuberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PpmDataSipubers.
     */
    data: PpmDataSipuberCreateManyInput | PpmDataSipuberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PpmDataSipuber createManyAndReturn
   */
  export type PpmDataSipuberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PpmDataSipuber
     */
    select?: PpmDataSipuberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PpmDataSipuber
     */
    omit?: PpmDataSipuberOmit<ExtArgs> | null
    /**
     * The data used to create many PpmDataSipubers.
     */
    data: PpmDataSipuberCreateManyInput | PpmDataSipuberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PpmDataSipuberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PpmDataSipuber update
   */
  export type PpmDataSipuberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PpmDataSipuber
     */
    select?: PpmDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PpmDataSipuber
     */
    omit?: PpmDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PpmDataSipuberInclude<ExtArgs> | null
    /**
     * The data needed to update a PpmDataSipuber.
     */
    data: XOR<PpmDataSipuberUpdateInput, PpmDataSipuberUncheckedUpdateInput>
    /**
     * Choose, which PpmDataSipuber to update.
     */
    where: PpmDataSipuberWhereUniqueInput
  }

  /**
   * PpmDataSipuber updateMany
   */
  export type PpmDataSipuberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PpmDataSipubers.
     */
    data: XOR<PpmDataSipuberUpdateManyMutationInput, PpmDataSipuberUncheckedUpdateManyInput>
    /**
     * Filter which PpmDataSipubers to update
     */
    where?: PpmDataSipuberWhereInput
    /**
     * Limit how many PpmDataSipubers to update.
     */
    limit?: number
  }

  /**
   * PpmDataSipuber updateManyAndReturn
   */
  export type PpmDataSipuberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PpmDataSipuber
     */
    select?: PpmDataSipuberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PpmDataSipuber
     */
    omit?: PpmDataSipuberOmit<ExtArgs> | null
    /**
     * The data used to update PpmDataSipubers.
     */
    data: XOR<PpmDataSipuberUpdateManyMutationInput, PpmDataSipuberUncheckedUpdateManyInput>
    /**
     * Filter which PpmDataSipubers to update
     */
    where?: PpmDataSipuberWhereInput
    /**
     * Limit how many PpmDataSipubers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PpmDataSipuberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PpmDataSipuber upsert
   */
  export type PpmDataSipuberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PpmDataSipuber
     */
    select?: PpmDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PpmDataSipuber
     */
    omit?: PpmDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PpmDataSipuberInclude<ExtArgs> | null
    /**
     * The filter to search for the PpmDataSipuber to update in case it exists.
     */
    where: PpmDataSipuberWhereUniqueInput
    /**
     * In case the PpmDataSipuber found by the `where` argument doesn't exist, create a new PpmDataSipuber with this data.
     */
    create: XOR<PpmDataSipuberCreateInput, PpmDataSipuberUncheckedCreateInput>
    /**
     * In case the PpmDataSipuber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PpmDataSipuberUpdateInput, PpmDataSipuberUncheckedUpdateInput>
  }

  /**
   * PpmDataSipuber delete
   */
  export type PpmDataSipuberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PpmDataSipuber
     */
    select?: PpmDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PpmDataSipuber
     */
    omit?: PpmDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PpmDataSipuberInclude<ExtArgs> | null
    /**
     * Filter which PpmDataSipuber to delete.
     */
    where: PpmDataSipuberWhereUniqueInput
  }

  /**
   * PpmDataSipuber deleteMany
   */
  export type PpmDataSipuberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PpmDataSipubers to delete
     */
    where?: PpmDataSipuberWhereInput
    /**
     * Limit how many PpmDataSipubers to delete.
     */
    limit?: number
  }

  /**
   * PpmDataSipuber without action
   */
  export type PpmDataSipuberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PpmDataSipuber
     */
    select?: PpmDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PpmDataSipuber
     */
    omit?: PpmDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PpmDataSipuberInclude<ExtArgs> | null
  }


  /**
   * Model DailyDataSipuber
   */

  export type AggregateDailyDataSipuber = {
    _count: DailyDataSipuberCountAggregateOutputType | null
    _avg: DailyDataSipuberAvgAggregateOutputType | null
    _sum: DailyDataSipuberSumAggregateOutputType | null
    _min: DailyDataSipuberMinAggregateOutputType | null
    _max: DailyDataSipuberMaxAggregateOutputType | null
  }

  export type DailyDataSipuberAvgAggregateOutputType = {
    id: number | null
    co: number | null
    so: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    pm1: number | null
    pm25: number | null
    pm10: number | null
    ispu_daily: number | null
    device_id: number | null
  }

  export type DailyDataSipuberSumAggregateOutputType = {
    id: number | null
    co: number | null
    so: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    pm1: number | null
    pm25: number | null
    pm10: number | null
    ispu_daily: number | null
    device_id: number | null
  }

  export type DailyDataSipuberMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    location: string | null
    co: number | null
    so: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    pm1: number | null
    pm25: number | null
    pm10: number | null
    ispu_daily: number | null
    device_id: number | null
  }

  export type DailyDataSipuberMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    location: string | null
    co: number | null
    so: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    pm1: number | null
    pm25: number | null
    pm10: number | null
    ispu_daily: number | null
    device_id: number | null
  }

  export type DailyDataSipuberCountAggregateOutputType = {
    id: number
    created_at: number
    location: number
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    ispu_daily: number
    device_id: number
    _all: number
  }


  export type DailyDataSipuberAvgAggregateInputType = {
    id?: true
    co?: true
    so?: true
    no2?: true
    o3?: true
    nh3?: true
    pm1?: true
    pm25?: true
    pm10?: true
    ispu_daily?: true
    device_id?: true
  }

  export type DailyDataSipuberSumAggregateInputType = {
    id?: true
    co?: true
    so?: true
    no2?: true
    o3?: true
    nh3?: true
    pm1?: true
    pm25?: true
    pm10?: true
    ispu_daily?: true
    device_id?: true
  }

  export type DailyDataSipuberMinAggregateInputType = {
    id?: true
    created_at?: true
    location?: true
    co?: true
    so?: true
    no2?: true
    o3?: true
    nh3?: true
    pm1?: true
    pm25?: true
    pm10?: true
    ispu_daily?: true
    device_id?: true
  }

  export type DailyDataSipuberMaxAggregateInputType = {
    id?: true
    created_at?: true
    location?: true
    co?: true
    so?: true
    no2?: true
    o3?: true
    nh3?: true
    pm1?: true
    pm25?: true
    pm10?: true
    ispu_daily?: true
    device_id?: true
  }

  export type DailyDataSipuberCountAggregateInputType = {
    id?: true
    created_at?: true
    location?: true
    co?: true
    so?: true
    no2?: true
    o3?: true
    nh3?: true
    pm1?: true
    pm25?: true
    pm10?: true
    ispu_daily?: true
    device_id?: true
    _all?: true
  }

  export type DailyDataSipuberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyDataSipuber to aggregate.
     */
    where?: DailyDataSipuberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyDataSipubers to fetch.
     */
    orderBy?: DailyDataSipuberOrderByWithRelationInput | DailyDataSipuberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyDataSipuberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyDataSipubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyDataSipubers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyDataSipubers
    **/
    _count?: true | DailyDataSipuberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyDataSipuberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyDataSipuberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyDataSipuberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyDataSipuberMaxAggregateInputType
  }

  export type GetDailyDataSipuberAggregateType<T extends DailyDataSipuberAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyDataSipuber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyDataSipuber[P]>
      : GetScalarType<T[P], AggregateDailyDataSipuber[P]>
  }




  export type DailyDataSipuberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyDataSipuberWhereInput
    orderBy?: DailyDataSipuberOrderByWithAggregationInput | DailyDataSipuberOrderByWithAggregationInput[]
    by: DailyDataSipuberScalarFieldEnum[] | DailyDataSipuberScalarFieldEnum
    having?: DailyDataSipuberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyDataSipuberCountAggregateInputType | true
    _avg?: DailyDataSipuberAvgAggregateInputType
    _sum?: DailyDataSipuberSumAggregateInputType
    _min?: DailyDataSipuberMinAggregateInputType
    _max?: DailyDataSipuberMaxAggregateInputType
  }

  export type DailyDataSipuberGroupByOutputType = {
    id: number
    created_at: Date
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    ispu_daily: number
    device_id: number
    _count: DailyDataSipuberCountAggregateOutputType | null
    _avg: DailyDataSipuberAvgAggregateOutputType | null
    _sum: DailyDataSipuberSumAggregateOutputType | null
    _min: DailyDataSipuberMinAggregateOutputType | null
    _max: DailyDataSipuberMaxAggregateOutputType | null
  }

  type GetDailyDataSipuberGroupByPayload<T extends DailyDataSipuberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyDataSipuberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyDataSipuberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyDataSipuberGroupByOutputType[P]>
            : GetScalarType<T[P], DailyDataSipuberGroupByOutputType[P]>
        }
      >
    >


  export type DailyDataSipuberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    location?: boolean
    co?: boolean
    so?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    pm1?: boolean
    pm25?: boolean
    pm10?: boolean
    ispu_daily?: boolean
    device_id?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyDataSipuber"]>

  export type DailyDataSipuberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    location?: boolean
    co?: boolean
    so?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    pm1?: boolean
    pm25?: boolean
    pm10?: boolean
    ispu_daily?: boolean
    device_id?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyDataSipuber"]>

  export type DailyDataSipuberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    location?: boolean
    co?: boolean
    so?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    pm1?: boolean
    pm25?: boolean
    pm10?: boolean
    ispu_daily?: boolean
    device_id?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyDataSipuber"]>

  export type DailyDataSipuberSelectScalar = {
    id?: boolean
    created_at?: boolean
    location?: boolean
    co?: boolean
    so?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    pm1?: boolean
    pm25?: boolean
    pm10?: boolean
    ispu_daily?: boolean
    device_id?: boolean
  }

  export type DailyDataSipuberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "location" | "co" | "so" | "no2" | "o3" | "nh3" | "pm1" | "pm25" | "pm10" | "ispu_daily" | "device_id", ExtArgs["result"]["dailyDataSipuber"]>
  export type DailyDataSipuberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type DailyDataSipuberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type DailyDataSipuberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $DailyDataSipuberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyDataSipuber"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      location: string
      co: number
      so: number
      no2: number
      o3: number
      nh3: number
      pm1: number
      pm25: number
      pm10: number
      ispu_daily: number
      device_id: number
    }, ExtArgs["result"]["dailyDataSipuber"]>
    composites: {}
  }

  type DailyDataSipuberGetPayload<S extends boolean | null | undefined | DailyDataSipuberDefaultArgs> = $Result.GetResult<Prisma.$DailyDataSipuberPayload, S>

  type DailyDataSipuberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyDataSipuberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyDataSipuberCountAggregateInputType | true
    }

  export interface DailyDataSipuberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyDataSipuber'], meta: { name: 'DailyDataSipuber' } }
    /**
     * Find zero or one DailyDataSipuber that matches the filter.
     * @param {DailyDataSipuberFindUniqueArgs} args - Arguments to find a DailyDataSipuber
     * @example
     * // Get one DailyDataSipuber
     * const dailyDataSipuber = await prisma.dailyDataSipuber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyDataSipuberFindUniqueArgs>(args: SelectSubset<T, DailyDataSipuberFindUniqueArgs<ExtArgs>>): Prisma__DailyDataSipuberClient<$Result.GetResult<Prisma.$DailyDataSipuberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyDataSipuber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyDataSipuberFindUniqueOrThrowArgs} args - Arguments to find a DailyDataSipuber
     * @example
     * // Get one DailyDataSipuber
     * const dailyDataSipuber = await prisma.dailyDataSipuber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyDataSipuberFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyDataSipuberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyDataSipuberClient<$Result.GetResult<Prisma.$DailyDataSipuberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyDataSipuber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyDataSipuberFindFirstArgs} args - Arguments to find a DailyDataSipuber
     * @example
     * // Get one DailyDataSipuber
     * const dailyDataSipuber = await prisma.dailyDataSipuber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyDataSipuberFindFirstArgs>(args?: SelectSubset<T, DailyDataSipuberFindFirstArgs<ExtArgs>>): Prisma__DailyDataSipuberClient<$Result.GetResult<Prisma.$DailyDataSipuberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyDataSipuber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyDataSipuberFindFirstOrThrowArgs} args - Arguments to find a DailyDataSipuber
     * @example
     * // Get one DailyDataSipuber
     * const dailyDataSipuber = await prisma.dailyDataSipuber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyDataSipuberFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyDataSipuberFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyDataSipuberClient<$Result.GetResult<Prisma.$DailyDataSipuberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyDataSipubers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyDataSipuberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyDataSipubers
     * const dailyDataSipubers = await prisma.dailyDataSipuber.findMany()
     * 
     * // Get first 10 DailyDataSipubers
     * const dailyDataSipubers = await prisma.dailyDataSipuber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyDataSipuberWithIdOnly = await prisma.dailyDataSipuber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyDataSipuberFindManyArgs>(args?: SelectSubset<T, DailyDataSipuberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyDataSipuberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyDataSipuber.
     * @param {DailyDataSipuberCreateArgs} args - Arguments to create a DailyDataSipuber.
     * @example
     * // Create one DailyDataSipuber
     * const DailyDataSipuber = await prisma.dailyDataSipuber.create({
     *   data: {
     *     // ... data to create a DailyDataSipuber
     *   }
     * })
     * 
     */
    create<T extends DailyDataSipuberCreateArgs>(args: SelectSubset<T, DailyDataSipuberCreateArgs<ExtArgs>>): Prisma__DailyDataSipuberClient<$Result.GetResult<Prisma.$DailyDataSipuberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyDataSipubers.
     * @param {DailyDataSipuberCreateManyArgs} args - Arguments to create many DailyDataSipubers.
     * @example
     * // Create many DailyDataSipubers
     * const dailyDataSipuber = await prisma.dailyDataSipuber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyDataSipuberCreateManyArgs>(args?: SelectSubset<T, DailyDataSipuberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyDataSipubers and returns the data saved in the database.
     * @param {DailyDataSipuberCreateManyAndReturnArgs} args - Arguments to create many DailyDataSipubers.
     * @example
     * // Create many DailyDataSipubers
     * const dailyDataSipuber = await prisma.dailyDataSipuber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyDataSipubers and only return the `id`
     * const dailyDataSipuberWithIdOnly = await prisma.dailyDataSipuber.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyDataSipuberCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyDataSipuberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyDataSipuberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyDataSipuber.
     * @param {DailyDataSipuberDeleteArgs} args - Arguments to delete one DailyDataSipuber.
     * @example
     * // Delete one DailyDataSipuber
     * const DailyDataSipuber = await prisma.dailyDataSipuber.delete({
     *   where: {
     *     // ... filter to delete one DailyDataSipuber
     *   }
     * })
     * 
     */
    delete<T extends DailyDataSipuberDeleteArgs>(args: SelectSubset<T, DailyDataSipuberDeleteArgs<ExtArgs>>): Prisma__DailyDataSipuberClient<$Result.GetResult<Prisma.$DailyDataSipuberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyDataSipuber.
     * @param {DailyDataSipuberUpdateArgs} args - Arguments to update one DailyDataSipuber.
     * @example
     * // Update one DailyDataSipuber
     * const dailyDataSipuber = await prisma.dailyDataSipuber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyDataSipuberUpdateArgs>(args: SelectSubset<T, DailyDataSipuberUpdateArgs<ExtArgs>>): Prisma__DailyDataSipuberClient<$Result.GetResult<Prisma.$DailyDataSipuberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyDataSipubers.
     * @param {DailyDataSipuberDeleteManyArgs} args - Arguments to filter DailyDataSipubers to delete.
     * @example
     * // Delete a few DailyDataSipubers
     * const { count } = await prisma.dailyDataSipuber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyDataSipuberDeleteManyArgs>(args?: SelectSubset<T, DailyDataSipuberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyDataSipubers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyDataSipuberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyDataSipubers
     * const dailyDataSipuber = await prisma.dailyDataSipuber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyDataSipuberUpdateManyArgs>(args: SelectSubset<T, DailyDataSipuberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyDataSipubers and returns the data updated in the database.
     * @param {DailyDataSipuberUpdateManyAndReturnArgs} args - Arguments to update many DailyDataSipubers.
     * @example
     * // Update many DailyDataSipubers
     * const dailyDataSipuber = await prisma.dailyDataSipuber.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyDataSipubers and only return the `id`
     * const dailyDataSipuberWithIdOnly = await prisma.dailyDataSipuber.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyDataSipuberUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyDataSipuberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyDataSipuberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyDataSipuber.
     * @param {DailyDataSipuberUpsertArgs} args - Arguments to update or create a DailyDataSipuber.
     * @example
     * // Update or create a DailyDataSipuber
     * const dailyDataSipuber = await prisma.dailyDataSipuber.upsert({
     *   create: {
     *     // ... data to create a DailyDataSipuber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyDataSipuber we want to update
     *   }
     * })
     */
    upsert<T extends DailyDataSipuberUpsertArgs>(args: SelectSubset<T, DailyDataSipuberUpsertArgs<ExtArgs>>): Prisma__DailyDataSipuberClient<$Result.GetResult<Prisma.$DailyDataSipuberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyDataSipubers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyDataSipuberCountArgs} args - Arguments to filter DailyDataSipubers to count.
     * @example
     * // Count the number of DailyDataSipubers
     * const count = await prisma.dailyDataSipuber.count({
     *   where: {
     *     // ... the filter for the DailyDataSipubers we want to count
     *   }
     * })
    **/
    count<T extends DailyDataSipuberCountArgs>(
      args?: Subset<T, DailyDataSipuberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyDataSipuberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyDataSipuber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyDataSipuberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyDataSipuberAggregateArgs>(args: Subset<T, DailyDataSipuberAggregateArgs>): Prisma.PrismaPromise<GetDailyDataSipuberAggregateType<T>>

    /**
     * Group by DailyDataSipuber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyDataSipuberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyDataSipuberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyDataSipuberGroupByArgs['orderBy'] }
        : { orderBy?: DailyDataSipuberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyDataSipuberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyDataSipuberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyDataSipuber model
   */
  readonly fields: DailyDataSipuberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyDataSipuber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyDataSipuberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyDataSipuber model
   */
  interface DailyDataSipuberFieldRefs {
    readonly id: FieldRef<"DailyDataSipuber", 'Int'>
    readonly created_at: FieldRef<"DailyDataSipuber", 'DateTime'>
    readonly location: FieldRef<"DailyDataSipuber", 'String'>
    readonly co: FieldRef<"DailyDataSipuber", 'Float'>
    readonly so: FieldRef<"DailyDataSipuber", 'Float'>
    readonly no2: FieldRef<"DailyDataSipuber", 'Float'>
    readonly o3: FieldRef<"DailyDataSipuber", 'Float'>
    readonly nh3: FieldRef<"DailyDataSipuber", 'Float'>
    readonly pm1: FieldRef<"DailyDataSipuber", 'Float'>
    readonly pm25: FieldRef<"DailyDataSipuber", 'Float'>
    readonly pm10: FieldRef<"DailyDataSipuber", 'Float'>
    readonly ispu_daily: FieldRef<"DailyDataSipuber", 'Int'>
    readonly device_id: FieldRef<"DailyDataSipuber", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DailyDataSipuber findUnique
   */
  export type DailyDataSipuberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDataSipuber
     */
    select?: DailyDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDataSipuber
     */
    omit?: DailyDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDataSipuberInclude<ExtArgs> | null
    /**
     * Filter, which DailyDataSipuber to fetch.
     */
    where: DailyDataSipuberWhereUniqueInput
  }

  /**
   * DailyDataSipuber findUniqueOrThrow
   */
  export type DailyDataSipuberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDataSipuber
     */
    select?: DailyDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDataSipuber
     */
    omit?: DailyDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDataSipuberInclude<ExtArgs> | null
    /**
     * Filter, which DailyDataSipuber to fetch.
     */
    where: DailyDataSipuberWhereUniqueInput
  }

  /**
   * DailyDataSipuber findFirst
   */
  export type DailyDataSipuberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDataSipuber
     */
    select?: DailyDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDataSipuber
     */
    omit?: DailyDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDataSipuberInclude<ExtArgs> | null
    /**
     * Filter, which DailyDataSipuber to fetch.
     */
    where?: DailyDataSipuberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyDataSipubers to fetch.
     */
    orderBy?: DailyDataSipuberOrderByWithRelationInput | DailyDataSipuberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyDataSipubers.
     */
    cursor?: DailyDataSipuberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyDataSipubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyDataSipubers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyDataSipubers.
     */
    distinct?: DailyDataSipuberScalarFieldEnum | DailyDataSipuberScalarFieldEnum[]
  }

  /**
   * DailyDataSipuber findFirstOrThrow
   */
  export type DailyDataSipuberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDataSipuber
     */
    select?: DailyDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDataSipuber
     */
    omit?: DailyDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDataSipuberInclude<ExtArgs> | null
    /**
     * Filter, which DailyDataSipuber to fetch.
     */
    where?: DailyDataSipuberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyDataSipubers to fetch.
     */
    orderBy?: DailyDataSipuberOrderByWithRelationInput | DailyDataSipuberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyDataSipubers.
     */
    cursor?: DailyDataSipuberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyDataSipubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyDataSipubers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyDataSipubers.
     */
    distinct?: DailyDataSipuberScalarFieldEnum | DailyDataSipuberScalarFieldEnum[]
  }

  /**
   * DailyDataSipuber findMany
   */
  export type DailyDataSipuberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDataSipuber
     */
    select?: DailyDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDataSipuber
     */
    omit?: DailyDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDataSipuberInclude<ExtArgs> | null
    /**
     * Filter, which DailyDataSipubers to fetch.
     */
    where?: DailyDataSipuberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyDataSipubers to fetch.
     */
    orderBy?: DailyDataSipuberOrderByWithRelationInput | DailyDataSipuberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyDataSipubers.
     */
    cursor?: DailyDataSipuberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyDataSipubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyDataSipubers.
     */
    skip?: number
    distinct?: DailyDataSipuberScalarFieldEnum | DailyDataSipuberScalarFieldEnum[]
  }

  /**
   * DailyDataSipuber create
   */
  export type DailyDataSipuberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDataSipuber
     */
    select?: DailyDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDataSipuber
     */
    omit?: DailyDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDataSipuberInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyDataSipuber.
     */
    data: XOR<DailyDataSipuberCreateInput, DailyDataSipuberUncheckedCreateInput>
  }

  /**
   * DailyDataSipuber createMany
   */
  export type DailyDataSipuberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyDataSipubers.
     */
    data: DailyDataSipuberCreateManyInput | DailyDataSipuberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyDataSipuber createManyAndReturn
   */
  export type DailyDataSipuberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDataSipuber
     */
    select?: DailyDataSipuberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDataSipuber
     */
    omit?: DailyDataSipuberOmit<ExtArgs> | null
    /**
     * The data used to create many DailyDataSipubers.
     */
    data: DailyDataSipuberCreateManyInput | DailyDataSipuberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDataSipuberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyDataSipuber update
   */
  export type DailyDataSipuberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDataSipuber
     */
    select?: DailyDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDataSipuber
     */
    omit?: DailyDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDataSipuberInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyDataSipuber.
     */
    data: XOR<DailyDataSipuberUpdateInput, DailyDataSipuberUncheckedUpdateInput>
    /**
     * Choose, which DailyDataSipuber to update.
     */
    where: DailyDataSipuberWhereUniqueInput
  }

  /**
   * DailyDataSipuber updateMany
   */
  export type DailyDataSipuberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyDataSipubers.
     */
    data: XOR<DailyDataSipuberUpdateManyMutationInput, DailyDataSipuberUncheckedUpdateManyInput>
    /**
     * Filter which DailyDataSipubers to update
     */
    where?: DailyDataSipuberWhereInput
    /**
     * Limit how many DailyDataSipubers to update.
     */
    limit?: number
  }

  /**
   * DailyDataSipuber updateManyAndReturn
   */
  export type DailyDataSipuberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDataSipuber
     */
    select?: DailyDataSipuberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDataSipuber
     */
    omit?: DailyDataSipuberOmit<ExtArgs> | null
    /**
     * The data used to update DailyDataSipubers.
     */
    data: XOR<DailyDataSipuberUpdateManyMutationInput, DailyDataSipuberUncheckedUpdateManyInput>
    /**
     * Filter which DailyDataSipubers to update
     */
    where?: DailyDataSipuberWhereInput
    /**
     * Limit how many DailyDataSipubers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDataSipuberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyDataSipuber upsert
   */
  export type DailyDataSipuberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDataSipuber
     */
    select?: DailyDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDataSipuber
     */
    omit?: DailyDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDataSipuberInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyDataSipuber to update in case it exists.
     */
    where: DailyDataSipuberWhereUniqueInput
    /**
     * In case the DailyDataSipuber found by the `where` argument doesn't exist, create a new DailyDataSipuber with this data.
     */
    create: XOR<DailyDataSipuberCreateInput, DailyDataSipuberUncheckedCreateInput>
    /**
     * In case the DailyDataSipuber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyDataSipuberUpdateInput, DailyDataSipuberUncheckedUpdateInput>
  }

  /**
   * DailyDataSipuber delete
   */
  export type DailyDataSipuberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDataSipuber
     */
    select?: DailyDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDataSipuber
     */
    omit?: DailyDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDataSipuberInclude<ExtArgs> | null
    /**
     * Filter which DailyDataSipuber to delete.
     */
    where: DailyDataSipuberWhereUniqueInput
  }

  /**
   * DailyDataSipuber deleteMany
   */
  export type DailyDataSipuberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyDataSipubers to delete
     */
    where?: DailyDataSipuberWhereInput
    /**
     * Limit how many DailyDataSipubers to delete.
     */
    limit?: number
  }

  /**
   * DailyDataSipuber without action
   */
  export type DailyDataSipuberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDataSipuber
     */
    select?: DailyDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDataSipuber
     */
    omit?: DailyDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDataSipuberInclude<ExtArgs> | null
  }


  /**
   * Model AnalDataSipuber
   */

  export type AggregateAnalDataSipuber = {
    _count: AnalDataSipuberCountAggregateOutputType | null
    _avg: AnalDataSipuberAvgAggregateOutputType | null
    _sum: AnalDataSipuberSumAggregateOutputType | null
    _min: AnalDataSipuberMinAggregateOutputType | null
    _max: AnalDataSipuberMaxAggregateOutputType | null
  }

  export type AnalDataSipuberAvgAggregateOutputType = {
    id: number | null
    device_id: number | null
    co: number | null
    so: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    pm1: number | null
    pm25: number | null
    pm10: number | null
    v_bat: number | null
  }

  export type AnalDataSipuberSumAggregateOutputType = {
    id: number | null
    device_id: number | null
    co: number | null
    so: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    pm1: number | null
    pm25: number | null
    pm10: number | null
    v_bat: number | null
  }

  export type AnalDataSipuberMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    device_id: number | null
    location: string | null
    co: number | null
    so: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    pm1: number | null
    pm25: number | null
    pm10: number | null
    v_bat: number | null
  }

  export type AnalDataSipuberMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    device_id: number | null
    location: string | null
    co: number | null
    so: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    pm1: number | null
    pm25: number | null
    pm10: number | null
    v_bat: number | null
  }

  export type AnalDataSipuberCountAggregateOutputType = {
    id: number
    created_at: number
    device_id: number
    location: number
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    v_bat: number
    _all: number
  }


  export type AnalDataSipuberAvgAggregateInputType = {
    id?: true
    device_id?: true
    co?: true
    so?: true
    no2?: true
    o3?: true
    nh3?: true
    pm1?: true
    pm25?: true
    pm10?: true
    v_bat?: true
  }

  export type AnalDataSipuberSumAggregateInputType = {
    id?: true
    device_id?: true
    co?: true
    so?: true
    no2?: true
    o3?: true
    nh3?: true
    pm1?: true
    pm25?: true
    pm10?: true
    v_bat?: true
  }

  export type AnalDataSipuberMinAggregateInputType = {
    id?: true
    created_at?: true
    device_id?: true
    location?: true
    co?: true
    so?: true
    no2?: true
    o3?: true
    nh3?: true
    pm1?: true
    pm25?: true
    pm10?: true
    v_bat?: true
  }

  export type AnalDataSipuberMaxAggregateInputType = {
    id?: true
    created_at?: true
    device_id?: true
    location?: true
    co?: true
    so?: true
    no2?: true
    o3?: true
    nh3?: true
    pm1?: true
    pm25?: true
    pm10?: true
    v_bat?: true
  }

  export type AnalDataSipuberCountAggregateInputType = {
    id?: true
    created_at?: true
    device_id?: true
    location?: true
    co?: true
    so?: true
    no2?: true
    o3?: true
    nh3?: true
    pm1?: true
    pm25?: true
    pm10?: true
    v_bat?: true
    _all?: true
  }

  export type AnalDataSipuberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalDataSipuber to aggregate.
     */
    where?: AnalDataSipuberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalDataSipubers to fetch.
     */
    orderBy?: AnalDataSipuberOrderByWithRelationInput | AnalDataSipuberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalDataSipuberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalDataSipubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalDataSipubers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalDataSipubers
    **/
    _count?: true | AnalDataSipuberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalDataSipuberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalDataSipuberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalDataSipuberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalDataSipuberMaxAggregateInputType
  }

  export type GetAnalDataSipuberAggregateType<T extends AnalDataSipuberAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalDataSipuber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalDataSipuber[P]>
      : GetScalarType<T[P], AggregateAnalDataSipuber[P]>
  }




  export type AnalDataSipuberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalDataSipuberWhereInput
    orderBy?: AnalDataSipuberOrderByWithAggregationInput | AnalDataSipuberOrderByWithAggregationInput[]
    by: AnalDataSipuberScalarFieldEnum[] | AnalDataSipuberScalarFieldEnum
    having?: AnalDataSipuberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalDataSipuberCountAggregateInputType | true
    _avg?: AnalDataSipuberAvgAggregateInputType
    _sum?: AnalDataSipuberSumAggregateInputType
    _min?: AnalDataSipuberMinAggregateInputType
    _max?: AnalDataSipuberMaxAggregateInputType
  }

  export type AnalDataSipuberGroupByOutputType = {
    id: number
    created_at: Date
    device_id: number
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    v_bat: number
    _count: AnalDataSipuberCountAggregateOutputType | null
    _avg: AnalDataSipuberAvgAggregateOutputType | null
    _sum: AnalDataSipuberSumAggregateOutputType | null
    _min: AnalDataSipuberMinAggregateOutputType | null
    _max: AnalDataSipuberMaxAggregateOutputType | null
  }

  type GetAnalDataSipuberGroupByPayload<T extends AnalDataSipuberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalDataSipuberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalDataSipuberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalDataSipuberGroupByOutputType[P]>
            : GetScalarType<T[P], AnalDataSipuberGroupByOutputType[P]>
        }
      >
    >


  export type AnalDataSipuberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    device_id?: boolean
    location?: boolean
    co?: boolean
    so?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    pm1?: boolean
    pm25?: boolean
    pm10?: boolean
    v_bat?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analDataSipuber"]>

  export type AnalDataSipuberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    device_id?: boolean
    location?: boolean
    co?: boolean
    so?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    pm1?: boolean
    pm25?: boolean
    pm10?: boolean
    v_bat?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analDataSipuber"]>

  export type AnalDataSipuberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    device_id?: boolean
    location?: boolean
    co?: boolean
    so?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    pm1?: boolean
    pm25?: boolean
    pm10?: boolean
    v_bat?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analDataSipuber"]>

  export type AnalDataSipuberSelectScalar = {
    id?: boolean
    created_at?: boolean
    device_id?: boolean
    location?: boolean
    co?: boolean
    so?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    pm1?: boolean
    pm25?: boolean
    pm10?: boolean
    v_bat?: boolean
  }

  export type AnalDataSipuberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "device_id" | "location" | "co" | "so" | "no2" | "o3" | "nh3" | "pm1" | "pm25" | "pm10" | "v_bat", ExtArgs["result"]["analDataSipuber"]>
  export type AnalDataSipuberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type AnalDataSipuberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type AnalDataSipuberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $AnalDataSipuberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalDataSipuber"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      device_id: number
      location: string
      co: number
      so: number
      no2: number
      o3: number
      nh3: number
      pm1: number
      pm25: number
      pm10: number
      v_bat: number
    }, ExtArgs["result"]["analDataSipuber"]>
    composites: {}
  }

  type AnalDataSipuberGetPayload<S extends boolean | null | undefined | AnalDataSipuberDefaultArgs> = $Result.GetResult<Prisma.$AnalDataSipuberPayload, S>

  type AnalDataSipuberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalDataSipuberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalDataSipuberCountAggregateInputType | true
    }

  export interface AnalDataSipuberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalDataSipuber'], meta: { name: 'AnalDataSipuber' } }
    /**
     * Find zero or one AnalDataSipuber that matches the filter.
     * @param {AnalDataSipuberFindUniqueArgs} args - Arguments to find a AnalDataSipuber
     * @example
     * // Get one AnalDataSipuber
     * const analDataSipuber = await prisma.analDataSipuber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalDataSipuberFindUniqueArgs>(args: SelectSubset<T, AnalDataSipuberFindUniqueArgs<ExtArgs>>): Prisma__AnalDataSipuberClient<$Result.GetResult<Prisma.$AnalDataSipuberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalDataSipuber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalDataSipuberFindUniqueOrThrowArgs} args - Arguments to find a AnalDataSipuber
     * @example
     * // Get one AnalDataSipuber
     * const analDataSipuber = await prisma.analDataSipuber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalDataSipuberFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalDataSipuberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalDataSipuberClient<$Result.GetResult<Prisma.$AnalDataSipuberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalDataSipuber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalDataSipuberFindFirstArgs} args - Arguments to find a AnalDataSipuber
     * @example
     * // Get one AnalDataSipuber
     * const analDataSipuber = await prisma.analDataSipuber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalDataSipuberFindFirstArgs>(args?: SelectSubset<T, AnalDataSipuberFindFirstArgs<ExtArgs>>): Prisma__AnalDataSipuberClient<$Result.GetResult<Prisma.$AnalDataSipuberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalDataSipuber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalDataSipuberFindFirstOrThrowArgs} args - Arguments to find a AnalDataSipuber
     * @example
     * // Get one AnalDataSipuber
     * const analDataSipuber = await prisma.analDataSipuber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalDataSipuberFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalDataSipuberFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalDataSipuberClient<$Result.GetResult<Prisma.$AnalDataSipuberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalDataSipubers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalDataSipuberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalDataSipubers
     * const analDataSipubers = await prisma.analDataSipuber.findMany()
     * 
     * // Get first 10 AnalDataSipubers
     * const analDataSipubers = await prisma.analDataSipuber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analDataSipuberWithIdOnly = await prisma.analDataSipuber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalDataSipuberFindManyArgs>(args?: SelectSubset<T, AnalDataSipuberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalDataSipuberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalDataSipuber.
     * @param {AnalDataSipuberCreateArgs} args - Arguments to create a AnalDataSipuber.
     * @example
     * // Create one AnalDataSipuber
     * const AnalDataSipuber = await prisma.analDataSipuber.create({
     *   data: {
     *     // ... data to create a AnalDataSipuber
     *   }
     * })
     * 
     */
    create<T extends AnalDataSipuberCreateArgs>(args: SelectSubset<T, AnalDataSipuberCreateArgs<ExtArgs>>): Prisma__AnalDataSipuberClient<$Result.GetResult<Prisma.$AnalDataSipuberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalDataSipubers.
     * @param {AnalDataSipuberCreateManyArgs} args - Arguments to create many AnalDataSipubers.
     * @example
     * // Create many AnalDataSipubers
     * const analDataSipuber = await prisma.analDataSipuber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalDataSipuberCreateManyArgs>(args?: SelectSubset<T, AnalDataSipuberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalDataSipubers and returns the data saved in the database.
     * @param {AnalDataSipuberCreateManyAndReturnArgs} args - Arguments to create many AnalDataSipubers.
     * @example
     * // Create many AnalDataSipubers
     * const analDataSipuber = await prisma.analDataSipuber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalDataSipubers and only return the `id`
     * const analDataSipuberWithIdOnly = await prisma.analDataSipuber.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalDataSipuberCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalDataSipuberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalDataSipuberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalDataSipuber.
     * @param {AnalDataSipuberDeleteArgs} args - Arguments to delete one AnalDataSipuber.
     * @example
     * // Delete one AnalDataSipuber
     * const AnalDataSipuber = await prisma.analDataSipuber.delete({
     *   where: {
     *     // ... filter to delete one AnalDataSipuber
     *   }
     * })
     * 
     */
    delete<T extends AnalDataSipuberDeleteArgs>(args: SelectSubset<T, AnalDataSipuberDeleteArgs<ExtArgs>>): Prisma__AnalDataSipuberClient<$Result.GetResult<Prisma.$AnalDataSipuberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalDataSipuber.
     * @param {AnalDataSipuberUpdateArgs} args - Arguments to update one AnalDataSipuber.
     * @example
     * // Update one AnalDataSipuber
     * const analDataSipuber = await prisma.analDataSipuber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalDataSipuberUpdateArgs>(args: SelectSubset<T, AnalDataSipuberUpdateArgs<ExtArgs>>): Prisma__AnalDataSipuberClient<$Result.GetResult<Prisma.$AnalDataSipuberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalDataSipubers.
     * @param {AnalDataSipuberDeleteManyArgs} args - Arguments to filter AnalDataSipubers to delete.
     * @example
     * // Delete a few AnalDataSipubers
     * const { count } = await prisma.analDataSipuber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalDataSipuberDeleteManyArgs>(args?: SelectSubset<T, AnalDataSipuberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalDataSipubers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalDataSipuberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalDataSipubers
     * const analDataSipuber = await prisma.analDataSipuber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalDataSipuberUpdateManyArgs>(args: SelectSubset<T, AnalDataSipuberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalDataSipubers and returns the data updated in the database.
     * @param {AnalDataSipuberUpdateManyAndReturnArgs} args - Arguments to update many AnalDataSipubers.
     * @example
     * // Update many AnalDataSipubers
     * const analDataSipuber = await prisma.analDataSipuber.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalDataSipubers and only return the `id`
     * const analDataSipuberWithIdOnly = await prisma.analDataSipuber.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnalDataSipuberUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalDataSipuberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalDataSipuberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalDataSipuber.
     * @param {AnalDataSipuberUpsertArgs} args - Arguments to update or create a AnalDataSipuber.
     * @example
     * // Update or create a AnalDataSipuber
     * const analDataSipuber = await prisma.analDataSipuber.upsert({
     *   create: {
     *     // ... data to create a AnalDataSipuber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalDataSipuber we want to update
     *   }
     * })
     */
    upsert<T extends AnalDataSipuberUpsertArgs>(args: SelectSubset<T, AnalDataSipuberUpsertArgs<ExtArgs>>): Prisma__AnalDataSipuberClient<$Result.GetResult<Prisma.$AnalDataSipuberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalDataSipubers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalDataSipuberCountArgs} args - Arguments to filter AnalDataSipubers to count.
     * @example
     * // Count the number of AnalDataSipubers
     * const count = await prisma.analDataSipuber.count({
     *   where: {
     *     // ... the filter for the AnalDataSipubers we want to count
     *   }
     * })
    **/
    count<T extends AnalDataSipuberCountArgs>(
      args?: Subset<T, AnalDataSipuberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalDataSipuberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalDataSipuber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalDataSipuberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnalDataSipuberAggregateArgs>(args: Subset<T, AnalDataSipuberAggregateArgs>): Prisma.PrismaPromise<GetAnalDataSipuberAggregateType<T>>

    /**
     * Group by AnalDataSipuber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalDataSipuberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnalDataSipuberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalDataSipuberGroupByArgs['orderBy'] }
        : { orderBy?: AnalDataSipuberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnalDataSipuberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalDataSipuberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalDataSipuber model
   */
  readonly fields: AnalDataSipuberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalDataSipuber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalDataSipuberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnalDataSipuber model
   */
  interface AnalDataSipuberFieldRefs {
    readonly id: FieldRef<"AnalDataSipuber", 'Int'>
    readonly created_at: FieldRef<"AnalDataSipuber", 'DateTime'>
    readonly device_id: FieldRef<"AnalDataSipuber", 'Int'>
    readonly location: FieldRef<"AnalDataSipuber", 'String'>
    readonly co: FieldRef<"AnalDataSipuber", 'Float'>
    readonly so: FieldRef<"AnalDataSipuber", 'Float'>
    readonly no2: FieldRef<"AnalDataSipuber", 'Float'>
    readonly o3: FieldRef<"AnalDataSipuber", 'Float'>
    readonly nh3: FieldRef<"AnalDataSipuber", 'Float'>
    readonly pm1: FieldRef<"AnalDataSipuber", 'Float'>
    readonly pm25: FieldRef<"AnalDataSipuber", 'Float'>
    readonly pm10: FieldRef<"AnalDataSipuber", 'Float'>
    readonly v_bat: FieldRef<"AnalDataSipuber", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * AnalDataSipuber findUnique
   */
  export type AnalDataSipuberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalDataSipuber
     */
    select?: AnalDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalDataSipuber
     */
    omit?: AnalDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalDataSipuberInclude<ExtArgs> | null
    /**
     * Filter, which AnalDataSipuber to fetch.
     */
    where: AnalDataSipuberWhereUniqueInput
  }

  /**
   * AnalDataSipuber findUniqueOrThrow
   */
  export type AnalDataSipuberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalDataSipuber
     */
    select?: AnalDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalDataSipuber
     */
    omit?: AnalDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalDataSipuberInclude<ExtArgs> | null
    /**
     * Filter, which AnalDataSipuber to fetch.
     */
    where: AnalDataSipuberWhereUniqueInput
  }

  /**
   * AnalDataSipuber findFirst
   */
  export type AnalDataSipuberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalDataSipuber
     */
    select?: AnalDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalDataSipuber
     */
    omit?: AnalDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalDataSipuberInclude<ExtArgs> | null
    /**
     * Filter, which AnalDataSipuber to fetch.
     */
    where?: AnalDataSipuberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalDataSipubers to fetch.
     */
    orderBy?: AnalDataSipuberOrderByWithRelationInput | AnalDataSipuberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalDataSipubers.
     */
    cursor?: AnalDataSipuberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalDataSipubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalDataSipubers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalDataSipubers.
     */
    distinct?: AnalDataSipuberScalarFieldEnum | AnalDataSipuberScalarFieldEnum[]
  }

  /**
   * AnalDataSipuber findFirstOrThrow
   */
  export type AnalDataSipuberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalDataSipuber
     */
    select?: AnalDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalDataSipuber
     */
    omit?: AnalDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalDataSipuberInclude<ExtArgs> | null
    /**
     * Filter, which AnalDataSipuber to fetch.
     */
    where?: AnalDataSipuberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalDataSipubers to fetch.
     */
    orderBy?: AnalDataSipuberOrderByWithRelationInput | AnalDataSipuberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalDataSipubers.
     */
    cursor?: AnalDataSipuberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalDataSipubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalDataSipubers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalDataSipubers.
     */
    distinct?: AnalDataSipuberScalarFieldEnum | AnalDataSipuberScalarFieldEnum[]
  }

  /**
   * AnalDataSipuber findMany
   */
  export type AnalDataSipuberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalDataSipuber
     */
    select?: AnalDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalDataSipuber
     */
    omit?: AnalDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalDataSipuberInclude<ExtArgs> | null
    /**
     * Filter, which AnalDataSipubers to fetch.
     */
    where?: AnalDataSipuberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalDataSipubers to fetch.
     */
    orderBy?: AnalDataSipuberOrderByWithRelationInput | AnalDataSipuberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalDataSipubers.
     */
    cursor?: AnalDataSipuberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalDataSipubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalDataSipubers.
     */
    skip?: number
    distinct?: AnalDataSipuberScalarFieldEnum | AnalDataSipuberScalarFieldEnum[]
  }

  /**
   * AnalDataSipuber create
   */
  export type AnalDataSipuberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalDataSipuber
     */
    select?: AnalDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalDataSipuber
     */
    omit?: AnalDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalDataSipuberInclude<ExtArgs> | null
    /**
     * The data needed to create a AnalDataSipuber.
     */
    data: XOR<AnalDataSipuberCreateInput, AnalDataSipuberUncheckedCreateInput>
  }

  /**
   * AnalDataSipuber createMany
   */
  export type AnalDataSipuberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalDataSipubers.
     */
    data: AnalDataSipuberCreateManyInput | AnalDataSipuberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalDataSipuber createManyAndReturn
   */
  export type AnalDataSipuberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalDataSipuber
     */
    select?: AnalDataSipuberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalDataSipuber
     */
    omit?: AnalDataSipuberOmit<ExtArgs> | null
    /**
     * The data used to create many AnalDataSipubers.
     */
    data: AnalDataSipuberCreateManyInput | AnalDataSipuberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalDataSipuberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalDataSipuber update
   */
  export type AnalDataSipuberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalDataSipuber
     */
    select?: AnalDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalDataSipuber
     */
    omit?: AnalDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalDataSipuberInclude<ExtArgs> | null
    /**
     * The data needed to update a AnalDataSipuber.
     */
    data: XOR<AnalDataSipuberUpdateInput, AnalDataSipuberUncheckedUpdateInput>
    /**
     * Choose, which AnalDataSipuber to update.
     */
    where: AnalDataSipuberWhereUniqueInput
  }

  /**
   * AnalDataSipuber updateMany
   */
  export type AnalDataSipuberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalDataSipubers.
     */
    data: XOR<AnalDataSipuberUpdateManyMutationInput, AnalDataSipuberUncheckedUpdateManyInput>
    /**
     * Filter which AnalDataSipubers to update
     */
    where?: AnalDataSipuberWhereInput
    /**
     * Limit how many AnalDataSipubers to update.
     */
    limit?: number
  }

  /**
   * AnalDataSipuber updateManyAndReturn
   */
  export type AnalDataSipuberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalDataSipuber
     */
    select?: AnalDataSipuberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalDataSipuber
     */
    omit?: AnalDataSipuberOmit<ExtArgs> | null
    /**
     * The data used to update AnalDataSipubers.
     */
    data: XOR<AnalDataSipuberUpdateManyMutationInput, AnalDataSipuberUncheckedUpdateManyInput>
    /**
     * Filter which AnalDataSipubers to update
     */
    where?: AnalDataSipuberWhereInput
    /**
     * Limit how many AnalDataSipubers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalDataSipuberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalDataSipuber upsert
   */
  export type AnalDataSipuberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalDataSipuber
     */
    select?: AnalDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalDataSipuber
     */
    omit?: AnalDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalDataSipuberInclude<ExtArgs> | null
    /**
     * The filter to search for the AnalDataSipuber to update in case it exists.
     */
    where: AnalDataSipuberWhereUniqueInput
    /**
     * In case the AnalDataSipuber found by the `where` argument doesn't exist, create a new AnalDataSipuber with this data.
     */
    create: XOR<AnalDataSipuberCreateInput, AnalDataSipuberUncheckedCreateInput>
    /**
     * In case the AnalDataSipuber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalDataSipuberUpdateInput, AnalDataSipuberUncheckedUpdateInput>
  }

  /**
   * AnalDataSipuber delete
   */
  export type AnalDataSipuberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalDataSipuber
     */
    select?: AnalDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalDataSipuber
     */
    omit?: AnalDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalDataSipuberInclude<ExtArgs> | null
    /**
     * Filter which AnalDataSipuber to delete.
     */
    where: AnalDataSipuberWhereUniqueInput
  }

  /**
   * AnalDataSipuber deleteMany
   */
  export type AnalDataSipuberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalDataSipubers to delete
     */
    where?: AnalDataSipuberWhereInput
    /**
     * Limit how many AnalDataSipubers to delete.
     */
    limit?: number
  }

  /**
   * AnalDataSipuber without action
   */
  export type AnalDataSipuberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalDataSipuber
     */
    select?: AnalDataSipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalDataSipuber
     */
    omit?: AnalDataSipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalDataSipuberInclude<ExtArgs> | null
  }


  /**
   * Model AlertManagement
   */

  export type AggregateAlertManagement = {
    _count: AlertManagementCountAggregateOutputType | null
    _avg: AlertManagementAvgAggregateOutputType | null
    _sum: AlertManagementSumAggregateOutputType | null
    _min: AlertManagementMinAggregateOutputType | null
    _max: AlertManagementMaxAggregateOutputType | null
  }

  export type AlertManagementAvgAggregateOutputType = {
    id: number | null
  }

  export type AlertManagementSumAggregateOutputType = {
    id: number | null
  }

  export type AlertManagementMinAggregateOutputType = {
    id: number | null
    wa_name: string | null
    wa_number: string | null
    email: string | null
  }

  export type AlertManagementMaxAggregateOutputType = {
    id: number | null
    wa_name: string | null
    wa_number: string | null
    email: string | null
  }

  export type AlertManagementCountAggregateOutputType = {
    id: number
    wa_name: number
    wa_number: number
    email: number
    _all: number
  }


  export type AlertManagementAvgAggregateInputType = {
    id?: true
  }

  export type AlertManagementSumAggregateInputType = {
    id?: true
  }

  export type AlertManagementMinAggregateInputType = {
    id?: true
    wa_name?: true
    wa_number?: true
    email?: true
  }

  export type AlertManagementMaxAggregateInputType = {
    id?: true
    wa_name?: true
    wa_number?: true
    email?: true
  }

  export type AlertManagementCountAggregateInputType = {
    id?: true
    wa_name?: true
    wa_number?: true
    email?: true
    _all?: true
  }

  export type AlertManagementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertManagement to aggregate.
     */
    where?: AlertManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertManagements to fetch.
     */
    orderBy?: AlertManagementOrderByWithRelationInput | AlertManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlertManagements
    **/
    _count?: true | AlertManagementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertManagementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertManagementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertManagementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertManagementMaxAggregateInputType
  }

  export type GetAlertManagementAggregateType<T extends AlertManagementAggregateArgs> = {
        [P in keyof T & keyof AggregateAlertManagement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlertManagement[P]>
      : GetScalarType<T[P], AggregateAlertManagement[P]>
  }




  export type AlertManagementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertManagementWhereInput
    orderBy?: AlertManagementOrderByWithAggregationInput | AlertManagementOrderByWithAggregationInput[]
    by: AlertManagementScalarFieldEnum[] | AlertManagementScalarFieldEnum
    having?: AlertManagementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertManagementCountAggregateInputType | true
    _avg?: AlertManagementAvgAggregateInputType
    _sum?: AlertManagementSumAggregateInputType
    _min?: AlertManagementMinAggregateInputType
    _max?: AlertManagementMaxAggregateInputType
  }

  export type AlertManagementGroupByOutputType = {
    id: number
    wa_name: string
    wa_number: string
    email: string
    _count: AlertManagementCountAggregateOutputType | null
    _avg: AlertManagementAvgAggregateOutputType | null
    _sum: AlertManagementSumAggregateOutputType | null
    _min: AlertManagementMinAggregateOutputType | null
    _max: AlertManagementMaxAggregateOutputType | null
  }

  type GetAlertManagementGroupByPayload<T extends AlertManagementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertManagementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertManagementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertManagementGroupByOutputType[P]>
            : GetScalarType<T[P], AlertManagementGroupByOutputType[P]>
        }
      >
    >


  export type AlertManagementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wa_name?: boolean
    wa_number?: boolean
    email?: boolean
  }, ExtArgs["result"]["alertManagement"]>

  export type AlertManagementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wa_name?: boolean
    wa_number?: boolean
    email?: boolean
  }, ExtArgs["result"]["alertManagement"]>

  export type AlertManagementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wa_name?: boolean
    wa_number?: boolean
    email?: boolean
  }, ExtArgs["result"]["alertManagement"]>

  export type AlertManagementSelectScalar = {
    id?: boolean
    wa_name?: boolean
    wa_number?: boolean
    email?: boolean
  }

  export type AlertManagementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "wa_name" | "wa_number" | "email", ExtArgs["result"]["alertManagement"]>

  export type $AlertManagementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlertManagement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      wa_name: string
      wa_number: string
      email: string
    }, ExtArgs["result"]["alertManagement"]>
    composites: {}
  }

  type AlertManagementGetPayload<S extends boolean | null | undefined | AlertManagementDefaultArgs> = $Result.GetResult<Prisma.$AlertManagementPayload, S>

  type AlertManagementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertManagementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertManagementCountAggregateInputType | true
    }

  export interface AlertManagementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlertManagement'], meta: { name: 'AlertManagement' } }
    /**
     * Find zero or one AlertManagement that matches the filter.
     * @param {AlertManagementFindUniqueArgs} args - Arguments to find a AlertManagement
     * @example
     * // Get one AlertManagement
     * const alertManagement = await prisma.alertManagement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertManagementFindUniqueArgs>(args: SelectSubset<T, AlertManagementFindUniqueArgs<ExtArgs>>): Prisma__AlertManagementClient<$Result.GetResult<Prisma.$AlertManagementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlertManagement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertManagementFindUniqueOrThrowArgs} args - Arguments to find a AlertManagement
     * @example
     * // Get one AlertManagement
     * const alertManagement = await prisma.alertManagement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertManagementFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertManagementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertManagementClient<$Result.GetResult<Prisma.$AlertManagementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlertManagement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertManagementFindFirstArgs} args - Arguments to find a AlertManagement
     * @example
     * // Get one AlertManagement
     * const alertManagement = await prisma.alertManagement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertManagementFindFirstArgs>(args?: SelectSubset<T, AlertManagementFindFirstArgs<ExtArgs>>): Prisma__AlertManagementClient<$Result.GetResult<Prisma.$AlertManagementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlertManagement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertManagementFindFirstOrThrowArgs} args - Arguments to find a AlertManagement
     * @example
     * // Get one AlertManagement
     * const alertManagement = await prisma.alertManagement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertManagementFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertManagementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertManagementClient<$Result.GetResult<Prisma.$AlertManagementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlertManagements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertManagementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlertManagements
     * const alertManagements = await prisma.alertManagement.findMany()
     * 
     * // Get first 10 AlertManagements
     * const alertManagements = await prisma.alertManagement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertManagementWithIdOnly = await prisma.alertManagement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertManagementFindManyArgs>(args?: SelectSubset<T, AlertManagementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertManagementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlertManagement.
     * @param {AlertManagementCreateArgs} args - Arguments to create a AlertManagement.
     * @example
     * // Create one AlertManagement
     * const AlertManagement = await prisma.alertManagement.create({
     *   data: {
     *     // ... data to create a AlertManagement
     *   }
     * })
     * 
     */
    create<T extends AlertManagementCreateArgs>(args: SelectSubset<T, AlertManagementCreateArgs<ExtArgs>>): Prisma__AlertManagementClient<$Result.GetResult<Prisma.$AlertManagementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlertManagements.
     * @param {AlertManagementCreateManyArgs} args - Arguments to create many AlertManagements.
     * @example
     * // Create many AlertManagements
     * const alertManagement = await prisma.alertManagement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertManagementCreateManyArgs>(args?: SelectSubset<T, AlertManagementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlertManagements and returns the data saved in the database.
     * @param {AlertManagementCreateManyAndReturnArgs} args - Arguments to create many AlertManagements.
     * @example
     * // Create many AlertManagements
     * const alertManagement = await prisma.alertManagement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlertManagements and only return the `id`
     * const alertManagementWithIdOnly = await prisma.alertManagement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertManagementCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertManagementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertManagementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlertManagement.
     * @param {AlertManagementDeleteArgs} args - Arguments to delete one AlertManagement.
     * @example
     * // Delete one AlertManagement
     * const AlertManagement = await prisma.alertManagement.delete({
     *   where: {
     *     // ... filter to delete one AlertManagement
     *   }
     * })
     * 
     */
    delete<T extends AlertManagementDeleteArgs>(args: SelectSubset<T, AlertManagementDeleteArgs<ExtArgs>>): Prisma__AlertManagementClient<$Result.GetResult<Prisma.$AlertManagementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlertManagement.
     * @param {AlertManagementUpdateArgs} args - Arguments to update one AlertManagement.
     * @example
     * // Update one AlertManagement
     * const alertManagement = await prisma.alertManagement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertManagementUpdateArgs>(args: SelectSubset<T, AlertManagementUpdateArgs<ExtArgs>>): Prisma__AlertManagementClient<$Result.GetResult<Prisma.$AlertManagementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlertManagements.
     * @param {AlertManagementDeleteManyArgs} args - Arguments to filter AlertManagements to delete.
     * @example
     * // Delete a few AlertManagements
     * const { count } = await prisma.alertManagement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertManagementDeleteManyArgs>(args?: SelectSubset<T, AlertManagementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlertManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertManagementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlertManagements
     * const alertManagement = await prisma.alertManagement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertManagementUpdateManyArgs>(args: SelectSubset<T, AlertManagementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlertManagements and returns the data updated in the database.
     * @param {AlertManagementUpdateManyAndReturnArgs} args - Arguments to update many AlertManagements.
     * @example
     * // Update many AlertManagements
     * const alertManagement = await prisma.alertManagement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlertManagements and only return the `id`
     * const alertManagementWithIdOnly = await prisma.alertManagement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlertManagementUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertManagementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertManagementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlertManagement.
     * @param {AlertManagementUpsertArgs} args - Arguments to update or create a AlertManagement.
     * @example
     * // Update or create a AlertManagement
     * const alertManagement = await prisma.alertManagement.upsert({
     *   create: {
     *     // ... data to create a AlertManagement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlertManagement we want to update
     *   }
     * })
     */
    upsert<T extends AlertManagementUpsertArgs>(args: SelectSubset<T, AlertManagementUpsertArgs<ExtArgs>>): Prisma__AlertManagementClient<$Result.GetResult<Prisma.$AlertManagementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlertManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertManagementCountArgs} args - Arguments to filter AlertManagements to count.
     * @example
     * // Count the number of AlertManagements
     * const count = await prisma.alertManagement.count({
     *   where: {
     *     // ... the filter for the AlertManagements we want to count
     *   }
     * })
    **/
    count<T extends AlertManagementCountArgs>(
      args?: Subset<T, AlertManagementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertManagementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlertManagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertManagementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlertManagementAggregateArgs>(args: Subset<T, AlertManagementAggregateArgs>): Prisma.PrismaPromise<GetAlertManagementAggregateType<T>>

    /**
     * Group by AlertManagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertManagementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlertManagementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertManagementGroupByArgs['orderBy'] }
        : { orderBy?: AlertManagementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlertManagementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertManagementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlertManagement model
   */
  readonly fields: AlertManagementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlertManagement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertManagementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AlertManagement model
   */
  interface AlertManagementFieldRefs {
    readonly id: FieldRef<"AlertManagement", 'Int'>
    readonly wa_name: FieldRef<"AlertManagement", 'String'>
    readonly wa_number: FieldRef<"AlertManagement", 'String'>
    readonly email: FieldRef<"AlertManagement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AlertManagement findUnique
   */
  export type AlertManagementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertManagement
     */
    select?: AlertManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertManagement
     */
    omit?: AlertManagementOmit<ExtArgs> | null
    /**
     * Filter, which AlertManagement to fetch.
     */
    where: AlertManagementWhereUniqueInput
  }

  /**
   * AlertManagement findUniqueOrThrow
   */
  export type AlertManagementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertManagement
     */
    select?: AlertManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertManagement
     */
    omit?: AlertManagementOmit<ExtArgs> | null
    /**
     * Filter, which AlertManagement to fetch.
     */
    where: AlertManagementWhereUniqueInput
  }

  /**
   * AlertManagement findFirst
   */
  export type AlertManagementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertManagement
     */
    select?: AlertManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertManagement
     */
    omit?: AlertManagementOmit<ExtArgs> | null
    /**
     * Filter, which AlertManagement to fetch.
     */
    where?: AlertManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertManagements to fetch.
     */
    orderBy?: AlertManagementOrderByWithRelationInput | AlertManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertManagements.
     */
    cursor?: AlertManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertManagements.
     */
    distinct?: AlertManagementScalarFieldEnum | AlertManagementScalarFieldEnum[]
  }

  /**
   * AlertManagement findFirstOrThrow
   */
  export type AlertManagementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertManagement
     */
    select?: AlertManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertManagement
     */
    omit?: AlertManagementOmit<ExtArgs> | null
    /**
     * Filter, which AlertManagement to fetch.
     */
    where?: AlertManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertManagements to fetch.
     */
    orderBy?: AlertManagementOrderByWithRelationInput | AlertManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertManagements.
     */
    cursor?: AlertManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertManagements.
     */
    distinct?: AlertManagementScalarFieldEnum | AlertManagementScalarFieldEnum[]
  }

  /**
   * AlertManagement findMany
   */
  export type AlertManagementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertManagement
     */
    select?: AlertManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertManagement
     */
    omit?: AlertManagementOmit<ExtArgs> | null
    /**
     * Filter, which AlertManagements to fetch.
     */
    where?: AlertManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertManagements to fetch.
     */
    orderBy?: AlertManagementOrderByWithRelationInput | AlertManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlertManagements.
     */
    cursor?: AlertManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertManagements.
     */
    skip?: number
    distinct?: AlertManagementScalarFieldEnum | AlertManagementScalarFieldEnum[]
  }

  /**
   * AlertManagement create
   */
  export type AlertManagementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertManagement
     */
    select?: AlertManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertManagement
     */
    omit?: AlertManagementOmit<ExtArgs> | null
    /**
     * The data needed to create a AlertManagement.
     */
    data: XOR<AlertManagementCreateInput, AlertManagementUncheckedCreateInput>
  }

  /**
   * AlertManagement createMany
   */
  export type AlertManagementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlertManagements.
     */
    data: AlertManagementCreateManyInput | AlertManagementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlertManagement createManyAndReturn
   */
  export type AlertManagementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertManagement
     */
    select?: AlertManagementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlertManagement
     */
    omit?: AlertManagementOmit<ExtArgs> | null
    /**
     * The data used to create many AlertManagements.
     */
    data: AlertManagementCreateManyInput | AlertManagementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlertManagement update
   */
  export type AlertManagementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertManagement
     */
    select?: AlertManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertManagement
     */
    omit?: AlertManagementOmit<ExtArgs> | null
    /**
     * The data needed to update a AlertManagement.
     */
    data: XOR<AlertManagementUpdateInput, AlertManagementUncheckedUpdateInput>
    /**
     * Choose, which AlertManagement to update.
     */
    where: AlertManagementWhereUniqueInput
  }

  /**
   * AlertManagement updateMany
   */
  export type AlertManagementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlertManagements.
     */
    data: XOR<AlertManagementUpdateManyMutationInput, AlertManagementUncheckedUpdateManyInput>
    /**
     * Filter which AlertManagements to update
     */
    where?: AlertManagementWhereInput
    /**
     * Limit how many AlertManagements to update.
     */
    limit?: number
  }

  /**
   * AlertManagement updateManyAndReturn
   */
  export type AlertManagementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertManagement
     */
    select?: AlertManagementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlertManagement
     */
    omit?: AlertManagementOmit<ExtArgs> | null
    /**
     * The data used to update AlertManagements.
     */
    data: XOR<AlertManagementUpdateManyMutationInput, AlertManagementUncheckedUpdateManyInput>
    /**
     * Filter which AlertManagements to update
     */
    where?: AlertManagementWhereInput
    /**
     * Limit how many AlertManagements to update.
     */
    limit?: number
  }

  /**
   * AlertManagement upsert
   */
  export type AlertManagementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertManagement
     */
    select?: AlertManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertManagement
     */
    omit?: AlertManagementOmit<ExtArgs> | null
    /**
     * The filter to search for the AlertManagement to update in case it exists.
     */
    where: AlertManagementWhereUniqueInput
    /**
     * In case the AlertManagement found by the `where` argument doesn't exist, create a new AlertManagement with this data.
     */
    create: XOR<AlertManagementCreateInput, AlertManagementUncheckedCreateInput>
    /**
     * In case the AlertManagement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertManagementUpdateInput, AlertManagementUncheckedUpdateInput>
  }

  /**
   * AlertManagement delete
   */
  export type AlertManagementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertManagement
     */
    select?: AlertManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertManagement
     */
    omit?: AlertManagementOmit<ExtArgs> | null
    /**
     * Filter which AlertManagement to delete.
     */
    where: AlertManagementWhereUniqueInput
  }

  /**
   * AlertManagement deleteMany
   */
  export type AlertManagementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertManagements to delete
     */
    where?: AlertManagementWhereInput
    /**
     * Limit how many AlertManagements to delete.
     */
    limit?: number
  }

  /**
   * AlertManagement without action
   */
  export type AlertManagementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertManagement
     */
    select?: AlertManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertManagement
     */
    omit?: AlertManagementOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    full_name: 'full_name',
    email: 'email',
    password: 'password',
    role: 'role',
    isSoftDelete: 'isSoftDelete'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    device_name: 'device_name',
    no_modem: 'no_modem',
    tanggal_paket: 'tanggal_paket',
    user_id: 'user_id'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const CmsSettingScalarFieldEnum: {
    id: 'id',
    thumbnail: 'thumbnail',
    section: 'section',
    content: 'content'
  };

  export type CmsSettingScalarFieldEnum = (typeof CmsSettingScalarFieldEnum)[keyof typeof CmsSettingScalarFieldEnum]


  export const PpmDataSipuberScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    device_id: 'device_id',
    location: 'location',
    co: 'co',
    so: 'so',
    no2: 'no2',
    o3: 'o3',
    nh3: 'nh3',
    pm1: 'pm1',
    pm25: 'pm25',
    pm10: 'pm10',
    ispu_realtime: 'ispu_realtime',
    v_bat: 'v_bat'
  };

  export type PpmDataSipuberScalarFieldEnum = (typeof PpmDataSipuberScalarFieldEnum)[keyof typeof PpmDataSipuberScalarFieldEnum]


  export const DailyDataSipuberScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    location: 'location',
    co: 'co',
    so: 'so',
    no2: 'no2',
    o3: 'o3',
    nh3: 'nh3',
    pm1: 'pm1',
    pm25: 'pm25',
    pm10: 'pm10',
    ispu_daily: 'ispu_daily',
    device_id: 'device_id'
  };

  export type DailyDataSipuberScalarFieldEnum = (typeof DailyDataSipuberScalarFieldEnum)[keyof typeof DailyDataSipuberScalarFieldEnum]


  export const AnalDataSipuberScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    device_id: 'device_id',
    location: 'location',
    co: 'co',
    so: 'so',
    no2: 'no2',
    o3: 'o3',
    nh3: 'nh3',
    pm1: 'pm1',
    pm25: 'pm25',
    pm10: 'pm10',
    v_bat: 'v_bat'
  };

  export type AnalDataSipuberScalarFieldEnum = (typeof AnalDataSipuberScalarFieldEnum)[keyof typeof AnalDataSipuberScalarFieldEnum]


  export const AlertManagementScalarFieldEnum: {
    id: 'id',
    wa_name: 'wa_name',
    wa_number: 'wa_number',
    email: 'email'
  };

  export type AlertManagementScalarFieldEnum = (typeof AlertManagementScalarFieldEnum)[keyof typeof AlertManagementScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    full_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isSoftDelete?: BoolFilter<"User"> | boolean
    devices?: DeviceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isSoftDelete?: SortOrder
    devices?: DeviceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    full_name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isSoftDelete?: BoolFilter<"User"> | boolean
    devices?: DeviceListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isSoftDelete?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    full_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    isSoftDelete?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: IntFilter<"Device"> | number
    device_name?: StringFilter<"Device"> | string
    no_modem?: StringNullableFilter<"Device"> | string | null
    tanggal_paket?: StringNullableFilter<"Device"> | string | null
    user_id?: IntFilter<"Device"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ppm_data?: PpmDataSipuberListRelationFilter
    daily_data?: DailyDataSipuberListRelationFilter
    anal_data?: AnalDataSipuberListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    device_name?: SortOrder
    no_modem?: SortOrderInput | SortOrder
    tanggal_paket?: SortOrderInput | SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
    ppm_data?: PpmDataSipuberOrderByRelationAggregateInput
    daily_data?: DailyDataSipuberOrderByRelationAggregateInput
    anal_data?: AnalDataSipuberOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    device_name?: StringFilter<"Device"> | string
    no_modem?: StringNullableFilter<"Device"> | string | null
    tanggal_paket?: StringNullableFilter<"Device"> | string | null
    user_id?: IntFilter<"Device"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ppm_data?: PpmDataSipuberListRelationFilter
    daily_data?: DailyDataSipuberListRelationFilter
    anal_data?: AnalDataSipuberListRelationFilter
  }, "id">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    device_name?: SortOrder
    no_modem?: SortOrderInput | SortOrder
    tanggal_paket?: SortOrderInput | SortOrder
    user_id?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _avg?: DeviceAvgOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
    _sum?: DeviceSumOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Device"> | number
    device_name?: StringWithAggregatesFilter<"Device"> | string
    no_modem?: StringNullableWithAggregatesFilter<"Device"> | string | null
    tanggal_paket?: StringNullableWithAggregatesFilter<"Device"> | string | null
    user_id?: IntWithAggregatesFilter<"Device"> | number
  }

  export type CmsSettingWhereInput = {
    AND?: CmsSettingWhereInput | CmsSettingWhereInput[]
    OR?: CmsSettingWhereInput[]
    NOT?: CmsSettingWhereInput | CmsSettingWhereInput[]
    id?: IntFilter<"CmsSetting"> | number
    thumbnail?: StringFilter<"CmsSetting"> | string
    section?: StringFilter<"CmsSetting"> | string
    content?: StringFilter<"CmsSetting"> | string
  }

  export type CmsSettingOrderByWithRelationInput = {
    id?: SortOrder
    thumbnail?: SortOrder
    section?: SortOrder
    content?: SortOrder
  }

  export type CmsSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CmsSettingWhereInput | CmsSettingWhereInput[]
    OR?: CmsSettingWhereInput[]
    NOT?: CmsSettingWhereInput | CmsSettingWhereInput[]
    thumbnail?: StringFilter<"CmsSetting"> | string
    section?: StringFilter<"CmsSetting"> | string
    content?: StringFilter<"CmsSetting"> | string
  }, "id">

  export type CmsSettingOrderByWithAggregationInput = {
    id?: SortOrder
    thumbnail?: SortOrder
    section?: SortOrder
    content?: SortOrder
    _count?: CmsSettingCountOrderByAggregateInput
    _avg?: CmsSettingAvgOrderByAggregateInput
    _max?: CmsSettingMaxOrderByAggregateInput
    _min?: CmsSettingMinOrderByAggregateInput
    _sum?: CmsSettingSumOrderByAggregateInput
  }

  export type CmsSettingScalarWhereWithAggregatesInput = {
    AND?: CmsSettingScalarWhereWithAggregatesInput | CmsSettingScalarWhereWithAggregatesInput[]
    OR?: CmsSettingScalarWhereWithAggregatesInput[]
    NOT?: CmsSettingScalarWhereWithAggregatesInput | CmsSettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CmsSetting"> | number
    thumbnail?: StringWithAggregatesFilter<"CmsSetting"> | string
    section?: StringWithAggregatesFilter<"CmsSetting"> | string
    content?: StringWithAggregatesFilter<"CmsSetting"> | string
  }

  export type PpmDataSipuberWhereInput = {
    AND?: PpmDataSipuberWhereInput | PpmDataSipuberWhereInput[]
    OR?: PpmDataSipuberWhereInput[]
    NOT?: PpmDataSipuberWhereInput | PpmDataSipuberWhereInput[]
    id?: IntFilter<"PpmDataSipuber"> | number
    created_at?: DateTimeFilter<"PpmDataSipuber"> | Date | string
    device_id?: IntFilter<"PpmDataSipuber"> | number
    location?: StringFilter<"PpmDataSipuber"> | string
    co?: FloatFilter<"PpmDataSipuber"> | number
    so?: FloatFilter<"PpmDataSipuber"> | number
    no2?: FloatFilter<"PpmDataSipuber"> | number
    o3?: FloatFilter<"PpmDataSipuber"> | number
    nh3?: FloatFilter<"PpmDataSipuber"> | number
    pm1?: FloatFilter<"PpmDataSipuber"> | number
    pm25?: FloatFilter<"PpmDataSipuber"> | number
    pm10?: FloatFilter<"PpmDataSipuber"> | number
    ispu_realtime?: IntFilter<"PpmDataSipuber"> | number
    v_bat?: FloatFilter<"PpmDataSipuber"> | number
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }

  export type PpmDataSipuberOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_id?: SortOrder
    location?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    ispu_realtime?: SortOrder
    v_bat?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type PpmDataSipuberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PpmDataSipuberWhereInput | PpmDataSipuberWhereInput[]
    OR?: PpmDataSipuberWhereInput[]
    NOT?: PpmDataSipuberWhereInput | PpmDataSipuberWhereInput[]
    created_at?: DateTimeFilter<"PpmDataSipuber"> | Date | string
    device_id?: IntFilter<"PpmDataSipuber"> | number
    location?: StringFilter<"PpmDataSipuber"> | string
    co?: FloatFilter<"PpmDataSipuber"> | number
    so?: FloatFilter<"PpmDataSipuber"> | number
    no2?: FloatFilter<"PpmDataSipuber"> | number
    o3?: FloatFilter<"PpmDataSipuber"> | number
    nh3?: FloatFilter<"PpmDataSipuber"> | number
    pm1?: FloatFilter<"PpmDataSipuber"> | number
    pm25?: FloatFilter<"PpmDataSipuber"> | number
    pm10?: FloatFilter<"PpmDataSipuber"> | number
    ispu_realtime?: IntFilter<"PpmDataSipuber"> | number
    v_bat?: FloatFilter<"PpmDataSipuber"> | number
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }, "id">

  export type PpmDataSipuberOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_id?: SortOrder
    location?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    ispu_realtime?: SortOrder
    v_bat?: SortOrder
    _count?: PpmDataSipuberCountOrderByAggregateInput
    _avg?: PpmDataSipuberAvgOrderByAggregateInput
    _max?: PpmDataSipuberMaxOrderByAggregateInput
    _min?: PpmDataSipuberMinOrderByAggregateInput
    _sum?: PpmDataSipuberSumOrderByAggregateInput
  }

  export type PpmDataSipuberScalarWhereWithAggregatesInput = {
    AND?: PpmDataSipuberScalarWhereWithAggregatesInput | PpmDataSipuberScalarWhereWithAggregatesInput[]
    OR?: PpmDataSipuberScalarWhereWithAggregatesInput[]
    NOT?: PpmDataSipuberScalarWhereWithAggregatesInput | PpmDataSipuberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PpmDataSipuber"> | number
    created_at?: DateTimeWithAggregatesFilter<"PpmDataSipuber"> | Date | string
    device_id?: IntWithAggregatesFilter<"PpmDataSipuber"> | number
    location?: StringWithAggregatesFilter<"PpmDataSipuber"> | string
    co?: FloatWithAggregatesFilter<"PpmDataSipuber"> | number
    so?: FloatWithAggregatesFilter<"PpmDataSipuber"> | number
    no2?: FloatWithAggregatesFilter<"PpmDataSipuber"> | number
    o3?: FloatWithAggregatesFilter<"PpmDataSipuber"> | number
    nh3?: FloatWithAggregatesFilter<"PpmDataSipuber"> | number
    pm1?: FloatWithAggregatesFilter<"PpmDataSipuber"> | number
    pm25?: FloatWithAggregatesFilter<"PpmDataSipuber"> | number
    pm10?: FloatWithAggregatesFilter<"PpmDataSipuber"> | number
    ispu_realtime?: IntWithAggregatesFilter<"PpmDataSipuber"> | number
    v_bat?: FloatWithAggregatesFilter<"PpmDataSipuber"> | number
  }

  export type DailyDataSipuberWhereInput = {
    AND?: DailyDataSipuberWhereInput | DailyDataSipuberWhereInput[]
    OR?: DailyDataSipuberWhereInput[]
    NOT?: DailyDataSipuberWhereInput | DailyDataSipuberWhereInput[]
    id?: IntFilter<"DailyDataSipuber"> | number
    created_at?: DateTimeFilter<"DailyDataSipuber"> | Date | string
    location?: StringFilter<"DailyDataSipuber"> | string
    co?: FloatFilter<"DailyDataSipuber"> | number
    so?: FloatFilter<"DailyDataSipuber"> | number
    no2?: FloatFilter<"DailyDataSipuber"> | number
    o3?: FloatFilter<"DailyDataSipuber"> | number
    nh3?: FloatFilter<"DailyDataSipuber"> | number
    pm1?: FloatFilter<"DailyDataSipuber"> | number
    pm25?: FloatFilter<"DailyDataSipuber"> | number
    pm10?: FloatFilter<"DailyDataSipuber"> | number
    ispu_daily?: IntFilter<"DailyDataSipuber"> | number
    device_id?: IntFilter<"DailyDataSipuber"> | number
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }

  export type DailyDataSipuberOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    location?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    ispu_daily?: SortOrder
    device_id?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type DailyDataSipuberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DailyDataSipuberWhereInput | DailyDataSipuberWhereInput[]
    OR?: DailyDataSipuberWhereInput[]
    NOT?: DailyDataSipuberWhereInput | DailyDataSipuberWhereInput[]
    created_at?: DateTimeFilter<"DailyDataSipuber"> | Date | string
    location?: StringFilter<"DailyDataSipuber"> | string
    co?: FloatFilter<"DailyDataSipuber"> | number
    so?: FloatFilter<"DailyDataSipuber"> | number
    no2?: FloatFilter<"DailyDataSipuber"> | number
    o3?: FloatFilter<"DailyDataSipuber"> | number
    nh3?: FloatFilter<"DailyDataSipuber"> | number
    pm1?: FloatFilter<"DailyDataSipuber"> | number
    pm25?: FloatFilter<"DailyDataSipuber"> | number
    pm10?: FloatFilter<"DailyDataSipuber"> | number
    ispu_daily?: IntFilter<"DailyDataSipuber"> | number
    device_id?: IntFilter<"DailyDataSipuber"> | number
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }, "id">

  export type DailyDataSipuberOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    location?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    ispu_daily?: SortOrder
    device_id?: SortOrder
    _count?: DailyDataSipuberCountOrderByAggregateInput
    _avg?: DailyDataSipuberAvgOrderByAggregateInput
    _max?: DailyDataSipuberMaxOrderByAggregateInput
    _min?: DailyDataSipuberMinOrderByAggregateInput
    _sum?: DailyDataSipuberSumOrderByAggregateInput
  }

  export type DailyDataSipuberScalarWhereWithAggregatesInput = {
    AND?: DailyDataSipuberScalarWhereWithAggregatesInput | DailyDataSipuberScalarWhereWithAggregatesInput[]
    OR?: DailyDataSipuberScalarWhereWithAggregatesInput[]
    NOT?: DailyDataSipuberScalarWhereWithAggregatesInput | DailyDataSipuberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyDataSipuber"> | number
    created_at?: DateTimeWithAggregatesFilter<"DailyDataSipuber"> | Date | string
    location?: StringWithAggregatesFilter<"DailyDataSipuber"> | string
    co?: FloatWithAggregatesFilter<"DailyDataSipuber"> | number
    so?: FloatWithAggregatesFilter<"DailyDataSipuber"> | number
    no2?: FloatWithAggregatesFilter<"DailyDataSipuber"> | number
    o3?: FloatWithAggregatesFilter<"DailyDataSipuber"> | number
    nh3?: FloatWithAggregatesFilter<"DailyDataSipuber"> | number
    pm1?: FloatWithAggregatesFilter<"DailyDataSipuber"> | number
    pm25?: FloatWithAggregatesFilter<"DailyDataSipuber"> | number
    pm10?: FloatWithAggregatesFilter<"DailyDataSipuber"> | number
    ispu_daily?: IntWithAggregatesFilter<"DailyDataSipuber"> | number
    device_id?: IntWithAggregatesFilter<"DailyDataSipuber"> | number
  }

  export type AnalDataSipuberWhereInput = {
    AND?: AnalDataSipuberWhereInput | AnalDataSipuberWhereInput[]
    OR?: AnalDataSipuberWhereInput[]
    NOT?: AnalDataSipuberWhereInput | AnalDataSipuberWhereInput[]
    id?: IntFilter<"AnalDataSipuber"> | number
    created_at?: DateTimeFilter<"AnalDataSipuber"> | Date | string
    device_id?: IntFilter<"AnalDataSipuber"> | number
    location?: StringFilter<"AnalDataSipuber"> | string
    co?: FloatFilter<"AnalDataSipuber"> | number
    so?: FloatFilter<"AnalDataSipuber"> | number
    no2?: FloatFilter<"AnalDataSipuber"> | number
    o3?: FloatFilter<"AnalDataSipuber"> | number
    nh3?: FloatFilter<"AnalDataSipuber"> | number
    pm1?: FloatFilter<"AnalDataSipuber"> | number
    pm25?: FloatFilter<"AnalDataSipuber"> | number
    pm10?: FloatFilter<"AnalDataSipuber"> | number
    v_bat?: FloatFilter<"AnalDataSipuber"> | number
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }

  export type AnalDataSipuberOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_id?: SortOrder
    location?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    v_bat?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type AnalDataSipuberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnalDataSipuberWhereInput | AnalDataSipuberWhereInput[]
    OR?: AnalDataSipuberWhereInput[]
    NOT?: AnalDataSipuberWhereInput | AnalDataSipuberWhereInput[]
    created_at?: DateTimeFilter<"AnalDataSipuber"> | Date | string
    device_id?: IntFilter<"AnalDataSipuber"> | number
    location?: StringFilter<"AnalDataSipuber"> | string
    co?: FloatFilter<"AnalDataSipuber"> | number
    so?: FloatFilter<"AnalDataSipuber"> | number
    no2?: FloatFilter<"AnalDataSipuber"> | number
    o3?: FloatFilter<"AnalDataSipuber"> | number
    nh3?: FloatFilter<"AnalDataSipuber"> | number
    pm1?: FloatFilter<"AnalDataSipuber"> | number
    pm25?: FloatFilter<"AnalDataSipuber"> | number
    pm10?: FloatFilter<"AnalDataSipuber"> | number
    v_bat?: FloatFilter<"AnalDataSipuber"> | number
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }, "id">

  export type AnalDataSipuberOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_id?: SortOrder
    location?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    v_bat?: SortOrder
    _count?: AnalDataSipuberCountOrderByAggregateInput
    _avg?: AnalDataSipuberAvgOrderByAggregateInput
    _max?: AnalDataSipuberMaxOrderByAggregateInput
    _min?: AnalDataSipuberMinOrderByAggregateInput
    _sum?: AnalDataSipuberSumOrderByAggregateInput
  }

  export type AnalDataSipuberScalarWhereWithAggregatesInput = {
    AND?: AnalDataSipuberScalarWhereWithAggregatesInput | AnalDataSipuberScalarWhereWithAggregatesInput[]
    OR?: AnalDataSipuberScalarWhereWithAggregatesInput[]
    NOT?: AnalDataSipuberScalarWhereWithAggregatesInput | AnalDataSipuberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AnalDataSipuber"> | number
    created_at?: DateTimeWithAggregatesFilter<"AnalDataSipuber"> | Date | string
    device_id?: IntWithAggregatesFilter<"AnalDataSipuber"> | number
    location?: StringWithAggregatesFilter<"AnalDataSipuber"> | string
    co?: FloatWithAggregatesFilter<"AnalDataSipuber"> | number
    so?: FloatWithAggregatesFilter<"AnalDataSipuber"> | number
    no2?: FloatWithAggregatesFilter<"AnalDataSipuber"> | number
    o3?: FloatWithAggregatesFilter<"AnalDataSipuber"> | number
    nh3?: FloatWithAggregatesFilter<"AnalDataSipuber"> | number
    pm1?: FloatWithAggregatesFilter<"AnalDataSipuber"> | number
    pm25?: FloatWithAggregatesFilter<"AnalDataSipuber"> | number
    pm10?: FloatWithAggregatesFilter<"AnalDataSipuber"> | number
    v_bat?: FloatWithAggregatesFilter<"AnalDataSipuber"> | number
  }

  export type AlertManagementWhereInput = {
    AND?: AlertManagementWhereInput | AlertManagementWhereInput[]
    OR?: AlertManagementWhereInput[]
    NOT?: AlertManagementWhereInput | AlertManagementWhereInput[]
    id?: IntFilter<"AlertManagement"> | number
    wa_name?: StringFilter<"AlertManagement"> | string
    wa_number?: StringFilter<"AlertManagement"> | string
    email?: StringFilter<"AlertManagement"> | string
  }

  export type AlertManagementOrderByWithRelationInput = {
    id?: SortOrder
    wa_name?: SortOrder
    wa_number?: SortOrder
    email?: SortOrder
  }

  export type AlertManagementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlertManagementWhereInput | AlertManagementWhereInput[]
    OR?: AlertManagementWhereInput[]
    NOT?: AlertManagementWhereInput | AlertManagementWhereInput[]
    wa_name?: StringFilter<"AlertManagement"> | string
    wa_number?: StringFilter<"AlertManagement"> | string
    email?: StringFilter<"AlertManagement"> | string
  }, "id">

  export type AlertManagementOrderByWithAggregationInput = {
    id?: SortOrder
    wa_name?: SortOrder
    wa_number?: SortOrder
    email?: SortOrder
    _count?: AlertManagementCountOrderByAggregateInput
    _avg?: AlertManagementAvgOrderByAggregateInput
    _max?: AlertManagementMaxOrderByAggregateInput
    _min?: AlertManagementMinOrderByAggregateInput
    _sum?: AlertManagementSumOrderByAggregateInput
  }

  export type AlertManagementScalarWhereWithAggregatesInput = {
    AND?: AlertManagementScalarWhereWithAggregatesInput | AlertManagementScalarWhereWithAggregatesInput[]
    OR?: AlertManagementScalarWhereWithAggregatesInput[]
    NOT?: AlertManagementScalarWhereWithAggregatesInput | AlertManagementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AlertManagement"> | number
    wa_name?: StringWithAggregatesFilter<"AlertManagement"> | string
    wa_number?: StringWithAggregatesFilter<"AlertManagement"> | string
    email?: StringWithAggregatesFilter<"AlertManagement"> | string
  }

  export type UserCreateInput = {
    username: string
    full_name: string
    email: string
    password: string
    role: string
    isSoftDelete?: boolean
    devices?: DeviceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    full_name: string
    email: string
    password: string
    role: string
    isSoftDelete?: boolean
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSoftDelete?: BoolFieldUpdateOperationsInput | boolean
    devices?: DeviceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSoftDelete?: BoolFieldUpdateOperationsInput | boolean
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    full_name: string
    email: string
    password: string
    role: string
    isSoftDelete?: boolean
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSoftDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSoftDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DeviceCreateInput = {
    device_name: string
    no_modem?: string | null
    tanggal_paket?: string | null
    user: UserCreateNestedOneWithoutDevicesInput
    ppm_data?: PpmDataSipuberCreateNestedManyWithoutDeviceInput
    daily_data?: DailyDataSipuberCreateNestedManyWithoutDeviceInput
    anal_data?: AnalDataSipuberCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: number
    device_name: string
    no_modem?: string | null
    tanggal_paket?: string | null
    user_id: number
    ppm_data?: PpmDataSipuberUncheckedCreateNestedManyWithoutDeviceInput
    daily_data?: DailyDataSipuberUncheckedCreateNestedManyWithoutDeviceInput
    anal_data?: AnalDataSipuberUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    device_name?: StringFieldUpdateOperationsInput | string
    no_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput
    ppm_data?: PpmDataSipuberUpdateManyWithoutDeviceNestedInput
    daily_data?: DailyDataSipuberUpdateManyWithoutDeviceNestedInput
    anal_data?: AnalDataSipuberUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    device_name?: StringFieldUpdateOperationsInput | string
    no_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    ppm_data?: PpmDataSipuberUncheckedUpdateManyWithoutDeviceNestedInput
    daily_data?: DailyDataSipuberUncheckedUpdateManyWithoutDeviceNestedInput
    anal_data?: AnalDataSipuberUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id?: number
    device_name: string
    no_modem?: string | null
    tanggal_paket?: string | null
    user_id: number
  }

  export type DeviceUpdateManyMutationInput = {
    device_name?: StringFieldUpdateOperationsInput | string
    no_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    device_name?: StringFieldUpdateOperationsInput | string
    no_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type CmsSettingCreateInput = {
    thumbnail: string
    section: string
    content: string
  }

  export type CmsSettingUncheckedCreateInput = {
    id?: number
    thumbnail: string
    section: string
    content: string
  }

  export type CmsSettingUpdateInput = {
    thumbnail?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CmsSettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    thumbnail?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CmsSettingCreateManyInput = {
    id?: number
    thumbnail: string
    section: string
    content: string
  }

  export type CmsSettingUpdateManyMutationInput = {
    thumbnail?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CmsSettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    thumbnail?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type PpmDataSipuberCreateInput = {
    created_at?: Date | string
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    ispu_realtime: number
    v_bat: number
    device: DeviceCreateNestedOneWithoutPpm_dataInput
  }

  export type PpmDataSipuberUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    device_id: number
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    ispu_realtime: number
    v_bat: number
  }

  export type PpmDataSipuberUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    ispu_realtime?: IntFieldUpdateOperationsInput | number
    v_bat?: FloatFieldUpdateOperationsInput | number
    device?: DeviceUpdateOneRequiredWithoutPpm_dataNestedInput
  }

  export type PpmDataSipuberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    ispu_realtime?: IntFieldUpdateOperationsInput | number
    v_bat?: FloatFieldUpdateOperationsInput | number
  }

  export type PpmDataSipuberCreateManyInput = {
    id?: number
    created_at?: Date | string
    device_id: number
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    ispu_realtime: number
    v_bat: number
  }

  export type PpmDataSipuberUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    ispu_realtime?: IntFieldUpdateOperationsInput | number
    v_bat?: FloatFieldUpdateOperationsInput | number
  }

  export type PpmDataSipuberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    ispu_realtime?: IntFieldUpdateOperationsInput | number
    v_bat?: FloatFieldUpdateOperationsInput | number
  }

  export type DailyDataSipuberCreateInput = {
    created_at?: Date | string
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    ispu_daily: number
    device: DeviceCreateNestedOneWithoutDaily_dataInput
  }

  export type DailyDataSipuberUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    ispu_daily: number
    device_id: number
  }

  export type DailyDataSipuberUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    ispu_daily?: IntFieldUpdateOperationsInput | number
    device?: DeviceUpdateOneRequiredWithoutDaily_dataNestedInput
  }

  export type DailyDataSipuberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    ispu_daily?: IntFieldUpdateOperationsInput | number
    device_id?: IntFieldUpdateOperationsInput | number
  }

  export type DailyDataSipuberCreateManyInput = {
    id?: number
    created_at?: Date | string
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    ispu_daily: number
    device_id: number
  }

  export type DailyDataSipuberUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    ispu_daily?: IntFieldUpdateOperationsInput | number
  }

  export type DailyDataSipuberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    ispu_daily?: IntFieldUpdateOperationsInput | number
    device_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnalDataSipuberCreateInput = {
    created_at?: Date | string
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    v_bat: number
    device: DeviceCreateNestedOneWithoutAnal_dataInput
  }

  export type AnalDataSipuberUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    device_id: number
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    v_bat: number
  }

  export type AnalDataSipuberUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    v_bat?: FloatFieldUpdateOperationsInput | number
    device?: DeviceUpdateOneRequiredWithoutAnal_dataNestedInput
  }

  export type AnalDataSipuberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    v_bat?: FloatFieldUpdateOperationsInput | number
  }

  export type AnalDataSipuberCreateManyInput = {
    id?: number
    created_at?: Date | string
    device_id: number
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    v_bat: number
  }

  export type AnalDataSipuberUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    v_bat?: FloatFieldUpdateOperationsInput | number
  }

  export type AnalDataSipuberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    v_bat?: FloatFieldUpdateOperationsInput | number
  }

  export type AlertManagementCreateInput = {
    wa_name: string
    wa_number: string
    email: string
  }

  export type AlertManagementUncheckedCreateInput = {
    id?: number
    wa_name: string
    wa_number: string
    email: string
  }

  export type AlertManagementUpdateInput = {
    wa_name?: StringFieldUpdateOperationsInput | string
    wa_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AlertManagementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    wa_name?: StringFieldUpdateOperationsInput | string
    wa_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AlertManagementCreateManyInput = {
    id?: number
    wa_name: string
    wa_number: string
    email: string
  }

  export type AlertManagementUpdateManyMutationInput = {
    wa_name?: StringFieldUpdateOperationsInput | string
    wa_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AlertManagementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    wa_name?: StringFieldUpdateOperationsInput | string
    wa_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isSoftDelete?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isSoftDelete?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isSoftDelete?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PpmDataSipuberListRelationFilter = {
    every?: PpmDataSipuberWhereInput
    some?: PpmDataSipuberWhereInput
    none?: PpmDataSipuberWhereInput
  }

  export type DailyDataSipuberListRelationFilter = {
    every?: DailyDataSipuberWhereInput
    some?: DailyDataSipuberWhereInput
    none?: DailyDataSipuberWhereInput
  }

  export type AnalDataSipuberListRelationFilter = {
    every?: AnalDataSipuberWhereInput
    some?: AnalDataSipuberWhereInput
    none?: AnalDataSipuberWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PpmDataSipuberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyDataSipuberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnalDataSipuberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    device_name?: SortOrder
    no_modem?: SortOrder
    tanggal_paket?: SortOrder
    user_id?: SortOrder
  }

  export type DeviceAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    device_name?: SortOrder
    no_modem?: SortOrder
    tanggal_paket?: SortOrder
    user_id?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    device_name?: SortOrder
    no_modem?: SortOrder
    tanggal_paket?: SortOrder
    user_id?: SortOrder
  }

  export type DeviceSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CmsSettingCountOrderByAggregateInput = {
    id?: SortOrder
    thumbnail?: SortOrder
    section?: SortOrder
    content?: SortOrder
  }

  export type CmsSettingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CmsSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    thumbnail?: SortOrder
    section?: SortOrder
    content?: SortOrder
  }

  export type CmsSettingMinOrderByAggregateInput = {
    id?: SortOrder
    thumbnail?: SortOrder
    section?: SortOrder
    content?: SortOrder
  }

  export type CmsSettingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DeviceScalarRelationFilter = {
    is?: DeviceWhereInput
    isNot?: DeviceWhereInput
  }

  export type PpmDataSipuberCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_id?: SortOrder
    location?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    ispu_realtime?: SortOrder
    v_bat?: SortOrder
  }

  export type PpmDataSipuberAvgOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    ispu_realtime?: SortOrder
    v_bat?: SortOrder
  }

  export type PpmDataSipuberMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_id?: SortOrder
    location?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    ispu_realtime?: SortOrder
    v_bat?: SortOrder
  }

  export type PpmDataSipuberMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_id?: SortOrder
    location?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    ispu_realtime?: SortOrder
    v_bat?: SortOrder
  }

  export type PpmDataSipuberSumOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    ispu_realtime?: SortOrder
    v_bat?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DailyDataSipuberCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    location?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    ispu_daily?: SortOrder
    device_id?: SortOrder
  }

  export type DailyDataSipuberAvgOrderByAggregateInput = {
    id?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    ispu_daily?: SortOrder
    device_id?: SortOrder
  }

  export type DailyDataSipuberMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    location?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    ispu_daily?: SortOrder
    device_id?: SortOrder
  }

  export type DailyDataSipuberMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    location?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    ispu_daily?: SortOrder
    device_id?: SortOrder
  }

  export type DailyDataSipuberSumOrderByAggregateInput = {
    id?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    ispu_daily?: SortOrder
    device_id?: SortOrder
  }

  export type AnalDataSipuberCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_id?: SortOrder
    location?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    v_bat?: SortOrder
  }

  export type AnalDataSipuberAvgOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    v_bat?: SortOrder
  }

  export type AnalDataSipuberMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_id?: SortOrder
    location?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    v_bat?: SortOrder
  }

  export type AnalDataSipuberMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_id?: SortOrder
    location?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    v_bat?: SortOrder
  }

  export type AnalDataSipuberSumOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    co?: SortOrder
    so?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm1?: SortOrder
    pm25?: SortOrder
    pm10?: SortOrder
    v_bat?: SortOrder
  }

  export type AlertManagementCountOrderByAggregateInput = {
    id?: SortOrder
    wa_name?: SortOrder
    wa_number?: SortOrder
    email?: SortOrder
  }

  export type AlertManagementAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AlertManagementMaxOrderByAggregateInput = {
    id?: SortOrder
    wa_name?: SortOrder
    wa_number?: SortOrder
    email?: SortOrder
  }

  export type AlertManagementMinOrderByAggregateInput = {
    id?: SortOrder
    wa_name?: SortOrder
    wa_number?: SortOrder
    email?: SortOrder
  }

  export type AlertManagementSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DeviceCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DeviceUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutUserInput | DeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutUserInput | DeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutUserInput | DeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutUserInput | DeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutUserInput | DeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutUserInput | DeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDevicesInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    connect?: UserWhereUniqueInput
  }

  export type PpmDataSipuberCreateNestedManyWithoutDeviceInput = {
    create?: XOR<PpmDataSipuberCreateWithoutDeviceInput, PpmDataSipuberUncheckedCreateWithoutDeviceInput> | PpmDataSipuberCreateWithoutDeviceInput[] | PpmDataSipuberUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: PpmDataSipuberCreateOrConnectWithoutDeviceInput | PpmDataSipuberCreateOrConnectWithoutDeviceInput[]
    createMany?: PpmDataSipuberCreateManyDeviceInputEnvelope
    connect?: PpmDataSipuberWhereUniqueInput | PpmDataSipuberWhereUniqueInput[]
  }

  export type DailyDataSipuberCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DailyDataSipuberCreateWithoutDeviceInput, DailyDataSipuberUncheckedCreateWithoutDeviceInput> | DailyDataSipuberCreateWithoutDeviceInput[] | DailyDataSipuberUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DailyDataSipuberCreateOrConnectWithoutDeviceInput | DailyDataSipuberCreateOrConnectWithoutDeviceInput[]
    createMany?: DailyDataSipuberCreateManyDeviceInputEnvelope
    connect?: DailyDataSipuberWhereUniqueInput | DailyDataSipuberWhereUniqueInput[]
  }

  export type AnalDataSipuberCreateNestedManyWithoutDeviceInput = {
    create?: XOR<AnalDataSipuberCreateWithoutDeviceInput, AnalDataSipuberUncheckedCreateWithoutDeviceInput> | AnalDataSipuberCreateWithoutDeviceInput[] | AnalDataSipuberUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AnalDataSipuberCreateOrConnectWithoutDeviceInput | AnalDataSipuberCreateOrConnectWithoutDeviceInput[]
    createMany?: AnalDataSipuberCreateManyDeviceInputEnvelope
    connect?: AnalDataSipuberWhereUniqueInput | AnalDataSipuberWhereUniqueInput[]
  }

  export type PpmDataSipuberUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<PpmDataSipuberCreateWithoutDeviceInput, PpmDataSipuberUncheckedCreateWithoutDeviceInput> | PpmDataSipuberCreateWithoutDeviceInput[] | PpmDataSipuberUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: PpmDataSipuberCreateOrConnectWithoutDeviceInput | PpmDataSipuberCreateOrConnectWithoutDeviceInput[]
    createMany?: PpmDataSipuberCreateManyDeviceInputEnvelope
    connect?: PpmDataSipuberWhereUniqueInput | PpmDataSipuberWhereUniqueInput[]
  }

  export type DailyDataSipuberUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DailyDataSipuberCreateWithoutDeviceInput, DailyDataSipuberUncheckedCreateWithoutDeviceInput> | DailyDataSipuberCreateWithoutDeviceInput[] | DailyDataSipuberUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DailyDataSipuberCreateOrConnectWithoutDeviceInput | DailyDataSipuberCreateOrConnectWithoutDeviceInput[]
    createMany?: DailyDataSipuberCreateManyDeviceInputEnvelope
    connect?: DailyDataSipuberWhereUniqueInput | DailyDataSipuberWhereUniqueInput[]
  }

  export type AnalDataSipuberUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<AnalDataSipuberCreateWithoutDeviceInput, AnalDataSipuberUncheckedCreateWithoutDeviceInput> | AnalDataSipuberCreateWithoutDeviceInput[] | AnalDataSipuberUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AnalDataSipuberCreateOrConnectWithoutDeviceInput | AnalDataSipuberCreateOrConnectWithoutDeviceInput[]
    createMany?: AnalDataSipuberCreateManyDeviceInputEnvelope
    connect?: AnalDataSipuberWhereUniqueInput | AnalDataSipuberWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    upsert?: UserUpsertWithoutDevicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDevicesInput, UserUpdateWithoutDevicesInput>, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type PpmDataSipuberUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<PpmDataSipuberCreateWithoutDeviceInput, PpmDataSipuberUncheckedCreateWithoutDeviceInput> | PpmDataSipuberCreateWithoutDeviceInput[] | PpmDataSipuberUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: PpmDataSipuberCreateOrConnectWithoutDeviceInput | PpmDataSipuberCreateOrConnectWithoutDeviceInput[]
    upsert?: PpmDataSipuberUpsertWithWhereUniqueWithoutDeviceInput | PpmDataSipuberUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: PpmDataSipuberCreateManyDeviceInputEnvelope
    set?: PpmDataSipuberWhereUniqueInput | PpmDataSipuberWhereUniqueInput[]
    disconnect?: PpmDataSipuberWhereUniqueInput | PpmDataSipuberWhereUniqueInput[]
    delete?: PpmDataSipuberWhereUniqueInput | PpmDataSipuberWhereUniqueInput[]
    connect?: PpmDataSipuberWhereUniqueInput | PpmDataSipuberWhereUniqueInput[]
    update?: PpmDataSipuberUpdateWithWhereUniqueWithoutDeviceInput | PpmDataSipuberUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: PpmDataSipuberUpdateManyWithWhereWithoutDeviceInput | PpmDataSipuberUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: PpmDataSipuberScalarWhereInput | PpmDataSipuberScalarWhereInput[]
  }

  export type DailyDataSipuberUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DailyDataSipuberCreateWithoutDeviceInput, DailyDataSipuberUncheckedCreateWithoutDeviceInput> | DailyDataSipuberCreateWithoutDeviceInput[] | DailyDataSipuberUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DailyDataSipuberCreateOrConnectWithoutDeviceInput | DailyDataSipuberCreateOrConnectWithoutDeviceInput[]
    upsert?: DailyDataSipuberUpsertWithWhereUniqueWithoutDeviceInput | DailyDataSipuberUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DailyDataSipuberCreateManyDeviceInputEnvelope
    set?: DailyDataSipuberWhereUniqueInput | DailyDataSipuberWhereUniqueInput[]
    disconnect?: DailyDataSipuberWhereUniqueInput | DailyDataSipuberWhereUniqueInput[]
    delete?: DailyDataSipuberWhereUniqueInput | DailyDataSipuberWhereUniqueInput[]
    connect?: DailyDataSipuberWhereUniqueInput | DailyDataSipuberWhereUniqueInput[]
    update?: DailyDataSipuberUpdateWithWhereUniqueWithoutDeviceInput | DailyDataSipuberUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DailyDataSipuberUpdateManyWithWhereWithoutDeviceInput | DailyDataSipuberUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DailyDataSipuberScalarWhereInput | DailyDataSipuberScalarWhereInput[]
  }

  export type AnalDataSipuberUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<AnalDataSipuberCreateWithoutDeviceInput, AnalDataSipuberUncheckedCreateWithoutDeviceInput> | AnalDataSipuberCreateWithoutDeviceInput[] | AnalDataSipuberUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AnalDataSipuberCreateOrConnectWithoutDeviceInput | AnalDataSipuberCreateOrConnectWithoutDeviceInput[]
    upsert?: AnalDataSipuberUpsertWithWhereUniqueWithoutDeviceInput | AnalDataSipuberUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: AnalDataSipuberCreateManyDeviceInputEnvelope
    set?: AnalDataSipuberWhereUniqueInput | AnalDataSipuberWhereUniqueInput[]
    disconnect?: AnalDataSipuberWhereUniqueInput | AnalDataSipuberWhereUniqueInput[]
    delete?: AnalDataSipuberWhereUniqueInput | AnalDataSipuberWhereUniqueInput[]
    connect?: AnalDataSipuberWhereUniqueInput | AnalDataSipuberWhereUniqueInput[]
    update?: AnalDataSipuberUpdateWithWhereUniqueWithoutDeviceInput | AnalDataSipuberUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: AnalDataSipuberUpdateManyWithWhereWithoutDeviceInput | AnalDataSipuberUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: AnalDataSipuberScalarWhereInput | AnalDataSipuberScalarWhereInput[]
  }

  export type PpmDataSipuberUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<PpmDataSipuberCreateWithoutDeviceInput, PpmDataSipuberUncheckedCreateWithoutDeviceInput> | PpmDataSipuberCreateWithoutDeviceInput[] | PpmDataSipuberUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: PpmDataSipuberCreateOrConnectWithoutDeviceInput | PpmDataSipuberCreateOrConnectWithoutDeviceInput[]
    upsert?: PpmDataSipuberUpsertWithWhereUniqueWithoutDeviceInput | PpmDataSipuberUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: PpmDataSipuberCreateManyDeviceInputEnvelope
    set?: PpmDataSipuberWhereUniqueInput | PpmDataSipuberWhereUniqueInput[]
    disconnect?: PpmDataSipuberWhereUniqueInput | PpmDataSipuberWhereUniqueInput[]
    delete?: PpmDataSipuberWhereUniqueInput | PpmDataSipuberWhereUniqueInput[]
    connect?: PpmDataSipuberWhereUniqueInput | PpmDataSipuberWhereUniqueInput[]
    update?: PpmDataSipuberUpdateWithWhereUniqueWithoutDeviceInput | PpmDataSipuberUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: PpmDataSipuberUpdateManyWithWhereWithoutDeviceInput | PpmDataSipuberUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: PpmDataSipuberScalarWhereInput | PpmDataSipuberScalarWhereInput[]
  }

  export type DailyDataSipuberUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DailyDataSipuberCreateWithoutDeviceInput, DailyDataSipuberUncheckedCreateWithoutDeviceInput> | DailyDataSipuberCreateWithoutDeviceInput[] | DailyDataSipuberUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DailyDataSipuberCreateOrConnectWithoutDeviceInput | DailyDataSipuberCreateOrConnectWithoutDeviceInput[]
    upsert?: DailyDataSipuberUpsertWithWhereUniqueWithoutDeviceInput | DailyDataSipuberUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DailyDataSipuberCreateManyDeviceInputEnvelope
    set?: DailyDataSipuberWhereUniqueInput | DailyDataSipuberWhereUniqueInput[]
    disconnect?: DailyDataSipuberWhereUniqueInput | DailyDataSipuberWhereUniqueInput[]
    delete?: DailyDataSipuberWhereUniqueInput | DailyDataSipuberWhereUniqueInput[]
    connect?: DailyDataSipuberWhereUniqueInput | DailyDataSipuberWhereUniqueInput[]
    update?: DailyDataSipuberUpdateWithWhereUniqueWithoutDeviceInput | DailyDataSipuberUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DailyDataSipuberUpdateManyWithWhereWithoutDeviceInput | DailyDataSipuberUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DailyDataSipuberScalarWhereInput | DailyDataSipuberScalarWhereInput[]
  }

  export type AnalDataSipuberUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<AnalDataSipuberCreateWithoutDeviceInput, AnalDataSipuberUncheckedCreateWithoutDeviceInput> | AnalDataSipuberCreateWithoutDeviceInput[] | AnalDataSipuberUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AnalDataSipuberCreateOrConnectWithoutDeviceInput | AnalDataSipuberCreateOrConnectWithoutDeviceInput[]
    upsert?: AnalDataSipuberUpsertWithWhereUniqueWithoutDeviceInput | AnalDataSipuberUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: AnalDataSipuberCreateManyDeviceInputEnvelope
    set?: AnalDataSipuberWhereUniqueInput | AnalDataSipuberWhereUniqueInput[]
    disconnect?: AnalDataSipuberWhereUniqueInput | AnalDataSipuberWhereUniqueInput[]
    delete?: AnalDataSipuberWhereUniqueInput | AnalDataSipuberWhereUniqueInput[]
    connect?: AnalDataSipuberWhereUniqueInput | AnalDataSipuberWhereUniqueInput[]
    update?: AnalDataSipuberUpdateWithWhereUniqueWithoutDeviceInput | AnalDataSipuberUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: AnalDataSipuberUpdateManyWithWhereWithoutDeviceInput | AnalDataSipuberUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: AnalDataSipuberScalarWhereInput | AnalDataSipuberScalarWhereInput[]
  }

  export type DeviceCreateNestedOneWithoutPpm_dataInput = {
    create?: XOR<DeviceCreateWithoutPpm_dataInput, DeviceUncheckedCreateWithoutPpm_dataInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutPpm_dataInput
    connect?: DeviceWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeviceUpdateOneRequiredWithoutPpm_dataNestedInput = {
    create?: XOR<DeviceCreateWithoutPpm_dataInput, DeviceUncheckedCreateWithoutPpm_dataInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutPpm_dataInput
    upsert?: DeviceUpsertWithoutPpm_dataInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutPpm_dataInput, DeviceUpdateWithoutPpm_dataInput>, DeviceUncheckedUpdateWithoutPpm_dataInput>
  }

  export type DeviceCreateNestedOneWithoutDaily_dataInput = {
    create?: XOR<DeviceCreateWithoutDaily_dataInput, DeviceUncheckedCreateWithoutDaily_dataInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutDaily_dataInput
    connect?: DeviceWhereUniqueInput
  }

  export type DeviceUpdateOneRequiredWithoutDaily_dataNestedInput = {
    create?: XOR<DeviceCreateWithoutDaily_dataInput, DeviceUncheckedCreateWithoutDaily_dataInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutDaily_dataInput
    upsert?: DeviceUpsertWithoutDaily_dataInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutDaily_dataInput, DeviceUpdateWithoutDaily_dataInput>, DeviceUncheckedUpdateWithoutDaily_dataInput>
  }

  export type DeviceCreateNestedOneWithoutAnal_dataInput = {
    create?: XOR<DeviceCreateWithoutAnal_dataInput, DeviceUncheckedCreateWithoutAnal_dataInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutAnal_dataInput
    connect?: DeviceWhereUniqueInput
  }

  export type DeviceUpdateOneRequiredWithoutAnal_dataNestedInput = {
    create?: XOR<DeviceCreateWithoutAnal_dataInput, DeviceUncheckedCreateWithoutAnal_dataInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutAnal_dataInput
    upsert?: DeviceUpsertWithoutAnal_dataInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutAnal_dataInput, DeviceUpdateWithoutAnal_dataInput>, DeviceUncheckedUpdateWithoutAnal_dataInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DeviceCreateWithoutUserInput = {
    device_name: string
    no_modem?: string | null
    tanggal_paket?: string | null
    ppm_data?: PpmDataSipuberCreateNestedManyWithoutDeviceInput
    daily_data?: DailyDataSipuberCreateNestedManyWithoutDeviceInput
    anal_data?: AnalDataSipuberCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutUserInput = {
    id?: number
    device_name: string
    no_modem?: string | null
    tanggal_paket?: string | null
    ppm_data?: PpmDataSipuberUncheckedCreateNestedManyWithoutDeviceInput
    daily_data?: DailyDataSipuberUncheckedCreateNestedManyWithoutDeviceInput
    anal_data?: AnalDataSipuberUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutUserInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput>
  }

  export type DeviceCreateManyUserInputEnvelope = {
    data: DeviceCreateManyUserInput | DeviceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DeviceUpsertWithWhereUniqueWithoutUserInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutUserInput, DeviceUncheckedUpdateWithoutUserInput>
    create: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutUserInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutUserInput, DeviceUncheckedUpdateWithoutUserInput>
  }

  export type DeviceUpdateManyWithWhereWithoutUserInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutUserInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: IntFilter<"Device"> | number
    device_name?: StringFilter<"Device"> | string
    no_modem?: StringNullableFilter<"Device"> | string | null
    tanggal_paket?: StringNullableFilter<"Device"> | string | null
    user_id?: IntFilter<"Device"> | number
  }

  export type UserCreateWithoutDevicesInput = {
    username: string
    full_name: string
    email: string
    password: string
    role: string
    isSoftDelete?: boolean
  }

  export type UserUncheckedCreateWithoutDevicesInput = {
    id?: number
    username: string
    full_name: string
    email: string
    password: string
    role: string
    isSoftDelete?: boolean
  }

  export type UserCreateOrConnectWithoutDevicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
  }

  export type PpmDataSipuberCreateWithoutDeviceInput = {
    created_at?: Date | string
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    ispu_realtime: number
    v_bat: number
  }

  export type PpmDataSipuberUncheckedCreateWithoutDeviceInput = {
    id?: number
    created_at?: Date | string
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    ispu_realtime: number
    v_bat: number
  }

  export type PpmDataSipuberCreateOrConnectWithoutDeviceInput = {
    where: PpmDataSipuberWhereUniqueInput
    create: XOR<PpmDataSipuberCreateWithoutDeviceInput, PpmDataSipuberUncheckedCreateWithoutDeviceInput>
  }

  export type PpmDataSipuberCreateManyDeviceInputEnvelope = {
    data: PpmDataSipuberCreateManyDeviceInput | PpmDataSipuberCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type DailyDataSipuberCreateWithoutDeviceInput = {
    created_at?: Date | string
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    ispu_daily: number
  }

  export type DailyDataSipuberUncheckedCreateWithoutDeviceInput = {
    id?: number
    created_at?: Date | string
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    ispu_daily: number
  }

  export type DailyDataSipuberCreateOrConnectWithoutDeviceInput = {
    where: DailyDataSipuberWhereUniqueInput
    create: XOR<DailyDataSipuberCreateWithoutDeviceInput, DailyDataSipuberUncheckedCreateWithoutDeviceInput>
  }

  export type DailyDataSipuberCreateManyDeviceInputEnvelope = {
    data: DailyDataSipuberCreateManyDeviceInput | DailyDataSipuberCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type AnalDataSipuberCreateWithoutDeviceInput = {
    created_at?: Date | string
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    v_bat: number
  }

  export type AnalDataSipuberUncheckedCreateWithoutDeviceInput = {
    id?: number
    created_at?: Date | string
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    v_bat: number
  }

  export type AnalDataSipuberCreateOrConnectWithoutDeviceInput = {
    where: AnalDataSipuberWhereUniqueInput
    create: XOR<AnalDataSipuberCreateWithoutDeviceInput, AnalDataSipuberUncheckedCreateWithoutDeviceInput>
  }

  export type AnalDataSipuberCreateManyDeviceInputEnvelope = {
    data: AnalDataSipuberCreateManyDeviceInput | AnalDataSipuberCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDevicesInput = {
    update: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDevicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserUpdateWithoutDevicesInput = {
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSoftDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateWithoutDevicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSoftDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PpmDataSipuberUpsertWithWhereUniqueWithoutDeviceInput = {
    where: PpmDataSipuberWhereUniqueInput
    update: XOR<PpmDataSipuberUpdateWithoutDeviceInput, PpmDataSipuberUncheckedUpdateWithoutDeviceInput>
    create: XOR<PpmDataSipuberCreateWithoutDeviceInput, PpmDataSipuberUncheckedCreateWithoutDeviceInput>
  }

  export type PpmDataSipuberUpdateWithWhereUniqueWithoutDeviceInput = {
    where: PpmDataSipuberWhereUniqueInput
    data: XOR<PpmDataSipuberUpdateWithoutDeviceInput, PpmDataSipuberUncheckedUpdateWithoutDeviceInput>
  }

  export type PpmDataSipuberUpdateManyWithWhereWithoutDeviceInput = {
    where: PpmDataSipuberScalarWhereInput
    data: XOR<PpmDataSipuberUpdateManyMutationInput, PpmDataSipuberUncheckedUpdateManyWithoutDeviceInput>
  }

  export type PpmDataSipuberScalarWhereInput = {
    AND?: PpmDataSipuberScalarWhereInput | PpmDataSipuberScalarWhereInput[]
    OR?: PpmDataSipuberScalarWhereInput[]
    NOT?: PpmDataSipuberScalarWhereInput | PpmDataSipuberScalarWhereInput[]
    id?: IntFilter<"PpmDataSipuber"> | number
    created_at?: DateTimeFilter<"PpmDataSipuber"> | Date | string
    device_id?: IntFilter<"PpmDataSipuber"> | number
    location?: StringFilter<"PpmDataSipuber"> | string
    co?: FloatFilter<"PpmDataSipuber"> | number
    so?: FloatFilter<"PpmDataSipuber"> | number
    no2?: FloatFilter<"PpmDataSipuber"> | number
    o3?: FloatFilter<"PpmDataSipuber"> | number
    nh3?: FloatFilter<"PpmDataSipuber"> | number
    pm1?: FloatFilter<"PpmDataSipuber"> | number
    pm25?: FloatFilter<"PpmDataSipuber"> | number
    pm10?: FloatFilter<"PpmDataSipuber"> | number
    ispu_realtime?: IntFilter<"PpmDataSipuber"> | number
    v_bat?: FloatFilter<"PpmDataSipuber"> | number
  }

  export type DailyDataSipuberUpsertWithWhereUniqueWithoutDeviceInput = {
    where: DailyDataSipuberWhereUniqueInput
    update: XOR<DailyDataSipuberUpdateWithoutDeviceInput, DailyDataSipuberUncheckedUpdateWithoutDeviceInput>
    create: XOR<DailyDataSipuberCreateWithoutDeviceInput, DailyDataSipuberUncheckedCreateWithoutDeviceInput>
  }

  export type DailyDataSipuberUpdateWithWhereUniqueWithoutDeviceInput = {
    where: DailyDataSipuberWhereUniqueInput
    data: XOR<DailyDataSipuberUpdateWithoutDeviceInput, DailyDataSipuberUncheckedUpdateWithoutDeviceInput>
  }

  export type DailyDataSipuberUpdateManyWithWhereWithoutDeviceInput = {
    where: DailyDataSipuberScalarWhereInput
    data: XOR<DailyDataSipuberUpdateManyMutationInput, DailyDataSipuberUncheckedUpdateManyWithoutDeviceInput>
  }

  export type DailyDataSipuberScalarWhereInput = {
    AND?: DailyDataSipuberScalarWhereInput | DailyDataSipuberScalarWhereInput[]
    OR?: DailyDataSipuberScalarWhereInput[]
    NOT?: DailyDataSipuberScalarWhereInput | DailyDataSipuberScalarWhereInput[]
    id?: IntFilter<"DailyDataSipuber"> | number
    created_at?: DateTimeFilter<"DailyDataSipuber"> | Date | string
    location?: StringFilter<"DailyDataSipuber"> | string
    co?: FloatFilter<"DailyDataSipuber"> | number
    so?: FloatFilter<"DailyDataSipuber"> | number
    no2?: FloatFilter<"DailyDataSipuber"> | number
    o3?: FloatFilter<"DailyDataSipuber"> | number
    nh3?: FloatFilter<"DailyDataSipuber"> | number
    pm1?: FloatFilter<"DailyDataSipuber"> | number
    pm25?: FloatFilter<"DailyDataSipuber"> | number
    pm10?: FloatFilter<"DailyDataSipuber"> | number
    ispu_daily?: IntFilter<"DailyDataSipuber"> | number
    device_id?: IntFilter<"DailyDataSipuber"> | number
  }

  export type AnalDataSipuberUpsertWithWhereUniqueWithoutDeviceInput = {
    where: AnalDataSipuberWhereUniqueInput
    update: XOR<AnalDataSipuberUpdateWithoutDeviceInput, AnalDataSipuberUncheckedUpdateWithoutDeviceInput>
    create: XOR<AnalDataSipuberCreateWithoutDeviceInput, AnalDataSipuberUncheckedCreateWithoutDeviceInput>
  }

  export type AnalDataSipuberUpdateWithWhereUniqueWithoutDeviceInput = {
    where: AnalDataSipuberWhereUniqueInput
    data: XOR<AnalDataSipuberUpdateWithoutDeviceInput, AnalDataSipuberUncheckedUpdateWithoutDeviceInput>
  }

  export type AnalDataSipuberUpdateManyWithWhereWithoutDeviceInput = {
    where: AnalDataSipuberScalarWhereInput
    data: XOR<AnalDataSipuberUpdateManyMutationInput, AnalDataSipuberUncheckedUpdateManyWithoutDeviceInput>
  }

  export type AnalDataSipuberScalarWhereInput = {
    AND?: AnalDataSipuberScalarWhereInput | AnalDataSipuberScalarWhereInput[]
    OR?: AnalDataSipuberScalarWhereInput[]
    NOT?: AnalDataSipuberScalarWhereInput | AnalDataSipuberScalarWhereInput[]
    id?: IntFilter<"AnalDataSipuber"> | number
    created_at?: DateTimeFilter<"AnalDataSipuber"> | Date | string
    device_id?: IntFilter<"AnalDataSipuber"> | number
    location?: StringFilter<"AnalDataSipuber"> | string
    co?: FloatFilter<"AnalDataSipuber"> | number
    so?: FloatFilter<"AnalDataSipuber"> | number
    no2?: FloatFilter<"AnalDataSipuber"> | number
    o3?: FloatFilter<"AnalDataSipuber"> | number
    nh3?: FloatFilter<"AnalDataSipuber"> | number
    pm1?: FloatFilter<"AnalDataSipuber"> | number
    pm25?: FloatFilter<"AnalDataSipuber"> | number
    pm10?: FloatFilter<"AnalDataSipuber"> | number
    v_bat?: FloatFilter<"AnalDataSipuber"> | number
  }

  export type DeviceCreateWithoutPpm_dataInput = {
    device_name: string
    no_modem?: string | null
    tanggal_paket?: string | null
    user: UserCreateNestedOneWithoutDevicesInput
    daily_data?: DailyDataSipuberCreateNestedManyWithoutDeviceInput
    anal_data?: AnalDataSipuberCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutPpm_dataInput = {
    id?: number
    device_name: string
    no_modem?: string | null
    tanggal_paket?: string | null
    user_id: number
    daily_data?: DailyDataSipuberUncheckedCreateNestedManyWithoutDeviceInput
    anal_data?: AnalDataSipuberUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutPpm_dataInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutPpm_dataInput, DeviceUncheckedCreateWithoutPpm_dataInput>
  }

  export type DeviceUpsertWithoutPpm_dataInput = {
    update: XOR<DeviceUpdateWithoutPpm_dataInput, DeviceUncheckedUpdateWithoutPpm_dataInput>
    create: XOR<DeviceCreateWithoutPpm_dataInput, DeviceUncheckedCreateWithoutPpm_dataInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutPpm_dataInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutPpm_dataInput, DeviceUncheckedUpdateWithoutPpm_dataInput>
  }

  export type DeviceUpdateWithoutPpm_dataInput = {
    device_name?: StringFieldUpdateOperationsInput | string
    no_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput
    daily_data?: DailyDataSipuberUpdateManyWithoutDeviceNestedInput
    anal_data?: AnalDataSipuberUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutPpm_dataInput = {
    id?: IntFieldUpdateOperationsInput | number
    device_name?: StringFieldUpdateOperationsInput | string
    no_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    daily_data?: DailyDataSipuberUncheckedUpdateManyWithoutDeviceNestedInput
    anal_data?: AnalDataSipuberUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateWithoutDaily_dataInput = {
    device_name: string
    no_modem?: string | null
    tanggal_paket?: string | null
    user: UserCreateNestedOneWithoutDevicesInput
    ppm_data?: PpmDataSipuberCreateNestedManyWithoutDeviceInput
    anal_data?: AnalDataSipuberCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutDaily_dataInput = {
    id?: number
    device_name: string
    no_modem?: string | null
    tanggal_paket?: string | null
    user_id: number
    ppm_data?: PpmDataSipuberUncheckedCreateNestedManyWithoutDeviceInput
    anal_data?: AnalDataSipuberUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutDaily_dataInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutDaily_dataInput, DeviceUncheckedCreateWithoutDaily_dataInput>
  }

  export type DeviceUpsertWithoutDaily_dataInput = {
    update: XOR<DeviceUpdateWithoutDaily_dataInput, DeviceUncheckedUpdateWithoutDaily_dataInput>
    create: XOR<DeviceCreateWithoutDaily_dataInput, DeviceUncheckedCreateWithoutDaily_dataInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutDaily_dataInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutDaily_dataInput, DeviceUncheckedUpdateWithoutDaily_dataInput>
  }

  export type DeviceUpdateWithoutDaily_dataInput = {
    device_name?: StringFieldUpdateOperationsInput | string
    no_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput
    ppm_data?: PpmDataSipuberUpdateManyWithoutDeviceNestedInput
    anal_data?: AnalDataSipuberUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutDaily_dataInput = {
    id?: IntFieldUpdateOperationsInput | number
    device_name?: StringFieldUpdateOperationsInput | string
    no_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    ppm_data?: PpmDataSipuberUncheckedUpdateManyWithoutDeviceNestedInput
    anal_data?: AnalDataSipuberUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateWithoutAnal_dataInput = {
    device_name: string
    no_modem?: string | null
    tanggal_paket?: string | null
    user: UserCreateNestedOneWithoutDevicesInput
    ppm_data?: PpmDataSipuberCreateNestedManyWithoutDeviceInput
    daily_data?: DailyDataSipuberCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutAnal_dataInput = {
    id?: number
    device_name: string
    no_modem?: string | null
    tanggal_paket?: string | null
    user_id: number
    ppm_data?: PpmDataSipuberUncheckedCreateNestedManyWithoutDeviceInput
    daily_data?: DailyDataSipuberUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutAnal_dataInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutAnal_dataInput, DeviceUncheckedCreateWithoutAnal_dataInput>
  }

  export type DeviceUpsertWithoutAnal_dataInput = {
    update: XOR<DeviceUpdateWithoutAnal_dataInput, DeviceUncheckedUpdateWithoutAnal_dataInput>
    create: XOR<DeviceCreateWithoutAnal_dataInput, DeviceUncheckedCreateWithoutAnal_dataInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutAnal_dataInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutAnal_dataInput, DeviceUncheckedUpdateWithoutAnal_dataInput>
  }

  export type DeviceUpdateWithoutAnal_dataInput = {
    device_name?: StringFieldUpdateOperationsInput | string
    no_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput
    ppm_data?: PpmDataSipuberUpdateManyWithoutDeviceNestedInput
    daily_data?: DailyDataSipuberUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutAnal_dataInput = {
    id?: IntFieldUpdateOperationsInput | number
    device_name?: StringFieldUpdateOperationsInput | string
    no_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    ppm_data?: PpmDataSipuberUncheckedUpdateManyWithoutDeviceNestedInput
    daily_data?: DailyDataSipuberUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyUserInput = {
    id?: number
    device_name: string
    no_modem?: string | null
    tanggal_paket?: string | null
  }

  export type DeviceUpdateWithoutUserInput = {
    device_name?: StringFieldUpdateOperationsInput | string
    no_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableStringFieldUpdateOperationsInput | string | null
    ppm_data?: PpmDataSipuberUpdateManyWithoutDeviceNestedInput
    daily_data?: DailyDataSipuberUpdateManyWithoutDeviceNestedInput
    anal_data?: AnalDataSipuberUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    device_name?: StringFieldUpdateOperationsInput | string
    no_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableStringFieldUpdateOperationsInput | string | null
    ppm_data?: PpmDataSipuberUncheckedUpdateManyWithoutDeviceNestedInput
    daily_data?: DailyDataSipuberUncheckedUpdateManyWithoutDeviceNestedInput
    anal_data?: AnalDataSipuberUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    device_name?: StringFieldUpdateOperationsInput | string
    no_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PpmDataSipuberCreateManyDeviceInput = {
    id?: number
    created_at?: Date | string
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    ispu_realtime: number
    v_bat: number
  }

  export type DailyDataSipuberCreateManyDeviceInput = {
    id?: number
    created_at?: Date | string
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    ispu_daily: number
  }

  export type AnalDataSipuberCreateManyDeviceInput = {
    id?: number
    created_at?: Date | string
    location: string
    co: number
    so: number
    no2: number
    o3: number
    nh3: number
    pm1: number
    pm25: number
    pm10: number
    v_bat: number
  }

  export type PpmDataSipuberUpdateWithoutDeviceInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    ispu_realtime?: IntFieldUpdateOperationsInput | number
    v_bat?: FloatFieldUpdateOperationsInput | number
  }

  export type PpmDataSipuberUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    ispu_realtime?: IntFieldUpdateOperationsInput | number
    v_bat?: FloatFieldUpdateOperationsInput | number
  }

  export type PpmDataSipuberUncheckedUpdateManyWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    ispu_realtime?: IntFieldUpdateOperationsInput | number
    v_bat?: FloatFieldUpdateOperationsInput | number
  }

  export type DailyDataSipuberUpdateWithoutDeviceInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    ispu_daily?: IntFieldUpdateOperationsInput | number
  }

  export type DailyDataSipuberUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    ispu_daily?: IntFieldUpdateOperationsInput | number
  }

  export type DailyDataSipuberUncheckedUpdateManyWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    ispu_daily?: IntFieldUpdateOperationsInput | number
  }

  export type AnalDataSipuberUpdateWithoutDeviceInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    v_bat?: FloatFieldUpdateOperationsInput | number
  }

  export type AnalDataSipuberUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    v_bat?: FloatFieldUpdateOperationsInput | number
  }

  export type AnalDataSipuberUncheckedUpdateManyWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    co?: FloatFieldUpdateOperationsInput | number
    so?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm1?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    v_bat?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
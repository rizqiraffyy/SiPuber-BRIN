
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
 * Model Sipuber
 * 
 */
export type Sipuber = $Result.DefaultSelection<Prisma.$SipuberPayload>
/**
 * Model SipuberOlah
 * 
 */
export type SipuberOlah = $Result.DefaultSelection<Prisma.$SipuberOlahPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>

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
   * `prisma.sipuber`: Exposes CRUD operations for the **Sipuber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sipubers
    * const sipubers = await prisma.sipuber.findMany()
    * ```
    */
  get sipuber(): Prisma.SipuberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sipuberOlah`: Exposes CRUD operations for the **SipuberOlah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SipuberOlahs
    * const sipuberOlahs = await prisma.sipuberOlah.findMany()
    * ```
    */
  get sipuberOlah(): Prisma.SipuberOlahDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;
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
    Sipuber: 'Sipuber',
    SipuberOlah: 'SipuberOlah',
    Contact: 'Contact',
    Session: 'Session'
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
      modelProps: "user" | "device" | "sipuber" | "sipuberOlah" | "contact" | "session"
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
      Sipuber: {
        payload: Prisma.$SipuberPayload<ExtArgs>
        fields: Prisma.SipuberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SipuberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SipuberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberPayload>
          }
          findFirst: {
            args: Prisma.SipuberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SipuberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberPayload>
          }
          findMany: {
            args: Prisma.SipuberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberPayload>[]
          }
          create: {
            args: Prisma.SipuberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberPayload>
          }
          createMany: {
            args: Prisma.SipuberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SipuberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberPayload>[]
          }
          delete: {
            args: Prisma.SipuberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberPayload>
          }
          update: {
            args: Prisma.SipuberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberPayload>
          }
          deleteMany: {
            args: Prisma.SipuberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SipuberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SipuberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberPayload>[]
          }
          upsert: {
            args: Prisma.SipuberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberPayload>
          }
          aggregate: {
            args: Prisma.SipuberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSipuber>
          }
          groupBy: {
            args: Prisma.SipuberGroupByArgs<ExtArgs>
            result: $Utils.Optional<SipuberGroupByOutputType>[]
          }
          count: {
            args: Prisma.SipuberCountArgs<ExtArgs>
            result: $Utils.Optional<SipuberCountAggregateOutputType> | number
          }
        }
      }
      SipuberOlah: {
        payload: Prisma.$SipuberOlahPayload<ExtArgs>
        fields: Prisma.SipuberOlahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SipuberOlahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberOlahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SipuberOlahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberOlahPayload>
          }
          findFirst: {
            args: Prisma.SipuberOlahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberOlahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SipuberOlahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberOlahPayload>
          }
          findMany: {
            args: Prisma.SipuberOlahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberOlahPayload>[]
          }
          create: {
            args: Prisma.SipuberOlahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberOlahPayload>
          }
          createMany: {
            args: Prisma.SipuberOlahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SipuberOlahCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberOlahPayload>[]
          }
          delete: {
            args: Prisma.SipuberOlahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberOlahPayload>
          }
          update: {
            args: Prisma.SipuberOlahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberOlahPayload>
          }
          deleteMany: {
            args: Prisma.SipuberOlahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SipuberOlahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SipuberOlahUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberOlahPayload>[]
          }
          upsert: {
            args: Prisma.SipuberOlahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipuberOlahPayload>
          }
          aggregate: {
            args: Prisma.SipuberOlahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSipuberOlah>
          }
          groupBy: {
            args: Prisma.SipuberOlahGroupByArgs<ExtArgs>
            result: $Utils.Optional<SipuberOlahGroupByOutputType>[]
          }
          count: {
            args: Prisma.SipuberOlahCountArgs<ExtArgs>
            result: $Utils.Optional<SipuberOlahCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
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
    sipuber?: SipuberOmit
    sipuberOlah?: SipuberOlahOmit
    contact?: ContactOmit
    session?: SessionOmit
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
    sipubers: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sipubers?: boolean | DeviceCountOutputTypeCountSipubersArgs
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
  export type DeviceCountOutputTypeCountSipubersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SipuberWhereInput
  }


  /**
   * Count Type SipuberCountOutputType
   */

  export type SipuberCountOutputType = {
    sipuberOlah: number
  }

  export type SipuberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sipuberOlah?: boolean | SipuberCountOutputTypeCountSipuberOlahArgs
  }

  // Custom InputTypes
  /**
   * SipuberCountOutputType without action
   */
  export type SipuberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SipuberCountOutputType
     */
    select?: SipuberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SipuberCountOutputType without action
   */
  export type SipuberCountOutputTypeCountSipuberOlahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SipuberOlahWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    no_telepon: string | null
    image: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    no_telepon: string | null
    image: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    no_telepon: number
    image: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    no_telepon?: true
    image?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    no_telepon?: true
    image?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    no_telepon?: true
    image?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    first_name: string
    last_name: string
    email: string | null
    no_telepon: string
    image: string | null
    password: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    no_telepon?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    devices?: boolean | User$devicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    no_telepon?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    no_telepon?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    no_telepon?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "no_telepon" | "image" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
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
      id: string
      first_name: string
      last_name: string
      email: string | null
      no_telepon: string
      image: string | null
      password: string | null
      role: string
      createdAt: Date
      updatedAt: Date
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
    readonly id: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly no_telepon: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    latitude: number | null
    longitude: number | null
  }

  export type DeviceSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type DeviceMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    updated_at: Date | null
    device_name: string | null
    nomor_modem: string | null
    tanggal_paket: Date | null
    email: string | null
    latitude: number | null
    longitude: number | null
    user_id: string | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    updated_at: Date | null
    device_name: string | null
    nomor_modem: string | null
    tanggal_paket: Date | null
    email: string | null
    latitude: number | null
    longitude: number | null
    user_id: string | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    device_name: number
    nomor_modem: number
    tanggal_paket: number
    email: number
    latitude: number
    longitude: number
    user_id: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type DeviceSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type DeviceMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    device_name?: true
    nomor_modem?: true
    tanggal_paket?: true
    email?: true
    latitude?: true
    longitude?: true
    user_id?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    device_name?: true
    nomor_modem?: true
    tanggal_paket?: true
    email?: true
    latitude?: true
    longitude?: true
    user_id?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    device_name?: true
    nomor_modem?: true
    tanggal_paket?: true
    email?: true
    latitude?: true
    longitude?: true
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
    created_at: Date
    updated_at: Date
    device_name: string
    nomor_modem: string | null
    tanggal_paket: Date | null
    email: string
    latitude: number
    longitude: number
    user_id: string | null
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
    created_at?: boolean
    updated_at?: boolean
    device_name?: boolean
    nomor_modem?: boolean
    tanggal_paket?: boolean
    email?: boolean
    latitude?: boolean
    longitude?: boolean
    user_id?: boolean
    user?: boolean | Device$userArgs<ExtArgs>
    sipubers?: boolean | Device$sipubersArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    device_name?: boolean
    nomor_modem?: boolean
    tanggal_paket?: boolean
    email?: boolean
    latitude?: boolean
    longitude?: boolean
    user_id?: boolean
    user?: boolean | Device$userArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    device_name?: boolean
    nomor_modem?: boolean
    tanggal_paket?: boolean
    email?: boolean
    latitude?: boolean
    longitude?: boolean
    user_id?: boolean
    user?: boolean | Device$userArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    device_name?: boolean
    nomor_modem?: boolean
    tanggal_paket?: boolean
    email?: boolean
    latitude?: boolean
    longitude?: boolean
    user_id?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "updated_at" | "device_name" | "nomor_modem" | "tanggal_paket" | "email" | "latitude" | "longitude" | "user_id", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Device$userArgs<ExtArgs>
    sipubers?: boolean | Device$sipubersArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Device$userArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Device$userArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      sipubers: Prisma.$SipuberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      updated_at: Date
      device_name: string
      nomor_modem: string | null
      tanggal_paket: Date | null
      email: string
      latitude: number
      longitude: number
      user_id: string | null
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
    user<T extends Device$userArgs<ExtArgs> = {}>(args?: Subset<T, Device$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sipubers<T extends Device$sipubersArgs<ExtArgs> = {}>(args?: Subset<T, Device$sipubersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SipuberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly created_at: FieldRef<"Device", 'DateTime'>
    readonly updated_at: FieldRef<"Device", 'DateTime'>
    readonly device_name: FieldRef<"Device", 'String'>
    readonly nomor_modem: FieldRef<"Device", 'String'>
    readonly tanggal_paket: FieldRef<"Device", 'DateTime'>
    readonly email: FieldRef<"Device", 'String'>
    readonly latitude: FieldRef<"Device", 'Float'>
    readonly longitude: FieldRef<"Device", 'Float'>
    readonly user_id: FieldRef<"Device", 'String'>
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
   * Device.user
   */
  export type Device$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Device.sipubers
   */
  export type Device$sipubersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sipuber
     */
    select?: SipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sipuber
     */
    omit?: SipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberInclude<ExtArgs> | null
    where?: SipuberWhereInput
    orderBy?: SipuberOrderByWithRelationInput | SipuberOrderByWithRelationInput[]
    cursor?: SipuberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SipuberScalarFieldEnum | SipuberScalarFieldEnum[]
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
   * Model Sipuber
   */

  export type AggregateSipuber = {
    _count: SipuberCountAggregateOutputType | null
    _avg: SipuberAvgAggregateOutputType | null
    _sum: SipuberSumAggregateOutputType | null
    _min: SipuberMinAggregateOutputType | null
    _max: SipuberMaxAggregateOutputType | null
  }

  export type SipuberAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    pm1: number | null
    pm10: number | null
    pm25: number | null
    co: number | null
    so2: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    vbat: number | null
    device_id: number | null
  }

  export type SipuberSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    pm1: number | null
    pm10: number | null
    pm25: number | null
    co: number | null
    so2: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    vbat: number | null
    device_id: number | null
  }

  export type SipuberMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    device_name: string | null
    latitude: number | null
    longitude: number | null
    pm1: number | null
    pm10: number | null
    pm25: number | null
    co: number | null
    so2: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    vbat: number | null
    device_id: number | null
  }

  export type SipuberMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    device_name: string | null
    latitude: number | null
    longitude: number | null
    pm1: number | null
    pm10: number | null
    pm25: number | null
    co: number | null
    so2: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    vbat: number | null
    device_id: number | null
  }

  export type SipuberCountAggregateOutputType = {
    id: number
    created_at: number
    device_name: number
    latitude: number
    longitude: number
    pm1: number
    pm10: number
    pm25: number
    co: number
    so2: number
    no2: number
    o3: number
    nh3: number
    vbat: number
    device_id: number
    _all: number
  }


  export type SipuberAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    pm1?: true
    pm10?: true
    pm25?: true
    co?: true
    so2?: true
    no2?: true
    o3?: true
    nh3?: true
    vbat?: true
    device_id?: true
  }

  export type SipuberSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    pm1?: true
    pm10?: true
    pm25?: true
    co?: true
    so2?: true
    no2?: true
    o3?: true
    nh3?: true
    vbat?: true
    device_id?: true
  }

  export type SipuberMinAggregateInputType = {
    id?: true
    created_at?: true
    device_name?: true
    latitude?: true
    longitude?: true
    pm1?: true
    pm10?: true
    pm25?: true
    co?: true
    so2?: true
    no2?: true
    o3?: true
    nh3?: true
    vbat?: true
    device_id?: true
  }

  export type SipuberMaxAggregateInputType = {
    id?: true
    created_at?: true
    device_name?: true
    latitude?: true
    longitude?: true
    pm1?: true
    pm10?: true
    pm25?: true
    co?: true
    so2?: true
    no2?: true
    o3?: true
    nh3?: true
    vbat?: true
    device_id?: true
  }

  export type SipuberCountAggregateInputType = {
    id?: true
    created_at?: true
    device_name?: true
    latitude?: true
    longitude?: true
    pm1?: true
    pm10?: true
    pm25?: true
    co?: true
    so2?: true
    no2?: true
    o3?: true
    nh3?: true
    vbat?: true
    device_id?: true
    _all?: true
  }

  export type SipuberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sipuber to aggregate.
     */
    where?: SipuberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sipubers to fetch.
     */
    orderBy?: SipuberOrderByWithRelationInput | SipuberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SipuberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sipubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sipubers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sipubers
    **/
    _count?: true | SipuberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SipuberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SipuberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SipuberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SipuberMaxAggregateInputType
  }

  export type GetSipuberAggregateType<T extends SipuberAggregateArgs> = {
        [P in keyof T & keyof AggregateSipuber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSipuber[P]>
      : GetScalarType<T[P], AggregateSipuber[P]>
  }




  export type SipuberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SipuberWhereInput
    orderBy?: SipuberOrderByWithAggregationInput | SipuberOrderByWithAggregationInput[]
    by: SipuberScalarFieldEnum[] | SipuberScalarFieldEnum
    having?: SipuberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SipuberCountAggregateInputType | true
    _avg?: SipuberAvgAggregateInputType
    _sum?: SipuberSumAggregateInputType
    _min?: SipuberMinAggregateInputType
    _max?: SipuberMaxAggregateInputType
  }

  export type SipuberGroupByOutputType = {
    id: number
    created_at: Date
    device_name: string
    latitude: number
    longitude: number
    pm1: number | null
    pm10: number | null
    pm25: number | null
    co: number | null
    so2: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    vbat: number | null
    device_id: number
    _count: SipuberCountAggregateOutputType | null
    _avg: SipuberAvgAggregateOutputType | null
    _sum: SipuberSumAggregateOutputType | null
    _min: SipuberMinAggregateOutputType | null
    _max: SipuberMaxAggregateOutputType | null
  }

  type GetSipuberGroupByPayload<T extends SipuberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SipuberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SipuberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SipuberGroupByOutputType[P]>
            : GetScalarType<T[P], SipuberGroupByOutputType[P]>
        }
      >
    >


  export type SipuberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    device_name?: boolean
    latitude?: boolean
    longitude?: boolean
    pm1?: boolean
    pm10?: boolean
    pm25?: boolean
    co?: boolean
    so2?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    vbat?: boolean
    device_id?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    sipuberOlah?: boolean | Sipuber$sipuberOlahArgs<ExtArgs>
    _count?: boolean | SipuberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sipuber"]>

  export type SipuberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    device_name?: boolean
    latitude?: boolean
    longitude?: boolean
    pm1?: boolean
    pm10?: boolean
    pm25?: boolean
    co?: boolean
    so2?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    vbat?: boolean
    device_id?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sipuber"]>

  export type SipuberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    device_name?: boolean
    latitude?: boolean
    longitude?: boolean
    pm1?: boolean
    pm10?: boolean
    pm25?: boolean
    co?: boolean
    so2?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    vbat?: boolean
    device_id?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sipuber"]>

  export type SipuberSelectScalar = {
    id?: boolean
    created_at?: boolean
    device_name?: boolean
    latitude?: boolean
    longitude?: boolean
    pm1?: boolean
    pm10?: boolean
    pm25?: boolean
    co?: boolean
    so2?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    vbat?: boolean
    device_id?: boolean
  }

  export type SipuberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "device_name" | "latitude" | "longitude" | "pm1" | "pm10" | "pm25" | "co" | "so2" | "no2" | "o3" | "nh3" | "vbat" | "device_id", ExtArgs["result"]["sipuber"]>
  export type SipuberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    sipuberOlah?: boolean | Sipuber$sipuberOlahArgs<ExtArgs>
    _count?: boolean | SipuberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SipuberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type SipuberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $SipuberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sipuber"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
      sipuberOlah: Prisma.$SipuberOlahPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      device_name: string
      latitude: number
      longitude: number
      pm1: number | null
      pm10: number | null
      pm25: number | null
      co: number | null
      so2: number | null
      no2: number | null
      o3: number | null
      nh3: number | null
      vbat: number | null
      device_id: number
    }, ExtArgs["result"]["sipuber"]>
    composites: {}
  }

  type SipuberGetPayload<S extends boolean | null | undefined | SipuberDefaultArgs> = $Result.GetResult<Prisma.$SipuberPayload, S>

  type SipuberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SipuberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SipuberCountAggregateInputType | true
    }

  export interface SipuberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sipuber'], meta: { name: 'Sipuber' } }
    /**
     * Find zero or one Sipuber that matches the filter.
     * @param {SipuberFindUniqueArgs} args - Arguments to find a Sipuber
     * @example
     * // Get one Sipuber
     * const sipuber = await prisma.sipuber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SipuberFindUniqueArgs>(args: SelectSubset<T, SipuberFindUniqueArgs<ExtArgs>>): Prisma__SipuberClient<$Result.GetResult<Prisma.$SipuberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sipuber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SipuberFindUniqueOrThrowArgs} args - Arguments to find a Sipuber
     * @example
     * // Get one Sipuber
     * const sipuber = await prisma.sipuber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SipuberFindUniqueOrThrowArgs>(args: SelectSubset<T, SipuberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SipuberClient<$Result.GetResult<Prisma.$SipuberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sipuber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipuberFindFirstArgs} args - Arguments to find a Sipuber
     * @example
     * // Get one Sipuber
     * const sipuber = await prisma.sipuber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SipuberFindFirstArgs>(args?: SelectSubset<T, SipuberFindFirstArgs<ExtArgs>>): Prisma__SipuberClient<$Result.GetResult<Prisma.$SipuberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sipuber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipuberFindFirstOrThrowArgs} args - Arguments to find a Sipuber
     * @example
     * // Get one Sipuber
     * const sipuber = await prisma.sipuber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SipuberFindFirstOrThrowArgs>(args?: SelectSubset<T, SipuberFindFirstOrThrowArgs<ExtArgs>>): Prisma__SipuberClient<$Result.GetResult<Prisma.$SipuberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sipubers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipuberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sipubers
     * const sipubers = await prisma.sipuber.findMany()
     * 
     * // Get first 10 Sipubers
     * const sipubers = await prisma.sipuber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sipuberWithIdOnly = await prisma.sipuber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SipuberFindManyArgs>(args?: SelectSubset<T, SipuberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SipuberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sipuber.
     * @param {SipuberCreateArgs} args - Arguments to create a Sipuber.
     * @example
     * // Create one Sipuber
     * const Sipuber = await prisma.sipuber.create({
     *   data: {
     *     // ... data to create a Sipuber
     *   }
     * })
     * 
     */
    create<T extends SipuberCreateArgs>(args: SelectSubset<T, SipuberCreateArgs<ExtArgs>>): Prisma__SipuberClient<$Result.GetResult<Prisma.$SipuberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sipubers.
     * @param {SipuberCreateManyArgs} args - Arguments to create many Sipubers.
     * @example
     * // Create many Sipubers
     * const sipuber = await prisma.sipuber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SipuberCreateManyArgs>(args?: SelectSubset<T, SipuberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sipubers and returns the data saved in the database.
     * @param {SipuberCreateManyAndReturnArgs} args - Arguments to create many Sipubers.
     * @example
     * // Create many Sipubers
     * const sipuber = await prisma.sipuber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sipubers and only return the `id`
     * const sipuberWithIdOnly = await prisma.sipuber.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SipuberCreateManyAndReturnArgs>(args?: SelectSubset<T, SipuberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SipuberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sipuber.
     * @param {SipuberDeleteArgs} args - Arguments to delete one Sipuber.
     * @example
     * // Delete one Sipuber
     * const Sipuber = await prisma.sipuber.delete({
     *   where: {
     *     // ... filter to delete one Sipuber
     *   }
     * })
     * 
     */
    delete<T extends SipuberDeleteArgs>(args: SelectSubset<T, SipuberDeleteArgs<ExtArgs>>): Prisma__SipuberClient<$Result.GetResult<Prisma.$SipuberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sipuber.
     * @param {SipuberUpdateArgs} args - Arguments to update one Sipuber.
     * @example
     * // Update one Sipuber
     * const sipuber = await prisma.sipuber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SipuberUpdateArgs>(args: SelectSubset<T, SipuberUpdateArgs<ExtArgs>>): Prisma__SipuberClient<$Result.GetResult<Prisma.$SipuberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sipubers.
     * @param {SipuberDeleteManyArgs} args - Arguments to filter Sipubers to delete.
     * @example
     * // Delete a few Sipubers
     * const { count } = await prisma.sipuber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SipuberDeleteManyArgs>(args?: SelectSubset<T, SipuberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sipubers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipuberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sipubers
     * const sipuber = await prisma.sipuber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SipuberUpdateManyArgs>(args: SelectSubset<T, SipuberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sipubers and returns the data updated in the database.
     * @param {SipuberUpdateManyAndReturnArgs} args - Arguments to update many Sipubers.
     * @example
     * // Update many Sipubers
     * const sipuber = await prisma.sipuber.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sipubers and only return the `id`
     * const sipuberWithIdOnly = await prisma.sipuber.updateManyAndReturn({
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
    updateManyAndReturn<T extends SipuberUpdateManyAndReturnArgs>(args: SelectSubset<T, SipuberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SipuberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sipuber.
     * @param {SipuberUpsertArgs} args - Arguments to update or create a Sipuber.
     * @example
     * // Update or create a Sipuber
     * const sipuber = await prisma.sipuber.upsert({
     *   create: {
     *     // ... data to create a Sipuber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sipuber we want to update
     *   }
     * })
     */
    upsert<T extends SipuberUpsertArgs>(args: SelectSubset<T, SipuberUpsertArgs<ExtArgs>>): Prisma__SipuberClient<$Result.GetResult<Prisma.$SipuberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sipubers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipuberCountArgs} args - Arguments to filter Sipubers to count.
     * @example
     * // Count the number of Sipubers
     * const count = await prisma.sipuber.count({
     *   where: {
     *     // ... the filter for the Sipubers we want to count
     *   }
     * })
    **/
    count<T extends SipuberCountArgs>(
      args?: Subset<T, SipuberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SipuberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sipuber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipuberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SipuberAggregateArgs>(args: Subset<T, SipuberAggregateArgs>): Prisma.PrismaPromise<GetSipuberAggregateType<T>>

    /**
     * Group by Sipuber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipuberGroupByArgs} args - Group by arguments.
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
      T extends SipuberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SipuberGroupByArgs['orderBy'] }
        : { orderBy?: SipuberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SipuberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSipuberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sipuber model
   */
  readonly fields: SipuberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sipuber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SipuberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sipuberOlah<T extends Sipuber$sipuberOlahArgs<ExtArgs> = {}>(args?: Subset<T, Sipuber$sipuberOlahArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SipuberOlahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sipuber model
   */
  interface SipuberFieldRefs {
    readonly id: FieldRef<"Sipuber", 'Int'>
    readonly created_at: FieldRef<"Sipuber", 'DateTime'>
    readonly device_name: FieldRef<"Sipuber", 'String'>
    readonly latitude: FieldRef<"Sipuber", 'Float'>
    readonly longitude: FieldRef<"Sipuber", 'Float'>
    readonly pm1: FieldRef<"Sipuber", 'Float'>
    readonly pm10: FieldRef<"Sipuber", 'Float'>
    readonly pm25: FieldRef<"Sipuber", 'Float'>
    readonly co: FieldRef<"Sipuber", 'Float'>
    readonly so2: FieldRef<"Sipuber", 'Float'>
    readonly no2: FieldRef<"Sipuber", 'Float'>
    readonly o3: FieldRef<"Sipuber", 'Float'>
    readonly nh3: FieldRef<"Sipuber", 'Float'>
    readonly vbat: FieldRef<"Sipuber", 'Float'>
    readonly device_id: FieldRef<"Sipuber", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sipuber findUnique
   */
  export type SipuberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sipuber
     */
    select?: SipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sipuber
     */
    omit?: SipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberInclude<ExtArgs> | null
    /**
     * Filter, which Sipuber to fetch.
     */
    where: SipuberWhereUniqueInput
  }

  /**
   * Sipuber findUniqueOrThrow
   */
  export type SipuberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sipuber
     */
    select?: SipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sipuber
     */
    omit?: SipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberInclude<ExtArgs> | null
    /**
     * Filter, which Sipuber to fetch.
     */
    where: SipuberWhereUniqueInput
  }

  /**
   * Sipuber findFirst
   */
  export type SipuberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sipuber
     */
    select?: SipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sipuber
     */
    omit?: SipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberInclude<ExtArgs> | null
    /**
     * Filter, which Sipuber to fetch.
     */
    where?: SipuberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sipubers to fetch.
     */
    orderBy?: SipuberOrderByWithRelationInput | SipuberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sipubers.
     */
    cursor?: SipuberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sipubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sipubers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sipubers.
     */
    distinct?: SipuberScalarFieldEnum | SipuberScalarFieldEnum[]
  }

  /**
   * Sipuber findFirstOrThrow
   */
  export type SipuberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sipuber
     */
    select?: SipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sipuber
     */
    omit?: SipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberInclude<ExtArgs> | null
    /**
     * Filter, which Sipuber to fetch.
     */
    where?: SipuberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sipubers to fetch.
     */
    orderBy?: SipuberOrderByWithRelationInput | SipuberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sipubers.
     */
    cursor?: SipuberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sipubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sipubers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sipubers.
     */
    distinct?: SipuberScalarFieldEnum | SipuberScalarFieldEnum[]
  }

  /**
   * Sipuber findMany
   */
  export type SipuberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sipuber
     */
    select?: SipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sipuber
     */
    omit?: SipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberInclude<ExtArgs> | null
    /**
     * Filter, which Sipubers to fetch.
     */
    where?: SipuberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sipubers to fetch.
     */
    orderBy?: SipuberOrderByWithRelationInput | SipuberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sipubers.
     */
    cursor?: SipuberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sipubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sipubers.
     */
    skip?: number
    distinct?: SipuberScalarFieldEnum | SipuberScalarFieldEnum[]
  }

  /**
   * Sipuber create
   */
  export type SipuberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sipuber
     */
    select?: SipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sipuber
     */
    omit?: SipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberInclude<ExtArgs> | null
    /**
     * The data needed to create a Sipuber.
     */
    data: XOR<SipuberCreateInput, SipuberUncheckedCreateInput>
  }

  /**
   * Sipuber createMany
   */
  export type SipuberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sipubers.
     */
    data: SipuberCreateManyInput | SipuberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sipuber createManyAndReturn
   */
  export type SipuberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sipuber
     */
    select?: SipuberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sipuber
     */
    omit?: SipuberOmit<ExtArgs> | null
    /**
     * The data used to create many Sipubers.
     */
    data: SipuberCreateManyInput | SipuberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sipuber update
   */
  export type SipuberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sipuber
     */
    select?: SipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sipuber
     */
    omit?: SipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberInclude<ExtArgs> | null
    /**
     * The data needed to update a Sipuber.
     */
    data: XOR<SipuberUpdateInput, SipuberUncheckedUpdateInput>
    /**
     * Choose, which Sipuber to update.
     */
    where: SipuberWhereUniqueInput
  }

  /**
   * Sipuber updateMany
   */
  export type SipuberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sipubers.
     */
    data: XOR<SipuberUpdateManyMutationInput, SipuberUncheckedUpdateManyInput>
    /**
     * Filter which Sipubers to update
     */
    where?: SipuberWhereInput
    /**
     * Limit how many Sipubers to update.
     */
    limit?: number
  }

  /**
   * Sipuber updateManyAndReturn
   */
  export type SipuberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sipuber
     */
    select?: SipuberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sipuber
     */
    omit?: SipuberOmit<ExtArgs> | null
    /**
     * The data used to update Sipubers.
     */
    data: XOR<SipuberUpdateManyMutationInput, SipuberUncheckedUpdateManyInput>
    /**
     * Filter which Sipubers to update
     */
    where?: SipuberWhereInput
    /**
     * Limit how many Sipubers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sipuber upsert
   */
  export type SipuberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sipuber
     */
    select?: SipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sipuber
     */
    omit?: SipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberInclude<ExtArgs> | null
    /**
     * The filter to search for the Sipuber to update in case it exists.
     */
    where: SipuberWhereUniqueInput
    /**
     * In case the Sipuber found by the `where` argument doesn't exist, create a new Sipuber with this data.
     */
    create: XOR<SipuberCreateInput, SipuberUncheckedCreateInput>
    /**
     * In case the Sipuber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SipuberUpdateInput, SipuberUncheckedUpdateInput>
  }

  /**
   * Sipuber delete
   */
  export type SipuberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sipuber
     */
    select?: SipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sipuber
     */
    omit?: SipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberInclude<ExtArgs> | null
    /**
     * Filter which Sipuber to delete.
     */
    where: SipuberWhereUniqueInput
  }

  /**
   * Sipuber deleteMany
   */
  export type SipuberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sipubers to delete
     */
    where?: SipuberWhereInput
    /**
     * Limit how many Sipubers to delete.
     */
    limit?: number
  }

  /**
   * Sipuber.sipuberOlah
   */
  export type Sipuber$sipuberOlahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SipuberOlah
     */
    select?: SipuberOlahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SipuberOlah
     */
    omit?: SipuberOlahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberOlahInclude<ExtArgs> | null
    where?: SipuberOlahWhereInput
    orderBy?: SipuberOlahOrderByWithRelationInput | SipuberOlahOrderByWithRelationInput[]
    cursor?: SipuberOlahWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SipuberOlahScalarFieldEnum | SipuberOlahScalarFieldEnum[]
  }

  /**
   * Sipuber without action
   */
  export type SipuberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sipuber
     */
    select?: SipuberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sipuber
     */
    omit?: SipuberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberInclude<ExtArgs> | null
  }


  /**
   * Model SipuberOlah
   */

  export type AggregateSipuberOlah = {
    _count: SipuberOlahCountAggregateOutputType | null
    _avg: SipuberOlahAvgAggregateOutputType | null
    _sum: SipuberOlahSumAggregateOutputType | null
    _min: SipuberOlahMinAggregateOutputType | null
    _max: SipuberOlahMaxAggregateOutputType | null
  }

  export type SipuberOlahAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    pm1: number | null
    pm10: number | null
    pm25: number | null
    co: number | null
    so2: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    vbat: number | null
    aqi: number | null
    sipuber_id: number | null
  }

  export type SipuberOlahSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    pm1: number | null
    pm10: number | null
    pm25: number | null
    co: number | null
    so2: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    vbat: number | null
    aqi: number | null
    sipuber_id: number | null
  }

  export type SipuberOlahMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    device_name: string | null
    latitude: number | null
    longitude: number | null
    pm1: number | null
    pm10: number | null
    pm25: number | null
    co: number | null
    so2: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    vbat: number | null
    aqi: number | null
    sipuber_id: number | null
  }

  export type SipuberOlahMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    device_name: string | null
    latitude: number | null
    longitude: number | null
    pm1: number | null
    pm10: number | null
    pm25: number | null
    co: number | null
    so2: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    vbat: number | null
    aqi: number | null
    sipuber_id: number | null
  }

  export type SipuberOlahCountAggregateOutputType = {
    id: number
    created_at: number
    device_name: number
    latitude: number
    longitude: number
    pm1: number
    pm10: number
    pm25: number
    co: number
    so2: number
    no2: number
    o3: number
    nh3: number
    vbat: number
    aqi: number
    sipuber_id: number
    _all: number
  }


  export type SipuberOlahAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    pm1?: true
    pm10?: true
    pm25?: true
    co?: true
    so2?: true
    no2?: true
    o3?: true
    nh3?: true
    vbat?: true
    aqi?: true
    sipuber_id?: true
  }

  export type SipuberOlahSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    pm1?: true
    pm10?: true
    pm25?: true
    co?: true
    so2?: true
    no2?: true
    o3?: true
    nh3?: true
    vbat?: true
    aqi?: true
    sipuber_id?: true
  }

  export type SipuberOlahMinAggregateInputType = {
    id?: true
    created_at?: true
    device_name?: true
    latitude?: true
    longitude?: true
    pm1?: true
    pm10?: true
    pm25?: true
    co?: true
    so2?: true
    no2?: true
    o3?: true
    nh3?: true
    vbat?: true
    aqi?: true
    sipuber_id?: true
  }

  export type SipuberOlahMaxAggregateInputType = {
    id?: true
    created_at?: true
    device_name?: true
    latitude?: true
    longitude?: true
    pm1?: true
    pm10?: true
    pm25?: true
    co?: true
    so2?: true
    no2?: true
    o3?: true
    nh3?: true
    vbat?: true
    aqi?: true
    sipuber_id?: true
  }

  export type SipuberOlahCountAggregateInputType = {
    id?: true
    created_at?: true
    device_name?: true
    latitude?: true
    longitude?: true
    pm1?: true
    pm10?: true
    pm25?: true
    co?: true
    so2?: true
    no2?: true
    o3?: true
    nh3?: true
    vbat?: true
    aqi?: true
    sipuber_id?: true
    _all?: true
  }

  export type SipuberOlahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SipuberOlah to aggregate.
     */
    where?: SipuberOlahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SipuberOlahs to fetch.
     */
    orderBy?: SipuberOlahOrderByWithRelationInput | SipuberOlahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SipuberOlahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SipuberOlahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SipuberOlahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SipuberOlahs
    **/
    _count?: true | SipuberOlahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SipuberOlahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SipuberOlahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SipuberOlahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SipuberOlahMaxAggregateInputType
  }

  export type GetSipuberOlahAggregateType<T extends SipuberOlahAggregateArgs> = {
        [P in keyof T & keyof AggregateSipuberOlah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSipuberOlah[P]>
      : GetScalarType<T[P], AggregateSipuberOlah[P]>
  }




  export type SipuberOlahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SipuberOlahWhereInput
    orderBy?: SipuberOlahOrderByWithAggregationInput | SipuberOlahOrderByWithAggregationInput[]
    by: SipuberOlahScalarFieldEnum[] | SipuberOlahScalarFieldEnum
    having?: SipuberOlahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SipuberOlahCountAggregateInputType | true
    _avg?: SipuberOlahAvgAggregateInputType
    _sum?: SipuberOlahSumAggregateInputType
    _min?: SipuberOlahMinAggregateInputType
    _max?: SipuberOlahMaxAggregateInputType
  }

  export type SipuberOlahGroupByOutputType = {
    id: number
    created_at: Date
    device_name: string
    latitude: number
    longitude: number
    pm1: number | null
    pm10: number | null
    pm25: number | null
    co: number | null
    so2: number | null
    no2: number | null
    o3: number | null
    nh3: number | null
    vbat: number | null
    aqi: number
    sipuber_id: number
    _count: SipuberOlahCountAggregateOutputType | null
    _avg: SipuberOlahAvgAggregateOutputType | null
    _sum: SipuberOlahSumAggregateOutputType | null
    _min: SipuberOlahMinAggregateOutputType | null
    _max: SipuberOlahMaxAggregateOutputType | null
  }

  type GetSipuberOlahGroupByPayload<T extends SipuberOlahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SipuberOlahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SipuberOlahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SipuberOlahGroupByOutputType[P]>
            : GetScalarType<T[P], SipuberOlahGroupByOutputType[P]>
        }
      >
    >


  export type SipuberOlahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    device_name?: boolean
    latitude?: boolean
    longitude?: boolean
    pm1?: boolean
    pm10?: boolean
    pm25?: boolean
    co?: boolean
    so2?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    vbat?: boolean
    aqi?: boolean
    sipuber_id?: boolean
    sipuber?: boolean | SipuberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sipuberOlah"]>

  export type SipuberOlahSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    device_name?: boolean
    latitude?: boolean
    longitude?: boolean
    pm1?: boolean
    pm10?: boolean
    pm25?: boolean
    co?: boolean
    so2?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    vbat?: boolean
    aqi?: boolean
    sipuber_id?: boolean
    sipuber?: boolean | SipuberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sipuberOlah"]>

  export type SipuberOlahSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    device_name?: boolean
    latitude?: boolean
    longitude?: boolean
    pm1?: boolean
    pm10?: boolean
    pm25?: boolean
    co?: boolean
    so2?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    vbat?: boolean
    aqi?: boolean
    sipuber_id?: boolean
    sipuber?: boolean | SipuberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sipuberOlah"]>

  export type SipuberOlahSelectScalar = {
    id?: boolean
    created_at?: boolean
    device_name?: boolean
    latitude?: boolean
    longitude?: boolean
    pm1?: boolean
    pm10?: boolean
    pm25?: boolean
    co?: boolean
    so2?: boolean
    no2?: boolean
    o3?: boolean
    nh3?: boolean
    vbat?: boolean
    aqi?: boolean
    sipuber_id?: boolean
  }

  export type SipuberOlahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "device_name" | "latitude" | "longitude" | "pm1" | "pm10" | "pm25" | "co" | "so2" | "no2" | "o3" | "nh3" | "vbat" | "aqi" | "sipuber_id", ExtArgs["result"]["sipuberOlah"]>
  export type SipuberOlahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sipuber?: boolean | SipuberDefaultArgs<ExtArgs>
  }
  export type SipuberOlahIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sipuber?: boolean | SipuberDefaultArgs<ExtArgs>
  }
  export type SipuberOlahIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sipuber?: boolean | SipuberDefaultArgs<ExtArgs>
  }

  export type $SipuberOlahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SipuberOlah"
    objects: {
      sipuber: Prisma.$SipuberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      device_name: string
      latitude: number
      longitude: number
      pm1: number | null
      pm10: number | null
      pm25: number | null
      co: number | null
      so2: number | null
      no2: number | null
      o3: number | null
      nh3: number | null
      vbat: number | null
      aqi: number
      sipuber_id: number
    }, ExtArgs["result"]["sipuberOlah"]>
    composites: {}
  }

  type SipuberOlahGetPayload<S extends boolean | null | undefined | SipuberOlahDefaultArgs> = $Result.GetResult<Prisma.$SipuberOlahPayload, S>

  type SipuberOlahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SipuberOlahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SipuberOlahCountAggregateInputType | true
    }

  export interface SipuberOlahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SipuberOlah'], meta: { name: 'SipuberOlah' } }
    /**
     * Find zero or one SipuberOlah that matches the filter.
     * @param {SipuberOlahFindUniqueArgs} args - Arguments to find a SipuberOlah
     * @example
     * // Get one SipuberOlah
     * const sipuberOlah = await prisma.sipuberOlah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SipuberOlahFindUniqueArgs>(args: SelectSubset<T, SipuberOlahFindUniqueArgs<ExtArgs>>): Prisma__SipuberOlahClient<$Result.GetResult<Prisma.$SipuberOlahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SipuberOlah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SipuberOlahFindUniqueOrThrowArgs} args - Arguments to find a SipuberOlah
     * @example
     * // Get one SipuberOlah
     * const sipuberOlah = await prisma.sipuberOlah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SipuberOlahFindUniqueOrThrowArgs>(args: SelectSubset<T, SipuberOlahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SipuberOlahClient<$Result.GetResult<Prisma.$SipuberOlahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SipuberOlah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipuberOlahFindFirstArgs} args - Arguments to find a SipuberOlah
     * @example
     * // Get one SipuberOlah
     * const sipuberOlah = await prisma.sipuberOlah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SipuberOlahFindFirstArgs>(args?: SelectSubset<T, SipuberOlahFindFirstArgs<ExtArgs>>): Prisma__SipuberOlahClient<$Result.GetResult<Prisma.$SipuberOlahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SipuberOlah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipuberOlahFindFirstOrThrowArgs} args - Arguments to find a SipuberOlah
     * @example
     * // Get one SipuberOlah
     * const sipuberOlah = await prisma.sipuberOlah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SipuberOlahFindFirstOrThrowArgs>(args?: SelectSubset<T, SipuberOlahFindFirstOrThrowArgs<ExtArgs>>): Prisma__SipuberOlahClient<$Result.GetResult<Prisma.$SipuberOlahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SipuberOlahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipuberOlahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SipuberOlahs
     * const sipuberOlahs = await prisma.sipuberOlah.findMany()
     * 
     * // Get first 10 SipuberOlahs
     * const sipuberOlahs = await prisma.sipuberOlah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sipuberOlahWithIdOnly = await prisma.sipuberOlah.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SipuberOlahFindManyArgs>(args?: SelectSubset<T, SipuberOlahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SipuberOlahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SipuberOlah.
     * @param {SipuberOlahCreateArgs} args - Arguments to create a SipuberOlah.
     * @example
     * // Create one SipuberOlah
     * const SipuberOlah = await prisma.sipuberOlah.create({
     *   data: {
     *     // ... data to create a SipuberOlah
     *   }
     * })
     * 
     */
    create<T extends SipuberOlahCreateArgs>(args: SelectSubset<T, SipuberOlahCreateArgs<ExtArgs>>): Prisma__SipuberOlahClient<$Result.GetResult<Prisma.$SipuberOlahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SipuberOlahs.
     * @param {SipuberOlahCreateManyArgs} args - Arguments to create many SipuberOlahs.
     * @example
     * // Create many SipuberOlahs
     * const sipuberOlah = await prisma.sipuberOlah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SipuberOlahCreateManyArgs>(args?: SelectSubset<T, SipuberOlahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SipuberOlahs and returns the data saved in the database.
     * @param {SipuberOlahCreateManyAndReturnArgs} args - Arguments to create many SipuberOlahs.
     * @example
     * // Create many SipuberOlahs
     * const sipuberOlah = await prisma.sipuberOlah.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SipuberOlahs and only return the `id`
     * const sipuberOlahWithIdOnly = await prisma.sipuberOlah.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SipuberOlahCreateManyAndReturnArgs>(args?: SelectSubset<T, SipuberOlahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SipuberOlahPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SipuberOlah.
     * @param {SipuberOlahDeleteArgs} args - Arguments to delete one SipuberOlah.
     * @example
     * // Delete one SipuberOlah
     * const SipuberOlah = await prisma.sipuberOlah.delete({
     *   where: {
     *     // ... filter to delete one SipuberOlah
     *   }
     * })
     * 
     */
    delete<T extends SipuberOlahDeleteArgs>(args: SelectSubset<T, SipuberOlahDeleteArgs<ExtArgs>>): Prisma__SipuberOlahClient<$Result.GetResult<Prisma.$SipuberOlahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SipuberOlah.
     * @param {SipuberOlahUpdateArgs} args - Arguments to update one SipuberOlah.
     * @example
     * // Update one SipuberOlah
     * const sipuberOlah = await prisma.sipuberOlah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SipuberOlahUpdateArgs>(args: SelectSubset<T, SipuberOlahUpdateArgs<ExtArgs>>): Prisma__SipuberOlahClient<$Result.GetResult<Prisma.$SipuberOlahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SipuberOlahs.
     * @param {SipuberOlahDeleteManyArgs} args - Arguments to filter SipuberOlahs to delete.
     * @example
     * // Delete a few SipuberOlahs
     * const { count } = await prisma.sipuberOlah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SipuberOlahDeleteManyArgs>(args?: SelectSubset<T, SipuberOlahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SipuberOlahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipuberOlahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SipuberOlahs
     * const sipuberOlah = await prisma.sipuberOlah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SipuberOlahUpdateManyArgs>(args: SelectSubset<T, SipuberOlahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SipuberOlahs and returns the data updated in the database.
     * @param {SipuberOlahUpdateManyAndReturnArgs} args - Arguments to update many SipuberOlahs.
     * @example
     * // Update many SipuberOlahs
     * const sipuberOlah = await prisma.sipuberOlah.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SipuberOlahs and only return the `id`
     * const sipuberOlahWithIdOnly = await prisma.sipuberOlah.updateManyAndReturn({
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
    updateManyAndReturn<T extends SipuberOlahUpdateManyAndReturnArgs>(args: SelectSubset<T, SipuberOlahUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SipuberOlahPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SipuberOlah.
     * @param {SipuberOlahUpsertArgs} args - Arguments to update or create a SipuberOlah.
     * @example
     * // Update or create a SipuberOlah
     * const sipuberOlah = await prisma.sipuberOlah.upsert({
     *   create: {
     *     // ... data to create a SipuberOlah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SipuberOlah we want to update
     *   }
     * })
     */
    upsert<T extends SipuberOlahUpsertArgs>(args: SelectSubset<T, SipuberOlahUpsertArgs<ExtArgs>>): Prisma__SipuberOlahClient<$Result.GetResult<Prisma.$SipuberOlahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SipuberOlahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipuberOlahCountArgs} args - Arguments to filter SipuberOlahs to count.
     * @example
     * // Count the number of SipuberOlahs
     * const count = await prisma.sipuberOlah.count({
     *   where: {
     *     // ... the filter for the SipuberOlahs we want to count
     *   }
     * })
    **/
    count<T extends SipuberOlahCountArgs>(
      args?: Subset<T, SipuberOlahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SipuberOlahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SipuberOlah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipuberOlahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SipuberOlahAggregateArgs>(args: Subset<T, SipuberOlahAggregateArgs>): Prisma.PrismaPromise<GetSipuberOlahAggregateType<T>>

    /**
     * Group by SipuberOlah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipuberOlahGroupByArgs} args - Group by arguments.
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
      T extends SipuberOlahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SipuberOlahGroupByArgs['orderBy'] }
        : { orderBy?: SipuberOlahGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SipuberOlahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSipuberOlahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SipuberOlah model
   */
  readonly fields: SipuberOlahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SipuberOlah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SipuberOlahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sipuber<T extends SipuberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SipuberDefaultArgs<ExtArgs>>): Prisma__SipuberClient<$Result.GetResult<Prisma.$SipuberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SipuberOlah model
   */
  interface SipuberOlahFieldRefs {
    readonly id: FieldRef<"SipuberOlah", 'Int'>
    readonly created_at: FieldRef<"SipuberOlah", 'DateTime'>
    readonly device_name: FieldRef<"SipuberOlah", 'String'>
    readonly latitude: FieldRef<"SipuberOlah", 'Float'>
    readonly longitude: FieldRef<"SipuberOlah", 'Float'>
    readonly pm1: FieldRef<"SipuberOlah", 'Float'>
    readonly pm10: FieldRef<"SipuberOlah", 'Float'>
    readonly pm25: FieldRef<"SipuberOlah", 'Float'>
    readonly co: FieldRef<"SipuberOlah", 'Float'>
    readonly so2: FieldRef<"SipuberOlah", 'Float'>
    readonly no2: FieldRef<"SipuberOlah", 'Float'>
    readonly o3: FieldRef<"SipuberOlah", 'Float'>
    readonly nh3: FieldRef<"SipuberOlah", 'Float'>
    readonly vbat: FieldRef<"SipuberOlah", 'Float'>
    readonly aqi: FieldRef<"SipuberOlah", 'Int'>
    readonly sipuber_id: FieldRef<"SipuberOlah", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SipuberOlah findUnique
   */
  export type SipuberOlahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SipuberOlah
     */
    select?: SipuberOlahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SipuberOlah
     */
    omit?: SipuberOlahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberOlahInclude<ExtArgs> | null
    /**
     * Filter, which SipuberOlah to fetch.
     */
    where: SipuberOlahWhereUniqueInput
  }

  /**
   * SipuberOlah findUniqueOrThrow
   */
  export type SipuberOlahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SipuberOlah
     */
    select?: SipuberOlahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SipuberOlah
     */
    omit?: SipuberOlahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberOlahInclude<ExtArgs> | null
    /**
     * Filter, which SipuberOlah to fetch.
     */
    where: SipuberOlahWhereUniqueInput
  }

  /**
   * SipuberOlah findFirst
   */
  export type SipuberOlahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SipuberOlah
     */
    select?: SipuberOlahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SipuberOlah
     */
    omit?: SipuberOlahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberOlahInclude<ExtArgs> | null
    /**
     * Filter, which SipuberOlah to fetch.
     */
    where?: SipuberOlahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SipuberOlahs to fetch.
     */
    orderBy?: SipuberOlahOrderByWithRelationInput | SipuberOlahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SipuberOlahs.
     */
    cursor?: SipuberOlahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SipuberOlahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SipuberOlahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SipuberOlahs.
     */
    distinct?: SipuberOlahScalarFieldEnum | SipuberOlahScalarFieldEnum[]
  }

  /**
   * SipuberOlah findFirstOrThrow
   */
  export type SipuberOlahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SipuberOlah
     */
    select?: SipuberOlahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SipuberOlah
     */
    omit?: SipuberOlahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberOlahInclude<ExtArgs> | null
    /**
     * Filter, which SipuberOlah to fetch.
     */
    where?: SipuberOlahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SipuberOlahs to fetch.
     */
    orderBy?: SipuberOlahOrderByWithRelationInput | SipuberOlahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SipuberOlahs.
     */
    cursor?: SipuberOlahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SipuberOlahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SipuberOlahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SipuberOlahs.
     */
    distinct?: SipuberOlahScalarFieldEnum | SipuberOlahScalarFieldEnum[]
  }

  /**
   * SipuberOlah findMany
   */
  export type SipuberOlahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SipuberOlah
     */
    select?: SipuberOlahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SipuberOlah
     */
    omit?: SipuberOlahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberOlahInclude<ExtArgs> | null
    /**
     * Filter, which SipuberOlahs to fetch.
     */
    where?: SipuberOlahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SipuberOlahs to fetch.
     */
    orderBy?: SipuberOlahOrderByWithRelationInput | SipuberOlahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SipuberOlahs.
     */
    cursor?: SipuberOlahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SipuberOlahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SipuberOlahs.
     */
    skip?: number
    distinct?: SipuberOlahScalarFieldEnum | SipuberOlahScalarFieldEnum[]
  }

  /**
   * SipuberOlah create
   */
  export type SipuberOlahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SipuberOlah
     */
    select?: SipuberOlahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SipuberOlah
     */
    omit?: SipuberOlahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberOlahInclude<ExtArgs> | null
    /**
     * The data needed to create a SipuberOlah.
     */
    data: XOR<SipuberOlahCreateInput, SipuberOlahUncheckedCreateInput>
  }

  /**
   * SipuberOlah createMany
   */
  export type SipuberOlahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SipuberOlahs.
     */
    data: SipuberOlahCreateManyInput | SipuberOlahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SipuberOlah createManyAndReturn
   */
  export type SipuberOlahCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SipuberOlah
     */
    select?: SipuberOlahSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SipuberOlah
     */
    omit?: SipuberOlahOmit<ExtArgs> | null
    /**
     * The data used to create many SipuberOlahs.
     */
    data: SipuberOlahCreateManyInput | SipuberOlahCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberOlahIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SipuberOlah update
   */
  export type SipuberOlahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SipuberOlah
     */
    select?: SipuberOlahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SipuberOlah
     */
    omit?: SipuberOlahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberOlahInclude<ExtArgs> | null
    /**
     * The data needed to update a SipuberOlah.
     */
    data: XOR<SipuberOlahUpdateInput, SipuberOlahUncheckedUpdateInput>
    /**
     * Choose, which SipuberOlah to update.
     */
    where: SipuberOlahWhereUniqueInput
  }

  /**
   * SipuberOlah updateMany
   */
  export type SipuberOlahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SipuberOlahs.
     */
    data: XOR<SipuberOlahUpdateManyMutationInput, SipuberOlahUncheckedUpdateManyInput>
    /**
     * Filter which SipuberOlahs to update
     */
    where?: SipuberOlahWhereInput
    /**
     * Limit how many SipuberOlahs to update.
     */
    limit?: number
  }

  /**
   * SipuberOlah updateManyAndReturn
   */
  export type SipuberOlahUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SipuberOlah
     */
    select?: SipuberOlahSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SipuberOlah
     */
    omit?: SipuberOlahOmit<ExtArgs> | null
    /**
     * The data used to update SipuberOlahs.
     */
    data: XOR<SipuberOlahUpdateManyMutationInput, SipuberOlahUncheckedUpdateManyInput>
    /**
     * Filter which SipuberOlahs to update
     */
    where?: SipuberOlahWhereInput
    /**
     * Limit how many SipuberOlahs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberOlahIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SipuberOlah upsert
   */
  export type SipuberOlahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SipuberOlah
     */
    select?: SipuberOlahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SipuberOlah
     */
    omit?: SipuberOlahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberOlahInclude<ExtArgs> | null
    /**
     * The filter to search for the SipuberOlah to update in case it exists.
     */
    where: SipuberOlahWhereUniqueInput
    /**
     * In case the SipuberOlah found by the `where` argument doesn't exist, create a new SipuberOlah with this data.
     */
    create: XOR<SipuberOlahCreateInput, SipuberOlahUncheckedCreateInput>
    /**
     * In case the SipuberOlah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SipuberOlahUpdateInput, SipuberOlahUncheckedUpdateInput>
  }

  /**
   * SipuberOlah delete
   */
  export type SipuberOlahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SipuberOlah
     */
    select?: SipuberOlahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SipuberOlah
     */
    omit?: SipuberOlahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberOlahInclude<ExtArgs> | null
    /**
     * Filter which SipuberOlah to delete.
     */
    where: SipuberOlahWhereUniqueInput
  }

  /**
   * SipuberOlah deleteMany
   */
  export type SipuberOlahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SipuberOlahs to delete
     */
    where?: SipuberOlahWhereInput
    /**
     * Limit how many SipuberOlahs to delete.
     */
    limit?: number
  }

  /**
   * SipuberOlah without action
   */
  export type SipuberOlahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SipuberOlah
     */
    select?: SipuberOlahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SipuberOlah
     */
    omit?: SipuberOlahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipuberOlahInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    contact_name: string | null
    phone_number: string | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    contact_name: string | null
    phone_number: string | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    contact_name: number
    phone_number: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    contact_name?: true
    phone_number?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    contact_name?: true
    phone_number?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    contact_name?: true
    phone_number?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    contact_name: string
    phone_number: string
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contact_name?: boolean
    phone_number?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contact_name?: boolean
    phone_number?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contact_name?: boolean
    phone_number?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    contact_name?: boolean
    phone_number?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contact_name" | "phone_number", ExtArgs["result"]["contact"]>

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contact_name: string
      phone_number: string
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'Int'>
    readonly contact_name: FieldRef<"Contact", 'String'>
    readonly phone_number: FieldRef<"Contact", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sid: number
    data: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sid: string
    data: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sid" | "data" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sid: string
      data: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sid: FieldRef<"Session", 'String'>
    readonly data: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    no_telepon: 'no_telepon',
    image: 'image',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    device_name: 'device_name',
    nomor_modem: 'nomor_modem',
    tanggal_paket: 'tanggal_paket',
    email: 'email',
    latitude: 'latitude',
    longitude: 'longitude',
    user_id: 'user_id'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const SipuberScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    device_name: 'device_name',
    latitude: 'latitude',
    longitude: 'longitude',
    pm1: 'pm1',
    pm10: 'pm10',
    pm25: 'pm25',
    co: 'co',
    so2: 'so2',
    no2: 'no2',
    o3: 'o3',
    nh3: 'nh3',
    vbat: 'vbat',
    device_id: 'device_id'
  };

  export type SipuberScalarFieldEnum = (typeof SipuberScalarFieldEnum)[keyof typeof SipuberScalarFieldEnum]


  export const SipuberOlahScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    device_name: 'device_name',
    latitude: 'latitude',
    longitude: 'longitude',
    pm1: 'pm1',
    pm10: 'pm10',
    pm25: 'pm25',
    co: 'co',
    so2: 'so2',
    no2: 'no2',
    o3: 'o3',
    nh3: 'nh3',
    vbat: 'vbat',
    aqi: 'aqi',
    sipuber_id: 'sipuber_id'
  };

  export type SipuberOlahScalarFieldEnum = (typeof SipuberOlahScalarFieldEnum)[keyof typeof SipuberOlahScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    contact_name: 'contact_name',
    phone_number: 'phone_number'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
    id?: StringFilter<"User"> | string
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    no_telepon?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    devices?: DeviceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrderInput | SortOrder
    no_telepon?: SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    devices?: DeviceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    no_telepon?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    devices?: DeviceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrderInput | SortOrder
    no_telepon?: SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    no_telepon?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: IntFilter<"Device"> | number
    created_at?: DateTimeFilter<"Device"> | Date | string
    updated_at?: DateTimeFilter<"Device"> | Date | string
    device_name?: StringFilter<"Device"> | string
    nomor_modem?: StringNullableFilter<"Device"> | string | null
    tanggal_paket?: DateTimeNullableFilter<"Device"> | Date | string | null
    email?: StringFilter<"Device"> | string
    latitude?: FloatFilter<"Device"> | number
    longitude?: FloatFilter<"Device"> | number
    user_id?: StringNullableFilter<"Device"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    sipubers?: SipuberListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    device_name?: SortOrder
    nomor_modem?: SortOrderInput | SortOrder
    tanggal_paket?: SortOrderInput | SortOrder
    email?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    user_id?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    sipubers?: SipuberOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    device_name?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    created_at?: DateTimeFilter<"Device"> | Date | string
    updated_at?: DateTimeFilter<"Device"> | Date | string
    nomor_modem?: StringNullableFilter<"Device"> | string | null
    tanggal_paket?: DateTimeNullableFilter<"Device"> | Date | string | null
    email?: StringFilter<"Device"> | string
    latitude?: FloatFilter<"Device"> | number
    longitude?: FloatFilter<"Device"> | number
    user_id?: StringNullableFilter<"Device"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    sipubers?: SipuberListRelationFilter
  }, "id" | "device_name">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    device_name?: SortOrder
    nomor_modem?: SortOrderInput | SortOrder
    tanggal_paket?: SortOrderInput | SortOrder
    email?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    user_id?: SortOrderInput | SortOrder
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
    created_at?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    device_name?: StringWithAggregatesFilter<"Device"> | string
    nomor_modem?: StringNullableWithAggregatesFilter<"Device"> | string | null
    tanggal_paket?: DateTimeNullableWithAggregatesFilter<"Device"> | Date | string | null
    email?: StringWithAggregatesFilter<"Device"> | string
    latitude?: FloatWithAggregatesFilter<"Device"> | number
    longitude?: FloatWithAggregatesFilter<"Device"> | number
    user_id?: StringNullableWithAggregatesFilter<"Device"> | string | null
  }

  export type SipuberWhereInput = {
    AND?: SipuberWhereInput | SipuberWhereInput[]
    OR?: SipuberWhereInput[]
    NOT?: SipuberWhereInput | SipuberWhereInput[]
    id?: IntFilter<"Sipuber"> | number
    created_at?: DateTimeFilter<"Sipuber"> | Date | string
    device_name?: StringFilter<"Sipuber"> | string
    latitude?: FloatFilter<"Sipuber"> | number
    longitude?: FloatFilter<"Sipuber"> | number
    pm1?: FloatNullableFilter<"Sipuber"> | number | null
    pm10?: FloatNullableFilter<"Sipuber"> | number | null
    pm25?: FloatNullableFilter<"Sipuber"> | number | null
    co?: FloatNullableFilter<"Sipuber"> | number | null
    so2?: FloatNullableFilter<"Sipuber"> | number | null
    no2?: FloatNullableFilter<"Sipuber"> | number | null
    o3?: FloatNullableFilter<"Sipuber"> | number | null
    nh3?: FloatNullableFilter<"Sipuber"> | number | null
    vbat?: FloatNullableFilter<"Sipuber"> | number | null
    device_id?: IntFilter<"Sipuber"> | number
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    sipuberOlah?: SipuberOlahListRelationFilter
  }

  export type SipuberOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    pm1?: SortOrderInput | SortOrder
    pm10?: SortOrderInput | SortOrder
    pm25?: SortOrderInput | SortOrder
    co?: SortOrderInput | SortOrder
    so2?: SortOrderInput | SortOrder
    no2?: SortOrderInput | SortOrder
    o3?: SortOrderInput | SortOrder
    nh3?: SortOrderInput | SortOrder
    vbat?: SortOrderInput | SortOrder
    device_id?: SortOrder
    device?: DeviceOrderByWithRelationInput
    sipuberOlah?: SipuberOlahOrderByRelationAggregateInput
  }

  export type SipuberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    device_name?: string
    AND?: SipuberWhereInput | SipuberWhereInput[]
    OR?: SipuberWhereInput[]
    NOT?: SipuberWhereInput | SipuberWhereInput[]
    created_at?: DateTimeFilter<"Sipuber"> | Date | string
    latitude?: FloatFilter<"Sipuber"> | number
    longitude?: FloatFilter<"Sipuber"> | number
    pm1?: FloatNullableFilter<"Sipuber"> | number | null
    pm10?: FloatNullableFilter<"Sipuber"> | number | null
    pm25?: FloatNullableFilter<"Sipuber"> | number | null
    co?: FloatNullableFilter<"Sipuber"> | number | null
    so2?: FloatNullableFilter<"Sipuber"> | number | null
    no2?: FloatNullableFilter<"Sipuber"> | number | null
    o3?: FloatNullableFilter<"Sipuber"> | number | null
    nh3?: FloatNullableFilter<"Sipuber"> | number | null
    vbat?: FloatNullableFilter<"Sipuber"> | number | null
    device_id?: IntFilter<"Sipuber"> | number
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    sipuberOlah?: SipuberOlahListRelationFilter
  }, "id" | "device_name">

  export type SipuberOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    pm1?: SortOrderInput | SortOrder
    pm10?: SortOrderInput | SortOrder
    pm25?: SortOrderInput | SortOrder
    co?: SortOrderInput | SortOrder
    so2?: SortOrderInput | SortOrder
    no2?: SortOrderInput | SortOrder
    o3?: SortOrderInput | SortOrder
    nh3?: SortOrderInput | SortOrder
    vbat?: SortOrderInput | SortOrder
    device_id?: SortOrder
    _count?: SipuberCountOrderByAggregateInput
    _avg?: SipuberAvgOrderByAggregateInput
    _max?: SipuberMaxOrderByAggregateInput
    _min?: SipuberMinOrderByAggregateInput
    _sum?: SipuberSumOrderByAggregateInput
  }

  export type SipuberScalarWhereWithAggregatesInput = {
    AND?: SipuberScalarWhereWithAggregatesInput | SipuberScalarWhereWithAggregatesInput[]
    OR?: SipuberScalarWhereWithAggregatesInput[]
    NOT?: SipuberScalarWhereWithAggregatesInput | SipuberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sipuber"> | number
    created_at?: DateTimeWithAggregatesFilter<"Sipuber"> | Date | string
    device_name?: StringWithAggregatesFilter<"Sipuber"> | string
    latitude?: FloatWithAggregatesFilter<"Sipuber"> | number
    longitude?: FloatWithAggregatesFilter<"Sipuber"> | number
    pm1?: FloatNullableWithAggregatesFilter<"Sipuber"> | number | null
    pm10?: FloatNullableWithAggregatesFilter<"Sipuber"> | number | null
    pm25?: FloatNullableWithAggregatesFilter<"Sipuber"> | number | null
    co?: FloatNullableWithAggregatesFilter<"Sipuber"> | number | null
    so2?: FloatNullableWithAggregatesFilter<"Sipuber"> | number | null
    no2?: FloatNullableWithAggregatesFilter<"Sipuber"> | number | null
    o3?: FloatNullableWithAggregatesFilter<"Sipuber"> | number | null
    nh3?: FloatNullableWithAggregatesFilter<"Sipuber"> | number | null
    vbat?: FloatNullableWithAggregatesFilter<"Sipuber"> | number | null
    device_id?: IntWithAggregatesFilter<"Sipuber"> | number
  }

  export type SipuberOlahWhereInput = {
    AND?: SipuberOlahWhereInput | SipuberOlahWhereInput[]
    OR?: SipuberOlahWhereInput[]
    NOT?: SipuberOlahWhereInput | SipuberOlahWhereInput[]
    id?: IntFilter<"SipuberOlah"> | number
    created_at?: DateTimeFilter<"SipuberOlah"> | Date | string
    device_name?: StringFilter<"SipuberOlah"> | string
    latitude?: FloatFilter<"SipuberOlah"> | number
    longitude?: FloatFilter<"SipuberOlah"> | number
    pm1?: FloatNullableFilter<"SipuberOlah"> | number | null
    pm10?: FloatNullableFilter<"SipuberOlah"> | number | null
    pm25?: FloatNullableFilter<"SipuberOlah"> | number | null
    co?: FloatNullableFilter<"SipuberOlah"> | number | null
    so2?: FloatNullableFilter<"SipuberOlah"> | number | null
    no2?: FloatNullableFilter<"SipuberOlah"> | number | null
    o3?: FloatNullableFilter<"SipuberOlah"> | number | null
    nh3?: FloatNullableFilter<"SipuberOlah"> | number | null
    vbat?: FloatNullableFilter<"SipuberOlah"> | number | null
    aqi?: IntFilter<"SipuberOlah"> | number
    sipuber_id?: IntFilter<"SipuberOlah"> | number
    sipuber?: XOR<SipuberScalarRelationFilter, SipuberWhereInput>
  }

  export type SipuberOlahOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    pm1?: SortOrderInput | SortOrder
    pm10?: SortOrderInput | SortOrder
    pm25?: SortOrderInput | SortOrder
    co?: SortOrderInput | SortOrder
    so2?: SortOrderInput | SortOrder
    no2?: SortOrderInput | SortOrder
    o3?: SortOrderInput | SortOrder
    nh3?: SortOrderInput | SortOrder
    vbat?: SortOrderInput | SortOrder
    aqi?: SortOrder
    sipuber_id?: SortOrder
    sipuber?: SipuberOrderByWithRelationInput
  }

  export type SipuberOlahWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SipuberOlahWhereInput | SipuberOlahWhereInput[]
    OR?: SipuberOlahWhereInput[]
    NOT?: SipuberOlahWhereInput | SipuberOlahWhereInput[]
    created_at?: DateTimeFilter<"SipuberOlah"> | Date | string
    device_name?: StringFilter<"SipuberOlah"> | string
    latitude?: FloatFilter<"SipuberOlah"> | number
    longitude?: FloatFilter<"SipuberOlah"> | number
    pm1?: FloatNullableFilter<"SipuberOlah"> | number | null
    pm10?: FloatNullableFilter<"SipuberOlah"> | number | null
    pm25?: FloatNullableFilter<"SipuberOlah"> | number | null
    co?: FloatNullableFilter<"SipuberOlah"> | number | null
    so2?: FloatNullableFilter<"SipuberOlah"> | number | null
    no2?: FloatNullableFilter<"SipuberOlah"> | number | null
    o3?: FloatNullableFilter<"SipuberOlah"> | number | null
    nh3?: FloatNullableFilter<"SipuberOlah"> | number | null
    vbat?: FloatNullableFilter<"SipuberOlah"> | number | null
    aqi?: IntFilter<"SipuberOlah"> | number
    sipuber_id?: IntFilter<"SipuberOlah"> | number
    sipuber?: XOR<SipuberScalarRelationFilter, SipuberWhereInput>
  }, "id">

  export type SipuberOlahOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    pm1?: SortOrderInput | SortOrder
    pm10?: SortOrderInput | SortOrder
    pm25?: SortOrderInput | SortOrder
    co?: SortOrderInput | SortOrder
    so2?: SortOrderInput | SortOrder
    no2?: SortOrderInput | SortOrder
    o3?: SortOrderInput | SortOrder
    nh3?: SortOrderInput | SortOrder
    vbat?: SortOrderInput | SortOrder
    aqi?: SortOrder
    sipuber_id?: SortOrder
    _count?: SipuberOlahCountOrderByAggregateInput
    _avg?: SipuberOlahAvgOrderByAggregateInput
    _max?: SipuberOlahMaxOrderByAggregateInput
    _min?: SipuberOlahMinOrderByAggregateInput
    _sum?: SipuberOlahSumOrderByAggregateInput
  }

  export type SipuberOlahScalarWhereWithAggregatesInput = {
    AND?: SipuberOlahScalarWhereWithAggregatesInput | SipuberOlahScalarWhereWithAggregatesInput[]
    OR?: SipuberOlahScalarWhereWithAggregatesInput[]
    NOT?: SipuberOlahScalarWhereWithAggregatesInput | SipuberOlahScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SipuberOlah"> | number
    created_at?: DateTimeWithAggregatesFilter<"SipuberOlah"> | Date | string
    device_name?: StringWithAggregatesFilter<"SipuberOlah"> | string
    latitude?: FloatWithAggregatesFilter<"SipuberOlah"> | number
    longitude?: FloatWithAggregatesFilter<"SipuberOlah"> | number
    pm1?: FloatNullableWithAggregatesFilter<"SipuberOlah"> | number | null
    pm10?: FloatNullableWithAggregatesFilter<"SipuberOlah"> | number | null
    pm25?: FloatNullableWithAggregatesFilter<"SipuberOlah"> | number | null
    co?: FloatNullableWithAggregatesFilter<"SipuberOlah"> | number | null
    so2?: FloatNullableWithAggregatesFilter<"SipuberOlah"> | number | null
    no2?: FloatNullableWithAggregatesFilter<"SipuberOlah"> | number | null
    o3?: FloatNullableWithAggregatesFilter<"SipuberOlah"> | number | null
    nh3?: FloatNullableWithAggregatesFilter<"SipuberOlah"> | number | null
    vbat?: FloatNullableWithAggregatesFilter<"SipuberOlah"> | number | null
    aqi?: IntWithAggregatesFilter<"SipuberOlah"> | number
    sipuber_id?: IntWithAggregatesFilter<"SipuberOlah"> | number
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: IntFilter<"Contact"> | number
    contact_name?: StringFilter<"Contact"> | string
    phone_number?: StringFilter<"Contact"> | string
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    contact_name?: SortOrder
    phone_number?: SortOrder
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    contact_name?: StringFilter<"Contact"> | string
    phone_number?: StringFilter<"Contact"> | string
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    contact_name?: SortOrder
    phone_number?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contact"> | number
    contact_name?: StringWithAggregatesFilter<"Contact"> | string
    phone_number?: StringWithAggregatesFilter<"Contact"> | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sid?: StringFilter<"Session"> | string
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sid?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }, "id" | "sid">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sid?: StringWithAggregatesFilter<"Session"> | string
    data?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    first_name: string
    last_name: string
    email?: string | null
    no_telepon: string
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    first_name: string
    last_name: string
    email?: string | null
    no_telepon: string
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    first_name: string
    last_name: string
    email?: string | null
    no_telepon: string
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    device_name: string
    nomor_modem?: string | null
    tanggal_paket?: Date | string | null
    email: string
    latitude: number
    longitude: number
    user?: UserCreateNestedOneWithoutDevicesInput
    sipubers?: SipuberCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    device_name: string
    nomor_modem?: string | null
    tanggal_paket?: Date | string | null
    email: string
    latitude: number
    longitude: number
    user_id?: string | null
    sipubers?: SipuberUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    nomor_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutDevicesNestedInput
    sipubers?: SipuberUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    nomor_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    sipubers?: SipuberUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    device_name: string
    nomor_modem?: string | null
    tanggal_paket?: Date | string | null
    email: string
    latitude: number
    longitude: number
    user_id?: string | null
  }

  export type DeviceUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    nomor_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    nomor_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SipuberCreateInput = {
    created_at?: Date | string
    device_name: string
    latitude: number
    longitude: number
    pm1?: number | null
    pm10?: number | null
    pm25?: number | null
    co?: number | null
    so2?: number | null
    no2?: number | null
    o3?: number | null
    nh3?: number | null
    vbat?: number | null
    device: DeviceCreateNestedOneWithoutSipubersInput
    sipuberOlah?: SipuberOlahCreateNestedManyWithoutSipuberInput
  }

  export type SipuberUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    device_name: string
    latitude: number
    longitude: number
    pm1?: number | null
    pm10?: number | null
    pm25?: number | null
    co?: number | null
    so2?: number | null
    no2?: number | null
    o3?: number | null
    nh3?: number | null
    vbat?: number | null
    device_id: number
    sipuberOlah?: SipuberOlahUncheckedCreateNestedManyWithoutSipuberInput
  }

  export type SipuberUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    pm1?: NullableFloatFieldUpdateOperationsInput | number | null
    pm10?: NullableFloatFieldUpdateOperationsInput | number | null
    pm25?: NullableFloatFieldUpdateOperationsInput | number | null
    co?: NullableFloatFieldUpdateOperationsInput | number | null
    so2?: NullableFloatFieldUpdateOperationsInput | number | null
    no2?: NullableFloatFieldUpdateOperationsInput | number | null
    o3?: NullableFloatFieldUpdateOperationsInput | number | null
    nh3?: NullableFloatFieldUpdateOperationsInput | number | null
    vbat?: NullableFloatFieldUpdateOperationsInput | number | null
    device?: DeviceUpdateOneRequiredWithoutSipubersNestedInput
    sipuberOlah?: SipuberOlahUpdateManyWithoutSipuberNestedInput
  }

  export type SipuberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    pm1?: NullableFloatFieldUpdateOperationsInput | number | null
    pm10?: NullableFloatFieldUpdateOperationsInput | number | null
    pm25?: NullableFloatFieldUpdateOperationsInput | number | null
    co?: NullableFloatFieldUpdateOperationsInput | number | null
    so2?: NullableFloatFieldUpdateOperationsInput | number | null
    no2?: NullableFloatFieldUpdateOperationsInput | number | null
    o3?: NullableFloatFieldUpdateOperationsInput | number | null
    nh3?: NullableFloatFieldUpdateOperationsInput | number | null
    vbat?: NullableFloatFieldUpdateOperationsInput | number | null
    device_id?: IntFieldUpdateOperationsInput | number
    sipuberOlah?: SipuberOlahUncheckedUpdateManyWithoutSipuberNestedInput
  }

  export type SipuberCreateManyInput = {
    id?: number
    created_at?: Date | string
    device_name: string
    latitude: number
    longitude: number
    pm1?: number | null
    pm10?: number | null
    pm25?: number | null
    co?: number | null
    so2?: number | null
    no2?: number | null
    o3?: number | null
    nh3?: number | null
    vbat?: number | null
    device_id: number
  }

  export type SipuberUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    pm1?: NullableFloatFieldUpdateOperationsInput | number | null
    pm10?: NullableFloatFieldUpdateOperationsInput | number | null
    pm25?: NullableFloatFieldUpdateOperationsInput | number | null
    co?: NullableFloatFieldUpdateOperationsInput | number | null
    so2?: NullableFloatFieldUpdateOperationsInput | number | null
    no2?: NullableFloatFieldUpdateOperationsInput | number | null
    o3?: NullableFloatFieldUpdateOperationsInput | number | null
    nh3?: NullableFloatFieldUpdateOperationsInput | number | null
    vbat?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SipuberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    pm1?: NullableFloatFieldUpdateOperationsInput | number | null
    pm10?: NullableFloatFieldUpdateOperationsInput | number | null
    pm25?: NullableFloatFieldUpdateOperationsInput | number | null
    co?: NullableFloatFieldUpdateOperationsInput | number | null
    so2?: NullableFloatFieldUpdateOperationsInput | number | null
    no2?: NullableFloatFieldUpdateOperationsInput | number | null
    o3?: NullableFloatFieldUpdateOperationsInput | number | null
    nh3?: NullableFloatFieldUpdateOperationsInput | number | null
    vbat?: NullableFloatFieldUpdateOperationsInput | number | null
    device_id?: IntFieldUpdateOperationsInput | number
  }

  export type SipuberOlahCreateInput = {
    created_at?: Date | string
    device_name: string
    latitude: number
    longitude: number
    pm1?: number | null
    pm10?: number | null
    pm25?: number | null
    co?: number | null
    so2?: number | null
    no2?: number | null
    o3?: number | null
    nh3?: number | null
    vbat?: number | null
    aqi: number
    sipuber: SipuberCreateNestedOneWithoutSipuberOlahInput
  }

  export type SipuberOlahUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    device_name: string
    latitude: number
    longitude: number
    pm1?: number | null
    pm10?: number | null
    pm25?: number | null
    co?: number | null
    so2?: number | null
    no2?: number | null
    o3?: number | null
    nh3?: number | null
    vbat?: number | null
    aqi: number
    sipuber_id: number
  }

  export type SipuberOlahUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    pm1?: NullableFloatFieldUpdateOperationsInput | number | null
    pm10?: NullableFloatFieldUpdateOperationsInput | number | null
    pm25?: NullableFloatFieldUpdateOperationsInput | number | null
    co?: NullableFloatFieldUpdateOperationsInput | number | null
    so2?: NullableFloatFieldUpdateOperationsInput | number | null
    no2?: NullableFloatFieldUpdateOperationsInput | number | null
    o3?: NullableFloatFieldUpdateOperationsInput | number | null
    nh3?: NullableFloatFieldUpdateOperationsInput | number | null
    vbat?: NullableFloatFieldUpdateOperationsInput | number | null
    aqi?: IntFieldUpdateOperationsInput | number
    sipuber?: SipuberUpdateOneRequiredWithoutSipuberOlahNestedInput
  }

  export type SipuberOlahUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    pm1?: NullableFloatFieldUpdateOperationsInput | number | null
    pm10?: NullableFloatFieldUpdateOperationsInput | number | null
    pm25?: NullableFloatFieldUpdateOperationsInput | number | null
    co?: NullableFloatFieldUpdateOperationsInput | number | null
    so2?: NullableFloatFieldUpdateOperationsInput | number | null
    no2?: NullableFloatFieldUpdateOperationsInput | number | null
    o3?: NullableFloatFieldUpdateOperationsInput | number | null
    nh3?: NullableFloatFieldUpdateOperationsInput | number | null
    vbat?: NullableFloatFieldUpdateOperationsInput | number | null
    aqi?: IntFieldUpdateOperationsInput | number
    sipuber_id?: IntFieldUpdateOperationsInput | number
  }

  export type SipuberOlahCreateManyInput = {
    id?: number
    created_at?: Date | string
    device_name: string
    latitude: number
    longitude: number
    pm1?: number | null
    pm10?: number | null
    pm25?: number | null
    co?: number | null
    so2?: number | null
    no2?: number | null
    o3?: number | null
    nh3?: number | null
    vbat?: number | null
    aqi: number
    sipuber_id: number
  }

  export type SipuberOlahUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    pm1?: NullableFloatFieldUpdateOperationsInput | number | null
    pm10?: NullableFloatFieldUpdateOperationsInput | number | null
    pm25?: NullableFloatFieldUpdateOperationsInput | number | null
    co?: NullableFloatFieldUpdateOperationsInput | number | null
    so2?: NullableFloatFieldUpdateOperationsInput | number | null
    no2?: NullableFloatFieldUpdateOperationsInput | number | null
    o3?: NullableFloatFieldUpdateOperationsInput | number | null
    nh3?: NullableFloatFieldUpdateOperationsInput | number | null
    vbat?: NullableFloatFieldUpdateOperationsInput | number | null
    aqi?: IntFieldUpdateOperationsInput | number
  }

  export type SipuberOlahUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    pm1?: NullableFloatFieldUpdateOperationsInput | number | null
    pm10?: NullableFloatFieldUpdateOperationsInput | number | null
    pm25?: NullableFloatFieldUpdateOperationsInput | number | null
    co?: NullableFloatFieldUpdateOperationsInput | number | null
    so2?: NullableFloatFieldUpdateOperationsInput | number | null
    no2?: NullableFloatFieldUpdateOperationsInput | number | null
    o3?: NullableFloatFieldUpdateOperationsInput | number | null
    nh3?: NullableFloatFieldUpdateOperationsInput | number | null
    vbat?: NullableFloatFieldUpdateOperationsInput | number | null
    aqi?: IntFieldUpdateOperationsInput | number
    sipuber_id?: IntFieldUpdateOperationsInput | number
  }

  export type ContactCreateInput = {
    contact_name: string
    phone_number: string
  }

  export type ContactUncheckedCreateInput = {
    id?: number
    contact_name: string
    phone_number: string
  }

  export type ContactUpdateInput = {
    contact_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type ContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contact_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type ContactCreateManyInput = {
    id?: number
    contact_name: string
    phone_number: string
  }

  export type ContactUpdateManyMutationInput = {
    contact_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contact_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateInput = {
    id?: string
    sid: string
    data: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sid: string
    data: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sid: string
    data: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    no_telepon?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    no_telepon?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    no_telepon?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SipuberListRelationFilter = {
    every?: SipuberWhereInput
    some?: SipuberWhereInput
    none?: SipuberWhereInput
  }

  export type SipuberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    device_name?: SortOrder
    nomor_modem?: SortOrder
    tanggal_paket?: SortOrder
    email?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    user_id?: SortOrder
  }

  export type DeviceAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    device_name?: SortOrder
    nomor_modem?: SortOrder
    tanggal_paket?: SortOrder
    email?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    user_id?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    device_name?: SortOrder
    nomor_modem?: SortOrder
    tanggal_paket?: SortOrder
    email?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    user_id?: SortOrder
  }

  export type DeviceSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DeviceScalarRelationFilter = {
    is?: DeviceWhereInput
    isNot?: DeviceWhereInput
  }

  export type SipuberOlahListRelationFilter = {
    every?: SipuberOlahWhereInput
    some?: SipuberOlahWhereInput
    none?: SipuberOlahWhereInput
  }

  export type SipuberOlahOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SipuberCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    pm1?: SortOrder
    pm10?: SortOrder
    pm25?: SortOrder
    co?: SortOrder
    so2?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    vbat?: SortOrder
    device_id?: SortOrder
  }

  export type SipuberAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    pm1?: SortOrder
    pm10?: SortOrder
    pm25?: SortOrder
    co?: SortOrder
    so2?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    vbat?: SortOrder
    device_id?: SortOrder
  }

  export type SipuberMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    pm1?: SortOrder
    pm10?: SortOrder
    pm25?: SortOrder
    co?: SortOrder
    so2?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    vbat?: SortOrder
    device_id?: SortOrder
  }

  export type SipuberMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    pm1?: SortOrder
    pm10?: SortOrder
    pm25?: SortOrder
    co?: SortOrder
    so2?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    vbat?: SortOrder
    device_id?: SortOrder
  }

  export type SipuberSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    pm1?: SortOrder
    pm10?: SortOrder
    pm25?: SortOrder
    co?: SortOrder
    so2?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    vbat?: SortOrder
    device_id?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type SipuberScalarRelationFilter = {
    is?: SipuberWhereInput
    isNot?: SipuberWhereInput
  }

  export type SipuberOlahCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    pm1?: SortOrder
    pm10?: SortOrder
    pm25?: SortOrder
    co?: SortOrder
    so2?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    vbat?: SortOrder
    aqi?: SortOrder
    sipuber_id?: SortOrder
  }

  export type SipuberOlahAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    pm1?: SortOrder
    pm10?: SortOrder
    pm25?: SortOrder
    co?: SortOrder
    so2?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    vbat?: SortOrder
    aqi?: SortOrder
    sipuber_id?: SortOrder
  }

  export type SipuberOlahMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    pm1?: SortOrder
    pm10?: SortOrder
    pm25?: SortOrder
    co?: SortOrder
    so2?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    vbat?: SortOrder
    aqi?: SortOrder
    sipuber_id?: SortOrder
  }

  export type SipuberOlahMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    device_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    pm1?: SortOrder
    pm10?: SortOrder
    pm25?: SortOrder
    co?: SortOrder
    so2?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    vbat?: SortOrder
    aqi?: SortOrder
    sipuber_id?: SortOrder
  }

  export type SipuberOlahSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    pm1?: SortOrder
    pm10?: SortOrder
    pm25?: SortOrder
    co?: SortOrder
    so2?: SortOrder
    no2?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    vbat?: SortOrder
    aqi?: SortOrder
    sipuber_id?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    contact_name?: SortOrder
    phone_number?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    contact_name?: SortOrder
    phone_number?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    contact_name?: SortOrder
    phone_number?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type SipuberCreateNestedManyWithoutDeviceInput = {
    create?: XOR<SipuberCreateWithoutDeviceInput, SipuberUncheckedCreateWithoutDeviceInput> | SipuberCreateWithoutDeviceInput[] | SipuberUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SipuberCreateOrConnectWithoutDeviceInput | SipuberCreateOrConnectWithoutDeviceInput[]
    createMany?: SipuberCreateManyDeviceInputEnvelope
    connect?: SipuberWhereUniqueInput | SipuberWhereUniqueInput[]
  }

  export type SipuberUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<SipuberCreateWithoutDeviceInput, SipuberUncheckedCreateWithoutDeviceInput> | SipuberCreateWithoutDeviceInput[] | SipuberUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SipuberCreateOrConnectWithoutDeviceInput | SipuberCreateOrConnectWithoutDeviceInput[]
    createMany?: SipuberCreateManyDeviceInputEnvelope
    connect?: SipuberWhereUniqueInput | SipuberWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutDevicesNestedInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    upsert?: UserUpsertWithoutDevicesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDevicesInput, UserUpdateWithoutDevicesInput>, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type SipuberUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<SipuberCreateWithoutDeviceInput, SipuberUncheckedCreateWithoutDeviceInput> | SipuberCreateWithoutDeviceInput[] | SipuberUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SipuberCreateOrConnectWithoutDeviceInput | SipuberCreateOrConnectWithoutDeviceInput[]
    upsert?: SipuberUpsertWithWhereUniqueWithoutDeviceInput | SipuberUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: SipuberCreateManyDeviceInputEnvelope
    set?: SipuberWhereUniqueInput | SipuberWhereUniqueInput[]
    disconnect?: SipuberWhereUniqueInput | SipuberWhereUniqueInput[]
    delete?: SipuberWhereUniqueInput | SipuberWhereUniqueInput[]
    connect?: SipuberWhereUniqueInput | SipuberWhereUniqueInput[]
    update?: SipuberUpdateWithWhereUniqueWithoutDeviceInput | SipuberUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: SipuberUpdateManyWithWhereWithoutDeviceInput | SipuberUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: SipuberScalarWhereInput | SipuberScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SipuberUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<SipuberCreateWithoutDeviceInput, SipuberUncheckedCreateWithoutDeviceInput> | SipuberCreateWithoutDeviceInput[] | SipuberUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SipuberCreateOrConnectWithoutDeviceInput | SipuberCreateOrConnectWithoutDeviceInput[]
    upsert?: SipuberUpsertWithWhereUniqueWithoutDeviceInput | SipuberUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: SipuberCreateManyDeviceInputEnvelope
    set?: SipuberWhereUniqueInput | SipuberWhereUniqueInput[]
    disconnect?: SipuberWhereUniqueInput | SipuberWhereUniqueInput[]
    delete?: SipuberWhereUniqueInput | SipuberWhereUniqueInput[]
    connect?: SipuberWhereUniqueInput | SipuberWhereUniqueInput[]
    update?: SipuberUpdateWithWhereUniqueWithoutDeviceInput | SipuberUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: SipuberUpdateManyWithWhereWithoutDeviceInput | SipuberUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: SipuberScalarWhereInput | SipuberScalarWhereInput[]
  }

  export type DeviceCreateNestedOneWithoutSipubersInput = {
    create?: XOR<DeviceCreateWithoutSipubersInput, DeviceUncheckedCreateWithoutSipubersInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutSipubersInput
    connect?: DeviceWhereUniqueInput
  }

  export type SipuberOlahCreateNestedManyWithoutSipuberInput = {
    create?: XOR<SipuberOlahCreateWithoutSipuberInput, SipuberOlahUncheckedCreateWithoutSipuberInput> | SipuberOlahCreateWithoutSipuberInput[] | SipuberOlahUncheckedCreateWithoutSipuberInput[]
    connectOrCreate?: SipuberOlahCreateOrConnectWithoutSipuberInput | SipuberOlahCreateOrConnectWithoutSipuberInput[]
    createMany?: SipuberOlahCreateManySipuberInputEnvelope
    connect?: SipuberOlahWhereUniqueInput | SipuberOlahWhereUniqueInput[]
  }

  export type SipuberOlahUncheckedCreateNestedManyWithoutSipuberInput = {
    create?: XOR<SipuberOlahCreateWithoutSipuberInput, SipuberOlahUncheckedCreateWithoutSipuberInput> | SipuberOlahCreateWithoutSipuberInput[] | SipuberOlahUncheckedCreateWithoutSipuberInput[]
    connectOrCreate?: SipuberOlahCreateOrConnectWithoutSipuberInput | SipuberOlahCreateOrConnectWithoutSipuberInput[]
    createMany?: SipuberOlahCreateManySipuberInputEnvelope
    connect?: SipuberOlahWhereUniqueInput | SipuberOlahWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeviceUpdateOneRequiredWithoutSipubersNestedInput = {
    create?: XOR<DeviceCreateWithoutSipubersInput, DeviceUncheckedCreateWithoutSipubersInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutSipubersInput
    upsert?: DeviceUpsertWithoutSipubersInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutSipubersInput, DeviceUpdateWithoutSipubersInput>, DeviceUncheckedUpdateWithoutSipubersInput>
  }

  export type SipuberOlahUpdateManyWithoutSipuberNestedInput = {
    create?: XOR<SipuberOlahCreateWithoutSipuberInput, SipuberOlahUncheckedCreateWithoutSipuberInput> | SipuberOlahCreateWithoutSipuberInput[] | SipuberOlahUncheckedCreateWithoutSipuberInput[]
    connectOrCreate?: SipuberOlahCreateOrConnectWithoutSipuberInput | SipuberOlahCreateOrConnectWithoutSipuberInput[]
    upsert?: SipuberOlahUpsertWithWhereUniqueWithoutSipuberInput | SipuberOlahUpsertWithWhereUniqueWithoutSipuberInput[]
    createMany?: SipuberOlahCreateManySipuberInputEnvelope
    set?: SipuberOlahWhereUniqueInput | SipuberOlahWhereUniqueInput[]
    disconnect?: SipuberOlahWhereUniqueInput | SipuberOlahWhereUniqueInput[]
    delete?: SipuberOlahWhereUniqueInput | SipuberOlahWhereUniqueInput[]
    connect?: SipuberOlahWhereUniqueInput | SipuberOlahWhereUniqueInput[]
    update?: SipuberOlahUpdateWithWhereUniqueWithoutSipuberInput | SipuberOlahUpdateWithWhereUniqueWithoutSipuberInput[]
    updateMany?: SipuberOlahUpdateManyWithWhereWithoutSipuberInput | SipuberOlahUpdateManyWithWhereWithoutSipuberInput[]
    deleteMany?: SipuberOlahScalarWhereInput | SipuberOlahScalarWhereInput[]
  }

  export type SipuberOlahUncheckedUpdateManyWithoutSipuberNestedInput = {
    create?: XOR<SipuberOlahCreateWithoutSipuberInput, SipuberOlahUncheckedCreateWithoutSipuberInput> | SipuberOlahCreateWithoutSipuberInput[] | SipuberOlahUncheckedCreateWithoutSipuberInput[]
    connectOrCreate?: SipuberOlahCreateOrConnectWithoutSipuberInput | SipuberOlahCreateOrConnectWithoutSipuberInput[]
    upsert?: SipuberOlahUpsertWithWhereUniqueWithoutSipuberInput | SipuberOlahUpsertWithWhereUniqueWithoutSipuberInput[]
    createMany?: SipuberOlahCreateManySipuberInputEnvelope
    set?: SipuberOlahWhereUniqueInput | SipuberOlahWhereUniqueInput[]
    disconnect?: SipuberOlahWhereUniqueInput | SipuberOlahWhereUniqueInput[]
    delete?: SipuberOlahWhereUniqueInput | SipuberOlahWhereUniqueInput[]
    connect?: SipuberOlahWhereUniqueInput | SipuberOlahWhereUniqueInput[]
    update?: SipuberOlahUpdateWithWhereUniqueWithoutSipuberInput | SipuberOlahUpdateWithWhereUniqueWithoutSipuberInput[]
    updateMany?: SipuberOlahUpdateManyWithWhereWithoutSipuberInput | SipuberOlahUpdateManyWithWhereWithoutSipuberInput[]
    deleteMany?: SipuberOlahScalarWhereInput | SipuberOlahScalarWhereInput[]
  }

  export type SipuberCreateNestedOneWithoutSipuberOlahInput = {
    create?: XOR<SipuberCreateWithoutSipuberOlahInput, SipuberUncheckedCreateWithoutSipuberOlahInput>
    connectOrCreate?: SipuberCreateOrConnectWithoutSipuberOlahInput
    connect?: SipuberWhereUniqueInput
  }

  export type SipuberUpdateOneRequiredWithoutSipuberOlahNestedInput = {
    create?: XOR<SipuberCreateWithoutSipuberOlahInput, SipuberUncheckedCreateWithoutSipuberOlahInput>
    connectOrCreate?: SipuberCreateOrConnectWithoutSipuberOlahInput
    upsert?: SipuberUpsertWithoutSipuberOlahInput
    connect?: SipuberWhereUniqueInput
    update?: XOR<XOR<SipuberUpdateToOneWithWhereWithoutSipuberOlahInput, SipuberUpdateWithoutSipuberOlahInput>, SipuberUncheckedUpdateWithoutSipuberOlahInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DeviceCreateWithoutUserInput = {
    created_at?: Date | string
    updated_at?: Date | string
    device_name: string
    nomor_modem?: string | null
    tanggal_paket?: Date | string | null
    email: string
    latitude: number
    longitude: number
    sipubers?: SipuberCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutUserInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    device_name: string
    nomor_modem?: string | null
    tanggal_paket?: Date | string | null
    email: string
    latitude: number
    longitude: number
    sipubers?: SipuberUncheckedCreateNestedManyWithoutDeviceInput
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
    created_at?: DateTimeFilter<"Device"> | Date | string
    updated_at?: DateTimeFilter<"Device"> | Date | string
    device_name?: StringFilter<"Device"> | string
    nomor_modem?: StringNullableFilter<"Device"> | string | null
    tanggal_paket?: DateTimeNullableFilter<"Device"> | Date | string | null
    email?: StringFilter<"Device"> | string
    latitude?: FloatFilter<"Device"> | number
    longitude?: FloatFilter<"Device"> | number
    user_id?: StringNullableFilter<"Device"> | string | null
  }

  export type UserCreateWithoutDevicesInput = {
    id?: string
    first_name: string
    last_name: string
    email?: string | null
    no_telepon: string
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutDevicesInput = {
    id?: string
    first_name: string
    last_name: string
    email?: string | null
    no_telepon: string
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutDevicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
  }

  export type SipuberCreateWithoutDeviceInput = {
    created_at?: Date | string
    device_name: string
    latitude: number
    longitude: number
    pm1?: number | null
    pm10?: number | null
    pm25?: number | null
    co?: number | null
    so2?: number | null
    no2?: number | null
    o3?: number | null
    nh3?: number | null
    vbat?: number | null
    sipuberOlah?: SipuberOlahCreateNestedManyWithoutSipuberInput
  }

  export type SipuberUncheckedCreateWithoutDeviceInput = {
    id?: number
    created_at?: Date | string
    device_name: string
    latitude: number
    longitude: number
    pm1?: number | null
    pm10?: number | null
    pm25?: number | null
    co?: number | null
    so2?: number | null
    no2?: number | null
    o3?: number | null
    nh3?: number | null
    vbat?: number | null
    sipuberOlah?: SipuberOlahUncheckedCreateNestedManyWithoutSipuberInput
  }

  export type SipuberCreateOrConnectWithoutDeviceInput = {
    where: SipuberWhereUniqueInput
    create: XOR<SipuberCreateWithoutDeviceInput, SipuberUncheckedCreateWithoutDeviceInput>
  }

  export type SipuberCreateManyDeviceInputEnvelope = {
    data: SipuberCreateManyDeviceInput | SipuberCreateManyDeviceInput[]
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
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SipuberUpsertWithWhereUniqueWithoutDeviceInput = {
    where: SipuberWhereUniqueInput
    update: XOR<SipuberUpdateWithoutDeviceInput, SipuberUncheckedUpdateWithoutDeviceInput>
    create: XOR<SipuberCreateWithoutDeviceInput, SipuberUncheckedCreateWithoutDeviceInput>
  }

  export type SipuberUpdateWithWhereUniqueWithoutDeviceInput = {
    where: SipuberWhereUniqueInput
    data: XOR<SipuberUpdateWithoutDeviceInput, SipuberUncheckedUpdateWithoutDeviceInput>
  }

  export type SipuberUpdateManyWithWhereWithoutDeviceInput = {
    where: SipuberScalarWhereInput
    data: XOR<SipuberUpdateManyMutationInput, SipuberUncheckedUpdateManyWithoutDeviceInput>
  }

  export type SipuberScalarWhereInput = {
    AND?: SipuberScalarWhereInput | SipuberScalarWhereInput[]
    OR?: SipuberScalarWhereInput[]
    NOT?: SipuberScalarWhereInput | SipuberScalarWhereInput[]
    id?: IntFilter<"Sipuber"> | number
    created_at?: DateTimeFilter<"Sipuber"> | Date | string
    device_name?: StringFilter<"Sipuber"> | string
    latitude?: FloatFilter<"Sipuber"> | number
    longitude?: FloatFilter<"Sipuber"> | number
    pm1?: FloatNullableFilter<"Sipuber"> | number | null
    pm10?: FloatNullableFilter<"Sipuber"> | number | null
    pm25?: FloatNullableFilter<"Sipuber"> | number | null
    co?: FloatNullableFilter<"Sipuber"> | number | null
    so2?: FloatNullableFilter<"Sipuber"> | number | null
    no2?: FloatNullableFilter<"Sipuber"> | number | null
    o3?: FloatNullableFilter<"Sipuber"> | number | null
    nh3?: FloatNullableFilter<"Sipuber"> | number | null
    vbat?: FloatNullableFilter<"Sipuber"> | number | null
    device_id?: IntFilter<"Sipuber"> | number
  }

  export type DeviceCreateWithoutSipubersInput = {
    created_at?: Date | string
    updated_at?: Date | string
    device_name: string
    nomor_modem?: string | null
    tanggal_paket?: Date | string | null
    email: string
    latitude: number
    longitude: number
    user?: UserCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateWithoutSipubersInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    device_name: string
    nomor_modem?: string | null
    tanggal_paket?: Date | string | null
    email: string
    latitude: number
    longitude: number
    user_id?: string | null
  }

  export type DeviceCreateOrConnectWithoutSipubersInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutSipubersInput, DeviceUncheckedCreateWithoutSipubersInput>
  }

  export type SipuberOlahCreateWithoutSipuberInput = {
    created_at?: Date | string
    device_name: string
    latitude: number
    longitude: number
    pm1?: number | null
    pm10?: number | null
    pm25?: number | null
    co?: number | null
    so2?: number | null
    no2?: number | null
    o3?: number | null
    nh3?: number | null
    vbat?: number | null
    aqi: number
  }

  export type SipuberOlahUncheckedCreateWithoutSipuberInput = {
    id?: number
    created_at?: Date | string
    device_name: string
    latitude: number
    longitude: number
    pm1?: number | null
    pm10?: number | null
    pm25?: number | null
    co?: number | null
    so2?: number | null
    no2?: number | null
    o3?: number | null
    nh3?: number | null
    vbat?: number | null
    aqi: number
  }

  export type SipuberOlahCreateOrConnectWithoutSipuberInput = {
    where: SipuberOlahWhereUniqueInput
    create: XOR<SipuberOlahCreateWithoutSipuberInput, SipuberOlahUncheckedCreateWithoutSipuberInput>
  }

  export type SipuberOlahCreateManySipuberInputEnvelope = {
    data: SipuberOlahCreateManySipuberInput | SipuberOlahCreateManySipuberInput[]
    skipDuplicates?: boolean
  }

  export type DeviceUpsertWithoutSipubersInput = {
    update: XOR<DeviceUpdateWithoutSipubersInput, DeviceUncheckedUpdateWithoutSipubersInput>
    create: XOR<DeviceCreateWithoutSipubersInput, DeviceUncheckedCreateWithoutSipubersInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutSipubersInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutSipubersInput, DeviceUncheckedUpdateWithoutSipubersInput>
  }

  export type DeviceUpdateWithoutSipubersInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    nomor_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateWithoutSipubersInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    nomor_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SipuberOlahUpsertWithWhereUniqueWithoutSipuberInput = {
    where: SipuberOlahWhereUniqueInput
    update: XOR<SipuberOlahUpdateWithoutSipuberInput, SipuberOlahUncheckedUpdateWithoutSipuberInput>
    create: XOR<SipuberOlahCreateWithoutSipuberInput, SipuberOlahUncheckedCreateWithoutSipuberInput>
  }

  export type SipuberOlahUpdateWithWhereUniqueWithoutSipuberInput = {
    where: SipuberOlahWhereUniqueInput
    data: XOR<SipuberOlahUpdateWithoutSipuberInput, SipuberOlahUncheckedUpdateWithoutSipuberInput>
  }

  export type SipuberOlahUpdateManyWithWhereWithoutSipuberInput = {
    where: SipuberOlahScalarWhereInput
    data: XOR<SipuberOlahUpdateManyMutationInput, SipuberOlahUncheckedUpdateManyWithoutSipuberInput>
  }

  export type SipuberOlahScalarWhereInput = {
    AND?: SipuberOlahScalarWhereInput | SipuberOlahScalarWhereInput[]
    OR?: SipuberOlahScalarWhereInput[]
    NOT?: SipuberOlahScalarWhereInput | SipuberOlahScalarWhereInput[]
    id?: IntFilter<"SipuberOlah"> | number
    created_at?: DateTimeFilter<"SipuberOlah"> | Date | string
    device_name?: StringFilter<"SipuberOlah"> | string
    latitude?: FloatFilter<"SipuberOlah"> | number
    longitude?: FloatFilter<"SipuberOlah"> | number
    pm1?: FloatNullableFilter<"SipuberOlah"> | number | null
    pm10?: FloatNullableFilter<"SipuberOlah"> | number | null
    pm25?: FloatNullableFilter<"SipuberOlah"> | number | null
    co?: FloatNullableFilter<"SipuberOlah"> | number | null
    so2?: FloatNullableFilter<"SipuberOlah"> | number | null
    no2?: FloatNullableFilter<"SipuberOlah"> | number | null
    o3?: FloatNullableFilter<"SipuberOlah"> | number | null
    nh3?: FloatNullableFilter<"SipuberOlah"> | number | null
    vbat?: FloatNullableFilter<"SipuberOlah"> | number | null
    aqi?: IntFilter<"SipuberOlah"> | number
    sipuber_id?: IntFilter<"SipuberOlah"> | number
  }

  export type SipuberCreateWithoutSipuberOlahInput = {
    created_at?: Date | string
    device_name: string
    latitude: number
    longitude: number
    pm1?: number | null
    pm10?: number | null
    pm25?: number | null
    co?: number | null
    so2?: number | null
    no2?: number | null
    o3?: number | null
    nh3?: number | null
    vbat?: number | null
    device: DeviceCreateNestedOneWithoutSipubersInput
  }

  export type SipuberUncheckedCreateWithoutSipuberOlahInput = {
    id?: number
    created_at?: Date | string
    device_name: string
    latitude: number
    longitude: number
    pm1?: number | null
    pm10?: number | null
    pm25?: number | null
    co?: number | null
    so2?: number | null
    no2?: number | null
    o3?: number | null
    nh3?: number | null
    vbat?: number | null
    device_id: number
  }

  export type SipuberCreateOrConnectWithoutSipuberOlahInput = {
    where: SipuberWhereUniqueInput
    create: XOR<SipuberCreateWithoutSipuberOlahInput, SipuberUncheckedCreateWithoutSipuberOlahInput>
  }

  export type SipuberUpsertWithoutSipuberOlahInput = {
    update: XOR<SipuberUpdateWithoutSipuberOlahInput, SipuberUncheckedUpdateWithoutSipuberOlahInput>
    create: XOR<SipuberCreateWithoutSipuberOlahInput, SipuberUncheckedCreateWithoutSipuberOlahInput>
    where?: SipuberWhereInput
  }

  export type SipuberUpdateToOneWithWhereWithoutSipuberOlahInput = {
    where?: SipuberWhereInput
    data: XOR<SipuberUpdateWithoutSipuberOlahInput, SipuberUncheckedUpdateWithoutSipuberOlahInput>
  }

  export type SipuberUpdateWithoutSipuberOlahInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    pm1?: NullableFloatFieldUpdateOperationsInput | number | null
    pm10?: NullableFloatFieldUpdateOperationsInput | number | null
    pm25?: NullableFloatFieldUpdateOperationsInput | number | null
    co?: NullableFloatFieldUpdateOperationsInput | number | null
    so2?: NullableFloatFieldUpdateOperationsInput | number | null
    no2?: NullableFloatFieldUpdateOperationsInput | number | null
    o3?: NullableFloatFieldUpdateOperationsInput | number | null
    nh3?: NullableFloatFieldUpdateOperationsInput | number | null
    vbat?: NullableFloatFieldUpdateOperationsInput | number | null
    device?: DeviceUpdateOneRequiredWithoutSipubersNestedInput
  }

  export type SipuberUncheckedUpdateWithoutSipuberOlahInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    pm1?: NullableFloatFieldUpdateOperationsInput | number | null
    pm10?: NullableFloatFieldUpdateOperationsInput | number | null
    pm25?: NullableFloatFieldUpdateOperationsInput | number | null
    co?: NullableFloatFieldUpdateOperationsInput | number | null
    so2?: NullableFloatFieldUpdateOperationsInput | number | null
    no2?: NullableFloatFieldUpdateOperationsInput | number | null
    o3?: NullableFloatFieldUpdateOperationsInput | number | null
    nh3?: NullableFloatFieldUpdateOperationsInput | number | null
    vbat?: NullableFloatFieldUpdateOperationsInput | number | null
    device_id?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceCreateManyUserInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    device_name: string
    nomor_modem?: string | null
    tanggal_paket?: Date | string | null
    email: string
    latitude: number
    longitude: number
  }

  export type DeviceUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    nomor_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    sipubers?: SipuberUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    nomor_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    sipubers?: SipuberUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    nomor_modem?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_paket?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type SipuberCreateManyDeviceInput = {
    id?: number
    created_at?: Date | string
    device_name: string
    latitude: number
    longitude: number
    pm1?: number | null
    pm10?: number | null
    pm25?: number | null
    co?: number | null
    so2?: number | null
    no2?: number | null
    o3?: number | null
    nh3?: number | null
    vbat?: number | null
  }

  export type SipuberUpdateWithoutDeviceInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    pm1?: NullableFloatFieldUpdateOperationsInput | number | null
    pm10?: NullableFloatFieldUpdateOperationsInput | number | null
    pm25?: NullableFloatFieldUpdateOperationsInput | number | null
    co?: NullableFloatFieldUpdateOperationsInput | number | null
    so2?: NullableFloatFieldUpdateOperationsInput | number | null
    no2?: NullableFloatFieldUpdateOperationsInput | number | null
    o3?: NullableFloatFieldUpdateOperationsInput | number | null
    nh3?: NullableFloatFieldUpdateOperationsInput | number | null
    vbat?: NullableFloatFieldUpdateOperationsInput | number | null
    sipuberOlah?: SipuberOlahUpdateManyWithoutSipuberNestedInput
  }

  export type SipuberUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    pm1?: NullableFloatFieldUpdateOperationsInput | number | null
    pm10?: NullableFloatFieldUpdateOperationsInput | number | null
    pm25?: NullableFloatFieldUpdateOperationsInput | number | null
    co?: NullableFloatFieldUpdateOperationsInput | number | null
    so2?: NullableFloatFieldUpdateOperationsInput | number | null
    no2?: NullableFloatFieldUpdateOperationsInput | number | null
    o3?: NullableFloatFieldUpdateOperationsInput | number | null
    nh3?: NullableFloatFieldUpdateOperationsInput | number | null
    vbat?: NullableFloatFieldUpdateOperationsInput | number | null
    sipuberOlah?: SipuberOlahUncheckedUpdateManyWithoutSipuberNestedInput
  }

  export type SipuberUncheckedUpdateManyWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    pm1?: NullableFloatFieldUpdateOperationsInput | number | null
    pm10?: NullableFloatFieldUpdateOperationsInput | number | null
    pm25?: NullableFloatFieldUpdateOperationsInput | number | null
    co?: NullableFloatFieldUpdateOperationsInput | number | null
    so2?: NullableFloatFieldUpdateOperationsInput | number | null
    no2?: NullableFloatFieldUpdateOperationsInput | number | null
    o3?: NullableFloatFieldUpdateOperationsInput | number | null
    nh3?: NullableFloatFieldUpdateOperationsInput | number | null
    vbat?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SipuberOlahCreateManySipuberInput = {
    id?: number
    created_at?: Date | string
    device_name: string
    latitude: number
    longitude: number
    pm1?: number | null
    pm10?: number | null
    pm25?: number | null
    co?: number | null
    so2?: number | null
    no2?: number | null
    o3?: number | null
    nh3?: number | null
    vbat?: number | null
    aqi: number
  }

  export type SipuberOlahUpdateWithoutSipuberInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    pm1?: NullableFloatFieldUpdateOperationsInput | number | null
    pm10?: NullableFloatFieldUpdateOperationsInput | number | null
    pm25?: NullableFloatFieldUpdateOperationsInput | number | null
    co?: NullableFloatFieldUpdateOperationsInput | number | null
    so2?: NullableFloatFieldUpdateOperationsInput | number | null
    no2?: NullableFloatFieldUpdateOperationsInput | number | null
    o3?: NullableFloatFieldUpdateOperationsInput | number | null
    nh3?: NullableFloatFieldUpdateOperationsInput | number | null
    vbat?: NullableFloatFieldUpdateOperationsInput | number | null
    aqi?: IntFieldUpdateOperationsInput | number
  }

  export type SipuberOlahUncheckedUpdateWithoutSipuberInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    pm1?: NullableFloatFieldUpdateOperationsInput | number | null
    pm10?: NullableFloatFieldUpdateOperationsInput | number | null
    pm25?: NullableFloatFieldUpdateOperationsInput | number | null
    co?: NullableFloatFieldUpdateOperationsInput | number | null
    so2?: NullableFloatFieldUpdateOperationsInput | number | null
    no2?: NullableFloatFieldUpdateOperationsInput | number | null
    o3?: NullableFloatFieldUpdateOperationsInput | number | null
    nh3?: NullableFloatFieldUpdateOperationsInput | number | null
    vbat?: NullableFloatFieldUpdateOperationsInput | number | null
    aqi?: IntFieldUpdateOperationsInput | number
  }

  export type SipuberOlahUncheckedUpdateManyWithoutSipuberInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    pm1?: NullableFloatFieldUpdateOperationsInput | number | null
    pm10?: NullableFloatFieldUpdateOperationsInput | number | null
    pm25?: NullableFloatFieldUpdateOperationsInput | number | null
    co?: NullableFloatFieldUpdateOperationsInput | number | null
    so2?: NullableFloatFieldUpdateOperationsInput | number | null
    no2?: NullableFloatFieldUpdateOperationsInput | number | null
    o3?: NullableFloatFieldUpdateOperationsInput | number | null
    nh3?: NullableFloatFieldUpdateOperationsInput | number | null
    vbat?: NullableFloatFieldUpdateOperationsInput | number | null
    aqi?: IntFieldUpdateOperationsInput | number
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
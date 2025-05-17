
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
 * Model coolers
 * 
 */
export type coolers = $Result.DefaultSelection<Prisma.$coolersPayload>
/**
 * Model cpus
 * 
 */
export type cpus = $Result.DefaultSelection<Prisma.$cpusPayload>
/**
 * Model fuentes
 * 
 */
export type fuentes = $Result.DefaultSelection<Prisma.$fuentesPayload>
/**
 * Model gabinetes
 * 
 */
export type gabinetes = $Result.DefaultSelection<Prisma.$gabinetesPayload>
/**
 * Model graficas
 * 
 */
export type graficas = $Result.DefaultSelection<Prisma.$graficasPayload>
/**
 * Model memorias_externas
 * 
 */
export type memorias_externas = $Result.DefaultSelection<Prisma.$memorias_externasPayload>
/**
 * Model memorias_internas
 * 
 */
export type memorias_internas = $Result.DefaultSelection<Prisma.$memorias_internasPayload>
/**
 * Model mothers
 * 
 */
export type mothers = $Result.DefaultSelection<Prisma.$mothersPayload>
/**
 * Model rams
 * 
 */
export type rams = $Result.DefaultSelection<Prisma.$ramsPayload>
/**
 * Model sounds
 * 
 */
export type sounds = $Result.DefaultSelection<Prisma.$soundsPayload>
/**
 * Model ususarios
 * 
 */
export type ususarios = $Result.DefaultSelection<Prisma.$ususariosPayload>
/**
 * Model vendedores
 * 
 */
export type vendedores = $Result.DefaultSelection<Prisma.$vendedoresPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Coolers
 * const coolers = await prisma.coolers.findMany()
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
   * // Fetch zero or more Coolers
   * const coolers = await prisma.coolers.findMany()
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
   * `prisma.coolers`: Exposes CRUD operations for the **coolers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coolers
    * const coolers = await prisma.coolers.findMany()
    * ```
    */
  get coolers(): Prisma.coolersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cpus`: Exposes CRUD operations for the **cpus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cpuses
    * const cpuses = await prisma.cpus.findMany()
    * ```
    */
  get cpus(): Prisma.cpusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fuentes`: Exposes CRUD operations for the **fuentes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fuentes
    * const fuentes = await prisma.fuentes.findMany()
    * ```
    */
  get fuentes(): Prisma.fuentesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gabinetes`: Exposes CRUD operations for the **gabinetes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gabinetes
    * const gabinetes = await prisma.gabinetes.findMany()
    * ```
    */
  get gabinetes(): Prisma.gabinetesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.graficas`: Exposes CRUD operations for the **graficas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Graficas
    * const graficas = await prisma.graficas.findMany()
    * ```
    */
  get graficas(): Prisma.graficasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memorias_externas`: Exposes CRUD operations for the **memorias_externas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memorias_externas
    * const memorias_externas = await prisma.memorias_externas.findMany()
    * ```
    */
  get memorias_externas(): Prisma.memorias_externasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memorias_internas`: Exposes CRUD operations for the **memorias_internas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memorias_internas
    * const memorias_internas = await prisma.memorias_internas.findMany()
    * ```
    */
  get memorias_internas(): Prisma.memorias_internasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mothers`: Exposes CRUD operations for the **mothers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mothers
    * const mothers = await prisma.mothers.findMany()
    * ```
    */
  get mothers(): Prisma.mothersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rams`: Exposes CRUD operations for the **rams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rams
    * const rams = await prisma.rams.findMany()
    * ```
    */
  get rams(): Prisma.ramsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sounds`: Exposes CRUD operations for the **sounds** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sounds
    * const sounds = await prisma.sounds.findMany()
    * ```
    */
  get sounds(): Prisma.soundsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ususarios`: Exposes CRUD operations for the **ususarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ususarios
    * const ususarios = await prisma.ususarios.findMany()
    * ```
    */
  get ususarios(): Prisma.ususariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendedores`: Exposes CRUD operations for the **vendedores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendedores
    * const vendedores = await prisma.vendedores.findMany()
    * ```
    */
  get vendedores(): Prisma.vendedoresDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    coolers: 'coolers',
    cpus: 'cpus',
    fuentes: 'fuentes',
    gabinetes: 'gabinetes',
    graficas: 'graficas',
    memorias_externas: 'memorias_externas',
    memorias_internas: 'memorias_internas',
    mothers: 'mothers',
    rams: 'rams',
    sounds: 'sounds',
    ususarios: 'ususarios',
    vendedores: 'vendedores'
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
      modelProps: "coolers" | "cpus" | "fuentes" | "gabinetes" | "graficas" | "memorias_externas" | "memorias_internas" | "mothers" | "rams" | "sounds" | "ususarios" | "vendedores"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      coolers: {
        payload: Prisma.$coolersPayload<ExtArgs>
        fields: Prisma.coolersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.coolersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coolersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.coolersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coolersPayload>
          }
          findFirst: {
            args: Prisma.coolersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coolersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.coolersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coolersPayload>
          }
          findMany: {
            args: Prisma.coolersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coolersPayload>[]
          }
          create: {
            args: Prisma.coolersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coolersPayload>
          }
          createMany: {
            args: Prisma.coolersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.coolersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coolersPayload>[]
          }
          delete: {
            args: Prisma.coolersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coolersPayload>
          }
          update: {
            args: Prisma.coolersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coolersPayload>
          }
          deleteMany: {
            args: Prisma.coolersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.coolersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.coolersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coolersPayload>[]
          }
          upsert: {
            args: Prisma.coolersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coolersPayload>
          }
          aggregate: {
            args: Prisma.CoolersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoolers>
          }
          groupBy: {
            args: Prisma.coolersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoolersGroupByOutputType>[]
          }
          count: {
            args: Prisma.coolersCountArgs<ExtArgs>
            result: $Utils.Optional<CoolersCountAggregateOutputType> | number
          }
        }
      }
      cpus: {
        payload: Prisma.$cpusPayload<ExtArgs>
        fields: Prisma.cpusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cpusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cpusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cpusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cpusPayload>
          }
          findFirst: {
            args: Prisma.cpusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cpusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cpusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cpusPayload>
          }
          findMany: {
            args: Prisma.cpusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cpusPayload>[]
          }
          create: {
            args: Prisma.cpusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cpusPayload>
          }
          createMany: {
            args: Prisma.cpusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cpusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cpusPayload>[]
          }
          delete: {
            args: Prisma.cpusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cpusPayload>
          }
          update: {
            args: Prisma.cpusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cpusPayload>
          }
          deleteMany: {
            args: Prisma.cpusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cpusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cpusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cpusPayload>[]
          }
          upsert: {
            args: Prisma.cpusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cpusPayload>
          }
          aggregate: {
            args: Prisma.CpusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCpus>
          }
          groupBy: {
            args: Prisma.cpusGroupByArgs<ExtArgs>
            result: $Utils.Optional<CpusGroupByOutputType>[]
          }
          count: {
            args: Prisma.cpusCountArgs<ExtArgs>
            result: $Utils.Optional<CpusCountAggregateOutputType> | number
          }
        }
      }
      fuentes: {
        payload: Prisma.$fuentesPayload<ExtArgs>
        fields: Prisma.fuentesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fuentesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuentesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fuentesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuentesPayload>
          }
          findFirst: {
            args: Prisma.fuentesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuentesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fuentesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuentesPayload>
          }
          findMany: {
            args: Prisma.fuentesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuentesPayload>[]
          }
          create: {
            args: Prisma.fuentesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuentesPayload>
          }
          createMany: {
            args: Prisma.fuentesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fuentesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuentesPayload>[]
          }
          delete: {
            args: Prisma.fuentesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuentesPayload>
          }
          update: {
            args: Prisma.fuentesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuentesPayload>
          }
          deleteMany: {
            args: Prisma.fuentesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fuentesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.fuentesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuentesPayload>[]
          }
          upsert: {
            args: Prisma.fuentesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuentesPayload>
          }
          aggregate: {
            args: Prisma.FuentesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuentes>
          }
          groupBy: {
            args: Prisma.fuentesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuentesGroupByOutputType>[]
          }
          count: {
            args: Prisma.fuentesCountArgs<ExtArgs>
            result: $Utils.Optional<FuentesCountAggregateOutputType> | number
          }
        }
      }
      gabinetes: {
        payload: Prisma.$gabinetesPayload<ExtArgs>
        fields: Prisma.gabinetesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gabinetesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gabinetesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gabinetesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gabinetesPayload>
          }
          findFirst: {
            args: Prisma.gabinetesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gabinetesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gabinetesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gabinetesPayload>
          }
          findMany: {
            args: Prisma.gabinetesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gabinetesPayload>[]
          }
          create: {
            args: Prisma.gabinetesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gabinetesPayload>
          }
          createMany: {
            args: Prisma.gabinetesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gabinetesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gabinetesPayload>[]
          }
          delete: {
            args: Prisma.gabinetesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gabinetesPayload>
          }
          update: {
            args: Prisma.gabinetesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gabinetesPayload>
          }
          deleteMany: {
            args: Prisma.gabinetesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gabinetesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.gabinetesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gabinetesPayload>[]
          }
          upsert: {
            args: Prisma.gabinetesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gabinetesPayload>
          }
          aggregate: {
            args: Prisma.GabinetesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGabinetes>
          }
          groupBy: {
            args: Prisma.gabinetesGroupByArgs<ExtArgs>
            result: $Utils.Optional<GabinetesGroupByOutputType>[]
          }
          count: {
            args: Prisma.gabinetesCountArgs<ExtArgs>
            result: $Utils.Optional<GabinetesCountAggregateOutputType> | number
          }
        }
      }
      graficas: {
        payload: Prisma.$graficasPayload<ExtArgs>
        fields: Prisma.graficasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.graficasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$graficasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.graficasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$graficasPayload>
          }
          findFirst: {
            args: Prisma.graficasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$graficasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.graficasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$graficasPayload>
          }
          findMany: {
            args: Prisma.graficasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$graficasPayload>[]
          }
          create: {
            args: Prisma.graficasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$graficasPayload>
          }
          createMany: {
            args: Prisma.graficasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.graficasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$graficasPayload>[]
          }
          delete: {
            args: Prisma.graficasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$graficasPayload>
          }
          update: {
            args: Prisma.graficasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$graficasPayload>
          }
          deleteMany: {
            args: Prisma.graficasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.graficasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.graficasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$graficasPayload>[]
          }
          upsert: {
            args: Prisma.graficasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$graficasPayload>
          }
          aggregate: {
            args: Prisma.GraficasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGraficas>
          }
          groupBy: {
            args: Prisma.graficasGroupByArgs<ExtArgs>
            result: $Utils.Optional<GraficasGroupByOutputType>[]
          }
          count: {
            args: Prisma.graficasCountArgs<ExtArgs>
            result: $Utils.Optional<GraficasCountAggregateOutputType> | number
          }
        }
      }
      memorias_externas: {
        payload: Prisma.$memorias_externasPayload<ExtArgs>
        fields: Prisma.memorias_externasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.memorias_externasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_externasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.memorias_externasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_externasPayload>
          }
          findFirst: {
            args: Prisma.memorias_externasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_externasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.memorias_externasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_externasPayload>
          }
          findMany: {
            args: Prisma.memorias_externasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_externasPayload>[]
          }
          create: {
            args: Prisma.memorias_externasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_externasPayload>
          }
          createMany: {
            args: Prisma.memorias_externasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.memorias_externasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_externasPayload>[]
          }
          delete: {
            args: Prisma.memorias_externasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_externasPayload>
          }
          update: {
            args: Prisma.memorias_externasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_externasPayload>
          }
          deleteMany: {
            args: Prisma.memorias_externasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.memorias_externasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.memorias_externasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_externasPayload>[]
          }
          upsert: {
            args: Prisma.memorias_externasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_externasPayload>
          }
          aggregate: {
            args: Prisma.Memorias_externasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemorias_externas>
          }
          groupBy: {
            args: Prisma.memorias_externasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Memorias_externasGroupByOutputType>[]
          }
          count: {
            args: Prisma.memorias_externasCountArgs<ExtArgs>
            result: $Utils.Optional<Memorias_externasCountAggregateOutputType> | number
          }
        }
      }
      memorias_internas: {
        payload: Prisma.$memorias_internasPayload<ExtArgs>
        fields: Prisma.memorias_internasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.memorias_internasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_internasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.memorias_internasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_internasPayload>
          }
          findFirst: {
            args: Prisma.memorias_internasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_internasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.memorias_internasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_internasPayload>
          }
          findMany: {
            args: Prisma.memorias_internasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_internasPayload>[]
          }
          create: {
            args: Prisma.memorias_internasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_internasPayload>
          }
          createMany: {
            args: Prisma.memorias_internasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.memorias_internasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_internasPayload>[]
          }
          delete: {
            args: Prisma.memorias_internasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_internasPayload>
          }
          update: {
            args: Prisma.memorias_internasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_internasPayload>
          }
          deleteMany: {
            args: Prisma.memorias_internasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.memorias_internasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.memorias_internasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_internasPayload>[]
          }
          upsert: {
            args: Prisma.memorias_internasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memorias_internasPayload>
          }
          aggregate: {
            args: Prisma.Memorias_internasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemorias_internas>
          }
          groupBy: {
            args: Prisma.memorias_internasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Memorias_internasGroupByOutputType>[]
          }
          count: {
            args: Prisma.memorias_internasCountArgs<ExtArgs>
            result: $Utils.Optional<Memorias_internasCountAggregateOutputType> | number
          }
        }
      }
      mothers: {
        payload: Prisma.$mothersPayload<ExtArgs>
        fields: Prisma.mothersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mothersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mothersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mothersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mothersPayload>
          }
          findFirst: {
            args: Prisma.mothersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mothersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mothersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mothersPayload>
          }
          findMany: {
            args: Prisma.mothersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mothersPayload>[]
          }
          create: {
            args: Prisma.mothersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mothersPayload>
          }
          createMany: {
            args: Prisma.mothersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mothersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mothersPayload>[]
          }
          delete: {
            args: Prisma.mothersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mothersPayload>
          }
          update: {
            args: Prisma.mothersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mothersPayload>
          }
          deleteMany: {
            args: Prisma.mothersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mothersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mothersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mothersPayload>[]
          }
          upsert: {
            args: Prisma.mothersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mothersPayload>
          }
          aggregate: {
            args: Prisma.MothersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMothers>
          }
          groupBy: {
            args: Prisma.mothersGroupByArgs<ExtArgs>
            result: $Utils.Optional<MothersGroupByOutputType>[]
          }
          count: {
            args: Prisma.mothersCountArgs<ExtArgs>
            result: $Utils.Optional<MothersCountAggregateOutputType> | number
          }
        }
      }
      rams: {
        payload: Prisma.$ramsPayload<ExtArgs>
        fields: Prisma.ramsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ramsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ramsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ramsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ramsPayload>
          }
          findFirst: {
            args: Prisma.ramsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ramsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ramsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ramsPayload>
          }
          findMany: {
            args: Prisma.ramsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ramsPayload>[]
          }
          create: {
            args: Prisma.ramsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ramsPayload>
          }
          createMany: {
            args: Prisma.ramsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ramsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ramsPayload>[]
          }
          delete: {
            args: Prisma.ramsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ramsPayload>
          }
          update: {
            args: Prisma.ramsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ramsPayload>
          }
          deleteMany: {
            args: Prisma.ramsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ramsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ramsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ramsPayload>[]
          }
          upsert: {
            args: Prisma.ramsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ramsPayload>
          }
          aggregate: {
            args: Prisma.RamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRams>
          }
          groupBy: {
            args: Prisma.ramsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ramsCountArgs<ExtArgs>
            result: $Utils.Optional<RamsCountAggregateOutputType> | number
          }
        }
      }
      sounds: {
        payload: Prisma.$soundsPayload<ExtArgs>
        fields: Prisma.soundsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.soundsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$soundsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.soundsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$soundsPayload>
          }
          findFirst: {
            args: Prisma.soundsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$soundsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.soundsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$soundsPayload>
          }
          findMany: {
            args: Prisma.soundsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$soundsPayload>[]
          }
          create: {
            args: Prisma.soundsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$soundsPayload>
          }
          createMany: {
            args: Prisma.soundsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.soundsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$soundsPayload>[]
          }
          delete: {
            args: Prisma.soundsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$soundsPayload>
          }
          update: {
            args: Prisma.soundsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$soundsPayload>
          }
          deleteMany: {
            args: Prisma.soundsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.soundsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.soundsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$soundsPayload>[]
          }
          upsert: {
            args: Prisma.soundsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$soundsPayload>
          }
          aggregate: {
            args: Prisma.SoundsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSounds>
          }
          groupBy: {
            args: Prisma.soundsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SoundsGroupByOutputType>[]
          }
          count: {
            args: Prisma.soundsCountArgs<ExtArgs>
            result: $Utils.Optional<SoundsCountAggregateOutputType> | number
          }
        }
      }
      ususarios: {
        payload: Prisma.$ususariosPayload<ExtArgs>
        fields: Prisma.ususariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ususariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ususariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ususariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ususariosPayload>
          }
          findFirst: {
            args: Prisma.ususariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ususariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ususariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ususariosPayload>
          }
          findMany: {
            args: Prisma.ususariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ususariosPayload>[]
          }
          create: {
            args: Prisma.ususariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ususariosPayload>
          }
          createMany: {
            args: Prisma.ususariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ususariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ususariosPayload>[]
          }
          delete: {
            args: Prisma.ususariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ususariosPayload>
          }
          update: {
            args: Prisma.ususariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ususariosPayload>
          }
          deleteMany: {
            args: Prisma.ususariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ususariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ususariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ususariosPayload>[]
          }
          upsert: {
            args: Prisma.ususariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ususariosPayload>
          }
          aggregate: {
            args: Prisma.UsusariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsusarios>
          }
          groupBy: {
            args: Prisma.ususariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsusariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ususariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsusariosCountAggregateOutputType> | number
          }
        }
      }
      vendedores: {
        payload: Prisma.$vendedoresPayload<ExtArgs>
        fields: Prisma.vendedoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vendedoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vendedoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload>
          }
          findFirst: {
            args: Prisma.vendedoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vendedoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload>
          }
          findMany: {
            args: Prisma.vendedoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload>[]
          }
          create: {
            args: Prisma.vendedoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload>
          }
          createMany: {
            args: Prisma.vendedoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vendedoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload>[]
          }
          delete: {
            args: Prisma.vendedoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload>
          }
          update: {
            args: Prisma.vendedoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload>
          }
          deleteMany: {
            args: Prisma.vendedoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vendedoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.vendedoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload>[]
          }
          upsert: {
            args: Prisma.vendedoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload>
          }
          aggregate: {
            args: Prisma.VendedoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendedores>
          }
          groupBy: {
            args: Prisma.vendedoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendedoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.vendedoresCountArgs<ExtArgs>
            result: $Utils.Optional<VendedoresCountAggregateOutputType> | number
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
    coolers?: coolersOmit
    cpus?: cpusOmit
    fuentes?: fuentesOmit
    gabinetes?: gabinetesOmit
    graficas?: graficasOmit
    memorias_externas?: memorias_externasOmit
    memorias_internas?: memorias_internasOmit
    mothers?: mothersOmit
    rams?: ramsOmit
    sounds?: soundsOmit
    ususarios?: ususariosOmit
    vendedores?: vendedoresOmit
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
   * Models
   */

  /**
   * Model coolers
   */

  export type AggregateCoolers = {
    _count: CoolersCountAggregateOutputType | null
    _avg: CoolersAvgAggregateOutputType | null
    _sum: CoolersSumAggregateOutputType | null
    _min: CoolersMinAggregateOutputType | null
    _max: CoolersMaxAggregateOutputType | null
  }

  export type CoolersAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    rpm: number | null
    noise: Decimal | null
    size: number | null
  }

  export type CoolersSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    rpm: number | null
    noise: Decimal | null
    size: number | null
  }

  export type CoolersMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    rpm: number | null
    noise: Decimal | null
    color: string | null
    size: number | null
    imagen_url: string | null
  }

  export type CoolersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    rpm: number | null
    noise: Decimal | null
    color: string | null
    size: number | null
    imagen_url: string | null
  }

  export type CoolersCountAggregateOutputType = {
    id: number
    name: number
    price: number
    rpm: number
    noise: number
    color: number
    size: number
    imagen_url: number
    _all: number
  }


  export type CoolersAvgAggregateInputType = {
    id?: true
    price?: true
    rpm?: true
    noise?: true
    size?: true
  }

  export type CoolersSumAggregateInputType = {
    id?: true
    price?: true
    rpm?: true
    noise?: true
    size?: true
  }

  export type CoolersMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    rpm?: true
    noise?: true
    color?: true
    size?: true
    imagen_url?: true
  }

  export type CoolersMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    rpm?: true
    noise?: true
    color?: true
    size?: true
    imagen_url?: true
  }

  export type CoolersCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    rpm?: true
    noise?: true
    color?: true
    size?: true
    imagen_url?: true
    _all?: true
  }

  export type CoolersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which coolers to aggregate.
     */
    where?: coolersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coolers to fetch.
     */
    orderBy?: coolersOrderByWithRelationInput | coolersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: coolersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coolers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coolers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned coolers
    **/
    _count?: true | CoolersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoolersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoolersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoolersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoolersMaxAggregateInputType
  }

  export type GetCoolersAggregateType<T extends CoolersAggregateArgs> = {
        [P in keyof T & keyof AggregateCoolers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoolers[P]>
      : GetScalarType<T[P], AggregateCoolers[P]>
  }




  export type coolersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: coolersWhereInput
    orderBy?: coolersOrderByWithAggregationInput | coolersOrderByWithAggregationInput[]
    by: CoolersScalarFieldEnum[] | CoolersScalarFieldEnum
    having?: coolersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoolersCountAggregateInputType | true
    _avg?: CoolersAvgAggregateInputType
    _sum?: CoolersSumAggregateInputType
    _min?: CoolersMinAggregateInputType
    _max?: CoolersMaxAggregateInputType
  }

  export type CoolersGroupByOutputType = {
    id: number
    name: string
    price: Decimal | null
    rpm: number | null
    noise: Decimal | null
    color: string | null
    size: number | null
    imagen_url: string | null
    _count: CoolersCountAggregateOutputType | null
    _avg: CoolersAvgAggregateOutputType | null
    _sum: CoolersSumAggregateOutputType | null
    _min: CoolersMinAggregateOutputType | null
    _max: CoolersMaxAggregateOutputType | null
  }

  type GetCoolersGroupByPayload<T extends coolersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoolersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoolersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoolersGroupByOutputType[P]>
            : GetScalarType<T[P], CoolersGroupByOutputType[P]>
        }
      >
    >


  export type coolersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    rpm?: boolean
    noise?: boolean
    color?: boolean
    size?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["coolers"]>

  export type coolersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    rpm?: boolean
    noise?: boolean
    color?: boolean
    size?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["coolers"]>

  export type coolersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    rpm?: boolean
    noise?: boolean
    color?: boolean
    size?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["coolers"]>

  export type coolersSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    rpm?: boolean
    noise?: boolean
    color?: boolean
    size?: boolean
    imagen_url?: boolean
  }

  export type coolersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "rpm" | "noise" | "color" | "size" | "imagen_url", ExtArgs["result"]["coolers"]>

  export type $coolersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "coolers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: Prisma.Decimal | null
      rpm: number | null
      noise: Prisma.Decimal | null
      color: string | null
      size: number | null
      imagen_url: string | null
    }, ExtArgs["result"]["coolers"]>
    composites: {}
  }

  type coolersGetPayload<S extends boolean | null | undefined | coolersDefaultArgs> = $Result.GetResult<Prisma.$coolersPayload, S>

  type coolersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<coolersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoolersCountAggregateInputType | true
    }

  export interface coolersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['coolers'], meta: { name: 'coolers' } }
    /**
     * Find zero or one Coolers that matches the filter.
     * @param {coolersFindUniqueArgs} args - Arguments to find a Coolers
     * @example
     * // Get one Coolers
     * const coolers = await prisma.coolers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends coolersFindUniqueArgs>(args: SelectSubset<T, coolersFindUniqueArgs<ExtArgs>>): Prisma__coolersClient<$Result.GetResult<Prisma.$coolersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coolers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {coolersFindUniqueOrThrowArgs} args - Arguments to find a Coolers
     * @example
     * // Get one Coolers
     * const coolers = await prisma.coolers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends coolersFindUniqueOrThrowArgs>(args: SelectSubset<T, coolersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__coolersClient<$Result.GetResult<Prisma.$coolersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coolers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coolersFindFirstArgs} args - Arguments to find a Coolers
     * @example
     * // Get one Coolers
     * const coolers = await prisma.coolers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends coolersFindFirstArgs>(args?: SelectSubset<T, coolersFindFirstArgs<ExtArgs>>): Prisma__coolersClient<$Result.GetResult<Prisma.$coolersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coolers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coolersFindFirstOrThrowArgs} args - Arguments to find a Coolers
     * @example
     * // Get one Coolers
     * const coolers = await prisma.coolers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends coolersFindFirstOrThrowArgs>(args?: SelectSubset<T, coolersFindFirstOrThrowArgs<ExtArgs>>): Prisma__coolersClient<$Result.GetResult<Prisma.$coolersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coolers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coolersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coolers
     * const coolers = await prisma.coolers.findMany()
     * 
     * // Get first 10 Coolers
     * const coolers = await prisma.coolers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coolersWithIdOnly = await prisma.coolers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends coolersFindManyArgs>(args?: SelectSubset<T, coolersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coolersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coolers.
     * @param {coolersCreateArgs} args - Arguments to create a Coolers.
     * @example
     * // Create one Coolers
     * const Coolers = await prisma.coolers.create({
     *   data: {
     *     // ... data to create a Coolers
     *   }
     * })
     * 
     */
    create<T extends coolersCreateArgs>(args: SelectSubset<T, coolersCreateArgs<ExtArgs>>): Prisma__coolersClient<$Result.GetResult<Prisma.$coolersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coolers.
     * @param {coolersCreateManyArgs} args - Arguments to create many Coolers.
     * @example
     * // Create many Coolers
     * const coolers = await prisma.coolers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends coolersCreateManyArgs>(args?: SelectSubset<T, coolersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coolers and returns the data saved in the database.
     * @param {coolersCreateManyAndReturnArgs} args - Arguments to create many Coolers.
     * @example
     * // Create many Coolers
     * const coolers = await prisma.coolers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coolers and only return the `id`
     * const coolersWithIdOnly = await prisma.coolers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends coolersCreateManyAndReturnArgs>(args?: SelectSubset<T, coolersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coolersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Coolers.
     * @param {coolersDeleteArgs} args - Arguments to delete one Coolers.
     * @example
     * // Delete one Coolers
     * const Coolers = await prisma.coolers.delete({
     *   where: {
     *     // ... filter to delete one Coolers
     *   }
     * })
     * 
     */
    delete<T extends coolersDeleteArgs>(args: SelectSubset<T, coolersDeleteArgs<ExtArgs>>): Prisma__coolersClient<$Result.GetResult<Prisma.$coolersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coolers.
     * @param {coolersUpdateArgs} args - Arguments to update one Coolers.
     * @example
     * // Update one Coolers
     * const coolers = await prisma.coolers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends coolersUpdateArgs>(args: SelectSubset<T, coolersUpdateArgs<ExtArgs>>): Prisma__coolersClient<$Result.GetResult<Prisma.$coolersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coolers.
     * @param {coolersDeleteManyArgs} args - Arguments to filter Coolers to delete.
     * @example
     * // Delete a few Coolers
     * const { count } = await prisma.coolers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends coolersDeleteManyArgs>(args?: SelectSubset<T, coolersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coolers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coolersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coolers
     * const coolers = await prisma.coolers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends coolersUpdateManyArgs>(args: SelectSubset<T, coolersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coolers and returns the data updated in the database.
     * @param {coolersUpdateManyAndReturnArgs} args - Arguments to update many Coolers.
     * @example
     * // Update many Coolers
     * const coolers = await prisma.coolers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Coolers and only return the `id`
     * const coolersWithIdOnly = await prisma.coolers.updateManyAndReturn({
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
    updateManyAndReturn<T extends coolersUpdateManyAndReturnArgs>(args: SelectSubset<T, coolersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coolersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Coolers.
     * @param {coolersUpsertArgs} args - Arguments to update or create a Coolers.
     * @example
     * // Update or create a Coolers
     * const coolers = await prisma.coolers.upsert({
     *   create: {
     *     // ... data to create a Coolers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coolers we want to update
     *   }
     * })
     */
    upsert<T extends coolersUpsertArgs>(args: SelectSubset<T, coolersUpsertArgs<ExtArgs>>): Prisma__coolersClient<$Result.GetResult<Prisma.$coolersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coolers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coolersCountArgs} args - Arguments to filter Coolers to count.
     * @example
     * // Count the number of Coolers
     * const count = await prisma.coolers.count({
     *   where: {
     *     // ... the filter for the Coolers we want to count
     *   }
     * })
    **/
    count<T extends coolersCountArgs>(
      args?: Subset<T, coolersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoolersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coolers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoolersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoolersAggregateArgs>(args: Subset<T, CoolersAggregateArgs>): Prisma.PrismaPromise<GetCoolersAggregateType<T>>

    /**
     * Group by Coolers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coolersGroupByArgs} args - Group by arguments.
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
      T extends coolersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: coolersGroupByArgs['orderBy'] }
        : { orderBy?: coolersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, coolersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoolersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the coolers model
   */
  readonly fields: coolersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for coolers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__coolersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the coolers model
   */
  interface coolersFieldRefs {
    readonly id: FieldRef<"coolers", 'Int'>
    readonly name: FieldRef<"coolers", 'String'>
    readonly price: FieldRef<"coolers", 'Decimal'>
    readonly rpm: FieldRef<"coolers", 'Int'>
    readonly noise: FieldRef<"coolers", 'Decimal'>
    readonly color: FieldRef<"coolers", 'String'>
    readonly size: FieldRef<"coolers", 'Int'>
    readonly imagen_url: FieldRef<"coolers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * coolers findUnique
   */
  export type coolersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coolers
     */
    select?: coolersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coolers
     */
    omit?: coolersOmit<ExtArgs> | null
    /**
     * Filter, which coolers to fetch.
     */
    where: coolersWhereUniqueInput
  }

  /**
   * coolers findUniqueOrThrow
   */
  export type coolersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coolers
     */
    select?: coolersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coolers
     */
    omit?: coolersOmit<ExtArgs> | null
    /**
     * Filter, which coolers to fetch.
     */
    where: coolersWhereUniqueInput
  }

  /**
   * coolers findFirst
   */
  export type coolersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coolers
     */
    select?: coolersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coolers
     */
    omit?: coolersOmit<ExtArgs> | null
    /**
     * Filter, which coolers to fetch.
     */
    where?: coolersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coolers to fetch.
     */
    orderBy?: coolersOrderByWithRelationInput | coolersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for coolers.
     */
    cursor?: coolersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coolers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coolers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of coolers.
     */
    distinct?: CoolersScalarFieldEnum | CoolersScalarFieldEnum[]
  }

  /**
   * coolers findFirstOrThrow
   */
  export type coolersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coolers
     */
    select?: coolersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coolers
     */
    omit?: coolersOmit<ExtArgs> | null
    /**
     * Filter, which coolers to fetch.
     */
    where?: coolersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coolers to fetch.
     */
    orderBy?: coolersOrderByWithRelationInput | coolersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for coolers.
     */
    cursor?: coolersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coolers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coolers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of coolers.
     */
    distinct?: CoolersScalarFieldEnum | CoolersScalarFieldEnum[]
  }

  /**
   * coolers findMany
   */
  export type coolersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coolers
     */
    select?: coolersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coolers
     */
    omit?: coolersOmit<ExtArgs> | null
    /**
     * Filter, which coolers to fetch.
     */
    where?: coolersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coolers to fetch.
     */
    orderBy?: coolersOrderByWithRelationInput | coolersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing coolers.
     */
    cursor?: coolersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coolers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coolers.
     */
    skip?: number
    distinct?: CoolersScalarFieldEnum | CoolersScalarFieldEnum[]
  }

  /**
   * coolers create
   */
  export type coolersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coolers
     */
    select?: coolersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coolers
     */
    omit?: coolersOmit<ExtArgs> | null
    /**
     * The data needed to create a coolers.
     */
    data: XOR<coolersCreateInput, coolersUncheckedCreateInput>
  }

  /**
   * coolers createMany
   */
  export type coolersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many coolers.
     */
    data: coolersCreateManyInput | coolersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * coolers createManyAndReturn
   */
  export type coolersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coolers
     */
    select?: coolersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the coolers
     */
    omit?: coolersOmit<ExtArgs> | null
    /**
     * The data used to create many coolers.
     */
    data: coolersCreateManyInput | coolersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * coolers update
   */
  export type coolersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coolers
     */
    select?: coolersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coolers
     */
    omit?: coolersOmit<ExtArgs> | null
    /**
     * The data needed to update a coolers.
     */
    data: XOR<coolersUpdateInput, coolersUncheckedUpdateInput>
    /**
     * Choose, which coolers to update.
     */
    where: coolersWhereUniqueInput
  }

  /**
   * coolers updateMany
   */
  export type coolersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update coolers.
     */
    data: XOR<coolersUpdateManyMutationInput, coolersUncheckedUpdateManyInput>
    /**
     * Filter which coolers to update
     */
    where?: coolersWhereInput
    /**
     * Limit how many coolers to update.
     */
    limit?: number
  }

  /**
   * coolers updateManyAndReturn
   */
  export type coolersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coolers
     */
    select?: coolersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the coolers
     */
    omit?: coolersOmit<ExtArgs> | null
    /**
     * The data used to update coolers.
     */
    data: XOR<coolersUpdateManyMutationInput, coolersUncheckedUpdateManyInput>
    /**
     * Filter which coolers to update
     */
    where?: coolersWhereInput
    /**
     * Limit how many coolers to update.
     */
    limit?: number
  }

  /**
   * coolers upsert
   */
  export type coolersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coolers
     */
    select?: coolersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coolers
     */
    omit?: coolersOmit<ExtArgs> | null
    /**
     * The filter to search for the coolers to update in case it exists.
     */
    where: coolersWhereUniqueInput
    /**
     * In case the coolers found by the `where` argument doesn't exist, create a new coolers with this data.
     */
    create: XOR<coolersCreateInput, coolersUncheckedCreateInput>
    /**
     * In case the coolers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<coolersUpdateInput, coolersUncheckedUpdateInput>
  }

  /**
   * coolers delete
   */
  export type coolersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coolers
     */
    select?: coolersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coolers
     */
    omit?: coolersOmit<ExtArgs> | null
    /**
     * Filter which coolers to delete.
     */
    where: coolersWhereUniqueInput
  }

  /**
   * coolers deleteMany
   */
  export type coolersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which coolers to delete
     */
    where?: coolersWhereInput
    /**
     * Limit how many coolers to delete.
     */
    limit?: number
  }

  /**
   * coolers without action
   */
  export type coolersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coolers
     */
    select?: coolersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coolers
     */
    omit?: coolersOmit<ExtArgs> | null
  }


  /**
   * Model cpus
   */

  export type AggregateCpus = {
    _count: CpusCountAggregateOutputType | null
    _avg: CpusAvgAggregateOutputType | null
    _sum: CpusSumAggregateOutputType | null
    _min: CpusMinAggregateOutputType | null
    _max: CpusMaxAggregateOutputType | null
  }

  export type CpusAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    core_count: number | null
    core_clock: Decimal | null
    boost_clock: Decimal | null
    tdp: number | null
  }

  export type CpusSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    core_count: number | null
    core_clock: Decimal | null
    boost_clock: Decimal | null
    tdp: number | null
  }

  export type CpusMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    core_count: number | null
    core_clock: Decimal | null
    boost_clock: Decimal | null
    tdp: number | null
    graphics: string | null
    smt: boolean | null
    imagen_url: string | null
  }

  export type CpusMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    core_count: number | null
    core_clock: Decimal | null
    boost_clock: Decimal | null
    tdp: number | null
    graphics: string | null
    smt: boolean | null
    imagen_url: string | null
  }

  export type CpusCountAggregateOutputType = {
    id: number
    name: number
    price: number
    core_count: number
    core_clock: number
    boost_clock: number
    tdp: number
    graphics: number
    smt: number
    imagen_url: number
    _all: number
  }


  export type CpusAvgAggregateInputType = {
    id?: true
    price?: true
    core_count?: true
    core_clock?: true
    boost_clock?: true
    tdp?: true
  }

  export type CpusSumAggregateInputType = {
    id?: true
    price?: true
    core_count?: true
    core_clock?: true
    boost_clock?: true
    tdp?: true
  }

  export type CpusMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    core_count?: true
    core_clock?: true
    boost_clock?: true
    tdp?: true
    graphics?: true
    smt?: true
    imagen_url?: true
  }

  export type CpusMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    core_count?: true
    core_clock?: true
    boost_clock?: true
    tdp?: true
    graphics?: true
    smt?: true
    imagen_url?: true
  }

  export type CpusCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    core_count?: true
    core_clock?: true
    boost_clock?: true
    tdp?: true
    graphics?: true
    smt?: true
    imagen_url?: true
    _all?: true
  }

  export type CpusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cpus to aggregate.
     */
    where?: cpusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cpuses to fetch.
     */
    orderBy?: cpusOrderByWithRelationInput | cpusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cpusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cpuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cpuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cpuses
    **/
    _count?: true | CpusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CpusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CpusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CpusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CpusMaxAggregateInputType
  }

  export type GetCpusAggregateType<T extends CpusAggregateArgs> = {
        [P in keyof T & keyof AggregateCpus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCpus[P]>
      : GetScalarType<T[P], AggregateCpus[P]>
  }




  export type cpusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cpusWhereInput
    orderBy?: cpusOrderByWithAggregationInput | cpusOrderByWithAggregationInput[]
    by: CpusScalarFieldEnum[] | CpusScalarFieldEnum
    having?: cpusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CpusCountAggregateInputType | true
    _avg?: CpusAvgAggregateInputType
    _sum?: CpusSumAggregateInputType
    _min?: CpusMinAggregateInputType
    _max?: CpusMaxAggregateInputType
  }

  export type CpusGroupByOutputType = {
    id: number
    name: string
    price: Decimal | null
    core_count: number
    core_clock: Decimal
    boost_clock: Decimal | null
    tdp: number
    graphics: string | null
    smt: boolean
    imagen_url: string | null
    _count: CpusCountAggregateOutputType | null
    _avg: CpusAvgAggregateOutputType | null
    _sum: CpusSumAggregateOutputType | null
    _min: CpusMinAggregateOutputType | null
    _max: CpusMaxAggregateOutputType | null
  }

  type GetCpusGroupByPayload<T extends cpusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CpusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CpusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CpusGroupByOutputType[P]>
            : GetScalarType<T[P], CpusGroupByOutputType[P]>
        }
      >
    >


  export type cpusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    core_count?: boolean
    core_clock?: boolean
    boost_clock?: boolean
    tdp?: boolean
    graphics?: boolean
    smt?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["cpus"]>

  export type cpusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    core_count?: boolean
    core_clock?: boolean
    boost_clock?: boolean
    tdp?: boolean
    graphics?: boolean
    smt?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["cpus"]>

  export type cpusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    core_count?: boolean
    core_clock?: boolean
    boost_clock?: boolean
    tdp?: boolean
    graphics?: boolean
    smt?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["cpus"]>

  export type cpusSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    core_count?: boolean
    core_clock?: boolean
    boost_clock?: boolean
    tdp?: boolean
    graphics?: boolean
    smt?: boolean
    imagen_url?: boolean
  }

  export type cpusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "core_count" | "core_clock" | "boost_clock" | "tdp" | "graphics" | "smt" | "imagen_url", ExtArgs["result"]["cpus"]>

  export type $cpusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cpus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: Prisma.Decimal | null
      core_count: number
      core_clock: Prisma.Decimal
      boost_clock: Prisma.Decimal | null
      tdp: number
      graphics: string | null
      smt: boolean
      imagen_url: string | null
    }, ExtArgs["result"]["cpus"]>
    composites: {}
  }

  type cpusGetPayload<S extends boolean | null | undefined | cpusDefaultArgs> = $Result.GetResult<Prisma.$cpusPayload, S>

  type cpusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cpusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CpusCountAggregateInputType | true
    }

  export interface cpusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cpus'], meta: { name: 'cpus' } }
    /**
     * Find zero or one Cpus that matches the filter.
     * @param {cpusFindUniqueArgs} args - Arguments to find a Cpus
     * @example
     * // Get one Cpus
     * const cpus = await prisma.cpus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cpusFindUniqueArgs>(args: SelectSubset<T, cpusFindUniqueArgs<ExtArgs>>): Prisma__cpusClient<$Result.GetResult<Prisma.$cpusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cpus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cpusFindUniqueOrThrowArgs} args - Arguments to find a Cpus
     * @example
     * // Get one Cpus
     * const cpus = await prisma.cpus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cpusFindUniqueOrThrowArgs>(args: SelectSubset<T, cpusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cpusClient<$Result.GetResult<Prisma.$cpusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cpus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cpusFindFirstArgs} args - Arguments to find a Cpus
     * @example
     * // Get one Cpus
     * const cpus = await prisma.cpus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cpusFindFirstArgs>(args?: SelectSubset<T, cpusFindFirstArgs<ExtArgs>>): Prisma__cpusClient<$Result.GetResult<Prisma.$cpusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cpus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cpusFindFirstOrThrowArgs} args - Arguments to find a Cpus
     * @example
     * // Get one Cpus
     * const cpus = await prisma.cpus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cpusFindFirstOrThrowArgs>(args?: SelectSubset<T, cpusFindFirstOrThrowArgs<ExtArgs>>): Prisma__cpusClient<$Result.GetResult<Prisma.$cpusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cpuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cpusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cpuses
     * const cpuses = await prisma.cpus.findMany()
     * 
     * // Get first 10 Cpuses
     * const cpuses = await prisma.cpus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cpusWithIdOnly = await prisma.cpus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cpusFindManyArgs>(args?: SelectSubset<T, cpusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cpusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cpus.
     * @param {cpusCreateArgs} args - Arguments to create a Cpus.
     * @example
     * // Create one Cpus
     * const Cpus = await prisma.cpus.create({
     *   data: {
     *     // ... data to create a Cpus
     *   }
     * })
     * 
     */
    create<T extends cpusCreateArgs>(args: SelectSubset<T, cpusCreateArgs<ExtArgs>>): Prisma__cpusClient<$Result.GetResult<Prisma.$cpusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cpuses.
     * @param {cpusCreateManyArgs} args - Arguments to create many Cpuses.
     * @example
     * // Create many Cpuses
     * const cpus = await prisma.cpus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cpusCreateManyArgs>(args?: SelectSubset<T, cpusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cpuses and returns the data saved in the database.
     * @param {cpusCreateManyAndReturnArgs} args - Arguments to create many Cpuses.
     * @example
     * // Create many Cpuses
     * const cpus = await prisma.cpus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cpuses and only return the `id`
     * const cpusWithIdOnly = await prisma.cpus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cpusCreateManyAndReturnArgs>(args?: SelectSubset<T, cpusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cpusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cpus.
     * @param {cpusDeleteArgs} args - Arguments to delete one Cpus.
     * @example
     * // Delete one Cpus
     * const Cpus = await prisma.cpus.delete({
     *   where: {
     *     // ... filter to delete one Cpus
     *   }
     * })
     * 
     */
    delete<T extends cpusDeleteArgs>(args: SelectSubset<T, cpusDeleteArgs<ExtArgs>>): Prisma__cpusClient<$Result.GetResult<Prisma.$cpusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cpus.
     * @param {cpusUpdateArgs} args - Arguments to update one Cpus.
     * @example
     * // Update one Cpus
     * const cpus = await prisma.cpus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cpusUpdateArgs>(args: SelectSubset<T, cpusUpdateArgs<ExtArgs>>): Prisma__cpusClient<$Result.GetResult<Prisma.$cpusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cpuses.
     * @param {cpusDeleteManyArgs} args - Arguments to filter Cpuses to delete.
     * @example
     * // Delete a few Cpuses
     * const { count } = await prisma.cpus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cpusDeleteManyArgs>(args?: SelectSubset<T, cpusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cpuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cpusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cpuses
     * const cpus = await prisma.cpus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cpusUpdateManyArgs>(args: SelectSubset<T, cpusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cpuses and returns the data updated in the database.
     * @param {cpusUpdateManyAndReturnArgs} args - Arguments to update many Cpuses.
     * @example
     * // Update many Cpuses
     * const cpus = await prisma.cpus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cpuses and only return the `id`
     * const cpusWithIdOnly = await prisma.cpus.updateManyAndReturn({
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
    updateManyAndReturn<T extends cpusUpdateManyAndReturnArgs>(args: SelectSubset<T, cpusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cpusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cpus.
     * @param {cpusUpsertArgs} args - Arguments to update or create a Cpus.
     * @example
     * // Update or create a Cpus
     * const cpus = await prisma.cpus.upsert({
     *   create: {
     *     // ... data to create a Cpus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cpus we want to update
     *   }
     * })
     */
    upsert<T extends cpusUpsertArgs>(args: SelectSubset<T, cpusUpsertArgs<ExtArgs>>): Prisma__cpusClient<$Result.GetResult<Prisma.$cpusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cpuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cpusCountArgs} args - Arguments to filter Cpuses to count.
     * @example
     * // Count the number of Cpuses
     * const count = await prisma.cpus.count({
     *   where: {
     *     // ... the filter for the Cpuses we want to count
     *   }
     * })
    **/
    count<T extends cpusCountArgs>(
      args?: Subset<T, cpusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CpusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cpus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CpusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CpusAggregateArgs>(args: Subset<T, CpusAggregateArgs>): Prisma.PrismaPromise<GetCpusAggregateType<T>>

    /**
     * Group by Cpus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cpusGroupByArgs} args - Group by arguments.
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
      T extends cpusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cpusGroupByArgs['orderBy'] }
        : { orderBy?: cpusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cpusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCpusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cpus model
   */
  readonly fields: cpusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cpus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cpusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the cpus model
   */
  interface cpusFieldRefs {
    readonly id: FieldRef<"cpus", 'Int'>
    readonly name: FieldRef<"cpus", 'String'>
    readonly price: FieldRef<"cpus", 'Decimal'>
    readonly core_count: FieldRef<"cpus", 'Int'>
    readonly core_clock: FieldRef<"cpus", 'Decimal'>
    readonly boost_clock: FieldRef<"cpus", 'Decimal'>
    readonly tdp: FieldRef<"cpus", 'Int'>
    readonly graphics: FieldRef<"cpus", 'String'>
    readonly smt: FieldRef<"cpus", 'Boolean'>
    readonly imagen_url: FieldRef<"cpus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cpus findUnique
   */
  export type cpusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpus
     */
    select?: cpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cpus
     */
    omit?: cpusOmit<ExtArgs> | null
    /**
     * Filter, which cpus to fetch.
     */
    where: cpusWhereUniqueInput
  }

  /**
   * cpus findUniqueOrThrow
   */
  export type cpusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpus
     */
    select?: cpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cpus
     */
    omit?: cpusOmit<ExtArgs> | null
    /**
     * Filter, which cpus to fetch.
     */
    where: cpusWhereUniqueInput
  }

  /**
   * cpus findFirst
   */
  export type cpusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpus
     */
    select?: cpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cpus
     */
    omit?: cpusOmit<ExtArgs> | null
    /**
     * Filter, which cpus to fetch.
     */
    where?: cpusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cpuses to fetch.
     */
    orderBy?: cpusOrderByWithRelationInput | cpusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cpuses.
     */
    cursor?: cpusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cpuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cpuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cpuses.
     */
    distinct?: CpusScalarFieldEnum | CpusScalarFieldEnum[]
  }

  /**
   * cpus findFirstOrThrow
   */
  export type cpusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpus
     */
    select?: cpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cpus
     */
    omit?: cpusOmit<ExtArgs> | null
    /**
     * Filter, which cpus to fetch.
     */
    where?: cpusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cpuses to fetch.
     */
    orderBy?: cpusOrderByWithRelationInput | cpusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cpuses.
     */
    cursor?: cpusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cpuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cpuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cpuses.
     */
    distinct?: CpusScalarFieldEnum | CpusScalarFieldEnum[]
  }

  /**
   * cpus findMany
   */
  export type cpusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpus
     */
    select?: cpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cpus
     */
    omit?: cpusOmit<ExtArgs> | null
    /**
     * Filter, which cpuses to fetch.
     */
    where?: cpusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cpuses to fetch.
     */
    orderBy?: cpusOrderByWithRelationInput | cpusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cpuses.
     */
    cursor?: cpusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cpuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cpuses.
     */
    skip?: number
    distinct?: CpusScalarFieldEnum | CpusScalarFieldEnum[]
  }

  /**
   * cpus create
   */
  export type cpusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpus
     */
    select?: cpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cpus
     */
    omit?: cpusOmit<ExtArgs> | null
    /**
     * The data needed to create a cpus.
     */
    data: XOR<cpusCreateInput, cpusUncheckedCreateInput>
  }

  /**
   * cpus createMany
   */
  export type cpusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cpuses.
     */
    data: cpusCreateManyInput | cpusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cpus createManyAndReturn
   */
  export type cpusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpus
     */
    select?: cpusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cpus
     */
    omit?: cpusOmit<ExtArgs> | null
    /**
     * The data used to create many cpuses.
     */
    data: cpusCreateManyInput | cpusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cpus update
   */
  export type cpusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpus
     */
    select?: cpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cpus
     */
    omit?: cpusOmit<ExtArgs> | null
    /**
     * The data needed to update a cpus.
     */
    data: XOR<cpusUpdateInput, cpusUncheckedUpdateInput>
    /**
     * Choose, which cpus to update.
     */
    where: cpusWhereUniqueInput
  }

  /**
   * cpus updateMany
   */
  export type cpusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cpuses.
     */
    data: XOR<cpusUpdateManyMutationInput, cpusUncheckedUpdateManyInput>
    /**
     * Filter which cpuses to update
     */
    where?: cpusWhereInput
    /**
     * Limit how many cpuses to update.
     */
    limit?: number
  }

  /**
   * cpus updateManyAndReturn
   */
  export type cpusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpus
     */
    select?: cpusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cpus
     */
    omit?: cpusOmit<ExtArgs> | null
    /**
     * The data used to update cpuses.
     */
    data: XOR<cpusUpdateManyMutationInput, cpusUncheckedUpdateManyInput>
    /**
     * Filter which cpuses to update
     */
    where?: cpusWhereInput
    /**
     * Limit how many cpuses to update.
     */
    limit?: number
  }

  /**
   * cpus upsert
   */
  export type cpusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpus
     */
    select?: cpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cpus
     */
    omit?: cpusOmit<ExtArgs> | null
    /**
     * The filter to search for the cpus to update in case it exists.
     */
    where: cpusWhereUniqueInput
    /**
     * In case the cpus found by the `where` argument doesn't exist, create a new cpus with this data.
     */
    create: XOR<cpusCreateInput, cpusUncheckedCreateInput>
    /**
     * In case the cpus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cpusUpdateInput, cpusUncheckedUpdateInput>
  }

  /**
   * cpus delete
   */
  export type cpusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpus
     */
    select?: cpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cpus
     */
    omit?: cpusOmit<ExtArgs> | null
    /**
     * Filter which cpus to delete.
     */
    where: cpusWhereUniqueInput
  }

  /**
   * cpus deleteMany
   */
  export type cpusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cpuses to delete
     */
    where?: cpusWhereInput
    /**
     * Limit how many cpuses to delete.
     */
    limit?: number
  }

  /**
   * cpus without action
   */
  export type cpusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cpus
     */
    select?: cpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cpus
     */
    omit?: cpusOmit<ExtArgs> | null
  }


  /**
   * Model fuentes
   */

  export type AggregateFuentes = {
    _count: FuentesCountAggregateOutputType | null
    _avg: FuentesAvgAggregateOutputType | null
    _sum: FuentesSumAggregateOutputType | null
    _min: FuentesMinAggregateOutputType | null
    _max: FuentesMaxAggregateOutputType | null
  }

  export type FuentesAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    wattage: number | null
  }

  export type FuentesSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    wattage: number | null
  }

  export type FuentesMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    type: string | null
    efficiency: string | null
    wattage: number | null
    modular: string | null
    color: string | null
    imagen_url: string | null
  }

  export type FuentesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    type: string | null
    efficiency: string | null
    wattage: number | null
    modular: string | null
    color: string | null
    imagen_url: string | null
  }

  export type FuentesCountAggregateOutputType = {
    id: number
    name: number
    price: number
    type: number
    efficiency: number
    wattage: number
    modular: number
    color: number
    imagen_url: number
    _all: number
  }


  export type FuentesAvgAggregateInputType = {
    id?: true
    price?: true
    wattage?: true
  }

  export type FuentesSumAggregateInputType = {
    id?: true
    price?: true
    wattage?: true
  }

  export type FuentesMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    type?: true
    efficiency?: true
    wattage?: true
    modular?: true
    color?: true
    imagen_url?: true
  }

  export type FuentesMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    type?: true
    efficiency?: true
    wattage?: true
    modular?: true
    color?: true
    imagen_url?: true
  }

  export type FuentesCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    type?: true
    efficiency?: true
    wattage?: true
    modular?: true
    color?: true
    imagen_url?: true
    _all?: true
  }

  export type FuentesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fuentes to aggregate.
     */
    where?: fuentesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fuentes to fetch.
     */
    orderBy?: fuentesOrderByWithRelationInput | fuentesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fuentesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fuentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fuentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fuentes
    **/
    _count?: true | FuentesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuentesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuentesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuentesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuentesMaxAggregateInputType
  }

  export type GetFuentesAggregateType<T extends FuentesAggregateArgs> = {
        [P in keyof T & keyof AggregateFuentes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuentes[P]>
      : GetScalarType<T[P], AggregateFuentes[P]>
  }




  export type fuentesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fuentesWhereInput
    orderBy?: fuentesOrderByWithAggregationInput | fuentesOrderByWithAggregationInput[]
    by: FuentesScalarFieldEnum[] | FuentesScalarFieldEnum
    having?: fuentesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuentesCountAggregateInputType | true
    _avg?: FuentesAvgAggregateInputType
    _sum?: FuentesSumAggregateInputType
    _min?: FuentesMinAggregateInputType
    _max?: FuentesMaxAggregateInputType
  }

  export type FuentesGroupByOutputType = {
    id: number
    name: string
    price: Decimal | null
    type: string | null
    efficiency: string | null
    wattage: number | null
    modular: string | null
    color: string | null
    imagen_url: string | null
    _count: FuentesCountAggregateOutputType | null
    _avg: FuentesAvgAggregateOutputType | null
    _sum: FuentesSumAggregateOutputType | null
    _min: FuentesMinAggregateOutputType | null
    _max: FuentesMaxAggregateOutputType | null
  }

  type GetFuentesGroupByPayload<T extends fuentesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuentesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuentesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuentesGroupByOutputType[P]>
            : GetScalarType<T[P], FuentesGroupByOutputType[P]>
        }
      >
    >


  export type fuentesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    type?: boolean
    efficiency?: boolean
    wattage?: boolean
    modular?: boolean
    color?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["fuentes"]>

  export type fuentesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    type?: boolean
    efficiency?: boolean
    wattage?: boolean
    modular?: boolean
    color?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["fuentes"]>

  export type fuentesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    type?: boolean
    efficiency?: boolean
    wattage?: boolean
    modular?: boolean
    color?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["fuentes"]>

  export type fuentesSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    type?: boolean
    efficiency?: boolean
    wattage?: boolean
    modular?: boolean
    color?: boolean
    imagen_url?: boolean
  }

  export type fuentesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "type" | "efficiency" | "wattage" | "modular" | "color" | "imagen_url", ExtArgs["result"]["fuentes"]>

  export type $fuentesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fuentes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: Prisma.Decimal | null
      type: string | null
      efficiency: string | null
      wattage: number | null
      modular: string | null
      color: string | null
      imagen_url: string | null
    }, ExtArgs["result"]["fuentes"]>
    composites: {}
  }

  type fuentesGetPayload<S extends boolean | null | undefined | fuentesDefaultArgs> = $Result.GetResult<Prisma.$fuentesPayload, S>

  type fuentesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fuentesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuentesCountAggregateInputType | true
    }

  export interface fuentesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fuentes'], meta: { name: 'fuentes' } }
    /**
     * Find zero or one Fuentes that matches the filter.
     * @param {fuentesFindUniqueArgs} args - Arguments to find a Fuentes
     * @example
     * // Get one Fuentes
     * const fuentes = await prisma.fuentes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fuentesFindUniqueArgs>(args: SelectSubset<T, fuentesFindUniqueArgs<ExtArgs>>): Prisma__fuentesClient<$Result.GetResult<Prisma.$fuentesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fuentes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fuentesFindUniqueOrThrowArgs} args - Arguments to find a Fuentes
     * @example
     * // Get one Fuentes
     * const fuentes = await prisma.fuentes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fuentesFindUniqueOrThrowArgs>(args: SelectSubset<T, fuentesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fuentesClient<$Result.GetResult<Prisma.$fuentesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fuentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fuentesFindFirstArgs} args - Arguments to find a Fuentes
     * @example
     * // Get one Fuentes
     * const fuentes = await prisma.fuentes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fuentesFindFirstArgs>(args?: SelectSubset<T, fuentesFindFirstArgs<ExtArgs>>): Prisma__fuentesClient<$Result.GetResult<Prisma.$fuentesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fuentes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fuentesFindFirstOrThrowArgs} args - Arguments to find a Fuentes
     * @example
     * // Get one Fuentes
     * const fuentes = await prisma.fuentes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fuentesFindFirstOrThrowArgs>(args?: SelectSubset<T, fuentesFindFirstOrThrowArgs<ExtArgs>>): Prisma__fuentesClient<$Result.GetResult<Prisma.$fuentesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fuentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fuentesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fuentes
     * const fuentes = await prisma.fuentes.findMany()
     * 
     * // Get first 10 Fuentes
     * const fuentes = await prisma.fuentes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fuentesWithIdOnly = await prisma.fuentes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends fuentesFindManyArgs>(args?: SelectSubset<T, fuentesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fuentesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fuentes.
     * @param {fuentesCreateArgs} args - Arguments to create a Fuentes.
     * @example
     * // Create one Fuentes
     * const Fuentes = await prisma.fuentes.create({
     *   data: {
     *     // ... data to create a Fuentes
     *   }
     * })
     * 
     */
    create<T extends fuentesCreateArgs>(args: SelectSubset<T, fuentesCreateArgs<ExtArgs>>): Prisma__fuentesClient<$Result.GetResult<Prisma.$fuentesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fuentes.
     * @param {fuentesCreateManyArgs} args - Arguments to create many Fuentes.
     * @example
     * // Create many Fuentes
     * const fuentes = await prisma.fuentes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fuentesCreateManyArgs>(args?: SelectSubset<T, fuentesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fuentes and returns the data saved in the database.
     * @param {fuentesCreateManyAndReturnArgs} args - Arguments to create many Fuentes.
     * @example
     * // Create many Fuentes
     * const fuentes = await prisma.fuentes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fuentes and only return the `id`
     * const fuentesWithIdOnly = await prisma.fuentes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends fuentesCreateManyAndReturnArgs>(args?: SelectSubset<T, fuentesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fuentesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fuentes.
     * @param {fuentesDeleteArgs} args - Arguments to delete one Fuentes.
     * @example
     * // Delete one Fuentes
     * const Fuentes = await prisma.fuentes.delete({
     *   where: {
     *     // ... filter to delete one Fuentes
     *   }
     * })
     * 
     */
    delete<T extends fuentesDeleteArgs>(args: SelectSubset<T, fuentesDeleteArgs<ExtArgs>>): Prisma__fuentesClient<$Result.GetResult<Prisma.$fuentesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fuentes.
     * @param {fuentesUpdateArgs} args - Arguments to update one Fuentes.
     * @example
     * // Update one Fuentes
     * const fuentes = await prisma.fuentes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fuentesUpdateArgs>(args: SelectSubset<T, fuentesUpdateArgs<ExtArgs>>): Prisma__fuentesClient<$Result.GetResult<Prisma.$fuentesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fuentes.
     * @param {fuentesDeleteManyArgs} args - Arguments to filter Fuentes to delete.
     * @example
     * // Delete a few Fuentes
     * const { count } = await prisma.fuentes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fuentesDeleteManyArgs>(args?: SelectSubset<T, fuentesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fuentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fuentesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fuentes
     * const fuentes = await prisma.fuentes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fuentesUpdateManyArgs>(args: SelectSubset<T, fuentesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fuentes and returns the data updated in the database.
     * @param {fuentesUpdateManyAndReturnArgs} args - Arguments to update many Fuentes.
     * @example
     * // Update many Fuentes
     * const fuentes = await prisma.fuentes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fuentes and only return the `id`
     * const fuentesWithIdOnly = await prisma.fuentes.updateManyAndReturn({
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
    updateManyAndReturn<T extends fuentesUpdateManyAndReturnArgs>(args: SelectSubset<T, fuentesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fuentesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fuentes.
     * @param {fuentesUpsertArgs} args - Arguments to update or create a Fuentes.
     * @example
     * // Update or create a Fuentes
     * const fuentes = await prisma.fuentes.upsert({
     *   create: {
     *     // ... data to create a Fuentes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fuentes we want to update
     *   }
     * })
     */
    upsert<T extends fuentesUpsertArgs>(args: SelectSubset<T, fuentesUpsertArgs<ExtArgs>>): Prisma__fuentesClient<$Result.GetResult<Prisma.$fuentesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fuentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fuentesCountArgs} args - Arguments to filter Fuentes to count.
     * @example
     * // Count the number of Fuentes
     * const count = await prisma.fuentes.count({
     *   where: {
     *     // ... the filter for the Fuentes we want to count
     *   }
     * })
    **/
    count<T extends fuentesCountArgs>(
      args?: Subset<T, fuentesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuentesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fuentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuentesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuentesAggregateArgs>(args: Subset<T, FuentesAggregateArgs>): Prisma.PrismaPromise<GetFuentesAggregateType<T>>

    /**
     * Group by Fuentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fuentesGroupByArgs} args - Group by arguments.
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
      T extends fuentesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fuentesGroupByArgs['orderBy'] }
        : { orderBy?: fuentesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, fuentesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuentesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fuentes model
   */
  readonly fields: fuentesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fuentes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fuentesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the fuentes model
   */
  interface fuentesFieldRefs {
    readonly id: FieldRef<"fuentes", 'Int'>
    readonly name: FieldRef<"fuentes", 'String'>
    readonly price: FieldRef<"fuentes", 'Decimal'>
    readonly type: FieldRef<"fuentes", 'String'>
    readonly efficiency: FieldRef<"fuentes", 'String'>
    readonly wattage: FieldRef<"fuentes", 'Int'>
    readonly modular: FieldRef<"fuentes", 'String'>
    readonly color: FieldRef<"fuentes", 'String'>
    readonly imagen_url: FieldRef<"fuentes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * fuentes findUnique
   */
  export type fuentesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuentes
     */
    select?: fuentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuentes
     */
    omit?: fuentesOmit<ExtArgs> | null
    /**
     * Filter, which fuentes to fetch.
     */
    where: fuentesWhereUniqueInput
  }

  /**
   * fuentes findUniqueOrThrow
   */
  export type fuentesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuentes
     */
    select?: fuentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuentes
     */
    omit?: fuentesOmit<ExtArgs> | null
    /**
     * Filter, which fuentes to fetch.
     */
    where: fuentesWhereUniqueInput
  }

  /**
   * fuentes findFirst
   */
  export type fuentesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuentes
     */
    select?: fuentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuentes
     */
    omit?: fuentesOmit<ExtArgs> | null
    /**
     * Filter, which fuentes to fetch.
     */
    where?: fuentesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fuentes to fetch.
     */
    orderBy?: fuentesOrderByWithRelationInput | fuentesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fuentes.
     */
    cursor?: fuentesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fuentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fuentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fuentes.
     */
    distinct?: FuentesScalarFieldEnum | FuentesScalarFieldEnum[]
  }

  /**
   * fuentes findFirstOrThrow
   */
  export type fuentesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuentes
     */
    select?: fuentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuentes
     */
    omit?: fuentesOmit<ExtArgs> | null
    /**
     * Filter, which fuentes to fetch.
     */
    where?: fuentesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fuentes to fetch.
     */
    orderBy?: fuentesOrderByWithRelationInput | fuentesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fuentes.
     */
    cursor?: fuentesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fuentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fuentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fuentes.
     */
    distinct?: FuentesScalarFieldEnum | FuentesScalarFieldEnum[]
  }

  /**
   * fuentes findMany
   */
  export type fuentesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuentes
     */
    select?: fuentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuentes
     */
    omit?: fuentesOmit<ExtArgs> | null
    /**
     * Filter, which fuentes to fetch.
     */
    where?: fuentesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fuentes to fetch.
     */
    orderBy?: fuentesOrderByWithRelationInput | fuentesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fuentes.
     */
    cursor?: fuentesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fuentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fuentes.
     */
    skip?: number
    distinct?: FuentesScalarFieldEnum | FuentesScalarFieldEnum[]
  }

  /**
   * fuentes create
   */
  export type fuentesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuentes
     */
    select?: fuentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuentes
     */
    omit?: fuentesOmit<ExtArgs> | null
    /**
     * The data needed to create a fuentes.
     */
    data: XOR<fuentesCreateInput, fuentesUncheckedCreateInput>
  }

  /**
   * fuentes createMany
   */
  export type fuentesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fuentes.
     */
    data: fuentesCreateManyInput | fuentesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fuentes createManyAndReturn
   */
  export type fuentesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuentes
     */
    select?: fuentesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fuentes
     */
    omit?: fuentesOmit<ExtArgs> | null
    /**
     * The data used to create many fuentes.
     */
    data: fuentesCreateManyInput | fuentesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fuentes update
   */
  export type fuentesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuentes
     */
    select?: fuentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuentes
     */
    omit?: fuentesOmit<ExtArgs> | null
    /**
     * The data needed to update a fuentes.
     */
    data: XOR<fuentesUpdateInput, fuentesUncheckedUpdateInput>
    /**
     * Choose, which fuentes to update.
     */
    where: fuentesWhereUniqueInput
  }

  /**
   * fuentes updateMany
   */
  export type fuentesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fuentes.
     */
    data: XOR<fuentesUpdateManyMutationInput, fuentesUncheckedUpdateManyInput>
    /**
     * Filter which fuentes to update
     */
    where?: fuentesWhereInput
    /**
     * Limit how many fuentes to update.
     */
    limit?: number
  }

  /**
   * fuentes updateManyAndReturn
   */
  export type fuentesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuentes
     */
    select?: fuentesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fuentes
     */
    omit?: fuentesOmit<ExtArgs> | null
    /**
     * The data used to update fuentes.
     */
    data: XOR<fuentesUpdateManyMutationInput, fuentesUncheckedUpdateManyInput>
    /**
     * Filter which fuentes to update
     */
    where?: fuentesWhereInput
    /**
     * Limit how many fuentes to update.
     */
    limit?: number
  }

  /**
   * fuentes upsert
   */
  export type fuentesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuentes
     */
    select?: fuentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuentes
     */
    omit?: fuentesOmit<ExtArgs> | null
    /**
     * The filter to search for the fuentes to update in case it exists.
     */
    where: fuentesWhereUniqueInput
    /**
     * In case the fuentes found by the `where` argument doesn't exist, create a new fuentes with this data.
     */
    create: XOR<fuentesCreateInput, fuentesUncheckedCreateInput>
    /**
     * In case the fuentes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fuentesUpdateInput, fuentesUncheckedUpdateInput>
  }

  /**
   * fuentes delete
   */
  export type fuentesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuentes
     */
    select?: fuentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuentes
     */
    omit?: fuentesOmit<ExtArgs> | null
    /**
     * Filter which fuentes to delete.
     */
    where: fuentesWhereUniqueInput
  }

  /**
   * fuentes deleteMany
   */
  export type fuentesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fuentes to delete
     */
    where?: fuentesWhereInput
    /**
     * Limit how many fuentes to delete.
     */
    limit?: number
  }

  /**
   * fuentes without action
   */
  export type fuentesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuentes
     */
    select?: fuentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuentes
     */
    omit?: fuentesOmit<ExtArgs> | null
  }


  /**
   * Model gabinetes
   */

  export type AggregateGabinetes = {
    _count: GabinetesCountAggregateOutputType | null
    _avg: GabinetesAvgAggregateOutputType | null
    _sum: GabinetesSumAggregateOutputType | null
    _min: GabinetesMinAggregateOutputType | null
    _max: GabinetesMaxAggregateOutputType | null
  }

  export type GabinetesAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    external_volume: Decimal | null
    internal_35_bays: number | null
  }

  export type GabinetesSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    external_volume: Decimal | null
    internal_35_bays: number | null
  }

  export type GabinetesMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    type: string | null
    color: string | null
    psu: string | null
    side_panel: string | null
    external_volume: Decimal | null
    internal_35_bays: number | null
    imagen_url: string | null
  }

  export type GabinetesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    type: string | null
    color: string | null
    psu: string | null
    side_panel: string | null
    external_volume: Decimal | null
    internal_35_bays: number | null
    imagen_url: string | null
  }

  export type GabinetesCountAggregateOutputType = {
    id: number
    name: number
    price: number
    type: number
    color: number
    psu: number
    side_panel: number
    external_volume: number
    internal_35_bays: number
    imagen_url: number
    _all: number
  }


  export type GabinetesAvgAggregateInputType = {
    id?: true
    price?: true
    external_volume?: true
    internal_35_bays?: true
  }

  export type GabinetesSumAggregateInputType = {
    id?: true
    price?: true
    external_volume?: true
    internal_35_bays?: true
  }

  export type GabinetesMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    type?: true
    color?: true
    psu?: true
    side_panel?: true
    external_volume?: true
    internal_35_bays?: true
    imagen_url?: true
  }

  export type GabinetesMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    type?: true
    color?: true
    psu?: true
    side_panel?: true
    external_volume?: true
    internal_35_bays?: true
    imagen_url?: true
  }

  export type GabinetesCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    type?: true
    color?: true
    psu?: true
    side_panel?: true
    external_volume?: true
    internal_35_bays?: true
    imagen_url?: true
    _all?: true
  }

  export type GabinetesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gabinetes to aggregate.
     */
    where?: gabinetesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gabinetes to fetch.
     */
    orderBy?: gabinetesOrderByWithRelationInput | gabinetesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gabinetesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gabinetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gabinetes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gabinetes
    **/
    _count?: true | GabinetesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GabinetesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GabinetesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GabinetesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GabinetesMaxAggregateInputType
  }

  export type GetGabinetesAggregateType<T extends GabinetesAggregateArgs> = {
        [P in keyof T & keyof AggregateGabinetes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGabinetes[P]>
      : GetScalarType<T[P], AggregateGabinetes[P]>
  }




  export type gabinetesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gabinetesWhereInput
    orderBy?: gabinetesOrderByWithAggregationInput | gabinetesOrderByWithAggregationInput[]
    by: GabinetesScalarFieldEnum[] | GabinetesScalarFieldEnum
    having?: gabinetesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GabinetesCountAggregateInputType | true
    _avg?: GabinetesAvgAggregateInputType
    _sum?: GabinetesSumAggregateInputType
    _min?: GabinetesMinAggregateInputType
    _max?: GabinetesMaxAggregateInputType
  }

  export type GabinetesGroupByOutputType = {
    id: number
    name: string
    price: Decimal | null
    type: string | null
    color: string | null
    psu: string | null
    side_panel: string | null
    external_volume: Decimal | null
    internal_35_bays: number | null
    imagen_url: string | null
    _count: GabinetesCountAggregateOutputType | null
    _avg: GabinetesAvgAggregateOutputType | null
    _sum: GabinetesSumAggregateOutputType | null
    _min: GabinetesMinAggregateOutputType | null
    _max: GabinetesMaxAggregateOutputType | null
  }

  type GetGabinetesGroupByPayload<T extends gabinetesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GabinetesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GabinetesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GabinetesGroupByOutputType[P]>
            : GetScalarType<T[P], GabinetesGroupByOutputType[P]>
        }
      >
    >


  export type gabinetesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    type?: boolean
    color?: boolean
    psu?: boolean
    side_panel?: boolean
    external_volume?: boolean
    internal_35_bays?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["gabinetes"]>

  export type gabinetesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    type?: boolean
    color?: boolean
    psu?: boolean
    side_panel?: boolean
    external_volume?: boolean
    internal_35_bays?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["gabinetes"]>

  export type gabinetesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    type?: boolean
    color?: boolean
    psu?: boolean
    side_panel?: boolean
    external_volume?: boolean
    internal_35_bays?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["gabinetes"]>

  export type gabinetesSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    type?: boolean
    color?: boolean
    psu?: boolean
    side_panel?: boolean
    external_volume?: boolean
    internal_35_bays?: boolean
    imagen_url?: boolean
  }

  export type gabinetesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "type" | "color" | "psu" | "side_panel" | "external_volume" | "internal_35_bays" | "imagen_url", ExtArgs["result"]["gabinetes"]>

  export type $gabinetesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gabinetes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: Prisma.Decimal | null
      type: string | null
      color: string | null
      psu: string | null
      side_panel: string | null
      external_volume: Prisma.Decimal | null
      internal_35_bays: number | null
      imagen_url: string | null
    }, ExtArgs["result"]["gabinetes"]>
    composites: {}
  }

  type gabinetesGetPayload<S extends boolean | null | undefined | gabinetesDefaultArgs> = $Result.GetResult<Prisma.$gabinetesPayload, S>

  type gabinetesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gabinetesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GabinetesCountAggregateInputType | true
    }

  export interface gabinetesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gabinetes'], meta: { name: 'gabinetes' } }
    /**
     * Find zero or one Gabinetes that matches the filter.
     * @param {gabinetesFindUniqueArgs} args - Arguments to find a Gabinetes
     * @example
     * // Get one Gabinetes
     * const gabinetes = await prisma.gabinetes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gabinetesFindUniqueArgs>(args: SelectSubset<T, gabinetesFindUniqueArgs<ExtArgs>>): Prisma__gabinetesClient<$Result.GetResult<Prisma.$gabinetesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gabinetes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gabinetesFindUniqueOrThrowArgs} args - Arguments to find a Gabinetes
     * @example
     * // Get one Gabinetes
     * const gabinetes = await prisma.gabinetes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gabinetesFindUniqueOrThrowArgs>(args: SelectSubset<T, gabinetesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gabinetesClient<$Result.GetResult<Prisma.$gabinetesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gabinetes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gabinetesFindFirstArgs} args - Arguments to find a Gabinetes
     * @example
     * // Get one Gabinetes
     * const gabinetes = await prisma.gabinetes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gabinetesFindFirstArgs>(args?: SelectSubset<T, gabinetesFindFirstArgs<ExtArgs>>): Prisma__gabinetesClient<$Result.GetResult<Prisma.$gabinetesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gabinetes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gabinetesFindFirstOrThrowArgs} args - Arguments to find a Gabinetes
     * @example
     * // Get one Gabinetes
     * const gabinetes = await prisma.gabinetes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gabinetesFindFirstOrThrowArgs>(args?: SelectSubset<T, gabinetesFindFirstOrThrowArgs<ExtArgs>>): Prisma__gabinetesClient<$Result.GetResult<Prisma.$gabinetesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gabinetes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gabinetesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gabinetes
     * const gabinetes = await prisma.gabinetes.findMany()
     * 
     * // Get first 10 Gabinetes
     * const gabinetes = await prisma.gabinetes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gabinetesWithIdOnly = await prisma.gabinetes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gabinetesFindManyArgs>(args?: SelectSubset<T, gabinetesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gabinetesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gabinetes.
     * @param {gabinetesCreateArgs} args - Arguments to create a Gabinetes.
     * @example
     * // Create one Gabinetes
     * const Gabinetes = await prisma.gabinetes.create({
     *   data: {
     *     // ... data to create a Gabinetes
     *   }
     * })
     * 
     */
    create<T extends gabinetesCreateArgs>(args: SelectSubset<T, gabinetesCreateArgs<ExtArgs>>): Prisma__gabinetesClient<$Result.GetResult<Prisma.$gabinetesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gabinetes.
     * @param {gabinetesCreateManyArgs} args - Arguments to create many Gabinetes.
     * @example
     * // Create many Gabinetes
     * const gabinetes = await prisma.gabinetes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gabinetesCreateManyArgs>(args?: SelectSubset<T, gabinetesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gabinetes and returns the data saved in the database.
     * @param {gabinetesCreateManyAndReturnArgs} args - Arguments to create many Gabinetes.
     * @example
     * // Create many Gabinetes
     * const gabinetes = await prisma.gabinetes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gabinetes and only return the `id`
     * const gabinetesWithIdOnly = await prisma.gabinetes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gabinetesCreateManyAndReturnArgs>(args?: SelectSubset<T, gabinetesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gabinetesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gabinetes.
     * @param {gabinetesDeleteArgs} args - Arguments to delete one Gabinetes.
     * @example
     * // Delete one Gabinetes
     * const Gabinetes = await prisma.gabinetes.delete({
     *   where: {
     *     // ... filter to delete one Gabinetes
     *   }
     * })
     * 
     */
    delete<T extends gabinetesDeleteArgs>(args: SelectSubset<T, gabinetesDeleteArgs<ExtArgs>>): Prisma__gabinetesClient<$Result.GetResult<Prisma.$gabinetesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gabinetes.
     * @param {gabinetesUpdateArgs} args - Arguments to update one Gabinetes.
     * @example
     * // Update one Gabinetes
     * const gabinetes = await prisma.gabinetes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gabinetesUpdateArgs>(args: SelectSubset<T, gabinetesUpdateArgs<ExtArgs>>): Prisma__gabinetesClient<$Result.GetResult<Prisma.$gabinetesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gabinetes.
     * @param {gabinetesDeleteManyArgs} args - Arguments to filter Gabinetes to delete.
     * @example
     * // Delete a few Gabinetes
     * const { count } = await prisma.gabinetes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gabinetesDeleteManyArgs>(args?: SelectSubset<T, gabinetesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gabinetes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gabinetesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gabinetes
     * const gabinetes = await prisma.gabinetes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gabinetesUpdateManyArgs>(args: SelectSubset<T, gabinetesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gabinetes and returns the data updated in the database.
     * @param {gabinetesUpdateManyAndReturnArgs} args - Arguments to update many Gabinetes.
     * @example
     * // Update many Gabinetes
     * const gabinetes = await prisma.gabinetes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gabinetes and only return the `id`
     * const gabinetesWithIdOnly = await prisma.gabinetes.updateManyAndReturn({
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
    updateManyAndReturn<T extends gabinetesUpdateManyAndReturnArgs>(args: SelectSubset<T, gabinetesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gabinetesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gabinetes.
     * @param {gabinetesUpsertArgs} args - Arguments to update or create a Gabinetes.
     * @example
     * // Update or create a Gabinetes
     * const gabinetes = await prisma.gabinetes.upsert({
     *   create: {
     *     // ... data to create a Gabinetes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gabinetes we want to update
     *   }
     * })
     */
    upsert<T extends gabinetesUpsertArgs>(args: SelectSubset<T, gabinetesUpsertArgs<ExtArgs>>): Prisma__gabinetesClient<$Result.GetResult<Prisma.$gabinetesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gabinetes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gabinetesCountArgs} args - Arguments to filter Gabinetes to count.
     * @example
     * // Count the number of Gabinetes
     * const count = await prisma.gabinetes.count({
     *   where: {
     *     // ... the filter for the Gabinetes we want to count
     *   }
     * })
    **/
    count<T extends gabinetesCountArgs>(
      args?: Subset<T, gabinetesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GabinetesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gabinetes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GabinetesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GabinetesAggregateArgs>(args: Subset<T, GabinetesAggregateArgs>): Prisma.PrismaPromise<GetGabinetesAggregateType<T>>

    /**
     * Group by Gabinetes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gabinetesGroupByArgs} args - Group by arguments.
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
      T extends gabinetesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gabinetesGroupByArgs['orderBy'] }
        : { orderBy?: gabinetesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, gabinetesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGabinetesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gabinetes model
   */
  readonly fields: gabinetesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gabinetes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gabinetesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the gabinetes model
   */
  interface gabinetesFieldRefs {
    readonly id: FieldRef<"gabinetes", 'Int'>
    readonly name: FieldRef<"gabinetes", 'String'>
    readonly price: FieldRef<"gabinetes", 'Decimal'>
    readonly type: FieldRef<"gabinetes", 'String'>
    readonly color: FieldRef<"gabinetes", 'String'>
    readonly psu: FieldRef<"gabinetes", 'String'>
    readonly side_panel: FieldRef<"gabinetes", 'String'>
    readonly external_volume: FieldRef<"gabinetes", 'Decimal'>
    readonly internal_35_bays: FieldRef<"gabinetes", 'Int'>
    readonly imagen_url: FieldRef<"gabinetes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * gabinetes findUnique
   */
  export type gabinetesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gabinetes
     */
    select?: gabinetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gabinetes
     */
    omit?: gabinetesOmit<ExtArgs> | null
    /**
     * Filter, which gabinetes to fetch.
     */
    where: gabinetesWhereUniqueInput
  }

  /**
   * gabinetes findUniqueOrThrow
   */
  export type gabinetesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gabinetes
     */
    select?: gabinetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gabinetes
     */
    omit?: gabinetesOmit<ExtArgs> | null
    /**
     * Filter, which gabinetes to fetch.
     */
    where: gabinetesWhereUniqueInput
  }

  /**
   * gabinetes findFirst
   */
  export type gabinetesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gabinetes
     */
    select?: gabinetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gabinetes
     */
    omit?: gabinetesOmit<ExtArgs> | null
    /**
     * Filter, which gabinetes to fetch.
     */
    where?: gabinetesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gabinetes to fetch.
     */
    orderBy?: gabinetesOrderByWithRelationInput | gabinetesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gabinetes.
     */
    cursor?: gabinetesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gabinetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gabinetes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gabinetes.
     */
    distinct?: GabinetesScalarFieldEnum | GabinetesScalarFieldEnum[]
  }

  /**
   * gabinetes findFirstOrThrow
   */
  export type gabinetesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gabinetes
     */
    select?: gabinetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gabinetes
     */
    omit?: gabinetesOmit<ExtArgs> | null
    /**
     * Filter, which gabinetes to fetch.
     */
    where?: gabinetesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gabinetes to fetch.
     */
    orderBy?: gabinetesOrderByWithRelationInput | gabinetesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gabinetes.
     */
    cursor?: gabinetesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gabinetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gabinetes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gabinetes.
     */
    distinct?: GabinetesScalarFieldEnum | GabinetesScalarFieldEnum[]
  }

  /**
   * gabinetes findMany
   */
  export type gabinetesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gabinetes
     */
    select?: gabinetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gabinetes
     */
    omit?: gabinetesOmit<ExtArgs> | null
    /**
     * Filter, which gabinetes to fetch.
     */
    where?: gabinetesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gabinetes to fetch.
     */
    orderBy?: gabinetesOrderByWithRelationInput | gabinetesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gabinetes.
     */
    cursor?: gabinetesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gabinetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gabinetes.
     */
    skip?: number
    distinct?: GabinetesScalarFieldEnum | GabinetesScalarFieldEnum[]
  }

  /**
   * gabinetes create
   */
  export type gabinetesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gabinetes
     */
    select?: gabinetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gabinetes
     */
    omit?: gabinetesOmit<ExtArgs> | null
    /**
     * The data needed to create a gabinetes.
     */
    data: XOR<gabinetesCreateInput, gabinetesUncheckedCreateInput>
  }

  /**
   * gabinetes createMany
   */
  export type gabinetesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gabinetes.
     */
    data: gabinetesCreateManyInput | gabinetesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gabinetes createManyAndReturn
   */
  export type gabinetesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gabinetes
     */
    select?: gabinetesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gabinetes
     */
    omit?: gabinetesOmit<ExtArgs> | null
    /**
     * The data used to create many gabinetes.
     */
    data: gabinetesCreateManyInput | gabinetesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gabinetes update
   */
  export type gabinetesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gabinetes
     */
    select?: gabinetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gabinetes
     */
    omit?: gabinetesOmit<ExtArgs> | null
    /**
     * The data needed to update a gabinetes.
     */
    data: XOR<gabinetesUpdateInput, gabinetesUncheckedUpdateInput>
    /**
     * Choose, which gabinetes to update.
     */
    where: gabinetesWhereUniqueInput
  }

  /**
   * gabinetes updateMany
   */
  export type gabinetesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gabinetes.
     */
    data: XOR<gabinetesUpdateManyMutationInput, gabinetesUncheckedUpdateManyInput>
    /**
     * Filter which gabinetes to update
     */
    where?: gabinetesWhereInput
    /**
     * Limit how many gabinetes to update.
     */
    limit?: number
  }

  /**
   * gabinetes updateManyAndReturn
   */
  export type gabinetesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gabinetes
     */
    select?: gabinetesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gabinetes
     */
    omit?: gabinetesOmit<ExtArgs> | null
    /**
     * The data used to update gabinetes.
     */
    data: XOR<gabinetesUpdateManyMutationInput, gabinetesUncheckedUpdateManyInput>
    /**
     * Filter which gabinetes to update
     */
    where?: gabinetesWhereInput
    /**
     * Limit how many gabinetes to update.
     */
    limit?: number
  }

  /**
   * gabinetes upsert
   */
  export type gabinetesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gabinetes
     */
    select?: gabinetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gabinetes
     */
    omit?: gabinetesOmit<ExtArgs> | null
    /**
     * The filter to search for the gabinetes to update in case it exists.
     */
    where: gabinetesWhereUniqueInput
    /**
     * In case the gabinetes found by the `where` argument doesn't exist, create a new gabinetes with this data.
     */
    create: XOR<gabinetesCreateInput, gabinetesUncheckedCreateInput>
    /**
     * In case the gabinetes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gabinetesUpdateInput, gabinetesUncheckedUpdateInput>
  }

  /**
   * gabinetes delete
   */
  export type gabinetesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gabinetes
     */
    select?: gabinetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gabinetes
     */
    omit?: gabinetesOmit<ExtArgs> | null
    /**
     * Filter which gabinetes to delete.
     */
    where: gabinetesWhereUniqueInput
  }

  /**
   * gabinetes deleteMany
   */
  export type gabinetesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gabinetes to delete
     */
    where?: gabinetesWhereInput
    /**
     * Limit how many gabinetes to delete.
     */
    limit?: number
  }

  /**
   * gabinetes without action
   */
  export type gabinetesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gabinetes
     */
    select?: gabinetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gabinetes
     */
    omit?: gabinetesOmit<ExtArgs> | null
  }


  /**
   * Model graficas
   */

  export type AggregateGraficas = {
    _count: GraficasCountAggregateOutputType | null
    _avg: GraficasAvgAggregateOutputType | null
    _sum: GraficasSumAggregateOutputType | null
    _min: GraficasMinAggregateOutputType | null
    _max: GraficasMaxAggregateOutputType | null
  }

  export type GraficasAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    memory: number | null
    core_clock: number | null
    boost_clock: number | null
    length: number | null
  }

  export type GraficasSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    memory: number | null
    core_clock: number | null
    boost_clock: number | null
    length: number | null
  }

  export type GraficasMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    chipset: string | null
    memory: number | null
    core_clock: number | null
    boost_clock: number | null
    color: string | null
    length: number | null
    imagen_url: string | null
  }

  export type GraficasMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    chipset: string | null
    memory: number | null
    core_clock: number | null
    boost_clock: number | null
    color: string | null
    length: number | null
    imagen_url: string | null
  }

  export type GraficasCountAggregateOutputType = {
    id: number
    name: number
    price: number
    chipset: number
    memory: number
    core_clock: number
    boost_clock: number
    color: number
    length: number
    imagen_url: number
    _all: number
  }


  export type GraficasAvgAggregateInputType = {
    id?: true
    price?: true
    memory?: true
    core_clock?: true
    boost_clock?: true
    length?: true
  }

  export type GraficasSumAggregateInputType = {
    id?: true
    price?: true
    memory?: true
    core_clock?: true
    boost_clock?: true
    length?: true
  }

  export type GraficasMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    chipset?: true
    memory?: true
    core_clock?: true
    boost_clock?: true
    color?: true
    length?: true
    imagen_url?: true
  }

  export type GraficasMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    chipset?: true
    memory?: true
    core_clock?: true
    boost_clock?: true
    color?: true
    length?: true
    imagen_url?: true
  }

  export type GraficasCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    chipset?: true
    memory?: true
    core_clock?: true
    boost_clock?: true
    color?: true
    length?: true
    imagen_url?: true
    _all?: true
  }

  export type GraficasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which graficas to aggregate.
     */
    where?: graficasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of graficas to fetch.
     */
    orderBy?: graficasOrderByWithRelationInput | graficasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: graficasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` graficas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` graficas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned graficas
    **/
    _count?: true | GraficasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GraficasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GraficasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GraficasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GraficasMaxAggregateInputType
  }

  export type GetGraficasAggregateType<T extends GraficasAggregateArgs> = {
        [P in keyof T & keyof AggregateGraficas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGraficas[P]>
      : GetScalarType<T[P], AggregateGraficas[P]>
  }




  export type graficasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: graficasWhereInput
    orderBy?: graficasOrderByWithAggregationInput | graficasOrderByWithAggregationInput[]
    by: GraficasScalarFieldEnum[] | GraficasScalarFieldEnum
    having?: graficasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GraficasCountAggregateInputType | true
    _avg?: GraficasAvgAggregateInputType
    _sum?: GraficasSumAggregateInputType
    _min?: GraficasMinAggregateInputType
    _max?: GraficasMaxAggregateInputType
  }

  export type GraficasGroupByOutputType = {
    id: number
    name: string
    price: Decimal | null
    chipset: string | null
    memory: number | null
    core_clock: number | null
    boost_clock: number | null
    color: string | null
    length: number | null
    imagen_url: string | null
    _count: GraficasCountAggregateOutputType | null
    _avg: GraficasAvgAggregateOutputType | null
    _sum: GraficasSumAggregateOutputType | null
    _min: GraficasMinAggregateOutputType | null
    _max: GraficasMaxAggregateOutputType | null
  }

  type GetGraficasGroupByPayload<T extends graficasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GraficasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GraficasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GraficasGroupByOutputType[P]>
            : GetScalarType<T[P], GraficasGroupByOutputType[P]>
        }
      >
    >


  export type graficasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    chipset?: boolean
    memory?: boolean
    core_clock?: boolean
    boost_clock?: boolean
    color?: boolean
    length?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["graficas"]>

  export type graficasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    chipset?: boolean
    memory?: boolean
    core_clock?: boolean
    boost_clock?: boolean
    color?: boolean
    length?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["graficas"]>

  export type graficasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    chipset?: boolean
    memory?: boolean
    core_clock?: boolean
    boost_clock?: boolean
    color?: boolean
    length?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["graficas"]>

  export type graficasSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    chipset?: boolean
    memory?: boolean
    core_clock?: boolean
    boost_clock?: boolean
    color?: boolean
    length?: boolean
    imagen_url?: boolean
  }

  export type graficasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "chipset" | "memory" | "core_clock" | "boost_clock" | "color" | "length" | "imagen_url", ExtArgs["result"]["graficas"]>

  export type $graficasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "graficas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: Prisma.Decimal | null
      chipset: string | null
      memory: number | null
      core_clock: number | null
      boost_clock: number | null
      color: string | null
      length: number | null
      imagen_url: string | null
    }, ExtArgs["result"]["graficas"]>
    composites: {}
  }

  type graficasGetPayload<S extends boolean | null | undefined | graficasDefaultArgs> = $Result.GetResult<Prisma.$graficasPayload, S>

  type graficasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<graficasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GraficasCountAggregateInputType | true
    }

  export interface graficasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['graficas'], meta: { name: 'graficas' } }
    /**
     * Find zero or one Graficas that matches the filter.
     * @param {graficasFindUniqueArgs} args - Arguments to find a Graficas
     * @example
     * // Get one Graficas
     * const graficas = await prisma.graficas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends graficasFindUniqueArgs>(args: SelectSubset<T, graficasFindUniqueArgs<ExtArgs>>): Prisma__graficasClient<$Result.GetResult<Prisma.$graficasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Graficas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {graficasFindUniqueOrThrowArgs} args - Arguments to find a Graficas
     * @example
     * // Get one Graficas
     * const graficas = await prisma.graficas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends graficasFindUniqueOrThrowArgs>(args: SelectSubset<T, graficasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__graficasClient<$Result.GetResult<Prisma.$graficasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Graficas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {graficasFindFirstArgs} args - Arguments to find a Graficas
     * @example
     * // Get one Graficas
     * const graficas = await prisma.graficas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends graficasFindFirstArgs>(args?: SelectSubset<T, graficasFindFirstArgs<ExtArgs>>): Prisma__graficasClient<$Result.GetResult<Prisma.$graficasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Graficas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {graficasFindFirstOrThrowArgs} args - Arguments to find a Graficas
     * @example
     * // Get one Graficas
     * const graficas = await prisma.graficas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends graficasFindFirstOrThrowArgs>(args?: SelectSubset<T, graficasFindFirstOrThrowArgs<ExtArgs>>): Prisma__graficasClient<$Result.GetResult<Prisma.$graficasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Graficas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {graficasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Graficas
     * const graficas = await prisma.graficas.findMany()
     * 
     * // Get first 10 Graficas
     * const graficas = await prisma.graficas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const graficasWithIdOnly = await prisma.graficas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends graficasFindManyArgs>(args?: SelectSubset<T, graficasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$graficasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Graficas.
     * @param {graficasCreateArgs} args - Arguments to create a Graficas.
     * @example
     * // Create one Graficas
     * const Graficas = await prisma.graficas.create({
     *   data: {
     *     // ... data to create a Graficas
     *   }
     * })
     * 
     */
    create<T extends graficasCreateArgs>(args: SelectSubset<T, graficasCreateArgs<ExtArgs>>): Prisma__graficasClient<$Result.GetResult<Prisma.$graficasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Graficas.
     * @param {graficasCreateManyArgs} args - Arguments to create many Graficas.
     * @example
     * // Create many Graficas
     * const graficas = await prisma.graficas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends graficasCreateManyArgs>(args?: SelectSubset<T, graficasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Graficas and returns the data saved in the database.
     * @param {graficasCreateManyAndReturnArgs} args - Arguments to create many Graficas.
     * @example
     * // Create many Graficas
     * const graficas = await prisma.graficas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Graficas and only return the `id`
     * const graficasWithIdOnly = await prisma.graficas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends graficasCreateManyAndReturnArgs>(args?: SelectSubset<T, graficasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$graficasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Graficas.
     * @param {graficasDeleteArgs} args - Arguments to delete one Graficas.
     * @example
     * // Delete one Graficas
     * const Graficas = await prisma.graficas.delete({
     *   where: {
     *     // ... filter to delete one Graficas
     *   }
     * })
     * 
     */
    delete<T extends graficasDeleteArgs>(args: SelectSubset<T, graficasDeleteArgs<ExtArgs>>): Prisma__graficasClient<$Result.GetResult<Prisma.$graficasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Graficas.
     * @param {graficasUpdateArgs} args - Arguments to update one Graficas.
     * @example
     * // Update one Graficas
     * const graficas = await prisma.graficas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends graficasUpdateArgs>(args: SelectSubset<T, graficasUpdateArgs<ExtArgs>>): Prisma__graficasClient<$Result.GetResult<Prisma.$graficasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Graficas.
     * @param {graficasDeleteManyArgs} args - Arguments to filter Graficas to delete.
     * @example
     * // Delete a few Graficas
     * const { count } = await prisma.graficas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends graficasDeleteManyArgs>(args?: SelectSubset<T, graficasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Graficas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {graficasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Graficas
     * const graficas = await prisma.graficas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends graficasUpdateManyArgs>(args: SelectSubset<T, graficasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Graficas and returns the data updated in the database.
     * @param {graficasUpdateManyAndReturnArgs} args - Arguments to update many Graficas.
     * @example
     * // Update many Graficas
     * const graficas = await prisma.graficas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Graficas and only return the `id`
     * const graficasWithIdOnly = await prisma.graficas.updateManyAndReturn({
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
    updateManyAndReturn<T extends graficasUpdateManyAndReturnArgs>(args: SelectSubset<T, graficasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$graficasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Graficas.
     * @param {graficasUpsertArgs} args - Arguments to update or create a Graficas.
     * @example
     * // Update or create a Graficas
     * const graficas = await prisma.graficas.upsert({
     *   create: {
     *     // ... data to create a Graficas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Graficas we want to update
     *   }
     * })
     */
    upsert<T extends graficasUpsertArgs>(args: SelectSubset<T, graficasUpsertArgs<ExtArgs>>): Prisma__graficasClient<$Result.GetResult<Prisma.$graficasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Graficas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {graficasCountArgs} args - Arguments to filter Graficas to count.
     * @example
     * // Count the number of Graficas
     * const count = await prisma.graficas.count({
     *   where: {
     *     // ... the filter for the Graficas we want to count
     *   }
     * })
    **/
    count<T extends graficasCountArgs>(
      args?: Subset<T, graficasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GraficasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Graficas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GraficasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GraficasAggregateArgs>(args: Subset<T, GraficasAggregateArgs>): Prisma.PrismaPromise<GetGraficasAggregateType<T>>

    /**
     * Group by Graficas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {graficasGroupByArgs} args - Group by arguments.
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
      T extends graficasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: graficasGroupByArgs['orderBy'] }
        : { orderBy?: graficasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, graficasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGraficasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the graficas model
   */
  readonly fields: graficasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for graficas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__graficasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the graficas model
   */
  interface graficasFieldRefs {
    readonly id: FieldRef<"graficas", 'Int'>
    readonly name: FieldRef<"graficas", 'String'>
    readonly price: FieldRef<"graficas", 'Decimal'>
    readonly chipset: FieldRef<"graficas", 'String'>
    readonly memory: FieldRef<"graficas", 'Int'>
    readonly core_clock: FieldRef<"graficas", 'Int'>
    readonly boost_clock: FieldRef<"graficas", 'Int'>
    readonly color: FieldRef<"graficas", 'String'>
    readonly length: FieldRef<"graficas", 'Int'>
    readonly imagen_url: FieldRef<"graficas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * graficas findUnique
   */
  export type graficasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the graficas
     */
    select?: graficasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the graficas
     */
    omit?: graficasOmit<ExtArgs> | null
    /**
     * Filter, which graficas to fetch.
     */
    where: graficasWhereUniqueInput
  }

  /**
   * graficas findUniqueOrThrow
   */
  export type graficasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the graficas
     */
    select?: graficasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the graficas
     */
    omit?: graficasOmit<ExtArgs> | null
    /**
     * Filter, which graficas to fetch.
     */
    where: graficasWhereUniqueInput
  }

  /**
   * graficas findFirst
   */
  export type graficasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the graficas
     */
    select?: graficasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the graficas
     */
    omit?: graficasOmit<ExtArgs> | null
    /**
     * Filter, which graficas to fetch.
     */
    where?: graficasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of graficas to fetch.
     */
    orderBy?: graficasOrderByWithRelationInput | graficasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for graficas.
     */
    cursor?: graficasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` graficas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` graficas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of graficas.
     */
    distinct?: GraficasScalarFieldEnum | GraficasScalarFieldEnum[]
  }

  /**
   * graficas findFirstOrThrow
   */
  export type graficasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the graficas
     */
    select?: graficasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the graficas
     */
    omit?: graficasOmit<ExtArgs> | null
    /**
     * Filter, which graficas to fetch.
     */
    where?: graficasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of graficas to fetch.
     */
    orderBy?: graficasOrderByWithRelationInput | graficasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for graficas.
     */
    cursor?: graficasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` graficas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` graficas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of graficas.
     */
    distinct?: GraficasScalarFieldEnum | GraficasScalarFieldEnum[]
  }

  /**
   * graficas findMany
   */
  export type graficasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the graficas
     */
    select?: graficasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the graficas
     */
    omit?: graficasOmit<ExtArgs> | null
    /**
     * Filter, which graficas to fetch.
     */
    where?: graficasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of graficas to fetch.
     */
    orderBy?: graficasOrderByWithRelationInput | graficasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing graficas.
     */
    cursor?: graficasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` graficas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` graficas.
     */
    skip?: number
    distinct?: GraficasScalarFieldEnum | GraficasScalarFieldEnum[]
  }

  /**
   * graficas create
   */
  export type graficasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the graficas
     */
    select?: graficasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the graficas
     */
    omit?: graficasOmit<ExtArgs> | null
    /**
     * The data needed to create a graficas.
     */
    data: XOR<graficasCreateInput, graficasUncheckedCreateInput>
  }

  /**
   * graficas createMany
   */
  export type graficasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many graficas.
     */
    data: graficasCreateManyInput | graficasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * graficas createManyAndReturn
   */
  export type graficasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the graficas
     */
    select?: graficasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the graficas
     */
    omit?: graficasOmit<ExtArgs> | null
    /**
     * The data used to create many graficas.
     */
    data: graficasCreateManyInput | graficasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * graficas update
   */
  export type graficasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the graficas
     */
    select?: graficasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the graficas
     */
    omit?: graficasOmit<ExtArgs> | null
    /**
     * The data needed to update a graficas.
     */
    data: XOR<graficasUpdateInput, graficasUncheckedUpdateInput>
    /**
     * Choose, which graficas to update.
     */
    where: graficasWhereUniqueInput
  }

  /**
   * graficas updateMany
   */
  export type graficasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update graficas.
     */
    data: XOR<graficasUpdateManyMutationInput, graficasUncheckedUpdateManyInput>
    /**
     * Filter which graficas to update
     */
    where?: graficasWhereInput
    /**
     * Limit how many graficas to update.
     */
    limit?: number
  }

  /**
   * graficas updateManyAndReturn
   */
  export type graficasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the graficas
     */
    select?: graficasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the graficas
     */
    omit?: graficasOmit<ExtArgs> | null
    /**
     * The data used to update graficas.
     */
    data: XOR<graficasUpdateManyMutationInput, graficasUncheckedUpdateManyInput>
    /**
     * Filter which graficas to update
     */
    where?: graficasWhereInput
    /**
     * Limit how many graficas to update.
     */
    limit?: number
  }

  /**
   * graficas upsert
   */
  export type graficasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the graficas
     */
    select?: graficasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the graficas
     */
    omit?: graficasOmit<ExtArgs> | null
    /**
     * The filter to search for the graficas to update in case it exists.
     */
    where: graficasWhereUniqueInput
    /**
     * In case the graficas found by the `where` argument doesn't exist, create a new graficas with this data.
     */
    create: XOR<graficasCreateInput, graficasUncheckedCreateInput>
    /**
     * In case the graficas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<graficasUpdateInput, graficasUncheckedUpdateInput>
  }

  /**
   * graficas delete
   */
  export type graficasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the graficas
     */
    select?: graficasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the graficas
     */
    omit?: graficasOmit<ExtArgs> | null
    /**
     * Filter which graficas to delete.
     */
    where: graficasWhereUniqueInput
  }

  /**
   * graficas deleteMany
   */
  export type graficasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which graficas to delete
     */
    where?: graficasWhereInput
    /**
     * Limit how many graficas to delete.
     */
    limit?: number
  }

  /**
   * graficas without action
   */
  export type graficasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the graficas
     */
    select?: graficasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the graficas
     */
    omit?: graficasOmit<ExtArgs> | null
  }


  /**
   * Model memorias_externas
   */

  export type AggregateMemorias_externas = {
    _count: Memorias_externasCountAggregateOutputType | null
    _avg: Memorias_externasAvgAggregateOutputType | null
    _sum: Memorias_externasSumAggregateOutputType | null
    _min: Memorias_externasMinAggregateOutputType | null
    _max: Memorias_externasMaxAggregateOutputType | null
  }

  export type Memorias_externasAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    capacity: number | null
    price_per_gb: Decimal | null
  }

  export type Memorias_externasSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    capacity: number | null
    price_per_gb: Decimal | null
  }

  export type Memorias_externasMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    type: string | null
    interface: string | null
    capacity: number | null
    price_per_gb: Decimal | null
    color: string | null
    imagen_url: string | null
  }

  export type Memorias_externasMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    type: string | null
    interface: string | null
    capacity: number | null
    price_per_gb: Decimal | null
    color: string | null
    imagen_url: string | null
  }

  export type Memorias_externasCountAggregateOutputType = {
    id: number
    name: number
    price: number
    type: number
    interface: number
    capacity: number
    price_per_gb: number
    color: number
    imagen_url: number
    _all: number
  }


  export type Memorias_externasAvgAggregateInputType = {
    id?: true
    price?: true
    capacity?: true
    price_per_gb?: true
  }

  export type Memorias_externasSumAggregateInputType = {
    id?: true
    price?: true
    capacity?: true
    price_per_gb?: true
  }

  export type Memorias_externasMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    type?: true
    interface?: true
    capacity?: true
    price_per_gb?: true
    color?: true
    imagen_url?: true
  }

  export type Memorias_externasMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    type?: true
    interface?: true
    capacity?: true
    price_per_gb?: true
    color?: true
    imagen_url?: true
  }

  export type Memorias_externasCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    type?: true
    interface?: true
    capacity?: true
    price_per_gb?: true
    color?: true
    imagen_url?: true
    _all?: true
  }

  export type Memorias_externasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which memorias_externas to aggregate.
     */
    where?: memorias_externasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memorias_externas to fetch.
     */
    orderBy?: memorias_externasOrderByWithRelationInput | memorias_externasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: memorias_externasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memorias_externas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memorias_externas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned memorias_externas
    **/
    _count?: true | Memorias_externasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Memorias_externasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Memorias_externasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Memorias_externasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Memorias_externasMaxAggregateInputType
  }

  export type GetMemorias_externasAggregateType<T extends Memorias_externasAggregateArgs> = {
        [P in keyof T & keyof AggregateMemorias_externas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemorias_externas[P]>
      : GetScalarType<T[P], AggregateMemorias_externas[P]>
  }




  export type memorias_externasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: memorias_externasWhereInput
    orderBy?: memorias_externasOrderByWithAggregationInput | memorias_externasOrderByWithAggregationInput[]
    by: Memorias_externasScalarFieldEnum[] | Memorias_externasScalarFieldEnum
    having?: memorias_externasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Memorias_externasCountAggregateInputType | true
    _avg?: Memorias_externasAvgAggregateInputType
    _sum?: Memorias_externasSumAggregateInputType
    _min?: Memorias_externasMinAggregateInputType
    _max?: Memorias_externasMaxAggregateInputType
  }

  export type Memorias_externasGroupByOutputType = {
    id: number
    name: string
    price: Decimal | null
    type: string | null
    interface: string | null
    capacity: number | null
    price_per_gb: Decimal | null
    color: string | null
    imagen_url: string | null
    _count: Memorias_externasCountAggregateOutputType | null
    _avg: Memorias_externasAvgAggregateOutputType | null
    _sum: Memorias_externasSumAggregateOutputType | null
    _min: Memorias_externasMinAggregateOutputType | null
    _max: Memorias_externasMaxAggregateOutputType | null
  }

  type GetMemorias_externasGroupByPayload<T extends memorias_externasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Memorias_externasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Memorias_externasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Memorias_externasGroupByOutputType[P]>
            : GetScalarType<T[P], Memorias_externasGroupByOutputType[P]>
        }
      >
    >


  export type memorias_externasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    type?: boolean
    interface?: boolean
    capacity?: boolean
    price_per_gb?: boolean
    color?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["memorias_externas"]>

  export type memorias_externasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    type?: boolean
    interface?: boolean
    capacity?: boolean
    price_per_gb?: boolean
    color?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["memorias_externas"]>

  export type memorias_externasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    type?: boolean
    interface?: boolean
    capacity?: boolean
    price_per_gb?: boolean
    color?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["memorias_externas"]>

  export type memorias_externasSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    type?: boolean
    interface?: boolean
    capacity?: boolean
    price_per_gb?: boolean
    color?: boolean
    imagen_url?: boolean
  }

  export type memorias_externasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "type" | "interface" | "capacity" | "price_per_gb" | "color" | "imagen_url", ExtArgs["result"]["memorias_externas"]>

  export type $memorias_externasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "memorias_externas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: Prisma.Decimal | null
      type: string | null
      interface: string | null
      capacity: number | null
      price_per_gb: Prisma.Decimal | null
      color: string | null
      imagen_url: string | null
    }, ExtArgs["result"]["memorias_externas"]>
    composites: {}
  }

  type memorias_externasGetPayload<S extends boolean | null | undefined | memorias_externasDefaultArgs> = $Result.GetResult<Prisma.$memorias_externasPayload, S>

  type memorias_externasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<memorias_externasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Memorias_externasCountAggregateInputType | true
    }

  export interface memorias_externasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['memorias_externas'], meta: { name: 'memorias_externas' } }
    /**
     * Find zero or one Memorias_externas that matches the filter.
     * @param {memorias_externasFindUniqueArgs} args - Arguments to find a Memorias_externas
     * @example
     * // Get one Memorias_externas
     * const memorias_externas = await prisma.memorias_externas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends memorias_externasFindUniqueArgs>(args: SelectSubset<T, memorias_externasFindUniqueArgs<ExtArgs>>): Prisma__memorias_externasClient<$Result.GetResult<Prisma.$memorias_externasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Memorias_externas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {memorias_externasFindUniqueOrThrowArgs} args - Arguments to find a Memorias_externas
     * @example
     * // Get one Memorias_externas
     * const memorias_externas = await prisma.memorias_externas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends memorias_externasFindUniqueOrThrowArgs>(args: SelectSubset<T, memorias_externasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__memorias_externasClient<$Result.GetResult<Prisma.$memorias_externasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Memorias_externas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memorias_externasFindFirstArgs} args - Arguments to find a Memorias_externas
     * @example
     * // Get one Memorias_externas
     * const memorias_externas = await prisma.memorias_externas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends memorias_externasFindFirstArgs>(args?: SelectSubset<T, memorias_externasFindFirstArgs<ExtArgs>>): Prisma__memorias_externasClient<$Result.GetResult<Prisma.$memorias_externasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Memorias_externas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memorias_externasFindFirstOrThrowArgs} args - Arguments to find a Memorias_externas
     * @example
     * // Get one Memorias_externas
     * const memorias_externas = await prisma.memorias_externas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends memorias_externasFindFirstOrThrowArgs>(args?: SelectSubset<T, memorias_externasFindFirstOrThrowArgs<ExtArgs>>): Prisma__memorias_externasClient<$Result.GetResult<Prisma.$memorias_externasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Memorias_externas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memorias_externasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memorias_externas
     * const memorias_externas = await prisma.memorias_externas.findMany()
     * 
     * // Get first 10 Memorias_externas
     * const memorias_externas = await prisma.memorias_externas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memorias_externasWithIdOnly = await prisma.memorias_externas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends memorias_externasFindManyArgs>(args?: SelectSubset<T, memorias_externasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memorias_externasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Memorias_externas.
     * @param {memorias_externasCreateArgs} args - Arguments to create a Memorias_externas.
     * @example
     * // Create one Memorias_externas
     * const Memorias_externas = await prisma.memorias_externas.create({
     *   data: {
     *     // ... data to create a Memorias_externas
     *   }
     * })
     * 
     */
    create<T extends memorias_externasCreateArgs>(args: SelectSubset<T, memorias_externasCreateArgs<ExtArgs>>): Prisma__memorias_externasClient<$Result.GetResult<Prisma.$memorias_externasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Memorias_externas.
     * @param {memorias_externasCreateManyArgs} args - Arguments to create many Memorias_externas.
     * @example
     * // Create many Memorias_externas
     * const memorias_externas = await prisma.memorias_externas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends memorias_externasCreateManyArgs>(args?: SelectSubset<T, memorias_externasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Memorias_externas and returns the data saved in the database.
     * @param {memorias_externasCreateManyAndReturnArgs} args - Arguments to create many Memorias_externas.
     * @example
     * // Create many Memorias_externas
     * const memorias_externas = await prisma.memorias_externas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Memorias_externas and only return the `id`
     * const memorias_externasWithIdOnly = await prisma.memorias_externas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends memorias_externasCreateManyAndReturnArgs>(args?: SelectSubset<T, memorias_externasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memorias_externasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Memorias_externas.
     * @param {memorias_externasDeleteArgs} args - Arguments to delete one Memorias_externas.
     * @example
     * // Delete one Memorias_externas
     * const Memorias_externas = await prisma.memorias_externas.delete({
     *   where: {
     *     // ... filter to delete one Memorias_externas
     *   }
     * })
     * 
     */
    delete<T extends memorias_externasDeleteArgs>(args: SelectSubset<T, memorias_externasDeleteArgs<ExtArgs>>): Prisma__memorias_externasClient<$Result.GetResult<Prisma.$memorias_externasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Memorias_externas.
     * @param {memorias_externasUpdateArgs} args - Arguments to update one Memorias_externas.
     * @example
     * // Update one Memorias_externas
     * const memorias_externas = await prisma.memorias_externas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends memorias_externasUpdateArgs>(args: SelectSubset<T, memorias_externasUpdateArgs<ExtArgs>>): Prisma__memorias_externasClient<$Result.GetResult<Prisma.$memorias_externasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Memorias_externas.
     * @param {memorias_externasDeleteManyArgs} args - Arguments to filter Memorias_externas to delete.
     * @example
     * // Delete a few Memorias_externas
     * const { count } = await prisma.memorias_externas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends memorias_externasDeleteManyArgs>(args?: SelectSubset<T, memorias_externasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memorias_externas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memorias_externasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memorias_externas
     * const memorias_externas = await prisma.memorias_externas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends memorias_externasUpdateManyArgs>(args: SelectSubset<T, memorias_externasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memorias_externas and returns the data updated in the database.
     * @param {memorias_externasUpdateManyAndReturnArgs} args - Arguments to update many Memorias_externas.
     * @example
     * // Update many Memorias_externas
     * const memorias_externas = await prisma.memorias_externas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Memorias_externas and only return the `id`
     * const memorias_externasWithIdOnly = await prisma.memorias_externas.updateManyAndReturn({
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
    updateManyAndReturn<T extends memorias_externasUpdateManyAndReturnArgs>(args: SelectSubset<T, memorias_externasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memorias_externasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Memorias_externas.
     * @param {memorias_externasUpsertArgs} args - Arguments to update or create a Memorias_externas.
     * @example
     * // Update or create a Memorias_externas
     * const memorias_externas = await prisma.memorias_externas.upsert({
     *   create: {
     *     // ... data to create a Memorias_externas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Memorias_externas we want to update
     *   }
     * })
     */
    upsert<T extends memorias_externasUpsertArgs>(args: SelectSubset<T, memorias_externasUpsertArgs<ExtArgs>>): Prisma__memorias_externasClient<$Result.GetResult<Prisma.$memorias_externasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Memorias_externas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memorias_externasCountArgs} args - Arguments to filter Memorias_externas to count.
     * @example
     * // Count the number of Memorias_externas
     * const count = await prisma.memorias_externas.count({
     *   where: {
     *     // ... the filter for the Memorias_externas we want to count
     *   }
     * })
    **/
    count<T extends memorias_externasCountArgs>(
      args?: Subset<T, memorias_externasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Memorias_externasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Memorias_externas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Memorias_externasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Memorias_externasAggregateArgs>(args: Subset<T, Memorias_externasAggregateArgs>): Prisma.PrismaPromise<GetMemorias_externasAggregateType<T>>

    /**
     * Group by Memorias_externas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memorias_externasGroupByArgs} args - Group by arguments.
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
      T extends memorias_externasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: memorias_externasGroupByArgs['orderBy'] }
        : { orderBy?: memorias_externasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, memorias_externasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemorias_externasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the memorias_externas model
   */
  readonly fields: memorias_externasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for memorias_externas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__memorias_externasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the memorias_externas model
   */
  interface memorias_externasFieldRefs {
    readonly id: FieldRef<"memorias_externas", 'Int'>
    readonly name: FieldRef<"memorias_externas", 'String'>
    readonly price: FieldRef<"memorias_externas", 'Decimal'>
    readonly type: FieldRef<"memorias_externas", 'String'>
    readonly interface: FieldRef<"memorias_externas", 'String'>
    readonly capacity: FieldRef<"memorias_externas", 'Int'>
    readonly price_per_gb: FieldRef<"memorias_externas", 'Decimal'>
    readonly color: FieldRef<"memorias_externas", 'String'>
    readonly imagen_url: FieldRef<"memorias_externas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * memorias_externas findUnique
   */
  export type memorias_externasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_externas
     */
    select?: memorias_externasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_externas
     */
    omit?: memorias_externasOmit<ExtArgs> | null
    /**
     * Filter, which memorias_externas to fetch.
     */
    where: memorias_externasWhereUniqueInput
  }

  /**
   * memorias_externas findUniqueOrThrow
   */
  export type memorias_externasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_externas
     */
    select?: memorias_externasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_externas
     */
    omit?: memorias_externasOmit<ExtArgs> | null
    /**
     * Filter, which memorias_externas to fetch.
     */
    where: memorias_externasWhereUniqueInput
  }

  /**
   * memorias_externas findFirst
   */
  export type memorias_externasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_externas
     */
    select?: memorias_externasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_externas
     */
    omit?: memorias_externasOmit<ExtArgs> | null
    /**
     * Filter, which memorias_externas to fetch.
     */
    where?: memorias_externasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memorias_externas to fetch.
     */
    orderBy?: memorias_externasOrderByWithRelationInput | memorias_externasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for memorias_externas.
     */
    cursor?: memorias_externasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memorias_externas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memorias_externas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of memorias_externas.
     */
    distinct?: Memorias_externasScalarFieldEnum | Memorias_externasScalarFieldEnum[]
  }

  /**
   * memorias_externas findFirstOrThrow
   */
  export type memorias_externasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_externas
     */
    select?: memorias_externasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_externas
     */
    omit?: memorias_externasOmit<ExtArgs> | null
    /**
     * Filter, which memorias_externas to fetch.
     */
    where?: memorias_externasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memorias_externas to fetch.
     */
    orderBy?: memorias_externasOrderByWithRelationInput | memorias_externasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for memorias_externas.
     */
    cursor?: memorias_externasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memorias_externas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memorias_externas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of memorias_externas.
     */
    distinct?: Memorias_externasScalarFieldEnum | Memorias_externasScalarFieldEnum[]
  }

  /**
   * memorias_externas findMany
   */
  export type memorias_externasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_externas
     */
    select?: memorias_externasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_externas
     */
    omit?: memorias_externasOmit<ExtArgs> | null
    /**
     * Filter, which memorias_externas to fetch.
     */
    where?: memorias_externasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memorias_externas to fetch.
     */
    orderBy?: memorias_externasOrderByWithRelationInput | memorias_externasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing memorias_externas.
     */
    cursor?: memorias_externasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memorias_externas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memorias_externas.
     */
    skip?: number
    distinct?: Memorias_externasScalarFieldEnum | Memorias_externasScalarFieldEnum[]
  }

  /**
   * memorias_externas create
   */
  export type memorias_externasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_externas
     */
    select?: memorias_externasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_externas
     */
    omit?: memorias_externasOmit<ExtArgs> | null
    /**
     * The data needed to create a memorias_externas.
     */
    data: XOR<memorias_externasCreateInput, memorias_externasUncheckedCreateInput>
  }

  /**
   * memorias_externas createMany
   */
  export type memorias_externasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many memorias_externas.
     */
    data: memorias_externasCreateManyInput | memorias_externasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * memorias_externas createManyAndReturn
   */
  export type memorias_externasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_externas
     */
    select?: memorias_externasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_externas
     */
    omit?: memorias_externasOmit<ExtArgs> | null
    /**
     * The data used to create many memorias_externas.
     */
    data: memorias_externasCreateManyInput | memorias_externasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * memorias_externas update
   */
  export type memorias_externasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_externas
     */
    select?: memorias_externasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_externas
     */
    omit?: memorias_externasOmit<ExtArgs> | null
    /**
     * The data needed to update a memorias_externas.
     */
    data: XOR<memorias_externasUpdateInput, memorias_externasUncheckedUpdateInput>
    /**
     * Choose, which memorias_externas to update.
     */
    where: memorias_externasWhereUniqueInput
  }

  /**
   * memorias_externas updateMany
   */
  export type memorias_externasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update memorias_externas.
     */
    data: XOR<memorias_externasUpdateManyMutationInput, memorias_externasUncheckedUpdateManyInput>
    /**
     * Filter which memorias_externas to update
     */
    where?: memorias_externasWhereInput
    /**
     * Limit how many memorias_externas to update.
     */
    limit?: number
  }

  /**
   * memorias_externas updateManyAndReturn
   */
  export type memorias_externasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_externas
     */
    select?: memorias_externasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_externas
     */
    omit?: memorias_externasOmit<ExtArgs> | null
    /**
     * The data used to update memorias_externas.
     */
    data: XOR<memorias_externasUpdateManyMutationInput, memorias_externasUncheckedUpdateManyInput>
    /**
     * Filter which memorias_externas to update
     */
    where?: memorias_externasWhereInput
    /**
     * Limit how many memorias_externas to update.
     */
    limit?: number
  }

  /**
   * memorias_externas upsert
   */
  export type memorias_externasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_externas
     */
    select?: memorias_externasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_externas
     */
    omit?: memorias_externasOmit<ExtArgs> | null
    /**
     * The filter to search for the memorias_externas to update in case it exists.
     */
    where: memorias_externasWhereUniqueInput
    /**
     * In case the memorias_externas found by the `where` argument doesn't exist, create a new memorias_externas with this data.
     */
    create: XOR<memorias_externasCreateInput, memorias_externasUncheckedCreateInput>
    /**
     * In case the memorias_externas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<memorias_externasUpdateInput, memorias_externasUncheckedUpdateInput>
  }

  /**
   * memorias_externas delete
   */
  export type memorias_externasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_externas
     */
    select?: memorias_externasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_externas
     */
    omit?: memorias_externasOmit<ExtArgs> | null
    /**
     * Filter which memorias_externas to delete.
     */
    where: memorias_externasWhereUniqueInput
  }

  /**
   * memorias_externas deleteMany
   */
  export type memorias_externasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which memorias_externas to delete
     */
    where?: memorias_externasWhereInput
    /**
     * Limit how many memorias_externas to delete.
     */
    limit?: number
  }

  /**
   * memorias_externas without action
   */
  export type memorias_externasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_externas
     */
    select?: memorias_externasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_externas
     */
    omit?: memorias_externasOmit<ExtArgs> | null
  }


  /**
   * Model memorias_internas
   */

  export type AggregateMemorias_internas = {
    _count: Memorias_internasCountAggregateOutputType | null
    _avg: Memorias_internasAvgAggregateOutputType | null
    _sum: Memorias_internasSumAggregateOutputType | null
    _min: Memorias_internasMinAggregateOutputType | null
    _max: Memorias_internasMaxAggregateOutputType | null
  }

  export type Memorias_internasAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    capacity: number | null
    price_per_gb: Decimal | null
    cache: number | null
  }

  export type Memorias_internasSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    capacity: number | null
    price_per_gb: Decimal | null
    cache: number | null
  }

  export type Memorias_internasMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    capacity: number | null
    price_per_gb: Decimal | null
    type: string | null
    cache: number | null
    form_factor: string | null
    interface: string | null
    imagen_url: string | null
  }

  export type Memorias_internasMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    capacity: number | null
    price_per_gb: Decimal | null
    type: string | null
    cache: number | null
    form_factor: string | null
    interface: string | null
    imagen_url: string | null
  }

  export type Memorias_internasCountAggregateOutputType = {
    id: number
    name: number
    price: number
    capacity: number
    price_per_gb: number
    type: number
    cache: number
    form_factor: number
    interface: number
    imagen_url: number
    _all: number
  }


  export type Memorias_internasAvgAggregateInputType = {
    id?: true
    price?: true
    capacity?: true
    price_per_gb?: true
    cache?: true
  }

  export type Memorias_internasSumAggregateInputType = {
    id?: true
    price?: true
    capacity?: true
    price_per_gb?: true
    cache?: true
  }

  export type Memorias_internasMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    capacity?: true
    price_per_gb?: true
    type?: true
    cache?: true
    form_factor?: true
    interface?: true
    imagen_url?: true
  }

  export type Memorias_internasMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    capacity?: true
    price_per_gb?: true
    type?: true
    cache?: true
    form_factor?: true
    interface?: true
    imagen_url?: true
  }

  export type Memorias_internasCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    capacity?: true
    price_per_gb?: true
    type?: true
    cache?: true
    form_factor?: true
    interface?: true
    imagen_url?: true
    _all?: true
  }

  export type Memorias_internasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which memorias_internas to aggregate.
     */
    where?: memorias_internasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memorias_internas to fetch.
     */
    orderBy?: memorias_internasOrderByWithRelationInput | memorias_internasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: memorias_internasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memorias_internas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memorias_internas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned memorias_internas
    **/
    _count?: true | Memorias_internasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Memorias_internasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Memorias_internasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Memorias_internasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Memorias_internasMaxAggregateInputType
  }

  export type GetMemorias_internasAggregateType<T extends Memorias_internasAggregateArgs> = {
        [P in keyof T & keyof AggregateMemorias_internas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemorias_internas[P]>
      : GetScalarType<T[P], AggregateMemorias_internas[P]>
  }




  export type memorias_internasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: memorias_internasWhereInput
    orderBy?: memorias_internasOrderByWithAggregationInput | memorias_internasOrderByWithAggregationInput[]
    by: Memorias_internasScalarFieldEnum[] | Memorias_internasScalarFieldEnum
    having?: memorias_internasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Memorias_internasCountAggregateInputType | true
    _avg?: Memorias_internasAvgAggregateInputType
    _sum?: Memorias_internasSumAggregateInputType
    _min?: Memorias_internasMinAggregateInputType
    _max?: Memorias_internasMaxAggregateInputType
  }

  export type Memorias_internasGroupByOutputType = {
    id: number
    name: string
    price: Decimal | null
    capacity: number | null
    price_per_gb: Decimal | null
    type: string | null
    cache: number | null
    form_factor: string | null
    interface: string | null
    imagen_url: string | null
    _count: Memorias_internasCountAggregateOutputType | null
    _avg: Memorias_internasAvgAggregateOutputType | null
    _sum: Memorias_internasSumAggregateOutputType | null
    _min: Memorias_internasMinAggregateOutputType | null
    _max: Memorias_internasMaxAggregateOutputType | null
  }

  type GetMemorias_internasGroupByPayload<T extends memorias_internasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Memorias_internasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Memorias_internasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Memorias_internasGroupByOutputType[P]>
            : GetScalarType<T[P], Memorias_internasGroupByOutputType[P]>
        }
      >
    >


  export type memorias_internasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    capacity?: boolean
    price_per_gb?: boolean
    type?: boolean
    cache?: boolean
    form_factor?: boolean
    interface?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["memorias_internas"]>

  export type memorias_internasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    capacity?: boolean
    price_per_gb?: boolean
    type?: boolean
    cache?: boolean
    form_factor?: boolean
    interface?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["memorias_internas"]>

  export type memorias_internasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    capacity?: boolean
    price_per_gb?: boolean
    type?: boolean
    cache?: boolean
    form_factor?: boolean
    interface?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["memorias_internas"]>

  export type memorias_internasSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    capacity?: boolean
    price_per_gb?: boolean
    type?: boolean
    cache?: boolean
    form_factor?: boolean
    interface?: boolean
    imagen_url?: boolean
  }

  export type memorias_internasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "capacity" | "price_per_gb" | "type" | "cache" | "form_factor" | "interface" | "imagen_url", ExtArgs["result"]["memorias_internas"]>

  export type $memorias_internasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "memorias_internas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: Prisma.Decimal | null
      capacity: number | null
      price_per_gb: Prisma.Decimal | null
      type: string | null
      cache: number | null
      form_factor: string | null
      interface: string | null
      imagen_url: string | null
    }, ExtArgs["result"]["memorias_internas"]>
    composites: {}
  }

  type memorias_internasGetPayload<S extends boolean | null | undefined | memorias_internasDefaultArgs> = $Result.GetResult<Prisma.$memorias_internasPayload, S>

  type memorias_internasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<memorias_internasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Memorias_internasCountAggregateInputType | true
    }

  export interface memorias_internasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['memorias_internas'], meta: { name: 'memorias_internas' } }
    /**
     * Find zero or one Memorias_internas that matches the filter.
     * @param {memorias_internasFindUniqueArgs} args - Arguments to find a Memorias_internas
     * @example
     * // Get one Memorias_internas
     * const memorias_internas = await prisma.memorias_internas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends memorias_internasFindUniqueArgs>(args: SelectSubset<T, memorias_internasFindUniqueArgs<ExtArgs>>): Prisma__memorias_internasClient<$Result.GetResult<Prisma.$memorias_internasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Memorias_internas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {memorias_internasFindUniqueOrThrowArgs} args - Arguments to find a Memorias_internas
     * @example
     * // Get one Memorias_internas
     * const memorias_internas = await prisma.memorias_internas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends memorias_internasFindUniqueOrThrowArgs>(args: SelectSubset<T, memorias_internasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__memorias_internasClient<$Result.GetResult<Prisma.$memorias_internasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Memorias_internas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memorias_internasFindFirstArgs} args - Arguments to find a Memorias_internas
     * @example
     * // Get one Memorias_internas
     * const memorias_internas = await prisma.memorias_internas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends memorias_internasFindFirstArgs>(args?: SelectSubset<T, memorias_internasFindFirstArgs<ExtArgs>>): Prisma__memorias_internasClient<$Result.GetResult<Prisma.$memorias_internasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Memorias_internas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memorias_internasFindFirstOrThrowArgs} args - Arguments to find a Memorias_internas
     * @example
     * // Get one Memorias_internas
     * const memorias_internas = await prisma.memorias_internas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends memorias_internasFindFirstOrThrowArgs>(args?: SelectSubset<T, memorias_internasFindFirstOrThrowArgs<ExtArgs>>): Prisma__memorias_internasClient<$Result.GetResult<Prisma.$memorias_internasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Memorias_internas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memorias_internasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memorias_internas
     * const memorias_internas = await prisma.memorias_internas.findMany()
     * 
     * // Get first 10 Memorias_internas
     * const memorias_internas = await prisma.memorias_internas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memorias_internasWithIdOnly = await prisma.memorias_internas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends memorias_internasFindManyArgs>(args?: SelectSubset<T, memorias_internasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memorias_internasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Memorias_internas.
     * @param {memorias_internasCreateArgs} args - Arguments to create a Memorias_internas.
     * @example
     * // Create one Memorias_internas
     * const Memorias_internas = await prisma.memorias_internas.create({
     *   data: {
     *     // ... data to create a Memorias_internas
     *   }
     * })
     * 
     */
    create<T extends memorias_internasCreateArgs>(args: SelectSubset<T, memorias_internasCreateArgs<ExtArgs>>): Prisma__memorias_internasClient<$Result.GetResult<Prisma.$memorias_internasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Memorias_internas.
     * @param {memorias_internasCreateManyArgs} args - Arguments to create many Memorias_internas.
     * @example
     * // Create many Memorias_internas
     * const memorias_internas = await prisma.memorias_internas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends memorias_internasCreateManyArgs>(args?: SelectSubset<T, memorias_internasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Memorias_internas and returns the data saved in the database.
     * @param {memorias_internasCreateManyAndReturnArgs} args - Arguments to create many Memorias_internas.
     * @example
     * // Create many Memorias_internas
     * const memorias_internas = await prisma.memorias_internas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Memorias_internas and only return the `id`
     * const memorias_internasWithIdOnly = await prisma.memorias_internas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends memorias_internasCreateManyAndReturnArgs>(args?: SelectSubset<T, memorias_internasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memorias_internasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Memorias_internas.
     * @param {memorias_internasDeleteArgs} args - Arguments to delete one Memorias_internas.
     * @example
     * // Delete one Memorias_internas
     * const Memorias_internas = await prisma.memorias_internas.delete({
     *   where: {
     *     // ... filter to delete one Memorias_internas
     *   }
     * })
     * 
     */
    delete<T extends memorias_internasDeleteArgs>(args: SelectSubset<T, memorias_internasDeleteArgs<ExtArgs>>): Prisma__memorias_internasClient<$Result.GetResult<Prisma.$memorias_internasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Memorias_internas.
     * @param {memorias_internasUpdateArgs} args - Arguments to update one Memorias_internas.
     * @example
     * // Update one Memorias_internas
     * const memorias_internas = await prisma.memorias_internas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends memorias_internasUpdateArgs>(args: SelectSubset<T, memorias_internasUpdateArgs<ExtArgs>>): Prisma__memorias_internasClient<$Result.GetResult<Prisma.$memorias_internasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Memorias_internas.
     * @param {memorias_internasDeleteManyArgs} args - Arguments to filter Memorias_internas to delete.
     * @example
     * // Delete a few Memorias_internas
     * const { count } = await prisma.memorias_internas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends memorias_internasDeleteManyArgs>(args?: SelectSubset<T, memorias_internasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memorias_internas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memorias_internasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memorias_internas
     * const memorias_internas = await prisma.memorias_internas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends memorias_internasUpdateManyArgs>(args: SelectSubset<T, memorias_internasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memorias_internas and returns the data updated in the database.
     * @param {memorias_internasUpdateManyAndReturnArgs} args - Arguments to update many Memorias_internas.
     * @example
     * // Update many Memorias_internas
     * const memorias_internas = await prisma.memorias_internas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Memorias_internas and only return the `id`
     * const memorias_internasWithIdOnly = await prisma.memorias_internas.updateManyAndReturn({
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
    updateManyAndReturn<T extends memorias_internasUpdateManyAndReturnArgs>(args: SelectSubset<T, memorias_internasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memorias_internasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Memorias_internas.
     * @param {memorias_internasUpsertArgs} args - Arguments to update or create a Memorias_internas.
     * @example
     * // Update or create a Memorias_internas
     * const memorias_internas = await prisma.memorias_internas.upsert({
     *   create: {
     *     // ... data to create a Memorias_internas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Memorias_internas we want to update
     *   }
     * })
     */
    upsert<T extends memorias_internasUpsertArgs>(args: SelectSubset<T, memorias_internasUpsertArgs<ExtArgs>>): Prisma__memorias_internasClient<$Result.GetResult<Prisma.$memorias_internasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Memorias_internas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memorias_internasCountArgs} args - Arguments to filter Memorias_internas to count.
     * @example
     * // Count the number of Memorias_internas
     * const count = await prisma.memorias_internas.count({
     *   where: {
     *     // ... the filter for the Memorias_internas we want to count
     *   }
     * })
    **/
    count<T extends memorias_internasCountArgs>(
      args?: Subset<T, memorias_internasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Memorias_internasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Memorias_internas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Memorias_internasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Memorias_internasAggregateArgs>(args: Subset<T, Memorias_internasAggregateArgs>): Prisma.PrismaPromise<GetMemorias_internasAggregateType<T>>

    /**
     * Group by Memorias_internas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memorias_internasGroupByArgs} args - Group by arguments.
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
      T extends memorias_internasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: memorias_internasGroupByArgs['orderBy'] }
        : { orderBy?: memorias_internasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, memorias_internasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemorias_internasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the memorias_internas model
   */
  readonly fields: memorias_internasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for memorias_internas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__memorias_internasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the memorias_internas model
   */
  interface memorias_internasFieldRefs {
    readonly id: FieldRef<"memorias_internas", 'Int'>
    readonly name: FieldRef<"memorias_internas", 'String'>
    readonly price: FieldRef<"memorias_internas", 'Decimal'>
    readonly capacity: FieldRef<"memorias_internas", 'Int'>
    readonly price_per_gb: FieldRef<"memorias_internas", 'Decimal'>
    readonly type: FieldRef<"memorias_internas", 'String'>
    readonly cache: FieldRef<"memorias_internas", 'Int'>
    readonly form_factor: FieldRef<"memorias_internas", 'String'>
    readonly interface: FieldRef<"memorias_internas", 'String'>
    readonly imagen_url: FieldRef<"memorias_internas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * memorias_internas findUnique
   */
  export type memorias_internasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_internas
     */
    select?: memorias_internasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_internas
     */
    omit?: memorias_internasOmit<ExtArgs> | null
    /**
     * Filter, which memorias_internas to fetch.
     */
    where: memorias_internasWhereUniqueInput
  }

  /**
   * memorias_internas findUniqueOrThrow
   */
  export type memorias_internasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_internas
     */
    select?: memorias_internasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_internas
     */
    omit?: memorias_internasOmit<ExtArgs> | null
    /**
     * Filter, which memorias_internas to fetch.
     */
    where: memorias_internasWhereUniqueInput
  }

  /**
   * memorias_internas findFirst
   */
  export type memorias_internasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_internas
     */
    select?: memorias_internasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_internas
     */
    omit?: memorias_internasOmit<ExtArgs> | null
    /**
     * Filter, which memorias_internas to fetch.
     */
    where?: memorias_internasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memorias_internas to fetch.
     */
    orderBy?: memorias_internasOrderByWithRelationInput | memorias_internasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for memorias_internas.
     */
    cursor?: memorias_internasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memorias_internas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memorias_internas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of memorias_internas.
     */
    distinct?: Memorias_internasScalarFieldEnum | Memorias_internasScalarFieldEnum[]
  }

  /**
   * memorias_internas findFirstOrThrow
   */
  export type memorias_internasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_internas
     */
    select?: memorias_internasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_internas
     */
    omit?: memorias_internasOmit<ExtArgs> | null
    /**
     * Filter, which memorias_internas to fetch.
     */
    where?: memorias_internasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memorias_internas to fetch.
     */
    orderBy?: memorias_internasOrderByWithRelationInput | memorias_internasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for memorias_internas.
     */
    cursor?: memorias_internasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memorias_internas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memorias_internas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of memorias_internas.
     */
    distinct?: Memorias_internasScalarFieldEnum | Memorias_internasScalarFieldEnum[]
  }

  /**
   * memorias_internas findMany
   */
  export type memorias_internasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_internas
     */
    select?: memorias_internasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_internas
     */
    omit?: memorias_internasOmit<ExtArgs> | null
    /**
     * Filter, which memorias_internas to fetch.
     */
    where?: memorias_internasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memorias_internas to fetch.
     */
    orderBy?: memorias_internasOrderByWithRelationInput | memorias_internasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing memorias_internas.
     */
    cursor?: memorias_internasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memorias_internas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memorias_internas.
     */
    skip?: number
    distinct?: Memorias_internasScalarFieldEnum | Memorias_internasScalarFieldEnum[]
  }

  /**
   * memorias_internas create
   */
  export type memorias_internasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_internas
     */
    select?: memorias_internasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_internas
     */
    omit?: memorias_internasOmit<ExtArgs> | null
    /**
     * The data needed to create a memorias_internas.
     */
    data: XOR<memorias_internasCreateInput, memorias_internasUncheckedCreateInput>
  }

  /**
   * memorias_internas createMany
   */
  export type memorias_internasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many memorias_internas.
     */
    data: memorias_internasCreateManyInput | memorias_internasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * memorias_internas createManyAndReturn
   */
  export type memorias_internasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_internas
     */
    select?: memorias_internasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_internas
     */
    omit?: memorias_internasOmit<ExtArgs> | null
    /**
     * The data used to create many memorias_internas.
     */
    data: memorias_internasCreateManyInput | memorias_internasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * memorias_internas update
   */
  export type memorias_internasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_internas
     */
    select?: memorias_internasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_internas
     */
    omit?: memorias_internasOmit<ExtArgs> | null
    /**
     * The data needed to update a memorias_internas.
     */
    data: XOR<memorias_internasUpdateInput, memorias_internasUncheckedUpdateInput>
    /**
     * Choose, which memorias_internas to update.
     */
    where: memorias_internasWhereUniqueInput
  }

  /**
   * memorias_internas updateMany
   */
  export type memorias_internasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update memorias_internas.
     */
    data: XOR<memorias_internasUpdateManyMutationInput, memorias_internasUncheckedUpdateManyInput>
    /**
     * Filter which memorias_internas to update
     */
    where?: memorias_internasWhereInput
    /**
     * Limit how many memorias_internas to update.
     */
    limit?: number
  }

  /**
   * memorias_internas updateManyAndReturn
   */
  export type memorias_internasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_internas
     */
    select?: memorias_internasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_internas
     */
    omit?: memorias_internasOmit<ExtArgs> | null
    /**
     * The data used to update memorias_internas.
     */
    data: XOR<memorias_internasUpdateManyMutationInput, memorias_internasUncheckedUpdateManyInput>
    /**
     * Filter which memorias_internas to update
     */
    where?: memorias_internasWhereInput
    /**
     * Limit how many memorias_internas to update.
     */
    limit?: number
  }

  /**
   * memorias_internas upsert
   */
  export type memorias_internasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_internas
     */
    select?: memorias_internasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_internas
     */
    omit?: memorias_internasOmit<ExtArgs> | null
    /**
     * The filter to search for the memorias_internas to update in case it exists.
     */
    where: memorias_internasWhereUniqueInput
    /**
     * In case the memorias_internas found by the `where` argument doesn't exist, create a new memorias_internas with this data.
     */
    create: XOR<memorias_internasCreateInput, memorias_internasUncheckedCreateInput>
    /**
     * In case the memorias_internas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<memorias_internasUpdateInput, memorias_internasUncheckedUpdateInput>
  }

  /**
   * memorias_internas delete
   */
  export type memorias_internasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_internas
     */
    select?: memorias_internasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_internas
     */
    omit?: memorias_internasOmit<ExtArgs> | null
    /**
     * Filter which memorias_internas to delete.
     */
    where: memorias_internasWhereUniqueInput
  }

  /**
   * memorias_internas deleteMany
   */
  export type memorias_internasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which memorias_internas to delete
     */
    where?: memorias_internasWhereInput
    /**
     * Limit how many memorias_internas to delete.
     */
    limit?: number
  }

  /**
   * memorias_internas without action
   */
  export type memorias_internasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memorias_internas
     */
    select?: memorias_internasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memorias_internas
     */
    omit?: memorias_internasOmit<ExtArgs> | null
  }


  /**
   * Model mothers
   */

  export type AggregateMothers = {
    _count: MothersCountAggregateOutputType | null
    _avg: MothersAvgAggregateOutputType | null
    _sum: MothersSumAggregateOutputType | null
    _min: MothersMinAggregateOutputType | null
    _max: MothersMaxAggregateOutputType | null
  }

  export type MothersAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    max_memory: number | null
    memory_slots: number | null
  }

  export type MothersSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    max_memory: number | null
    memory_slots: number | null
  }

  export type MothersMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    socket: string | null
    form_factor: string | null
    max_memory: number | null
    memory_slots: number | null
    color: string | null
    imagen_url: string | null
  }

  export type MothersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    socket: string | null
    form_factor: string | null
    max_memory: number | null
    memory_slots: number | null
    color: string | null
    imagen_url: string | null
  }

  export type MothersCountAggregateOutputType = {
    id: number
    name: number
    price: number
    socket: number
    form_factor: number
    max_memory: number
    memory_slots: number
    color: number
    imagen_url: number
    _all: number
  }


  export type MothersAvgAggregateInputType = {
    id?: true
    price?: true
    max_memory?: true
    memory_slots?: true
  }

  export type MothersSumAggregateInputType = {
    id?: true
    price?: true
    max_memory?: true
    memory_slots?: true
  }

  export type MothersMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    socket?: true
    form_factor?: true
    max_memory?: true
    memory_slots?: true
    color?: true
    imagen_url?: true
  }

  export type MothersMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    socket?: true
    form_factor?: true
    max_memory?: true
    memory_slots?: true
    color?: true
    imagen_url?: true
  }

  export type MothersCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    socket?: true
    form_factor?: true
    max_memory?: true
    memory_slots?: true
    color?: true
    imagen_url?: true
    _all?: true
  }

  export type MothersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mothers to aggregate.
     */
    where?: mothersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mothers to fetch.
     */
    orderBy?: mothersOrderByWithRelationInput | mothersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mothersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mothers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mothers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mothers
    **/
    _count?: true | MothersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MothersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MothersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MothersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MothersMaxAggregateInputType
  }

  export type GetMothersAggregateType<T extends MothersAggregateArgs> = {
        [P in keyof T & keyof AggregateMothers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMothers[P]>
      : GetScalarType<T[P], AggregateMothers[P]>
  }




  export type mothersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mothersWhereInput
    orderBy?: mothersOrderByWithAggregationInput | mothersOrderByWithAggregationInput[]
    by: MothersScalarFieldEnum[] | MothersScalarFieldEnum
    having?: mothersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MothersCountAggregateInputType | true
    _avg?: MothersAvgAggregateInputType
    _sum?: MothersSumAggregateInputType
    _min?: MothersMinAggregateInputType
    _max?: MothersMaxAggregateInputType
  }

  export type MothersGroupByOutputType = {
    id: number
    name: string
    price: Decimal | null
    socket: string | null
    form_factor: string | null
    max_memory: number | null
    memory_slots: number | null
    color: string | null
    imagen_url: string | null
    _count: MothersCountAggregateOutputType | null
    _avg: MothersAvgAggregateOutputType | null
    _sum: MothersSumAggregateOutputType | null
    _min: MothersMinAggregateOutputType | null
    _max: MothersMaxAggregateOutputType | null
  }

  type GetMothersGroupByPayload<T extends mothersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MothersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MothersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MothersGroupByOutputType[P]>
            : GetScalarType<T[P], MothersGroupByOutputType[P]>
        }
      >
    >


  export type mothersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    socket?: boolean
    form_factor?: boolean
    max_memory?: boolean
    memory_slots?: boolean
    color?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["mothers"]>

  export type mothersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    socket?: boolean
    form_factor?: boolean
    max_memory?: boolean
    memory_slots?: boolean
    color?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["mothers"]>

  export type mothersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    socket?: boolean
    form_factor?: boolean
    max_memory?: boolean
    memory_slots?: boolean
    color?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["mothers"]>

  export type mothersSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    socket?: boolean
    form_factor?: boolean
    max_memory?: boolean
    memory_slots?: boolean
    color?: boolean
    imagen_url?: boolean
  }

  export type mothersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "socket" | "form_factor" | "max_memory" | "memory_slots" | "color" | "imagen_url", ExtArgs["result"]["mothers"]>

  export type $mothersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mothers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: Prisma.Decimal | null
      socket: string | null
      form_factor: string | null
      max_memory: number | null
      memory_slots: number | null
      color: string | null
      imagen_url: string | null
    }, ExtArgs["result"]["mothers"]>
    composites: {}
  }

  type mothersGetPayload<S extends boolean | null | undefined | mothersDefaultArgs> = $Result.GetResult<Prisma.$mothersPayload, S>

  type mothersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mothersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MothersCountAggregateInputType | true
    }

  export interface mothersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mothers'], meta: { name: 'mothers' } }
    /**
     * Find zero or one Mothers that matches the filter.
     * @param {mothersFindUniqueArgs} args - Arguments to find a Mothers
     * @example
     * // Get one Mothers
     * const mothers = await prisma.mothers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mothersFindUniqueArgs>(args: SelectSubset<T, mothersFindUniqueArgs<ExtArgs>>): Prisma__mothersClient<$Result.GetResult<Prisma.$mothersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mothers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mothersFindUniqueOrThrowArgs} args - Arguments to find a Mothers
     * @example
     * // Get one Mothers
     * const mothers = await prisma.mothers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mothersFindUniqueOrThrowArgs>(args: SelectSubset<T, mothersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mothersClient<$Result.GetResult<Prisma.$mothersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mothers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mothersFindFirstArgs} args - Arguments to find a Mothers
     * @example
     * // Get one Mothers
     * const mothers = await prisma.mothers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mothersFindFirstArgs>(args?: SelectSubset<T, mothersFindFirstArgs<ExtArgs>>): Prisma__mothersClient<$Result.GetResult<Prisma.$mothersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mothers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mothersFindFirstOrThrowArgs} args - Arguments to find a Mothers
     * @example
     * // Get one Mothers
     * const mothers = await prisma.mothers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mothersFindFirstOrThrowArgs>(args?: SelectSubset<T, mothersFindFirstOrThrowArgs<ExtArgs>>): Prisma__mothersClient<$Result.GetResult<Prisma.$mothersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mothers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mothersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mothers
     * const mothers = await prisma.mothers.findMany()
     * 
     * // Get first 10 Mothers
     * const mothers = await prisma.mothers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mothersWithIdOnly = await prisma.mothers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mothersFindManyArgs>(args?: SelectSubset<T, mothersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mothersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mothers.
     * @param {mothersCreateArgs} args - Arguments to create a Mothers.
     * @example
     * // Create one Mothers
     * const Mothers = await prisma.mothers.create({
     *   data: {
     *     // ... data to create a Mothers
     *   }
     * })
     * 
     */
    create<T extends mothersCreateArgs>(args: SelectSubset<T, mothersCreateArgs<ExtArgs>>): Prisma__mothersClient<$Result.GetResult<Prisma.$mothersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mothers.
     * @param {mothersCreateManyArgs} args - Arguments to create many Mothers.
     * @example
     * // Create many Mothers
     * const mothers = await prisma.mothers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mothersCreateManyArgs>(args?: SelectSubset<T, mothersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mothers and returns the data saved in the database.
     * @param {mothersCreateManyAndReturnArgs} args - Arguments to create many Mothers.
     * @example
     * // Create many Mothers
     * const mothers = await prisma.mothers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mothers and only return the `id`
     * const mothersWithIdOnly = await prisma.mothers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mothersCreateManyAndReturnArgs>(args?: SelectSubset<T, mothersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mothersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mothers.
     * @param {mothersDeleteArgs} args - Arguments to delete one Mothers.
     * @example
     * // Delete one Mothers
     * const Mothers = await prisma.mothers.delete({
     *   where: {
     *     // ... filter to delete one Mothers
     *   }
     * })
     * 
     */
    delete<T extends mothersDeleteArgs>(args: SelectSubset<T, mothersDeleteArgs<ExtArgs>>): Prisma__mothersClient<$Result.GetResult<Prisma.$mothersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mothers.
     * @param {mothersUpdateArgs} args - Arguments to update one Mothers.
     * @example
     * // Update one Mothers
     * const mothers = await prisma.mothers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mothersUpdateArgs>(args: SelectSubset<T, mothersUpdateArgs<ExtArgs>>): Prisma__mothersClient<$Result.GetResult<Prisma.$mothersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mothers.
     * @param {mothersDeleteManyArgs} args - Arguments to filter Mothers to delete.
     * @example
     * // Delete a few Mothers
     * const { count } = await prisma.mothers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mothersDeleteManyArgs>(args?: SelectSubset<T, mothersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mothers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mothersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mothers
     * const mothers = await prisma.mothers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mothersUpdateManyArgs>(args: SelectSubset<T, mothersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mothers and returns the data updated in the database.
     * @param {mothersUpdateManyAndReturnArgs} args - Arguments to update many Mothers.
     * @example
     * // Update many Mothers
     * const mothers = await prisma.mothers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mothers and only return the `id`
     * const mothersWithIdOnly = await prisma.mothers.updateManyAndReturn({
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
    updateManyAndReturn<T extends mothersUpdateManyAndReturnArgs>(args: SelectSubset<T, mothersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mothersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mothers.
     * @param {mothersUpsertArgs} args - Arguments to update or create a Mothers.
     * @example
     * // Update or create a Mothers
     * const mothers = await prisma.mothers.upsert({
     *   create: {
     *     // ... data to create a Mothers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mothers we want to update
     *   }
     * })
     */
    upsert<T extends mothersUpsertArgs>(args: SelectSubset<T, mothersUpsertArgs<ExtArgs>>): Prisma__mothersClient<$Result.GetResult<Prisma.$mothersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mothers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mothersCountArgs} args - Arguments to filter Mothers to count.
     * @example
     * // Count the number of Mothers
     * const count = await prisma.mothers.count({
     *   where: {
     *     // ... the filter for the Mothers we want to count
     *   }
     * })
    **/
    count<T extends mothersCountArgs>(
      args?: Subset<T, mothersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MothersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mothers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MothersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MothersAggregateArgs>(args: Subset<T, MothersAggregateArgs>): Prisma.PrismaPromise<GetMothersAggregateType<T>>

    /**
     * Group by Mothers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mothersGroupByArgs} args - Group by arguments.
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
      T extends mothersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mothersGroupByArgs['orderBy'] }
        : { orderBy?: mothersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mothersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMothersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mothers model
   */
  readonly fields: mothersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mothers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mothersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the mothers model
   */
  interface mothersFieldRefs {
    readonly id: FieldRef<"mothers", 'Int'>
    readonly name: FieldRef<"mothers", 'String'>
    readonly price: FieldRef<"mothers", 'Decimal'>
    readonly socket: FieldRef<"mothers", 'String'>
    readonly form_factor: FieldRef<"mothers", 'String'>
    readonly max_memory: FieldRef<"mothers", 'Int'>
    readonly memory_slots: FieldRef<"mothers", 'Int'>
    readonly color: FieldRef<"mothers", 'String'>
    readonly imagen_url: FieldRef<"mothers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mothers findUnique
   */
  export type mothersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mothers
     */
    select?: mothersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mothers
     */
    omit?: mothersOmit<ExtArgs> | null
    /**
     * Filter, which mothers to fetch.
     */
    where: mothersWhereUniqueInput
  }

  /**
   * mothers findUniqueOrThrow
   */
  export type mothersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mothers
     */
    select?: mothersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mothers
     */
    omit?: mothersOmit<ExtArgs> | null
    /**
     * Filter, which mothers to fetch.
     */
    where: mothersWhereUniqueInput
  }

  /**
   * mothers findFirst
   */
  export type mothersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mothers
     */
    select?: mothersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mothers
     */
    omit?: mothersOmit<ExtArgs> | null
    /**
     * Filter, which mothers to fetch.
     */
    where?: mothersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mothers to fetch.
     */
    orderBy?: mothersOrderByWithRelationInput | mothersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mothers.
     */
    cursor?: mothersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mothers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mothers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mothers.
     */
    distinct?: MothersScalarFieldEnum | MothersScalarFieldEnum[]
  }

  /**
   * mothers findFirstOrThrow
   */
  export type mothersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mothers
     */
    select?: mothersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mothers
     */
    omit?: mothersOmit<ExtArgs> | null
    /**
     * Filter, which mothers to fetch.
     */
    where?: mothersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mothers to fetch.
     */
    orderBy?: mothersOrderByWithRelationInput | mothersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mothers.
     */
    cursor?: mothersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mothers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mothers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mothers.
     */
    distinct?: MothersScalarFieldEnum | MothersScalarFieldEnum[]
  }

  /**
   * mothers findMany
   */
  export type mothersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mothers
     */
    select?: mothersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mothers
     */
    omit?: mothersOmit<ExtArgs> | null
    /**
     * Filter, which mothers to fetch.
     */
    where?: mothersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mothers to fetch.
     */
    orderBy?: mothersOrderByWithRelationInput | mothersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mothers.
     */
    cursor?: mothersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mothers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mothers.
     */
    skip?: number
    distinct?: MothersScalarFieldEnum | MothersScalarFieldEnum[]
  }

  /**
   * mothers create
   */
  export type mothersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mothers
     */
    select?: mothersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mothers
     */
    omit?: mothersOmit<ExtArgs> | null
    /**
     * The data needed to create a mothers.
     */
    data: XOR<mothersCreateInput, mothersUncheckedCreateInput>
  }

  /**
   * mothers createMany
   */
  export type mothersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mothers.
     */
    data: mothersCreateManyInput | mothersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mothers createManyAndReturn
   */
  export type mothersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mothers
     */
    select?: mothersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mothers
     */
    omit?: mothersOmit<ExtArgs> | null
    /**
     * The data used to create many mothers.
     */
    data: mothersCreateManyInput | mothersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mothers update
   */
  export type mothersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mothers
     */
    select?: mothersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mothers
     */
    omit?: mothersOmit<ExtArgs> | null
    /**
     * The data needed to update a mothers.
     */
    data: XOR<mothersUpdateInput, mothersUncheckedUpdateInput>
    /**
     * Choose, which mothers to update.
     */
    where: mothersWhereUniqueInput
  }

  /**
   * mothers updateMany
   */
  export type mothersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mothers.
     */
    data: XOR<mothersUpdateManyMutationInput, mothersUncheckedUpdateManyInput>
    /**
     * Filter which mothers to update
     */
    where?: mothersWhereInput
    /**
     * Limit how many mothers to update.
     */
    limit?: number
  }

  /**
   * mothers updateManyAndReturn
   */
  export type mothersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mothers
     */
    select?: mothersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mothers
     */
    omit?: mothersOmit<ExtArgs> | null
    /**
     * The data used to update mothers.
     */
    data: XOR<mothersUpdateManyMutationInput, mothersUncheckedUpdateManyInput>
    /**
     * Filter which mothers to update
     */
    where?: mothersWhereInput
    /**
     * Limit how many mothers to update.
     */
    limit?: number
  }

  /**
   * mothers upsert
   */
  export type mothersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mothers
     */
    select?: mothersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mothers
     */
    omit?: mothersOmit<ExtArgs> | null
    /**
     * The filter to search for the mothers to update in case it exists.
     */
    where: mothersWhereUniqueInput
    /**
     * In case the mothers found by the `where` argument doesn't exist, create a new mothers with this data.
     */
    create: XOR<mothersCreateInput, mothersUncheckedCreateInput>
    /**
     * In case the mothers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mothersUpdateInput, mothersUncheckedUpdateInput>
  }

  /**
   * mothers delete
   */
  export type mothersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mothers
     */
    select?: mothersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mothers
     */
    omit?: mothersOmit<ExtArgs> | null
    /**
     * Filter which mothers to delete.
     */
    where: mothersWhereUniqueInput
  }

  /**
   * mothers deleteMany
   */
  export type mothersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mothers to delete
     */
    where?: mothersWhereInput
    /**
     * Limit how many mothers to delete.
     */
    limit?: number
  }

  /**
   * mothers without action
   */
  export type mothersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mothers
     */
    select?: mothersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mothers
     */
    omit?: mothersOmit<ExtArgs> | null
  }


  /**
   * Model rams
   */

  export type AggregateRams = {
    _count: RamsCountAggregateOutputType | null
    _avg: RamsAvgAggregateOutputType | null
    _sum: RamsSumAggregateOutputType | null
    _min: RamsMinAggregateOutputType | null
    _max: RamsMaxAggregateOutputType | null
  }

  export type RamsAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    speed_channels: number | null
    speed_mhz: number | null
    modules_qty: number | null
    module_capacity: number | null
    price_per_gb: Decimal | null
    first_word_latency: number | null
    cas_latency: number | null
  }

  export type RamsSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    speed_channels: number | null
    speed_mhz: number | null
    modules_qty: number | null
    module_capacity: number | null
    price_per_gb: Decimal | null
    first_word_latency: number | null
    cas_latency: number | null
  }

  export type RamsMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    speed_channels: number | null
    speed_mhz: number | null
    modules_qty: number | null
    module_capacity: number | null
    price_per_gb: Decimal | null
    color: string | null
    first_word_latency: number | null
    cas_latency: number | null
    imagen_url: string | null
  }

  export type RamsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    speed_channels: number | null
    speed_mhz: number | null
    modules_qty: number | null
    module_capacity: number | null
    price_per_gb: Decimal | null
    color: string | null
    first_word_latency: number | null
    cas_latency: number | null
    imagen_url: string | null
  }

  export type RamsCountAggregateOutputType = {
    id: number
    name: number
    price: number
    speed_channels: number
    speed_mhz: number
    modules_qty: number
    module_capacity: number
    price_per_gb: number
    color: number
    first_word_latency: number
    cas_latency: number
    imagen_url: number
    _all: number
  }


  export type RamsAvgAggregateInputType = {
    id?: true
    price?: true
    speed_channels?: true
    speed_mhz?: true
    modules_qty?: true
    module_capacity?: true
    price_per_gb?: true
    first_word_latency?: true
    cas_latency?: true
  }

  export type RamsSumAggregateInputType = {
    id?: true
    price?: true
    speed_channels?: true
    speed_mhz?: true
    modules_qty?: true
    module_capacity?: true
    price_per_gb?: true
    first_word_latency?: true
    cas_latency?: true
  }

  export type RamsMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    speed_channels?: true
    speed_mhz?: true
    modules_qty?: true
    module_capacity?: true
    price_per_gb?: true
    color?: true
    first_word_latency?: true
    cas_latency?: true
    imagen_url?: true
  }

  export type RamsMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    speed_channels?: true
    speed_mhz?: true
    modules_qty?: true
    module_capacity?: true
    price_per_gb?: true
    color?: true
    first_word_latency?: true
    cas_latency?: true
    imagen_url?: true
  }

  export type RamsCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    speed_channels?: true
    speed_mhz?: true
    modules_qty?: true
    module_capacity?: true
    price_per_gb?: true
    color?: true
    first_word_latency?: true
    cas_latency?: true
    imagen_url?: true
    _all?: true
  }

  export type RamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rams to aggregate.
     */
    where?: ramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rams to fetch.
     */
    orderBy?: ramsOrderByWithRelationInput | ramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rams
    **/
    _count?: true | RamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RamsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RamsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RamsMaxAggregateInputType
  }

  export type GetRamsAggregateType<T extends RamsAggregateArgs> = {
        [P in keyof T & keyof AggregateRams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRams[P]>
      : GetScalarType<T[P], AggregateRams[P]>
  }




  export type ramsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ramsWhereInput
    orderBy?: ramsOrderByWithAggregationInput | ramsOrderByWithAggregationInput[]
    by: RamsScalarFieldEnum[] | RamsScalarFieldEnum
    having?: ramsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RamsCountAggregateInputType | true
    _avg?: RamsAvgAggregateInputType
    _sum?: RamsSumAggregateInputType
    _min?: RamsMinAggregateInputType
    _max?: RamsMaxAggregateInputType
  }

  export type RamsGroupByOutputType = {
    id: number
    name: string
    price: Decimal | null
    speed_channels: number | null
    speed_mhz: number | null
    modules_qty: number | null
    module_capacity: number | null
    price_per_gb: Decimal | null
    color: string | null
    first_word_latency: number | null
    cas_latency: number | null
    imagen_url: string | null
    _count: RamsCountAggregateOutputType | null
    _avg: RamsAvgAggregateOutputType | null
    _sum: RamsSumAggregateOutputType | null
    _min: RamsMinAggregateOutputType | null
    _max: RamsMaxAggregateOutputType | null
  }

  type GetRamsGroupByPayload<T extends ramsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RamsGroupByOutputType[P]>
            : GetScalarType<T[P], RamsGroupByOutputType[P]>
        }
      >
    >


  export type ramsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    speed_channels?: boolean
    speed_mhz?: boolean
    modules_qty?: boolean
    module_capacity?: boolean
    price_per_gb?: boolean
    color?: boolean
    first_word_latency?: boolean
    cas_latency?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["rams"]>

  export type ramsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    speed_channels?: boolean
    speed_mhz?: boolean
    modules_qty?: boolean
    module_capacity?: boolean
    price_per_gb?: boolean
    color?: boolean
    first_word_latency?: boolean
    cas_latency?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["rams"]>

  export type ramsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    speed_channels?: boolean
    speed_mhz?: boolean
    modules_qty?: boolean
    module_capacity?: boolean
    price_per_gb?: boolean
    color?: boolean
    first_word_latency?: boolean
    cas_latency?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["rams"]>

  export type ramsSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    speed_channels?: boolean
    speed_mhz?: boolean
    modules_qty?: boolean
    module_capacity?: boolean
    price_per_gb?: boolean
    color?: boolean
    first_word_latency?: boolean
    cas_latency?: boolean
    imagen_url?: boolean
  }

  export type ramsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "speed_channels" | "speed_mhz" | "modules_qty" | "module_capacity" | "price_per_gb" | "color" | "first_word_latency" | "cas_latency" | "imagen_url", ExtArgs["result"]["rams"]>

  export type $ramsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rams"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: Prisma.Decimal | null
      speed_channels: number | null
      speed_mhz: number | null
      modules_qty: number | null
      module_capacity: number | null
      price_per_gb: Prisma.Decimal | null
      color: string | null
      first_word_latency: number | null
      cas_latency: number | null
      imagen_url: string | null
    }, ExtArgs["result"]["rams"]>
    composites: {}
  }

  type ramsGetPayload<S extends boolean | null | undefined | ramsDefaultArgs> = $Result.GetResult<Prisma.$ramsPayload, S>

  type ramsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ramsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RamsCountAggregateInputType | true
    }

  export interface ramsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rams'], meta: { name: 'rams' } }
    /**
     * Find zero or one Rams that matches the filter.
     * @param {ramsFindUniqueArgs} args - Arguments to find a Rams
     * @example
     * // Get one Rams
     * const rams = await prisma.rams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ramsFindUniqueArgs>(args: SelectSubset<T, ramsFindUniqueArgs<ExtArgs>>): Prisma__ramsClient<$Result.GetResult<Prisma.$ramsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ramsFindUniqueOrThrowArgs} args - Arguments to find a Rams
     * @example
     * // Get one Rams
     * const rams = await prisma.rams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ramsFindUniqueOrThrowArgs>(args: SelectSubset<T, ramsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ramsClient<$Result.GetResult<Prisma.$ramsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ramsFindFirstArgs} args - Arguments to find a Rams
     * @example
     * // Get one Rams
     * const rams = await prisma.rams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ramsFindFirstArgs>(args?: SelectSubset<T, ramsFindFirstArgs<ExtArgs>>): Prisma__ramsClient<$Result.GetResult<Prisma.$ramsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ramsFindFirstOrThrowArgs} args - Arguments to find a Rams
     * @example
     * // Get one Rams
     * const rams = await prisma.rams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ramsFindFirstOrThrowArgs>(args?: SelectSubset<T, ramsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ramsClient<$Result.GetResult<Prisma.$ramsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ramsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rams
     * const rams = await prisma.rams.findMany()
     * 
     * // Get first 10 Rams
     * const rams = await prisma.rams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ramsWithIdOnly = await prisma.rams.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ramsFindManyArgs>(args?: SelectSubset<T, ramsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ramsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rams.
     * @param {ramsCreateArgs} args - Arguments to create a Rams.
     * @example
     * // Create one Rams
     * const Rams = await prisma.rams.create({
     *   data: {
     *     // ... data to create a Rams
     *   }
     * })
     * 
     */
    create<T extends ramsCreateArgs>(args: SelectSubset<T, ramsCreateArgs<ExtArgs>>): Prisma__ramsClient<$Result.GetResult<Prisma.$ramsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rams.
     * @param {ramsCreateManyArgs} args - Arguments to create many Rams.
     * @example
     * // Create many Rams
     * const rams = await prisma.rams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ramsCreateManyArgs>(args?: SelectSubset<T, ramsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rams and returns the data saved in the database.
     * @param {ramsCreateManyAndReturnArgs} args - Arguments to create many Rams.
     * @example
     * // Create many Rams
     * const rams = await prisma.rams.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rams and only return the `id`
     * const ramsWithIdOnly = await prisma.rams.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ramsCreateManyAndReturnArgs>(args?: SelectSubset<T, ramsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ramsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rams.
     * @param {ramsDeleteArgs} args - Arguments to delete one Rams.
     * @example
     * // Delete one Rams
     * const Rams = await prisma.rams.delete({
     *   where: {
     *     // ... filter to delete one Rams
     *   }
     * })
     * 
     */
    delete<T extends ramsDeleteArgs>(args: SelectSubset<T, ramsDeleteArgs<ExtArgs>>): Prisma__ramsClient<$Result.GetResult<Prisma.$ramsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rams.
     * @param {ramsUpdateArgs} args - Arguments to update one Rams.
     * @example
     * // Update one Rams
     * const rams = await prisma.rams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ramsUpdateArgs>(args: SelectSubset<T, ramsUpdateArgs<ExtArgs>>): Prisma__ramsClient<$Result.GetResult<Prisma.$ramsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rams.
     * @param {ramsDeleteManyArgs} args - Arguments to filter Rams to delete.
     * @example
     * // Delete a few Rams
     * const { count } = await prisma.rams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ramsDeleteManyArgs>(args?: SelectSubset<T, ramsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ramsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rams
     * const rams = await prisma.rams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ramsUpdateManyArgs>(args: SelectSubset<T, ramsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rams and returns the data updated in the database.
     * @param {ramsUpdateManyAndReturnArgs} args - Arguments to update many Rams.
     * @example
     * // Update many Rams
     * const rams = await prisma.rams.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rams and only return the `id`
     * const ramsWithIdOnly = await prisma.rams.updateManyAndReturn({
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
    updateManyAndReturn<T extends ramsUpdateManyAndReturnArgs>(args: SelectSubset<T, ramsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ramsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rams.
     * @param {ramsUpsertArgs} args - Arguments to update or create a Rams.
     * @example
     * // Update or create a Rams
     * const rams = await prisma.rams.upsert({
     *   create: {
     *     // ... data to create a Rams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rams we want to update
     *   }
     * })
     */
    upsert<T extends ramsUpsertArgs>(args: SelectSubset<T, ramsUpsertArgs<ExtArgs>>): Prisma__ramsClient<$Result.GetResult<Prisma.$ramsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ramsCountArgs} args - Arguments to filter Rams to count.
     * @example
     * // Count the number of Rams
     * const count = await prisma.rams.count({
     *   where: {
     *     // ... the filter for the Rams we want to count
     *   }
     * })
    **/
    count<T extends ramsCountArgs>(
      args?: Subset<T, ramsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RamsAggregateArgs>(args: Subset<T, RamsAggregateArgs>): Prisma.PrismaPromise<GetRamsAggregateType<T>>

    /**
     * Group by Rams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ramsGroupByArgs} args - Group by arguments.
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
      T extends ramsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ramsGroupByArgs['orderBy'] }
        : { orderBy?: ramsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ramsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rams model
   */
  readonly fields: ramsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ramsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the rams model
   */
  interface ramsFieldRefs {
    readonly id: FieldRef<"rams", 'Int'>
    readonly name: FieldRef<"rams", 'String'>
    readonly price: FieldRef<"rams", 'Decimal'>
    readonly speed_channels: FieldRef<"rams", 'Int'>
    readonly speed_mhz: FieldRef<"rams", 'Int'>
    readonly modules_qty: FieldRef<"rams", 'Int'>
    readonly module_capacity: FieldRef<"rams", 'Int'>
    readonly price_per_gb: FieldRef<"rams", 'Decimal'>
    readonly color: FieldRef<"rams", 'String'>
    readonly first_word_latency: FieldRef<"rams", 'Int'>
    readonly cas_latency: FieldRef<"rams", 'Int'>
    readonly imagen_url: FieldRef<"rams", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rams findUnique
   */
  export type ramsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rams
     */
    select?: ramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rams
     */
    omit?: ramsOmit<ExtArgs> | null
    /**
     * Filter, which rams to fetch.
     */
    where: ramsWhereUniqueInput
  }

  /**
   * rams findUniqueOrThrow
   */
  export type ramsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rams
     */
    select?: ramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rams
     */
    omit?: ramsOmit<ExtArgs> | null
    /**
     * Filter, which rams to fetch.
     */
    where: ramsWhereUniqueInput
  }

  /**
   * rams findFirst
   */
  export type ramsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rams
     */
    select?: ramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rams
     */
    omit?: ramsOmit<ExtArgs> | null
    /**
     * Filter, which rams to fetch.
     */
    where?: ramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rams to fetch.
     */
    orderBy?: ramsOrderByWithRelationInput | ramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rams.
     */
    cursor?: ramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rams.
     */
    distinct?: RamsScalarFieldEnum | RamsScalarFieldEnum[]
  }

  /**
   * rams findFirstOrThrow
   */
  export type ramsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rams
     */
    select?: ramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rams
     */
    omit?: ramsOmit<ExtArgs> | null
    /**
     * Filter, which rams to fetch.
     */
    where?: ramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rams to fetch.
     */
    orderBy?: ramsOrderByWithRelationInput | ramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rams.
     */
    cursor?: ramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rams.
     */
    distinct?: RamsScalarFieldEnum | RamsScalarFieldEnum[]
  }

  /**
   * rams findMany
   */
  export type ramsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rams
     */
    select?: ramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rams
     */
    omit?: ramsOmit<ExtArgs> | null
    /**
     * Filter, which rams to fetch.
     */
    where?: ramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rams to fetch.
     */
    orderBy?: ramsOrderByWithRelationInput | ramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rams.
     */
    cursor?: ramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rams.
     */
    skip?: number
    distinct?: RamsScalarFieldEnum | RamsScalarFieldEnum[]
  }

  /**
   * rams create
   */
  export type ramsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rams
     */
    select?: ramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rams
     */
    omit?: ramsOmit<ExtArgs> | null
    /**
     * The data needed to create a rams.
     */
    data: XOR<ramsCreateInput, ramsUncheckedCreateInput>
  }

  /**
   * rams createMany
   */
  export type ramsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rams.
     */
    data: ramsCreateManyInput | ramsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rams createManyAndReturn
   */
  export type ramsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rams
     */
    select?: ramsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rams
     */
    omit?: ramsOmit<ExtArgs> | null
    /**
     * The data used to create many rams.
     */
    data: ramsCreateManyInput | ramsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rams update
   */
  export type ramsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rams
     */
    select?: ramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rams
     */
    omit?: ramsOmit<ExtArgs> | null
    /**
     * The data needed to update a rams.
     */
    data: XOR<ramsUpdateInput, ramsUncheckedUpdateInput>
    /**
     * Choose, which rams to update.
     */
    where: ramsWhereUniqueInput
  }

  /**
   * rams updateMany
   */
  export type ramsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rams.
     */
    data: XOR<ramsUpdateManyMutationInput, ramsUncheckedUpdateManyInput>
    /**
     * Filter which rams to update
     */
    where?: ramsWhereInput
    /**
     * Limit how many rams to update.
     */
    limit?: number
  }

  /**
   * rams updateManyAndReturn
   */
  export type ramsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rams
     */
    select?: ramsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rams
     */
    omit?: ramsOmit<ExtArgs> | null
    /**
     * The data used to update rams.
     */
    data: XOR<ramsUpdateManyMutationInput, ramsUncheckedUpdateManyInput>
    /**
     * Filter which rams to update
     */
    where?: ramsWhereInput
    /**
     * Limit how many rams to update.
     */
    limit?: number
  }

  /**
   * rams upsert
   */
  export type ramsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rams
     */
    select?: ramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rams
     */
    omit?: ramsOmit<ExtArgs> | null
    /**
     * The filter to search for the rams to update in case it exists.
     */
    where: ramsWhereUniqueInput
    /**
     * In case the rams found by the `where` argument doesn't exist, create a new rams with this data.
     */
    create: XOR<ramsCreateInput, ramsUncheckedCreateInput>
    /**
     * In case the rams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ramsUpdateInput, ramsUncheckedUpdateInput>
  }

  /**
   * rams delete
   */
  export type ramsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rams
     */
    select?: ramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rams
     */
    omit?: ramsOmit<ExtArgs> | null
    /**
     * Filter which rams to delete.
     */
    where: ramsWhereUniqueInput
  }

  /**
   * rams deleteMany
   */
  export type ramsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rams to delete
     */
    where?: ramsWhereInput
    /**
     * Limit how many rams to delete.
     */
    limit?: number
  }

  /**
   * rams without action
   */
  export type ramsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rams
     */
    select?: ramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rams
     */
    omit?: ramsOmit<ExtArgs> | null
  }


  /**
   * Model sounds
   */

  export type AggregateSounds = {
    _count: SoundsCountAggregateOutputType | null
    _avg: SoundsAvgAggregateOutputType | null
    _sum: SoundsSumAggregateOutputType | null
    _min: SoundsMinAggregateOutputType | null
    _max: SoundsMaxAggregateOutputType | null
  }

  export type SoundsAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    digital_audio: number | null
    snr: number | null
    sample_rate: number | null
  }

  export type SoundsSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    digital_audio: number | null
    snr: number | null
    sample_rate: number | null
  }

  export type SoundsMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    channels: string | null
    digital_audio: number | null
    snr: number | null
    sample_rate: number | null
    chipset: string | null
    interface: string | null
    imagen_url: string | null
  }

  export type SoundsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    channels: string | null
    digital_audio: number | null
    snr: number | null
    sample_rate: number | null
    chipset: string | null
    interface: string | null
    imagen_url: string | null
  }

  export type SoundsCountAggregateOutputType = {
    id: number
    name: number
    price: number
    channels: number
    digital_audio: number
    snr: number
    sample_rate: number
    chipset: number
    interface: number
    imagen_url: number
    _all: number
  }


  export type SoundsAvgAggregateInputType = {
    id?: true
    price?: true
    digital_audio?: true
    snr?: true
    sample_rate?: true
  }

  export type SoundsSumAggregateInputType = {
    id?: true
    price?: true
    digital_audio?: true
    snr?: true
    sample_rate?: true
  }

  export type SoundsMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    channels?: true
    digital_audio?: true
    snr?: true
    sample_rate?: true
    chipset?: true
    interface?: true
    imagen_url?: true
  }

  export type SoundsMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    channels?: true
    digital_audio?: true
    snr?: true
    sample_rate?: true
    chipset?: true
    interface?: true
    imagen_url?: true
  }

  export type SoundsCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    channels?: true
    digital_audio?: true
    snr?: true
    sample_rate?: true
    chipset?: true
    interface?: true
    imagen_url?: true
    _all?: true
  }

  export type SoundsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sounds to aggregate.
     */
    where?: soundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sounds to fetch.
     */
    orderBy?: soundsOrderByWithRelationInput | soundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: soundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sounds
    **/
    _count?: true | SoundsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SoundsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SoundsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SoundsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SoundsMaxAggregateInputType
  }

  export type GetSoundsAggregateType<T extends SoundsAggregateArgs> = {
        [P in keyof T & keyof AggregateSounds]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSounds[P]>
      : GetScalarType<T[P], AggregateSounds[P]>
  }




  export type soundsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: soundsWhereInput
    orderBy?: soundsOrderByWithAggregationInput | soundsOrderByWithAggregationInput[]
    by: SoundsScalarFieldEnum[] | SoundsScalarFieldEnum
    having?: soundsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SoundsCountAggregateInputType | true
    _avg?: SoundsAvgAggregateInputType
    _sum?: SoundsSumAggregateInputType
    _min?: SoundsMinAggregateInputType
    _max?: SoundsMaxAggregateInputType
  }

  export type SoundsGroupByOutputType = {
    id: number
    name: string
    price: Decimal | null
    channels: string | null
    digital_audio: number | null
    snr: number | null
    sample_rate: number | null
    chipset: string | null
    interface: string | null
    imagen_url: string | null
    _count: SoundsCountAggregateOutputType | null
    _avg: SoundsAvgAggregateOutputType | null
    _sum: SoundsSumAggregateOutputType | null
    _min: SoundsMinAggregateOutputType | null
    _max: SoundsMaxAggregateOutputType | null
  }

  type GetSoundsGroupByPayload<T extends soundsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SoundsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SoundsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SoundsGroupByOutputType[P]>
            : GetScalarType<T[P], SoundsGroupByOutputType[P]>
        }
      >
    >


  export type soundsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    channels?: boolean
    digital_audio?: boolean
    snr?: boolean
    sample_rate?: boolean
    chipset?: boolean
    interface?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["sounds"]>

  export type soundsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    channels?: boolean
    digital_audio?: boolean
    snr?: boolean
    sample_rate?: boolean
    chipset?: boolean
    interface?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["sounds"]>

  export type soundsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    channels?: boolean
    digital_audio?: boolean
    snr?: boolean
    sample_rate?: boolean
    chipset?: boolean
    interface?: boolean
    imagen_url?: boolean
  }, ExtArgs["result"]["sounds"]>

  export type soundsSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    channels?: boolean
    digital_audio?: boolean
    snr?: boolean
    sample_rate?: boolean
    chipset?: boolean
    interface?: boolean
    imagen_url?: boolean
  }

  export type soundsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "channels" | "digital_audio" | "snr" | "sample_rate" | "chipset" | "interface" | "imagen_url", ExtArgs["result"]["sounds"]>

  export type $soundsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sounds"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: Prisma.Decimal | null
      channels: string | null
      digital_audio: number | null
      snr: number | null
      sample_rate: number | null
      chipset: string | null
      interface: string | null
      imagen_url: string | null
    }, ExtArgs["result"]["sounds"]>
    composites: {}
  }

  type soundsGetPayload<S extends boolean | null | undefined | soundsDefaultArgs> = $Result.GetResult<Prisma.$soundsPayload, S>

  type soundsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<soundsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SoundsCountAggregateInputType | true
    }

  export interface soundsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sounds'], meta: { name: 'sounds' } }
    /**
     * Find zero or one Sounds that matches the filter.
     * @param {soundsFindUniqueArgs} args - Arguments to find a Sounds
     * @example
     * // Get one Sounds
     * const sounds = await prisma.sounds.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends soundsFindUniqueArgs>(args: SelectSubset<T, soundsFindUniqueArgs<ExtArgs>>): Prisma__soundsClient<$Result.GetResult<Prisma.$soundsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sounds that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {soundsFindUniqueOrThrowArgs} args - Arguments to find a Sounds
     * @example
     * // Get one Sounds
     * const sounds = await prisma.sounds.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends soundsFindUniqueOrThrowArgs>(args: SelectSubset<T, soundsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__soundsClient<$Result.GetResult<Prisma.$soundsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {soundsFindFirstArgs} args - Arguments to find a Sounds
     * @example
     * // Get one Sounds
     * const sounds = await prisma.sounds.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends soundsFindFirstArgs>(args?: SelectSubset<T, soundsFindFirstArgs<ExtArgs>>): Prisma__soundsClient<$Result.GetResult<Prisma.$soundsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sounds that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {soundsFindFirstOrThrowArgs} args - Arguments to find a Sounds
     * @example
     * // Get one Sounds
     * const sounds = await prisma.sounds.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends soundsFindFirstOrThrowArgs>(args?: SelectSubset<T, soundsFindFirstOrThrowArgs<ExtArgs>>): Prisma__soundsClient<$Result.GetResult<Prisma.$soundsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {soundsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sounds
     * const sounds = await prisma.sounds.findMany()
     * 
     * // Get first 10 Sounds
     * const sounds = await prisma.sounds.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const soundsWithIdOnly = await prisma.sounds.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends soundsFindManyArgs>(args?: SelectSubset<T, soundsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$soundsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sounds.
     * @param {soundsCreateArgs} args - Arguments to create a Sounds.
     * @example
     * // Create one Sounds
     * const Sounds = await prisma.sounds.create({
     *   data: {
     *     // ... data to create a Sounds
     *   }
     * })
     * 
     */
    create<T extends soundsCreateArgs>(args: SelectSubset<T, soundsCreateArgs<ExtArgs>>): Prisma__soundsClient<$Result.GetResult<Prisma.$soundsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sounds.
     * @param {soundsCreateManyArgs} args - Arguments to create many Sounds.
     * @example
     * // Create many Sounds
     * const sounds = await prisma.sounds.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends soundsCreateManyArgs>(args?: SelectSubset<T, soundsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sounds and returns the data saved in the database.
     * @param {soundsCreateManyAndReturnArgs} args - Arguments to create many Sounds.
     * @example
     * // Create many Sounds
     * const sounds = await prisma.sounds.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sounds and only return the `id`
     * const soundsWithIdOnly = await prisma.sounds.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends soundsCreateManyAndReturnArgs>(args?: SelectSubset<T, soundsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$soundsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sounds.
     * @param {soundsDeleteArgs} args - Arguments to delete one Sounds.
     * @example
     * // Delete one Sounds
     * const Sounds = await prisma.sounds.delete({
     *   where: {
     *     // ... filter to delete one Sounds
     *   }
     * })
     * 
     */
    delete<T extends soundsDeleteArgs>(args: SelectSubset<T, soundsDeleteArgs<ExtArgs>>): Prisma__soundsClient<$Result.GetResult<Prisma.$soundsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sounds.
     * @param {soundsUpdateArgs} args - Arguments to update one Sounds.
     * @example
     * // Update one Sounds
     * const sounds = await prisma.sounds.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends soundsUpdateArgs>(args: SelectSubset<T, soundsUpdateArgs<ExtArgs>>): Prisma__soundsClient<$Result.GetResult<Prisma.$soundsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sounds.
     * @param {soundsDeleteManyArgs} args - Arguments to filter Sounds to delete.
     * @example
     * // Delete a few Sounds
     * const { count } = await prisma.sounds.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends soundsDeleteManyArgs>(args?: SelectSubset<T, soundsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {soundsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sounds
     * const sounds = await prisma.sounds.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends soundsUpdateManyArgs>(args: SelectSubset<T, soundsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sounds and returns the data updated in the database.
     * @param {soundsUpdateManyAndReturnArgs} args - Arguments to update many Sounds.
     * @example
     * // Update many Sounds
     * const sounds = await prisma.sounds.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sounds and only return the `id`
     * const soundsWithIdOnly = await prisma.sounds.updateManyAndReturn({
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
    updateManyAndReturn<T extends soundsUpdateManyAndReturnArgs>(args: SelectSubset<T, soundsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$soundsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sounds.
     * @param {soundsUpsertArgs} args - Arguments to update or create a Sounds.
     * @example
     * // Update or create a Sounds
     * const sounds = await prisma.sounds.upsert({
     *   create: {
     *     // ... data to create a Sounds
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sounds we want to update
     *   }
     * })
     */
    upsert<T extends soundsUpsertArgs>(args: SelectSubset<T, soundsUpsertArgs<ExtArgs>>): Prisma__soundsClient<$Result.GetResult<Prisma.$soundsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {soundsCountArgs} args - Arguments to filter Sounds to count.
     * @example
     * // Count the number of Sounds
     * const count = await prisma.sounds.count({
     *   where: {
     *     // ... the filter for the Sounds we want to count
     *   }
     * })
    **/
    count<T extends soundsCountArgs>(
      args?: Subset<T, soundsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SoundsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoundsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SoundsAggregateArgs>(args: Subset<T, SoundsAggregateArgs>): Prisma.PrismaPromise<GetSoundsAggregateType<T>>

    /**
     * Group by Sounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {soundsGroupByArgs} args - Group by arguments.
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
      T extends soundsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: soundsGroupByArgs['orderBy'] }
        : { orderBy?: soundsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, soundsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSoundsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sounds model
   */
  readonly fields: soundsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sounds.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__soundsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the sounds model
   */
  interface soundsFieldRefs {
    readonly id: FieldRef<"sounds", 'Int'>
    readonly name: FieldRef<"sounds", 'String'>
    readonly price: FieldRef<"sounds", 'Decimal'>
    readonly channels: FieldRef<"sounds", 'String'>
    readonly digital_audio: FieldRef<"sounds", 'Int'>
    readonly snr: FieldRef<"sounds", 'Int'>
    readonly sample_rate: FieldRef<"sounds", 'Int'>
    readonly chipset: FieldRef<"sounds", 'String'>
    readonly interface: FieldRef<"sounds", 'String'>
    readonly imagen_url: FieldRef<"sounds", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sounds findUnique
   */
  export type soundsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sounds
     */
    select?: soundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sounds
     */
    omit?: soundsOmit<ExtArgs> | null
    /**
     * Filter, which sounds to fetch.
     */
    where: soundsWhereUniqueInput
  }

  /**
   * sounds findUniqueOrThrow
   */
  export type soundsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sounds
     */
    select?: soundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sounds
     */
    omit?: soundsOmit<ExtArgs> | null
    /**
     * Filter, which sounds to fetch.
     */
    where: soundsWhereUniqueInput
  }

  /**
   * sounds findFirst
   */
  export type soundsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sounds
     */
    select?: soundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sounds
     */
    omit?: soundsOmit<ExtArgs> | null
    /**
     * Filter, which sounds to fetch.
     */
    where?: soundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sounds to fetch.
     */
    orderBy?: soundsOrderByWithRelationInput | soundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sounds.
     */
    cursor?: soundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sounds.
     */
    distinct?: SoundsScalarFieldEnum | SoundsScalarFieldEnum[]
  }

  /**
   * sounds findFirstOrThrow
   */
  export type soundsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sounds
     */
    select?: soundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sounds
     */
    omit?: soundsOmit<ExtArgs> | null
    /**
     * Filter, which sounds to fetch.
     */
    where?: soundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sounds to fetch.
     */
    orderBy?: soundsOrderByWithRelationInput | soundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sounds.
     */
    cursor?: soundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sounds.
     */
    distinct?: SoundsScalarFieldEnum | SoundsScalarFieldEnum[]
  }

  /**
   * sounds findMany
   */
  export type soundsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sounds
     */
    select?: soundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sounds
     */
    omit?: soundsOmit<ExtArgs> | null
    /**
     * Filter, which sounds to fetch.
     */
    where?: soundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sounds to fetch.
     */
    orderBy?: soundsOrderByWithRelationInput | soundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sounds.
     */
    cursor?: soundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sounds.
     */
    skip?: number
    distinct?: SoundsScalarFieldEnum | SoundsScalarFieldEnum[]
  }

  /**
   * sounds create
   */
  export type soundsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sounds
     */
    select?: soundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sounds
     */
    omit?: soundsOmit<ExtArgs> | null
    /**
     * The data needed to create a sounds.
     */
    data: XOR<soundsCreateInput, soundsUncheckedCreateInput>
  }

  /**
   * sounds createMany
   */
  export type soundsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sounds.
     */
    data: soundsCreateManyInput | soundsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sounds createManyAndReturn
   */
  export type soundsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sounds
     */
    select?: soundsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sounds
     */
    omit?: soundsOmit<ExtArgs> | null
    /**
     * The data used to create many sounds.
     */
    data: soundsCreateManyInput | soundsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sounds update
   */
  export type soundsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sounds
     */
    select?: soundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sounds
     */
    omit?: soundsOmit<ExtArgs> | null
    /**
     * The data needed to update a sounds.
     */
    data: XOR<soundsUpdateInput, soundsUncheckedUpdateInput>
    /**
     * Choose, which sounds to update.
     */
    where: soundsWhereUniqueInput
  }

  /**
   * sounds updateMany
   */
  export type soundsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sounds.
     */
    data: XOR<soundsUpdateManyMutationInput, soundsUncheckedUpdateManyInput>
    /**
     * Filter which sounds to update
     */
    where?: soundsWhereInput
    /**
     * Limit how many sounds to update.
     */
    limit?: number
  }

  /**
   * sounds updateManyAndReturn
   */
  export type soundsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sounds
     */
    select?: soundsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sounds
     */
    omit?: soundsOmit<ExtArgs> | null
    /**
     * The data used to update sounds.
     */
    data: XOR<soundsUpdateManyMutationInput, soundsUncheckedUpdateManyInput>
    /**
     * Filter which sounds to update
     */
    where?: soundsWhereInput
    /**
     * Limit how many sounds to update.
     */
    limit?: number
  }

  /**
   * sounds upsert
   */
  export type soundsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sounds
     */
    select?: soundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sounds
     */
    omit?: soundsOmit<ExtArgs> | null
    /**
     * The filter to search for the sounds to update in case it exists.
     */
    where: soundsWhereUniqueInput
    /**
     * In case the sounds found by the `where` argument doesn't exist, create a new sounds with this data.
     */
    create: XOR<soundsCreateInput, soundsUncheckedCreateInput>
    /**
     * In case the sounds was found with the provided `where` argument, update it with this data.
     */
    update: XOR<soundsUpdateInput, soundsUncheckedUpdateInput>
  }

  /**
   * sounds delete
   */
  export type soundsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sounds
     */
    select?: soundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sounds
     */
    omit?: soundsOmit<ExtArgs> | null
    /**
     * Filter which sounds to delete.
     */
    where: soundsWhereUniqueInput
  }

  /**
   * sounds deleteMany
   */
  export type soundsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sounds to delete
     */
    where?: soundsWhereInput
    /**
     * Limit how many sounds to delete.
     */
    limit?: number
  }

  /**
   * sounds without action
   */
  export type soundsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sounds
     */
    select?: soundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sounds
     */
    omit?: soundsOmit<ExtArgs> | null
  }


  /**
   * Model ususarios
   */

  export type AggregateUsusarios = {
    _count: UsusariosCountAggregateOutputType | null
    _avg: UsusariosAvgAggregateOutputType | null
    _sum: UsusariosSumAggregateOutputType | null
    _min: UsusariosMinAggregateOutputType | null
    _max: UsusariosMaxAggregateOutputType | null
  }

  export type UsusariosAvgAggregateOutputType = {
    id_user: number | null
  }

  export type UsusariosSumAggregateOutputType = {
    id_user: number | null
  }

  export type UsusariosMinAggregateOutputType = {
    id_user: number | null
    nombre: string | null
    apellido: string | null
    mail: string | null
    contrasenia: string | null
    fecha_nacimiento: Date | null
    permisos: boolean | null
  }

  export type UsusariosMaxAggregateOutputType = {
    id_user: number | null
    nombre: string | null
    apellido: string | null
    mail: string | null
    contrasenia: string | null
    fecha_nacimiento: Date | null
    permisos: boolean | null
  }

  export type UsusariosCountAggregateOutputType = {
    id_user: number
    nombre: number
    apellido: number
    mail: number
    contrasenia: number
    fecha_nacimiento: number
    permisos: number
    _all: number
  }


  export type UsusariosAvgAggregateInputType = {
    id_user?: true
  }

  export type UsusariosSumAggregateInputType = {
    id_user?: true
  }

  export type UsusariosMinAggregateInputType = {
    id_user?: true
    nombre?: true
    apellido?: true
    mail?: true
    contrasenia?: true
    fecha_nacimiento?: true
    permisos?: true
  }

  export type UsusariosMaxAggregateInputType = {
    id_user?: true
    nombre?: true
    apellido?: true
    mail?: true
    contrasenia?: true
    fecha_nacimiento?: true
    permisos?: true
  }

  export type UsusariosCountAggregateInputType = {
    id_user?: true
    nombre?: true
    apellido?: true
    mail?: true
    contrasenia?: true
    fecha_nacimiento?: true
    permisos?: true
    _all?: true
  }

  export type UsusariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ususarios to aggregate.
     */
    where?: ususariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ususarios to fetch.
     */
    orderBy?: ususariosOrderByWithRelationInput | ususariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ususariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ususarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ususarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ususarios
    **/
    _count?: true | UsusariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsusariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsusariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsusariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsusariosMaxAggregateInputType
  }

  export type GetUsusariosAggregateType<T extends UsusariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsusarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsusarios[P]>
      : GetScalarType<T[P], AggregateUsusarios[P]>
  }




  export type ususariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ususariosWhereInput
    orderBy?: ususariosOrderByWithAggregationInput | ususariosOrderByWithAggregationInput[]
    by: UsusariosScalarFieldEnum[] | UsusariosScalarFieldEnum
    having?: ususariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsusariosCountAggregateInputType | true
    _avg?: UsusariosAvgAggregateInputType
    _sum?: UsusariosSumAggregateInputType
    _min?: UsusariosMinAggregateInputType
    _max?: UsusariosMaxAggregateInputType
  }

  export type UsusariosGroupByOutputType = {
    id_user: number
    nombre: string
    apellido: string
    mail: string
    contrasenia: string
    fecha_nacimiento: Date
    permisos: boolean | null
    _count: UsusariosCountAggregateOutputType | null
    _avg: UsusariosAvgAggregateOutputType | null
    _sum: UsusariosSumAggregateOutputType | null
    _min: UsusariosMinAggregateOutputType | null
    _max: UsusariosMaxAggregateOutputType | null
  }

  type GetUsusariosGroupByPayload<T extends ususariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsusariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsusariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsusariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsusariosGroupByOutputType[P]>
        }
      >
    >


  export type ususariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    nombre?: boolean
    apellido?: boolean
    mail?: boolean
    contrasenia?: boolean
    fecha_nacimiento?: boolean
    permisos?: boolean
  }, ExtArgs["result"]["ususarios"]>

  export type ususariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    nombre?: boolean
    apellido?: boolean
    mail?: boolean
    contrasenia?: boolean
    fecha_nacimiento?: boolean
    permisos?: boolean
  }, ExtArgs["result"]["ususarios"]>

  export type ususariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    nombre?: boolean
    apellido?: boolean
    mail?: boolean
    contrasenia?: boolean
    fecha_nacimiento?: boolean
    permisos?: boolean
  }, ExtArgs["result"]["ususarios"]>

  export type ususariosSelectScalar = {
    id_user?: boolean
    nombre?: boolean
    apellido?: boolean
    mail?: boolean
    contrasenia?: boolean
    fecha_nacimiento?: boolean
    permisos?: boolean
  }

  export type ususariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "nombre" | "apellido" | "mail" | "contrasenia" | "fecha_nacimiento" | "permisos", ExtArgs["result"]["ususarios"]>

  export type $ususariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ususarios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_user: number
      nombre: string
      apellido: string
      mail: string
      contrasenia: string
      fecha_nacimiento: Date
      permisos: boolean | null
    }, ExtArgs["result"]["ususarios"]>
    composites: {}
  }

  type ususariosGetPayload<S extends boolean | null | undefined | ususariosDefaultArgs> = $Result.GetResult<Prisma.$ususariosPayload, S>

  type ususariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ususariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsusariosCountAggregateInputType | true
    }

  export interface ususariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ususarios'], meta: { name: 'ususarios' } }
    /**
     * Find zero or one Ususarios that matches the filter.
     * @param {ususariosFindUniqueArgs} args - Arguments to find a Ususarios
     * @example
     * // Get one Ususarios
     * const ususarios = await prisma.ususarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ususariosFindUniqueArgs>(args: SelectSubset<T, ususariosFindUniqueArgs<ExtArgs>>): Prisma__ususariosClient<$Result.GetResult<Prisma.$ususariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ususarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ususariosFindUniqueOrThrowArgs} args - Arguments to find a Ususarios
     * @example
     * // Get one Ususarios
     * const ususarios = await prisma.ususarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ususariosFindUniqueOrThrowArgs>(args: SelectSubset<T, ususariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ususariosClient<$Result.GetResult<Prisma.$ususariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ususarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ususariosFindFirstArgs} args - Arguments to find a Ususarios
     * @example
     * // Get one Ususarios
     * const ususarios = await prisma.ususarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ususariosFindFirstArgs>(args?: SelectSubset<T, ususariosFindFirstArgs<ExtArgs>>): Prisma__ususariosClient<$Result.GetResult<Prisma.$ususariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ususarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ususariosFindFirstOrThrowArgs} args - Arguments to find a Ususarios
     * @example
     * // Get one Ususarios
     * const ususarios = await prisma.ususarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ususariosFindFirstOrThrowArgs>(args?: SelectSubset<T, ususariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ususariosClient<$Result.GetResult<Prisma.$ususariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ususarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ususariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ususarios
     * const ususarios = await prisma.ususarios.findMany()
     * 
     * // Get first 10 Ususarios
     * const ususarios = await prisma.ususarios.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const ususariosWithId_userOnly = await prisma.ususarios.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends ususariosFindManyArgs>(args?: SelectSubset<T, ususariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ususariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ususarios.
     * @param {ususariosCreateArgs} args - Arguments to create a Ususarios.
     * @example
     * // Create one Ususarios
     * const Ususarios = await prisma.ususarios.create({
     *   data: {
     *     // ... data to create a Ususarios
     *   }
     * })
     * 
     */
    create<T extends ususariosCreateArgs>(args: SelectSubset<T, ususariosCreateArgs<ExtArgs>>): Prisma__ususariosClient<$Result.GetResult<Prisma.$ususariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ususarios.
     * @param {ususariosCreateManyArgs} args - Arguments to create many Ususarios.
     * @example
     * // Create many Ususarios
     * const ususarios = await prisma.ususarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ususariosCreateManyArgs>(args?: SelectSubset<T, ususariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ususarios and returns the data saved in the database.
     * @param {ususariosCreateManyAndReturnArgs} args - Arguments to create many Ususarios.
     * @example
     * // Create many Ususarios
     * const ususarios = await prisma.ususarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ususarios and only return the `id_user`
     * const ususariosWithId_userOnly = await prisma.ususarios.createManyAndReturn({
     *   select: { id_user: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ususariosCreateManyAndReturnArgs>(args?: SelectSubset<T, ususariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ususariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ususarios.
     * @param {ususariosDeleteArgs} args - Arguments to delete one Ususarios.
     * @example
     * // Delete one Ususarios
     * const Ususarios = await prisma.ususarios.delete({
     *   where: {
     *     // ... filter to delete one Ususarios
     *   }
     * })
     * 
     */
    delete<T extends ususariosDeleteArgs>(args: SelectSubset<T, ususariosDeleteArgs<ExtArgs>>): Prisma__ususariosClient<$Result.GetResult<Prisma.$ususariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ususarios.
     * @param {ususariosUpdateArgs} args - Arguments to update one Ususarios.
     * @example
     * // Update one Ususarios
     * const ususarios = await prisma.ususarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ususariosUpdateArgs>(args: SelectSubset<T, ususariosUpdateArgs<ExtArgs>>): Prisma__ususariosClient<$Result.GetResult<Prisma.$ususariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ususarios.
     * @param {ususariosDeleteManyArgs} args - Arguments to filter Ususarios to delete.
     * @example
     * // Delete a few Ususarios
     * const { count } = await prisma.ususarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ususariosDeleteManyArgs>(args?: SelectSubset<T, ususariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ususarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ususariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ususarios
     * const ususarios = await prisma.ususarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ususariosUpdateManyArgs>(args: SelectSubset<T, ususariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ususarios and returns the data updated in the database.
     * @param {ususariosUpdateManyAndReturnArgs} args - Arguments to update many Ususarios.
     * @example
     * // Update many Ususarios
     * const ususarios = await prisma.ususarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ususarios and only return the `id_user`
     * const ususariosWithId_userOnly = await prisma.ususarios.updateManyAndReturn({
     *   select: { id_user: true },
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
    updateManyAndReturn<T extends ususariosUpdateManyAndReturnArgs>(args: SelectSubset<T, ususariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ususariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ususarios.
     * @param {ususariosUpsertArgs} args - Arguments to update or create a Ususarios.
     * @example
     * // Update or create a Ususarios
     * const ususarios = await prisma.ususarios.upsert({
     *   create: {
     *     // ... data to create a Ususarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ususarios we want to update
     *   }
     * })
     */
    upsert<T extends ususariosUpsertArgs>(args: SelectSubset<T, ususariosUpsertArgs<ExtArgs>>): Prisma__ususariosClient<$Result.GetResult<Prisma.$ususariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ususarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ususariosCountArgs} args - Arguments to filter Ususarios to count.
     * @example
     * // Count the number of Ususarios
     * const count = await prisma.ususarios.count({
     *   where: {
     *     // ... the filter for the Ususarios we want to count
     *   }
     * })
    **/
    count<T extends ususariosCountArgs>(
      args?: Subset<T, ususariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsusariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ususarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsusariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsusariosAggregateArgs>(args: Subset<T, UsusariosAggregateArgs>): Prisma.PrismaPromise<GetUsusariosAggregateType<T>>

    /**
     * Group by Ususarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ususariosGroupByArgs} args - Group by arguments.
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
      T extends ususariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ususariosGroupByArgs['orderBy'] }
        : { orderBy?: ususariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ususariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsusariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ususarios model
   */
  readonly fields: ususariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ususarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ususariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ususarios model
   */
  interface ususariosFieldRefs {
    readonly id_user: FieldRef<"ususarios", 'Int'>
    readonly nombre: FieldRef<"ususarios", 'String'>
    readonly apellido: FieldRef<"ususarios", 'String'>
    readonly mail: FieldRef<"ususarios", 'String'>
    readonly contrasenia: FieldRef<"ususarios", 'String'>
    readonly fecha_nacimiento: FieldRef<"ususarios", 'DateTime'>
    readonly permisos: FieldRef<"ususarios", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ususarios findUnique
   */
  export type ususariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ususarios
     */
    select?: ususariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ususarios
     */
    omit?: ususariosOmit<ExtArgs> | null
    /**
     * Filter, which ususarios to fetch.
     */
    where: ususariosWhereUniqueInput
  }

  /**
   * ususarios findUniqueOrThrow
   */
  export type ususariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ususarios
     */
    select?: ususariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ususarios
     */
    omit?: ususariosOmit<ExtArgs> | null
    /**
     * Filter, which ususarios to fetch.
     */
    where: ususariosWhereUniqueInput
  }

  /**
   * ususarios findFirst
   */
  export type ususariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ususarios
     */
    select?: ususariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ususarios
     */
    omit?: ususariosOmit<ExtArgs> | null
    /**
     * Filter, which ususarios to fetch.
     */
    where?: ususariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ususarios to fetch.
     */
    orderBy?: ususariosOrderByWithRelationInput | ususariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ususarios.
     */
    cursor?: ususariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ususarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ususarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ususarios.
     */
    distinct?: UsusariosScalarFieldEnum | UsusariosScalarFieldEnum[]
  }

  /**
   * ususarios findFirstOrThrow
   */
  export type ususariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ususarios
     */
    select?: ususariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ususarios
     */
    omit?: ususariosOmit<ExtArgs> | null
    /**
     * Filter, which ususarios to fetch.
     */
    where?: ususariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ususarios to fetch.
     */
    orderBy?: ususariosOrderByWithRelationInput | ususariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ususarios.
     */
    cursor?: ususariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ususarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ususarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ususarios.
     */
    distinct?: UsusariosScalarFieldEnum | UsusariosScalarFieldEnum[]
  }

  /**
   * ususarios findMany
   */
  export type ususariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ususarios
     */
    select?: ususariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ususarios
     */
    omit?: ususariosOmit<ExtArgs> | null
    /**
     * Filter, which ususarios to fetch.
     */
    where?: ususariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ususarios to fetch.
     */
    orderBy?: ususariosOrderByWithRelationInput | ususariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ususarios.
     */
    cursor?: ususariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ususarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ususarios.
     */
    skip?: number
    distinct?: UsusariosScalarFieldEnum | UsusariosScalarFieldEnum[]
  }

  /**
   * ususarios create
   */
  export type ususariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ususarios
     */
    select?: ususariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ususarios
     */
    omit?: ususariosOmit<ExtArgs> | null
    /**
     * The data needed to create a ususarios.
     */
    data: XOR<ususariosCreateInput, ususariosUncheckedCreateInput>
  }

  /**
   * ususarios createMany
   */
  export type ususariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ususarios.
     */
    data: ususariosCreateManyInput | ususariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ususarios createManyAndReturn
   */
  export type ususariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ususarios
     */
    select?: ususariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ususarios
     */
    omit?: ususariosOmit<ExtArgs> | null
    /**
     * The data used to create many ususarios.
     */
    data: ususariosCreateManyInput | ususariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ususarios update
   */
  export type ususariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ususarios
     */
    select?: ususariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ususarios
     */
    omit?: ususariosOmit<ExtArgs> | null
    /**
     * The data needed to update a ususarios.
     */
    data: XOR<ususariosUpdateInput, ususariosUncheckedUpdateInput>
    /**
     * Choose, which ususarios to update.
     */
    where: ususariosWhereUniqueInput
  }

  /**
   * ususarios updateMany
   */
  export type ususariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ususarios.
     */
    data: XOR<ususariosUpdateManyMutationInput, ususariosUncheckedUpdateManyInput>
    /**
     * Filter which ususarios to update
     */
    where?: ususariosWhereInput
    /**
     * Limit how many ususarios to update.
     */
    limit?: number
  }

  /**
   * ususarios updateManyAndReturn
   */
  export type ususariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ususarios
     */
    select?: ususariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ususarios
     */
    omit?: ususariosOmit<ExtArgs> | null
    /**
     * The data used to update ususarios.
     */
    data: XOR<ususariosUpdateManyMutationInput, ususariosUncheckedUpdateManyInput>
    /**
     * Filter which ususarios to update
     */
    where?: ususariosWhereInput
    /**
     * Limit how many ususarios to update.
     */
    limit?: number
  }

  /**
   * ususarios upsert
   */
  export type ususariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ususarios
     */
    select?: ususariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ususarios
     */
    omit?: ususariosOmit<ExtArgs> | null
    /**
     * The filter to search for the ususarios to update in case it exists.
     */
    where: ususariosWhereUniqueInput
    /**
     * In case the ususarios found by the `where` argument doesn't exist, create a new ususarios with this data.
     */
    create: XOR<ususariosCreateInput, ususariosUncheckedCreateInput>
    /**
     * In case the ususarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ususariosUpdateInput, ususariosUncheckedUpdateInput>
  }

  /**
   * ususarios delete
   */
  export type ususariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ususarios
     */
    select?: ususariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ususarios
     */
    omit?: ususariosOmit<ExtArgs> | null
    /**
     * Filter which ususarios to delete.
     */
    where: ususariosWhereUniqueInput
  }

  /**
   * ususarios deleteMany
   */
  export type ususariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ususarios to delete
     */
    where?: ususariosWhereInput
    /**
     * Limit how many ususarios to delete.
     */
    limit?: number
  }

  /**
   * ususarios without action
   */
  export type ususariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ususarios
     */
    select?: ususariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ususarios
     */
    omit?: ususariosOmit<ExtArgs> | null
  }


  /**
   * Model vendedores
   */

  export type AggregateVendedores = {
    _count: VendedoresCountAggregateOutputType | null
    _avg: VendedoresAvgAggregateOutputType | null
    _sum: VendedoresSumAggregateOutputType | null
    _min: VendedoresMinAggregateOutputType | null
    _max: VendedoresMaxAggregateOutputType | null
  }

  export type VendedoresAvgAggregateOutputType = {
    id_vendedor: number | null
    cuil: Decimal | null
  }

  export type VendedoresSumAggregateOutputType = {
    id_vendedor: number | null
    cuil: Decimal | null
  }

  export type VendedoresMinAggregateOutputType = {
    id_vendedor: number | null
    nombre: string | null
    apellido: string | null
    mail: string | null
    contrasenia: string | null
    fecha_nacimiento: Date | null
    cuil: Decimal | null
    direccion: string | null
    descripcion: string | null
  }

  export type VendedoresMaxAggregateOutputType = {
    id_vendedor: number | null
    nombre: string | null
    apellido: string | null
    mail: string | null
    contrasenia: string | null
    fecha_nacimiento: Date | null
    cuil: Decimal | null
    direccion: string | null
    descripcion: string | null
  }

  export type VendedoresCountAggregateOutputType = {
    id_vendedor: number
    nombre: number
    apellido: number
    mail: number
    contrasenia: number
    fecha_nacimiento: number
    cuil: number
    direccion: number
    descripcion: number
    _all: number
  }


  export type VendedoresAvgAggregateInputType = {
    id_vendedor?: true
    cuil?: true
  }

  export type VendedoresSumAggregateInputType = {
    id_vendedor?: true
    cuil?: true
  }

  export type VendedoresMinAggregateInputType = {
    id_vendedor?: true
    nombre?: true
    apellido?: true
    mail?: true
    contrasenia?: true
    fecha_nacimiento?: true
    cuil?: true
    direccion?: true
    descripcion?: true
  }

  export type VendedoresMaxAggregateInputType = {
    id_vendedor?: true
    nombre?: true
    apellido?: true
    mail?: true
    contrasenia?: true
    fecha_nacimiento?: true
    cuil?: true
    direccion?: true
    descripcion?: true
  }

  export type VendedoresCountAggregateInputType = {
    id_vendedor?: true
    nombre?: true
    apellido?: true
    mail?: true
    contrasenia?: true
    fecha_nacimiento?: true
    cuil?: true
    direccion?: true
    descripcion?: true
    _all?: true
  }

  export type VendedoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendedores to aggregate.
     */
    where?: vendedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendedores to fetch.
     */
    orderBy?: vendedoresOrderByWithRelationInput | vendedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vendedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vendedores
    **/
    _count?: true | VendedoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendedoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendedoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendedoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendedoresMaxAggregateInputType
  }

  export type GetVendedoresAggregateType<T extends VendedoresAggregateArgs> = {
        [P in keyof T & keyof AggregateVendedores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendedores[P]>
      : GetScalarType<T[P], AggregateVendedores[P]>
  }




  export type vendedoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vendedoresWhereInput
    orderBy?: vendedoresOrderByWithAggregationInput | vendedoresOrderByWithAggregationInput[]
    by: VendedoresScalarFieldEnum[] | VendedoresScalarFieldEnum
    having?: vendedoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendedoresCountAggregateInputType | true
    _avg?: VendedoresAvgAggregateInputType
    _sum?: VendedoresSumAggregateInputType
    _min?: VendedoresMinAggregateInputType
    _max?: VendedoresMaxAggregateInputType
  }

  export type VendedoresGroupByOutputType = {
    id_vendedor: number
    nombre: string
    apellido: string
    mail: string
    contrasenia: string
    fecha_nacimiento: Date
    cuil: Decimal
    direccion: string
    descripcion: string | null
    _count: VendedoresCountAggregateOutputType | null
    _avg: VendedoresAvgAggregateOutputType | null
    _sum: VendedoresSumAggregateOutputType | null
    _min: VendedoresMinAggregateOutputType | null
    _max: VendedoresMaxAggregateOutputType | null
  }

  type GetVendedoresGroupByPayload<T extends vendedoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendedoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendedoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendedoresGroupByOutputType[P]>
            : GetScalarType<T[P], VendedoresGroupByOutputType[P]>
        }
      >
    >


  export type vendedoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_vendedor?: boolean
    nombre?: boolean
    apellido?: boolean
    mail?: boolean
    contrasenia?: boolean
    fecha_nacimiento?: boolean
    cuil?: boolean
    direccion?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["vendedores"]>

  export type vendedoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_vendedor?: boolean
    nombre?: boolean
    apellido?: boolean
    mail?: boolean
    contrasenia?: boolean
    fecha_nacimiento?: boolean
    cuil?: boolean
    direccion?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["vendedores"]>

  export type vendedoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_vendedor?: boolean
    nombre?: boolean
    apellido?: boolean
    mail?: boolean
    contrasenia?: boolean
    fecha_nacimiento?: boolean
    cuil?: boolean
    direccion?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["vendedores"]>

  export type vendedoresSelectScalar = {
    id_vendedor?: boolean
    nombre?: boolean
    apellido?: boolean
    mail?: boolean
    contrasenia?: boolean
    fecha_nacimiento?: boolean
    cuil?: boolean
    direccion?: boolean
    descripcion?: boolean
  }

  export type vendedoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_vendedor" | "nombre" | "apellido" | "mail" | "contrasenia" | "fecha_nacimiento" | "cuil" | "direccion" | "descripcion", ExtArgs["result"]["vendedores"]>

  export type $vendedoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vendedores"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_vendedor: number
      nombre: string
      apellido: string
      mail: string
      contrasenia: string
      fecha_nacimiento: Date
      cuil: Prisma.Decimal
      direccion: string
      descripcion: string | null
    }, ExtArgs["result"]["vendedores"]>
    composites: {}
  }

  type vendedoresGetPayload<S extends boolean | null | undefined | vendedoresDefaultArgs> = $Result.GetResult<Prisma.$vendedoresPayload, S>

  type vendedoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vendedoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendedoresCountAggregateInputType | true
    }

  export interface vendedoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vendedores'], meta: { name: 'vendedores' } }
    /**
     * Find zero or one Vendedores that matches the filter.
     * @param {vendedoresFindUniqueArgs} args - Arguments to find a Vendedores
     * @example
     * // Get one Vendedores
     * const vendedores = await prisma.vendedores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vendedoresFindUniqueArgs>(args: SelectSubset<T, vendedoresFindUniqueArgs<ExtArgs>>): Prisma__vendedoresClient<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendedores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vendedoresFindUniqueOrThrowArgs} args - Arguments to find a Vendedores
     * @example
     * // Get one Vendedores
     * const vendedores = await prisma.vendedores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vendedoresFindUniqueOrThrowArgs>(args: SelectSubset<T, vendedoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vendedoresClient<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendedores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendedoresFindFirstArgs} args - Arguments to find a Vendedores
     * @example
     * // Get one Vendedores
     * const vendedores = await prisma.vendedores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vendedoresFindFirstArgs>(args?: SelectSubset<T, vendedoresFindFirstArgs<ExtArgs>>): Prisma__vendedoresClient<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendedores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendedoresFindFirstOrThrowArgs} args - Arguments to find a Vendedores
     * @example
     * // Get one Vendedores
     * const vendedores = await prisma.vendedores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vendedoresFindFirstOrThrowArgs>(args?: SelectSubset<T, vendedoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__vendedoresClient<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendedores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendedoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendedores
     * const vendedores = await prisma.vendedores.findMany()
     * 
     * // Get first 10 Vendedores
     * const vendedores = await prisma.vendedores.findMany({ take: 10 })
     * 
     * // Only select the `id_vendedor`
     * const vendedoresWithId_vendedorOnly = await prisma.vendedores.findMany({ select: { id_vendedor: true } })
     * 
     */
    findMany<T extends vendedoresFindManyArgs>(args?: SelectSubset<T, vendedoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendedores.
     * @param {vendedoresCreateArgs} args - Arguments to create a Vendedores.
     * @example
     * // Create one Vendedores
     * const Vendedores = await prisma.vendedores.create({
     *   data: {
     *     // ... data to create a Vendedores
     *   }
     * })
     * 
     */
    create<T extends vendedoresCreateArgs>(args: SelectSubset<T, vendedoresCreateArgs<ExtArgs>>): Prisma__vendedoresClient<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendedores.
     * @param {vendedoresCreateManyArgs} args - Arguments to create many Vendedores.
     * @example
     * // Create many Vendedores
     * const vendedores = await prisma.vendedores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vendedoresCreateManyArgs>(args?: SelectSubset<T, vendedoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendedores and returns the data saved in the database.
     * @param {vendedoresCreateManyAndReturnArgs} args - Arguments to create many Vendedores.
     * @example
     * // Create many Vendedores
     * const vendedores = await prisma.vendedores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendedores and only return the `id_vendedor`
     * const vendedoresWithId_vendedorOnly = await prisma.vendedores.createManyAndReturn({
     *   select: { id_vendedor: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vendedoresCreateManyAndReturnArgs>(args?: SelectSubset<T, vendedoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vendedores.
     * @param {vendedoresDeleteArgs} args - Arguments to delete one Vendedores.
     * @example
     * // Delete one Vendedores
     * const Vendedores = await prisma.vendedores.delete({
     *   where: {
     *     // ... filter to delete one Vendedores
     *   }
     * })
     * 
     */
    delete<T extends vendedoresDeleteArgs>(args: SelectSubset<T, vendedoresDeleteArgs<ExtArgs>>): Prisma__vendedoresClient<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendedores.
     * @param {vendedoresUpdateArgs} args - Arguments to update one Vendedores.
     * @example
     * // Update one Vendedores
     * const vendedores = await prisma.vendedores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vendedoresUpdateArgs>(args: SelectSubset<T, vendedoresUpdateArgs<ExtArgs>>): Prisma__vendedoresClient<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendedores.
     * @param {vendedoresDeleteManyArgs} args - Arguments to filter Vendedores to delete.
     * @example
     * // Delete a few Vendedores
     * const { count } = await prisma.vendedores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vendedoresDeleteManyArgs>(args?: SelectSubset<T, vendedoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendedoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendedores
     * const vendedores = await prisma.vendedores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vendedoresUpdateManyArgs>(args: SelectSubset<T, vendedoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendedores and returns the data updated in the database.
     * @param {vendedoresUpdateManyAndReturnArgs} args - Arguments to update many Vendedores.
     * @example
     * // Update many Vendedores
     * const vendedores = await prisma.vendedores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendedores and only return the `id_vendedor`
     * const vendedoresWithId_vendedorOnly = await prisma.vendedores.updateManyAndReturn({
     *   select: { id_vendedor: true },
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
    updateManyAndReturn<T extends vendedoresUpdateManyAndReturnArgs>(args: SelectSubset<T, vendedoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vendedores.
     * @param {vendedoresUpsertArgs} args - Arguments to update or create a Vendedores.
     * @example
     * // Update or create a Vendedores
     * const vendedores = await prisma.vendedores.upsert({
     *   create: {
     *     // ... data to create a Vendedores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendedores we want to update
     *   }
     * })
     */
    upsert<T extends vendedoresUpsertArgs>(args: SelectSubset<T, vendedoresUpsertArgs<ExtArgs>>): Prisma__vendedoresClient<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendedoresCountArgs} args - Arguments to filter Vendedores to count.
     * @example
     * // Count the number of Vendedores
     * const count = await prisma.vendedores.count({
     *   where: {
     *     // ... the filter for the Vendedores we want to count
     *   }
     * })
    **/
    count<T extends vendedoresCountArgs>(
      args?: Subset<T, vendedoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendedoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VendedoresAggregateArgs>(args: Subset<T, VendedoresAggregateArgs>): Prisma.PrismaPromise<GetVendedoresAggregateType<T>>

    /**
     * Group by Vendedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendedoresGroupByArgs} args - Group by arguments.
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
      T extends vendedoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vendedoresGroupByArgs['orderBy'] }
        : { orderBy?: vendedoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, vendedoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendedoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vendedores model
   */
  readonly fields: vendedoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vendedores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vendedoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the vendedores model
   */
  interface vendedoresFieldRefs {
    readonly id_vendedor: FieldRef<"vendedores", 'Int'>
    readonly nombre: FieldRef<"vendedores", 'String'>
    readonly apellido: FieldRef<"vendedores", 'String'>
    readonly mail: FieldRef<"vendedores", 'String'>
    readonly contrasenia: FieldRef<"vendedores", 'String'>
    readonly fecha_nacimiento: FieldRef<"vendedores", 'DateTime'>
    readonly cuil: FieldRef<"vendedores", 'Decimal'>
    readonly direccion: FieldRef<"vendedores", 'String'>
    readonly descripcion: FieldRef<"vendedores", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vendedores findUnique
   */
  export type vendedoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * Filter, which vendedores to fetch.
     */
    where: vendedoresWhereUniqueInput
  }

  /**
   * vendedores findUniqueOrThrow
   */
  export type vendedoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * Filter, which vendedores to fetch.
     */
    where: vendedoresWhereUniqueInput
  }

  /**
   * vendedores findFirst
   */
  export type vendedoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * Filter, which vendedores to fetch.
     */
    where?: vendedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendedores to fetch.
     */
    orderBy?: vendedoresOrderByWithRelationInput | vendedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendedores.
     */
    cursor?: vendedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendedores.
     */
    distinct?: VendedoresScalarFieldEnum | VendedoresScalarFieldEnum[]
  }

  /**
   * vendedores findFirstOrThrow
   */
  export type vendedoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * Filter, which vendedores to fetch.
     */
    where?: vendedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendedores to fetch.
     */
    orderBy?: vendedoresOrderByWithRelationInput | vendedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendedores.
     */
    cursor?: vendedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendedores.
     */
    distinct?: VendedoresScalarFieldEnum | VendedoresScalarFieldEnum[]
  }

  /**
   * vendedores findMany
   */
  export type vendedoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * Filter, which vendedores to fetch.
     */
    where?: vendedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendedores to fetch.
     */
    orderBy?: vendedoresOrderByWithRelationInput | vendedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vendedores.
     */
    cursor?: vendedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendedores.
     */
    skip?: number
    distinct?: VendedoresScalarFieldEnum | VendedoresScalarFieldEnum[]
  }

  /**
   * vendedores create
   */
  export type vendedoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * The data needed to create a vendedores.
     */
    data: XOR<vendedoresCreateInput, vendedoresUncheckedCreateInput>
  }

  /**
   * vendedores createMany
   */
  export type vendedoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vendedores.
     */
    data: vendedoresCreateManyInput | vendedoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vendedores createManyAndReturn
   */
  export type vendedoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * The data used to create many vendedores.
     */
    data: vendedoresCreateManyInput | vendedoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vendedores update
   */
  export type vendedoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * The data needed to update a vendedores.
     */
    data: XOR<vendedoresUpdateInput, vendedoresUncheckedUpdateInput>
    /**
     * Choose, which vendedores to update.
     */
    where: vendedoresWhereUniqueInput
  }

  /**
   * vendedores updateMany
   */
  export type vendedoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vendedores.
     */
    data: XOR<vendedoresUpdateManyMutationInput, vendedoresUncheckedUpdateManyInput>
    /**
     * Filter which vendedores to update
     */
    where?: vendedoresWhereInput
    /**
     * Limit how many vendedores to update.
     */
    limit?: number
  }

  /**
   * vendedores updateManyAndReturn
   */
  export type vendedoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * The data used to update vendedores.
     */
    data: XOR<vendedoresUpdateManyMutationInput, vendedoresUncheckedUpdateManyInput>
    /**
     * Filter which vendedores to update
     */
    where?: vendedoresWhereInput
    /**
     * Limit how many vendedores to update.
     */
    limit?: number
  }

  /**
   * vendedores upsert
   */
  export type vendedoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * The filter to search for the vendedores to update in case it exists.
     */
    where: vendedoresWhereUniqueInput
    /**
     * In case the vendedores found by the `where` argument doesn't exist, create a new vendedores with this data.
     */
    create: XOR<vendedoresCreateInput, vendedoresUncheckedCreateInput>
    /**
     * In case the vendedores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vendedoresUpdateInput, vendedoresUncheckedUpdateInput>
  }

  /**
   * vendedores delete
   */
  export type vendedoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * Filter which vendedores to delete.
     */
    where: vendedoresWhereUniqueInput
  }

  /**
   * vendedores deleteMany
   */
  export type vendedoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendedores to delete
     */
    where?: vendedoresWhereInput
    /**
     * Limit how many vendedores to delete.
     */
    limit?: number
  }

  /**
   * vendedores without action
   */
  export type vendedoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
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


  export const CoolersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    rpm: 'rpm',
    noise: 'noise',
    color: 'color',
    size: 'size',
    imagen_url: 'imagen_url'
  };

  export type CoolersScalarFieldEnum = (typeof CoolersScalarFieldEnum)[keyof typeof CoolersScalarFieldEnum]


  export const CpusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    core_count: 'core_count',
    core_clock: 'core_clock',
    boost_clock: 'boost_clock',
    tdp: 'tdp',
    graphics: 'graphics',
    smt: 'smt',
    imagen_url: 'imagen_url'
  };

  export type CpusScalarFieldEnum = (typeof CpusScalarFieldEnum)[keyof typeof CpusScalarFieldEnum]


  export const FuentesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    type: 'type',
    efficiency: 'efficiency',
    wattage: 'wattage',
    modular: 'modular',
    color: 'color',
    imagen_url: 'imagen_url'
  };

  export type FuentesScalarFieldEnum = (typeof FuentesScalarFieldEnum)[keyof typeof FuentesScalarFieldEnum]


  export const GabinetesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    type: 'type',
    color: 'color',
    psu: 'psu',
    side_panel: 'side_panel',
    external_volume: 'external_volume',
    internal_35_bays: 'internal_35_bays',
    imagen_url: 'imagen_url'
  };

  export type GabinetesScalarFieldEnum = (typeof GabinetesScalarFieldEnum)[keyof typeof GabinetesScalarFieldEnum]


  export const GraficasScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    chipset: 'chipset',
    memory: 'memory',
    core_clock: 'core_clock',
    boost_clock: 'boost_clock',
    color: 'color',
    length: 'length',
    imagen_url: 'imagen_url'
  };

  export type GraficasScalarFieldEnum = (typeof GraficasScalarFieldEnum)[keyof typeof GraficasScalarFieldEnum]


  export const Memorias_externasScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    type: 'type',
    interface: 'interface',
    capacity: 'capacity',
    price_per_gb: 'price_per_gb',
    color: 'color',
    imagen_url: 'imagen_url'
  };

  export type Memorias_externasScalarFieldEnum = (typeof Memorias_externasScalarFieldEnum)[keyof typeof Memorias_externasScalarFieldEnum]


  export const Memorias_internasScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    capacity: 'capacity',
    price_per_gb: 'price_per_gb',
    type: 'type',
    cache: 'cache',
    form_factor: 'form_factor',
    interface: 'interface',
    imagen_url: 'imagen_url'
  };

  export type Memorias_internasScalarFieldEnum = (typeof Memorias_internasScalarFieldEnum)[keyof typeof Memorias_internasScalarFieldEnum]


  export const MothersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    socket: 'socket',
    form_factor: 'form_factor',
    max_memory: 'max_memory',
    memory_slots: 'memory_slots',
    color: 'color',
    imagen_url: 'imagen_url'
  };

  export type MothersScalarFieldEnum = (typeof MothersScalarFieldEnum)[keyof typeof MothersScalarFieldEnum]


  export const RamsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    speed_channels: 'speed_channels',
    speed_mhz: 'speed_mhz',
    modules_qty: 'modules_qty',
    module_capacity: 'module_capacity',
    price_per_gb: 'price_per_gb',
    color: 'color',
    first_word_latency: 'first_word_latency',
    cas_latency: 'cas_latency',
    imagen_url: 'imagen_url'
  };

  export type RamsScalarFieldEnum = (typeof RamsScalarFieldEnum)[keyof typeof RamsScalarFieldEnum]


  export const SoundsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    channels: 'channels',
    digital_audio: 'digital_audio',
    snr: 'snr',
    sample_rate: 'sample_rate',
    chipset: 'chipset',
    interface: 'interface',
    imagen_url: 'imagen_url'
  };

  export type SoundsScalarFieldEnum = (typeof SoundsScalarFieldEnum)[keyof typeof SoundsScalarFieldEnum]


  export const UsusariosScalarFieldEnum: {
    id_user: 'id_user',
    nombre: 'nombre',
    apellido: 'apellido',
    mail: 'mail',
    contrasenia: 'contrasenia',
    fecha_nacimiento: 'fecha_nacimiento',
    permisos: 'permisos'
  };

  export type UsusariosScalarFieldEnum = (typeof UsusariosScalarFieldEnum)[keyof typeof UsusariosScalarFieldEnum]


  export const VendedoresScalarFieldEnum: {
    id_vendedor: 'id_vendedor',
    nombre: 'nombre',
    apellido: 'apellido',
    mail: 'mail',
    contrasenia: 'contrasenia',
    fecha_nacimiento: 'fecha_nacimiento',
    cuil: 'cuil',
    direccion: 'direccion',
    descripcion: 'descripcion'
  };

  export type VendedoresScalarFieldEnum = (typeof VendedoresScalarFieldEnum)[keyof typeof VendedoresScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type coolersWhereInput = {
    AND?: coolersWhereInput | coolersWhereInput[]
    OR?: coolersWhereInput[]
    NOT?: coolersWhereInput | coolersWhereInput[]
    id?: IntFilter<"coolers"> | number
    name?: StringFilter<"coolers"> | string
    price?: DecimalNullableFilter<"coolers"> | Decimal | DecimalJsLike | number | string | null
    rpm?: IntNullableFilter<"coolers"> | number | null
    noise?: DecimalNullableFilter<"coolers"> | Decimal | DecimalJsLike | number | string | null
    color?: StringNullableFilter<"coolers"> | string | null
    size?: IntNullableFilter<"coolers"> | number | null
    imagen_url?: StringNullableFilter<"coolers"> | string | null
  }

  export type coolersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    rpm?: SortOrderInput | SortOrder
    noise?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
  }

  export type coolersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: coolersWhereInput | coolersWhereInput[]
    OR?: coolersWhereInput[]
    NOT?: coolersWhereInput | coolersWhereInput[]
    name?: StringFilter<"coolers"> | string
    price?: DecimalNullableFilter<"coolers"> | Decimal | DecimalJsLike | number | string | null
    rpm?: IntNullableFilter<"coolers"> | number | null
    noise?: DecimalNullableFilter<"coolers"> | Decimal | DecimalJsLike | number | string | null
    color?: StringNullableFilter<"coolers"> | string | null
    size?: IntNullableFilter<"coolers"> | number | null
    imagen_url?: StringNullableFilter<"coolers"> | string | null
  }, "id">

  export type coolersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    rpm?: SortOrderInput | SortOrder
    noise?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
    _count?: coolersCountOrderByAggregateInput
    _avg?: coolersAvgOrderByAggregateInput
    _max?: coolersMaxOrderByAggregateInput
    _min?: coolersMinOrderByAggregateInput
    _sum?: coolersSumOrderByAggregateInput
  }

  export type coolersScalarWhereWithAggregatesInput = {
    AND?: coolersScalarWhereWithAggregatesInput | coolersScalarWhereWithAggregatesInput[]
    OR?: coolersScalarWhereWithAggregatesInput[]
    NOT?: coolersScalarWhereWithAggregatesInput | coolersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"coolers"> | number
    name?: StringWithAggregatesFilter<"coolers"> | string
    price?: DecimalNullableWithAggregatesFilter<"coolers"> | Decimal | DecimalJsLike | number | string | null
    rpm?: IntNullableWithAggregatesFilter<"coolers"> | number | null
    noise?: DecimalNullableWithAggregatesFilter<"coolers"> | Decimal | DecimalJsLike | number | string | null
    color?: StringNullableWithAggregatesFilter<"coolers"> | string | null
    size?: IntNullableWithAggregatesFilter<"coolers"> | number | null
    imagen_url?: StringNullableWithAggregatesFilter<"coolers"> | string | null
  }

  export type cpusWhereInput = {
    AND?: cpusWhereInput | cpusWhereInput[]
    OR?: cpusWhereInput[]
    NOT?: cpusWhereInput | cpusWhereInput[]
    id?: IntFilter<"cpus"> | number
    name?: StringFilter<"cpus"> | string
    price?: DecimalNullableFilter<"cpus"> | Decimal | DecimalJsLike | number | string | null
    core_count?: IntFilter<"cpus"> | number
    core_clock?: DecimalFilter<"cpus"> | Decimal | DecimalJsLike | number | string
    boost_clock?: DecimalNullableFilter<"cpus"> | Decimal | DecimalJsLike | number | string | null
    tdp?: IntFilter<"cpus"> | number
    graphics?: StringNullableFilter<"cpus"> | string | null
    smt?: BoolFilter<"cpus"> | boolean
    imagen_url?: StringNullableFilter<"cpus"> | string | null
  }

  export type cpusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    core_count?: SortOrder
    core_clock?: SortOrder
    boost_clock?: SortOrderInput | SortOrder
    tdp?: SortOrder
    graphics?: SortOrderInput | SortOrder
    smt?: SortOrder
    imagen_url?: SortOrderInput | SortOrder
  }

  export type cpusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cpusWhereInput | cpusWhereInput[]
    OR?: cpusWhereInput[]
    NOT?: cpusWhereInput | cpusWhereInput[]
    name?: StringFilter<"cpus"> | string
    price?: DecimalNullableFilter<"cpus"> | Decimal | DecimalJsLike | number | string | null
    core_count?: IntFilter<"cpus"> | number
    core_clock?: DecimalFilter<"cpus"> | Decimal | DecimalJsLike | number | string
    boost_clock?: DecimalNullableFilter<"cpus"> | Decimal | DecimalJsLike | number | string | null
    tdp?: IntFilter<"cpus"> | number
    graphics?: StringNullableFilter<"cpus"> | string | null
    smt?: BoolFilter<"cpus"> | boolean
    imagen_url?: StringNullableFilter<"cpus"> | string | null
  }, "id">

  export type cpusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    core_count?: SortOrder
    core_clock?: SortOrder
    boost_clock?: SortOrderInput | SortOrder
    tdp?: SortOrder
    graphics?: SortOrderInput | SortOrder
    smt?: SortOrder
    imagen_url?: SortOrderInput | SortOrder
    _count?: cpusCountOrderByAggregateInput
    _avg?: cpusAvgOrderByAggregateInput
    _max?: cpusMaxOrderByAggregateInput
    _min?: cpusMinOrderByAggregateInput
    _sum?: cpusSumOrderByAggregateInput
  }

  export type cpusScalarWhereWithAggregatesInput = {
    AND?: cpusScalarWhereWithAggregatesInput | cpusScalarWhereWithAggregatesInput[]
    OR?: cpusScalarWhereWithAggregatesInput[]
    NOT?: cpusScalarWhereWithAggregatesInput | cpusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cpus"> | number
    name?: StringWithAggregatesFilter<"cpus"> | string
    price?: DecimalNullableWithAggregatesFilter<"cpus"> | Decimal | DecimalJsLike | number | string | null
    core_count?: IntWithAggregatesFilter<"cpus"> | number
    core_clock?: DecimalWithAggregatesFilter<"cpus"> | Decimal | DecimalJsLike | number | string
    boost_clock?: DecimalNullableWithAggregatesFilter<"cpus"> | Decimal | DecimalJsLike | number | string | null
    tdp?: IntWithAggregatesFilter<"cpus"> | number
    graphics?: StringNullableWithAggregatesFilter<"cpus"> | string | null
    smt?: BoolWithAggregatesFilter<"cpus"> | boolean
    imagen_url?: StringNullableWithAggregatesFilter<"cpus"> | string | null
  }

  export type fuentesWhereInput = {
    AND?: fuentesWhereInput | fuentesWhereInput[]
    OR?: fuentesWhereInput[]
    NOT?: fuentesWhereInput | fuentesWhereInput[]
    id?: IntFilter<"fuentes"> | number
    name?: StringFilter<"fuentes"> | string
    price?: DecimalNullableFilter<"fuentes"> | Decimal | DecimalJsLike | number | string | null
    type?: StringNullableFilter<"fuentes"> | string | null
    efficiency?: StringNullableFilter<"fuentes"> | string | null
    wattage?: IntNullableFilter<"fuentes"> | number | null
    modular?: StringNullableFilter<"fuentes"> | string | null
    color?: StringNullableFilter<"fuentes"> | string | null
    imagen_url?: StringNullableFilter<"fuentes"> | string | null
  }

  export type fuentesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    efficiency?: SortOrderInput | SortOrder
    wattage?: SortOrderInput | SortOrder
    modular?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
  }

  export type fuentesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: fuentesWhereInput | fuentesWhereInput[]
    OR?: fuentesWhereInput[]
    NOT?: fuentesWhereInput | fuentesWhereInput[]
    name?: StringFilter<"fuentes"> | string
    price?: DecimalNullableFilter<"fuentes"> | Decimal | DecimalJsLike | number | string | null
    type?: StringNullableFilter<"fuentes"> | string | null
    efficiency?: StringNullableFilter<"fuentes"> | string | null
    wattage?: IntNullableFilter<"fuentes"> | number | null
    modular?: StringNullableFilter<"fuentes"> | string | null
    color?: StringNullableFilter<"fuentes"> | string | null
    imagen_url?: StringNullableFilter<"fuentes"> | string | null
  }, "id">

  export type fuentesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    efficiency?: SortOrderInput | SortOrder
    wattage?: SortOrderInput | SortOrder
    modular?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
    _count?: fuentesCountOrderByAggregateInput
    _avg?: fuentesAvgOrderByAggregateInput
    _max?: fuentesMaxOrderByAggregateInput
    _min?: fuentesMinOrderByAggregateInput
    _sum?: fuentesSumOrderByAggregateInput
  }

  export type fuentesScalarWhereWithAggregatesInput = {
    AND?: fuentesScalarWhereWithAggregatesInput | fuentesScalarWhereWithAggregatesInput[]
    OR?: fuentesScalarWhereWithAggregatesInput[]
    NOT?: fuentesScalarWhereWithAggregatesInput | fuentesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"fuentes"> | number
    name?: StringWithAggregatesFilter<"fuentes"> | string
    price?: DecimalNullableWithAggregatesFilter<"fuentes"> | Decimal | DecimalJsLike | number | string | null
    type?: StringNullableWithAggregatesFilter<"fuentes"> | string | null
    efficiency?: StringNullableWithAggregatesFilter<"fuentes"> | string | null
    wattage?: IntNullableWithAggregatesFilter<"fuentes"> | number | null
    modular?: StringNullableWithAggregatesFilter<"fuentes"> | string | null
    color?: StringNullableWithAggregatesFilter<"fuentes"> | string | null
    imagen_url?: StringNullableWithAggregatesFilter<"fuentes"> | string | null
  }

  export type gabinetesWhereInput = {
    AND?: gabinetesWhereInput | gabinetesWhereInput[]
    OR?: gabinetesWhereInput[]
    NOT?: gabinetesWhereInput | gabinetesWhereInput[]
    id?: IntFilter<"gabinetes"> | number
    name?: StringFilter<"gabinetes"> | string
    price?: DecimalNullableFilter<"gabinetes"> | Decimal | DecimalJsLike | number | string | null
    type?: StringNullableFilter<"gabinetes"> | string | null
    color?: StringNullableFilter<"gabinetes"> | string | null
    psu?: StringNullableFilter<"gabinetes"> | string | null
    side_panel?: StringNullableFilter<"gabinetes"> | string | null
    external_volume?: DecimalNullableFilter<"gabinetes"> | Decimal | DecimalJsLike | number | string | null
    internal_35_bays?: IntNullableFilter<"gabinetes"> | number | null
    imagen_url?: StringNullableFilter<"gabinetes"> | string | null
  }

  export type gabinetesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    psu?: SortOrderInput | SortOrder
    side_panel?: SortOrderInput | SortOrder
    external_volume?: SortOrderInput | SortOrder
    internal_35_bays?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
  }

  export type gabinetesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: gabinetesWhereInput | gabinetesWhereInput[]
    OR?: gabinetesWhereInput[]
    NOT?: gabinetesWhereInput | gabinetesWhereInput[]
    name?: StringFilter<"gabinetes"> | string
    price?: DecimalNullableFilter<"gabinetes"> | Decimal | DecimalJsLike | number | string | null
    type?: StringNullableFilter<"gabinetes"> | string | null
    color?: StringNullableFilter<"gabinetes"> | string | null
    psu?: StringNullableFilter<"gabinetes"> | string | null
    side_panel?: StringNullableFilter<"gabinetes"> | string | null
    external_volume?: DecimalNullableFilter<"gabinetes"> | Decimal | DecimalJsLike | number | string | null
    internal_35_bays?: IntNullableFilter<"gabinetes"> | number | null
    imagen_url?: StringNullableFilter<"gabinetes"> | string | null
  }, "id">

  export type gabinetesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    psu?: SortOrderInput | SortOrder
    side_panel?: SortOrderInput | SortOrder
    external_volume?: SortOrderInput | SortOrder
    internal_35_bays?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
    _count?: gabinetesCountOrderByAggregateInput
    _avg?: gabinetesAvgOrderByAggregateInput
    _max?: gabinetesMaxOrderByAggregateInput
    _min?: gabinetesMinOrderByAggregateInput
    _sum?: gabinetesSumOrderByAggregateInput
  }

  export type gabinetesScalarWhereWithAggregatesInput = {
    AND?: gabinetesScalarWhereWithAggregatesInput | gabinetesScalarWhereWithAggregatesInput[]
    OR?: gabinetesScalarWhereWithAggregatesInput[]
    NOT?: gabinetesScalarWhereWithAggregatesInput | gabinetesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"gabinetes"> | number
    name?: StringWithAggregatesFilter<"gabinetes"> | string
    price?: DecimalNullableWithAggregatesFilter<"gabinetes"> | Decimal | DecimalJsLike | number | string | null
    type?: StringNullableWithAggregatesFilter<"gabinetes"> | string | null
    color?: StringNullableWithAggregatesFilter<"gabinetes"> | string | null
    psu?: StringNullableWithAggregatesFilter<"gabinetes"> | string | null
    side_panel?: StringNullableWithAggregatesFilter<"gabinetes"> | string | null
    external_volume?: DecimalNullableWithAggregatesFilter<"gabinetes"> | Decimal | DecimalJsLike | number | string | null
    internal_35_bays?: IntNullableWithAggregatesFilter<"gabinetes"> | number | null
    imagen_url?: StringNullableWithAggregatesFilter<"gabinetes"> | string | null
  }

  export type graficasWhereInput = {
    AND?: graficasWhereInput | graficasWhereInput[]
    OR?: graficasWhereInput[]
    NOT?: graficasWhereInput | graficasWhereInput[]
    id?: IntFilter<"graficas"> | number
    name?: StringFilter<"graficas"> | string
    price?: DecimalNullableFilter<"graficas"> | Decimal | DecimalJsLike | number | string | null
    chipset?: StringNullableFilter<"graficas"> | string | null
    memory?: IntNullableFilter<"graficas"> | number | null
    core_clock?: IntNullableFilter<"graficas"> | number | null
    boost_clock?: IntNullableFilter<"graficas"> | number | null
    color?: StringNullableFilter<"graficas"> | string | null
    length?: IntNullableFilter<"graficas"> | number | null
    imagen_url?: StringNullableFilter<"graficas"> | string | null
  }

  export type graficasOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    chipset?: SortOrderInput | SortOrder
    memory?: SortOrderInput | SortOrder
    core_clock?: SortOrderInput | SortOrder
    boost_clock?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    length?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
  }

  export type graficasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: graficasWhereInput | graficasWhereInput[]
    OR?: graficasWhereInput[]
    NOT?: graficasWhereInput | graficasWhereInput[]
    name?: StringFilter<"graficas"> | string
    price?: DecimalNullableFilter<"graficas"> | Decimal | DecimalJsLike | number | string | null
    chipset?: StringNullableFilter<"graficas"> | string | null
    memory?: IntNullableFilter<"graficas"> | number | null
    core_clock?: IntNullableFilter<"graficas"> | number | null
    boost_clock?: IntNullableFilter<"graficas"> | number | null
    color?: StringNullableFilter<"graficas"> | string | null
    length?: IntNullableFilter<"graficas"> | number | null
    imagen_url?: StringNullableFilter<"graficas"> | string | null
  }, "id">

  export type graficasOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    chipset?: SortOrderInput | SortOrder
    memory?: SortOrderInput | SortOrder
    core_clock?: SortOrderInput | SortOrder
    boost_clock?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    length?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
    _count?: graficasCountOrderByAggregateInput
    _avg?: graficasAvgOrderByAggregateInput
    _max?: graficasMaxOrderByAggregateInput
    _min?: graficasMinOrderByAggregateInput
    _sum?: graficasSumOrderByAggregateInput
  }

  export type graficasScalarWhereWithAggregatesInput = {
    AND?: graficasScalarWhereWithAggregatesInput | graficasScalarWhereWithAggregatesInput[]
    OR?: graficasScalarWhereWithAggregatesInput[]
    NOT?: graficasScalarWhereWithAggregatesInput | graficasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"graficas"> | number
    name?: StringWithAggregatesFilter<"graficas"> | string
    price?: DecimalNullableWithAggregatesFilter<"graficas"> | Decimal | DecimalJsLike | number | string | null
    chipset?: StringNullableWithAggregatesFilter<"graficas"> | string | null
    memory?: IntNullableWithAggregatesFilter<"graficas"> | number | null
    core_clock?: IntNullableWithAggregatesFilter<"graficas"> | number | null
    boost_clock?: IntNullableWithAggregatesFilter<"graficas"> | number | null
    color?: StringNullableWithAggregatesFilter<"graficas"> | string | null
    length?: IntNullableWithAggregatesFilter<"graficas"> | number | null
    imagen_url?: StringNullableWithAggregatesFilter<"graficas"> | string | null
  }

  export type memorias_externasWhereInput = {
    AND?: memorias_externasWhereInput | memorias_externasWhereInput[]
    OR?: memorias_externasWhereInput[]
    NOT?: memorias_externasWhereInput | memorias_externasWhereInput[]
    id?: IntFilter<"memorias_externas"> | number
    name?: StringFilter<"memorias_externas"> | string
    price?: DecimalNullableFilter<"memorias_externas"> | Decimal | DecimalJsLike | number | string | null
    type?: StringNullableFilter<"memorias_externas"> | string | null
    interface?: StringNullableFilter<"memorias_externas"> | string | null
    capacity?: IntNullableFilter<"memorias_externas"> | number | null
    price_per_gb?: DecimalNullableFilter<"memorias_externas"> | Decimal | DecimalJsLike | number | string | null
    color?: StringNullableFilter<"memorias_externas"> | string | null
    imagen_url?: StringNullableFilter<"memorias_externas"> | string | null
  }

  export type memorias_externasOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    interface?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    price_per_gb?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
  }

  export type memorias_externasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: memorias_externasWhereInput | memorias_externasWhereInput[]
    OR?: memorias_externasWhereInput[]
    NOT?: memorias_externasWhereInput | memorias_externasWhereInput[]
    name?: StringFilter<"memorias_externas"> | string
    price?: DecimalNullableFilter<"memorias_externas"> | Decimal | DecimalJsLike | number | string | null
    type?: StringNullableFilter<"memorias_externas"> | string | null
    interface?: StringNullableFilter<"memorias_externas"> | string | null
    capacity?: IntNullableFilter<"memorias_externas"> | number | null
    price_per_gb?: DecimalNullableFilter<"memorias_externas"> | Decimal | DecimalJsLike | number | string | null
    color?: StringNullableFilter<"memorias_externas"> | string | null
    imagen_url?: StringNullableFilter<"memorias_externas"> | string | null
  }, "id">

  export type memorias_externasOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    interface?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    price_per_gb?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
    _count?: memorias_externasCountOrderByAggregateInput
    _avg?: memorias_externasAvgOrderByAggregateInput
    _max?: memorias_externasMaxOrderByAggregateInput
    _min?: memorias_externasMinOrderByAggregateInput
    _sum?: memorias_externasSumOrderByAggregateInput
  }

  export type memorias_externasScalarWhereWithAggregatesInput = {
    AND?: memorias_externasScalarWhereWithAggregatesInput | memorias_externasScalarWhereWithAggregatesInput[]
    OR?: memorias_externasScalarWhereWithAggregatesInput[]
    NOT?: memorias_externasScalarWhereWithAggregatesInput | memorias_externasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"memorias_externas"> | number
    name?: StringWithAggregatesFilter<"memorias_externas"> | string
    price?: DecimalNullableWithAggregatesFilter<"memorias_externas"> | Decimal | DecimalJsLike | number | string | null
    type?: StringNullableWithAggregatesFilter<"memorias_externas"> | string | null
    interface?: StringNullableWithAggregatesFilter<"memorias_externas"> | string | null
    capacity?: IntNullableWithAggregatesFilter<"memorias_externas"> | number | null
    price_per_gb?: DecimalNullableWithAggregatesFilter<"memorias_externas"> | Decimal | DecimalJsLike | number | string | null
    color?: StringNullableWithAggregatesFilter<"memorias_externas"> | string | null
    imagen_url?: StringNullableWithAggregatesFilter<"memorias_externas"> | string | null
  }

  export type memorias_internasWhereInput = {
    AND?: memorias_internasWhereInput | memorias_internasWhereInput[]
    OR?: memorias_internasWhereInput[]
    NOT?: memorias_internasWhereInput | memorias_internasWhereInput[]
    id?: IntFilter<"memorias_internas"> | number
    name?: StringFilter<"memorias_internas"> | string
    price?: DecimalNullableFilter<"memorias_internas"> | Decimal | DecimalJsLike | number | string | null
    capacity?: IntNullableFilter<"memorias_internas"> | number | null
    price_per_gb?: DecimalNullableFilter<"memorias_internas"> | Decimal | DecimalJsLike | number | string | null
    type?: StringNullableFilter<"memorias_internas"> | string | null
    cache?: IntNullableFilter<"memorias_internas"> | number | null
    form_factor?: StringNullableFilter<"memorias_internas"> | string | null
    interface?: StringNullableFilter<"memorias_internas"> | string | null
    imagen_url?: StringNullableFilter<"memorias_internas"> | string | null
  }

  export type memorias_internasOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    price_per_gb?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    cache?: SortOrderInput | SortOrder
    form_factor?: SortOrderInput | SortOrder
    interface?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
  }

  export type memorias_internasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: memorias_internasWhereInput | memorias_internasWhereInput[]
    OR?: memorias_internasWhereInput[]
    NOT?: memorias_internasWhereInput | memorias_internasWhereInput[]
    name?: StringFilter<"memorias_internas"> | string
    price?: DecimalNullableFilter<"memorias_internas"> | Decimal | DecimalJsLike | number | string | null
    capacity?: IntNullableFilter<"memorias_internas"> | number | null
    price_per_gb?: DecimalNullableFilter<"memorias_internas"> | Decimal | DecimalJsLike | number | string | null
    type?: StringNullableFilter<"memorias_internas"> | string | null
    cache?: IntNullableFilter<"memorias_internas"> | number | null
    form_factor?: StringNullableFilter<"memorias_internas"> | string | null
    interface?: StringNullableFilter<"memorias_internas"> | string | null
    imagen_url?: StringNullableFilter<"memorias_internas"> | string | null
  }, "id">

  export type memorias_internasOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    price_per_gb?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    cache?: SortOrderInput | SortOrder
    form_factor?: SortOrderInput | SortOrder
    interface?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
    _count?: memorias_internasCountOrderByAggregateInput
    _avg?: memorias_internasAvgOrderByAggregateInput
    _max?: memorias_internasMaxOrderByAggregateInput
    _min?: memorias_internasMinOrderByAggregateInput
    _sum?: memorias_internasSumOrderByAggregateInput
  }

  export type memorias_internasScalarWhereWithAggregatesInput = {
    AND?: memorias_internasScalarWhereWithAggregatesInput | memorias_internasScalarWhereWithAggregatesInput[]
    OR?: memorias_internasScalarWhereWithAggregatesInput[]
    NOT?: memorias_internasScalarWhereWithAggregatesInput | memorias_internasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"memorias_internas"> | number
    name?: StringWithAggregatesFilter<"memorias_internas"> | string
    price?: DecimalNullableWithAggregatesFilter<"memorias_internas"> | Decimal | DecimalJsLike | number | string | null
    capacity?: IntNullableWithAggregatesFilter<"memorias_internas"> | number | null
    price_per_gb?: DecimalNullableWithAggregatesFilter<"memorias_internas"> | Decimal | DecimalJsLike | number | string | null
    type?: StringNullableWithAggregatesFilter<"memorias_internas"> | string | null
    cache?: IntNullableWithAggregatesFilter<"memorias_internas"> | number | null
    form_factor?: StringNullableWithAggregatesFilter<"memorias_internas"> | string | null
    interface?: StringNullableWithAggregatesFilter<"memorias_internas"> | string | null
    imagen_url?: StringNullableWithAggregatesFilter<"memorias_internas"> | string | null
  }

  export type mothersWhereInput = {
    AND?: mothersWhereInput | mothersWhereInput[]
    OR?: mothersWhereInput[]
    NOT?: mothersWhereInput | mothersWhereInput[]
    id?: IntFilter<"mothers"> | number
    name?: StringFilter<"mothers"> | string
    price?: DecimalNullableFilter<"mothers"> | Decimal | DecimalJsLike | number | string | null
    socket?: StringNullableFilter<"mothers"> | string | null
    form_factor?: StringNullableFilter<"mothers"> | string | null
    max_memory?: IntNullableFilter<"mothers"> | number | null
    memory_slots?: IntNullableFilter<"mothers"> | number | null
    color?: StringNullableFilter<"mothers"> | string | null
    imagen_url?: StringNullableFilter<"mothers"> | string | null
  }

  export type mothersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    socket?: SortOrderInput | SortOrder
    form_factor?: SortOrderInput | SortOrder
    max_memory?: SortOrderInput | SortOrder
    memory_slots?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
  }

  export type mothersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mothersWhereInput | mothersWhereInput[]
    OR?: mothersWhereInput[]
    NOT?: mothersWhereInput | mothersWhereInput[]
    name?: StringFilter<"mothers"> | string
    price?: DecimalNullableFilter<"mothers"> | Decimal | DecimalJsLike | number | string | null
    socket?: StringNullableFilter<"mothers"> | string | null
    form_factor?: StringNullableFilter<"mothers"> | string | null
    max_memory?: IntNullableFilter<"mothers"> | number | null
    memory_slots?: IntNullableFilter<"mothers"> | number | null
    color?: StringNullableFilter<"mothers"> | string | null
    imagen_url?: StringNullableFilter<"mothers"> | string | null
  }, "id">

  export type mothersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    socket?: SortOrderInput | SortOrder
    form_factor?: SortOrderInput | SortOrder
    max_memory?: SortOrderInput | SortOrder
    memory_slots?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
    _count?: mothersCountOrderByAggregateInput
    _avg?: mothersAvgOrderByAggregateInput
    _max?: mothersMaxOrderByAggregateInput
    _min?: mothersMinOrderByAggregateInput
    _sum?: mothersSumOrderByAggregateInput
  }

  export type mothersScalarWhereWithAggregatesInput = {
    AND?: mothersScalarWhereWithAggregatesInput | mothersScalarWhereWithAggregatesInput[]
    OR?: mothersScalarWhereWithAggregatesInput[]
    NOT?: mothersScalarWhereWithAggregatesInput | mothersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mothers"> | number
    name?: StringWithAggregatesFilter<"mothers"> | string
    price?: DecimalNullableWithAggregatesFilter<"mothers"> | Decimal | DecimalJsLike | number | string | null
    socket?: StringNullableWithAggregatesFilter<"mothers"> | string | null
    form_factor?: StringNullableWithAggregatesFilter<"mothers"> | string | null
    max_memory?: IntNullableWithAggregatesFilter<"mothers"> | number | null
    memory_slots?: IntNullableWithAggregatesFilter<"mothers"> | number | null
    color?: StringNullableWithAggregatesFilter<"mothers"> | string | null
    imagen_url?: StringNullableWithAggregatesFilter<"mothers"> | string | null
  }

  export type ramsWhereInput = {
    AND?: ramsWhereInput | ramsWhereInput[]
    OR?: ramsWhereInput[]
    NOT?: ramsWhereInput | ramsWhereInput[]
    id?: IntFilter<"rams"> | number
    name?: StringFilter<"rams"> | string
    price?: DecimalNullableFilter<"rams"> | Decimal | DecimalJsLike | number | string | null
    speed_channels?: IntNullableFilter<"rams"> | number | null
    speed_mhz?: IntNullableFilter<"rams"> | number | null
    modules_qty?: IntNullableFilter<"rams"> | number | null
    module_capacity?: IntNullableFilter<"rams"> | number | null
    price_per_gb?: DecimalNullableFilter<"rams"> | Decimal | DecimalJsLike | number | string | null
    color?: StringNullableFilter<"rams"> | string | null
    first_word_latency?: IntNullableFilter<"rams"> | number | null
    cas_latency?: IntNullableFilter<"rams"> | number | null
    imagen_url?: StringNullableFilter<"rams"> | string | null
  }

  export type ramsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    speed_channels?: SortOrderInput | SortOrder
    speed_mhz?: SortOrderInput | SortOrder
    modules_qty?: SortOrderInput | SortOrder
    module_capacity?: SortOrderInput | SortOrder
    price_per_gb?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    first_word_latency?: SortOrderInput | SortOrder
    cas_latency?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
  }

  export type ramsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ramsWhereInput | ramsWhereInput[]
    OR?: ramsWhereInput[]
    NOT?: ramsWhereInput | ramsWhereInput[]
    name?: StringFilter<"rams"> | string
    price?: DecimalNullableFilter<"rams"> | Decimal | DecimalJsLike | number | string | null
    speed_channels?: IntNullableFilter<"rams"> | number | null
    speed_mhz?: IntNullableFilter<"rams"> | number | null
    modules_qty?: IntNullableFilter<"rams"> | number | null
    module_capacity?: IntNullableFilter<"rams"> | number | null
    price_per_gb?: DecimalNullableFilter<"rams"> | Decimal | DecimalJsLike | number | string | null
    color?: StringNullableFilter<"rams"> | string | null
    first_word_latency?: IntNullableFilter<"rams"> | number | null
    cas_latency?: IntNullableFilter<"rams"> | number | null
    imagen_url?: StringNullableFilter<"rams"> | string | null
  }, "id">

  export type ramsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    speed_channels?: SortOrderInput | SortOrder
    speed_mhz?: SortOrderInput | SortOrder
    modules_qty?: SortOrderInput | SortOrder
    module_capacity?: SortOrderInput | SortOrder
    price_per_gb?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    first_word_latency?: SortOrderInput | SortOrder
    cas_latency?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
    _count?: ramsCountOrderByAggregateInput
    _avg?: ramsAvgOrderByAggregateInput
    _max?: ramsMaxOrderByAggregateInput
    _min?: ramsMinOrderByAggregateInput
    _sum?: ramsSumOrderByAggregateInput
  }

  export type ramsScalarWhereWithAggregatesInput = {
    AND?: ramsScalarWhereWithAggregatesInput | ramsScalarWhereWithAggregatesInput[]
    OR?: ramsScalarWhereWithAggregatesInput[]
    NOT?: ramsScalarWhereWithAggregatesInput | ramsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rams"> | number
    name?: StringWithAggregatesFilter<"rams"> | string
    price?: DecimalNullableWithAggregatesFilter<"rams"> | Decimal | DecimalJsLike | number | string | null
    speed_channels?: IntNullableWithAggregatesFilter<"rams"> | number | null
    speed_mhz?: IntNullableWithAggregatesFilter<"rams"> | number | null
    modules_qty?: IntNullableWithAggregatesFilter<"rams"> | number | null
    module_capacity?: IntNullableWithAggregatesFilter<"rams"> | number | null
    price_per_gb?: DecimalNullableWithAggregatesFilter<"rams"> | Decimal | DecimalJsLike | number | string | null
    color?: StringNullableWithAggregatesFilter<"rams"> | string | null
    first_word_latency?: IntNullableWithAggregatesFilter<"rams"> | number | null
    cas_latency?: IntNullableWithAggregatesFilter<"rams"> | number | null
    imagen_url?: StringNullableWithAggregatesFilter<"rams"> | string | null
  }

  export type soundsWhereInput = {
    AND?: soundsWhereInput | soundsWhereInput[]
    OR?: soundsWhereInput[]
    NOT?: soundsWhereInput | soundsWhereInput[]
    id?: IntFilter<"sounds"> | number
    name?: StringFilter<"sounds"> | string
    price?: DecimalNullableFilter<"sounds"> | Decimal | DecimalJsLike | number | string | null
    channels?: StringNullableFilter<"sounds"> | string | null
    digital_audio?: IntNullableFilter<"sounds"> | number | null
    snr?: IntNullableFilter<"sounds"> | number | null
    sample_rate?: IntNullableFilter<"sounds"> | number | null
    chipset?: StringNullableFilter<"sounds"> | string | null
    interface?: StringNullableFilter<"sounds"> | string | null
    imagen_url?: StringNullableFilter<"sounds"> | string | null
  }

  export type soundsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    channels?: SortOrderInput | SortOrder
    digital_audio?: SortOrderInput | SortOrder
    snr?: SortOrderInput | SortOrder
    sample_rate?: SortOrderInput | SortOrder
    chipset?: SortOrderInput | SortOrder
    interface?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
  }

  export type soundsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: soundsWhereInput | soundsWhereInput[]
    OR?: soundsWhereInput[]
    NOT?: soundsWhereInput | soundsWhereInput[]
    name?: StringFilter<"sounds"> | string
    price?: DecimalNullableFilter<"sounds"> | Decimal | DecimalJsLike | number | string | null
    channels?: StringNullableFilter<"sounds"> | string | null
    digital_audio?: IntNullableFilter<"sounds"> | number | null
    snr?: IntNullableFilter<"sounds"> | number | null
    sample_rate?: IntNullableFilter<"sounds"> | number | null
    chipset?: StringNullableFilter<"sounds"> | string | null
    interface?: StringNullableFilter<"sounds"> | string | null
    imagen_url?: StringNullableFilter<"sounds"> | string | null
  }, "id">

  export type soundsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    channels?: SortOrderInput | SortOrder
    digital_audio?: SortOrderInput | SortOrder
    snr?: SortOrderInput | SortOrder
    sample_rate?: SortOrderInput | SortOrder
    chipset?: SortOrderInput | SortOrder
    interface?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
    _count?: soundsCountOrderByAggregateInput
    _avg?: soundsAvgOrderByAggregateInput
    _max?: soundsMaxOrderByAggregateInput
    _min?: soundsMinOrderByAggregateInput
    _sum?: soundsSumOrderByAggregateInput
  }

  export type soundsScalarWhereWithAggregatesInput = {
    AND?: soundsScalarWhereWithAggregatesInput | soundsScalarWhereWithAggregatesInput[]
    OR?: soundsScalarWhereWithAggregatesInput[]
    NOT?: soundsScalarWhereWithAggregatesInput | soundsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sounds"> | number
    name?: StringWithAggregatesFilter<"sounds"> | string
    price?: DecimalNullableWithAggregatesFilter<"sounds"> | Decimal | DecimalJsLike | number | string | null
    channels?: StringNullableWithAggregatesFilter<"sounds"> | string | null
    digital_audio?: IntNullableWithAggregatesFilter<"sounds"> | number | null
    snr?: IntNullableWithAggregatesFilter<"sounds"> | number | null
    sample_rate?: IntNullableWithAggregatesFilter<"sounds"> | number | null
    chipset?: StringNullableWithAggregatesFilter<"sounds"> | string | null
    interface?: StringNullableWithAggregatesFilter<"sounds"> | string | null
    imagen_url?: StringNullableWithAggregatesFilter<"sounds"> | string | null
  }

  export type ususariosWhereInput = {
    AND?: ususariosWhereInput | ususariosWhereInput[]
    OR?: ususariosWhereInput[]
    NOT?: ususariosWhereInput | ususariosWhereInput[]
    id_user?: IntFilter<"ususarios"> | number
    nombre?: StringFilter<"ususarios"> | string
    apellido?: StringFilter<"ususarios"> | string
    mail?: StringFilter<"ususarios"> | string
    contrasenia?: StringFilter<"ususarios"> | string
    fecha_nacimiento?: DateTimeFilter<"ususarios"> | Date | string
    permisos?: BoolNullableFilter<"ususarios"> | boolean | null
  }

  export type ususariosOrderByWithRelationInput = {
    id_user?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    mail?: SortOrder
    contrasenia?: SortOrder
    fecha_nacimiento?: SortOrder
    permisos?: SortOrderInput | SortOrder
  }

  export type ususariosWhereUniqueInput = Prisma.AtLeast<{
    id_user?: number
    AND?: ususariosWhereInput | ususariosWhereInput[]
    OR?: ususariosWhereInput[]
    NOT?: ususariosWhereInput | ususariosWhereInput[]
    nombre?: StringFilter<"ususarios"> | string
    apellido?: StringFilter<"ususarios"> | string
    mail?: StringFilter<"ususarios"> | string
    contrasenia?: StringFilter<"ususarios"> | string
    fecha_nacimiento?: DateTimeFilter<"ususarios"> | Date | string
    permisos?: BoolNullableFilter<"ususarios"> | boolean | null
  }, "id_user">

  export type ususariosOrderByWithAggregationInput = {
    id_user?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    mail?: SortOrder
    contrasenia?: SortOrder
    fecha_nacimiento?: SortOrder
    permisos?: SortOrderInput | SortOrder
    _count?: ususariosCountOrderByAggregateInput
    _avg?: ususariosAvgOrderByAggregateInput
    _max?: ususariosMaxOrderByAggregateInput
    _min?: ususariosMinOrderByAggregateInput
    _sum?: ususariosSumOrderByAggregateInput
  }

  export type ususariosScalarWhereWithAggregatesInput = {
    AND?: ususariosScalarWhereWithAggregatesInput | ususariosScalarWhereWithAggregatesInput[]
    OR?: ususariosScalarWhereWithAggregatesInput[]
    NOT?: ususariosScalarWhereWithAggregatesInput | ususariosScalarWhereWithAggregatesInput[]
    id_user?: IntWithAggregatesFilter<"ususarios"> | number
    nombre?: StringWithAggregatesFilter<"ususarios"> | string
    apellido?: StringWithAggregatesFilter<"ususarios"> | string
    mail?: StringWithAggregatesFilter<"ususarios"> | string
    contrasenia?: StringWithAggregatesFilter<"ususarios"> | string
    fecha_nacimiento?: DateTimeWithAggregatesFilter<"ususarios"> | Date | string
    permisos?: BoolNullableWithAggregatesFilter<"ususarios"> | boolean | null
  }

  export type vendedoresWhereInput = {
    AND?: vendedoresWhereInput | vendedoresWhereInput[]
    OR?: vendedoresWhereInput[]
    NOT?: vendedoresWhereInput | vendedoresWhereInput[]
    id_vendedor?: IntFilter<"vendedores"> | number
    nombre?: StringFilter<"vendedores"> | string
    apellido?: StringFilter<"vendedores"> | string
    mail?: StringFilter<"vendedores"> | string
    contrasenia?: StringFilter<"vendedores"> | string
    fecha_nacimiento?: DateTimeFilter<"vendedores"> | Date | string
    cuil?: DecimalFilter<"vendedores"> | Decimal | DecimalJsLike | number | string
    direccion?: StringFilter<"vendedores"> | string
    descripcion?: StringNullableFilter<"vendedores"> | string | null
  }

  export type vendedoresOrderByWithRelationInput = {
    id_vendedor?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    mail?: SortOrder
    contrasenia?: SortOrder
    fecha_nacimiento?: SortOrder
    cuil?: SortOrder
    direccion?: SortOrder
    descripcion?: SortOrderInput | SortOrder
  }

  export type vendedoresWhereUniqueInput = Prisma.AtLeast<{
    id_vendedor?: number
    AND?: vendedoresWhereInput | vendedoresWhereInput[]
    OR?: vendedoresWhereInput[]
    NOT?: vendedoresWhereInput | vendedoresWhereInput[]
    nombre?: StringFilter<"vendedores"> | string
    apellido?: StringFilter<"vendedores"> | string
    mail?: StringFilter<"vendedores"> | string
    contrasenia?: StringFilter<"vendedores"> | string
    fecha_nacimiento?: DateTimeFilter<"vendedores"> | Date | string
    cuil?: DecimalFilter<"vendedores"> | Decimal | DecimalJsLike | number | string
    direccion?: StringFilter<"vendedores"> | string
    descripcion?: StringNullableFilter<"vendedores"> | string | null
  }, "id_vendedor">

  export type vendedoresOrderByWithAggregationInput = {
    id_vendedor?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    mail?: SortOrder
    contrasenia?: SortOrder
    fecha_nacimiento?: SortOrder
    cuil?: SortOrder
    direccion?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: vendedoresCountOrderByAggregateInput
    _avg?: vendedoresAvgOrderByAggregateInput
    _max?: vendedoresMaxOrderByAggregateInput
    _min?: vendedoresMinOrderByAggregateInput
    _sum?: vendedoresSumOrderByAggregateInput
  }

  export type vendedoresScalarWhereWithAggregatesInput = {
    AND?: vendedoresScalarWhereWithAggregatesInput | vendedoresScalarWhereWithAggregatesInput[]
    OR?: vendedoresScalarWhereWithAggregatesInput[]
    NOT?: vendedoresScalarWhereWithAggregatesInput | vendedoresScalarWhereWithAggregatesInput[]
    id_vendedor?: IntWithAggregatesFilter<"vendedores"> | number
    nombre?: StringWithAggregatesFilter<"vendedores"> | string
    apellido?: StringWithAggregatesFilter<"vendedores"> | string
    mail?: StringWithAggregatesFilter<"vendedores"> | string
    contrasenia?: StringWithAggregatesFilter<"vendedores"> | string
    fecha_nacimiento?: DateTimeWithAggregatesFilter<"vendedores"> | Date | string
    cuil?: DecimalWithAggregatesFilter<"vendedores"> | Decimal | DecimalJsLike | number | string
    direccion?: StringWithAggregatesFilter<"vendedores"> | string
    descripcion?: StringNullableWithAggregatesFilter<"vendedores"> | string | null
  }

  export type coolersCreateInput = {
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    rpm?: number | null
    noise?: Decimal | DecimalJsLike | number | string | null
    color?: string | null
    size?: number | null
    imagen_url?: string | null
  }

  export type coolersUncheckedCreateInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    rpm?: number | null
    noise?: Decimal | DecimalJsLike | number | string | null
    color?: string | null
    size?: number | null
    imagen_url?: string | null
  }

  export type coolersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rpm?: NullableIntFieldUpdateOperationsInput | number | null
    noise?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type coolersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rpm?: NullableIntFieldUpdateOperationsInput | number | null
    noise?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type coolersCreateManyInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    rpm?: number | null
    noise?: Decimal | DecimalJsLike | number | string | null
    color?: string | null
    size?: number | null
    imagen_url?: string | null
  }

  export type coolersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rpm?: NullableIntFieldUpdateOperationsInput | number | null
    noise?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type coolersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rpm?: NullableIntFieldUpdateOperationsInput | number | null
    noise?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cpusCreateInput = {
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    core_count: number
    core_clock: Decimal | DecimalJsLike | number | string
    boost_clock?: Decimal | DecimalJsLike | number | string | null
    tdp: number
    graphics?: string | null
    smt: boolean
    imagen_url?: string | null
  }

  export type cpusUncheckedCreateInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    core_count: number
    core_clock: Decimal | DecimalJsLike | number | string
    boost_clock?: Decimal | DecimalJsLike | number | string | null
    tdp: number
    graphics?: string | null
    smt: boolean
    imagen_url?: string | null
  }

  export type cpusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    core_count?: IntFieldUpdateOperationsInput | number
    core_clock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    boost_clock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tdp?: IntFieldUpdateOperationsInput | number
    graphics?: NullableStringFieldUpdateOperationsInput | string | null
    smt?: BoolFieldUpdateOperationsInput | boolean
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cpusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    core_count?: IntFieldUpdateOperationsInput | number
    core_clock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    boost_clock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tdp?: IntFieldUpdateOperationsInput | number
    graphics?: NullableStringFieldUpdateOperationsInput | string | null
    smt?: BoolFieldUpdateOperationsInput | boolean
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cpusCreateManyInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    core_count: number
    core_clock: Decimal | DecimalJsLike | number | string
    boost_clock?: Decimal | DecimalJsLike | number | string | null
    tdp: number
    graphics?: string | null
    smt: boolean
    imagen_url?: string | null
  }

  export type cpusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    core_count?: IntFieldUpdateOperationsInput | number
    core_clock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    boost_clock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tdp?: IntFieldUpdateOperationsInput | number
    graphics?: NullableStringFieldUpdateOperationsInput | string | null
    smt?: BoolFieldUpdateOperationsInput | boolean
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cpusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    core_count?: IntFieldUpdateOperationsInput | number
    core_clock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    boost_clock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tdp?: IntFieldUpdateOperationsInput | number
    graphics?: NullableStringFieldUpdateOperationsInput | string | null
    smt?: BoolFieldUpdateOperationsInput | boolean
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type fuentesCreateInput = {
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    efficiency?: string | null
    wattage?: number | null
    modular?: string | null
    color?: string | null
    imagen_url?: string | null
  }

  export type fuentesUncheckedCreateInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    efficiency?: string | null
    wattage?: number | null
    modular?: string | null
    color?: string | null
    imagen_url?: string | null
  }

  export type fuentesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    efficiency?: NullableStringFieldUpdateOperationsInput | string | null
    wattage?: NullableIntFieldUpdateOperationsInput | number | null
    modular?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type fuentesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    efficiency?: NullableStringFieldUpdateOperationsInput | string | null
    wattage?: NullableIntFieldUpdateOperationsInput | number | null
    modular?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type fuentesCreateManyInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    efficiency?: string | null
    wattage?: number | null
    modular?: string | null
    color?: string | null
    imagen_url?: string | null
  }

  export type fuentesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    efficiency?: NullableStringFieldUpdateOperationsInput | string | null
    wattage?: NullableIntFieldUpdateOperationsInput | number | null
    modular?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type fuentesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    efficiency?: NullableStringFieldUpdateOperationsInput | string | null
    wattage?: NullableIntFieldUpdateOperationsInput | number | null
    modular?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gabinetesCreateInput = {
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    color?: string | null
    psu?: string | null
    side_panel?: string | null
    external_volume?: Decimal | DecimalJsLike | number | string | null
    internal_35_bays?: number | null
    imagen_url?: string | null
  }

  export type gabinetesUncheckedCreateInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    color?: string | null
    psu?: string | null
    side_panel?: string | null
    external_volume?: Decimal | DecimalJsLike | number | string | null
    internal_35_bays?: number | null
    imagen_url?: string | null
  }

  export type gabinetesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    psu?: NullableStringFieldUpdateOperationsInput | string | null
    side_panel?: NullableStringFieldUpdateOperationsInput | string | null
    external_volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    internal_35_bays?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gabinetesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    psu?: NullableStringFieldUpdateOperationsInput | string | null
    side_panel?: NullableStringFieldUpdateOperationsInput | string | null
    external_volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    internal_35_bays?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gabinetesCreateManyInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    color?: string | null
    psu?: string | null
    side_panel?: string | null
    external_volume?: Decimal | DecimalJsLike | number | string | null
    internal_35_bays?: number | null
    imagen_url?: string | null
  }

  export type gabinetesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    psu?: NullableStringFieldUpdateOperationsInput | string | null
    side_panel?: NullableStringFieldUpdateOperationsInput | string | null
    external_volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    internal_35_bays?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gabinetesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    psu?: NullableStringFieldUpdateOperationsInput | string | null
    side_panel?: NullableStringFieldUpdateOperationsInput | string | null
    external_volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    internal_35_bays?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type graficasCreateInput = {
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    chipset?: string | null
    memory?: number | null
    core_clock?: number | null
    boost_clock?: number | null
    color?: string | null
    length?: number | null
    imagen_url?: string | null
  }

  export type graficasUncheckedCreateInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    chipset?: string | null
    memory?: number | null
    core_clock?: number | null
    boost_clock?: number | null
    color?: string | null
    length?: number | null
    imagen_url?: string | null
  }

  export type graficasUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    chipset?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableIntFieldUpdateOperationsInput | number | null
    core_clock?: NullableIntFieldUpdateOperationsInput | number | null
    boost_clock?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type graficasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    chipset?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableIntFieldUpdateOperationsInput | number | null
    core_clock?: NullableIntFieldUpdateOperationsInput | number | null
    boost_clock?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type graficasCreateManyInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    chipset?: string | null
    memory?: number | null
    core_clock?: number | null
    boost_clock?: number | null
    color?: string | null
    length?: number | null
    imagen_url?: string | null
  }

  export type graficasUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    chipset?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableIntFieldUpdateOperationsInput | number | null
    core_clock?: NullableIntFieldUpdateOperationsInput | number | null
    boost_clock?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type graficasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    chipset?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableIntFieldUpdateOperationsInput | number | null
    core_clock?: NullableIntFieldUpdateOperationsInput | number | null
    boost_clock?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type memorias_externasCreateInput = {
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    interface?: string | null
    capacity?: number | null
    price_per_gb?: Decimal | DecimalJsLike | number | string | null
    color?: string | null
    imagen_url?: string | null
  }

  export type memorias_externasUncheckedCreateInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    interface?: string | null
    capacity?: number | null
    price_per_gb?: Decimal | DecimalJsLike | number | string | null
    color?: string | null
    imagen_url?: string | null
  }

  export type memorias_externasUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    interface?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_gb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type memorias_externasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    interface?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_gb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type memorias_externasCreateManyInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    interface?: string | null
    capacity?: number | null
    price_per_gb?: Decimal | DecimalJsLike | number | string | null
    color?: string | null
    imagen_url?: string | null
  }

  export type memorias_externasUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    interface?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_gb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type memorias_externasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    interface?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_gb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type memorias_internasCreateInput = {
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    capacity?: number | null
    price_per_gb?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    cache?: number | null
    form_factor?: string | null
    interface?: string | null
    imagen_url?: string | null
  }

  export type memorias_internasUncheckedCreateInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    capacity?: number | null
    price_per_gb?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    cache?: number | null
    form_factor?: string | null
    interface?: string | null
    imagen_url?: string | null
  }

  export type memorias_internasUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_gb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    cache?: NullableIntFieldUpdateOperationsInput | number | null
    form_factor?: NullableStringFieldUpdateOperationsInput | string | null
    interface?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type memorias_internasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_gb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    cache?: NullableIntFieldUpdateOperationsInput | number | null
    form_factor?: NullableStringFieldUpdateOperationsInput | string | null
    interface?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type memorias_internasCreateManyInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    capacity?: number | null
    price_per_gb?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    cache?: number | null
    form_factor?: string | null
    interface?: string | null
    imagen_url?: string | null
  }

  export type memorias_internasUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_gb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    cache?: NullableIntFieldUpdateOperationsInput | number | null
    form_factor?: NullableStringFieldUpdateOperationsInput | string | null
    interface?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type memorias_internasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_gb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    cache?: NullableIntFieldUpdateOperationsInput | number | null
    form_factor?: NullableStringFieldUpdateOperationsInput | string | null
    interface?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mothersCreateInput = {
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    socket?: string | null
    form_factor?: string | null
    max_memory?: number | null
    memory_slots?: number | null
    color?: string | null
    imagen_url?: string | null
  }

  export type mothersUncheckedCreateInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    socket?: string | null
    form_factor?: string | null
    max_memory?: number | null
    memory_slots?: number | null
    color?: string | null
    imagen_url?: string | null
  }

  export type mothersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    socket?: NullableStringFieldUpdateOperationsInput | string | null
    form_factor?: NullableStringFieldUpdateOperationsInput | string | null
    max_memory?: NullableIntFieldUpdateOperationsInput | number | null
    memory_slots?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mothersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    socket?: NullableStringFieldUpdateOperationsInput | string | null
    form_factor?: NullableStringFieldUpdateOperationsInput | string | null
    max_memory?: NullableIntFieldUpdateOperationsInput | number | null
    memory_slots?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mothersCreateManyInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    socket?: string | null
    form_factor?: string | null
    max_memory?: number | null
    memory_slots?: number | null
    color?: string | null
    imagen_url?: string | null
  }

  export type mothersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    socket?: NullableStringFieldUpdateOperationsInput | string | null
    form_factor?: NullableStringFieldUpdateOperationsInput | string | null
    max_memory?: NullableIntFieldUpdateOperationsInput | number | null
    memory_slots?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mothersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    socket?: NullableStringFieldUpdateOperationsInput | string | null
    form_factor?: NullableStringFieldUpdateOperationsInput | string | null
    max_memory?: NullableIntFieldUpdateOperationsInput | number | null
    memory_slots?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ramsCreateInput = {
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    speed_channels?: number | null
    speed_mhz?: number | null
    modules_qty?: number | null
    module_capacity?: number | null
    price_per_gb?: Decimal | DecimalJsLike | number | string | null
    color?: string | null
    first_word_latency?: number | null
    cas_latency?: number | null
    imagen_url?: string | null
  }

  export type ramsUncheckedCreateInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    speed_channels?: number | null
    speed_mhz?: number | null
    modules_qty?: number | null
    module_capacity?: number | null
    price_per_gb?: Decimal | DecimalJsLike | number | string | null
    color?: string | null
    first_word_latency?: number | null
    cas_latency?: number | null
    imagen_url?: string | null
  }

  export type ramsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    speed_channels?: NullableIntFieldUpdateOperationsInput | number | null
    speed_mhz?: NullableIntFieldUpdateOperationsInput | number | null
    modules_qty?: NullableIntFieldUpdateOperationsInput | number | null
    module_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_gb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    first_word_latency?: NullableIntFieldUpdateOperationsInput | number | null
    cas_latency?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ramsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    speed_channels?: NullableIntFieldUpdateOperationsInput | number | null
    speed_mhz?: NullableIntFieldUpdateOperationsInput | number | null
    modules_qty?: NullableIntFieldUpdateOperationsInput | number | null
    module_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_gb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    first_word_latency?: NullableIntFieldUpdateOperationsInput | number | null
    cas_latency?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ramsCreateManyInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    speed_channels?: number | null
    speed_mhz?: number | null
    modules_qty?: number | null
    module_capacity?: number | null
    price_per_gb?: Decimal | DecimalJsLike | number | string | null
    color?: string | null
    first_word_latency?: number | null
    cas_latency?: number | null
    imagen_url?: string | null
  }

  export type ramsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    speed_channels?: NullableIntFieldUpdateOperationsInput | number | null
    speed_mhz?: NullableIntFieldUpdateOperationsInput | number | null
    modules_qty?: NullableIntFieldUpdateOperationsInput | number | null
    module_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_gb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    first_word_latency?: NullableIntFieldUpdateOperationsInput | number | null
    cas_latency?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ramsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    speed_channels?: NullableIntFieldUpdateOperationsInput | number | null
    speed_mhz?: NullableIntFieldUpdateOperationsInput | number | null
    modules_qty?: NullableIntFieldUpdateOperationsInput | number | null
    module_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_gb?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    first_word_latency?: NullableIntFieldUpdateOperationsInput | number | null
    cas_latency?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type soundsCreateInput = {
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    channels?: string | null
    digital_audio?: number | null
    snr?: number | null
    sample_rate?: number | null
    chipset?: string | null
    interface?: string | null
    imagen_url?: string | null
  }

  export type soundsUncheckedCreateInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    channels?: string | null
    digital_audio?: number | null
    snr?: number | null
    sample_rate?: number | null
    chipset?: string | null
    interface?: string | null
    imagen_url?: string | null
  }

  export type soundsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    channels?: NullableStringFieldUpdateOperationsInput | string | null
    digital_audio?: NullableIntFieldUpdateOperationsInput | number | null
    snr?: NullableIntFieldUpdateOperationsInput | number | null
    sample_rate?: NullableIntFieldUpdateOperationsInput | number | null
    chipset?: NullableStringFieldUpdateOperationsInput | string | null
    interface?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type soundsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    channels?: NullableStringFieldUpdateOperationsInput | string | null
    digital_audio?: NullableIntFieldUpdateOperationsInput | number | null
    snr?: NullableIntFieldUpdateOperationsInput | number | null
    sample_rate?: NullableIntFieldUpdateOperationsInput | number | null
    chipset?: NullableStringFieldUpdateOperationsInput | string | null
    interface?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type soundsCreateManyInput = {
    id?: number
    name: string
    price?: Decimal | DecimalJsLike | number | string | null
    channels?: string | null
    digital_audio?: number | null
    snr?: number | null
    sample_rate?: number | null
    chipset?: string | null
    interface?: string | null
    imagen_url?: string | null
  }

  export type soundsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    channels?: NullableStringFieldUpdateOperationsInput | string | null
    digital_audio?: NullableIntFieldUpdateOperationsInput | number | null
    snr?: NullableIntFieldUpdateOperationsInput | number | null
    sample_rate?: NullableIntFieldUpdateOperationsInput | number | null
    chipset?: NullableStringFieldUpdateOperationsInput | string | null
    interface?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type soundsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    channels?: NullableStringFieldUpdateOperationsInput | string | null
    digital_audio?: NullableIntFieldUpdateOperationsInput | number | null
    snr?: NullableIntFieldUpdateOperationsInput | number | null
    sample_rate?: NullableIntFieldUpdateOperationsInput | number | null
    chipset?: NullableStringFieldUpdateOperationsInput | string | null
    interface?: NullableStringFieldUpdateOperationsInput | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ususariosCreateInput = {
    nombre: string
    apellido: string
    mail: string
    contrasenia: string
    fecha_nacimiento: Date | string
    permisos?: boolean | null
  }

  export type ususariosUncheckedCreateInput = {
    id_user?: number
    nombre: string
    apellido: string
    mail: string
    contrasenia: string
    fecha_nacimiento: Date | string
    permisos?: boolean | null
  }

  export type ususariosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    permisos?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ususariosUncheckedUpdateInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    permisos?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ususariosCreateManyInput = {
    id_user?: number
    nombre: string
    apellido: string
    mail: string
    contrasenia: string
    fecha_nacimiento: Date | string
    permisos?: boolean | null
  }

  export type ususariosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    permisos?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ususariosUncheckedUpdateManyInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    permisos?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type vendedoresCreateInput = {
    nombre: string
    apellido: string
    mail: string
    contrasenia: string
    fecha_nacimiento: Date | string
    cuil: Decimal | DecimalJsLike | number | string
    direccion: string
    descripcion?: string | null
  }

  export type vendedoresUncheckedCreateInput = {
    id_vendedor?: number
    nombre: string
    apellido: string
    mail: string
    contrasenia: string
    fecha_nacimiento: Date | string
    cuil: Decimal | DecimalJsLike | number | string
    direccion: string
    descripcion?: string | null
  }

  export type vendedoresUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    cuil?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direccion?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vendedoresUncheckedUpdateInput = {
    id_vendedor?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    cuil?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direccion?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vendedoresCreateManyInput = {
    id_vendedor?: number
    nombre: string
    apellido: string
    mail: string
    contrasenia: string
    fecha_nacimiento: Date | string
    cuil: Decimal | DecimalJsLike | number | string
    direccion: string
    descripcion?: string | null
  }

  export type vendedoresUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    cuil?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direccion?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vendedoresUncheckedUpdateManyInput = {
    id_vendedor?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    cuil?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direccion?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type coolersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    rpm?: SortOrder
    noise?: SortOrder
    color?: SortOrder
    size?: SortOrder
    imagen_url?: SortOrder
  }

  export type coolersAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    rpm?: SortOrder
    noise?: SortOrder
    size?: SortOrder
  }

  export type coolersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    rpm?: SortOrder
    noise?: SortOrder
    color?: SortOrder
    size?: SortOrder
    imagen_url?: SortOrder
  }

  export type coolersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    rpm?: SortOrder
    noise?: SortOrder
    color?: SortOrder
    size?: SortOrder
    imagen_url?: SortOrder
  }

  export type coolersSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    rpm?: SortOrder
    noise?: SortOrder
    size?: SortOrder
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type cpusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    core_count?: SortOrder
    core_clock?: SortOrder
    boost_clock?: SortOrder
    tdp?: SortOrder
    graphics?: SortOrder
    smt?: SortOrder
    imagen_url?: SortOrder
  }

  export type cpusAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    core_count?: SortOrder
    core_clock?: SortOrder
    boost_clock?: SortOrder
    tdp?: SortOrder
  }

  export type cpusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    core_count?: SortOrder
    core_clock?: SortOrder
    boost_clock?: SortOrder
    tdp?: SortOrder
    graphics?: SortOrder
    smt?: SortOrder
    imagen_url?: SortOrder
  }

  export type cpusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    core_count?: SortOrder
    core_clock?: SortOrder
    boost_clock?: SortOrder
    tdp?: SortOrder
    graphics?: SortOrder
    smt?: SortOrder
    imagen_url?: SortOrder
  }

  export type cpusSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    core_count?: SortOrder
    core_clock?: SortOrder
    boost_clock?: SortOrder
    tdp?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type fuentesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    type?: SortOrder
    efficiency?: SortOrder
    wattage?: SortOrder
    modular?: SortOrder
    color?: SortOrder
    imagen_url?: SortOrder
  }

  export type fuentesAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    wattage?: SortOrder
  }

  export type fuentesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    type?: SortOrder
    efficiency?: SortOrder
    wattage?: SortOrder
    modular?: SortOrder
    color?: SortOrder
    imagen_url?: SortOrder
  }

  export type fuentesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    type?: SortOrder
    efficiency?: SortOrder
    wattage?: SortOrder
    modular?: SortOrder
    color?: SortOrder
    imagen_url?: SortOrder
  }

  export type fuentesSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    wattage?: SortOrder
  }

  export type gabinetesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    type?: SortOrder
    color?: SortOrder
    psu?: SortOrder
    side_panel?: SortOrder
    external_volume?: SortOrder
    internal_35_bays?: SortOrder
    imagen_url?: SortOrder
  }

  export type gabinetesAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    external_volume?: SortOrder
    internal_35_bays?: SortOrder
  }

  export type gabinetesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    type?: SortOrder
    color?: SortOrder
    psu?: SortOrder
    side_panel?: SortOrder
    external_volume?: SortOrder
    internal_35_bays?: SortOrder
    imagen_url?: SortOrder
  }

  export type gabinetesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    type?: SortOrder
    color?: SortOrder
    psu?: SortOrder
    side_panel?: SortOrder
    external_volume?: SortOrder
    internal_35_bays?: SortOrder
    imagen_url?: SortOrder
  }

  export type gabinetesSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    external_volume?: SortOrder
    internal_35_bays?: SortOrder
  }

  export type graficasCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    chipset?: SortOrder
    memory?: SortOrder
    core_clock?: SortOrder
    boost_clock?: SortOrder
    color?: SortOrder
    length?: SortOrder
    imagen_url?: SortOrder
  }

  export type graficasAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    memory?: SortOrder
    core_clock?: SortOrder
    boost_clock?: SortOrder
    length?: SortOrder
  }

  export type graficasMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    chipset?: SortOrder
    memory?: SortOrder
    core_clock?: SortOrder
    boost_clock?: SortOrder
    color?: SortOrder
    length?: SortOrder
    imagen_url?: SortOrder
  }

  export type graficasMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    chipset?: SortOrder
    memory?: SortOrder
    core_clock?: SortOrder
    boost_clock?: SortOrder
    color?: SortOrder
    length?: SortOrder
    imagen_url?: SortOrder
  }

  export type graficasSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    memory?: SortOrder
    core_clock?: SortOrder
    boost_clock?: SortOrder
    length?: SortOrder
  }

  export type memorias_externasCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    type?: SortOrder
    interface?: SortOrder
    capacity?: SortOrder
    price_per_gb?: SortOrder
    color?: SortOrder
    imagen_url?: SortOrder
  }

  export type memorias_externasAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
    price_per_gb?: SortOrder
  }

  export type memorias_externasMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    type?: SortOrder
    interface?: SortOrder
    capacity?: SortOrder
    price_per_gb?: SortOrder
    color?: SortOrder
    imagen_url?: SortOrder
  }

  export type memorias_externasMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    type?: SortOrder
    interface?: SortOrder
    capacity?: SortOrder
    price_per_gb?: SortOrder
    color?: SortOrder
    imagen_url?: SortOrder
  }

  export type memorias_externasSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
    price_per_gb?: SortOrder
  }

  export type memorias_internasCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
    price_per_gb?: SortOrder
    type?: SortOrder
    cache?: SortOrder
    form_factor?: SortOrder
    interface?: SortOrder
    imagen_url?: SortOrder
  }

  export type memorias_internasAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
    price_per_gb?: SortOrder
    cache?: SortOrder
  }

  export type memorias_internasMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
    price_per_gb?: SortOrder
    type?: SortOrder
    cache?: SortOrder
    form_factor?: SortOrder
    interface?: SortOrder
    imagen_url?: SortOrder
  }

  export type memorias_internasMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
    price_per_gb?: SortOrder
    type?: SortOrder
    cache?: SortOrder
    form_factor?: SortOrder
    interface?: SortOrder
    imagen_url?: SortOrder
  }

  export type memorias_internasSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
    price_per_gb?: SortOrder
    cache?: SortOrder
  }

  export type mothersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    socket?: SortOrder
    form_factor?: SortOrder
    max_memory?: SortOrder
    memory_slots?: SortOrder
    color?: SortOrder
    imagen_url?: SortOrder
  }

  export type mothersAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    max_memory?: SortOrder
    memory_slots?: SortOrder
  }

  export type mothersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    socket?: SortOrder
    form_factor?: SortOrder
    max_memory?: SortOrder
    memory_slots?: SortOrder
    color?: SortOrder
    imagen_url?: SortOrder
  }

  export type mothersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    socket?: SortOrder
    form_factor?: SortOrder
    max_memory?: SortOrder
    memory_slots?: SortOrder
    color?: SortOrder
    imagen_url?: SortOrder
  }

  export type mothersSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    max_memory?: SortOrder
    memory_slots?: SortOrder
  }

  export type ramsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    speed_channels?: SortOrder
    speed_mhz?: SortOrder
    modules_qty?: SortOrder
    module_capacity?: SortOrder
    price_per_gb?: SortOrder
    color?: SortOrder
    first_word_latency?: SortOrder
    cas_latency?: SortOrder
    imagen_url?: SortOrder
  }

  export type ramsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    speed_channels?: SortOrder
    speed_mhz?: SortOrder
    modules_qty?: SortOrder
    module_capacity?: SortOrder
    price_per_gb?: SortOrder
    first_word_latency?: SortOrder
    cas_latency?: SortOrder
  }

  export type ramsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    speed_channels?: SortOrder
    speed_mhz?: SortOrder
    modules_qty?: SortOrder
    module_capacity?: SortOrder
    price_per_gb?: SortOrder
    color?: SortOrder
    first_word_latency?: SortOrder
    cas_latency?: SortOrder
    imagen_url?: SortOrder
  }

  export type ramsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    speed_channels?: SortOrder
    speed_mhz?: SortOrder
    modules_qty?: SortOrder
    module_capacity?: SortOrder
    price_per_gb?: SortOrder
    color?: SortOrder
    first_word_latency?: SortOrder
    cas_latency?: SortOrder
    imagen_url?: SortOrder
  }

  export type ramsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    speed_channels?: SortOrder
    speed_mhz?: SortOrder
    modules_qty?: SortOrder
    module_capacity?: SortOrder
    price_per_gb?: SortOrder
    first_word_latency?: SortOrder
    cas_latency?: SortOrder
  }

  export type soundsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    channels?: SortOrder
    digital_audio?: SortOrder
    snr?: SortOrder
    sample_rate?: SortOrder
    chipset?: SortOrder
    interface?: SortOrder
    imagen_url?: SortOrder
  }

  export type soundsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    digital_audio?: SortOrder
    snr?: SortOrder
    sample_rate?: SortOrder
  }

  export type soundsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    channels?: SortOrder
    digital_audio?: SortOrder
    snr?: SortOrder
    sample_rate?: SortOrder
    chipset?: SortOrder
    interface?: SortOrder
    imagen_url?: SortOrder
  }

  export type soundsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    channels?: SortOrder
    digital_audio?: SortOrder
    snr?: SortOrder
    sample_rate?: SortOrder
    chipset?: SortOrder
    interface?: SortOrder
    imagen_url?: SortOrder
  }

  export type soundsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    digital_audio?: SortOrder
    snr?: SortOrder
    sample_rate?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ususariosCountOrderByAggregateInput = {
    id_user?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    mail?: SortOrder
    contrasenia?: SortOrder
    fecha_nacimiento?: SortOrder
    permisos?: SortOrder
  }

  export type ususariosAvgOrderByAggregateInput = {
    id_user?: SortOrder
  }

  export type ususariosMaxOrderByAggregateInput = {
    id_user?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    mail?: SortOrder
    contrasenia?: SortOrder
    fecha_nacimiento?: SortOrder
    permisos?: SortOrder
  }

  export type ususariosMinOrderByAggregateInput = {
    id_user?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    mail?: SortOrder
    contrasenia?: SortOrder
    fecha_nacimiento?: SortOrder
    permisos?: SortOrder
  }

  export type ususariosSumOrderByAggregateInput = {
    id_user?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type vendedoresCountOrderByAggregateInput = {
    id_vendedor?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    mail?: SortOrder
    contrasenia?: SortOrder
    fecha_nacimiento?: SortOrder
    cuil?: SortOrder
    direccion?: SortOrder
    descripcion?: SortOrder
  }

  export type vendedoresAvgOrderByAggregateInput = {
    id_vendedor?: SortOrder
    cuil?: SortOrder
  }

  export type vendedoresMaxOrderByAggregateInput = {
    id_vendedor?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    mail?: SortOrder
    contrasenia?: SortOrder
    fecha_nacimiento?: SortOrder
    cuil?: SortOrder
    direccion?: SortOrder
    descripcion?: SortOrder
  }

  export type vendedoresMinOrderByAggregateInput = {
    id_vendedor?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    mail?: SortOrder
    contrasenia?: SortOrder
    fecha_nacimiento?: SortOrder
    cuil?: SortOrder
    direccion?: SortOrder
    descripcion?: SortOrder
  }

  export type vendedoresSumOrderByAggregateInput = {
    id_vendedor?: SortOrder
    cuil?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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
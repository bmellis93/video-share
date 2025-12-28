
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ShareLink
 * 
 */
export type ShareLink = $Result.DefaultSelection<Prisma.$ShareLinkPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CommentRole: {
  OWNER: 'OWNER',
  CLIENT: 'CLIENT'
};

export type CommentRole = (typeof CommentRole)[keyof typeof CommentRole]

}

export type CommentRole = $Enums.CommentRole

export const CommentRole: typeof $Enums.CommentRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ShareLinks
 * const shareLinks = await prisma.shareLink.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more ShareLinks
   * const shareLinks = await prisma.shareLink.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.shareLink`: Exposes CRUD operations for the **ShareLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShareLinks
    * const shareLinks = await prisma.shareLink.findMany()
    * ```
    */
  get shareLink(): Prisma.ShareLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    ShareLink: 'ShareLink',
    Comment: 'Comment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "shareLink" | "comment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ShareLink: {
        payload: Prisma.$ShareLinkPayload<ExtArgs>
        fields: Prisma.ShareLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShareLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShareLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          findFirst: {
            args: Prisma.ShareLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShareLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          findMany: {
            args: Prisma.ShareLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>[]
          }
          create: {
            args: Prisma.ShareLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          createMany: {
            args: Prisma.ShareLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShareLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>[]
          }
          delete: {
            args: Prisma.ShareLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          update: {
            args: Prisma.ShareLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          deleteMany: {
            args: Prisma.ShareLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShareLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShareLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>[]
          }
          upsert: {
            args: Prisma.ShareLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          aggregate: {
            args: Prisma.ShareLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShareLink>
          }
          groupBy: {
            args: Prisma.ShareLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShareLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShareLinkCountArgs<ExtArgs>
            result: $Utils.Optional<ShareLinkCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    shareLink?: ShareLinkOmit
    comment?: CommentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ShareLink
   */

  export type AggregateShareLink = {
    _count: ShareLinkCountAggregateOutputType | null
    _min: ShareLinkMinAggregateOutputType | null
    _max: ShareLinkMaxAggregateOutputType | null
  }

  export type ShareLinkMinAggregateOutputType = {
    id: string | null
    token: string | null
    videoId: string | null
    createdAt: Date | null
    expiresAt: Date | null
    allowComments: boolean | null
    allowDownload: boolean | null
    contactId: string | null
    conversationId: string | null
  }

  export type ShareLinkMaxAggregateOutputType = {
    id: string | null
    token: string | null
    videoId: string | null
    createdAt: Date | null
    expiresAt: Date | null
    allowComments: boolean | null
    allowDownload: boolean | null
    contactId: string | null
    conversationId: string | null
  }

  export type ShareLinkCountAggregateOutputType = {
    id: number
    token: number
    videoId: number
    createdAt: number
    expiresAt: number
    allowComments: number
    allowDownload: number
    contactId: number
    conversationId: number
    _all: number
  }


  export type ShareLinkMinAggregateInputType = {
    id?: true
    token?: true
    videoId?: true
    createdAt?: true
    expiresAt?: true
    allowComments?: true
    allowDownload?: true
    contactId?: true
    conversationId?: true
  }

  export type ShareLinkMaxAggregateInputType = {
    id?: true
    token?: true
    videoId?: true
    createdAt?: true
    expiresAt?: true
    allowComments?: true
    allowDownload?: true
    contactId?: true
    conversationId?: true
  }

  export type ShareLinkCountAggregateInputType = {
    id?: true
    token?: true
    videoId?: true
    createdAt?: true
    expiresAt?: true
    allowComments?: true
    allowDownload?: true
    contactId?: true
    conversationId?: true
    _all?: true
  }

  export type ShareLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareLink to aggregate.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShareLinks
    **/
    _count?: true | ShareLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShareLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShareLinkMaxAggregateInputType
  }

  export type GetShareLinkAggregateType<T extends ShareLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateShareLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShareLink[P]>
      : GetScalarType<T[P], AggregateShareLink[P]>
  }




  export type ShareLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareLinkWhereInput
    orderBy?: ShareLinkOrderByWithAggregationInput | ShareLinkOrderByWithAggregationInput[]
    by: ShareLinkScalarFieldEnum[] | ShareLinkScalarFieldEnum
    having?: ShareLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShareLinkCountAggregateInputType | true
    _min?: ShareLinkMinAggregateInputType
    _max?: ShareLinkMaxAggregateInputType
  }

  export type ShareLinkGroupByOutputType = {
    id: string
    token: string
    videoId: string
    createdAt: Date
    expiresAt: Date | null
    allowComments: boolean
    allowDownload: boolean
    contactId: string | null
    conversationId: string | null
    _count: ShareLinkCountAggregateOutputType | null
    _min: ShareLinkMinAggregateOutputType | null
    _max: ShareLinkMaxAggregateOutputType | null
  }

  type GetShareLinkGroupByPayload<T extends ShareLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShareLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShareLinkGroupByOutputType[P]>
            : GetScalarType<T[P], ShareLinkGroupByOutputType[P]>
        }
      >
    >


  export type ShareLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    videoId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    allowComments?: boolean
    allowDownload?: boolean
    contactId?: boolean
    conversationId?: boolean
  }, ExtArgs["result"]["shareLink"]>

  export type ShareLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    videoId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    allowComments?: boolean
    allowDownload?: boolean
    contactId?: boolean
    conversationId?: boolean
  }, ExtArgs["result"]["shareLink"]>

  export type ShareLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    videoId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    allowComments?: boolean
    allowDownload?: boolean
    contactId?: boolean
    conversationId?: boolean
  }, ExtArgs["result"]["shareLink"]>

  export type ShareLinkSelectScalar = {
    id?: boolean
    token?: boolean
    videoId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    allowComments?: boolean
    allowDownload?: boolean
    contactId?: boolean
    conversationId?: boolean
  }

  export type ShareLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "videoId" | "createdAt" | "expiresAt" | "allowComments" | "allowDownload" | "contactId" | "conversationId", ExtArgs["result"]["shareLink"]>

  export type $ShareLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShareLink"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      videoId: string
      createdAt: Date
      expiresAt: Date | null
      allowComments: boolean
      allowDownload: boolean
      contactId: string | null
      conversationId: string | null
    }, ExtArgs["result"]["shareLink"]>
    composites: {}
  }

  type ShareLinkGetPayload<S extends boolean | null | undefined | ShareLinkDefaultArgs> = $Result.GetResult<Prisma.$ShareLinkPayload, S>

  type ShareLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShareLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShareLinkCountAggregateInputType | true
    }

  export interface ShareLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShareLink'], meta: { name: 'ShareLink' } }
    /**
     * Find zero or one ShareLink that matches the filter.
     * @param {ShareLinkFindUniqueArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShareLinkFindUniqueArgs>(args: SelectSubset<T, ShareLinkFindUniqueArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShareLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShareLinkFindUniqueOrThrowArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShareLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, ShareLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkFindFirstArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShareLinkFindFirstArgs>(args?: SelectSubset<T, ShareLinkFindFirstArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkFindFirstOrThrowArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShareLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, ShareLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShareLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShareLinks
     * const shareLinks = await prisma.shareLink.findMany()
     * 
     * // Get first 10 ShareLinks
     * const shareLinks = await prisma.shareLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shareLinkWithIdOnly = await prisma.shareLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShareLinkFindManyArgs>(args?: SelectSubset<T, ShareLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShareLink.
     * @param {ShareLinkCreateArgs} args - Arguments to create a ShareLink.
     * @example
     * // Create one ShareLink
     * const ShareLink = await prisma.shareLink.create({
     *   data: {
     *     // ... data to create a ShareLink
     *   }
     * })
     * 
     */
    create<T extends ShareLinkCreateArgs>(args: SelectSubset<T, ShareLinkCreateArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShareLinks.
     * @param {ShareLinkCreateManyArgs} args - Arguments to create many ShareLinks.
     * @example
     * // Create many ShareLinks
     * const shareLink = await prisma.shareLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShareLinkCreateManyArgs>(args?: SelectSubset<T, ShareLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShareLinks and returns the data saved in the database.
     * @param {ShareLinkCreateManyAndReturnArgs} args - Arguments to create many ShareLinks.
     * @example
     * // Create many ShareLinks
     * const shareLink = await prisma.shareLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShareLinks and only return the `id`
     * const shareLinkWithIdOnly = await prisma.shareLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShareLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, ShareLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShareLink.
     * @param {ShareLinkDeleteArgs} args - Arguments to delete one ShareLink.
     * @example
     * // Delete one ShareLink
     * const ShareLink = await prisma.shareLink.delete({
     *   where: {
     *     // ... filter to delete one ShareLink
     *   }
     * })
     * 
     */
    delete<T extends ShareLinkDeleteArgs>(args: SelectSubset<T, ShareLinkDeleteArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShareLink.
     * @param {ShareLinkUpdateArgs} args - Arguments to update one ShareLink.
     * @example
     * // Update one ShareLink
     * const shareLink = await prisma.shareLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShareLinkUpdateArgs>(args: SelectSubset<T, ShareLinkUpdateArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShareLinks.
     * @param {ShareLinkDeleteManyArgs} args - Arguments to filter ShareLinks to delete.
     * @example
     * // Delete a few ShareLinks
     * const { count } = await prisma.shareLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShareLinkDeleteManyArgs>(args?: SelectSubset<T, ShareLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShareLinks
     * const shareLink = await prisma.shareLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShareLinkUpdateManyArgs>(args: SelectSubset<T, ShareLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareLinks and returns the data updated in the database.
     * @param {ShareLinkUpdateManyAndReturnArgs} args - Arguments to update many ShareLinks.
     * @example
     * // Update many ShareLinks
     * const shareLink = await prisma.shareLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShareLinks and only return the `id`
     * const shareLinkWithIdOnly = await prisma.shareLink.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShareLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, ShareLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShareLink.
     * @param {ShareLinkUpsertArgs} args - Arguments to update or create a ShareLink.
     * @example
     * // Update or create a ShareLink
     * const shareLink = await prisma.shareLink.upsert({
     *   create: {
     *     // ... data to create a ShareLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShareLink we want to update
     *   }
     * })
     */
    upsert<T extends ShareLinkUpsertArgs>(args: SelectSubset<T, ShareLinkUpsertArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShareLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkCountArgs} args - Arguments to filter ShareLinks to count.
     * @example
     * // Count the number of ShareLinks
     * const count = await prisma.shareLink.count({
     *   where: {
     *     // ... the filter for the ShareLinks we want to count
     *   }
     * })
    **/
    count<T extends ShareLinkCountArgs>(
      args?: Subset<T, ShareLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShareLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShareLinkAggregateArgs>(args: Subset<T, ShareLinkAggregateArgs>): Prisma.PrismaPromise<GetShareLinkAggregateType<T>>

    /**
     * Group by ShareLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkGroupByArgs} args - Group by arguments.
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
      T extends ShareLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShareLinkGroupByArgs['orderBy'] }
        : { orderBy?: ShareLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShareLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShareLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShareLink model
   */
  readonly fields: ShareLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShareLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShareLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ShareLink model
   */
  interface ShareLinkFieldRefs {
    readonly id: FieldRef<"ShareLink", 'String'>
    readonly token: FieldRef<"ShareLink", 'String'>
    readonly videoId: FieldRef<"ShareLink", 'String'>
    readonly createdAt: FieldRef<"ShareLink", 'DateTime'>
    readonly expiresAt: FieldRef<"ShareLink", 'DateTime'>
    readonly allowComments: FieldRef<"ShareLink", 'Boolean'>
    readonly allowDownload: FieldRef<"ShareLink", 'Boolean'>
    readonly contactId: FieldRef<"ShareLink", 'String'>
    readonly conversationId: FieldRef<"ShareLink", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShareLink findUnique
   */
  export type ShareLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink findUniqueOrThrow
   */
  export type ShareLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink findFirst
   */
  export type ShareLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareLinks.
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareLinks.
     */
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * ShareLink findFirstOrThrow
   */
  export type ShareLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareLinks.
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareLinks.
     */
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * ShareLink findMany
   */
  export type ShareLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Filter, which ShareLinks to fetch.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShareLinks.
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * ShareLink create
   */
  export type ShareLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * The data needed to create a ShareLink.
     */
    data: XOR<ShareLinkCreateInput, ShareLinkUncheckedCreateInput>
  }

  /**
   * ShareLink createMany
   */
  export type ShareLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShareLinks.
     */
    data: ShareLinkCreateManyInput | ShareLinkCreateManyInput[]
  }

  /**
   * ShareLink createManyAndReturn
   */
  export type ShareLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * The data used to create many ShareLinks.
     */
    data: ShareLinkCreateManyInput | ShareLinkCreateManyInput[]
  }

  /**
   * ShareLink update
   */
  export type ShareLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * The data needed to update a ShareLink.
     */
    data: XOR<ShareLinkUpdateInput, ShareLinkUncheckedUpdateInput>
    /**
     * Choose, which ShareLink to update.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink updateMany
   */
  export type ShareLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShareLinks.
     */
    data: XOR<ShareLinkUpdateManyMutationInput, ShareLinkUncheckedUpdateManyInput>
    /**
     * Filter which ShareLinks to update
     */
    where?: ShareLinkWhereInput
    /**
     * Limit how many ShareLinks to update.
     */
    limit?: number
  }

  /**
   * ShareLink updateManyAndReturn
   */
  export type ShareLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * The data used to update ShareLinks.
     */
    data: XOR<ShareLinkUpdateManyMutationInput, ShareLinkUncheckedUpdateManyInput>
    /**
     * Filter which ShareLinks to update
     */
    where?: ShareLinkWhereInput
    /**
     * Limit how many ShareLinks to update.
     */
    limit?: number
  }

  /**
   * ShareLink upsert
   */
  export type ShareLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * The filter to search for the ShareLink to update in case it exists.
     */
    where: ShareLinkWhereUniqueInput
    /**
     * In case the ShareLink found by the `where` argument doesn't exist, create a new ShareLink with this data.
     */
    create: XOR<ShareLinkCreateInput, ShareLinkUncheckedCreateInput>
    /**
     * In case the ShareLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShareLinkUpdateInput, ShareLinkUncheckedUpdateInput>
  }

  /**
   * ShareLink delete
   */
  export type ShareLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Filter which ShareLink to delete.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink deleteMany
   */
  export type ShareLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareLinks to delete
     */
    where?: ShareLinkWhereInput
    /**
     * Limit how many ShareLinks to delete.
     */
    limit?: number
  }

  /**
   * ShareLink without action
   */
  export type ShareLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    timecodeMs: number | null
  }

  export type CommentSumAggregateOutputType = {
    timecodeMs: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    token: string | null
    videoId: string | null
    timecodeMs: number | null
    body: string | null
    author: string | null
    role: $Enums.CommentRole | null
    createdAt: Date | null
    parentId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    token: string | null
    videoId: string | null
    timecodeMs: number | null
    body: string | null
    author: string | null
    role: $Enums.CommentRole | null
    createdAt: Date | null
    parentId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    token: number
    videoId: number
    timecodeMs: number
    body: number
    author: number
    role: number
    createdAt: number
    parentId: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    timecodeMs?: true
  }

  export type CommentSumAggregateInputType = {
    timecodeMs?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    token?: true
    videoId?: true
    timecodeMs?: true
    body?: true
    author?: true
    role?: true
    createdAt?: true
    parentId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    token?: true
    videoId?: true
    timecodeMs?: true
    body?: true
    author?: true
    role?: true
    createdAt?: true
    parentId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    token?: true
    videoId?: true
    timecodeMs?: true
    body?: true
    author?: true
    role?: true
    createdAt?: true
    parentId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    token: string
    videoId: string
    timecodeMs: number
    body: string
    author: string | null
    role: $Enums.CommentRole
    createdAt: Date
    parentId: string | null
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    videoId?: boolean
    timecodeMs?: boolean
    body?: boolean
    author?: boolean
    role?: boolean
    createdAt?: boolean
    parentId?: boolean
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    videoId?: boolean
    timecodeMs?: boolean
    body?: boolean
    author?: boolean
    role?: boolean
    createdAt?: boolean
    parentId?: boolean
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    videoId?: boolean
    timecodeMs?: boolean
    body?: boolean
    author?: boolean
    role?: boolean
    createdAt?: boolean
    parentId?: boolean
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    token?: boolean
    videoId?: boolean
    timecodeMs?: boolean
    body?: boolean
    author?: boolean
    role?: boolean
    createdAt?: boolean
    parentId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "videoId" | "timecodeMs" | "body" | "author" | "role" | "createdAt" | "parentId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      parent: Prisma.$CommentPayload<ExtArgs> | null
      replies: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      videoId: string
      timecodeMs: number
      body: string
      author: string | null
      role: $Enums.CommentRole
      createdAt: Date
      parentId: string | null
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Comment$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly token: FieldRef<"Comment", 'String'>
    readonly videoId: FieldRef<"Comment", 'String'>
    readonly timecodeMs: FieldRef<"Comment", 'Int'>
    readonly body: FieldRef<"Comment", 'String'>
    readonly author: FieldRef<"Comment", 'String'>
    readonly role: FieldRef<"Comment", 'CommentRole'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly parentId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.parent
   */
  export type Comment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ShareLinkScalarFieldEnum: {
    id: 'id',
    token: 'token',
    videoId: 'videoId',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    allowComments: 'allowComments',
    allowDownload: 'allowDownload',
    contactId: 'contactId',
    conversationId: 'conversationId'
  };

  export type ShareLinkScalarFieldEnum = (typeof ShareLinkScalarFieldEnum)[keyof typeof ShareLinkScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    token: 'token',
    videoId: 'videoId',
    timecodeMs: 'timecodeMs',
    body: 'body',
    author: 'author',
    role: 'role',
    createdAt: 'createdAt',
    parentId: 'parentId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'CommentRole'
   */
  export type EnumCommentRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommentRole'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ShareLinkWhereInput = {
    AND?: ShareLinkWhereInput | ShareLinkWhereInput[]
    OR?: ShareLinkWhereInput[]
    NOT?: ShareLinkWhereInput | ShareLinkWhereInput[]
    id?: StringFilter<"ShareLink"> | string
    token?: StringFilter<"ShareLink"> | string
    videoId?: StringFilter<"ShareLink"> | string
    createdAt?: DateTimeFilter<"ShareLink"> | Date | string
    expiresAt?: DateTimeNullableFilter<"ShareLink"> | Date | string | null
    allowComments?: BoolFilter<"ShareLink"> | boolean
    allowDownload?: BoolFilter<"ShareLink"> | boolean
    contactId?: StringNullableFilter<"ShareLink"> | string | null
    conversationId?: StringNullableFilter<"ShareLink"> | string | null
  }

  export type ShareLinkOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    allowComments?: SortOrder
    allowDownload?: SortOrder
    contactId?: SortOrderInput | SortOrder
    conversationId?: SortOrderInput | SortOrder
  }

  export type ShareLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: ShareLinkWhereInput | ShareLinkWhereInput[]
    OR?: ShareLinkWhereInput[]
    NOT?: ShareLinkWhereInput | ShareLinkWhereInput[]
    videoId?: StringFilter<"ShareLink"> | string
    createdAt?: DateTimeFilter<"ShareLink"> | Date | string
    expiresAt?: DateTimeNullableFilter<"ShareLink"> | Date | string | null
    allowComments?: BoolFilter<"ShareLink"> | boolean
    allowDownload?: BoolFilter<"ShareLink"> | boolean
    contactId?: StringNullableFilter<"ShareLink"> | string | null
    conversationId?: StringNullableFilter<"ShareLink"> | string | null
  }, "id" | "token">

  export type ShareLinkOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    allowComments?: SortOrder
    allowDownload?: SortOrder
    contactId?: SortOrderInput | SortOrder
    conversationId?: SortOrderInput | SortOrder
    _count?: ShareLinkCountOrderByAggregateInput
    _max?: ShareLinkMaxOrderByAggregateInput
    _min?: ShareLinkMinOrderByAggregateInput
  }

  export type ShareLinkScalarWhereWithAggregatesInput = {
    AND?: ShareLinkScalarWhereWithAggregatesInput | ShareLinkScalarWhereWithAggregatesInput[]
    OR?: ShareLinkScalarWhereWithAggregatesInput[]
    NOT?: ShareLinkScalarWhereWithAggregatesInput | ShareLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShareLink"> | string
    token?: StringWithAggregatesFilter<"ShareLink"> | string
    videoId?: StringWithAggregatesFilter<"ShareLink"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ShareLink"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"ShareLink"> | Date | string | null
    allowComments?: BoolWithAggregatesFilter<"ShareLink"> | boolean
    allowDownload?: BoolWithAggregatesFilter<"ShareLink"> | boolean
    contactId?: StringNullableWithAggregatesFilter<"ShareLink"> | string | null
    conversationId?: StringNullableWithAggregatesFilter<"ShareLink"> | string | null
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    token?: StringFilter<"Comment"> | string
    videoId?: StringFilter<"Comment"> | string
    timecodeMs?: IntFilter<"Comment"> | number
    body?: StringFilter<"Comment"> | string
    author?: StringNullableFilter<"Comment"> | string | null
    role?: EnumCommentRoleFilter<"Comment"> | $Enums.CommentRole
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    videoId?: SortOrder
    timecodeMs?: SortOrder
    body?: SortOrder
    author?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    parent?: CommentOrderByWithRelationInput
    replies?: CommentOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    token?: StringFilter<"Comment"> | string
    videoId?: StringFilter<"Comment"> | string
    timecodeMs?: IntFilter<"Comment"> | number
    body?: StringFilter<"Comment"> | string
    author?: StringNullableFilter<"Comment"> | string | null
    role?: EnumCommentRoleFilter<"Comment"> | $Enums.CommentRole
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    videoId?: SortOrder
    timecodeMs?: SortOrder
    body?: SortOrder
    author?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    token?: StringWithAggregatesFilter<"Comment"> | string
    videoId?: StringWithAggregatesFilter<"Comment"> | string
    timecodeMs?: IntWithAggregatesFilter<"Comment"> | number
    body?: StringWithAggregatesFilter<"Comment"> | string
    author?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    role?: EnumCommentRoleWithAggregatesFilter<"Comment"> | $Enums.CommentRole
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    parentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
  }

  export type ShareLinkCreateInput = {
    id?: string
    token: string
    videoId: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    allowComments?: boolean
    allowDownload?: boolean
    contactId?: string | null
    conversationId?: string | null
  }

  export type ShareLinkUncheckedCreateInput = {
    id?: string
    token: string
    videoId: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    allowComments?: boolean
    allowDownload?: boolean
    contactId?: string | null
    conversationId?: string | null
  }

  export type ShareLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowDownload?: BoolFieldUpdateOperationsInput | boolean
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShareLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowDownload?: BoolFieldUpdateOperationsInput | boolean
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShareLinkCreateManyInput = {
    id?: string
    token: string
    videoId: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    allowComments?: boolean
    allowDownload?: boolean
    contactId?: string | null
    conversationId?: string | null
  }

  export type ShareLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowDownload?: BoolFieldUpdateOperationsInput | boolean
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShareLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowDownload?: BoolFieldUpdateOperationsInput | boolean
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateInput = {
    id?: string
    token: string
    videoId: string
    timecodeMs: number
    body: string
    author?: string | null
    role?: $Enums.CommentRole
    createdAt?: Date | string
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    token: string
    videoId: string
    timecodeMs: number
    body: string
    author?: string | null
    role?: $Enums.CommentRole
    createdAt?: Date | string
    parentId?: string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    timecodeMs?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumCommentRoleFieldUpdateOperationsInput | $Enums.CommentRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    timecodeMs?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumCommentRoleFieldUpdateOperationsInput | $Enums.CommentRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    token: string
    videoId: string
    timecodeMs: number
    body: string
    author?: string | null
    role?: $Enums.CommentRole
    createdAt?: Date | string
    parentId?: string | null
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    timecodeMs?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumCommentRoleFieldUpdateOperationsInput | $Enums.CommentRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    timecodeMs?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumCommentRoleFieldUpdateOperationsInput | $Enums.CommentRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ShareLinkCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    allowComments?: SortOrder
    allowDownload?: SortOrder
    contactId?: SortOrder
    conversationId?: SortOrder
  }

  export type ShareLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    allowComments?: SortOrder
    allowDownload?: SortOrder
    contactId?: SortOrder
    conversationId?: SortOrder
  }

  export type ShareLinkMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    allowComments?: SortOrder
    allowDownload?: SortOrder
    contactId?: SortOrder
    conversationId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumCommentRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentRole | EnumCommentRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CommentRole[]
    notIn?: $Enums.CommentRole[]
    not?: NestedEnumCommentRoleFilter<$PrismaModel> | $Enums.CommentRole
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    videoId?: SortOrder
    timecodeMs?: SortOrder
    body?: SortOrder
    author?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    timecodeMs?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    videoId?: SortOrder
    timecodeMs?: SortOrder
    body?: SortOrder
    author?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    videoId?: SortOrder
    timecodeMs?: SortOrder
    body?: SortOrder
    author?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    timecodeMs?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EnumCommentRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentRole | EnumCommentRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CommentRole[]
    notIn?: $Enums.CommentRole[]
    not?: NestedEnumCommentRoleWithAggregatesFilter<$PrismaModel> | $Enums.CommentRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommentRoleFilter<$PrismaModel>
    _max?: NestedEnumCommentRoleFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCommentRoleFieldUpdateOperationsInput = {
    set?: $Enums.CommentRole
  }

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedEnumCommentRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentRole | EnumCommentRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CommentRole[]
    notIn?: $Enums.CommentRole[]
    not?: NestedEnumCommentRoleFilter<$PrismaModel> | $Enums.CommentRole
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumCommentRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentRole | EnumCommentRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CommentRole[]
    notIn?: $Enums.CommentRole[]
    not?: NestedEnumCommentRoleWithAggregatesFilter<$PrismaModel> | $Enums.CommentRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommentRoleFilter<$PrismaModel>
    _max?: NestedEnumCommentRoleFilter<$PrismaModel>
  }

  export type CommentCreateWithoutRepliesInput = {
    id?: string
    token: string
    videoId: string
    timecodeMs: number
    body: string
    author?: string | null
    role?: $Enums.CommentRole
    createdAt?: Date | string
    parent?: CommentCreateNestedOneWithoutRepliesInput
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string
    token: string
    videoId: string
    timecodeMs: number
    body: string
    author?: string | null
    role?: $Enums.CommentRole
    createdAt?: Date | string
    parentId?: string | null
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type CommentCreateWithoutParentInput = {
    id?: string
    token: string
    videoId: string
    timecodeMs: number
    body: string
    author?: string | null
    role?: $Enums.CommentRole
    createdAt?: Date | string
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutParentInput = {
    id?: string
    token: string
    videoId: string
    timecodeMs: number
    body: string
    author?: string | null
    role?: $Enums.CommentRole
    createdAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentCreateManyParentInputEnvelope = {
    data: CommentCreateManyParentInput | CommentCreateManyParentInput[]
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    timecodeMs?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumCommentRoleFieldUpdateOperationsInput | $Enums.CommentRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CommentUpdateOneWithoutRepliesNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    timecodeMs?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumCommentRoleFieldUpdateOperationsInput | $Enums.CommentRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
  }

  export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutParentInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    token?: StringFilter<"Comment"> | string
    videoId?: StringFilter<"Comment"> | string
    timecodeMs?: IntFilter<"Comment"> | number
    body?: StringFilter<"Comment"> | string
    author?: StringNullableFilter<"Comment"> | string | null
    role?: EnumCommentRoleFilter<"Comment"> | $Enums.CommentRole
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    parentId?: StringNullableFilter<"Comment"> | string | null
  }

  export type CommentCreateManyParentInput = {
    id?: string
    token: string
    videoId: string
    timecodeMs: number
    body: string
    author?: string | null
    role?: $Enums.CommentRole
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    timecodeMs?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumCommentRoleFieldUpdateOperationsInput | $Enums.CommentRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    timecodeMs?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumCommentRoleFieldUpdateOperationsInput | $Enums.CommentRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    timecodeMs?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumCommentRoleFieldUpdateOperationsInput | $Enums.CommentRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
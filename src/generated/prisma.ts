import { GraphQLResolveInfo, GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { Options } from "graphql-binding";
import { makePrismaBindingClass, BasePrismaOptions } from "prisma-binding";

export interface Query {
  posts: <T = Post[]>(
    args: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  comedians: <T = Comedian[]>(
    args: {
      where?: ComedianWhereInput;
      orderBy?: ComedianOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  shows: <T = Show[]>(
    args: {
      where?: ShowWhereInput;
      orderBy?: ShowOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  venues: <T = Venue[]>(
    args: {
      where?: VenueWhereInput;
      orderBy?: VenueOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  post: <T = Post | null>(
    args: { where: PostWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  comedian: <T = Comedian | null>(
    args: { where: ComedianWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  show: <T = Show | null>(
    args: { where: ShowWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  venue: <T = Venue | null>(
    args: { where: VenueWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  postsConnection: <T = PostConnection>(
    args: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  comediansConnection: <T = ComedianConnection>(
    args: {
      where?: ComedianWhereInput;
      orderBy?: ComedianOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  showsConnection: <T = ShowConnection>(
    args: {
      where?: ShowWhereInput;
      orderBy?: ShowOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  venuesConnection: <T = VenueConnection>(
    args: {
      where?: VenueWhereInput;
      orderBy?: VenueOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  node: <T = Node | null>(
    args: { id: ID_Output },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
}

export interface Mutation {
  createPost: <T = Post>(
    args: { data: PostCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  createComedian: <T = Comedian>(
    args: { data: ComedianCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  createShow: <T = Show>(
    args: { data: ShowCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  createVenue: <T = Venue>(
    args: { data: VenueCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updatePost: <T = Post | null>(
    args: { data: PostUpdateInput; where: PostWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateComedian: <T = Comedian | null>(
    args: { data: ComedianUpdateInput; where: ComedianWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateShow: <T = Show | null>(
    args: { data: ShowUpdateInput; where: ShowWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateVenue: <T = Venue | null>(
    args: { data: VenueUpdateInput; where: VenueWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deletePost: <T = Post | null>(
    args: { where: PostWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteComedian: <T = Comedian | null>(
    args: { where: ComedianWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteShow: <T = Show | null>(
    args: { where: ShowWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteVenue: <T = Venue | null>(
    args: { where: VenueWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  upsertPost: <T = Post>(
    args: {
      where: PostWhereUniqueInput;
      create: PostCreateInput;
      update: PostUpdateInput;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  upsertComedian: <T = Comedian>(
    args: {
      where: ComedianWhereUniqueInput;
      create: ComedianCreateInput;
      update: ComedianUpdateInput;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  upsertShow: <T = Show>(
    args: {
      where: ShowWhereUniqueInput;
      create: ShowCreateInput;
      update: ShowUpdateInput;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  upsertVenue: <T = Venue>(
    args: {
      where: VenueWhereUniqueInput;
      create: VenueCreateInput;
      update: VenueUpdateInput;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateManyPosts: <T = BatchPayload>(
    args: { data: PostUpdateInput; where?: PostWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateManyComedians: <T = BatchPayload>(
    args: { data: ComedianUpdateInput; where?: ComedianWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateManyShows: <T = BatchPayload>(
    args: { data: ShowUpdateInput; where?: ShowWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateManyVenues: <T = BatchPayload>(
    args: { data: VenueUpdateInput; where?: VenueWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteManyPosts: <T = BatchPayload>(
    args: { where?: PostWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteManyComedians: <T = BatchPayload>(
    args: { where?: ComedianWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteManyShows: <T = BatchPayload>(
    args: { where?: ShowWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteManyVenues: <T = BatchPayload>(
    args: { where?: VenueWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
}

export interface Subscription {
  post: <T = PostSubscriptionPayload | null>(
    args: { where?: PostSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  comedian: <T = ComedianSubscriptionPayload | null>(
    args: { where?: ComedianSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  show: <T = ShowSubscriptionPayload | null>(
    args: { where?: ShowSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  venue: <T = VenueSubscriptionPayload | null>(
    args: { where?: VenueSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
}

export interface Exists {
  Post: (where?: PostWhereInput) => Promise<boolean>;
  Comedian: (where?: ComedianWhereInput) => Promise<boolean>;
  Show: (where?: ShowWhereInput) => Promise<boolean>;
  Venue: (where?: VenueWhereInput) => Promise<boolean>;
}

export interface Prisma {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
  exists: Exists;
  request: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  delegate(
    operation: "query" | "mutation",
    fieldName: string,
    args: {
      [key: string]: any;
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options
  ): Promise<any>;
  delegateSubscription(
    fieldName: string,
    args?: {
      [key: string]: any;
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options
  ): Promise<AsyncIterator<any>>;
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new (options: BasePrismaOptions): T;
}
/**
 * Type Defs
 */

const typeDefs = `type AggregateComedian {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateShow {
  count: Int!
}

type AggregateVenue {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Comedian implements Node {
  id: ID!
  slug: String!
  name: String!
  website: String
  imageUrl: String
  stubsiteId: Int
  ticketmasterId: String
  shows(where: ShowWhereInput, orderBy: ShowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Show!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type ComedianConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ComedianEdge]!
  aggregate: AggregateComedian!
}

input ComedianCreateInput {
  slug: String!
  name: String!
  website: String
  imageUrl: String
  stubsiteId: Int
  ticketmasterId: String
  shows: ShowCreateManyWithoutComediansInput
}

input ComedianCreateManyWithoutShowsInput {
  create: [ComedianCreateWithoutShowsInput!]
  connect: [ComedianWhereUniqueInput!]
}

input ComedianCreateWithoutShowsInput {
  slug: String!
  name: String!
  website: String
  imageUrl: String
  stubsiteId: Int
  ticketmasterId: String
}

"""An edge in a connection."""
type ComedianEdge {
  """The item at the end of the edge."""
  node: Comedian!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ComedianOrderByInput {
  id_ASC
  id_DESC
  slug_ASC
  slug_DESC
  name_ASC
  name_DESC
  website_ASC
  website_DESC
  imageUrl_ASC
  imageUrl_DESC
  stubsiteId_ASC
  stubsiteId_DESC
  ticketmasterId_ASC
  ticketmasterId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ComedianPreviousValues {
  id: ID!
  slug: String!
  name: String!
  website: String
  imageUrl: String
  stubsiteId: Int
  ticketmasterId: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ComedianSubscriptionPayload {
  mutation: MutationType!
  node: Comedian
  updatedFields: [String!]
  previousValues: ComedianPreviousValues
}

input ComedianSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ComedianSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ComedianSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ComedianSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ComedianWhereInput
}

input ComedianUpdateInput {
  slug: String
  name: String
  website: String
  imageUrl: String
  stubsiteId: Int
  ticketmasterId: String
  shows: ShowUpdateManyWithoutComediansInput
}

input ComedianUpdateManyWithoutShowsInput {
  create: [ComedianCreateWithoutShowsInput!]
  connect: [ComedianWhereUniqueInput!]
  disconnect: [ComedianWhereUniqueInput!]
  delete: [ComedianWhereUniqueInput!]
  update: [ComedianUpdateWithWhereUniqueWithoutShowsInput!]
  upsert: [ComedianUpsertWithWhereUniqueWithoutShowsInput!]
}

input ComedianUpdateWithoutShowsDataInput {
  slug: String
  name: String
  website: String
  imageUrl: String
  stubsiteId: Int
  ticketmasterId: String
}

input ComedianUpdateWithWhereUniqueWithoutShowsInput {
  where: ComedianWhereUniqueInput!
  data: ComedianUpdateWithoutShowsDataInput!
}

input ComedianUpsertWithWhereUniqueWithoutShowsInput {
  where: ComedianWhereUniqueInput!
  update: ComedianUpdateWithoutShowsDataInput!
  create: ComedianCreateWithoutShowsInput!
}

input ComedianWhereInput {
  """Logical AND on all given filters."""
  AND: [ComedianWhereInput!]

  """Logical OR on all given filters."""
  OR: [ComedianWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ComedianWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  website: String

  """All values that are not equal to given value."""
  website_not: String

  """All values that are contained in given list."""
  website_in: [String!]

  """All values that are not contained in given list."""
  website_not_in: [String!]

  """All values less than the given value."""
  website_lt: String

  """All values less than or equal the given value."""
  website_lte: String

  """All values greater than the given value."""
  website_gt: String

  """All values greater than or equal the given value."""
  website_gte: String

  """All values containing the given string."""
  website_contains: String

  """All values not containing the given string."""
  website_not_contains: String

  """All values starting with the given string."""
  website_starts_with: String

  """All values not starting with the given string."""
  website_not_starts_with: String

  """All values ending with the given string."""
  website_ends_with: String

  """All values not ending with the given string."""
  website_not_ends_with: String
  imageUrl: String

  """All values that are not equal to given value."""
  imageUrl_not: String

  """All values that are contained in given list."""
  imageUrl_in: [String!]

  """All values that are not contained in given list."""
  imageUrl_not_in: [String!]

  """All values less than the given value."""
  imageUrl_lt: String

  """All values less than or equal the given value."""
  imageUrl_lte: String

  """All values greater than the given value."""
  imageUrl_gt: String

  """All values greater than or equal the given value."""
  imageUrl_gte: String

  """All values containing the given string."""
  imageUrl_contains: String

  """All values not containing the given string."""
  imageUrl_not_contains: String

  """All values starting with the given string."""
  imageUrl_starts_with: String

  """All values not starting with the given string."""
  imageUrl_not_starts_with: String

  """All values ending with the given string."""
  imageUrl_ends_with: String

  """All values not ending with the given string."""
  imageUrl_not_ends_with: String
  stubsiteId: Int

  """All values that are not equal to given value."""
  stubsiteId_not: Int

  """All values that are contained in given list."""
  stubsiteId_in: [Int!]

  """All values that are not contained in given list."""
  stubsiteId_not_in: [Int!]

  """All values less than the given value."""
  stubsiteId_lt: Int

  """All values less than or equal the given value."""
  stubsiteId_lte: Int

  """All values greater than the given value."""
  stubsiteId_gt: Int

  """All values greater than or equal the given value."""
  stubsiteId_gte: Int
  ticketmasterId: String

  """All values that are not equal to given value."""
  ticketmasterId_not: String

  """All values that are contained in given list."""
  ticketmasterId_in: [String!]

  """All values that are not contained in given list."""
  ticketmasterId_not_in: [String!]

  """All values less than the given value."""
  ticketmasterId_lt: String

  """All values less than or equal the given value."""
  ticketmasterId_lte: String

  """All values greater than the given value."""
  ticketmasterId_gt: String

  """All values greater than or equal the given value."""
  ticketmasterId_gte: String

  """All values containing the given string."""
  ticketmasterId_contains: String

  """All values not containing the given string."""
  ticketmasterId_not_contains: String

  """All values starting with the given string."""
  ticketmasterId_starts_with: String

  """All values not starting with the given string."""
  ticketmasterId_not_starts_with: String

  """All values ending with the given string."""
  ticketmasterId_ends_with: String

  """All values not ending with the given string."""
  ticketmasterId_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  shows_every: ShowWhereInput
  shows_some: ShowWhereInput
  shows_none: ShowWhereInput
}

input ComedianWhereUniqueInput {
  id: ID
  slug: String
  stubsiteId: Int
  ticketmasterId: String
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createPost(data: PostCreateInput!): Post!
  createComedian(data: ComedianCreateInput!): Comedian!
  createShow(data: ShowCreateInput!): Show!
  createVenue(data: VenueCreateInput!): Venue!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateComedian(data: ComedianUpdateInput!, where: ComedianWhereUniqueInput!): Comedian
  updateShow(data: ShowUpdateInput!, where: ShowWhereUniqueInput!): Show
  updateVenue(data: VenueUpdateInput!, where: VenueWhereUniqueInput!): Venue
  deletePost(where: PostWhereUniqueInput!): Post
  deleteComedian(where: ComedianWhereUniqueInput!): Comedian
  deleteShow(where: ShowWhereUniqueInput!): Show
  deleteVenue(where: VenueWhereUniqueInput!): Venue
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertComedian(where: ComedianWhereUniqueInput!, create: ComedianCreateInput!, update: ComedianUpdateInput!): Comedian!
  upsertShow(where: ShowWhereUniqueInput!, create: ShowCreateInput!, update: ShowUpdateInput!): Show!
  upsertVenue(where: VenueWhereUniqueInput!, create: VenueCreateInput!, update: VenueUpdateInput!): Venue!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  updateManyComedians(data: ComedianUpdateInput!, where: ComedianWhereInput): BatchPayload!
  updateManyShows(data: ShowUpdateInput!, where: ShowWhereInput): BatchPayload!
  updateManyVenues(data: VenueUpdateInput!, where: VenueWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyComedians(where: ComedianWhereInput): BatchPayload!
  deleteManyShows(where: ShowWhereInput): BatchPayload!
  deleteManyVenues(where: VenueWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Post implements Node {
  id: ID!
  isPublished: Boolean!
  title: String!
  text: String!
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  title: String!
  text: String!
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PostPreviousValues {
  id: ID!
  isPublished: Boolean!
  title: String!
  text: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  text: String
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  isPublished: Boolean

  """All values that are not equal to given value."""
  isPublished_not: Boolean
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  comedians(where: ComedianWhereInput, orderBy: ComedianOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comedian]!
  shows(where: ShowWhereInput, orderBy: ShowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Show]!
  venues(where: VenueWhereInput, orderBy: VenueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Venue]!
  post(where: PostWhereUniqueInput!): Post
  comedian(where: ComedianWhereUniqueInput!): Comedian
  show(where: ShowWhereUniqueInput!): Show
  venue(where: VenueWhereUniqueInput!): Venue
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  comediansConnection(where: ComedianWhereInput, orderBy: ComedianOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ComedianConnection!
  showsConnection(where: ShowWhereInput, orderBy: ShowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ShowConnection!
  venuesConnection(where: VenueWhereInput, orderBy: VenueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VenueConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

enum ScraperType {
  COMEDYCELLAR
  STUBSITES
  TICKETMASTER
}

type Show implements Node {
  id: ID!
  name: String!
  comedians(where: ComedianWhereInput, orderBy: ComedianOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comedian!]
  description: String
  startTime: DateTime!
  checkoutUrl: String!
  venue(where: VenueWhereInput): Venue!
  price: Float
  soldOut: Boolean
  stubsiteId: Int
  cellarId: Int
  ticketmasterId: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type ShowConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ShowEdge]!
  aggregate: AggregateShow!
}

input ShowCreateInput {
  name: String!
  description: String
  startTime: DateTime!
  checkoutUrl: String!
  price: Float
  soldOut: Boolean
  stubsiteId: Int
  cellarId: Int
  ticketmasterId: String
  comedians: ComedianCreateManyWithoutShowsInput
  venue: VenueCreateOneWithoutShowsInput!
}

input ShowCreateManyWithoutComediansInput {
  create: [ShowCreateWithoutComediansInput!]
  connect: [ShowWhereUniqueInput!]
}

input ShowCreateManyWithoutVenueInput {
  create: [ShowCreateWithoutVenueInput!]
  connect: [ShowWhereUniqueInput!]
}

input ShowCreateWithoutComediansInput {
  name: String!
  description: String
  startTime: DateTime!
  checkoutUrl: String!
  price: Float
  soldOut: Boolean
  stubsiteId: Int
  cellarId: Int
  ticketmasterId: String
  venue: VenueCreateOneWithoutShowsInput!
}

input ShowCreateWithoutVenueInput {
  name: String!
  description: String
  startTime: DateTime!
  checkoutUrl: String!
  price: Float
  soldOut: Boolean
  stubsiteId: Int
  cellarId: Int
  ticketmasterId: String
  comedians: ComedianCreateManyWithoutShowsInput
}

"""An edge in a connection."""
type ShowEdge {
  """The item at the end of the edge."""
  node: Show!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ShowOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  startTime_ASC
  startTime_DESC
  checkoutUrl_ASC
  checkoutUrl_DESC
  price_ASC
  price_DESC
  soldOut_ASC
  soldOut_DESC
  stubsiteId_ASC
  stubsiteId_DESC
  cellarId_ASC
  cellarId_DESC
  ticketmasterId_ASC
  ticketmasterId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ShowPreviousValues {
  id: ID!
  name: String!
  description: String
  startTime: DateTime!
  checkoutUrl: String!
  price: Float
  soldOut: Boolean
  stubsiteId: Int
  cellarId: Int
  ticketmasterId: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ShowSubscriptionPayload {
  mutation: MutationType!
  node: Show
  updatedFields: [String!]
  previousValues: ShowPreviousValues
}

input ShowSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ShowSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ShowSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ShowSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ShowWhereInput
}

input ShowUpdateInput {
  name: String
  description: String
  startTime: DateTime
  checkoutUrl: String
  price: Float
  soldOut: Boolean
  stubsiteId: Int
  cellarId: Int
  ticketmasterId: String
  comedians: ComedianUpdateManyWithoutShowsInput
  venue: VenueUpdateOneWithoutShowsInput
}

input ShowUpdateManyWithoutComediansInput {
  create: [ShowCreateWithoutComediansInput!]
  connect: [ShowWhereUniqueInput!]
  disconnect: [ShowWhereUniqueInput!]
  delete: [ShowWhereUniqueInput!]
  update: [ShowUpdateWithWhereUniqueWithoutComediansInput!]
  upsert: [ShowUpsertWithWhereUniqueWithoutComediansInput!]
}

input ShowUpdateManyWithoutVenueInput {
  create: [ShowCreateWithoutVenueInput!]
  connect: [ShowWhereUniqueInput!]
  disconnect: [ShowWhereUniqueInput!]
  delete: [ShowWhereUniqueInput!]
  update: [ShowUpdateWithWhereUniqueWithoutVenueInput!]
  upsert: [ShowUpsertWithWhereUniqueWithoutVenueInput!]
}

input ShowUpdateWithoutComediansDataInput {
  name: String
  description: String
  startTime: DateTime
  checkoutUrl: String
  price: Float
  soldOut: Boolean
  stubsiteId: Int
  cellarId: Int
  ticketmasterId: String
  venue: VenueUpdateOneWithoutShowsInput
}

input ShowUpdateWithoutVenueDataInput {
  name: String
  description: String
  startTime: DateTime
  checkoutUrl: String
  price: Float
  soldOut: Boolean
  stubsiteId: Int
  cellarId: Int
  ticketmasterId: String
  comedians: ComedianUpdateManyWithoutShowsInput
}

input ShowUpdateWithWhereUniqueWithoutComediansInput {
  where: ShowWhereUniqueInput!
  data: ShowUpdateWithoutComediansDataInput!
}

input ShowUpdateWithWhereUniqueWithoutVenueInput {
  where: ShowWhereUniqueInput!
  data: ShowUpdateWithoutVenueDataInput!
}

input ShowUpsertWithWhereUniqueWithoutComediansInput {
  where: ShowWhereUniqueInput!
  update: ShowUpdateWithoutComediansDataInput!
  create: ShowCreateWithoutComediansInput!
}

input ShowUpsertWithWhereUniqueWithoutVenueInput {
  where: ShowWhereUniqueInput!
  update: ShowUpdateWithoutVenueDataInput!
  create: ShowCreateWithoutVenueInput!
}

input ShowWhereInput {
  """Logical AND on all given filters."""
  AND: [ShowWhereInput!]

  """Logical OR on all given filters."""
  OR: [ShowWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ShowWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  startTime: DateTime

  """All values that are not equal to given value."""
  startTime_not: DateTime

  """All values that are contained in given list."""
  startTime_in: [DateTime!]

  """All values that are not contained in given list."""
  startTime_not_in: [DateTime!]

  """All values less than the given value."""
  startTime_lt: DateTime

  """All values less than or equal the given value."""
  startTime_lte: DateTime

  """All values greater than the given value."""
  startTime_gt: DateTime

  """All values greater than or equal the given value."""
  startTime_gte: DateTime
  checkoutUrl: String

  """All values that are not equal to given value."""
  checkoutUrl_not: String

  """All values that are contained in given list."""
  checkoutUrl_in: [String!]

  """All values that are not contained in given list."""
  checkoutUrl_not_in: [String!]

  """All values less than the given value."""
  checkoutUrl_lt: String

  """All values less than or equal the given value."""
  checkoutUrl_lte: String

  """All values greater than the given value."""
  checkoutUrl_gt: String

  """All values greater than or equal the given value."""
  checkoutUrl_gte: String

  """All values containing the given string."""
  checkoutUrl_contains: String

  """All values not containing the given string."""
  checkoutUrl_not_contains: String

  """All values starting with the given string."""
  checkoutUrl_starts_with: String

  """All values not starting with the given string."""
  checkoutUrl_not_starts_with: String

  """All values ending with the given string."""
  checkoutUrl_ends_with: String

  """All values not ending with the given string."""
  checkoutUrl_not_ends_with: String
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  soldOut: Boolean

  """All values that are not equal to given value."""
  soldOut_not: Boolean
  stubsiteId: Int

  """All values that are not equal to given value."""
  stubsiteId_not: Int

  """All values that are contained in given list."""
  stubsiteId_in: [Int!]

  """All values that are not contained in given list."""
  stubsiteId_not_in: [Int!]

  """All values less than the given value."""
  stubsiteId_lt: Int

  """All values less than or equal the given value."""
  stubsiteId_lte: Int

  """All values greater than the given value."""
  stubsiteId_gt: Int

  """All values greater than or equal the given value."""
  stubsiteId_gte: Int
  cellarId: Int

  """All values that are not equal to given value."""
  cellarId_not: Int

  """All values that are contained in given list."""
  cellarId_in: [Int!]

  """All values that are not contained in given list."""
  cellarId_not_in: [Int!]

  """All values less than the given value."""
  cellarId_lt: Int

  """All values less than or equal the given value."""
  cellarId_lte: Int

  """All values greater than the given value."""
  cellarId_gt: Int

  """All values greater than or equal the given value."""
  cellarId_gte: Int
  ticketmasterId: String

  """All values that are not equal to given value."""
  ticketmasterId_not: String

  """All values that are contained in given list."""
  ticketmasterId_in: [String!]

  """All values that are not contained in given list."""
  ticketmasterId_not_in: [String!]

  """All values less than the given value."""
  ticketmasterId_lt: String

  """All values less than or equal the given value."""
  ticketmasterId_lte: String

  """All values greater than the given value."""
  ticketmasterId_gt: String

  """All values greater than or equal the given value."""
  ticketmasterId_gte: String

  """All values containing the given string."""
  ticketmasterId_contains: String

  """All values not containing the given string."""
  ticketmasterId_not_contains: String

  """All values starting with the given string."""
  ticketmasterId_starts_with: String

  """All values not starting with the given string."""
  ticketmasterId_not_starts_with: String

  """All values ending with the given string."""
  ticketmasterId_ends_with: String

  """All values not ending with the given string."""
  ticketmasterId_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  comedians_every: ComedianWhereInput
  comedians_some: ComedianWhereInput
  comedians_none: ComedianWhereInput
  venue: VenueWhereInput
}

input ShowWhereUniqueInput {
  id: ID
  stubsiteId: Int
  cellarId: Int
  ticketmasterId: String
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  comedian(where: ComedianSubscriptionWhereInput): ComedianSubscriptionPayload
  show(where: ShowSubscriptionWhereInput): ShowSubscriptionPayload
  venue(where: VenueSubscriptionWhereInput): VenueSubscriptionPayload
}

type Venue implements Node {
  id: ID!
  name: String!
  slug: String!
  description: String
  url: String!
  stubsiteId: Int
  ticketmasterId: String
  shows(where: ShowWhereInput, orderBy: ShowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Show!]
  lineOne: String!
  lineTwo: String
  zip: Int!
  city: String!
  state: String!
  latitude: Float!
  longitude: Float!
  scraper: ScraperType!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type VenueConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [VenueEdge]!
  aggregate: AggregateVenue!
}

input VenueCreateInput {
  name: String!
  slug: String!
  description: String
  url: String!
  stubsiteId: Int
  ticketmasterId: String
  lineOne: String!
  lineTwo: String
  zip: Int!
  city: String!
  state: String!
  latitude: Float!
  longitude: Float!
  scraper: ScraperType!
  shows: ShowCreateManyWithoutVenueInput
}

input VenueCreateOneWithoutShowsInput {
  create: VenueCreateWithoutShowsInput
  connect: VenueWhereUniqueInput
}

input VenueCreateWithoutShowsInput {
  name: String!
  slug: String!
  description: String
  url: String!
  stubsiteId: Int
  ticketmasterId: String
  lineOne: String!
  lineTwo: String
  zip: Int!
  city: String!
  state: String!
  latitude: Float!
  longitude: Float!
  scraper: ScraperType!
}

"""An edge in a connection."""
type VenueEdge {
  """The item at the end of the edge."""
  node: Venue!

  """A cursor for use in pagination."""
  cursor: String!
}

enum VenueOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  description_ASC
  description_DESC
  url_ASC
  url_DESC
  stubsiteId_ASC
  stubsiteId_DESC
  ticketmasterId_ASC
  ticketmasterId_DESC
  lineOne_ASC
  lineOne_DESC
  lineTwo_ASC
  lineTwo_DESC
  zip_ASC
  zip_DESC
  city_ASC
  city_DESC
  state_ASC
  state_DESC
  latitude_ASC
  latitude_DESC
  longitude_ASC
  longitude_DESC
  scraper_ASC
  scraper_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type VenuePreviousValues {
  id: ID!
  name: String!
  slug: String!
  description: String
  url: String!
  stubsiteId: Int
  ticketmasterId: String
  lineOne: String!
  lineTwo: String
  zip: Int!
  city: String!
  state: String!
  latitude: Float!
  longitude: Float!
  scraper: ScraperType!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type VenueSubscriptionPayload {
  mutation: MutationType!
  node: Venue
  updatedFields: [String!]
  previousValues: VenuePreviousValues
}

input VenueSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [VenueSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [VenueSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [VenueSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: VenueWhereInput
}

input VenueUpdateInput {
  name: String
  slug: String
  description: String
  url: String
  stubsiteId: Int
  ticketmasterId: String
  lineOne: String
  lineTwo: String
  zip: Int
  city: String
  state: String
  latitude: Float
  longitude: Float
  scraper: ScraperType
  shows: ShowUpdateManyWithoutVenueInput
}

input VenueUpdateOneWithoutShowsInput {
  create: VenueCreateWithoutShowsInput
  connect: VenueWhereUniqueInput
  delete: Boolean
  update: VenueUpdateWithoutShowsDataInput
  upsert: VenueUpsertWithoutShowsInput
}

input VenueUpdateWithoutShowsDataInput {
  name: String
  slug: String
  description: String
  url: String
  stubsiteId: Int
  ticketmasterId: String
  lineOne: String
  lineTwo: String
  zip: Int
  city: String
  state: String
  latitude: Float
  longitude: Float
  scraper: ScraperType
}

input VenueUpsertWithoutShowsInput {
  update: VenueUpdateWithoutShowsDataInput!
  create: VenueCreateWithoutShowsInput!
}

input VenueWhereInput {
  """Logical AND on all given filters."""
  AND: [VenueWhereInput!]

  """Logical OR on all given filters."""
  OR: [VenueWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [VenueWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  stubsiteId: Int

  """All values that are not equal to given value."""
  stubsiteId_not: Int

  """All values that are contained in given list."""
  stubsiteId_in: [Int!]

  """All values that are not contained in given list."""
  stubsiteId_not_in: [Int!]

  """All values less than the given value."""
  stubsiteId_lt: Int

  """All values less than or equal the given value."""
  stubsiteId_lte: Int

  """All values greater than the given value."""
  stubsiteId_gt: Int

  """All values greater than or equal the given value."""
  stubsiteId_gte: Int
  ticketmasterId: String

  """All values that are not equal to given value."""
  ticketmasterId_not: String

  """All values that are contained in given list."""
  ticketmasterId_in: [String!]

  """All values that are not contained in given list."""
  ticketmasterId_not_in: [String!]

  """All values less than the given value."""
  ticketmasterId_lt: String

  """All values less than or equal the given value."""
  ticketmasterId_lte: String

  """All values greater than the given value."""
  ticketmasterId_gt: String

  """All values greater than or equal the given value."""
  ticketmasterId_gte: String

  """All values containing the given string."""
  ticketmasterId_contains: String

  """All values not containing the given string."""
  ticketmasterId_not_contains: String

  """All values starting with the given string."""
  ticketmasterId_starts_with: String

  """All values not starting with the given string."""
  ticketmasterId_not_starts_with: String

  """All values ending with the given string."""
  ticketmasterId_ends_with: String

  """All values not ending with the given string."""
  ticketmasterId_not_ends_with: String
  lineOne: String

  """All values that are not equal to given value."""
  lineOne_not: String

  """All values that are contained in given list."""
  lineOne_in: [String!]

  """All values that are not contained in given list."""
  lineOne_not_in: [String!]

  """All values less than the given value."""
  lineOne_lt: String

  """All values less than or equal the given value."""
  lineOne_lte: String

  """All values greater than the given value."""
  lineOne_gt: String

  """All values greater than or equal the given value."""
  lineOne_gte: String

  """All values containing the given string."""
  lineOne_contains: String

  """All values not containing the given string."""
  lineOne_not_contains: String

  """All values starting with the given string."""
  lineOne_starts_with: String

  """All values not starting with the given string."""
  lineOne_not_starts_with: String

  """All values ending with the given string."""
  lineOne_ends_with: String

  """All values not ending with the given string."""
  lineOne_not_ends_with: String
  lineTwo: String

  """All values that are not equal to given value."""
  lineTwo_not: String

  """All values that are contained in given list."""
  lineTwo_in: [String!]

  """All values that are not contained in given list."""
  lineTwo_not_in: [String!]

  """All values less than the given value."""
  lineTwo_lt: String

  """All values less than or equal the given value."""
  lineTwo_lte: String

  """All values greater than the given value."""
  lineTwo_gt: String

  """All values greater than or equal the given value."""
  lineTwo_gte: String

  """All values containing the given string."""
  lineTwo_contains: String

  """All values not containing the given string."""
  lineTwo_not_contains: String

  """All values starting with the given string."""
  lineTwo_starts_with: String

  """All values not starting with the given string."""
  lineTwo_not_starts_with: String

  """All values ending with the given string."""
  lineTwo_ends_with: String

  """All values not ending with the given string."""
  lineTwo_not_ends_with: String
  zip: Int

  """All values that are not equal to given value."""
  zip_not: Int

  """All values that are contained in given list."""
  zip_in: [Int!]

  """All values that are not contained in given list."""
  zip_not_in: [Int!]

  """All values less than the given value."""
  zip_lt: Int

  """All values less than or equal the given value."""
  zip_lte: Int

  """All values greater than the given value."""
  zip_gt: Int

  """All values greater than or equal the given value."""
  zip_gte: Int
  city: String

  """All values that are not equal to given value."""
  city_not: String

  """All values that are contained in given list."""
  city_in: [String!]

  """All values that are not contained in given list."""
  city_not_in: [String!]

  """All values less than the given value."""
  city_lt: String

  """All values less than or equal the given value."""
  city_lte: String

  """All values greater than the given value."""
  city_gt: String

  """All values greater than or equal the given value."""
  city_gte: String

  """All values containing the given string."""
  city_contains: String

  """All values not containing the given string."""
  city_not_contains: String

  """All values starting with the given string."""
  city_starts_with: String

  """All values not starting with the given string."""
  city_not_starts_with: String

  """All values ending with the given string."""
  city_ends_with: String

  """All values not ending with the given string."""
  city_not_ends_with: String
  state: String

  """All values that are not equal to given value."""
  state_not: String

  """All values that are contained in given list."""
  state_in: [String!]

  """All values that are not contained in given list."""
  state_not_in: [String!]

  """All values less than the given value."""
  state_lt: String

  """All values less than or equal the given value."""
  state_lte: String

  """All values greater than the given value."""
  state_gt: String

  """All values greater than or equal the given value."""
  state_gte: String

  """All values containing the given string."""
  state_contains: String

  """All values not containing the given string."""
  state_not_contains: String

  """All values starting with the given string."""
  state_starts_with: String

  """All values not starting with the given string."""
  state_not_starts_with: String

  """All values ending with the given string."""
  state_ends_with: String

  """All values not ending with the given string."""
  state_not_ends_with: String
  latitude: Float

  """All values that are not equal to given value."""
  latitude_not: Float

  """All values that are contained in given list."""
  latitude_in: [Float!]

  """All values that are not contained in given list."""
  latitude_not_in: [Float!]

  """All values less than the given value."""
  latitude_lt: Float

  """All values less than or equal the given value."""
  latitude_lte: Float

  """All values greater than the given value."""
  latitude_gt: Float

  """All values greater than or equal the given value."""
  latitude_gte: Float
  longitude: Float

  """All values that are not equal to given value."""
  longitude_not: Float

  """All values that are contained in given list."""
  longitude_in: [Float!]

  """All values that are not contained in given list."""
  longitude_not_in: [Float!]

  """All values less than the given value."""
  longitude_lt: Float

  """All values less than or equal the given value."""
  longitude_lte: Float

  """All values greater than the given value."""
  longitude_gt: Float

  """All values greater than or equal the given value."""
  longitude_gte: Float
  scraper: ScraperType

  """All values that are not equal to given value."""
  scraper_not: ScraperType

  """All values that are contained in given list."""
  scraper_in: [ScraperType!]

  """All values that are not contained in given list."""
  scraper_not_in: [ScraperType!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  shows_every: ShowWhereInput
  shows_some: ShowWhereInput
  shows_none: ShowWhereInput
}

input VenueWhereUniqueInput {
  id: ID
  slug: String
  stubsiteId: Int
  ticketmasterId: String
}
`;

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({
  typeDefs
});

/**
 * Types
 */

export type ScraperType = "COMEDYCELLAR" | "STUBSITES" | "TICKETMASTER";

export type ComedianOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "slug_ASC"
  | "slug_DESC"
  | "name_ASC"
  | "name_DESC"
  | "website_ASC"
  | "website_DESC"
  | "imageUrl_ASC"
  | "imageUrl_DESC"
  | "stubsiteId_ASC"
  | "stubsiteId_DESC"
  | "ticketmasterId_ASC"
  | "ticketmasterId_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type ShowOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "description_ASC"
  | "description_DESC"
  | "startTime_ASC"
  | "startTime_DESC"
  | "checkoutUrl_ASC"
  | "checkoutUrl_DESC"
  | "price_ASC"
  | "price_DESC"
  | "soldOut_ASC"
  | "soldOut_DESC"
  | "stubsiteId_ASC"
  | "stubsiteId_DESC"
  | "cellarId_ASC"
  | "cellarId_DESC"
  | "ticketmasterId_ASC"
  | "ticketmasterId_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type PostOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "isPublished_ASC"
  | "isPublished_DESC"
  | "title_ASC"
  | "title_DESC"
  | "text_ASC"
  | "text_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type VenueOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "slug_ASC"
  | "slug_DESC"
  | "description_ASC"
  | "description_DESC"
  | "url_ASC"
  | "url_DESC"
  | "stubsiteId_ASC"
  | "stubsiteId_DESC"
  | "ticketmasterId_ASC"
  | "ticketmasterId_DESC"
  | "lineOne_ASC"
  | "lineOne_DESC"
  | "lineTwo_ASC"
  | "lineTwo_DESC"
  | "zip_ASC"
  | "zip_DESC"
  | "city_ASC"
  | "city_DESC"
  | "state_ASC"
  | "state_DESC"
  | "latitude_ASC"
  | "latitude_DESC"
  | "longitude_ASC"
  | "longitude_DESC"
  | "scraper_ASC"
  | "scraper_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface VenueCreateOneWithoutShowsInput {
  create?: VenueCreateWithoutShowsInput;
  connect?: VenueWhereUniqueInput;
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput;
  OR?: PostWhereInput[] | PostWhereInput;
  NOT?: PostWhereInput[] | PostWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  isPublished?: Boolean;
  isPublished_not?: Boolean;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  text?: String;
  text_not?: String;
  text_in?: String[] | String;
  text_not_in?: String[] | String;
  text_lt?: String;
  text_lte?: String;
  text_gt?: String;
  text_gte?: String;
  text_contains?: String;
  text_not_contains?: String;
  text_starts_with?: String;
  text_not_starts_with?: String;
  text_ends_with?: String;
  text_not_ends_with?: String;
}

export interface ComedianCreateWithoutShowsInput {
  slug: String;
  name: String;
  website?: String;
  imageUrl?: String;
  stubsiteId?: Int;
  ticketmasterId?: String;
}

export interface ComedianWhereInput {
  AND?: ComedianWhereInput[] | ComedianWhereInput;
  OR?: ComedianWhereInput[] | ComedianWhereInput;
  NOT?: ComedianWhereInput[] | ComedianWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  slug?: String;
  slug_not?: String;
  slug_in?: String[] | String;
  slug_not_in?: String[] | String;
  slug_lt?: String;
  slug_lte?: String;
  slug_gt?: String;
  slug_gte?: String;
  slug_contains?: String;
  slug_not_contains?: String;
  slug_starts_with?: String;
  slug_not_starts_with?: String;
  slug_ends_with?: String;
  slug_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  website?: String;
  website_not?: String;
  website_in?: String[] | String;
  website_not_in?: String[] | String;
  website_lt?: String;
  website_lte?: String;
  website_gt?: String;
  website_gte?: String;
  website_contains?: String;
  website_not_contains?: String;
  website_starts_with?: String;
  website_not_starts_with?: String;
  website_ends_with?: String;
  website_not_ends_with?: String;
  imageUrl?: String;
  imageUrl_not?: String;
  imageUrl_in?: String[] | String;
  imageUrl_not_in?: String[] | String;
  imageUrl_lt?: String;
  imageUrl_lte?: String;
  imageUrl_gt?: String;
  imageUrl_gte?: String;
  imageUrl_contains?: String;
  imageUrl_not_contains?: String;
  imageUrl_starts_with?: String;
  imageUrl_not_starts_with?: String;
  imageUrl_ends_with?: String;
  imageUrl_not_ends_with?: String;
  stubsiteId?: Int;
  stubsiteId_not?: Int;
  stubsiteId_in?: Int[] | Int;
  stubsiteId_not_in?: Int[] | Int;
  stubsiteId_lt?: Int;
  stubsiteId_lte?: Int;
  stubsiteId_gt?: Int;
  stubsiteId_gte?: Int;
  ticketmasterId?: String;
  ticketmasterId_not?: String;
  ticketmasterId_in?: String[] | String;
  ticketmasterId_not_in?: String[] | String;
  ticketmasterId_lt?: String;
  ticketmasterId_lte?: String;
  ticketmasterId_gt?: String;
  ticketmasterId_gte?: String;
  ticketmasterId_contains?: String;
  ticketmasterId_not_contains?: String;
  ticketmasterId_starts_with?: String;
  ticketmasterId_not_starts_with?: String;
  ticketmasterId_ends_with?: String;
  ticketmasterId_not_ends_with?: String;
  createdAt?: DateTime;
  createdAt_not?: DateTime;
  createdAt_in?: DateTime[] | DateTime;
  createdAt_not_in?: DateTime[] | DateTime;
  createdAt_lt?: DateTime;
  createdAt_lte?: DateTime;
  createdAt_gt?: DateTime;
  createdAt_gte?: DateTime;
  updatedAt?: DateTime;
  updatedAt_not?: DateTime;
  updatedAt_in?: DateTime[] | DateTime;
  updatedAt_not_in?: DateTime[] | DateTime;
  updatedAt_lt?: DateTime;
  updatedAt_lte?: DateTime;
  updatedAt_gt?: DateTime;
  updatedAt_gte?: DateTime;
  shows_every?: ShowWhereInput;
  shows_some?: ShowWhereInput;
  shows_none?: ShowWhereInput;
}

export interface VenueCreateInput {
  name: String;
  slug: String;
  description?: String;
  url: String;
  stubsiteId?: Int;
  ticketmasterId?: String;
  lineOne: String;
  lineTwo?: String;
  zip: Int;
  city: String;
  state: String;
  latitude: Float;
  longitude: Float;
  scraper: ScraperType;
  shows?: ShowCreateManyWithoutVenueInput;
}

export interface ShowWhereInput {
  AND?: ShowWhereInput[] | ShowWhereInput;
  OR?: ShowWhereInput[] | ShowWhereInput;
  NOT?: ShowWhereInput[] | ShowWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  startTime?: DateTime;
  startTime_not?: DateTime;
  startTime_in?: DateTime[] | DateTime;
  startTime_not_in?: DateTime[] | DateTime;
  startTime_lt?: DateTime;
  startTime_lte?: DateTime;
  startTime_gt?: DateTime;
  startTime_gte?: DateTime;
  checkoutUrl?: String;
  checkoutUrl_not?: String;
  checkoutUrl_in?: String[] | String;
  checkoutUrl_not_in?: String[] | String;
  checkoutUrl_lt?: String;
  checkoutUrl_lte?: String;
  checkoutUrl_gt?: String;
  checkoutUrl_gte?: String;
  checkoutUrl_contains?: String;
  checkoutUrl_not_contains?: String;
  checkoutUrl_starts_with?: String;
  checkoutUrl_not_starts_with?: String;
  checkoutUrl_ends_with?: String;
  checkoutUrl_not_ends_with?: String;
  price?: Float;
  price_not?: Float;
  price_in?: Float[] | Float;
  price_not_in?: Float[] | Float;
  price_lt?: Float;
  price_lte?: Float;
  price_gt?: Float;
  price_gte?: Float;
  soldOut?: Boolean;
  soldOut_not?: Boolean;
  stubsiteId?: Int;
  stubsiteId_not?: Int;
  stubsiteId_in?: Int[] | Int;
  stubsiteId_not_in?: Int[] | Int;
  stubsiteId_lt?: Int;
  stubsiteId_lte?: Int;
  stubsiteId_gt?: Int;
  stubsiteId_gte?: Int;
  cellarId?: Int;
  cellarId_not?: Int;
  cellarId_in?: Int[] | Int;
  cellarId_not_in?: Int[] | Int;
  cellarId_lt?: Int;
  cellarId_lte?: Int;
  cellarId_gt?: Int;
  cellarId_gte?: Int;
  ticketmasterId?: String;
  ticketmasterId_not?: String;
  ticketmasterId_in?: String[] | String;
  ticketmasterId_not_in?: String[] | String;
  ticketmasterId_lt?: String;
  ticketmasterId_lte?: String;
  ticketmasterId_gt?: String;
  ticketmasterId_gte?: String;
  ticketmasterId_contains?: String;
  ticketmasterId_not_contains?: String;
  ticketmasterId_starts_with?: String;
  ticketmasterId_not_starts_with?: String;
  ticketmasterId_ends_with?: String;
  ticketmasterId_not_ends_with?: String;
  createdAt?: DateTime;
  createdAt_not?: DateTime;
  createdAt_in?: DateTime[] | DateTime;
  createdAt_not_in?: DateTime[] | DateTime;
  createdAt_lt?: DateTime;
  createdAt_lte?: DateTime;
  createdAt_gt?: DateTime;
  createdAt_gte?: DateTime;
  updatedAt?: DateTime;
  updatedAt_not?: DateTime;
  updatedAt_in?: DateTime[] | DateTime;
  updatedAt_not_in?: DateTime[] | DateTime;
  updatedAt_lt?: DateTime;
  updatedAt_lte?: DateTime;
  updatedAt_gt?: DateTime;
  updatedAt_gte?: DateTime;
  comedians_every?: ComedianWhereInput;
  comedians_some?: ComedianWhereInput;
  comedians_none?: ComedianWhereInput;
  venue?: VenueWhereInput;
}

export interface ShowCreateManyWithoutVenueInput {
  create?: ShowCreateWithoutVenueInput[] | ShowCreateWithoutVenueInput;
  connect?: ShowWhereUniqueInput[] | ShowWhereUniqueInput;
}

export interface VenueWhereInput {
  AND?: VenueWhereInput[] | VenueWhereInput;
  OR?: VenueWhereInput[] | VenueWhereInput;
  NOT?: VenueWhereInput[] | VenueWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  slug?: String;
  slug_not?: String;
  slug_in?: String[] | String;
  slug_not_in?: String[] | String;
  slug_lt?: String;
  slug_lte?: String;
  slug_gt?: String;
  slug_gte?: String;
  slug_contains?: String;
  slug_not_contains?: String;
  slug_starts_with?: String;
  slug_not_starts_with?: String;
  slug_ends_with?: String;
  slug_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  url?: String;
  url_not?: String;
  url_in?: String[] | String;
  url_not_in?: String[] | String;
  url_lt?: String;
  url_lte?: String;
  url_gt?: String;
  url_gte?: String;
  url_contains?: String;
  url_not_contains?: String;
  url_starts_with?: String;
  url_not_starts_with?: String;
  url_ends_with?: String;
  url_not_ends_with?: String;
  stubsiteId?: Int;
  stubsiteId_not?: Int;
  stubsiteId_in?: Int[] | Int;
  stubsiteId_not_in?: Int[] | Int;
  stubsiteId_lt?: Int;
  stubsiteId_lte?: Int;
  stubsiteId_gt?: Int;
  stubsiteId_gte?: Int;
  ticketmasterId?: String;
  ticketmasterId_not?: String;
  ticketmasterId_in?: String[] | String;
  ticketmasterId_not_in?: String[] | String;
  ticketmasterId_lt?: String;
  ticketmasterId_lte?: String;
  ticketmasterId_gt?: String;
  ticketmasterId_gte?: String;
  ticketmasterId_contains?: String;
  ticketmasterId_not_contains?: String;
  ticketmasterId_starts_with?: String;
  ticketmasterId_not_starts_with?: String;
  ticketmasterId_ends_with?: String;
  ticketmasterId_not_ends_with?: String;
  lineOne?: String;
  lineOne_not?: String;
  lineOne_in?: String[] | String;
  lineOne_not_in?: String[] | String;
  lineOne_lt?: String;
  lineOne_lte?: String;
  lineOne_gt?: String;
  lineOne_gte?: String;
  lineOne_contains?: String;
  lineOne_not_contains?: String;
  lineOne_starts_with?: String;
  lineOne_not_starts_with?: String;
  lineOne_ends_with?: String;
  lineOne_not_ends_with?: String;
  lineTwo?: String;
  lineTwo_not?: String;
  lineTwo_in?: String[] | String;
  lineTwo_not_in?: String[] | String;
  lineTwo_lt?: String;
  lineTwo_lte?: String;
  lineTwo_gt?: String;
  lineTwo_gte?: String;
  lineTwo_contains?: String;
  lineTwo_not_contains?: String;
  lineTwo_starts_with?: String;
  lineTwo_not_starts_with?: String;
  lineTwo_ends_with?: String;
  lineTwo_not_ends_with?: String;
  zip?: Int;
  zip_not?: Int;
  zip_in?: Int[] | Int;
  zip_not_in?: Int[] | Int;
  zip_lt?: Int;
  zip_lte?: Int;
  zip_gt?: Int;
  zip_gte?: Int;
  city?: String;
  city_not?: String;
  city_in?: String[] | String;
  city_not_in?: String[] | String;
  city_lt?: String;
  city_lte?: String;
  city_gt?: String;
  city_gte?: String;
  city_contains?: String;
  city_not_contains?: String;
  city_starts_with?: String;
  city_not_starts_with?: String;
  city_ends_with?: String;
  city_not_ends_with?: String;
  state?: String;
  state_not?: String;
  state_in?: String[] | String;
  state_not_in?: String[] | String;
  state_lt?: String;
  state_lte?: String;
  state_gt?: String;
  state_gte?: String;
  state_contains?: String;
  state_not_contains?: String;
  state_starts_with?: String;
  state_not_starts_with?: String;
  state_ends_with?: String;
  state_not_ends_with?: String;
  latitude?: Float;
  latitude_not?: Float;
  latitude_in?: Float[] | Float;
  latitude_not_in?: Float[] | Float;
  latitude_lt?: Float;
  latitude_lte?: Float;
  latitude_gt?: Float;
  latitude_gte?: Float;
  longitude?: Float;
  longitude_not?: Float;
  longitude_in?: Float[] | Float;
  longitude_not_in?: Float[] | Float;
  longitude_lt?: Float;
  longitude_lte?: Float;
  longitude_gt?: Float;
  longitude_gte?: Float;
  scraper?: ScraperType;
  scraper_not?: ScraperType;
  scraper_in?: ScraperType[] | ScraperType;
  scraper_not_in?: ScraperType[] | ScraperType;
  createdAt?: DateTime;
  createdAt_not?: DateTime;
  createdAt_in?: DateTime[] | DateTime;
  createdAt_not_in?: DateTime[] | DateTime;
  createdAt_lt?: DateTime;
  createdAt_lte?: DateTime;
  createdAt_gt?: DateTime;
  createdAt_gte?: DateTime;
  updatedAt?: DateTime;
  updatedAt_not?: DateTime;
  updatedAt_in?: DateTime[] | DateTime;
  updatedAt_not_in?: DateTime[] | DateTime;
  updatedAt_lt?: DateTime;
  updatedAt_lte?: DateTime;
  updatedAt_gt?: DateTime;
  updatedAt_gte?: DateTime;
  shows_every?: ShowWhereInput;
  shows_some?: ShowWhereInput;
  shows_none?: ShowWhereInput;
}

export interface ShowUpdateInput {
  name?: String;
  description?: String;
  startTime?: DateTime;
  checkoutUrl?: String;
  price?: Float;
  soldOut?: Boolean;
  stubsiteId?: Int;
  cellarId?: Int;
  ticketmasterId?: String;
  comedians?: ComedianUpdateManyWithoutShowsInput;
  venue?: VenueUpdateOneWithoutShowsInput;
}

export interface ComedianUpdateInput {
  slug?: String;
  name?: String;
  website?: String;
  imageUrl?: String;
  stubsiteId?: Int;
  ticketmasterId?: String;
  shows?: ShowUpdateManyWithoutComediansInput;
}

export interface ShowUpsertWithWhereUniqueWithoutComediansInput {
  where: ShowWhereUniqueInput;
  update: ShowUpdateWithoutComediansDataInput;
  create: ShowCreateWithoutComediansInput;
}

export interface ShowCreateWithoutVenueInput {
  name: String;
  description?: String;
  startTime: DateTime;
  checkoutUrl: String;
  price?: Float;
  soldOut?: Boolean;
  stubsiteId?: Int;
  cellarId?: Int;
  ticketmasterId?: String;
  comedians?: ComedianCreateManyWithoutShowsInput;
}

export interface VenueUpsertWithoutShowsInput {
  update: VenueUpdateWithoutShowsDataInput;
  create: VenueCreateWithoutShowsInput;
}

export interface ShowSubscriptionWhereInput {
  AND?: ShowSubscriptionWhereInput[] | ShowSubscriptionWhereInput;
  OR?: ShowSubscriptionWhereInput[] | ShowSubscriptionWhereInput;
  NOT?: ShowSubscriptionWhereInput[] | ShowSubscriptionWhereInput;
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ShowWhereInput;
}

export interface VenueUpdateWithoutShowsDataInput {
  name?: String;
  slug?: String;
  description?: String;
  url?: String;
  stubsiteId?: Int;
  ticketmasterId?: String;
  lineOne?: String;
  lineTwo?: String;
  zip?: Int;
  city?: String;
  state?: String;
  latitude?: Float;
  longitude?: Float;
  scraper?: ScraperType;
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PostWhereInput;
}

export interface PostCreateInput {
  isPublished?: Boolean;
  title: String;
  text: String;
}

export interface ComedianWhereUniqueInput {
  id?: ID_Input;
  slug?: String;
  stubsiteId?: Int;
  ticketmasterId?: String;
}

export interface ComedianCreateInput {
  slug: String;
  name: String;
  website?: String;
  imageUrl?: String;
  stubsiteId?: Int;
  ticketmasterId?: String;
  shows?: ShowCreateManyWithoutComediansInput;
}

export interface VenueWhereUniqueInput {
  id?: ID_Input;
  slug?: String;
  stubsiteId?: Int;
  ticketmasterId?: String;
}

export interface ShowCreateManyWithoutComediansInput {
  create?: ShowCreateWithoutComediansInput[] | ShowCreateWithoutComediansInput;
  connect?: ShowWhereUniqueInput[] | ShowWhereUniqueInput;
}

export interface ShowUpdateWithoutVenueDataInput {
  name?: String;
  description?: String;
  startTime?: DateTime;
  checkoutUrl?: String;
  price?: Float;
  soldOut?: Boolean;
  stubsiteId?: Int;
  cellarId?: Int;
  ticketmasterId?: String;
  comedians?: ComedianUpdateManyWithoutShowsInput;
}

export interface ShowCreateWithoutComediansInput {
  name: String;
  description?: String;
  startTime: DateTime;
  checkoutUrl: String;
  price?: Float;
  soldOut?: Boolean;
  stubsiteId?: Int;
  cellarId?: Int;
  ticketmasterId?: String;
  venue: VenueCreateOneWithoutShowsInput;
}

export interface ShowUpdateManyWithoutVenueInput {
  create?: ShowCreateWithoutVenueInput[] | ShowCreateWithoutVenueInput;
  connect?: ShowWhereUniqueInput[] | ShowWhereUniqueInput;
  disconnect?: ShowWhereUniqueInput[] | ShowWhereUniqueInput;
  delete?: ShowWhereUniqueInput[] | ShowWhereUniqueInput;
  update?:
    | ShowUpdateWithWhereUniqueWithoutVenueInput[]
    | ShowUpdateWithWhereUniqueWithoutVenueInput;
  upsert?:
    | ShowUpsertWithWhereUniqueWithoutVenueInput[]
    | ShowUpsertWithWhereUniqueWithoutVenueInput;
}

export interface VenueUpdateOneWithoutShowsInput {
  create?: VenueCreateWithoutShowsInput;
  connect?: VenueWhereUniqueInput;
  delete?: Boolean;
  update?: VenueUpdateWithoutShowsDataInput;
  upsert?: VenueUpsertWithoutShowsInput;
}

export interface ComedianUpsertWithWhereUniqueWithoutShowsInput {
  where: ComedianWhereUniqueInput;
  update: ComedianUpdateWithoutShowsDataInput;
  create: ComedianCreateWithoutShowsInput;
}

export interface VenueCreateWithoutShowsInput {
  name: String;
  slug: String;
  description?: String;
  url: String;
  stubsiteId?: Int;
  ticketmasterId?: String;
  lineOne: String;
  lineTwo?: String;
  zip: Int;
  city: String;
  state: String;
  latitude: Float;
  longitude: Float;
  scraper: ScraperType;
}

export interface ComedianUpdateWithWhereUniqueWithoutShowsInput {
  where: ComedianWhereUniqueInput;
  data: ComedianUpdateWithoutShowsDataInput;
}

export interface ShowCreateInput {
  name: String;
  description?: String;
  startTime: DateTime;
  checkoutUrl: String;
  price?: Float;
  soldOut?: Boolean;
  stubsiteId?: Int;
  cellarId?: Int;
  ticketmasterId?: String;
  comedians?: ComedianCreateManyWithoutShowsInput;
  venue: VenueCreateOneWithoutShowsInput;
}

export interface VenueSubscriptionWhereInput {
  AND?: VenueSubscriptionWhereInput[] | VenueSubscriptionWhereInput;
  OR?: VenueSubscriptionWhereInput[] | VenueSubscriptionWhereInput;
  NOT?: VenueSubscriptionWhereInput[] | VenueSubscriptionWhereInput;
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: VenueWhereInput;
}

export interface ComedianCreateManyWithoutShowsInput {
  create?: ComedianCreateWithoutShowsInput[] | ComedianCreateWithoutShowsInput;
  connect?: ComedianWhereUniqueInput[] | ComedianWhereUniqueInput;
}

export interface PostWhereUniqueInput {
  id?: ID_Input;
}

export interface ShowUpdateWithoutComediansDataInput {
  name?: String;
  description?: String;
  startTime?: DateTime;
  checkoutUrl?: String;
  price?: Float;
  soldOut?: Boolean;
  stubsiteId?: Int;
  cellarId?: Int;
  ticketmasterId?: String;
  venue?: VenueUpdateOneWithoutShowsInput;
}

export interface ShowUpsertWithWhereUniqueWithoutVenueInput {
  where: ShowWhereUniqueInput;
  update: ShowUpdateWithoutVenueDataInput;
  create: ShowCreateWithoutVenueInput;
}

export interface VenueUpdateInput {
  name?: String;
  slug?: String;
  description?: String;
  url?: String;
  stubsiteId?: Int;
  ticketmasterId?: String;
  lineOne?: String;
  lineTwo?: String;
  zip?: Int;
  city?: String;
  state?: String;
  latitude?: Float;
  longitude?: Float;
  scraper?: ScraperType;
  shows?: ShowUpdateManyWithoutVenueInput;
}

export interface PostUpdateInput {
  isPublished?: Boolean;
  title?: String;
  text?: String;
}

export interface ShowUpdateManyWithoutComediansInput {
  create?: ShowCreateWithoutComediansInput[] | ShowCreateWithoutComediansInput;
  connect?: ShowWhereUniqueInput[] | ShowWhereUniqueInput;
  disconnect?: ShowWhereUniqueInput[] | ShowWhereUniqueInput;
  delete?: ShowWhereUniqueInput[] | ShowWhereUniqueInput;
  update?:
    | ShowUpdateWithWhereUniqueWithoutComediansInput[]
    | ShowUpdateWithWhereUniqueWithoutComediansInput;
  upsert?:
    | ShowUpsertWithWhereUniqueWithoutComediansInput[]
    | ShowUpsertWithWhereUniqueWithoutComediansInput;
}

export interface ShowUpdateWithWhereUniqueWithoutComediansInput {
  where: ShowWhereUniqueInput;
  data: ShowUpdateWithoutComediansDataInput;
}

export interface ComedianUpdateWithoutShowsDataInput {
  slug?: String;
  name?: String;
  website?: String;
  imageUrl?: String;
  stubsiteId?: Int;
  ticketmasterId?: String;
}

export interface ShowUpdateWithWhereUniqueWithoutVenueInput {
  where: ShowWhereUniqueInput;
  data: ShowUpdateWithoutVenueDataInput;
}

export interface ShowWhereUniqueInput {
  id?: ID_Input;
  stubsiteId?: Int;
  cellarId?: Int;
  ticketmasterId?: String;
}

export interface ComedianSubscriptionWhereInput {
  AND?: ComedianSubscriptionWhereInput[] | ComedianSubscriptionWhereInput;
  OR?: ComedianSubscriptionWhereInput[] | ComedianSubscriptionWhereInput;
  NOT?: ComedianSubscriptionWhereInput[] | ComedianSubscriptionWhereInput;
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ComedianWhereInput;
}

export interface ComedianUpdateManyWithoutShowsInput {
  create?: ComedianCreateWithoutShowsInput[] | ComedianCreateWithoutShowsInput;
  connect?: ComedianWhereUniqueInput[] | ComedianWhereUniqueInput;
  disconnect?: ComedianWhereUniqueInput[] | ComedianWhereUniqueInput;
  delete?: ComedianWhereUniqueInput[] | ComedianWhereUniqueInput;
  update?:
    | ComedianUpdateWithWhereUniqueWithoutShowsInput[]
    | ComedianUpdateWithWhereUniqueWithoutShowsInput;
  upsert?:
    | ComedianUpsertWithWhereUniqueWithoutShowsInput[]
    | ComedianUpsertWithWhereUniqueWithoutShowsInput;
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output;
}

export interface VenuePreviousValues {
  id: ID_Output;
  name: String;
  slug: String;
  description?: String;
  url: String;
  stubsiteId?: Int;
  ticketmasterId?: String;
  lineOne: String;
  lineTwo?: String;
  zip: Int;
  city: String;
  state: String;
  latitude: Float;
  longitude: Float;
  scraper: ScraperType;
  createdAt: DateTime;
  updatedAt: DateTime;
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo;
  edges: PostEdge[];
  aggregate: AggregatePost;
}

export interface Post extends Node {
  id: ID_Output;
  isPublished: Boolean;
  title: String;
  text: String;
}

export interface BatchPayload {
  count: Long;
}

export interface Comedian extends Node {
  id: ID_Output;
  slug: String;
  name: String;
  website?: String;
  imageUrl?: String;
  stubsiteId?: Int;
  ticketmasterId?: String;
  shows?: Show[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface ComedianPreviousValues {
  id: ID_Output;
  slug: String;
  name: String;
  website?: String;
  imageUrl?: String;
  stubsiteId?: Int;
  ticketmasterId?: String;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface VenueSubscriptionPayload {
  mutation: MutationType;
  node?: Venue;
  updatedFields?: String[];
  previousValues?: VenuePreviousValues;
}

export interface AggregateVenue {
  count: Int;
}

export interface ShowPreviousValues {
  id: ID_Output;
  name: String;
  description?: String;
  startTime: DateTime;
  checkoutUrl: String;
  price?: Float;
  soldOut?: Boolean;
  stubsiteId?: Int;
  cellarId?: Int;
  ticketmasterId?: String;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface AggregateShow {
  count: Int;
}

/*
 * An edge in a connection.

 */
export interface VenueEdge {
  node: Venue;
  cursor: String;
}

/*
 * A connection to a list of items.

 */
export interface ShowConnection {
  pageInfo: PageInfo;
  edges: ShowEdge[];
  aggregate: AggregateShow;
}

export interface ShowSubscriptionPayload {
  mutation: MutationType;
  node?: Show;
  updatedFields?: String[];
  previousValues?: ShowPreviousValues;
}

/*
 * An edge in a connection.

 */
export interface ComedianEdge {
  node: Comedian;
  cursor: String;
}

export interface Show extends Node {
  id: ID_Output;
  name: String;
  comedians?: Comedian[];
  description?: String;
  startTime: DateTime;
  checkoutUrl: String;
  venue: Venue;
  price?: Float;
  soldOut?: Boolean;
  stubsiteId?: Int;
  cellarId?: Int;
  ticketmasterId?: String;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface AggregatePost {
  count: Int;
}

/*
 * A connection to a list of items.

 */
export interface VenueConnection {
  pageInfo: PageInfo;
  edges: VenueEdge[];
  aggregate: AggregateVenue;
}

export interface ComedianSubscriptionPayload {
  mutation: MutationType;
  node?: Comedian;
  updatedFields?: String[];
  previousValues?: ComedianPreviousValues;
}

export interface Venue extends Node {
  id: ID_Output;
  name: String;
  slug: String;
  description?: String;
  url: String;
  stubsiteId?: Int;
  ticketmasterId?: String;
  shows?: Show[];
  lineOne: String;
  lineTwo?: String;
  zip: Int;
  city: String;
  state: String;
  latitude: Float;
  longitude: Float;
  scraper: ScraperType;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface PostPreviousValues {
  id: ID_Output;
  isPublished: Boolean;
  title: String;
  text: String;
}

export interface PostSubscriptionPayload {
  mutation: MutationType;
  node?: Post;
  updatedFields?: String[];
  previousValues?: PostPreviousValues;
}

/*
 * An edge in a connection.

 */
export interface ShowEdge {
  node: Show;
  cursor: String;
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post;
  cursor: String;
}

/*
 * A connection to a list of items.

 */
export interface ComedianConnection {
  pageInfo: PageInfo;
  edges: ComedianEdge[];
  aggregate: AggregateComedian;
}

export interface AggregateComedian {
  count: Int;
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string;

export type DateTime = Date | string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

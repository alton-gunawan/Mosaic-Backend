/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Duration } from "./google/protobuf/duration";
import { Empty } from "./google/protobuf/empty";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "packages.project";

export interface Datestamps {
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  featuredImage: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  projectBuffer: Duration | undefined;
  feedingBuffer?: Duration | undefined;
  createdBy: string;
  datestamps: Datestamps | undefined;
}

export interface ListProjectsRequest {
  id?: number | undefined;
  createdBy?: string | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
}

export interface CreateProjectRequest {
  name: string;
  description: string;
  featuredImage: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  projectBuffer: Duration | undefined;
  feedingBuffer?: Duration | undefined;
  createdBy: string;
}

export interface UpdateProjectRequest {
  id: number;
  name?: string | undefined;
  description?: string | undefined;
  featuredImage?: string | undefined;
  startDate?: Date | undefined;
  endDate?: Date | undefined;
  projectBuffer?: Duration | undefined;
  feedingBuffer?: Duration | undefined;
}

export interface DeleteProjectRequest {
  id: number;
}

export interface AddMemberRequest {
  projectId: number;
  userId: string;
}

export interface RemoveMemberRequest {
  projectId: number;
  userId: string;
}

export interface ProjectsList {
  data: Project[];
}

export interface ErrorResponse {
  statusCode: number;
  message: string;
}

export interface ProjectResponse {
  data?: ProjectsList | undefined;
  error?: ErrorResponse | undefined;
}

function createBaseDatestamps(): Datestamps {
  return { createdAt: undefined, updatedAt: undefined, deletedAt: undefined };
}

export const Datestamps = {
  encode(message: Datestamps, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(10).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(18).fork()).ldelim();
    }
    if (message.deletedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.deletedAt), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Datestamps {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatestamps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.deletedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Datestamps {
    return {
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
      deletedAt: isSet(object.deletedAt) ? fromJsonTimestamp(object.deletedAt) : undefined,
    };
  },

  toJSON(message: Datestamps): unknown {
    const obj: any = {};
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    if (message.deletedAt !== undefined) {
      obj.deletedAt = message.deletedAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Datestamps>, I>>(base?: I): Datestamps {
    return Datestamps.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Datestamps>, I>>(object: I): Datestamps {
    const message = createBaseDatestamps();
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.deletedAt = object.deletedAt ?? undefined;
    return message;
  },
};

function createBaseProject(): Project {
  return {
    id: 0,
    name: "",
    description: "",
    featuredImage: "",
    startDate: undefined,
    endDate: undefined,
    projectBuffer: undefined,
    feedingBuffer: undefined,
    createdBy: "",
    datestamps: undefined,
  };
}

export const Project = {
  encode(message: Project, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.featuredImage !== "") {
      writer.uint32(34).string(message.featuredImage);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(42).fork()).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(toTimestamp(message.endDate), writer.uint32(50).fork()).ldelim();
    }
    if (message.projectBuffer !== undefined) {
      Duration.encode(message.projectBuffer, writer.uint32(58).fork()).ldelim();
    }
    if (message.feedingBuffer !== undefined) {
      Duration.encode(message.feedingBuffer, writer.uint32(66).fork()).ldelim();
    }
    if (message.createdBy !== "") {
      writer.uint32(74).string(message.createdBy);
    }
    if (message.datestamps !== undefined) {
      Datestamps.encode(message.datestamps, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Project {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.featuredImage = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.projectBuffer = Duration.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.feedingBuffer = Duration.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.createdBy = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.datestamps = Datestamps.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Project {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      featuredImage: isSet(object.featuredImage) ? globalThis.String(object.featuredImage) : "",
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      projectBuffer: isSet(object.projectBuffer) ? Duration.fromJSON(object.projectBuffer) : undefined,
      feedingBuffer: isSet(object.feedingBuffer) ? Duration.fromJSON(object.feedingBuffer) : undefined,
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : "",
      datestamps: isSet(object.datestamps) ? Datestamps.fromJSON(object.datestamps) : undefined,
    };
  },

  toJSON(message: Project): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.featuredImage !== "") {
      obj.featuredImage = message.featuredImage;
    }
    if (message.startDate !== undefined) {
      obj.startDate = message.startDate.toISOString();
    }
    if (message.endDate !== undefined) {
      obj.endDate = message.endDate.toISOString();
    }
    if (message.projectBuffer !== undefined) {
      obj.projectBuffer = Duration.toJSON(message.projectBuffer);
    }
    if (message.feedingBuffer !== undefined) {
      obj.feedingBuffer = Duration.toJSON(message.feedingBuffer);
    }
    if (message.createdBy !== "") {
      obj.createdBy = message.createdBy;
    }
    if (message.datestamps !== undefined) {
      obj.datestamps = Datestamps.toJSON(message.datestamps);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Project>, I>>(base?: I): Project {
    return Project.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Project>, I>>(object: I): Project {
    const message = createBaseProject();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.featuredImage = object.featuredImage ?? "";
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.projectBuffer = (object.projectBuffer !== undefined && object.projectBuffer !== null)
      ? Duration.fromPartial(object.projectBuffer)
      : undefined;
    message.feedingBuffer = (object.feedingBuffer !== undefined && object.feedingBuffer !== null)
      ? Duration.fromPartial(object.feedingBuffer)
      : undefined;
    message.createdBy = object.createdBy ?? "";
    message.datestamps = (object.datestamps !== undefined && object.datestamps !== null)
      ? Datestamps.fromPartial(object.datestamps)
      : undefined;
    return message;
  },
};

function createBaseListProjectsRequest(): ListProjectsRequest {
  return { id: undefined, createdBy: undefined, limit: undefined, offset: undefined };
}

export const ListProjectsRequest = {
  encode(message: ListProjectsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.createdBy !== undefined) {
      writer.uint32(18).string(message.createdBy);
    }
    if (message.limit !== undefined) {
      writer.uint32(24).uint32(message.limit);
    }
    if (message.offset !== undefined) {
      writer.uint32(32).uint32(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProjectsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createdBy = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.limit = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.offset = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListProjectsRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : undefined,
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : undefined,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : undefined,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : undefined,
    };
  },

  toJSON(message: ListProjectsRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = Math.round(message.id);
    }
    if (message.createdBy !== undefined) {
      obj.createdBy = message.createdBy;
    }
    if (message.limit !== undefined) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== undefined) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListProjectsRequest>, I>>(base?: I): ListProjectsRequest {
    return ListProjectsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListProjectsRequest>, I>>(object: I): ListProjectsRequest {
    const message = createBaseListProjectsRequest();
    message.id = object.id ?? undefined;
    message.createdBy = object.createdBy ?? undefined;
    message.limit = object.limit ?? undefined;
    message.offset = object.offset ?? undefined;
    return message;
  },
};

function createBaseCreateProjectRequest(): CreateProjectRequest {
  return {
    name: "",
    description: "",
    featuredImage: "",
    startDate: undefined,
    endDate: undefined,
    projectBuffer: undefined,
    feedingBuffer: undefined,
    createdBy: "",
  };
}

export const CreateProjectRequest = {
  encode(message: CreateProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.featuredImage !== "") {
      writer.uint32(26).string(message.featuredImage);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(34).fork()).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(toTimestamp(message.endDate), writer.uint32(42).fork()).ldelim();
    }
    if (message.projectBuffer !== undefined) {
      Duration.encode(message.projectBuffer, writer.uint32(50).fork()).ldelim();
    }
    if (message.feedingBuffer !== undefined) {
      Duration.encode(message.feedingBuffer, writer.uint32(58).fork()).ldelim();
    }
    if (message.createdBy !== "") {
      writer.uint32(66).string(message.createdBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.featuredImage = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.projectBuffer = Duration.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.feedingBuffer = Duration.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.createdBy = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProjectRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      featuredImage: isSet(object.featuredImage) ? globalThis.String(object.featuredImage) : "",
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      projectBuffer: isSet(object.projectBuffer) ? Duration.fromJSON(object.projectBuffer) : undefined,
      feedingBuffer: isSet(object.feedingBuffer) ? Duration.fromJSON(object.feedingBuffer) : undefined,
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : "",
    };
  },

  toJSON(message: CreateProjectRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.featuredImage !== "") {
      obj.featuredImage = message.featuredImage;
    }
    if (message.startDate !== undefined) {
      obj.startDate = message.startDate.toISOString();
    }
    if (message.endDate !== undefined) {
      obj.endDate = message.endDate.toISOString();
    }
    if (message.projectBuffer !== undefined) {
      obj.projectBuffer = Duration.toJSON(message.projectBuffer);
    }
    if (message.feedingBuffer !== undefined) {
      obj.feedingBuffer = Duration.toJSON(message.feedingBuffer);
    }
    if (message.createdBy !== "") {
      obj.createdBy = message.createdBy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProjectRequest>, I>>(base?: I): CreateProjectRequest {
    return CreateProjectRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProjectRequest>, I>>(object: I): CreateProjectRequest {
    const message = createBaseCreateProjectRequest();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.featuredImage = object.featuredImage ?? "";
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.projectBuffer = (object.projectBuffer !== undefined && object.projectBuffer !== null)
      ? Duration.fromPartial(object.projectBuffer)
      : undefined;
    message.feedingBuffer = (object.feedingBuffer !== undefined && object.feedingBuffer !== null)
      ? Duration.fromPartial(object.feedingBuffer)
      : undefined;
    message.createdBy = object.createdBy ?? "";
    return message;
  },
};

function createBaseUpdateProjectRequest(): UpdateProjectRequest {
  return {
    id: 0,
    name: undefined,
    description: undefined,
    featuredImage: undefined,
    startDate: undefined,
    endDate: undefined,
    projectBuffer: undefined,
    feedingBuffer: undefined,
  };
}

export const UpdateProjectRequest = {
  encode(message: UpdateProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.featuredImage !== undefined) {
      writer.uint32(34).string(message.featuredImage);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(42).fork()).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(toTimestamp(message.endDate), writer.uint32(50).fork()).ldelim();
    }
    if (message.projectBuffer !== undefined) {
      Duration.encode(message.projectBuffer, writer.uint32(58).fork()).ldelim();
    }
    if (message.feedingBuffer !== undefined) {
      Duration.encode(message.feedingBuffer, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.featuredImage = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.projectBuffer = Duration.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.feedingBuffer = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateProjectRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
      featuredImage: isSet(object.featuredImage) ? globalThis.String(object.featuredImage) : undefined,
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      projectBuffer: isSet(object.projectBuffer) ? Duration.fromJSON(object.projectBuffer) : undefined,
      feedingBuffer: isSet(object.feedingBuffer) ? Duration.fromJSON(object.feedingBuffer) : undefined,
    };
  },

  toJSON(message: UpdateProjectRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.featuredImage !== undefined) {
      obj.featuredImage = message.featuredImage;
    }
    if (message.startDate !== undefined) {
      obj.startDate = message.startDate.toISOString();
    }
    if (message.endDate !== undefined) {
      obj.endDate = message.endDate.toISOString();
    }
    if (message.projectBuffer !== undefined) {
      obj.projectBuffer = Duration.toJSON(message.projectBuffer);
    }
    if (message.feedingBuffer !== undefined) {
      obj.feedingBuffer = Duration.toJSON(message.feedingBuffer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateProjectRequest>, I>>(base?: I): UpdateProjectRequest {
    return UpdateProjectRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateProjectRequest>, I>>(object: I): UpdateProjectRequest {
    const message = createBaseUpdateProjectRequest();
    message.id = object.id ?? 0;
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.featuredImage = object.featuredImage ?? undefined;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.projectBuffer = (object.projectBuffer !== undefined && object.projectBuffer !== null)
      ? Duration.fromPartial(object.projectBuffer)
      : undefined;
    message.feedingBuffer = (object.feedingBuffer !== undefined && object.feedingBuffer !== null)
      ? Duration.fromPartial(object.feedingBuffer)
      : undefined;
    return message;
  },
};

function createBaseDeleteProjectRequest(): DeleteProjectRequest {
  return { id: 0 };
}

export const DeleteProjectRequest = {
  encode(message: DeleteProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProjectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteProjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteProjectRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: DeleteProjectRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteProjectRequest>, I>>(base?: I): DeleteProjectRequest {
    return DeleteProjectRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteProjectRequest>, I>>(object: I): DeleteProjectRequest {
    const message = createBaseDeleteProjectRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseAddMemberRequest(): AddMemberRequest {
  return { projectId: 0, userId: "" };
}

export const AddMemberRequest = {
  encode(message: AddMemberRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).uint32(message.projectId);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddMemberRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.projectId = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddMemberRequest {
    return {
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : 0,
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
    };
  },

  toJSON(message: AddMemberRequest): unknown {
    const obj: any = {};
    if (message.projectId !== 0) {
      obj.projectId = Math.round(message.projectId);
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddMemberRequest>, I>>(base?: I): AddMemberRequest {
    return AddMemberRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddMemberRequest>, I>>(object: I): AddMemberRequest {
    const message = createBaseAddMemberRequest();
    message.projectId = object.projectId ?? 0;
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseRemoveMemberRequest(): RemoveMemberRequest {
  return { projectId: 0, userId: "" };
}

export const RemoveMemberRequest = {
  encode(message: RemoveMemberRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).uint32(message.projectId);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMemberRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.projectId = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveMemberRequest {
    return {
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : 0,
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
    };
  },

  toJSON(message: RemoveMemberRequest): unknown {
    const obj: any = {};
    if (message.projectId !== 0) {
      obj.projectId = Math.round(message.projectId);
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveMemberRequest>, I>>(base?: I): RemoveMemberRequest {
    return RemoveMemberRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveMemberRequest>, I>>(object: I): RemoveMemberRequest {
    const message = createBaseRemoveMemberRequest();
    message.projectId = object.projectId ?? 0;
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseProjectsList(): ProjectsList {
  return { data: [] };
}

export const ProjectsList = {
  encode(message: ProjectsList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      Project.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectsList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectsList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data.push(Project.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectsList {
    return { data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => Project.fromJSON(e)) : [] };
  },

  toJSON(message: ProjectsList): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data.map((e) => Project.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectsList>, I>>(base?: I): ProjectsList {
    return ProjectsList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectsList>, I>>(object: I): ProjectsList {
    const message = createBaseProjectsList();
    message.data = object.data?.map((e) => Project.fromPartial(e)) || [];
    return message;
  },
};

function createBaseErrorResponse(): ErrorResponse {
  return { statusCode: 0, message: "" };
}

export const ErrorResponse = {
  encode(message: ErrorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusCode !== 0) {
      writer.uint32(8).uint32(message.statusCode);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.statusCode = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ErrorResponse {
    return {
      statusCode: isSet(object.statusCode) ? globalThis.Number(object.statusCode) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: ErrorResponse): unknown {
    const obj: any = {};
    if (message.statusCode !== 0) {
      obj.statusCode = Math.round(message.statusCode);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ErrorResponse>, I>>(base?: I): ErrorResponse {
    return ErrorResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ErrorResponse>, I>>(object: I): ErrorResponse {
    const message = createBaseErrorResponse();
    message.statusCode = object.statusCode ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseProjectResponse(): ProjectResponse {
  return { data: undefined, error: undefined };
}

export const ProjectResponse = {
  encode(message: ProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      ProjectsList.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      ErrorResponse.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = ProjectsList.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = ErrorResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectResponse {
    return {
      data: isSet(object.data) ? ProjectsList.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? ErrorResponse.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ProjectResponse): unknown {
    const obj: any = {};
    if (message.data !== undefined) {
      obj.data = ProjectsList.toJSON(message.data);
    }
    if (message.error !== undefined) {
      obj.error = ErrorResponse.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectResponse>, I>>(base?: I): ProjectResponse {
    return ProjectResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectResponse>, I>>(object: I): ProjectResponse {
    const message = createBaseProjectResponse();
    message.data = (object.data !== undefined && object.data !== null)
      ? ProjectsList.fromPartial(object.data)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? ErrorResponse.fromPartial(object.error)
      : undefined;
    return message;
  },
};

export interface ProjectsService {
  ListProjects(request: ListProjectsRequest): Promise<ProjectResponse>;
  CreateProject(request: CreateProjectRequest): Promise<ProjectResponse>;
  UpdateProject(request: UpdateProjectRequest): Promise<ProjectResponse>;
  DeleteProject(request: DeleteProjectRequest): Promise<Empty>;
  AddMember(request: AddMemberRequest): Promise<ProjectResponse>;
  RemoveMember(request: RemoveMemberRequest): Promise<Empty>;
}

export const ProjectsServiceServiceName = "packages.project.ProjectsService";
export class ProjectsServiceClientImpl implements ProjectsService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ProjectsServiceServiceName;
    this.rpc = rpc;
    this.ListProjects = this.ListProjects.bind(this);
    this.CreateProject = this.CreateProject.bind(this);
    this.UpdateProject = this.UpdateProject.bind(this);
    this.DeleteProject = this.DeleteProject.bind(this);
    this.AddMember = this.AddMember.bind(this);
    this.RemoveMember = this.RemoveMember.bind(this);
  }
  ListProjects(request: ListProjectsRequest): Promise<ProjectResponse> {
    const data = ListProjectsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListProjects", data);
    return promise.then((data) => ProjectResponse.decode(_m0.Reader.create(data)));
  }

  CreateProject(request: CreateProjectRequest): Promise<ProjectResponse> {
    const data = CreateProjectRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateProject", data);
    return promise.then((data) => ProjectResponse.decode(_m0.Reader.create(data)));
  }

  UpdateProject(request: UpdateProjectRequest): Promise<ProjectResponse> {
    const data = UpdateProjectRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateProject", data);
    return promise.then((data) => ProjectResponse.decode(_m0.Reader.create(data)));
  }

  DeleteProject(request: DeleteProjectRequest): Promise<Empty> {
    const data = DeleteProjectRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteProject", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }

  AddMember(request: AddMemberRequest): Promise<ProjectResponse> {
    const data = AddMemberRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddMember", data);
    return promise.then((data) => ProjectResponse.decode(_m0.Reader.create(data)));
  }

  RemoveMember(request: RemoveMemberRequest): Promise<Empty> {
    const data = RemoveMemberRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveMember", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

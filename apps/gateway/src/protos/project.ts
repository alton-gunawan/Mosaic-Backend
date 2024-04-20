/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import Long = require("long");

export const protobufPackage = "project";

export interface PaginationDto {
  page: number;
  skip: number;
}

export interface Empty {
}

export interface Project {
  id?: number | undefined;
  name: string;
  description: string;
  startDate: number;
  endDate: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface Projects {
  projects: Project[];
}

export interface FindOneProjectDto {
  id: number;
}

export interface CreateProjectDto {
  name?: string | undefined;
  description?: string | undefined;
  startDate?: number | undefined;
  endDate?: number | undefined;
  createdBy?: string | undefined;
}

export interface UpdateProjectDto {
  id?: number | undefined;
  name?: string | undefined;
  description?: string | undefined;
  startDate?: number | undefined;
  endDate?: number | undefined;
  createdBy?: string | undefined;
}

export interface RemoveProjectDto {
  id: number;
}

export interface Response {
  statusCode: number;
  message: string;
}

export interface ProjectResponse {
  statusCode: number;
  message: string;
  data: Project | undefined;
}

export interface ProjectsResponse {
  statusCode?: number | undefined;
  message?: string | undefined;
  data: Project[];
}

function createBasePaginationDto(): PaginationDto {
  return { page: 0, skip: 0 };
}

export const PaginationDto = {
  encode(message: PaginationDto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== 0) {
      writer.uint32(8).int32(message.page);
    }
    if (message.skip !== 0) {
      writer.uint32(16).int32(message.skip);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaginationDto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaginationDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.page = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.skip = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaginationDto {
    return {
      page: isSet(object.page) ? globalThis.Number(object.page) : 0,
      skip: isSet(object.skip) ? globalThis.Number(object.skip) : 0,
    };
  },

  toJSON(message: PaginationDto): unknown {
    const obj: any = {};
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.skip !== 0) {
      obj.skip = Math.round(message.skip);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PaginationDto>, I>>(base?: I): PaginationDto {
    return PaginationDto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PaginationDto>, I>>(object: I): PaginationDto {
    const message = createBasePaginationDto();
    message.page = object.page ?? 0;
    message.skip = object.skip ?? 0;
    return message;
  },
};

function createBaseEmpty(): Empty {
  return {};
}

export const Empty = {
  encode(_: Empty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Empty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmpty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Empty {
    return {};
  },

  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Empty>, I>>(base?: I): Empty {
    return Empty.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Empty>, I>>(_: I): Empty {
    const message = createBaseEmpty();
    return message;
  },
};

function createBaseProject(): Project {
  return {
    id: undefined,
    name: "",
    description: "",
    startDate: 0,
    endDate: 0,
    createdBy: "",
    createdAt: "",
    updatedAt: "",
    deletedAt: "",
  };
}

export const Project = {
  encode(message: Project, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.startDate !== 0) {
      writer.uint32(32).int64(message.startDate);
    }
    if (message.endDate !== 0) {
      writer.uint32(40).int64(message.endDate);
    }
    if (message.createdBy !== "") {
      writer.uint32(50).string(message.createdBy);
    }
    if (message.createdAt !== "") {
      writer.uint32(58).string(message.createdAt);
    }
    if (message.updatedAt !== "") {
      writer.uint32(66).string(message.updatedAt);
    }
    if (message.deletedAt !== "") {
      writer.uint32(74).string(message.deletedAt);
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

          message.id = reader.int32();
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
          if (tag !== 32) {
            break;
          }

          message.startDate = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.endDate = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createdBy = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.updatedAt = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.deletedAt = reader.string();
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
      id: isSet(object.id) ? globalThis.Number(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      startDate: isSet(object.startDate) ? globalThis.Number(object.startDate) : 0,
      endDate: isSet(object.endDate) ? globalThis.Number(object.endDate) : 0,
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : "",
      createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
      updatedAt: isSet(object.updatedAt) ? globalThis.String(object.updatedAt) : "",
      deletedAt: isSet(object.deletedAt) ? globalThis.String(object.deletedAt) : "",
    };
  },

  toJSON(message: Project): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.startDate !== 0) {
      obj.startDate = Math.round(message.startDate);
    }
    if (message.endDate !== 0) {
      obj.endDate = Math.round(message.endDate);
    }
    if (message.createdBy !== "") {
      obj.createdBy = message.createdBy;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.updatedAt !== "") {
      obj.updatedAt = message.updatedAt;
    }
    if (message.deletedAt !== "") {
      obj.deletedAt = message.deletedAt;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Project>, I>>(base?: I): Project {
    return Project.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Project>, I>>(object: I): Project {
    const message = createBaseProject();
    message.id = object.id ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.startDate = object.startDate ?? 0;
    message.endDate = object.endDate ?? 0;
    message.createdBy = object.createdBy ?? "";
    message.createdAt = object.createdAt ?? "";
    message.updatedAt = object.updatedAt ?? "";
    message.deletedAt = object.deletedAt ?? "";
    return message;
  },
};

function createBaseProjects(): Projects {
  return { projects: [] };
}

export const Projects = {
  encode(message: Projects, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.projects) {
      Project.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Projects {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjects();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projects.push(Project.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Projects {
    return {
      projects: globalThis.Array.isArray(object?.projects) ? object.projects.map((e: any) => Project.fromJSON(e)) : [],
    };
  },

  toJSON(message: Projects): unknown {
    const obj: any = {};
    if (message.projects?.length) {
      obj.projects = message.projects.map((e) => Project.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Projects>, I>>(base?: I): Projects {
    return Projects.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Projects>, I>>(object: I): Projects {
    const message = createBaseProjects();
    message.projects = object.projects?.map((e) => Project.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFindOneProjectDto(): FindOneProjectDto {
  return { id: 0 };
}

export const FindOneProjectDto = {
  encode(message: FindOneProjectDto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindOneProjectDto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindOneProjectDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindOneProjectDto {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: FindOneProjectDto): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindOneProjectDto>, I>>(base?: I): FindOneProjectDto {
    return FindOneProjectDto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindOneProjectDto>, I>>(object: I): FindOneProjectDto {
    const message = createBaseFindOneProjectDto();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseCreateProjectDto(): CreateProjectDto {
  return { name: undefined, description: undefined, startDate: undefined, endDate: undefined, createdBy: undefined };
}

export const CreateProjectDto = {
  encode(message: CreateProjectDto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    if (message.startDate !== undefined) {
      writer.uint32(24).int64(message.startDate);
    }
    if (message.endDate !== undefined) {
      writer.uint32(32).int64(message.endDate);
    }
    if (message.createdBy !== undefined) {
      writer.uint32(42).string(message.createdBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectDto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectDto();
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
          if (tag !== 24) {
            break;
          }

          message.startDate = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.endDate = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): CreateProjectDto {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
      startDate: isSet(object.startDate) ? globalThis.Number(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? globalThis.Number(object.endDate) : undefined,
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : undefined,
    };
  },

  toJSON(message: CreateProjectDto): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.startDate !== undefined) {
      obj.startDate = Math.round(message.startDate);
    }
    if (message.endDate !== undefined) {
      obj.endDate = Math.round(message.endDate);
    }
    if (message.createdBy !== undefined) {
      obj.createdBy = message.createdBy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProjectDto>, I>>(base?: I): CreateProjectDto {
    return CreateProjectDto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProjectDto>, I>>(object: I): CreateProjectDto {
    const message = createBaseCreateProjectDto();
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.createdBy = object.createdBy ?? undefined;
    return message;
  },
};

function createBaseUpdateProjectDto(): UpdateProjectDto {
  return {
    id: undefined,
    name: undefined,
    description: undefined,
    startDate: undefined,
    endDate: undefined,
    createdBy: undefined,
  };
}

export const UpdateProjectDto = {
  encode(message: UpdateProjectDto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.startDate !== undefined) {
      writer.uint32(32).int64(message.startDate);
    }
    if (message.endDate !== undefined) {
      writer.uint32(40).int64(message.endDate);
    }
    if (message.createdBy !== undefined) {
      writer.uint32(50).string(message.createdBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectDto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProjectDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
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
          if (tag !== 32) {
            break;
          }

          message.startDate = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.endDate = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): UpdateProjectDto {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
      startDate: isSet(object.startDate) ? globalThis.Number(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? globalThis.Number(object.endDate) : undefined,
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : undefined,
    };
  },

  toJSON(message: UpdateProjectDto): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.startDate !== undefined) {
      obj.startDate = Math.round(message.startDate);
    }
    if (message.endDate !== undefined) {
      obj.endDate = Math.round(message.endDate);
    }
    if (message.createdBy !== undefined) {
      obj.createdBy = message.createdBy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateProjectDto>, I>>(base?: I): UpdateProjectDto {
    return UpdateProjectDto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateProjectDto>, I>>(object: I): UpdateProjectDto {
    const message = createBaseUpdateProjectDto();
    message.id = object.id ?? undefined;
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.createdBy = object.createdBy ?? undefined;
    return message;
  },
};

function createBaseRemoveProjectDto(): RemoveProjectDto {
  return { id: 0 };
}

export const RemoveProjectDto = {
  encode(message: RemoveProjectDto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectDto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveProjectDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveProjectDto {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: RemoveProjectDto): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveProjectDto>, I>>(base?: I): RemoveProjectDto {
    return RemoveProjectDto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveProjectDto>, I>>(object: I): RemoveProjectDto {
    const message = createBaseRemoveProjectDto();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseResponse(): Response {
  return { statusCode: 0, message: "" };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusCode !== 0) {
      writer.uint32(8).int32(message.statusCode);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.statusCode = reader.int32();
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

  fromJSON(object: any): Response {
    return {
      statusCode: isSet(object.statusCode) ? globalThis.Number(object.statusCode) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    if (message.statusCode !== 0) {
      obj.statusCode = Math.round(message.statusCode);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response {
    return Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.statusCode = object.statusCode ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseProjectResponse(): ProjectResponse {
  return { statusCode: 0, message: "", data: undefined };
}

export const ProjectResponse = {
  encode(message: ProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusCode !== 0) {
      writer.uint32(8).int32(message.statusCode);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.data !== undefined) {
      Project.encode(message.data, writer.uint32(26).fork()).ldelim();
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
          if (tag !== 8) {
            break;
          }

          message.statusCode = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = Project.decode(reader, reader.uint32());
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
      statusCode: isSet(object.statusCode) ? globalThis.Number(object.statusCode) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      data: isSet(object.data) ? Project.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: ProjectResponse): unknown {
    const obj: any = {};
    if (message.statusCode !== 0) {
      obj.statusCode = Math.round(message.statusCode);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.data !== undefined) {
      obj.data = Project.toJSON(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectResponse>, I>>(base?: I): ProjectResponse {
    return ProjectResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectResponse>, I>>(object: I): ProjectResponse {
    const message = createBaseProjectResponse();
    message.statusCode = object.statusCode ?? 0;
    message.message = object.message ?? "";
    message.data = (object.data !== undefined && object.data !== null) ? Project.fromPartial(object.data) : undefined;
    return message;
  },
};

function createBaseProjectsResponse(): ProjectsResponse {
  return { statusCode: undefined, message: undefined, data: [] };
}

export const ProjectsResponse = {
  encode(message: ProjectsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusCode !== undefined) {
      writer.uint32(8).int32(message.statusCode);
    }
    if (message.message !== undefined) {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.data) {
      Project.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.statusCode = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): ProjectsResponse {
    return {
      statusCode: isSet(object.statusCode) ? globalThis.Number(object.statusCode) : undefined,
      message: isSet(object.message) ? globalThis.String(object.message) : undefined,
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => Project.fromJSON(e)) : [],
    };
  },

  toJSON(message: ProjectsResponse): unknown {
    const obj: any = {};
    if (message.statusCode !== undefined) {
      obj.statusCode = Math.round(message.statusCode);
    }
    if (message.message !== undefined) {
      obj.message = message.message;
    }
    if (message.data?.length) {
      obj.data = message.data.map((e) => Project.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectsResponse>, I>>(base?: I): ProjectsResponse {
    return ProjectsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectsResponse>, I>>(object: I): ProjectsResponse {
    const message = createBaseProjectsResponse();
    message.statusCode = object.statusCode ?? undefined;
    message.message = object.message ?? undefined;
    message.data = object.data?.map((e) => Project.fromPartial(e)) || [];
    return message;
  },
};

export interface ProjectsService {
  CreateProject(request: CreateProjectDto): Promise<ProjectResponse>;
  FindAllProjects(request: Empty): Promise<ProjectsResponse>;
  FindOneProject(request: FindOneProjectDto): Promise<ProjectResponse>;
  UpdateProject(request: UpdateProjectDto): Promise<ProjectResponse>;
  RemoveProject(request: RemoveProjectDto): Promise<Response>;
  QueryProject(request: Observable<PaginationDto>): Observable<Project>;
}

export const ProjectsServiceServiceName = "project.ProjectsService";
export class ProjectsServiceClientImpl implements ProjectsService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ProjectsServiceServiceName;
    this.rpc = rpc;
    this.CreateProject = this.CreateProject.bind(this);
    this.FindAllProjects = this.FindAllProjects.bind(this);
    this.FindOneProject = this.FindOneProject.bind(this);
    this.UpdateProject = this.UpdateProject.bind(this);
    this.RemoveProject = this.RemoveProject.bind(this);
    this.QueryProject = this.QueryProject.bind(this);
  }
  CreateProject(request: CreateProjectDto): Promise<ProjectResponse> {
    const data = CreateProjectDto.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateProject", data);
    return promise.then((data) => ProjectResponse.decode(_m0.Reader.create(data)));
  }

  FindAllProjects(request: Empty): Promise<ProjectsResponse> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindAllProjects", data);
    return promise.then((data) => ProjectsResponse.decode(_m0.Reader.create(data)));
  }

  FindOneProject(request: FindOneProjectDto): Promise<ProjectResponse> {
    const data = FindOneProjectDto.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindOneProject", data);
    return promise.then((data) => ProjectResponse.decode(_m0.Reader.create(data)));
  }

  UpdateProject(request: UpdateProjectDto): Promise<ProjectResponse> {
    const data = UpdateProjectDto.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateProject", data);
    return promise.then((data) => ProjectResponse.decode(_m0.Reader.create(data)));
  }

  RemoveProject(request: RemoveProjectDto): Promise<Response> {
    const data = RemoveProjectDto.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveProject", data);
    return promise.then((data) => Response.decode(_m0.Reader.create(data)));
  }

  QueryProject(request: Observable<PaginationDto>): Observable<Project> {
    const data = request.pipe(map((request) => PaginationDto.encode(request).finish()));
    const result = this.rpc.bidirectionalStreamingRequest(this.service, "QueryProject", data);
    return result.pipe(map((data) => Project.decode(_m0.Reader.create(data))));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
  serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
  bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
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

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "packages.resource";

export interface Datestamps {
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;
}

export interface Unit {
  id: number;
  name: string;
}

export interface ResourceAllocation {
  quantity: number;
  allocatedUnit: number;
  taskId: string;
  notes: string;
  resourceId: number;
  roleId: number[];
}

export interface Resource {
  id: number;
  name: string;
  unit: Unit | undefined;
  unitQuantity: number;
  projectId: string;
  roleId: number;
  resourceGroupId: number;
  resourceAllocation: ResourceAllocation[];
  datestamps: Datestamps | undefined;
}

export interface ResourcesList {
  data: Resource[];
}

export interface ErrorResponse {
  statusCode: number;
  message: string;
}

export interface ResourceResponse {
  data?: ResourcesList | undefined;
  error?: ErrorResponse | undefined;
}

export interface ListResourcesRequest {
  id?: number | undefined;
  resourceGroupId?: number | undefined;
  projectId?: number | undefined;
  taskId: number[];
  limit?: number | undefined;
  offset?: number | undefined;
}

export interface CreateResourceRequest {
  name?: string | undefined;
  cost?: number | undefined;
  unitQuantity?: number | undefined;
  unit?: Unit | undefined;
  resourceGroupId?: number | undefined;
  projectId?: number | undefined;
}

export interface UpdateResourceRequest {
  id: number;
  name?: string | undefined;
  cost?: number | undefined;
  unitQuantity?: number | undefined;
  unitId?: number | undefined;
  resourceGroupId?: number | undefined;
}

export interface DeleteResourceRequest {
  id: number;
}

export interface ResourceGroup {
  id: number;
  name: string;
  description: string;
  projectId: number;
  resource: Resource[];
  datestamps: Datestamps | undefined;
}

export interface UpdateTaskResourceAllocationRequest {
  taskId: number;
  resourceId: number;
  unit: number;
  operation: UpdateTaskResourceAllocationRequest_Operation;
}

export enum UpdateTaskResourceAllocationRequest_Operation {
  ALLOCATE = 0,
  UNALLOCATE = 1,
  UNRECOGNIZED = -1,
}

export function updateTaskResourceAllocationRequest_OperationFromJSON(
  object: any,
): UpdateTaskResourceAllocationRequest_Operation {
  switch (object) {
    case 0:
    case "ALLOCATE":
      return UpdateTaskResourceAllocationRequest_Operation.ALLOCATE;
    case 1:
    case "UNALLOCATE":
      return UpdateTaskResourceAllocationRequest_Operation.UNALLOCATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UpdateTaskResourceAllocationRequest_Operation.UNRECOGNIZED;
  }
}

export function updateTaskResourceAllocationRequest_OperationToJSON(
  object: UpdateTaskResourceAllocationRequest_Operation,
): string {
  switch (object) {
    case UpdateTaskResourceAllocationRequest_Operation.ALLOCATE:
      return "ALLOCATE";
    case UpdateTaskResourceAllocationRequest_Operation.UNALLOCATE:
      return "UNALLOCATE";
    case UpdateTaskResourceAllocationRequest_Operation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ListResourceGroupsRequest {
  id: number;
  projectId: number;
}

export interface CreateResourceGroupRequest {
  name: string;
  description: string;
  projectId: number;
}

export interface UpdateResourceGroupRequest {
  id: number;
  name?: string | undefined;
  description?: string | undefined;
}

export interface DeleteResourceGroupRequest {
  id: number;
}

export interface ResourceGroupsList {
  data: ResourceGroup[];
}

export interface ResourceGroupResponse {
  data?: ResourceGroupsList | undefined;
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

function createBaseUnit(): Unit {
  return { id: 0, name: "" };
}

export const Unit = {
  encode(message: Unit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Unit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnit();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Unit {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: Unit): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Unit>, I>>(base?: I): Unit {
    return Unit.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Unit>, I>>(object: I): Unit {
    const message = createBaseUnit();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseResourceAllocation(): ResourceAllocation {
  return { quantity: 0, allocatedUnit: 0, taskId: "", notes: "", resourceId: 0, roleId: [] };
}

export const ResourceAllocation = {
  encode(message: ResourceAllocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity !== 0) {
      writer.uint32(8).uint32(message.quantity);
    }
    if (message.allocatedUnit !== 0) {
      writer.uint32(16).uint32(message.allocatedUnit);
    }
    if (message.taskId !== "") {
      writer.uint32(26).string(message.taskId);
    }
    if (message.notes !== "") {
      writer.uint32(34).string(message.notes);
    }
    if (message.resourceId !== 0) {
      writer.uint32(40).uint32(message.resourceId);
    }
    writer.uint32(50).fork();
    for (const v of message.roleId) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceAllocation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceAllocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.quantity = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.allocatedUnit = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.taskId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.notes = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.resourceId = reader.uint32();
          continue;
        case 6:
          if (tag === 48) {
            message.roleId.push(reader.uint32());

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roleId.push(reader.uint32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceAllocation {
    return {
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      allocatedUnit: isSet(object.allocatedUnit) ? globalThis.Number(object.allocatedUnit) : 0,
      taskId: isSet(object.taskId) ? globalThis.String(object.taskId) : "",
      notes: isSet(object.notes) ? globalThis.String(object.notes) : "",
      resourceId: isSet(object.resourceId) ? globalThis.Number(object.resourceId) : 0,
      roleId: globalThis.Array.isArray(object?.roleId) ? object.roleId.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: ResourceAllocation): unknown {
    const obj: any = {};
    if (message.quantity !== 0) {
      obj.quantity = Math.round(message.quantity);
    }
    if (message.allocatedUnit !== 0) {
      obj.allocatedUnit = Math.round(message.allocatedUnit);
    }
    if (message.taskId !== "") {
      obj.taskId = message.taskId;
    }
    if (message.notes !== "") {
      obj.notes = message.notes;
    }
    if (message.resourceId !== 0) {
      obj.resourceId = Math.round(message.resourceId);
    }
    if (message.roleId?.length) {
      obj.roleId = message.roleId.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceAllocation>, I>>(base?: I): ResourceAllocation {
    return ResourceAllocation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceAllocation>, I>>(object: I): ResourceAllocation {
    const message = createBaseResourceAllocation();
    message.quantity = object.quantity ?? 0;
    message.allocatedUnit = object.allocatedUnit ?? 0;
    message.taskId = object.taskId ?? "";
    message.notes = object.notes ?? "";
    message.resourceId = object.resourceId ?? 0;
    message.roleId = object.roleId?.map((e) => e) || [];
    return message;
  },
};

function createBaseResource(): Resource {
  return {
    id: 0,
    name: "",
    unit: undefined,
    unitQuantity: 0,
    projectId: "",
    roleId: 0,
    resourceGroupId: 0,
    resourceAllocation: [],
    datestamps: undefined,
  };
}

export const Resource = {
  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.unit !== undefined) {
      Unit.encode(message.unit, writer.uint32(26).fork()).ldelim();
    }
    if (message.unitQuantity !== 0) {
      writer.uint32(32).uint32(message.unitQuantity);
    }
    if (message.projectId !== "") {
      writer.uint32(42).string(message.projectId);
    }
    if (message.roleId !== 0) {
      writer.uint32(48).uint32(message.roleId);
    }
    if (message.resourceGroupId !== 0) {
      writer.uint32(56).uint32(message.resourceGroupId);
    }
    for (const v of message.resourceAllocation) {
      ResourceAllocation.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.datestamps !== undefined) {
      Datestamps.encode(message.datestamps, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
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

          message.unit = Unit.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.unitQuantity = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.projectId = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.roleId = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.resourceGroupId = reader.uint32();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.resourceAllocation.push(ResourceAllocation.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
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

  fromJSON(object: any): Resource {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      unit: isSet(object.unit) ? Unit.fromJSON(object.unit) : undefined,
      unitQuantity: isSet(object.unitQuantity) ? globalThis.Number(object.unitQuantity) : 0,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      roleId: isSet(object.roleId) ? globalThis.Number(object.roleId) : 0,
      resourceGroupId: isSet(object.resourceGroupId) ? globalThis.Number(object.resourceGroupId) : 0,
      resourceAllocation: globalThis.Array.isArray(object?.resourceAllocation)
        ? object.resourceAllocation.map((e: any) => ResourceAllocation.fromJSON(e))
        : [],
      datestamps: isSet(object.datestamps) ? Datestamps.fromJSON(object.datestamps) : undefined,
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.unit !== undefined) {
      obj.unit = Unit.toJSON(message.unit);
    }
    if (message.unitQuantity !== 0) {
      obj.unitQuantity = Math.round(message.unitQuantity);
    }
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.roleId !== 0) {
      obj.roleId = Math.round(message.roleId);
    }
    if (message.resourceGroupId !== 0) {
      obj.resourceGroupId = Math.round(message.resourceGroupId);
    }
    if (message.resourceAllocation?.length) {
      obj.resourceAllocation = message.resourceAllocation.map((e) => ResourceAllocation.toJSON(e));
    }
    if (message.datestamps !== undefined) {
      obj.datestamps = Datestamps.toJSON(message.datestamps);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Resource>, I>>(base?: I): Resource {
    return Resource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Resource>, I>>(object: I): Resource {
    const message = createBaseResource();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.unit = (object.unit !== undefined && object.unit !== null) ? Unit.fromPartial(object.unit) : undefined;
    message.unitQuantity = object.unitQuantity ?? 0;
    message.projectId = object.projectId ?? "";
    message.roleId = object.roleId ?? 0;
    message.resourceGroupId = object.resourceGroupId ?? 0;
    message.resourceAllocation = object.resourceAllocation?.map((e) => ResourceAllocation.fromPartial(e)) || [];
    message.datestamps = (object.datestamps !== undefined && object.datestamps !== null)
      ? Datestamps.fromPartial(object.datestamps)
      : undefined;
    return message;
  },
};

function createBaseResourcesList(): ResourcesList {
  return { data: [] };
}

export const ResourcesList = {
  encode(message: ResourcesList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      Resource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourcesList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourcesList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data.push(Resource.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourcesList {
    return { data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => Resource.fromJSON(e)) : [] };
  },

  toJSON(message: ResourcesList): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data.map((e) => Resource.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourcesList>, I>>(base?: I): ResourcesList {
    return ResourcesList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourcesList>, I>>(object: I): ResourcesList {
    const message = createBaseResourcesList();
    message.data = object.data?.map((e) => Resource.fromPartial(e)) || [];
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

function createBaseResourceResponse(): ResourceResponse {
  return { data: undefined, error: undefined };
}

export const ResourceResponse = {
  encode(message: ResourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      ResourcesList.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      ErrorResponse.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = ResourcesList.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResourceResponse {
    return {
      data: isSet(object.data) ? ResourcesList.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? ErrorResponse.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResourceResponse): unknown {
    const obj: any = {};
    if (message.data !== undefined) {
      obj.data = ResourcesList.toJSON(message.data);
    }
    if (message.error !== undefined) {
      obj.error = ErrorResponse.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceResponse>, I>>(base?: I): ResourceResponse {
    return ResourceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceResponse>, I>>(object: I): ResourceResponse {
    const message = createBaseResourceResponse();
    message.data = (object.data !== undefined && object.data !== null)
      ? ResourcesList.fromPartial(object.data)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? ErrorResponse.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseListResourcesRequest(): ListResourcesRequest {
  return {
    id: undefined,
    resourceGroupId: undefined,
    projectId: undefined,
    taskId: [],
    limit: undefined,
    offset: undefined,
  };
}

export const ListResourcesRequest = {
  encode(message: ListResourcesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.resourceGroupId !== undefined) {
      writer.uint32(16).uint32(message.resourceGroupId);
    }
    if (message.projectId !== undefined) {
      writer.uint32(24).uint32(message.projectId);
    }
    writer.uint32(34).fork();
    for (const v of message.taskId) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.limit !== undefined) {
      writer.uint32(40).uint32(message.limit);
    }
    if (message.offset !== undefined) {
      writer.uint32(48).uint32(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListResourcesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResourcesRequest();
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
          if (tag !== 16) {
            break;
          }

          message.resourceGroupId = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.projectId = reader.uint32();
          continue;
        case 4:
          if (tag === 32) {
            message.taskId.push(reader.uint32());

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.taskId.push(reader.uint32());
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.limit = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
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

  fromJSON(object: any): ListResourcesRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : undefined,
      resourceGroupId: isSet(object.resourceGroupId) ? globalThis.Number(object.resourceGroupId) : undefined,
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : undefined,
      taskId: globalThis.Array.isArray(object?.taskId) ? object.taskId.map((e: any) => globalThis.Number(e)) : [],
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : undefined,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : undefined,
    };
  },

  toJSON(message: ListResourcesRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = Math.round(message.id);
    }
    if (message.resourceGroupId !== undefined) {
      obj.resourceGroupId = Math.round(message.resourceGroupId);
    }
    if (message.projectId !== undefined) {
      obj.projectId = Math.round(message.projectId);
    }
    if (message.taskId?.length) {
      obj.taskId = message.taskId.map((e) => Math.round(e));
    }
    if (message.limit !== undefined) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== undefined) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListResourcesRequest>, I>>(base?: I): ListResourcesRequest {
    return ListResourcesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListResourcesRequest>, I>>(object: I): ListResourcesRequest {
    const message = createBaseListResourcesRequest();
    message.id = object.id ?? undefined;
    message.resourceGroupId = object.resourceGroupId ?? undefined;
    message.projectId = object.projectId ?? undefined;
    message.taskId = object.taskId?.map((e) => e) || [];
    message.limit = object.limit ?? undefined;
    message.offset = object.offset ?? undefined;
    return message;
  },
};

function createBaseCreateResourceRequest(): CreateResourceRequest {
  return {
    name: undefined,
    cost: undefined,
    unitQuantity: undefined,
    unit: undefined,
    resourceGroupId: undefined,
    projectId: undefined,
  };
}

export const CreateResourceRequest = {
  encode(message: CreateResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.cost !== undefined) {
      writer.uint32(16).uint32(message.cost);
    }
    if (message.unitQuantity !== undefined) {
      writer.uint32(24).uint32(message.unitQuantity);
    }
    if (message.unit !== undefined) {
      Unit.encode(message.unit, writer.uint32(34).fork()).ldelim();
    }
    if (message.resourceGroupId !== undefined) {
      writer.uint32(40).uint32(message.resourceGroupId);
    }
    if (message.projectId !== undefined) {
      writer.uint32(48).uint32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResourceRequest();
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
          if (tag !== 16) {
            break;
          }

          message.cost = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.unitQuantity = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.unit = Unit.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.resourceGroupId = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.projectId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateResourceRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      cost: isSet(object.cost) ? globalThis.Number(object.cost) : undefined,
      unitQuantity: isSet(object.unitQuantity) ? globalThis.Number(object.unitQuantity) : undefined,
      unit: isSet(object.unit) ? Unit.fromJSON(object.unit) : undefined,
      resourceGroupId: isSet(object.resourceGroupId) ? globalThis.Number(object.resourceGroupId) : undefined,
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : undefined,
    };
  },

  toJSON(message: CreateResourceRequest): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.cost !== undefined) {
      obj.cost = Math.round(message.cost);
    }
    if (message.unitQuantity !== undefined) {
      obj.unitQuantity = Math.round(message.unitQuantity);
    }
    if (message.unit !== undefined) {
      obj.unit = Unit.toJSON(message.unit);
    }
    if (message.resourceGroupId !== undefined) {
      obj.resourceGroupId = Math.round(message.resourceGroupId);
    }
    if (message.projectId !== undefined) {
      obj.projectId = Math.round(message.projectId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateResourceRequest>, I>>(base?: I): CreateResourceRequest {
    return CreateResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateResourceRequest>, I>>(object: I): CreateResourceRequest {
    const message = createBaseCreateResourceRequest();
    message.name = object.name ?? undefined;
    message.cost = object.cost ?? undefined;
    message.unitQuantity = object.unitQuantity ?? undefined;
    message.unit = (object.unit !== undefined && object.unit !== null) ? Unit.fromPartial(object.unit) : undefined;
    message.resourceGroupId = object.resourceGroupId ?? undefined;
    message.projectId = object.projectId ?? undefined;
    return message;
  },
};

function createBaseUpdateResourceRequest(): UpdateResourceRequest {
  return {
    id: 0,
    name: undefined,
    cost: undefined,
    unitQuantity: undefined,
    unitId: undefined,
    resourceGroupId: undefined,
  };
}

export const UpdateResourceRequest = {
  encode(message: UpdateResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.cost !== undefined) {
      writer.uint32(24).uint32(message.cost);
    }
    if (message.unitQuantity !== undefined) {
      writer.uint32(32).uint32(message.unitQuantity);
    }
    if (message.unitId !== undefined) {
      writer.uint32(40).uint32(message.unitId);
    }
    if (message.resourceGroupId !== undefined) {
      writer.uint32(48).uint32(message.resourceGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateResourceRequest();
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
          if (tag !== 24) {
            break;
          }

          message.cost = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.unitQuantity = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.unitId = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.resourceGroupId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateResourceRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      cost: isSet(object.cost) ? globalThis.Number(object.cost) : undefined,
      unitQuantity: isSet(object.unitQuantity) ? globalThis.Number(object.unitQuantity) : undefined,
      unitId: isSet(object.unitId) ? globalThis.Number(object.unitId) : undefined,
      resourceGroupId: isSet(object.resourceGroupId) ? globalThis.Number(object.resourceGroupId) : undefined,
    };
  },

  toJSON(message: UpdateResourceRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.cost !== undefined) {
      obj.cost = Math.round(message.cost);
    }
    if (message.unitQuantity !== undefined) {
      obj.unitQuantity = Math.round(message.unitQuantity);
    }
    if (message.unitId !== undefined) {
      obj.unitId = Math.round(message.unitId);
    }
    if (message.resourceGroupId !== undefined) {
      obj.resourceGroupId = Math.round(message.resourceGroupId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateResourceRequest>, I>>(base?: I): UpdateResourceRequest {
    return UpdateResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateResourceRequest>, I>>(object: I): UpdateResourceRequest {
    const message = createBaseUpdateResourceRequest();
    message.id = object.id ?? 0;
    message.name = object.name ?? undefined;
    message.cost = object.cost ?? undefined;
    message.unitQuantity = object.unitQuantity ?? undefined;
    message.unitId = object.unitId ?? undefined;
    message.resourceGroupId = object.resourceGroupId ?? undefined;
    return message;
  },
};

function createBaseDeleteResourceRequest(): DeleteResourceRequest {
  return { id: 0 };
}

export const DeleteResourceRequest = {
  encode(message: DeleteResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteResourceRequest();
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

  fromJSON(object: any): DeleteResourceRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: DeleteResourceRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteResourceRequest>, I>>(base?: I): DeleteResourceRequest {
    return DeleteResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteResourceRequest>, I>>(object: I): DeleteResourceRequest {
    const message = createBaseDeleteResourceRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseResourceGroup(): ResourceGroup {
  return { id: 0, name: "", description: "", projectId: 0, resource: [], datestamps: undefined };
}

export const ResourceGroup = {
  encode(message: ResourceGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.projectId !== 0) {
      writer.uint32(32).uint32(message.projectId);
    }
    for (const v of message.resource) {
      Resource.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.datestamps !== undefined) {
      Datestamps.encode(message.datestamps, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceGroup();
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
          if (tag !== 32) {
            break;
          }

          message.projectId = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.resource.push(Resource.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): ResourceGroup {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : 0,
      resource: globalThis.Array.isArray(object?.resource) ? object.resource.map((e: any) => Resource.fromJSON(e)) : [],
      datestamps: isSet(object.datestamps) ? Datestamps.fromJSON(object.datestamps) : undefined,
    };
  },

  toJSON(message: ResourceGroup): unknown {
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
    if (message.projectId !== 0) {
      obj.projectId = Math.round(message.projectId);
    }
    if (message.resource?.length) {
      obj.resource = message.resource.map((e) => Resource.toJSON(e));
    }
    if (message.datestamps !== undefined) {
      obj.datestamps = Datestamps.toJSON(message.datestamps);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceGroup>, I>>(base?: I): ResourceGroup {
    return ResourceGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceGroup>, I>>(object: I): ResourceGroup {
    const message = createBaseResourceGroup();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.projectId = object.projectId ?? 0;
    message.resource = object.resource?.map((e) => Resource.fromPartial(e)) || [];
    message.datestamps = (object.datestamps !== undefined && object.datestamps !== null)
      ? Datestamps.fromPartial(object.datestamps)
      : undefined;
    return message;
  },
};

function createBaseUpdateTaskResourceAllocationRequest(): UpdateTaskResourceAllocationRequest {
  return { taskId: 0, resourceId: 0, unit: 0, operation: 0 };
}

export const UpdateTaskResourceAllocationRequest = {
  encode(message: UpdateTaskResourceAllocationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.taskId !== 0) {
      writer.uint32(8).uint32(message.taskId);
    }
    if (message.resourceId !== 0) {
      writer.uint32(16).uint32(message.resourceId);
    }
    if (message.unit !== 0) {
      writer.uint32(24).uint32(message.unit);
    }
    if (message.operation !== 0) {
      writer.uint32(32).int32(message.operation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTaskResourceAllocationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTaskResourceAllocationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.taskId = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.resourceId = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.unit = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.operation = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTaskResourceAllocationRequest {
    return {
      taskId: isSet(object.taskId) ? globalThis.Number(object.taskId) : 0,
      resourceId: isSet(object.resourceId) ? globalThis.Number(object.resourceId) : 0,
      unit: isSet(object.unit) ? globalThis.Number(object.unit) : 0,
      operation: isSet(object.operation) ? updateTaskResourceAllocationRequest_OperationFromJSON(object.operation) : 0,
    };
  },

  toJSON(message: UpdateTaskResourceAllocationRequest): unknown {
    const obj: any = {};
    if (message.taskId !== 0) {
      obj.taskId = Math.round(message.taskId);
    }
    if (message.resourceId !== 0) {
      obj.resourceId = Math.round(message.resourceId);
    }
    if (message.unit !== 0) {
      obj.unit = Math.round(message.unit);
    }
    if (message.operation !== 0) {
      obj.operation = updateTaskResourceAllocationRequest_OperationToJSON(message.operation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTaskResourceAllocationRequest>, I>>(
    base?: I,
  ): UpdateTaskResourceAllocationRequest {
    return UpdateTaskResourceAllocationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTaskResourceAllocationRequest>, I>>(
    object: I,
  ): UpdateTaskResourceAllocationRequest {
    const message = createBaseUpdateTaskResourceAllocationRequest();
    message.taskId = object.taskId ?? 0;
    message.resourceId = object.resourceId ?? 0;
    message.unit = object.unit ?? 0;
    message.operation = object.operation ?? 0;
    return message;
  },
};

function createBaseListResourceGroupsRequest(): ListResourceGroupsRequest {
  return { id: 0, projectId: 0 };
}

export const ListResourceGroupsRequest = {
  encode(message: ListResourceGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).uint32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListResourceGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResourceGroupsRequest();
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
          if (tag !== 16) {
            break;
          }

          message.projectId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListResourceGroupsRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : 0,
    };
  },

  toJSON(message: ListResourceGroupsRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.projectId !== 0) {
      obj.projectId = Math.round(message.projectId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListResourceGroupsRequest>, I>>(base?: I): ListResourceGroupsRequest {
    return ListResourceGroupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListResourceGroupsRequest>, I>>(object: I): ListResourceGroupsRequest {
    const message = createBaseListResourceGroupsRequest();
    message.id = object.id ?? 0;
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseCreateResourceGroupRequest(): CreateResourceGroupRequest {
  return { name: "", description: "", projectId: 0 };
}

export const CreateResourceGroupRequest = {
  encode(message: CreateResourceGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.projectId !== 0) {
      writer.uint32(24).uint32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResourceGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResourceGroupRequest();
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

          message.projectId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateResourceGroupRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : 0,
    };
  },

  toJSON(message: CreateResourceGroupRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.projectId !== 0) {
      obj.projectId = Math.round(message.projectId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateResourceGroupRequest>, I>>(base?: I): CreateResourceGroupRequest {
    return CreateResourceGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateResourceGroupRequest>, I>>(object: I): CreateResourceGroupRequest {
    const message = createBaseCreateResourceGroupRequest();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseUpdateResourceGroupRequest(): UpdateResourceGroupRequest {
  return { id: 0, name: undefined, description: undefined };
}

export const UpdateResourceGroupRequest = {
  encode(message: UpdateResourceGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResourceGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateResourceGroupRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateResourceGroupRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
    };
  },

  toJSON(message: UpdateResourceGroupRequest): unknown {
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
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateResourceGroupRequest>, I>>(base?: I): UpdateResourceGroupRequest {
    return UpdateResourceGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateResourceGroupRequest>, I>>(object: I): UpdateResourceGroupRequest {
    const message = createBaseUpdateResourceGroupRequest();
    message.id = object.id ?? 0;
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    return message;
  },
};

function createBaseDeleteResourceGroupRequest(): DeleteResourceGroupRequest {
  return { id: 0 };
}

export const DeleteResourceGroupRequest = {
  encode(message: DeleteResourceGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteResourceGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteResourceGroupRequest();
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

  fromJSON(object: any): DeleteResourceGroupRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: DeleteResourceGroupRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteResourceGroupRequest>, I>>(base?: I): DeleteResourceGroupRequest {
    return DeleteResourceGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteResourceGroupRequest>, I>>(object: I): DeleteResourceGroupRequest {
    const message = createBaseDeleteResourceGroupRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseResourceGroupsList(): ResourceGroupsList {
  return { data: [] };
}

export const ResourceGroupsList = {
  encode(message: ResourceGroupsList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      ResourceGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceGroupsList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceGroupsList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data.push(ResourceGroup.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceGroupsList {
    return {
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => ResourceGroup.fromJSON(e)) : [],
    };
  },

  toJSON(message: ResourceGroupsList): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data.map((e) => ResourceGroup.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceGroupsList>, I>>(base?: I): ResourceGroupsList {
    return ResourceGroupsList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceGroupsList>, I>>(object: I): ResourceGroupsList {
    const message = createBaseResourceGroupsList();
    message.data = object.data?.map((e) => ResourceGroup.fromPartial(e)) || [];
    return message;
  },
};

function createBaseResourceGroupResponse(): ResourceGroupResponse {
  return { data: undefined, error: undefined };
}

export const ResourceGroupResponse = {
  encode(message: ResourceGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      ResourceGroupsList.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      ErrorResponse.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = ResourceGroupsList.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResourceGroupResponse {
    return {
      data: isSet(object.data) ? ResourceGroupsList.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? ErrorResponse.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResourceGroupResponse): unknown {
    const obj: any = {};
    if (message.data !== undefined) {
      obj.data = ResourceGroupsList.toJSON(message.data);
    }
    if (message.error !== undefined) {
      obj.error = ErrorResponse.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceGroupResponse>, I>>(base?: I): ResourceGroupResponse {
    return ResourceGroupResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceGroupResponse>, I>>(object: I): ResourceGroupResponse {
    const message = createBaseResourceGroupResponse();
    message.data = (object.data !== undefined && object.data !== null)
      ? ResourceGroupsList.fromPartial(object.data)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? ErrorResponse.fromPartial(object.error)
      : undefined;
    return message;
  },
};

export interface ResourcesService {
  ListResources(request: ListResourcesRequest): Promise<ResourceResponse>;
  CreateResource(request: CreateResourceRequest): Promise<ResourceResponse>;
  UpdateResource(request: UpdateResourceRequest): Promise<ResourceResponse>;
  DeleteResource(request: DeleteResourceRequest): Promise<Empty>;
  UpdateTaskResourceAllocation(request: UpdateTaskResourceAllocationRequest): Promise<ResourceResponse>;
  ListResourceGroups(request: ListResourceGroupsRequest): Promise<ResourceGroupResponse>;
  CreateResourceGroup(request: CreateResourceGroupRequest): Promise<ResourceGroupResponse>;
  UpdateResourceGroup(request: UpdateResourceGroupRequest): Promise<ResourceGroupResponse>;
  DeleteResourceGroup(request: DeleteResourceGroupRequest): Promise<Empty>;
}

export const ResourcesServiceServiceName = "packages.resource.ResourcesService";
export class ResourcesServiceClientImpl implements ResourcesService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ResourcesServiceServiceName;
    this.rpc = rpc;
    this.ListResources = this.ListResources.bind(this);
    this.CreateResource = this.CreateResource.bind(this);
    this.UpdateResource = this.UpdateResource.bind(this);
    this.DeleteResource = this.DeleteResource.bind(this);
    this.UpdateTaskResourceAllocation = this.UpdateTaskResourceAllocation.bind(this);
    this.ListResourceGroups = this.ListResourceGroups.bind(this);
    this.CreateResourceGroup = this.CreateResourceGroup.bind(this);
    this.UpdateResourceGroup = this.UpdateResourceGroup.bind(this);
    this.DeleteResourceGroup = this.DeleteResourceGroup.bind(this);
  }
  ListResources(request: ListResourcesRequest): Promise<ResourceResponse> {
    const data = ListResourcesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListResources", data);
    return promise.then((data) => ResourceResponse.decode(_m0.Reader.create(data)));
  }

  CreateResource(request: CreateResourceRequest): Promise<ResourceResponse> {
    const data = CreateResourceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateResource", data);
    return promise.then((data) => ResourceResponse.decode(_m0.Reader.create(data)));
  }

  UpdateResource(request: UpdateResourceRequest): Promise<ResourceResponse> {
    const data = UpdateResourceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateResource", data);
    return promise.then((data) => ResourceResponse.decode(_m0.Reader.create(data)));
  }

  DeleteResource(request: DeleteResourceRequest): Promise<Empty> {
    const data = DeleteResourceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteResource", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }

  UpdateTaskResourceAllocation(request: UpdateTaskResourceAllocationRequest): Promise<ResourceResponse> {
    const data = UpdateTaskResourceAllocationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateTaskResourceAllocation", data);
    return promise.then((data) => ResourceResponse.decode(_m0.Reader.create(data)));
  }

  ListResourceGroups(request: ListResourceGroupsRequest): Promise<ResourceGroupResponse> {
    const data = ListResourceGroupsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListResourceGroups", data);
    return promise.then((data) => ResourceGroupResponse.decode(_m0.Reader.create(data)));
  }

  CreateResourceGroup(request: CreateResourceGroupRequest): Promise<ResourceGroupResponse> {
    const data = CreateResourceGroupRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateResourceGroup", data);
    return promise.then((data) => ResourceGroupResponse.decode(_m0.Reader.create(data)));
  }

  UpdateResourceGroup(request: UpdateResourceGroupRequest): Promise<ResourceGroupResponse> {
    const data = UpdateResourceGroupRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateResourceGroup", data);
    return promise.then((data) => ResourceGroupResponse.decode(_m0.Reader.create(data)));
  }

  DeleteResourceGroup(request: DeleteResourceGroupRequest): Promise<Empty> {
    const data = DeleteResourceGroupRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteResourceGroup", data);
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

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "resource";

export interface Resource {
  id?: number | undefined;
  name: string;
  unit: number;
  projectId: string;
}

export interface ResourcesResponse {
  statusCode?: number | undefined;
  message?: string | undefined;
  data: Resource[];
}

export interface ResourceResponse {
  statusCode: number;
  message: string;
  data: Resource | undefined;
}

export interface FindAllResourcesRequest {
  id?: number | undefined;
  name?: string | undefined;
  unit?: number | undefined;
  projectId?: string | undefined;
}

export interface FindOneResourceRequest {
  id: number;
}

export interface CreateResourceRequest {
  name?: string | undefined;
  unit?: number | undefined;
  projectId?: string | undefined;
  resourceGroupId?: string | undefined;
}

export interface UpdateResourceRequest {
  id: number;
  name?: string | undefined;
  unit?: number | undefined;
  resourceGroupId?: string | undefined;
}

export interface DeleteResourceRequest {
  id: number;
}

export interface ResourceGroup {
  id?: number | undefined;
  name: string;
  description: string;
  projectId: string;
  resource: Resource[];
}

export interface AssignResourceRequest {
  resourceId?: number | undefined;
  taskId?: number | undefined;
  unit?: number | undefined;
}

export interface UnassignResourceRequest {
  id: number;
}

export interface FindAllResourceGroupsByCriteriaRequest {
  id: number;
  projectId: string;
}

export interface CreateResourceGroupRequest {
  name: string;
  description: string;
  projectId: string;
}

export interface UpdateResourceGroupRequest {
  id: number;
  name?: string | undefined;
  description?: string | undefined;
}

export interface DeleteResourceGroupRequest {
  id: number;
}

export interface ResourceGroupsResponse {
  statusCode?: number | undefined;
  message?: string | undefined;
  data: ResourceGroup[];
}

export interface ResourceGroupResponse {
  statusCode: number;
  message: string;
  data?: ResourceGroup | undefined;
}

function createBaseResource(): Resource {
  return { id: undefined, name: "", unit: 0, projectId: "" };
}

export const Resource = {
  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.unit !== 0) {
      writer.uint32(24).int32(message.unit);
    }
    if (message.projectId !== "") {
      writer.uint32(34).string(message.projectId);
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

          message.id = reader.int32();
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

          message.unit = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.projectId = reader.string();
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
      id: isSet(object.id) ? globalThis.Number(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      unit: isSet(object.unit) ? globalThis.Number(object.unit) : 0,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.unit !== 0) {
      obj.unit = Math.round(message.unit);
    }
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Resource>, I>>(base?: I): Resource {
    return Resource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Resource>, I>>(object: I): Resource {
    const message = createBaseResource();
    message.id = object.id ?? undefined;
    message.name = object.name ?? "";
    message.unit = object.unit ?? 0;
    message.projectId = object.projectId ?? "";
    return message;
  },
};

function createBaseResourcesResponse(): ResourcesResponse {
  return { statusCode: undefined, message: undefined, data: [] };
}

export const ResourcesResponse = {
  encode(message: ResourcesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusCode !== undefined) {
      writer.uint32(8).int32(message.statusCode);
    }
    if (message.message !== undefined) {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.data) {
      Resource.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourcesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourcesResponse();
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

  fromJSON(object: any): ResourcesResponse {
    return {
      statusCode: isSet(object.statusCode) ? globalThis.Number(object.statusCode) : undefined,
      message: isSet(object.message) ? globalThis.String(object.message) : undefined,
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => Resource.fromJSON(e)) : [],
    };
  },

  toJSON(message: ResourcesResponse): unknown {
    const obj: any = {};
    if (message.statusCode !== undefined) {
      obj.statusCode = Math.round(message.statusCode);
    }
    if (message.message !== undefined) {
      obj.message = message.message;
    }
    if (message.data?.length) {
      obj.data = message.data.map((e) => Resource.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourcesResponse>, I>>(base?: I): ResourcesResponse {
    return ResourcesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourcesResponse>, I>>(object: I): ResourcesResponse {
    const message = createBaseResourcesResponse();
    message.statusCode = object.statusCode ?? undefined;
    message.message = object.message ?? undefined;
    message.data = object.data?.map((e) => Resource.fromPartial(e)) || [];
    return message;
  },
};

function createBaseResourceResponse(): ResourceResponse {
  return { statusCode: 0, message: "", data: undefined };
}

export const ResourceResponse = {
  encode(message: ResourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusCode !== 0) {
      writer.uint32(8).int32(message.statusCode);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.data !== undefined) {
      Resource.encode(message.data, writer.uint32(26).fork()).ldelim();
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

          message.data = Resource.decode(reader, reader.uint32());
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
      statusCode: isSet(object.statusCode) ? globalThis.Number(object.statusCode) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      data: isSet(object.data) ? Resource.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: ResourceResponse): unknown {
    const obj: any = {};
    if (message.statusCode !== 0) {
      obj.statusCode = Math.round(message.statusCode);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.data !== undefined) {
      obj.data = Resource.toJSON(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceResponse>, I>>(base?: I): ResourceResponse {
    return ResourceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceResponse>, I>>(object: I): ResourceResponse {
    const message = createBaseResourceResponse();
    message.statusCode = object.statusCode ?? 0;
    message.message = object.message ?? "";
    message.data = (object.data !== undefined && object.data !== null) ? Resource.fromPartial(object.data) : undefined;
    return message;
  },
};

function createBaseFindAllResourcesRequest(): FindAllResourcesRequest {
  return { id: undefined, name: undefined, unit: undefined, projectId: undefined };
}

export const FindAllResourcesRequest = {
  encode(message: FindAllResourcesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.unit !== undefined) {
      writer.uint32(24).int32(message.unit);
    }
    if (message.projectId !== undefined) {
      writer.uint32(34).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindAllResourcesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindAllResourcesRequest();
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
          if (tag !== 24) {
            break;
          }

          message.unit = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.projectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindAllResourcesRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      unit: isSet(object.unit) ? globalThis.Number(object.unit) : undefined,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : undefined,
    };
  },

  toJSON(message: FindAllResourcesRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.unit !== undefined) {
      obj.unit = Math.round(message.unit);
    }
    if (message.projectId !== undefined) {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindAllResourcesRequest>, I>>(base?: I): FindAllResourcesRequest {
    return FindAllResourcesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindAllResourcesRequest>, I>>(object: I): FindAllResourcesRequest {
    const message = createBaseFindAllResourcesRequest();
    message.id = object.id ?? undefined;
    message.name = object.name ?? undefined;
    message.unit = object.unit ?? undefined;
    message.projectId = object.projectId ?? undefined;
    return message;
  },
};

function createBaseFindOneResourceRequest(): FindOneResourceRequest {
  return { id: 0 };
}

export const FindOneResourceRequest = {
  encode(message: FindOneResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindOneResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindOneResourceRequest();
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

  fromJSON(object: any): FindOneResourceRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: FindOneResourceRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindOneResourceRequest>, I>>(base?: I): FindOneResourceRequest {
    return FindOneResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindOneResourceRequest>, I>>(object: I): FindOneResourceRequest {
    const message = createBaseFindOneResourceRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseCreateResourceRequest(): CreateResourceRequest {
  return { name: undefined, unit: undefined, projectId: undefined, resourceGroupId: undefined };
}

export const CreateResourceRequest = {
  encode(message: CreateResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.unit !== undefined) {
      writer.uint32(16).int32(message.unit);
    }
    if (message.projectId !== undefined) {
      writer.uint32(26).string(message.projectId);
    }
    if (message.resourceGroupId !== undefined) {
      writer.uint32(34).string(message.resourceGroupId);
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

          message.unit = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.projectId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resourceGroupId = reader.string();
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
      unit: isSet(object.unit) ? globalThis.Number(object.unit) : undefined,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : undefined,
      resourceGroupId: isSet(object.resourceGroupId) ? globalThis.String(object.resourceGroupId) : undefined,
    };
  },

  toJSON(message: CreateResourceRequest): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.unit !== undefined) {
      obj.unit = Math.round(message.unit);
    }
    if (message.projectId !== undefined) {
      obj.projectId = message.projectId;
    }
    if (message.resourceGroupId !== undefined) {
      obj.resourceGroupId = message.resourceGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateResourceRequest>, I>>(base?: I): CreateResourceRequest {
    return CreateResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateResourceRequest>, I>>(object: I): CreateResourceRequest {
    const message = createBaseCreateResourceRequest();
    message.name = object.name ?? undefined;
    message.unit = object.unit ?? undefined;
    message.projectId = object.projectId ?? undefined;
    message.resourceGroupId = object.resourceGroupId ?? undefined;
    return message;
  },
};

function createBaseUpdateResourceRequest(): UpdateResourceRequest {
  return { id: 0, name: undefined, unit: undefined, resourceGroupId: undefined };
}

export const UpdateResourceRequest = {
  encode(message: UpdateResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.unit !== undefined) {
      writer.uint32(24).int32(message.unit);
    }
    if (message.resourceGroupId !== undefined) {
      writer.uint32(34).string(message.resourceGroupId);
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

          message.id = reader.int32();
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

          message.unit = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resourceGroupId = reader.string();
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
      unit: isSet(object.unit) ? globalThis.Number(object.unit) : undefined,
      resourceGroupId: isSet(object.resourceGroupId) ? globalThis.String(object.resourceGroupId) : undefined,
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
    if (message.unit !== undefined) {
      obj.unit = Math.round(message.unit);
    }
    if (message.resourceGroupId !== undefined) {
      obj.resourceGroupId = message.resourceGroupId;
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
    message.unit = object.unit ?? undefined;
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
      writer.uint32(8).int32(message.id);
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
  return { id: undefined, name: "", description: "", projectId: "", resource: [] };
}

export const ResourceGroup = {
  encode(message: ResourceGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.projectId !== "") {
      writer.uint32(34).string(message.projectId);
    }
    for (const v of message.resource) {
      Resource.encode(v!, writer.uint32(42).fork()).ldelim();
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
          if (tag !== 34) {
            break;
          }

          message.projectId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.resource.push(Resource.decode(reader, reader.uint32()));
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
      id: isSet(object.id) ? globalThis.Number(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      resource: globalThis.Array.isArray(object?.resource) ? object.resource.map((e: any) => Resource.fromJSON(e)) : [],
    };
  },

  toJSON(message: ResourceGroup): unknown {
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
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.resource?.length) {
      obj.resource = message.resource.map((e) => Resource.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceGroup>, I>>(base?: I): ResourceGroup {
    return ResourceGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceGroup>, I>>(object: I): ResourceGroup {
    const message = createBaseResourceGroup();
    message.id = object.id ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.projectId = object.projectId ?? "";
    message.resource = object.resource?.map((e) => Resource.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAssignResourceRequest(): AssignResourceRequest {
  return { resourceId: undefined, taskId: undefined, unit: undefined };
}

export const AssignResourceRequest = {
  encode(message: AssignResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== undefined) {
      writer.uint32(8).int32(message.resourceId);
    }
    if (message.taskId !== undefined) {
      writer.uint32(16).int32(message.taskId);
    }
    if (message.unit !== undefined) {
      writer.uint32(24).int32(message.unit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssignResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssignResourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.resourceId = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.taskId = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.unit = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssignResourceRequest {
    return {
      resourceId: isSet(object.resourceId) ? globalThis.Number(object.resourceId) : undefined,
      taskId: isSet(object.taskId) ? globalThis.Number(object.taskId) : undefined,
      unit: isSet(object.unit) ? globalThis.Number(object.unit) : undefined,
    };
  },

  toJSON(message: AssignResourceRequest): unknown {
    const obj: any = {};
    if (message.resourceId !== undefined) {
      obj.resourceId = Math.round(message.resourceId);
    }
    if (message.taskId !== undefined) {
      obj.taskId = Math.round(message.taskId);
    }
    if (message.unit !== undefined) {
      obj.unit = Math.round(message.unit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AssignResourceRequest>, I>>(base?: I): AssignResourceRequest {
    return AssignResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AssignResourceRequest>, I>>(object: I): AssignResourceRequest {
    const message = createBaseAssignResourceRequest();
    message.resourceId = object.resourceId ?? undefined;
    message.taskId = object.taskId ?? undefined;
    message.unit = object.unit ?? undefined;
    return message;
  },
};

function createBaseUnassignResourceRequest(): UnassignResourceRequest {
  return { id: 0 };
}

export const UnassignResourceRequest = {
  encode(message: UnassignResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnassignResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnassignResourceRequest();
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

  fromJSON(object: any): UnassignResourceRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: UnassignResourceRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnassignResourceRequest>, I>>(base?: I): UnassignResourceRequest {
    return UnassignResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnassignResourceRequest>, I>>(object: I): UnassignResourceRequest {
    const message = createBaseUnassignResourceRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseFindAllResourceGroupsByCriteriaRequest(): FindAllResourceGroupsByCriteriaRequest {
  return { id: 0, projectId: "" };
}

export const FindAllResourceGroupsByCriteriaRequest = {
  encode(message: FindAllResourceGroupsByCriteriaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindAllResourceGroupsByCriteriaRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindAllResourceGroupsByCriteriaRequest();
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

          message.projectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindAllResourceGroupsByCriteriaRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: FindAllResourceGroupsByCriteriaRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindAllResourceGroupsByCriteriaRequest>, I>>(
    base?: I,
  ): FindAllResourceGroupsByCriteriaRequest {
    return FindAllResourceGroupsByCriteriaRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindAllResourceGroupsByCriteriaRequest>, I>>(
    object: I,
  ): FindAllResourceGroupsByCriteriaRequest {
    const message = createBaseFindAllResourceGroupsByCriteriaRequest();
    message.id = object.id ?? 0;
    message.projectId = object.projectId ?? "";
    return message;
  },
};

function createBaseCreateResourceGroupRequest(): CreateResourceGroupRequest {
  return { name: "", description: "", projectId: "" };
}

export const CreateResourceGroupRequest = {
  encode(message: CreateResourceGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.projectId !== "") {
      writer.uint32(26).string(message.projectId);
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
          if (tag !== 26) {
            break;
          }

          message.projectId = reader.string();
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
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
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
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
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
    message.projectId = object.projectId ?? "";
    return message;
  },
};

function createBaseUpdateResourceGroupRequest(): UpdateResourceGroupRequest {
  return { id: 0, name: undefined, description: undefined };
}

export const UpdateResourceGroupRequest = {
  encode(message: UpdateResourceGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
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
      writer.uint32(8).int32(message.id);
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

function createBaseResourceGroupsResponse(): ResourceGroupsResponse {
  return { statusCode: undefined, message: undefined, data: [] };
}

export const ResourceGroupsResponse = {
  encode(message: ResourceGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusCode !== undefined) {
      writer.uint32(8).int32(message.statusCode);
    }
    if (message.message !== undefined) {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.data) {
      ResourceGroup.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceGroupsResponse();
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

  fromJSON(object: any): ResourceGroupsResponse {
    return {
      statusCode: isSet(object.statusCode) ? globalThis.Number(object.statusCode) : undefined,
      message: isSet(object.message) ? globalThis.String(object.message) : undefined,
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => ResourceGroup.fromJSON(e)) : [],
    };
  },

  toJSON(message: ResourceGroupsResponse): unknown {
    const obj: any = {};
    if (message.statusCode !== undefined) {
      obj.statusCode = Math.round(message.statusCode);
    }
    if (message.message !== undefined) {
      obj.message = message.message;
    }
    if (message.data?.length) {
      obj.data = message.data.map((e) => ResourceGroup.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceGroupsResponse>, I>>(base?: I): ResourceGroupsResponse {
    return ResourceGroupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceGroupsResponse>, I>>(object: I): ResourceGroupsResponse {
    const message = createBaseResourceGroupsResponse();
    message.statusCode = object.statusCode ?? undefined;
    message.message = object.message ?? undefined;
    message.data = object.data?.map((e) => ResourceGroup.fromPartial(e)) || [];
    return message;
  },
};

function createBaseResourceGroupResponse(): ResourceGroupResponse {
  return { statusCode: 0, message: "", data: undefined };
}

export const ResourceGroupResponse = {
  encode(message: ResourceGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusCode !== 0) {
      writer.uint32(8).int32(message.statusCode);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.data !== undefined) {
      ResourceGroup.encode(message.data, writer.uint32(26).fork()).ldelim();
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

          message.data = ResourceGroup.decode(reader, reader.uint32());
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
      statusCode: isSet(object.statusCode) ? globalThis.Number(object.statusCode) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      data: isSet(object.data) ? ResourceGroup.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: ResourceGroupResponse): unknown {
    const obj: any = {};
    if (message.statusCode !== 0) {
      obj.statusCode = Math.round(message.statusCode);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.data !== undefined) {
      obj.data = ResourceGroup.toJSON(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceGroupResponse>, I>>(base?: I): ResourceGroupResponse {
    return ResourceGroupResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceGroupResponse>, I>>(object: I): ResourceGroupResponse {
    const message = createBaseResourceGroupResponse();
    message.statusCode = object.statusCode ?? 0;
    message.message = object.message ?? "";
    message.data = (object.data !== undefined && object.data !== null)
      ? ResourceGroup.fromPartial(object.data)
      : undefined;
    return message;
  },
};

export interface ResourcesService {
  FindAllResources(request: FindAllResourcesRequest): Promise<ResourcesResponse>;
  FindOneResource(request: FindOneResourceRequest): Promise<ResourceResponse>;
  CreateResource(request: CreateResourceRequest): Promise<ResourceResponse>;
  UpdateResource(request: UpdateResourceRequest): Promise<ResourceResponse>;
  DeleteResource(request: DeleteResourceRequest): Promise<ResourceResponse>;
  AssignResource(request: AssignResourceRequest): Promise<ResourceResponse>;
  UnassignResource(request: UnassignResourceRequest): Promise<ResourceResponse>;
  FindAllResourceGroupsByCriteria(request: FindAllResourceGroupsByCriteriaRequest): Promise<ResourceGroupsResponse>;
  CreateResourceGroup(request: CreateResourceGroupRequest): Promise<ResourceGroupResponse>;
  UpdateResourceGroup(request: UpdateResourceGroupRequest): Promise<ResourceGroupResponse>;
  DeleteResourceGroup(request: DeleteResourceGroupRequest): Promise<ResourceGroupResponse>;
}

export const ResourcesServiceServiceName = "resource.ResourcesService";
export class ResourcesServiceClientImpl implements ResourcesService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ResourcesServiceServiceName;
    this.rpc = rpc;
    this.FindAllResources = this.FindAllResources.bind(this);
    this.FindOneResource = this.FindOneResource.bind(this);
    this.CreateResource = this.CreateResource.bind(this);
    this.UpdateResource = this.UpdateResource.bind(this);
    this.DeleteResource = this.DeleteResource.bind(this);
    this.AssignResource = this.AssignResource.bind(this);
    this.UnassignResource = this.UnassignResource.bind(this);
    this.FindAllResourceGroupsByCriteria = this.FindAllResourceGroupsByCriteria.bind(this);
    this.CreateResourceGroup = this.CreateResourceGroup.bind(this);
    this.UpdateResourceGroup = this.UpdateResourceGroup.bind(this);
    this.DeleteResourceGroup = this.DeleteResourceGroup.bind(this);
  }
  FindAllResources(request: FindAllResourcesRequest): Promise<ResourcesResponse> {
    const data = FindAllResourcesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindAllResources", data);
    return promise.then((data) => ResourcesResponse.decode(_m0.Reader.create(data)));
  }

  FindOneResource(request: FindOneResourceRequest): Promise<ResourceResponse> {
    const data = FindOneResourceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindOneResource", data);
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

  DeleteResource(request: DeleteResourceRequest): Promise<ResourceResponse> {
    const data = DeleteResourceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteResource", data);
    return promise.then((data) => ResourceResponse.decode(_m0.Reader.create(data)));
  }

  AssignResource(request: AssignResourceRequest): Promise<ResourceResponse> {
    const data = AssignResourceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AssignResource", data);
    return promise.then((data) => ResourceResponse.decode(_m0.Reader.create(data)));
  }

  UnassignResource(request: UnassignResourceRequest): Promise<ResourceResponse> {
    const data = UnassignResourceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnassignResource", data);
    return promise.then((data) => ResourceResponse.decode(_m0.Reader.create(data)));
  }

  FindAllResourceGroupsByCriteria(request: FindAllResourceGroupsByCriteriaRequest): Promise<ResourceGroupsResponse> {
    const data = FindAllResourceGroupsByCriteriaRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindAllResourceGroupsByCriteria", data);
    return promise.then((data) => ResourceGroupsResponse.decode(_m0.Reader.create(data)));
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

  DeleteResourceGroup(request: DeleteResourceGroupRequest): Promise<ResourceGroupResponse> {
    const data = DeleteResourceGroupRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteResourceGroup", data);
    return promise.then((data) => ResourceGroupResponse.decode(_m0.Reader.create(data)));
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

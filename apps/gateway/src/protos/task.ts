/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "task";

export interface Empty {
}

export interface FindAllTasksRequest {
  id?: string | undefined;
  name?: string | undefined;
  featuredImage?: string | undefined;
  description?: string | undefined;
  status?: string | undefined;
  priority?: string | undefined;
  startDate?: number | undefined;
  endDate?: number | undefined;
  createdBy?: string | undefined;
  projectId?: string | undefined;
  taskColumnId?: string | undefined;
  subtasks: Subtasks[];
  assignees: string[];
}

export interface FindAllTasksResponse {
  tasks: Task[];
}

export interface FindOneTaskRequest {
  id: string;
}

export interface FindOneTaskResponse {
  tasks: Task[];
}

export interface CreateTaskRequest {
  name?: string | undefined;
  featuredImage?: string | undefined;
  description?: string | undefined;
  status?: string | undefined;
  priority?: string | undefined;
  startDate?: number | undefined;
  endDate?: number | undefined;
  createdBy?: string | undefined;
  projectId?: string | undefined;
  taskColumnId?: string | undefined;
  subtasks: Subtasks[];
  assignees: string[];
  dependencies: Dependencies[];
}

export interface UpdateTaskRequest {
  id: string;
  name?: string | undefined;
  featuredImage?: string | undefined;
  description?: string | undefined;
  status?: string | undefined;
  priority?: string | undefined;
  startDate?: number | undefined;
  endDate?: number | undefined;
  taskColumnId?: string | undefined;
  subtasks: Subtasks[];
  assignees: string[];
  dependencies: Dependencies[];
}

export interface DeleteTaskRequest {
  id: string;
}

export interface Subtasks {
  id?: string | undefined;
  label: string;
  status: boolean;
}

export interface Dependencies {
  id?: string | undefined;
  from: string;
  to: string;
  type: string;
  lagTime: number;
}

export interface Task {
  id: string;
  name: string;
  featuredImage: string;
  description: string;
  status: string;
  priority: string;
  startDate: number;
  endDate: number;
  createdBy: string;
  taskColumnId: string;
  subtasks: Subtasks[];
  assignees: string[];
  dependencies: Dependencies[];
}

export interface TaskResponse {
  statusCode: number;
  message: string;
  data: Task | undefined;
}

export interface TasksResponse {
  statusCode?: number | undefined;
  message?: string | undefined;
  data: Task[];
}

export interface TaskColumn {
  id: string;
  name: string;
  limit: number;
  order: number;
  projectId: string;
}

export interface TaskColumnResponse {
  statusCode: number;
  message: string;
  data: TaskColumn | undefined;
}

export interface TaskColumnsResponse {
  statusCode: number;
  message: string;
  data: TaskColumn[];
}

export interface FindAllTaskColumnRequest {
  projectId: number;
}

export interface CreateTaskColumnRequest {
  name: string;
  limit?: number | undefined;
  order: number;
  projectId: string;
}

export interface UpdateTaskColumnRequest {
  id: string;
  name?: string | undefined;
  order?: number | undefined;
  limit?: number | undefined;
}

export interface RemoveTaskColumnRequest {
  id: string;
}

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

function createBaseFindAllTasksRequest(): FindAllTasksRequest {
  return {
    id: undefined,
    name: undefined,
    featuredImage: undefined,
    description: undefined,
    status: undefined,
    priority: undefined,
    startDate: undefined,
    endDate: undefined,
    createdBy: undefined,
    projectId: undefined,
    taskColumnId: undefined,
    subtasks: [],
    assignees: [],
  };
}

export const FindAllTasksRequest = {
  encode(message: FindAllTasksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.featuredImage !== undefined) {
      writer.uint32(26).string(message.featuredImage);
    }
    if (message.description !== undefined) {
      writer.uint32(34).string(message.description);
    }
    if (message.status !== undefined) {
      writer.uint32(42).string(message.status);
    }
    if (message.priority !== undefined) {
      writer.uint32(50).string(message.priority);
    }
    if (message.startDate !== undefined) {
      writer.uint32(56).int32(message.startDate);
    }
    if (message.endDate !== undefined) {
      writer.uint32(64).int32(message.endDate);
    }
    if (message.createdBy !== undefined) {
      writer.uint32(74).string(message.createdBy);
    }
    if (message.projectId !== undefined) {
      writer.uint32(82).string(message.projectId);
    }
    if (message.taskColumnId !== undefined) {
      writer.uint32(90).string(message.taskColumnId);
    }
    for (const v of message.subtasks) {
      Subtasks.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.assignees) {
      writer.uint32(106).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindAllTasksRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindAllTasksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
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

          message.featuredImage = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.status = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.priority = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.startDate = reader.int32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.endDate = reader.int32();
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

          message.projectId = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.taskColumnId = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.subtasks.push(Subtasks.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.assignees.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindAllTasksRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      featuredImage: isSet(object.featuredImage) ? globalThis.String(object.featuredImage) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
      status: isSet(object.status) ? globalThis.String(object.status) : undefined,
      priority: isSet(object.priority) ? globalThis.String(object.priority) : undefined,
      startDate: isSet(object.startDate) ? globalThis.Number(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? globalThis.Number(object.endDate) : undefined,
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : undefined,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : undefined,
      taskColumnId: isSet(object.taskColumnId) ? globalThis.String(object.taskColumnId) : undefined,
      subtasks: globalThis.Array.isArray(object?.subtasks) ? object.subtasks.map((e: any) => Subtasks.fromJSON(e)) : [],
      assignees: globalThis.Array.isArray(object?.assignees)
        ? object.assignees.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: FindAllTasksRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.featuredImage !== undefined) {
      obj.featuredImage = message.featuredImage;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.status !== undefined) {
      obj.status = message.status;
    }
    if (message.priority !== undefined) {
      obj.priority = message.priority;
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
    if (message.projectId !== undefined) {
      obj.projectId = message.projectId;
    }
    if (message.taskColumnId !== undefined) {
      obj.taskColumnId = message.taskColumnId;
    }
    if (message.subtasks?.length) {
      obj.subtasks = message.subtasks.map((e) => Subtasks.toJSON(e));
    }
    if (message.assignees?.length) {
      obj.assignees = message.assignees;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindAllTasksRequest>, I>>(base?: I): FindAllTasksRequest {
    return FindAllTasksRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindAllTasksRequest>, I>>(object: I): FindAllTasksRequest {
    const message = createBaseFindAllTasksRequest();
    message.id = object.id ?? undefined;
    message.name = object.name ?? undefined;
    message.featuredImage = object.featuredImage ?? undefined;
    message.description = object.description ?? undefined;
    message.status = object.status ?? undefined;
    message.priority = object.priority ?? undefined;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.createdBy = object.createdBy ?? undefined;
    message.projectId = object.projectId ?? undefined;
    message.taskColumnId = object.taskColumnId ?? undefined;
    message.subtasks = object.subtasks?.map((e) => Subtasks.fromPartial(e)) || [];
    message.assignees = object.assignees?.map((e) => e) || [];
    return message;
  },
};

function createBaseFindAllTasksResponse(): FindAllTasksResponse {
  return { tasks: [] };
}

export const FindAllTasksResponse = {
  encode(message: FindAllTasksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tasks) {
      Task.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindAllTasksResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindAllTasksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tasks.push(Task.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindAllTasksResponse {
    return { tasks: globalThis.Array.isArray(object?.tasks) ? object.tasks.map((e: any) => Task.fromJSON(e)) : [] };
  },

  toJSON(message: FindAllTasksResponse): unknown {
    const obj: any = {};
    if (message.tasks?.length) {
      obj.tasks = message.tasks.map((e) => Task.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindAllTasksResponse>, I>>(base?: I): FindAllTasksResponse {
    return FindAllTasksResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindAllTasksResponse>, I>>(object: I): FindAllTasksResponse {
    const message = createBaseFindAllTasksResponse();
    message.tasks = object.tasks?.map((e) => Task.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFindOneTaskRequest(): FindOneTaskRequest {
  return { id: "" };
}

export const FindOneTaskRequest = {
  encode(message: FindOneTaskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindOneTaskRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindOneTaskRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindOneTaskRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: FindOneTaskRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindOneTaskRequest>, I>>(base?: I): FindOneTaskRequest {
    return FindOneTaskRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindOneTaskRequest>, I>>(object: I): FindOneTaskRequest {
    const message = createBaseFindOneTaskRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseFindOneTaskResponse(): FindOneTaskResponse {
  return { tasks: [] };
}

export const FindOneTaskResponse = {
  encode(message: FindOneTaskResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tasks) {
      Task.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindOneTaskResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindOneTaskResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tasks.push(Task.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindOneTaskResponse {
    return { tasks: globalThis.Array.isArray(object?.tasks) ? object.tasks.map((e: any) => Task.fromJSON(e)) : [] };
  },

  toJSON(message: FindOneTaskResponse): unknown {
    const obj: any = {};
    if (message.tasks?.length) {
      obj.tasks = message.tasks.map((e) => Task.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindOneTaskResponse>, I>>(base?: I): FindOneTaskResponse {
    return FindOneTaskResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindOneTaskResponse>, I>>(object: I): FindOneTaskResponse {
    const message = createBaseFindOneTaskResponse();
    message.tasks = object.tasks?.map((e) => Task.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateTaskRequest(): CreateTaskRequest {
  return {
    name: undefined,
    featuredImage: undefined,
    description: undefined,
    status: undefined,
    priority: undefined,
    startDate: undefined,
    endDate: undefined,
    createdBy: undefined,
    projectId: undefined,
    taskColumnId: undefined,
    subtasks: [],
    assignees: [],
    dependencies: [],
  };
}

export const CreateTaskRequest = {
  encode(message: CreateTaskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.featuredImage !== undefined) {
      writer.uint32(18).string(message.featuredImage);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.status !== undefined) {
      writer.uint32(34).string(message.status);
    }
    if (message.priority !== undefined) {
      writer.uint32(42).string(message.priority);
    }
    if (message.startDate !== undefined) {
      writer.uint32(48).int32(message.startDate);
    }
    if (message.endDate !== undefined) {
      writer.uint32(56).int32(message.endDate);
    }
    if (message.createdBy !== undefined) {
      writer.uint32(66).string(message.createdBy);
    }
    if (message.projectId !== undefined) {
      writer.uint32(74).string(message.projectId);
    }
    if (message.taskColumnId !== undefined) {
      writer.uint32(82).string(message.taskColumnId);
    }
    for (const v of message.subtasks) {
      Subtasks.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.assignees) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.dependencies) {
      Dependencies.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTaskRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTaskRequest();
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

          message.featuredImage = reader.string();
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

          message.status = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.priority = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.startDate = reader.int32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.endDate = reader.int32();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.createdBy = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.projectId = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.taskColumnId = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.subtasks.push(Subtasks.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.assignees.push(reader.string());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.dependencies.push(Dependencies.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTaskRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      featuredImage: isSet(object.featuredImage) ? globalThis.String(object.featuredImage) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
      status: isSet(object.status) ? globalThis.String(object.status) : undefined,
      priority: isSet(object.priority) ? globalThis.String(object.priority) : undefined,
      startDate: isSet(object.startDate) ? globalThis.Number(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? globalThis.Number(object.endDate) : undefined,
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : undefined,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : undefined,
      taskColumnId: isSet(object.taskColumnId) ? globalThis.String(object.taskColumnId) : undefined,
      subtasks: globalThis.Array.isArray(object?.subtasks) ? object.subtasks.map((e: any) => Subtasks.fromJSON(e)) : [],
      assignees: globalThis.Array.isArray(object?.assignees)
        ? object.assignees.map((e: any) => globalThis.String(e))
        : [],
      dependencies: globalThis.Array.isArray(object?.dependencies)
        ? object.dependencies.map((e: any) => Dependencies.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CreateTaskRequest): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.featuredImage !== undefined) {
      obj.featuredImage = message.featuredImage;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.status !== undefined) {
      obj.status = message.status;
    }
    if (message.priority !== undefined) {
      obj.priority = message.priority;
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
    if (message.projectId !== undefined) {
      obj.projectId = message.projectId;
    }
    if (message.taskColumnId !== undefined) {
      obj.taskColumnId = message.taskColumnId;
    }
    if (message.subtasks?.length) {
      obj.subtasks = message.subtasks.map((e) => Subtasks.toJSON(e));
    }
    if (message.assignees?.length) {
      obj.assignees = message.assignees;
    }
    if (message.dependencies?.length) {
      obj.dependencies = message.dependencies.map((e) => Dependencies.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTaskRequest>, I>>(base?: I): CreateTaskRequest {
    return CreateTaskRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTaskRequest>, I>>(object: I): CreateTaskRequest {
    const message = createBaseCreateTaskRequest();
    message.name = object.name ?? undefined;
    message.featuredImage = object.featuredImage ?? undefined;
    message.description = object.description ?? undefined;
    message.status = object.status ?? undefined;
    message.priority = object.priority ?? undefined;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.createdBy = object.createdBy ?? undefined;
    message.projectId = object.projectId ?? undefined;
    message.taskColumnId = object.taskColumnId ?? undefined;
    message.subtasks = object.subtasks?.map((e) => Subtasks.fromPartial(e)) || [];
    message.assignees = object.assignees?.map((e) => e) || [];
    message.dependencies = object.dependencies?.map((e) => Dependencies.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateTaskRequest(): UpdateTaskRequest {
  return {
    id: "",
    name: undefined,
    featuredImage: undefined,
    description: undefined,
    status: undefined,
    priority: undefined,
    startDate: undefined,
    endDate: undefined,
    taskColumnId: undefined,
    subtasks: [],
    assignees: [],
    dependencies: [],
  };
}

export const UpdateTaskRequest = {
  encode(message: UpdateTaskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.featuredImage !== undefined) {
      writer.uint32(26).string(message.featuredImage);
    }
    if (message.description !== undefined) {
      writer.uint32(34).string(message.description);
    }
    if (message.status !== undefined) {
      writer.uint32(42).string(message.status);
    }
    if (message.priority !== undefined) {
      writer.uint32(50).string(message.priority);
    }
    if (message.startDate !== undefined) {
      writer.uint32(56).int32(message.startDate);
    }
    if (message.endDate !== undefined) {
      writer.uint32(64).int32(message.endDate);
    }
    if (message.taskColumnId !== undefined) {
      writer.uint32(74).string(message.taskColumnId);
    }
    for (const v of message.subtasks) {
      Subtasks.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.assignees) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.dependencies) {
      Dependencies.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTaskRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTaskRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
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

          message.featuredImage = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.status = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.priority = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.startDate = reader.int32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.endDate = reader.int32();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.taskColumnId = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.subtasks.push(Subtasks.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.assignees.push(reader.string());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.dependencies.push(Dependencies.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTaskRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      featuredImage: isSet(object.featuredImage) ? globalThis.String(object.featuredImage) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
      status: isSet(object.status) ? globalThis.String(object.status) : undefined,
      priority: isSet(object.priority) ? globalThis.String(object.priority) : undefined,
      startDate: isSet(object.startDate) ? globalThis.Number(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? globalThis.Number(object.endDate) : undefined,
      taskColumnId: isSet(object.taskColumnId) ? globalThis.String(object.taskColumnId) : undefined,
      subtasks: globalThis.Array.isArray(object?.subtasks) ? object.subtasks.map((e: any) => Subtasks.fromJSON(e)) : [],
      assignees: globalThis.Array.isArray(object?.assignees)
        ? object.assignees.map((e: any) => globalThis.String(e))
        : [],
      dependencies: globalThis.Array.isArray(object?.dependencies)
        ? object.dependencies.map((e: any) => Dependencies.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateTaskRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.featuredImage !== undefined) {
      obj.featuredImage = message.featuredImage;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.status !== undefined) {
      obj.status = message.status;
    }
    if (message.priority !== undefined) {
      obj.priority = message.priority;
    }
    if (message.startDate !== undefined) {
      obj.startDate = Math.round(message.startDate);
    }
    if (message.endDate !== undefined) {
      obj.endDate = Math.round(message.endDate);
    }
    if (message.taskColumnId !== undefined) {
      obj.taskColumnId = message.taskColumnId;
    }
    if (message.subtasks?.length) {
      obj.subtasks = message.subtasks.map((e) => Subtasks.toJSON(e));
    }
    if (message.assignees?.length) {
      obj.assignees = message.assignees;
    }
    if (message.dependencies?.length) {
      obj.dependencies = message.dependencies.map((e) => Dependencies.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTaskRequest>, I>>(base?: I): UpdateTaskRequest {
    return UpdateTaskRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTaskRequest>, I>>(object: I): UpdateTaskRequest {
    const message = createBaseUpdateTaskRequest();
    message.id = object.id ?? "";
    message.name = object.name ?? undefined;
    message.featuredImage = object.featuredImage ?? undefined;
    message.description = object.description ?? undefined;
    message.status = object.status ?? undefined;
    message.priority = object.priority ?? undefined;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.taskColumnId = object.taskColumnId ?? undefined;
    message.subtasks = object.subtasks?.map((e) => Subtasks.fromPartial(e)) || [];
    message.assignees = object.assignees?.map((e) => e) || [];
    message.dependencies = object.dependencies?.map((e) => Dependencies.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeleteTaskRequest(): DeleteTaskRequest {
  return { id: "" };
}

export const DeleteTaskRequest = {
  encode(message: DeleteTaskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTaskRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTaskRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteTaskRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: DeleteTaskRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteTaskRequest>, I>>(base?: I): DeleteTaskRequest {
    return DeleteTaskRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteTaskRequest>, I>>(object: I): DeleteTaskRequest {
    const message = createBaseDeleteTaskRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseSubtasks(): Subtasks {
  return { id: undefined, label: "", status: false };
}

export const Subtasks = {
  encode(message: Subtasks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    if (message.status !== false) {
      writer.uint32(24).bool(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subtasks {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubtasks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.label = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Subtasks {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      label: isSet(object.label) ? globalThis.String(object.label) : "",
      status: isSet(object.status) ? globalThis.Boolean(object.status) : false,
    };
  },

  toJSON(message: Subtasks): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.status !== false) {
      obj.status = message.status;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Subtasks>, I>>(base?: I): Subtasks {
    return Subtasks.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Subtasks>, I>>(object: I): Subtasks {
    const message = createBaseSubtasks();
    message.id = object.id ?? undefined;
    message.label = object.label ?? "";
    message.status = object.status ?? false;
    return message;
  },
};

function createBaseDependencies(): Dependencies {
  return { id: undefined, from: "", to: "", type: "", lagTime: 0 };
}

export const Dependencies = {
  encode(message: Dependencies, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    if (message.type !== "") {
      writer.uint32(34).string(message.type);
    }
    if (message.lagTime !== 0) {
      writer.uint32(40).int32(message.lagTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dependencies {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDependencies();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.from = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.to = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.type = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.lagTime = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Dependencies {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      to: isSet(object.to) ? globalThis.String(object.to) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      lagTime: isSet(object.lagTime) ? globalThis.Number(object.lagTime) : 0,
    };
  },

  toJSON(message: Dependencies): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.to !== "") {
      obj.to = message.to;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.lagTime !== 0) {
      obj.lagTime = Math.round(message.lagTime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Dependencies>, I>>(base?: I): Dependencies {
    return Dependencies.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Dependencies>, I>>(object: I): Dependencies {
    const message = createBaseDependencies();
    message.id = object.id ?? undefined;
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.type = object.type ?? "";
    message.lagTime = object.lagTime ?? 0;
    return message;
  },
};

function createBaseTask(): Task {
  return {
    id: "",
    name: "",
    featuredImage: "",
    description: "",
    status: "",
    priority: "",
    startDate: 0,
    endDate: 0,
    createdBy: "",
    taskColumnId: "",
    subtasks: [],
    assignees: [],
    dependencies: [],
  };
}

export const Task = {
  encode(message: Task, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.featuredImage !== "") {
      writer.uint32(26).string(message.featuredImage);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    if (message.priority !== "") {
      writer.uint32(50).string(message.priority);
    }
    if (message.startDate !== 0) {
      writer.uint32(56).int32(message.startDate);
    }
    if (message.endDate !== 0) {
      writer.uint32(64).int32(message.endDate);
    }
    if (message.createdBy !== "") {
      writer.uint32(74).string(message.createdBy);
    }
    if (message.taskColumnId !== "") {
      writer.uint32(82).string(message.taskColumnId);
    }
    for (const v of message.subtasks) {
      Subtasks.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.assignees) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.dependencies) {
      Dependencies.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Task {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
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

          message.featuredImage = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.status = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.priority = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.startDate = reader.int32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.endDate = reader.int32();
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

          message.taskColumnId = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.subtasks.push(Subtasks.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.assignees.push(reader.string());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.dependencies.push(Dependencies.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Task {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      featuredImage: isSet(object.featuredImage) ? globalThis.String(object.featuredImage) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      priority: isSet(object.priority) ? globalThis.String(object.priority) : "",
      startDate: isSet(object.startDate) ? globalThis.Number(object.startDate) : 0,
      endDate: isSet(object.endDate) ? globalThis.Number(object.endDate) : 0,
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : "",
      taskColumnId: isSet(object.taskColumnId) ? globalThis.String(object.taskColumnId) : "",
      subtasks: globalThis.Array.isArray(object?.subtasks) ? object.subtasks.map((e: any) => Subtasks.fromJSON(e)) : [],
      assignees: globalThis.Array.isArray(object?.assignees)
        ? object.assignees.map((e: any) => globalThis.String(e))
        : [],
      dependencies: globalThis.Array.isArray(object?.dependencies)
        ? object.dependencies.map((e: any) => Dependencies.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Task): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.featuredImage !== "") {
      obj.featuredImage = message.featuredImage;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.priority !== "") {
      obj.priority = message.priority;
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
    if (message.taskColumnId !== "") {
      obj.taskColumnId = message.taskColumnId;
    }
    if (message.subtasks?.length) {
      obj.subtasks = message.subtasks.map((e) => Subtasks.toJSON(e));
    }
    if (message.assignees?.length) {
      obj.assignees = message.assignees;
    }
    if (message.dependencies?.length) {
      obj.dependencies = message.dependencies.map((e) => Dependencies.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Task>, I>>(base?: I): Task {
    return Task.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Task>, I>>(object: I): Task {
    const message = createBaseTask();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.featuredImage = object.featuredImage ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? "";
    message.priority = object.priority ?? "";
    message.startDate = object.startDate ?? 0;
    message.endDate = object.endDate ?? 0;
    message.createdBy = object.createdBy ?? "";
    message.taskColumnId = object.taskColumnId ?? "";
    message.subtasks = object.subtasks?.map((e) => Subtasks.fromPartial(e)) || [];
    message.assignees = object.assignees?.map((e) => e) || [];
    message.dependencies = object.dependencies?.map((e) => Dependencies.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTaskResponse(): TaskResponse {
  return { statusCode: 0, message: "", data: undefined };
}

export const TaskResponse = {
  encode(message: TaskResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusCode !== 0) {
      writer.uint32(8).int32(message.statusCode);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.data !== undefined) {
      Task.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskResponse();
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

          message.data = Task.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TaskResponse {
    return {
      statusCode: isSet(object.statusCode) ? globalThis.Number(object.statusCode) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      data: isSet(object.data) ? Task.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: TaskResponse): unknown {
    const obj: any = {};
    if (message.statusCode !== 0) {
      obj.statusCode = Math.round(message.statusCode);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.data !== undefined) {
      obj.data = Task.toJSON(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TaskResponse>, I>>(base?: I): TaskResponse {
    return TaskResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TaskResponse>, I>>(object: I): TaskResponse {
    const message = createBaseTaskResponse();
    message.statusCode = object.statusCode ?? 0;
    message.message = object.message ?? "";
    message.data = (object.data !== undefined && object.data !== null) ? Task.fromPartial(object.data) : undefined;
    return message;
  },
};

function createBaseTasksResponse(): TasksResponse {
  return { statusCode: undefined, message: undefined, data: [] };
}

export const TasksResponse = {
  encode(message: TasksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusCode !== undefined) {
      writer.uint32(8).int32(message.statusCode);
    }
    if (message.message !== undefined) {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.data) {
      Task.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TasksResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTasksResponse();
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

          message.data.push(Task.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TasksResponse {
    return {
      statusCode: isSet(object.statusCode) ? globalThis.Number(object.statusCode) : undefined,
      message: isSet(object.message) ? globalThis.String(object.message) : undefined,
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => Task.fromJSON(e)) : [],
    };
  },

  toJSON(message: TasksResponse): unknown {
    const obj: any = {};
    if (message.statusCode !== undefined) {
      obj.statusCode = Math.round(message.statusCode);
    }
    if (message.message !== undefined) {
      obj.message = message.message;
    }
    if (message.data?.length) {
      obj.data = message.data.map((e) => Task.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TasksResponse>, I>>(base?: I): TasksResponse {
    return TasksResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TasksResponse>, I>>(object: I): TasksResponse {
    const message = createBaseTasksResponse();
    message.statusCode = object.statusCode ?? undefined;
    message.message = object.message ?? undefined;
    message.data = object.data?.map((e) => Task.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTaskColumn(): TaskColumn {
  return { id: "", name: "", limit: 0, order: 0, projectId: "" };
}

export const TaskColumn = {
  encode(message: TaskColumn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.limit !== 0) {
      writer.uint32(24).int32(message.limit);
    }
    if (message.order !== 0) {
      writer.uint32(32).int32(message.order);
    }
    if (message.projectId !== "") {
      writer.uint32(42).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskColumn {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskColumn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
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

          message.limit = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.order = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): TaskColumn {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      order: isSet(object.order) ? globalThis.Number(object.order) : 0,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: TaskColumn): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.order !== 0) {
      obj.order = Math.round(message.order);
    }
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TaskColumn>, I>>(base?: I): TaskColumn {
    return TaskColumn.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TaskColumn>, I>>(object: I): TaskColumn {
    const message = createBaseTaskColumn();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.limit = object.limit ?? 0;
    message.order = object.order ?? 0;
    message.projectId = object.projectId ?? "";
    return message;
  },
};

function createBaseTaskColumnResponse(): TaskColumnResponse {
  return { statusCode: 0, message: "", data: undefined };
}

export const TaskColumnResponse = {
  encode(message: TaskColumnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusCode !== 0) {
      writer.uint32(8).int32(message.statusCode);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.data !== undefined) {
      TaskColumn.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskColumnResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskColumnResponse();
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

          message.data = TaskColumn.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TaskColumnResponse {
    return {
      statusCode: isSet(object.statusCode) ? globalThis.Number(object.statusCode) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      data: isSet(object.data) ? TaskColumn.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: TaskColumnResponse): unknown {
    const obj: any = {};
    if (message.statusCode !== 0) {
      obj.statusCode = Math.round(message.statusCode);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.data !== undefined) {
      obj.data = TaskColumn.toJSON(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TaskColumnResponse>, I>>(base?: I): TaskColumnResponse {
    return TaskColumnResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TaskColumnResponse>, I>>(object: I): TaskColumnResponse {
    const message = createBaseTaskColumnResponse();
    message.statusCode = object.statusCode ?? 0;
    message.message = object.message ?? "";
    message.data = (object.data !== undefined && object.data !== null)
      ? TaskColumn.fromPartial(object.data)
      : undefined;
    return message;
  },
};

function createBaseTaskColumnsResponse(): TaskColumnsResponse {
  return { statusCode: 0, message: "", data: [] };
}

export const TaskColumnsResponse = {
  encode(message: TaskColumnsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusCode !== 0) {
      writer.uint32(8).int32(message.statusCode);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.data) {
      TaskColumn.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskColumnsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskColumnsResponse();
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

          message.data.push(TaskColumn.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TaskColumnsResponse {
    return {
      statusCode: isSet(object.statusCode) ? globalThis.Number(object.statusCode) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => TaskColumn.fromJSON(e)) : [],
    };
  },

  toJSON(message: TaskColumnsResponse): unknown {
    const obj: any = {};
    if (message.statusCode !== 0) {
      obj.statusCode = Math.round(message.statusCode);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.data?.length) {
      obj.data = message.data.map((e) => TaskColumn.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TaskColumnsResponse>, I>>(base?: I): TaskColumnsResponse {
    return TaskColumnsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TaskColumnsResponse>, I>>(object: I): TaskColumnsResponse {
    const message = createBaseTaskColumnsResponse();
    message.statusCode = object.statusCode ?? 0;
    message.message = object.message ?? "";
    message.data = object.data?.map((e) => TaskColumn.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFindAllTaskColumnRequest(): FindAllTaskColumnRequest {
  return { projectId: 0 };
}

export const FindAllTaskColumnRequest = {
  encode(message: FindAllTaskColumnRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindAllTaskColumnRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindAllTaskColumnRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.projectId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindAllTaskColumnRequest {
    return { projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : 0 };
  },

  toJSON(message: FindAllTaskColumnRequest): unknown {
    const obj: any = {};
    if (message.projectId !== 0) {
      obj.projectId = Math.round(message.projectId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindAllTaskColumnRequest>, I>>(base?: I): FindAllTaskColumnRequest {
    return FindAllTaskColumnRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindAllTaskColumnRequest>, I>>(object: I): FindAllTaskColumnRequest {
    const message = createBaseFindAllTaskColumnRequest();
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseCreateTaskColumnRequest(): CreateTaskColumnRequest {
  return { name: "", limit: undefined, order: 0, projectId: "" };
}

export const CreateTaskColumnRequest = {
  encode(message: CreateTaskColumnRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.limit !== undefined) {
      writer.uint32(16).int32(message.limit);
    }
    if (message.order !== 0) {
      writer.uint32(24).int32(message.order);
    }
    if (message.projectId !== "") {
      writer.uint32(34).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTaskColumnRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTaskColumnRequest();
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

          message.limit = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.order = reader.int32();
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

  fromJSON(object: any): CreateTaskColumnRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : undefined,
      order: isSet(object.order) ? globalThis.Number(object.order) : 0,
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: CreateTaskColumnRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.limit !== undefined) {
      obj.limit = Math.round(message.limit);
    }
    if (message.order !== 0) {
      obj.order = Math.round(message.order);
    }
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTaskColumnRequest>, I>>(base?: I): CreateTaskColumnRequest {
    return CreateTaskColumnRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTaskColumnRequest>, I>>(object: I): CreateTaskColumnRequest {
    const message = createBaseCreateTaskColumnRequest();
    message.name = object.name ?? "";
    message.limit = object.limit ?? undefined;
    message.order = object.order ?? 0;
    message.projectId = object.projectId ?? "";
    return message;
  },
};

function createBaseUpdateTaskColumnRequest(): UpdateTaskColumnRequest {
  return { id: "", name: undefined, order: undefined, limit: undefined };
}

export const UpdateTaskColumnRequest = {
  encode(message: UpdateTaskColumnRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.order !== undefined) {
      writer.uint32(24).int32(message.order);
    }
    if (message.limit !== undefined) {
      writer.uint32(32).int32(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTaskColumnRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTaskColumnRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
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

          message.order = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.limit = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTaskColumnRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      order: isSet(object.order) ? globalThis.Number(object.order) : undefined,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : undefined,
    };
  },

  toJSON(message: UpdateTaskColumnRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.order !== undefined) {
      obj.order = Math.round(message.order);
    }
    if (message.limit !== undefined) {
      obj.limit = Math.round(message.limit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTaskColumnRequest>, I>>(base?: I): UpdateTaskColumnRequest {
    return UpdateTaskColumnRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTaskColumnRequest>, I>>(object: I): UpdateTaskColumnRequest {
    const message = createBaseUpdateTaskColumnRequest();
    message.id = object.id ?? "";
    message.name = object.name ?? undefined;
    message.order = object.order ?? undefined;
    message.limit = object.limit ?? undefined;
    return message;
  },
};

function createBaseRemoveTaskColumnRequest(): RemoveTaskColumnRequest {
  return { id: "" };
}

export const RemoveTaskColumnRequest = {
  encode(message: RemoveTaskColumnRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveTaskColumnRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveTaskColumnRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveTaskColumnRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: RemoveTaskColumnRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveTaskColumnRequest>, I>>(base?: I): RemoveTaskColumnRequest {
    return RemoveTaskColumnRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveTaskColumnRequest>, I>>(object: I): RemoveTaskColumnRequest {
    const message = createBaseRemoveTaskColumnRequest();
    message.id = object.id ?? "";
    return message;
  },
};

export interface TasksService {
  FindAllTasks(request: FindAllTasksRequest): Promise<TasksResponse>;
  FindOneTask(request: FindOneTaskRequest): Promise<TasksResponse>;
  CreateTask(request: CreateTaskRequest): Promise<TaskResponse>;
  UpdateTask(request: UpdateTaskRequest): Promise<TaskResponse>;
  DeleteTask(request: DeleteTaskRequest): Promise<TaskResponse>;
  FindAllTaskColumn(request: FindAllTaskColumnRequest): Promise<TaskColumnsResponse>;
  CreateTaskColumn(request: CreateTaskColumnRequest): Promise<TaskColumnResponse>;
  UpdateTaskColumn(request: UpdateTaskColumnRequest): Promise<TaskColumnResponse>;
  RemoveTaskColumn(request: RemoveTaskColumnRequest): Promise<TaskColumnResponse>;
}

export const TasksServiceServiceName = "task.TasksService";
export class TasksServiceClientImpl implements TasksService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || TasksServiceServiceName;
    this.rpc = rpc;
    this.FindAllTasks = this.FindAllTasks.bind(this);
    this.FindOneTask = this.FindOneTask.bind(this);
    this.CreateTask = this.CreateTask.bind(this);
    this.UpdateTask = this.UpdateTask.bind(this);
    this.DeleteTask = this.DeleteTask.bind(this);
    this.FindAllTaskColumn = this.FindAllTaskColumn.bind(this);
    this.CreateTaskColumn = this.CreateTaskColumn.bind(this);
    this.UpdateTaskColumn = this.UpdateTaskColumn.bind(this);
    this.RemoveTaskColumn = this.RemoveTaskColumn.bind(this);
  }
  FindAllTasks(request: FindAllTasksRequest): Promise<TasksResponse> {
    const data = FindAllTasksRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindAllTasks", data);
    return promise.then((data) => TasksResponse.decode(_m0.Reader.create(data)));
  }

  FindOneTask(request: FindOneTaskRequest): Promise<TasksResponse> {
    const data = FindOneTaskRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindOneTask", data);
    return promise.then((data) => TasksResponse.decode(_m0.Reader.create(data)));
  }

  CreateTask(request: CreateTaskRequest): Promise<TaskResponse> {
    const data = CreateTaskRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateTask", data);
    return promise.then((data) => TaskResponse.decode(_m0.Reader.create(data)));
  }

  UpdateTask(request: UpdateTaskRequest): Promise<TaskResponse> {
    const data = UpdateTaskRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateTask", data);
    return promise.then((data) => TaskResponse.decode(_m0.Reader.create(data)));
  }

  DeleteTask(request: DeleteTaskRequest): Promise<TaskResponse> {
    const data = DeleteTaskRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteTask", data);
    return promise.then((data) => TaskResponse.decode(_m0.Reader.create(data)));
  }

  FindAllTaskColumn(request: FindAllTaskColumnRequest): Promise<TaskColumnsResponse> {
    const data = FindAllTaskColumnRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindAllTaskColumn", data);
    return promise.then((data) => TaskColumnsResponse.decode(_m0.Reader.create(data)));
  }

  CreateTaskColumn(request: CreateTaskColumnRequest): Promise<TaskColumnResponse> {
    const data = CreateTaskColumnRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateTaskColumn", data);
    return promise.then((data) => TaskColumnResponse.decode(_m0.Reader.create(data)));
  }

  UpdateTaskColumn(request: UpdateTaskColumnRequest): Promise<TaskColumnResponse> {
    const data = UpdateTaskColumnRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateTaskColumn", data);
    return promise.then((data) => TaskColumnResponse.decode(_m0.Reader.create(data)));
  }

  RemoveTaskColumn(request: RemoveTaskColumnRequest): Promise<TaskColumnResponse> {
    const data = RemoveTaskColumnRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveTaskColumn", data);
    return promise.then((data) => TaskColumnResponse.decode(_m0.Reader.create(data)));
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

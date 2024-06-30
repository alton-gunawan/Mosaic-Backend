/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Duration } from "./google/protobuf/duration";
import { Empty } from "./google/protobuf/empty";
import { Timestamp } from "./google/protobuf/timestamp";
import { Resource } from "./resource";

export const protobufPackage = "packages.task";

export enum TaskStatus {
  PENDING = 0,
  OPEN = 1,
  WORK_IN_PROGRESS = 2,
  COMPLETED = 3,
  UNRECOGNIZED = -1,
}

export function taskStatusFromJSON(object: any): TaskStatus {
  switch (object) {
    case 0:
    case "PENDING":
      return TaskStatus.PENDING;
    case 1:
    case "OPEN":
      return TaskStatus.OPEN;
    case 2:
    case "WORK_IN_PROGRESS":
      return TaskStatus.WORK_IN_PROGRESS;
    case 3:
    case "COMPLETED":
      return TaskStatus.COMPLETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TaskStatus.UNRECOGNIZED;
  }
}

export function taskStatusToJSON(object: TaskStatus): string {
  switch (object) {
    case TaskStatus.PENDING:
      return "PENDING";
    case TaskStatus.OPEN:
      return "OPEN";
    case TaskStatus.WORK_IN_PROGRESS:
      return "WORK_IN_PROGRESS";
    case TaskStatus.COMPLETED:
      return "COMPLETED";
    case TaskStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TaskPriority {
  HIGH = 0,
  MEDIUM = 1,
  LOW = 2,
  UNRECOGNIZED = -1,
}

export function taskPriorityFromJSON(object: any): TaskPriority {
  switch (object) {
    case 0:
    case "HIGH":
      return TaskPriority.HIGH;
    case 1:
    case "MEDIUM":
      return TaskPriority.MEDIUM;
    case 2:
    case "LOW":
      return TaskPriority.LOW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TaskPriority.UNRECOGNIZED;
  }
}

export function taskPriorityToJSON(object: TaskPriority): string {
  switch (object) {
    case TaskPriority.HIGH:
      return "HIGH";
    case TaskPriority.MEDIUM:
      return "MEDIUM";
    case TaskPriority.LOW:
      return "LOW";
    case TaskPriority.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Datestamps {
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;
}

export interface FindAllTasksResponse {
  tasks: Task[];
}

export interface ListTasksRequest {
  id?: number | undefined;
  createdBy?: string | undefined;
  projectId?: number | undefined;
  taskColumnId?: number | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
}

export interface CreateTaskRequest {
  name: string;
  featuredImage: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  startDate: Date | undefined;
  duration: Duration | undefined;
  predecessor: string;
  subtasks: Subtask[];
  order: number;
  createdBy: string;
  assignedTo: string[];
  issueId?: number | undefined;
  taskColumnId: number;
  projectId: number;
}

export interface UpdateTaskRequest {
  id: number;
  name: string;
  featuredImage: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  startDate: Date | undefined;
  duration: Duration | undefined;
  predecessor: string;
  subtasks: Subtask[];
  resources: Resource[];
  order: number;
  assignedTo: string[];
  issueId?: number | undefined;
  taskColumnId: number;
  projectId: number;
}

export interface DeleteTaskRequest {
  id: number;
}

export interface Subtask {
  id: number;
  label: string;
  status: boolean;
}

export interface TaskAssignees {
  id: number;
  userId: string;
  taskId: number;
}

export interface Task {
  id: number;
  name: string;
  featuredImage: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  startDate: Date | undefined;
  duration: Duration | undefined;
  predecessor: string;
  subtasks: Subtask[];
  resources: Resource[];
  order: number;
  createdBy: string;
  assignedTo: string[];
  issueId?: number | undefined;
  taskColumnId: number;
  projectId: number;
  taskAssignees: TaskAssignees[];
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  deletedAt?: Date | undefined;
}

export interface TasksList {
  data: Task[];
}

export interface ErrorResponse {
  statusCode: number;
  message: string;
}

export interface TaskResponse {
  data?: TasksList | undefined;
  error?: ErrorResponse | undefined;
}

export interface TaskColumn {
  id: number;
  name: string;
  limit: number;
  order: number;
  projectId: number;
  task: Task[];
  datestamps: Datestamps | undefined;
}

export interface TaskColumnsList {
  data: TaskColumn[];
}

export interface TaskColumnResponse {
  data?: TaskColumnsList | undefined;
  error?: ErrorResponse | undefined;
}

export interface ListTaskColumnsRequest {
  projectId: number;
}

export interface CreateTaskColumnRequest {
  name: string;
  limit: number;
  order: number;
  projectId: number;
}

export interface UpdateTaskColumnRequest {
  id: number;
  name: string;
  order: number;
  limit: number;
}

export interface DeleteTaskColumnRequest {
  id: number;
}

export interface AssignTaskRequest {
  taskId: number;
  userId: string[];
}

export interface RemoveAssigneeRequest {
  taskAssigneeId: number;
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

function createBaseListTasksRequest(): ListTasksRequest {
  return {
    id: undefined,
    createdBy: undefined,
    projectId: undefined,
    taskColumnId: undefined,
    limit: undefined,
    offset: undefined,
  };
}

export const ListTasksRequest = {
  encode(message: ListTasksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.createdBy !== undefined) {
      writer.uint32(18).string(message.createdBy);
    }
    if (message.projectId !== undefined) {
      writer.uint32(24).uint32(message.projectId);
    }
    if (message.taskColumnId !== undefined) {
      writer.uint32(32).uint32(message.taskColumnId);
    }
    if (message.limit !== undefined) {
      writer.uint32(40).uint32(message.limit);
    }
    if (message.offset !== undefined) {
      writer.uint32(48).uint32(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTasksRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTasksRequest();
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

          message.projectId = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.taskColumnId = reader.uint32();
          continue;
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

  fromJSON(object: any): ListTasksRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : undefined,
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : undefined,
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : undefined,
      taskColumnId: isSet(object.taskColumnId) ? globalThis.Number(object.taskColumnId) : undefined,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : undefined,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : undefined,
    };
  },

  toJSON(message: ListTasksRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = Math.round(message.id);
    }
    if (message.createdBy !== undefined) {
      obj.createdBy = message.createdBy;
    }
    if (message.projectId !== undefined) {
      obj.projectId = Math.round(message.projectId);
    }
    if (message.taskColumnId !== undefined) {
      obj.taskColumnId = Math.round(message.taskColumnId);
    }
    if (message.limit !== undefined) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== undefined) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListTasksRequest>, I>>(base?: I): ListTasksRequest {
    return ListTasksRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTasksRequest>, I>>(object: I): ListTasksRequest {
    const message = createBaseListTasksRequest();
    message.id = object.id ?? undefined;
    message.createdBy = object.createdBy ?? undefined;
    message.projectId = object.projectId ?? undefined;
    message.taskColumnId = object.taskColumnId ?? undefined;
    message.limit = object.limit ?? undefined;
    message.offset = object.offset ?? undefined;
    return message;
  },
};

function createBaseCreateTaskRequest(): CreateTaskRequest {
  return {
    name: "",
    featuredImage: "",
    description: "",
    status: 0,
    priority: 0,
    startDate: undefined,
    duration: undefined,
    predecessor: "",
    subtasks: [],
    order: 0,
    createdBy: "",
    assignedTo: [],
    issueId: undefined,
    taskColumnId: 0,
    projectId: 0,
  };
}

export const CreateTaskRequest = {
  encode(message: CreateTaskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.featuredImage !== "") {
      writer.uint32(26).string(message.featuredImage);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.priority !== 0) {
      writer.uint32(48).int32(message.priority);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(58).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(66).fork()).ldelim();
    }
    if (message.predecessor !== "") {
      writer.uint32(74).string(message.predecessor);
    }
    for (const v of message.subtasks) {
      Subtask.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.order !== 0) {
      writer.uint32(88).uint32(message.order);
    }
    if (message.createdBy !== "") {
      writer.uint32(98).string(message.createdBy);
    }
    for (const v of message.assignedTo) {
      writer.uint32(114).string(v!);
    }
    if (message.issueId !== undefined) {
      writer.uint32(120).uint32(message.issueId);
    }
    if (message.taskColumnId !== 0) {
      writer.uint32(128).uint32(message.taskColumnId);
    }
    if (message.projectId !== 0) {
      writer.uint32(136).uint32(message.projectId);
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
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.priority = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.duration = Duration.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.predecessor = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.subtasks.push(Subtask.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.order = reader.uint32();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.createdBy = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.assignedTo.push(reader.string());
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.issueId = reader.uint32();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.taskColumnId = reader.uint32();
          continue;
        case 17:
          if (tag !== 136) {
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

  fromJSON(object: any): CreateTaskRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      featuredImage: isSet(object.featuredImage) ? globalThis.String(object.featuredImage) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      status: isSet(object.status) ? taskStatusFromJSON(object.status) : 0,
      priority: isSet(object.priority) ? taskPriorityFromJSON(object.priority) : 0,
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      predecessor: isSet(object.predecessor) ? globalThis.String(object.predecessor) : "",
      subtasks: globalThis.Array.isArray(object?.subtasks) ? object.subtasks.map((e: any) => Subtask.fromJSON(e)) : [],
      order: isSet(object.order) ? globalThis.Number(object.order) : 0,
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : "",
      assignedTo: globalThis.Array.isArray(object?.assignedTo)
        ? object.assignedTo.map((e: any) => globalThis.String(e))
        : [],
      issueId: isSet(object.issueId) ? globalThis.Number(object.issueId) : undefined,
      taskColumnId: isSet(object.taskColumnId) ? globalThis.Number(object.taskColumnId) : 0,
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : 0,
    };
  },

  toJSON(message: CreateTaskRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.featuredImage !== "") {
      obj.featuredImage = message.featuredImage;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.status !== 0) {
      obj.status = taskStatusToJSON(message.status);
    }
    if (message.priority !== 0) {
      obj.priority = taskPriorityToJSON(message.priority);
    }
    if (message.startDate !== undefined) {
      obj.startDate = message.startDate.toISOString();
    }
    if (message.duration !== undefined) {
      obj.duration = Duration.toJSON(message.duration);
    }
    if (message.predecessor !== "") {
      obj.predecessor = message.predecessor;
    }
    if (message.subtasks?.length) {
      obj.subtasks = message.subtasks.map((e) => Subtask.toJSON(e));
    }
    if (message.order !== 0) {
      obj.order = Math.round(message.order);
    }
    if (message.createdBy !== "") {
      obj.createdBy = message.createdBy;
    }
    if (message.assignedTo?.length) {
      obj.assignedTo = message.assignedTo;
    }
    if (message.issueId !== undefined) {
      obj.issueId = Math.round(message.issueId);
    }
    if (message.taskColumnId !== 0) {
      obj.taskColumnId = Math.round(message.taskColumnId);
    }
    if (message.projectId !== 0) {
      obj.projectId = Math.round(message.projectId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTaskRequest>, I>>(base?: I): CreateTaskRequest {
    return CreateTaskRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTaskRequest>, I>>(object: I): CreateTaskRequest {
    const message = createBaseCreateTaskRequest();
    message.name = object.name ?? "";
    message.featuredImage = object.featuredImage ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? 0;
    message.priority = object.priority ?? 0;
    message.startDate = object.startDate ?? undefined;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Duration.fromPartial(object.duration)
      : undefined;
    message.predecessor = object.predecessor ?? "";
    message.subtasks = object.subtasks?.map((e) => Subtask.fromPartial(e)) || [];
    message.order = object.order ?? 0;
    message.createdBy = object.createdBy ?? "";
    message.assignedTo = object.assignedTo?.map((e) => e) || [];
    message.issueId = object.issueId ?? undefined;
    message.taskColumnId = object.taskColumnId ?? 0;
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseUpdateTaskRequest(): UpdateTaskRequest {
  return {
    id: 0,
    name: "",
    featuredImage: "",
    description: "",
    status: 0,
    priority: 0,
    startDate: undefined,
    duration: undefined,
    predecessor: "",
    subtasks: [],
    resources: [],
    order: 0,
    assignedTo: [],
    issueId: undefined,
    taskColumnId: 0,
    projectId: 0,
  };
}

export const UpdateTaskRequest = {
  encode(message: UpdateTaskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
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
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.priority !== 0) {
      writer.uint32(48).int32(message.priority);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(58).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(66).fork()).ldelim();
    }
    if (message.predecessor !== "") {
      writer.uint32(74).string(message.predecessor);
    }
    for (const v of message.subtasks) {
      Subtask.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.order !== 0) {
      writer.uint32(96).uint32(message.order);
    }
    for (const v of message.assignedTo) {
      writer.uint32(106).string(v!);
    }
    if (message.issueId !== undefined) {
      writer.uint32(112).uint32(message.issueId);
    }
    if (message.taskColumnId !== 0) {
      writer.uint32(120).uint32(message.taskColumnId);
    }
    if (message.projectId !== 0) {
      writer.uint32(128).uint32(message.projectId);
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

          message.featuredImage = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.priority = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.duration = Duration.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.predecessor = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.subtasks.push(Subtask.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.resources.push(Resource.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.order = reader.uint32();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.assignedTo.push(reader.string());
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.issueId = reader.uint32();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.taskColumnId = reader.uint32();
          continue;
        case 16:
          if (tag !== 128) {
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

  fromJSON(object: any): UpdateTaskRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      featuredImage: isSet(object.featuredImage) ? globalThis.String(object.featuredImage) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      status: isSet(object.status) ? taskStatusFromJSON(object.status) : 0,
      priority: isSet(object.priority) ? taskPriorityFromJSON(object.priority) : 0,
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      predecessor: isSet(object.predecessor) ? globalThis.String(object.predecessor) : "",
      subtasks: globalThis.Array.isArray(object?.subtasks) ? object.subtasks.map((e: any) => Subtask.fromJSON(e)) : [],
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => Resource.fromJSON(e))
        : [],
      order: isSet(object.order) ? globalThis.Number(object.order) : 0,
      assignedTo: globalThis.Array.isArray(object?.assignedTo)
        ? object.assignedTo.map((e: any) => globalThis.String(e))
        : [],
      issueId: isSet(object.issueId) ? globalThis.Number(object.issueId) : undefined,
      taskColumnId: isSet(object.taskColumnId) ? globalThis.Number(object.taskColumnId) : 0,
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : 0,
    };
  },

  toJSON(message: UpdateTaskRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
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
    if (message.status !== 0) {
      obj.status = taskStatusToJSON(message.status);
    }
    if (message.priority !== 0) {
      obj.priority = taskPriorityToJSON(message.priority);
    }
    if (message.startDate !== undefined) {
      obj.startDate = message.startDate.toISOString();
    }
    if (message.duration !== undefined) {
      obj.duration = Duration.toJSON(message.duration);
    }
    if (message.predecessor !== "") {
      obj.predecessor = message.predecessor;
    }
    if (message.subtasks?.length) {
      obj.subtasks = message.subtasks.map((e) => Subtask.toJSON(e));
    }
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => Resource.toJSON(e));
    }
    if (message.order !== 0) {
      obj.order = Math.round(message.order);
    }
    if (message.assignedTo?.length) {
      obj.assignedTo = message.assignedTo;
    }
    if (message.issueId !== undefined) {
      obj.issueId = Math.round(message.issueId);
    }
    if (message.taskColumnId !== 0) {
      obj.taskColumnId = Math.round(message.taskColumnId);
    }
    if (message.projectId !== 0) {
      obj.projectId = Math.round(message.projectId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTaskRequest>, I>>(base?: I): UpdateTaskRequest {
    return UpdateTaskRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTaskRequest>, I>>(object: I): UpdateTaskRequest {
    const message = createBaseUpdateTaskRequest();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.featuredImage = object.featuredImage ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? 0;
    message.priority = object.priority ?? 0;
    message.startDate = object.startDate ?? undefined;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Duration.fromPartial(object.duration)
      : undefined;
    message.predecessor = object.predecessor ?? "";
    message.subtasks = object.subtasks?.map((e) => Subtask.fromPartial(e)) || [];
    message.resources = object.resources?.map((e) => Resource.fromPartial(e)) || [];
    message.order = object.order ?? 0;
    message.assignedTo = object.assignedTo?.map((e) => e) || [];
    message.issueId = object.issueId ?? undefined;
    message.taskColumnId = object.taskColumnId ?? 0;
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseDeleteTaskRequest(): DeleteTaskRequest {
  return { id: 0 };
}

export const DeleteTaskRequest = {
  encode(message: DeleteTaskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
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

  fromJSON(object: any): DeleteTaskRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: DeleteTaskRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteTaskRequest>, I>>(base?: I): DeleteTaskRequest {
    return DeleteTaskRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteTaskRequest>, I>>(object: I): DeleteTaskRequest {
    const message = createBaseDeleteTaskRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseSubtask(): Subtask {
  return { id: 0, label: "", status: false };
}

export const Subtask = {
  encode(message: Subtask, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    if (message.status !== false) {
      writer.uint32(24).bool(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subtask {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubtask();
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

  fromJSON(object: any): Subtask {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      label: isSet(object.label) ? globalThis.String(object.label) : "",
      status: isSet(object.status) ? globalThis.Boolean(object.status) : false,
    };
  },

  toJSON(message: Subtask): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.status !== false) {
      obj.status = message.status;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Subtask>, I>>(base?: I): Subtask {
    return Subtask.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Subtask>, I>>(object: I): Subtask {
    const message = createBaseSubtask();
    message.id = object.id ?? 0;
    message.label = object.label ?? "";
    message.status = object.status ?? false;
    return message;
  },
};

function createBaseTaskAssignees(): TaskAssignees {
  return { id: 0, userId: "", taskId: 0 };
}

export const TaskAssignees = {
  encode(message: TaskAssignees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    if (message.taskId !== 0) {
      writer.uint32(24).uint32(message.taskId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskAssignees {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskAssignees();
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

          message.userId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.taskId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TaskAssignees {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      taskId: isSet(object.taskId) ? globalThis.Number(object.taskId) : 0,
    };
  },

  toJSON(message: TaskAssignees): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.taskId !== 0) {
      obj.taskId = Math.round(message.taskId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TaskAssignees>, I>>(base?: I): TaskAssignees {
    return TaskAssignees.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TaskAssignees>, I>>(object: I): TaskAssignees {
    const message = createBaseTaskAssignees();
    message.id = object.id ?? 0;
    message.userId = object.userId ?? "";
    message.taskId = object.taskId ?? 0;
    return message;
  },
};

function createBaseTask(): Task {
  return {
    id: 0,
    name: "",
    featuredImage: "",
    description: "",
    status: 0,
    priority: 0,
    startDate: undefined,
    duration: undefined,
    predecessor: "",
    subtasks: [],
    resources: [],
    order: 0,
    createdBy: "",
    assignedTo: [],
    issueId: undefined,
    taskColumnId: 0,
    projectId: 0,
    taskAssignees: [],
    createdAt: undefined,
    updatedAt: undefined,
    deletedAt: undefined,
  };
}

export const Task = {
  encode(message: Task, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
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
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.priority !== 0) {
      writer.uint32(48).int32(message.priority);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(58).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(66).fork()).ldelim();
    }
    if (message.predecessor !== "") {
      writer.uint32(74).string(message.predecessor);
    }
    for (const v of message.subtasks) {
      Subtask.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.order !== 0) {
      writer.uint32(96).uint32(message.order);
    }
    if (message.createdBy !== "") {
      writer.uint32(106).string(message.createdBy);
    }
    for (const v of message.assignedTo) {
      writer.uint32(114).string(v!);
    }
    if (message.issueId !== undefined) {
      writer.uint32(120).uint32(message.issueId);
    }
    if (message.taskColumnId !== 0) {
      writer.uint32(128).uint32(message.taskColumnId);
    }
    if (message.projectId !== 0) {
      writer.uint32(136).uint32(message.projectId);
    }
    for (const v of message.taskAssignees) {
      TaskAssignees.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(154).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(162).fork()).ldelim();
    }
    if (message.deletedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.deletedAt), writer.uint32(170).fork()).ldelim();
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

          message.featuredImage = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.priority = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.duration = Duration.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.predecessor = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.subtasks.push(Subtask.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.resources.push(Resource.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.order = reader.uint32();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.createdBy = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.assignedTo.push(reader.string());
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.issueId = reader.uint32();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.taskColumnId = reader.uint32();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.projectId = reader.uint32();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.taskAssignees.push(TaskAssignees.decode(reader, reader.uint32()));
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 21:
          if (tag !== 170) {
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

  fromJSON(object: any): Task {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      featuredImage: isSet(object.featuredImage) ? globalThis.String(object.featuredImage) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      status: isSet(object.status) ? taskStatusFromJSON(object.status) : 0,
      priority: isSet(object.priority) ? taskPriorityFromJSON(object.priority) : 0,
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      predecessor: isSet(object.predecessor) ? globalThis.String(object.predecessor) : "",
      subtasks: globalThis.Array.isArray(object?.subtasks) ? object.subtasks.map((e: any) => Subtask.fromJSON(e)) : [],
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => Resource.fromJSON(e))
        : [],
      order: isSet(object.order) ? globalThis.Number(object.order) : 0,
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : "",
      assignedTo: globalThis.Array.isArray(object?.assignedTo)
        ? object.assignedTo.map((e: any) => globalThis.String(e))
        : [],
      issueId: isSet(object.issueId) ? globalThis.Number(object.issueId) : undefined,
      taskColumnId: isSet(object.taskColumnId) ? globalThis.Number(object.taskColumnId) : 0,
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : 0,
      taskAssignees: globalThis.Array.isArray(object?.taskAssignees)
        ? object.taskAssignees.map((e: any) => TaskAssignees.fromJSON(e))
        : [],
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
      deletedAt: isSet(object.deletedAt) ? fromJsonTimestamp(object.deletedAt) : undefined,
    };
  },

  toJSON(message: Task): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
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
    if (message.status !== 0) {
      obj.status = taskStatusToJSON(message.status);
    }
    if (message.priority !== 0) {
      obj.priority = taskPriorityToJSON(message.priority);
    }
    if (message.startDate !== undefined) {
      obj.startDate = message.startDate.toISOString();
    }
    if (message.duration !== undefined) {
      obj.duration = Duration.toJSON(message.duration);
    }
    if (message.predecessor !== "") {
      obj.predecessor = message.predecessor;
    }
    if (message.subtasks?.length) {
      obj.subtasks = message.subtasks.map((e) => Subtask.toJSON(e));
    }
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => Resource.toJSON(e));
    }
    if (message.order !== 0) {
      obj.order = Math.round(message.order);
    }
    if (message.createdBy !== "") {
      obj.createdBy = message.createdBy;
    }
    if (message.assignedTo?.length) {
      obj.assignedTo = message.assignedTo;
    }
    if (message.issueId !== undefined) {
      obj.issueId = Math.round(message.issueId);
    }
    if (message.taskColumnId !== 0) {
      obj.taskColumnId = Math.round(message.taskColumnId);
    }
    if (message.projectId !== 0) {
      obj.projectId = Math.round(message.projectId);
    }
    if (message.taskAssignees?.length) {
      obj.taskAssignees = message.taskAssignees.map((e) => TaskAssignees.toJSON(e));
    }
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

  create<I extends Exact<DeepPartial<Task>, I>>(base?: I): Task {
    return Task.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Task>, I>>(object: I): Task {
    const message = createBaseTask();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.featuredImage = object.featuredImage ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? 0;
    message.priority = object.priority ?? 0;
    message.startDate = object.startDate ?? undefined;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Duration.fromPartial(object.duration)
      : undefined;
    message.predecessor = object.predecessor ?? "";
    message.subtasks = object.subtasks?.map((e) => Subtask.fromPartial(e)) || [];
    message.resources = object.resources?.map((e) => Resource.fromPartial(e)) || [];
    message.order = object.order ?? 0;
    message.createdBy = object.createdBy ?? "";
    message.assignedTo = object.assignedTo?.map((e) => e) || [];
    message.issueId = object.issueId ?? undefined;
    message.taskColumnId = object.taskColumnId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.taskAssignees = object.taskAssignees?.map((e) => TaskAssignees.fromPartial(e)) || [];
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.deletedAt = object.deletedAt ?? undefined;
    return message;
  },
};

function createBaseTasksList(): TasksList {
  return { data: [] };
}

export const TasksList = {
  encode(message: TasksList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      Task.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TasksList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTasksList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): TasksList {
    return { data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => Task.fromJSON(e)) : [] };
  },

  toJSON(message: TasksList): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data.map((e) => Task.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TasksList>, I>>(base?: I): TasksList {
    return TasksList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TasksList>, I>>(object: I): TasksList {
    const message = createBaseTasksList();
    message.data = object.data?.map((e) => Task.fromPartial(e)) || [];
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

function createBaseTaskResponse(): TaskResponse {
  return { data: undefined, error: undefined };
}

export const TaskResponse = {
  encode(message: TaskResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      TasksList.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      ErrorResponse.encode(message.error, writer.uint32(18).fork()).ldelim();
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
          if (tag !== 10) {
            break;
          }

          message.data = TasksList.decode(reader, reader.uint32());
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

  fromJSON(object: any): TaskResponse {
    return {
      data: isSet(object.data) ? TasksList.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? ErrorResponse.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: TaskResponse): unknown {
    const obj: any = {};
    if (message.data !== undefined) {
      obj.data = TasksList.toJSON(message.data);
    }
    if (message.error !== undefined) {
      obj.error = ErrorResponse.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TaskResponse>, I>>(base?: I): TaskResponse {
    return TaskResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TaskResponse>, I>>(object: I): TaskResponse {
    const message = createBaseTaskResponse();
    message.data = (object.data !== undefined && object.data !== null) ? TasksList.fromPartial(object.data) : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? ErrorResponse.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseTaskColumn(): TaskColumn {
  return { id: 0, name: "", limit: 0, order: 0, projectId: 0, task: [], datestamps: undefined };
}

export const TaskColumn = {
  encode(message: TaskColumn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.limit !== 0) {
      writer.uint32(24).uint32(message.limit);
    }
    if (message.order !== 0) {
      writer.uint32(32).uint32(message.order);
    }
    if (message.projectId !== 0) {
      writer.uint32(40).uint32(message.projectId);
    }
    for (const v of message.task) {
      Task.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.datestamps !== undefined) {
      Datestamps.encode(message.datestamps, writer.uint32(58).fork()).ldelim();
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

          message.limit = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.order = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.projectId = reader.uint32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.task.push(Task.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
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

  fromJSON(object: any): TaskColumn {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      order: isSet(object.order) ? globalThis.Number(object.order) : 0,
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : 0,
      task: globalThis.Array.isArray(object?.task) ? object.task.map((e: any) => Task.fromJSON(e)) : [],
      datestamps: isSet(object.datestamps) ? Datestamps.fromJSON(object.datestamps) : undefined,
    };
  },

  toJSON(message: TaskColumn): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
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
    if (message.projectId !== 0) {
      obj.projectId = Math.round(message.projectId);
    }
    if (message.task?.length) {
      obj.task = message.task.map((e) => Task.toJSON(e));
    }
    if (message.datestamps !== undefined) {
      obj.datestamps = Datestamps.toJSON(message.datestamps);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TaskColumn>, I>>(base?: I): TaskColumn {
    return TaskColumn.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TaskColumn>, I>>(object: I): TaskColumn {
    const message = createBaseTaskColumn();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.limit = object.limit ?? 0;
    message.order = object.order ?? 0;
    message.projectId = object.projectId ?? 0;
    message.task = object.task?.map((e) => Task.fromPartial(e)) || [];
    message.datestamps = (object.datestamps !== undefined && object.datestamps !== null)
      ? Datestamps.fromPartial(object.datestamps)
      : undefined;
    return message;
  },
};

function createBaseTaskColumnsList(): TaskColumnsList {
  return { data: [] };
}

export const TaskColumnsList = {
  encode(message: TaskColumnsList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      TaskColumn.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskColumnsList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskColumnsList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): TaskColumnsList {
    return { data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => TaskColumn.fromJSON(e)) : [] };
  },

  toJSON(message: TaskColumnsList): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data.map((e) => TaskColumn.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TaskColumnsList>, I>>(base?: I): TaskColumnsList {
    return TaskColumnsList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TaskColumnsList>, I>>(object: I): TaskColumnsList {
    const message = createBaseTaskColumnsList();
    message.data = object.data?.map((e) => TaskColumn.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTaskColumnResponse(): TaskColumnResponse {
  return { data: undefined, error: undefined };
}

export const TaskColumnResponse = {
  encode(message: TaskColumnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      TaskColumnsList.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      ErrorResponse.encode(message.error, writer.uint32(18).fork()).ldelim();
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
          if (tag !== 10) {
            break;
          }

          message.data = TaskColumnsList.decode(reader, reader.uint32());
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

  fromJSON(object: any): TaskColumnResponse {
    return {
      data: isSet(object.data) ? TaskColumnsList.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? ErrorResponse.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: TaskColumnResponse): unknown {
    const obj: any = {};
    if (message.data !== undefined) {
      obj.data = TaskColumnsList.toJSON(message.data);
    }
    if (message.error !== undefined) {
      obj.error = ErrorResponse.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TaskColumnResponse>, I>>(base?: I): TaskColumnResponse {
    return TaskColumnResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TaskColumnResponse>, I>>(object: I): TaskColumnResponse {
    const message = createBaseTaskColumnResponse();
    message.data = (object.data !== undefined && object.data !== null)
      ? TaskColumnsList.fromPartial(object.data)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? ErrorResponse.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseListTaskColumnsRequest(): ListTaskColumnsRequest {
  return { projectId: 0 };
}

export const ListTaskColumnsRequest = {
  encode(message: ListTaskColumnsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).uint32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTaskColumnsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTaskColumnsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): ListTaskColumnsRequest {
    return { projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : 0 };
  },

  toJSON(message: ListTaskColumnsRequest): unknown {
    const obj: any = {};
    if (message.projectId !== 0) {
      obj.projectId = Math.round(message.projectId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListTaskColumnsRequest>, I>>(base?: I): ListTaskColumnsRequest {
    return ListTaskColumnsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTaskColumnsRequest>, I>>(object: I): ListTaskColumnsRequest {
    const message = createBaseListTaskColumnsRequest();
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseCreateTaskColumnRequest(): CreateTaskColumnRequest {
  return { name: "", limit: 0, order: 0, projectId: 0 };
}

export const CreateTaskColumnRequest = {
  encode(message: CreateTaskColumnRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.limit !== 0) {
      writer.uint32(16).uint32(message.limit);
    }
    if (message.order !== 0) {
      writer.uint32(24).uint32(message.order);
    }
    if (message.projectId !== 0) {
      writer.uint32(32).uint32(message.projectId);
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

          message.limit = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.order = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
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

  fromJSON(object: any): CreateTaskColumnRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      order: isSet(object.order) ? globalThis.Number(object.order) : 0,
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : 0,
    };
  },

  toJSON(message: CreateTaskColumnRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.order !== 0) {
      obj.order = Math.round(message.order);
    }
    if (message.projectId !== 0) {
      obj.projectId = Math.round(message.projectId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTaskColumnRequest>, I>>(base?: I): CreateTaskColumnRequest {
    return CreateTaskColumnRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTaskColumnRequest>, I>>(object: I): CreateTaskColumnRequest {
    const message = createBaseCreateTaskColumnRequest();
    message.name = object.name ?? "";
    message.limit = object.limit ?? 0;
    message.order = object.order ?? 0;
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseUpdateTaskColumnRequest(): UpdateTaskColumnRequest {
  return { id: 0, name: "", order: 0, limit: 0 };
}

export const UpdateTaskColumnRequest = {
  encode(message: UpdateTaskColumnRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.order !== 0) {
      writer.uint32(24).uint32(message.order);
    }
    if (message.limit !== 0) {
      writer.uint32(32).uint32(message.limit);
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

          message.order = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.limit = reader.uint32();
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
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      order: isSet(object.order) ? globalThis.Number(object.order) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
    };
  },

  toJSON(message: UpdateTaskColumnRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.order !== 0) {
      obj.order = Math.round(message.order);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTaskColumnRequest>, I>>(base?: I): UpdateTaskColumnRequest {
    return UpdateTaskColumnRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTaskColumnRequest>, I>>(object: I): UpdateTaskColumnRequest {
    const message = createBaseUpdateTaskColumnRequest();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.order = object.order ?? 0;
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseDeleteTaskColumnRequest(): DeleteTaskColumnRequest {
  return { id: 0 };
}

export const DeleteTaskColumnRequest = {
  encode(message: DeleteTaskColumnRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTaskColumnRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTaskColumnRequest();
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

  fromJSON(object: any): DeleteTaskColumnRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: DeleteTaskColumnRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteTaskColumnRequest>, I>>(base?: I): DeleteTaskColumnRequest {
    return DeleteTaskColumnRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteTaskColumnRequest>, I>>(object: I): DeleteTaskColumnRequest {
    const message = createBaseDeleteTaskColumnRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseAssignTaskRequest(): AssignTaskRequest {
  return { taskId: 0, userId: [] };
}

export const AssignTaskRequest = {
  encode(message: AssignTaskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.taskId !== 0) {
      writer.uint32(8).uint32(message.taskId);
    }
    for (const v of message.userId) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssignTaskRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssignTaskRequest();
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
          if (tag !== 18) {
            break;
          }

          message.userId.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssignTaskRequest {
    return {
      taskId: isSet(object.taskId) ? globalThis.Number(object.taskId) : 0,
      userId: globalThis.Array.isArray(object?.userId) ? object.userId.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: AssignTaskRequest): unknown {
    const obj: any = {};
    if (message.taskId !== 0) {
      obj.taskId = Math.round(message.taskId);
    }
    if (message.userId?.length) {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AssignTaskRequest>, I>>(base?: I): AssignTaskRequest {
    return AssignTaskRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AssignTaskRequest>, I>>(object: I): AssignTaskRequest {
    const message = createBaseAssignTaskRequest();
    message.taskId = object.taskId ?? 0;
    message.userId = object.userId?.map((e) => e) || [];
    return message;
  },
};

function createBaseRemoveAssigneeRequest(): RemoveAssigneeRequest {
  return { taskAssigneeId: 0 };
}

export const RemoveAssigneeRequest = {
  encode(message: RemoveAssigneeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.taskAssigneeId !== 0) {
      writer.uint32(8).uint32(message.taskAssigneeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveAssigneeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveAssigneeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.taskAssigneeId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveAssigneeRequest {
    return { taskAssigneeId: isSet(object.taskAssigneeId) ? globalThis.Number(object.taskAssigneeId) : 0 };
  },

  toJSON(message: RemoveAssigneeRequest): unknown {
    const obj: any = {};
    if (message.taskAssigneeId !== 0) {
      obj.taskAssigneeId = Math.round(message.taskAssigneeId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveAssigneeRequest>, I>>(base?: I): RemoveAssigneeRequest {
    return RemoveAssigneeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveAssigneeRequest>, I>>(object: I): RemoveAssigneeRequest {
    const message = createBaseRemoveAssigneeRequest();
    message.taskAssigneeId = object.taskAssigneeId ?? 0;
    return message;
  },
};

export interface TasksService {
  ListTasks(request: ListTasksRequest): Promise<TaskResponse>;
  CreateTask(request: CreateTaskRequest): Promise<TaskResponse>;
  UpdateTask(request: UpdateTaskRequest): Promise<TaskResponse>;
  DeleteTask(request: DeleteTaskRequest): Promise<Empty>;
  ListTaskColumns(request: ListTaskColumnsRequest): Promise<TaskColumnResponse>;
  CreateTaskColumn(request: CreateTaskColumnRequest): Promise<TaskColumnResponse>;
  UpdateTaskColumn(request: UpdateTaskColumnRequest): Promise<TaskColumnResponse>;
  DeleteTaskColumn(request: DeleteTaskColumnRequest): Promise<TaskColumnResponse>;
  AssignTask(request: AssignTaskRequest): Promise<TaskResponse>;
  RemoveAssignee(request: RemoveAssigneeRequest): Promise<Empty>;
}

export const TasksServiceServiceName = "packages.task.TasksService";
export class TasksServiceClientImpl implements TasksService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || TasksServiceServiceName;
    this.rpc = rpc;
    this.ListTasks = this.ListTasks.bind(this);
    this.CreateTask = this.CreateTask.bind(this);
    this.UpdateTask = this.UpdateTask.bind(this);
    this.DeleteTask = this.DeleteTask.bind(this);
    this.ListTaskColumns = this.ListTaskColumns.bind(this);
    this.CreateTaskColumn = this.CreateTaskColumn.bind(this);
    this.UpdateTaskColumn = this.UpdateTaskColumn.bind(this);
    this.DeleteTaskColumn = this.DeleteTaskColumn.bind(this);
    this.AssignTask = this.AssignTask.bind(this);
    this.RemoveAssignee = this.RemoveAssignee.bind(this);
  }
  ListTasks(request: ListTasksRequest): Promise<TaskResponse> {
    const data = ListTasksRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListTasks", data);
    return promise.then((data) => TaskResponse.decode(_m0.Reader.create(data)));
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

  DeleteTask(request: DeleteTaskRequest): Promise<Empty> {
    const data = DeleteTaskRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteTask", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }

  ListTaskColumns(request: ListTaskColumnsRequest): Promise<TaskColumnResponse> {
    const data = ListTaskColumnsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListTaskColumns", data);
    return promise.then((data) => TaskColumnResponse.decode(_m0.Reader.create(data)));
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

  DeleteTaskColumn(request: DeleteTaskColumnRequest): Promise<TaskColumnResponse> {
    const data = DeleteTaskColumnRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteTaskColumn", data);
    return promise.then((data) => TaskColumnResponse.decode(_m0.Reader.create(data)));
  }

  AssignTask(request: AssignTaskRequest): Promise<TaskResponse> {
    const data = AssignTaskRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AssignTask", data);
    return promise.then((data) => TaskResponse.decode(_m0.Reader.create(data)));
  }

  RemoveAssignee(request: RemoveAssigneeRequest): Promise<Empty> {
    const data = RemoveAssigneeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveAssignee", data);
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

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";

export const protobufPackage = "packages.risk";

export enum RiskImpact {
  MINOR = 0,
  MODERATE = 1,
  SIGNIFICANT = 2,
  SEVERE = 3,
  UNRECOGNIZED = -1,
}

export function riskImpactFromJSON(object: any): RiskImpact {
  switch (object) {
    case 0:
    case "MINOR":
      return RiskImpact.MINOR;
    case 1:
    case "MODERATE":
      return RiskImpact.MODERATE;
    case 2:
    case "SIGNIFICANT":
      return RiskImpact.SIGNIFICANT;
    case 3:
    case "SEVERE":
      return RiskImpact.SEVERE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RiskImpact.UNRECOGNIZED;
  }
}

export function riskImpactToJSON(object: RiskImpact): string {
  switch (object) {
    case RiskImpact.MINOR:
      return "MINOR";
    case RiskImpact.MODERATE:
      return "MODERATE";
    case RiskImpact.SIGNIFICANT:
      return "SIGNIFICANT";
    case RiskImpact.SEVERE:
      return "SEVERE";
    case RiskImpact.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum RiskLikelihood {
  NOT_LIKELY = 0,
  LIKELY = 1,
  VERY_LIKELY = 2,
  UNRECOGNIZED = -1,
}

export function riskLikelihoodFromJSON(object: any): RiskLikelihood {
  switch (object) {
    case 0:
    case "NOT_LIKELY":
      return RiskLikelihood.NOT_LIKELY;
    case 1:
    case "LIKELY":
      return RiskLikelihood.LIKELY;
    case 2:
    case "VERY_LIKELY":
      return RiskLikelihood.VERY_LIKELY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RiskLikelihood.UNRECOGNIZED;
  }
}

export function riskLikelihoodToJSON(object: RiskLikelihood): string {
  switch (object) {
    case RiskLikelihood.NOT_LIKELY:
      return "NOT_LIKELY";
    case RiskLikelihood.LIKELY:
      return "LIKELY";
    case RiskLikelihood.VERY_LIKELY:
      return "VERY_LIKELY";
    case RiskLikelihood.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum RiskCategory {
  TECHNICAL = 0,
  SCHEDULE = 1,
  COST = 2,
  RESOURCE = 3,
  EXTERNAL = 4,
  UNRECOGNIZED = -1,
}

export function riskCategoryFromJSON(object: any): RiskCategory {
  switch (object) {
    case 0:
    case "TECHNICAL":
      return RiskCategory.TECHNICAL;
    case 1:
    case "SCHEDULE":
      return RiskCategory.SCHEDULE;
    case 2:
    case "COST":
      return RiskCategory.COST;
    case 3:
    case "RESOURCE":
      return RiskCategory.RESOURCE;
    case 4:
    case "EXTERNAL":
      return RiskCategory.EXTERNAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RiskCategory.UNRECOGNIZED;
  }
}

export function riskCategoryToJSON(object: RiskCategory): string {
  switch (object) {
    case RiskCategory.TECHNICAL:
      return "TECHNICAL";
    case RiskCategory.SCHEDULE:
      return "SCHEDULE";
    case RiskCategory.COST:
      return "COST";
    case RiskCategory.RESOURCE:
      return "RESOURCE";
    case RiskCategory.EXTERNAL:
      return "EXTERNAL";
    case RiskCategory.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum RiskStatus {
  OPEN = 0,
  IN_PROGRESS = 1,
  CLOSED = 2,
  UNRECOGNIZED = -1,
}

export function riskStatusFromJSON(object: any): RiskStatus {
  switch (object) {
    case 0:
    case "OPEN":
      return RiskStatus.OPEN;
    case 1:
    case "IN_PROGRESS":
      return RiskStatus.IN_PROGRESS;
    case 2:
    case "CLOSED":
      return RiskStatus.CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RiskStatus.UNRECOGNIZED;
  }
}

export function riskStatusToJSON(object: RiskStatus): string {
  switch (object) {
    case RiskStatus.OPEN:
      return "OPEN";
    case RiskStatus.IN_PROGRESS:
      return "IN_PROGRESS";
    case RiskStatus.CLOSED:
      return "CLOSED";
    case RiskStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum RiskPriority {
  LOW = 0,
  MEDIUM = 1,
  HIGH = 2,
  UNRECOGNIZED = -1,
}

export function riskPriorityFromJSON(object: any): RiskPriority {
  switch (object) {
    case 0:
    case "LOW":
      return RiskPriority.LOW;
    case 1:
    case "MEDIUM":
      return RiskPriority.MEDIUM;
    case 2:
    case "HIGH":
      return RiskPriority.HIGH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RiskPriority.UNRECOGNIZED;
  }
}

export function riskPriorityToJSON(object: RiskPriority): string {
  switch (object) {
    case RiskPriority.LOW:
      return "LOW";
    case RiskPriority.MEDIUM:
      return "MEDIUM";
    case RiskPriority.HIGH:
      return "HIGH";
    case RiskPriority.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Risk {
  id: number;
  name: string;
  description: string;
  likelihood: RiskLikelihood;
  category: RiskCategory;
  status: RiskStatus;
  mitigation: string;
  priority: RiskPriority;
  ownership: string;
  projectId: number;
}

export interface ListRisksRequest {
  id?: number | undefined;
  taskId?: number | undefined;
  projectId?: number | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
}

export interface CreateRiskRequest {
  name: string;
  description: string;
  likelihood: RiskLikelihood;
  category: RiskCategory;
  status: RiskStatus;
  mitigation: string;
  priority: RiskPriority;
  ownership: string;
  projectId: number;
}

export interface UpdateRiskRequest {
  id: number;
  name: string;
  description: string;
  likelihood: RiskLikelihood;
  category: RiskCategory;
  status: RiskStatus;
  mitigation: string;
  priority: RiskPriority;
  ownership: string;
  projectId: number;
}

export interface DeleteRiskRequest {
  id: number;
}

export interface RisksList {
  data: Risk[];
}

export interface ErrorResponse {
  statusCode: number;
  message: string;
}

export interface RiskResponse {
  data?: RisksList | undefined;
  error?: ErrorResponse | undefined;
}

function createBaseRisk(): Risk {
  return {
    id: 0,
    name: "",
    description: "",
    likelihood: 0,
    category: 0,
    status: 0,
    mitigation: "",
    priority: 0,
    ownership: "",
    projectId: 0,
  };
}

export const Risk = {
  encode(message: Risk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.likelihood !== 0) {
      writer.uint32(32).int32(message.likelihood);
    }
    if (message.category !== 0) {
      writer.uint32(40).int32(message.category);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.mitigation !== "") {
      writer.uint32(58).string(message.mitigation);
    }
    if (message.priority !== 0) {
      writer.uint32(64).int32(message.priority);
    }
    if (message.ownership !== "") {
      writer.uint32(74).string(message.ownership);
    }
    if (message.projectId !== 0) {
      writer.uint32(80).uint32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Risk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRisk();
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

          message.likelihood = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.category = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.mitigation = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.priority = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.ownership = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
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

  fromJSON(object: any): Risk {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      likelihood: isSet(object.likelihood) ? riskLikelihoodFromJSON(object.likelihood) : 0,
      category: isSet(object.category) ? riskCategoryFromJSON(object.category) : 0,
      status: isSet(object.status) ? riskStatusFromJSON(object.status) : 0,
      mitigation: isSet(object.mitigation) ? globalThis.String(object.mitigation) : "",
      priority: isSet(object.priority) ? riskPriorityFromJSON(object.priority) : 0,
      ownership: isSet(object.ownership) ? globalThis.String(object.ownership) : "",
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : 0,
    };
  },

  toJSON(message: Risk): unknown {
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
    if (message.likelihood !== 0) {
      obj.likelihood = riskLikelihoodToJSON(message.likelihood);
    }
    if (message.category !== 0) {
      obj.category = riskCategoryToJSON(message.category);
    }
    if (message.status !== 0) {
      obj.status = riskStatusToJSON(message.status);
    }
    if (message.mitigation !== "") {
      obj.mitigation = message.mitigation;
    }
    if (message.priority !== 0) {
      obj.priority = riskPriorityToJSON(message.priority);
    }
    if (message.ownership !== "") {
      obj.ownership = message.ownership;
    }
    if (message.projectId !== 0) {
      obj.projectId = Math.round(message.projectId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Risk>, I>>(base?: I): Risk {
    return Risk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Risk>, I>>(object: I): Risk {
    const message = createBaseRisk();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.likelihood = object.likelihood ?? 0;
    message.category = object.category ?? 0;
    message.status = object.status ?? 0;
    message.mitigation = object.mitigation ?? "";
    message.priority = object.priority ?? 0;
    message.ownership = object.ownership ?? "";
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseListRisksRequest(): ListRisksRequest {
  return { id: undefined, taskId: undefined, projectId: undefined, limit: undefined, offset: undefined };
}

export const ListRisksRequest = {
  encode(message: ListRisksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.taskId !== undefined) {
      writer.uint32(16).uint32(message.taskId);
    }
    if (message.projectId !== undefined) {
      writer.uint32(24).uint32(message.projectId);
    }
    if (message.limit !== undefined) {
      writer.uint32(32).uint32(message.limit);
    }
    if (message.offset !== undefined) {
      writer.uint32(40).uint32(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRisksRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRisksRequest();
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

          message.taskId = reader.uint32();
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

          message.limit = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
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

  fromJSON(object: any): ListRisksRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : undefined,
      taskId: isSet(object.taskId) ? globalThis.Number(object.taskId) : undefined,
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : undefined,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : undefined,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : undefined,
    };
  },

  toJSON(message: ListRisksRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = Math.round(message.id);
    }
    if (message.taskId !== undefined) {
      obj.taskId = Math.round(message.taskId);
    }
    if (message.projectId !== undefined) {
      obj.projectId = Math.round(message.projectId);
    }
    if (message.limit !== undefined) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== undefined) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRisksRequest>, I>>(base?: I): ListRisksRequest {
    return ListRisksRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRisksRequest>, I>>(object: I): ListRisksRequest {
    const message = createBaseListRisksRequest();
    message.id = object.id ?? undefined;
    message.taskId = object.taskId ?? undefined;
    message.projectId = object.projectId ?? undefined;
    message.limit = object.limit ?? undefined;
    message.offset = object.offset ?? undefined;
    return message;
  },
};

function createBaseCreateRiskRequest(): CreateRiskRequest {
  return {
    name: "",
    description: "",
    likelihood: 0,
    category: 0,
    status: 0,
    mitigation: "",
    priority: 0,
    ownership: "",
    projectId: 0,
  };
}

export const CreateRiskRequest = {
  encode(message: CreateRiskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.likelihood !== 0) {
      writer.uint32(24).int32(message.likelihood);
    }
    if (message.category !== 0) {
      writer.uint32(32).int32(message.category);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.mitigation !== "") {
      writer.uint32(50).string(message.mitigation);
    }
    if (message.priority !== 0) {
      writer.uint32(56).int32(message.priority);
    }
    if (message.ownership !== "") {
      writer.uint32(66).string(message.ownership);
    }
    if (message.projectId !== 0) {
      writer.uint32(72).uint32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRiskRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateRiskRequest();
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

          message.likelihood = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.category = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.mitigation = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.priority = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.ownership = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
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

  fromJSON(object: any): CreateRiskRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      likelihood: isSet(object.likelihood) ? riskLikelihoodFromJSON(object.likelihood) : 0,
      category: isSet(object.category) ? riskCategoryFromJSON(object.category) : 0,
      status: isSet(object.status) ? riskStatusFromJSON(object.status) : 0,
      mitigation: isSet(object.mitigation) ? globalThis.String(object.mitigation) : "",
      priority: isSet(object.priority) ? riskPriorityFromJSON(object.priority) : 0,
      ownership: isSet(object.ownership) ? globalThis.String(object.ownership) : "",
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : 0,
    };
  },

  toJSON(message: CreateRiskRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.likelihood !== 0) {
      obj.likelihood = riskLikelihoodToJSON(message.likelihood);
    }
    if (message.category !== 0) {
      obj.category = riskCategoryToJSON(message.category);
    }
    if (message.status !== 0) {
      obj.status = riskStatusToJSON(message.status);
    }
    if (message.mitigation !== "") {
      obj.mitigation = message.mitigation;
    }
    if (message.priority !== 0) {
      obj.priority = riskPriorityToJSON(message.priority);
    }
    if (message.ownership !== "") {
      obj.ownership = message.ownership;
    }
    if (message.projectId !== 0) {
      obj.projectId = Math.round(message.projectId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateRiskRequest>, I>>(base?: I): CreateRiskRequest {
    return CreateRiskRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateRiskRequest>, I>>(object: I): CreateRiskRequest {
    const message = createBaseCreateRiskRequest();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.likelihood = object.likelihood ?? 0;
    message.category = object.category ?? 0;
    message.status = object.status ?? 0;
    message.mitigation = object.mitigation ?? "";
    message.priority = object.priority ?? 0;
    message.ownership = object.ownership ?? "";
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseUpdateRiskRequest(): UpdateRiskRequest {
  return {
    id: 0,
    name: "",
    description: "",
    likelihood: 0,
    category: 0,
    status: 0,
    mitigation: "",
    priority: 0,
    ownership: "",
    projectId: 0,
  };
}

export const UpdateRiskRequest = {
  encode(message: UpdateRiskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.likelihood !== 0) {
      writer.uint32(32).int32(message.likelihood);
    }
    if (message.category !== 0) {
      writer.uint32(40).int32(message.category);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.mitigation !== "") {
      writer.uint32(58).string(message.mitigation);
    }
    if (message.priority !== 0) {
      writer.uint32(64).int32(message.priority);
    }
    if (message.ownership !== "") {
      writer.uint32(74).string(message.ownership);
    }
    if (message.projectId !== 0) {
      writer.uint32(80).uint32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRiskRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRiskRequest();
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

          message.likelihood = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.category = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.mitigation = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.priority = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.ownership = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
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

  fromJSON(object: any): UpdateRiskRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      likelihood: isSet(object.likelihood) ? riskLikelihoodFromJSON(object.likelihood) : 0,
      category: isSet(object.category) ? riskCategoryFromJSON(object.category) : 0,
      status: isSet(object.status) ? riskStatusFromJSON(object.status) : 0,
      mitigation: isSet(object.mitigation) ? globalThis.String(object.mitigation) : "",
      priority: isSet(object.priority) ? riskPriorityFromJSON(object.priority) : 0,
      ownership: isSet(object.ownership) ? globalThis.String(object.ownership) : "",
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : 0,
    };
  },

  toJSON(message: UpdateRiskRequest): unknown {
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
    if (message.likelihood !== 0) {
      obj.likelihood = riskLikelihoodToJSON(message.likelihood);
    }
    if (message.category !== 0) {
      obj.category = riskCategoryToJSON(message.category);
    }
    if (message.status !== 0) {
      obj.status = riskStatusToJSON(message.status);
    }
    if (message.mitigation !== "") {
      obj.mitigation = message.mitigation;
    }
    if (message.priority !== 0) {
      obj.priority = riskPriorityToJSON(message.priority);
    }
    if (message.ownership !== "") {
      obj.ownership = message.ownership;
    }
    if (message.projectId !== 0) {
      obj.projectId = Math.round(message.projectId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateRiskRequest>, I>>(base?: I): UpdateRiskRequest {
    return UpdateRiskRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateRiskRequest>, I>>(object: I): UpdateRiskRequest {
    const message = createBaseUpdateRiskRequest();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.likelihood = object.likelihood ?? 0;
    message.category = object.category ?? 0;
    message.status = object.status ?? 0;
    message.mitigation = object.mitigation ?? "";
    message.priority = object.priority ?? 0;
    message.ownership = object.ownership ?? "";
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseDeleteRiskRequest(): DeleteRiskRequest {
  return { id: 0 };
}

export const DeleteRiskRequest = {
  encode(message: DeleteRiskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRiskRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteRiskRequest();
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

  fromJSON(object: any): DeleteRiskRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: DeleteRiskRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteRiskRequest>, I>>(base?: I): DeleteRiskRequest {
    return DeleteRiskRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteRiskRequest>, I>>(object: I): DeleteRiskRequest {
    const message = createBaseDeleteRiskRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseRisksList(): RisksList {
  return { data: [] };
}

export const RisksList = {
  encode(message: RisksList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      Risk.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RisksList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRisksList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data.push(Risk.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RisksList {
    return { data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => Risk.fromJSON(e)) : [] };
  },

  toJSON(message: RisksList): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data.map((e) => Risk.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RisksList>, I>>(base?: I): RisksList {
    return RisksList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RisksList>, I>>(object: I): RisksList {
    const message = createBaseRisksList();
    message.data = object.data?.map((e) => Risk.fromPartial(e)) || [];
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

function createBaseRiskResponse(): RiskResponse {
  return { data: undefined, error: undefined };
}

export const RiskResponse = {
  encode(message: RiskResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      RisksList.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      ErrorResponse.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RiskResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRiskResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = RisksList.decode(reader, reader.uint32());
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

  fromJSON(object: any): RiskResponse {
    return {
      data: isSet(object.data) ? RisksList.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? ErrorResponse.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: RiskResponse): unknown {
    const obj: any = {};
    if (message.data !== undefined) {
      obj.data = RisksList.toJSON(message.data);
    }
    if (message.error !== undefined) {
      obj.error = ErrorResponse.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RiskResponse>, I>>(base?: I): RiskResponse {
    return RiskResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RiskResponse>, I>>(object: I): RiskResponse {
    const message = createBaseRiskResponse();
    message.data = (object.data !== undefined && object.data !== null) ? RisksList.fromPartial(object.data) : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? ErrorResponse.fromPartial(object.error)
      : undefined;
    return message;
  },
};

export interface RisksService {
  ListRisks(request: ListRisksRequest): Promise<RiskResponse>;
  CreateRisk(request: CreateRiskRequest): Promise<RiskResponse>;
  UpdateRisk(request: UpdateRiskRequest): Promise<RiskResponse>;
  DeleteRisk(request: DeleteRiskRequest): Promise<Empty>;
}

export const RisksServiceServiceName = "packages.risk.RisksService";
export class RisksServiceClientImpl implements RisksService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || RisksServiceServiceName;
    this.rpc = rpc;
    this.ListRisks = this.ListRisks.bind(this);
    this.CreateRisk = this.CreateRisk.bind(this);
    this.UpdateRisk = this.UpdateRisk.bind(this);
    this.DeleteRisk = this.DeleteRisk.bind(this);
  }
  ListRisks(request: ListRisksRequest): Promise<RiskResponse> {
    const data = ListRisksRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListRisks", data);
    return promise.then((data) => RiskResponse.decode(_m0.Reader.create(data)));
  }

  CreateRisk(request: CreateRiskRequest): Promise<RiskResponse> {
    const data = CreateRiskRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateRisk", data);
    return promise.then((data) => RiskResponse.decode(_m0.Reader.create(data)));
  }

  UpdateRisk(request: UpdateRiskRequest): Promise<RiskResponse> {
    const data = UpdateRiskRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateRisk", data);
    return promise.then((data) => RiskResponse.decode(_m0.Reader.create(data)));
  }

  DeleteRisk(request: DeleteRiskRequest): Promise<Empty> {
    const data = DeleteRiskRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteRisk", data);
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

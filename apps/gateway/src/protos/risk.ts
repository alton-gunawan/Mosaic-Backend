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

export enum IssuePriority {
  LOW = 0,
  MEDIUM = 1,
  HIGH = 2,
  UNRECOGNIZED = -1,
}

export function issuePriorityFromJSON(object: any): IssuePriority {
  switch (object) {
    case 0:
    case "LOW":
      return IssuePriority.LOW;
    case 1:
    case "MEDIUM":
      return IssuePriority.MEDIUM;
    case 2:
    case "HIGH":
      return IssuePriority.HIGH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IssuePriority.UNRECOGNIZED;
  }
}

export function issuePriorityToJSON(object: IssuePriority): string {
  switch (object) {
    case IssuePriority.LOW:
      return "LOW";
    case IssuePriority.MEDIUM:
      return "MEDIUM";
    case IssuePriority.HIGH:
      return "HIGH";
    case IssuePriority.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum IssueStatus {
  OPEN = 0,
  IN_PROGRESS = 1,
  RESOLVED = 2,
  CLOSED = 3,
  UNRECOGNIZED = -1,
}

export function issueStatusFromJSON(object: any): IssueStatus {
  switch (object) {
    case 0:
    case "OPEN":
      return IssueStatus.OPEN;
    case 1:
    case "IN_PROGRESS":
      return IssueStatus.IN_PROGRESS;
    case 2:
    case "RESOLVED":
      return IssueStatus.RESOLVED;
    case 3:
    case "CLOSED":
      return IssueStatus.CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IssueStatus.UNRECOGNIZED;
  }
}

export function issueStatusToJSON(object: IssueStatus): string {
  switch (object) {
    case IssueStatus.OPEN:
      return "OPEN";
    case IssueStatus.IN_PROGRESS:
      return "IN_PROGRESS";
    case IssueStatus.RESOLVED:
      return "RESOLVED";
    case IssueStatus.CLOSED:
      return "CLOSED";
    case IssueStatus.UNRECOGNIZED:
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
  mitigation: string;
  impact: RiskImpact;
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
  mitigation: string;
  impact: RiskImpact;
  ownership: string;
  projectId: number;
}

export interface UpdateRiskRequest {
  id: number;
  name: string;
  description: string;
  likelihood: RiskLikelihood;
  category: RiskCategory;
  mitigation: string;
  impact: RiskImpact;
  ownership: string;
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

export interface Issue {
  id: number;
  summary: string;
  description: string;
  status: IssueStatus;
  priority: IssuePriority;
  reportedBy: string;
  ownership: string;
  taskId: string[];
  projectId: number;
}

export interface ListIssuesRequest {
  id?: number | undefined;
  taskId?: number | undefined;
  projectId?: number | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
}

export interface CreateIssuesRequest {
  summary: string;
  description: string;
  status: IssueStatus;
  priority: IssuePriority;
  reportedBy: string;
  ownership: string;
  taskId: string[];
  projectId: number;
}

export interface UpdateIssuesRequest {
  id: number;
  summary: string;
  description: string;
  status: IssueStatus;
  priority: IssuePriority;
  reportedBy: string;
  ownership: string;
  taskId: string[];
}

export interface DeleteIssuesRequest {
  id: number;
}

export interface IssuesList {
  data: Issue[];
}

export interface IssueResponse {
  data?: IssuesList | undefined;
  error?: ErrorResponse | undefined;
}

function createBaseRisk(): Risk {
  return {
    id: 0,
    name: "",
    description: "",
    likelihood: 0,
    category: 0,
    mitigation: "",
    impact: 0,
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
    if (message.mitigation !== "") {
      writer.uint32(50).string(message.mitigation);
    }
    if (message.impact !== 0) {
      writer.uint32(56).int32(message.impact);
    }
    if (message.ownership !== "") {
      writer.uint32(66).string(message.ownership);
    }
    if (message.projectId !== 0) {
      writer.uint32(72).uint32(message.projectId);
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
          if (tag !== 50) {
            break;
          }

          message.mitigation = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.impact = reader.int32() as any;
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

  fromJSON(object: any): Risk {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      likelihood: isSet(object.likelihood) ? riskLikelihoodFromJSON(object.likelihood) : 0,
      category: isSet(object.category) ? riskCategoryFromJSON(object.category) : 0,
      mitigation: isSet(object.mitigation) ? globalThis.String(object.mitigation) : "",
      impact: isSet(object.impact) ? riskImpactFromJSON(object.impact) : 0,
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
    if (message.mitigation !== "") {
      obj.mitigation = message.mitigation;
    }
    if (message.impact !== 0) {
      obj.impact = riskImpactToJSON(message.impact);
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
    message.mitigation = object.mitigation ?? "";
    message.impact = object.impact ?? 0;
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
    mitigation: "",
    impact: 0,
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
    if (message.mitigation !== "") {
      writer.uint32(42).string(message.mitigation);
    }
    if (message.impact !== 0) {
      writer.uint32(48).int32(message.impact);
    }
    if (message.ownership !== "") {
      writer.uint32(58).string(message.ownership);
    }
    if (message.projectId !== 0) {
      writer.uint32(64).uint32(message.projectId);
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
          if (tag !== 42) {
            break;
          }

          message.mitigation = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.impact = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.ownership = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
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
      mitigation: isSet(object.mitigation) ? globalThis.String(object.mitigation) : "",
      impact: isSet(object.impact) ? riskImpactFromJSON(object.impact) : 0,
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
    if (message.mitigation !== "") {
      obj.mitigation = message.mitigation;
    }
    if (message.impact !== 0) {
      obj.impact = riskImpactToJSON(message.impact);
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
    message.mitigation = object.mitigation ?? "";
    message.impact = object.impact ?? 0;
    message.ownership = object.ownership ?? "";
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseUpdateRiskRequest(): UpdateRiskRequest {
  return { id: 0, name: "", description: "", likelihood: 0, category: 0, mitigation: "", impact: 0, ownership: "" };
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
    if (message.mitigation !== "") {
      writer.uint32(50).string(message.mitigation);
    }
    if (message.impact !== 0) {
      writer.uint32(56).int32(message.impact);
    }
    if (message.ownership !== "") {
      writer.uint32(66).string(message.ownership);
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
          if (tag !== 50) {
            break;
          }

          message.mitigation = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.impact = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.ownership = reader.string();
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
      mitigation: isSet(object.mitigation) ? globalThis.String(object.mitigation) : "",
      impact: isSet(object.impact) ? riskImpactFromJSON(object.impact) : 0,
      ownership: isSet(object.ownership) ? globalThis.String(object.ownership) : "",
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
    if (message.mitigation !== "") {
      obj.mitigation = message.mitigation;
    }
    if (message.impact !== 0) {
      obj.impact = riskImpactToJSON(message.impact);
    }
    if (message.ownership !== "") {
      obj.ownership = message.ownership;
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
    message.mitigation = object.mitigation ?? "";
    message.impact = object.impact ?? 0;
    message.ownership = object.ownership ?? "";
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

function createBaseIssue(): Issue {
  return {
    id: 0,
    summary: "",
    description: "",
    status: 0,
    priority: 0,
    reportedBy: "",
    ownership: "",
    taskId: [],
    projectId: 0,
  };
}

export const Issue = {
  encode(message: Issue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.summary !== "") {
      writer.uint32(18).string(message.summary);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.priority !== 0) {
      writer.uint32(40).int32(message.priority);
    }
    if (message.reportedBy !== "") {
      writer.uint32(50).string(message.reportedBy);
    }
    if (message.ownership !== "") {
      writer.uint32(58).string(message.ownership);
    }
    for (const v of message.taskId) {
      writer.uint32(66).string(v!);
    }
    if (message.projectId !== 0) {
      writer.uint32(72).uint32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Issue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIssue();
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

          message.summary = reader.string();
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

          message.status = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.priority = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.reportedBy = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.ownership = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.taskId.push(reader.string());
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

  fromJSON(object: any): Issue {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      summary: isSet(object.summary) ? globalThis.String(object.summary) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      status: isSet(object.status) ? issueStatusFromJSON(object.status) : 0,
      priority: isSet(object.priority) ? issuePriorityFromJSON(object.priority) : 0,
      reportedBy: isSet(object.reportedBy) ? globalThis.String(object.reportedBy) : "",
      ownership: isSet(object.ownership) ? globalThis.String(object.ownership) : "",
      taskId: globalThis.Array.isArray(object?.taskId) ? object.taskId.map((e: any) => globalThis.String(e)) : [],
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : 0,
    };
  },

  toJSON(message: Issue): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.summary !== "") {
      obj.summary = message.summary;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.status !== 0) {
      obj.status = issueStatusToJSON(message.status);
    }
    if (message.priority !== 0) {
      obj.priority = issuePriorityToJSON(message.priority);
    }
    if (message.reportedBy !== "") {
      obj.reportedBy = message.reportedBy;
    }
    if (message.ownership !== "") {
      obj.ownership = message.ownership;
    }
    if (message.taskId?.length) {
      obj.taskId = message.taskId;
    }
    if (message.projectId !== 0) {
      obj.projectId = Math.round(message.projectId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Issue>, I>>(base?: I): Issue {
    return Issue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Issue>, I>>(object: I): Issue {
    const message = createBaseIssue();
    message.id = object.id ?? 0;
    message.summary = object.summary ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? 0;
    message.priority = object.priority ?? 0;
    message.reportedBy = object.reportedBy ?? "";
    message.ownership = object.ownership ?? "";
    message.taskId = object.taskId?.map((e) => e) || [];
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseListIssuesRequest(): ListIssuesRequest {
  return { id: undefined, taskId: undefined, projectId: undefined, limit: undefined, offset: undefined };
}

export const ListIssuesRequest = {
  encode(message: ListIssuesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListIssuesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListIssuesRequest();
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

  fromJSON(object: any): ListIssuesRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : undefined,
      taskId: isSet(object.taskId) ? globalThis.Number(object.taskId) : undefined,
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : undefined,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : undefined,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : undefined,
    };
  },

  toJSON(message: ListIssuesRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListIssuesRequest>, I>>(base?: I): ListIssuesRequest {
    return ListIssuesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListIssuesRequest>, I>>(object: I): ListIssuesRequest {
    const message = createBaseListIssuesRequest();
    message.id = object.id ?? undefined;
    message.taskId = object.taskId ?? undefined;
    message.projectId = object.projectId ?? undefined;
    message.limit = object.limit ?? undefined;
    message.offset = object.offset ?? undefined;
    return message;
  },
};

function createBaseCreateIssuesRequest(): CreateIssuesRequest {
  return {
    summary: "",
    description: "",
    status: 0,
    priority: 0,
    reportedBy: "",
    ownership: "",
    taskId: [],
    projectId: 0,
  };
}

export const CreateIssuesRequest = {
  encode(message: CreateIssuesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.summary !== "") {
      writer.uint32(10).string(message.summary);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.priority !== 0) {
      writer.uint32(32).int32(message.priority);
    }
    if (message.reportedBy !== "") {
      writer.uint32(42).string(message.reportedBy);
    }
    if (message.ownership !== "") {
      writer.uint32(50).string(message.ownership);
    }
    for (const v of message.taskId) {
      writer.uint32(58).string(v!);
    }
    if (message.projectId !== 0) {
      writer.uint32(64).uint32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateIssuesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateIssuesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.summary = reader.string();
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

          message.status = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.priority = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.reportedBy = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.ownership = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.taskId.push(reader.string());
          continue;
        case 8:
          if (tag !== 64) {
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

  fromJSON(object: any): CreateIssuesRequest {
    return {
      summary: isSet(object.summary) ? globalThis.String(object.summary) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      status: isSet(object.status) ? issueStatusFromJSON(object.status) : 0,
      priority: isSet(object.priority) ? issuePriorityFromJSON(object.priority) : 0,
      reportedBy: isSet(object.reportedBy) ? globalThis.String(object.reportedBy) : "",
      ownership: isSet(object.ownership) ? globalThis.String(object.ownership) : "",
      taskId: globalThis.Array.isArray(object?.taskId) ? object.taskId.map((e: any) => globalThis.String(e)) : [],
      projectId: isSet(object.projectId) ? globalThis.Number(object.projectId) : 0,
    };
  },

  toJSON(message: CreateIssuesRequest): unknown {
    const obj: any = {};
    if (message.summary !== "") {
      obj.summary = message.summary;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.status !== 0) {
      obj.status = issueStatusToJSON(message.status);
    }
    if (message.priority !== 0) {
      obj.priority = issuePriorityToJSON(message.priority);
    }
    if (message.reportedBy !== "") {
      obj.reportedBy = message.reportedBy;
    }
    if (message.ownership !== "") {
      obj.ownership = message.ownership;
    }
    if (message.taskId?.length) {
      obj.taskId = message.taskId;
    }
    if (message.projectId !== 0) {
      obj.projectId = Math.round(message.projectId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateIssuesRequest>, I>>(base?: I): CreateIssuesRequest {
    return CreateIssuesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateIssuesRequest>, I>>(object: I): CreateIssuesRequest {
    const message = createBaseCreateIssuesRequest();
    message.summary = object.summary ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? 0;
    message.priority = object.priority ?? 0;
    message.reportedBy = object.reportedBy ?? "";
    message.ownership = object.ownership ?? "";
    message.taskId = object.taskId?.map((e) => e) || [];
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseUpdateIssuesRequest(): UpdateIssuesRequest {
  return { id: 0, summary: "", description: "", status: 0, priority: 0, reportedBy: "", ownership: "", taskId: [] };
}

export const UpdateIssuesRequest = {
  encode(message: UpdateIssuesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.summary !== "") {
      writer.uint32(18).string(message.summary);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.priority !== 0) {
      writer.uint32(40).int32(message.priority);
    }
    if (message.reportedBy !== "") {
      writer.uint32(50).string(message.reportedBy);
    }
    if (message.ownership !== "") {
      writer.uint32(58).string(message.ownership);
    }
    for (const v of message.taskId) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIssuesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateIssuesRequest();
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

          message.summary = reader.string();
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

          message.status = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.priority = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.reportedBy = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.ownership = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.taskId.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateIssuesRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      summary: isSet(object.summary) ? globalThis.String(object.summary) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      status: isSet(object.status) ? issueStatusFromJSON(object.status) : 0,
      priority: isSet(object.priority) ? issuePriorityFromJSON(object.priority) : 0,
      reportedBy: isSet(object.reportedBy) ? globalThis.String(object.reportedBy) : "",
      ownership: isSet(object.ownership) ? globalThis.String(object.ownership) : "",
      taskId: globalThis.Array.isArray(object?.taskId) ? object.taskId.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: UpdateIssuesRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.summary !== "") {
      obj.summary = message.summary;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.status !== 0) {
      obj.status = issueStatusToJSON(message.status);
    }
    if (message.priority !== 0) {
      obj.priority = issuePriorityToJSON(message.priority);
    }
    if (message.reportedBy !== "") {
      obj.reportedBy = message.reportedBy;
    }
    if (message.ownership !== "") {
      obj.ownership = message.ownership;
    }
    if (message.taskId?.length) {
      obj.taskId = message.taskId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateIssuesRequest>, I>>(base?: I): UpdateIssuesRequest {
    return UpdateIssuesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateIssuesRequest>, I>>(object: I): UpdateIssuesRequest {
    const message = createBaseUpdateIssuesRequest();
    message.id = object.id ?? 0;
    message.summary = object.summary ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? 0;
    message.priority = object.priority ?? 0;
    message.reportedBy = object.reportedBy ?? "";
    message.ownership = object.ownership ?? "";
    message.taskId = object.taskId?.map((e) => e) || [];
    return message;
  },
};

function createBaseDeleteIssuesRequest(): DeleteIssuesRequest {
  return { id: 0 };
}

export const DeleteIssuesRequest = {
  encode(message: DeleteIssuesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteIssuesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteIssuesRequest();
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

  fromJSON(object: any): DeleteIssuesRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: DeleteIssuesRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteIssuesRequest>, I>>(base?: I): DeleteIssuesRequest {
    return DeleteIssuesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteIssuesRequest>, I>>(object: I): DeleteIssuesRequest {
    const message = createBaseDeleteIssuesRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseIssuesList(): IssuesList {
  return { data: [] };
}

export const IssuesList = {
  encode(message: IssuesList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      Issue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IssuesList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIssuesList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data.push(Issue.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IssuesList {
    return { data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => Issue.fromJSON(e)) : [] };
  },

  toJSON(message: IssuesList): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data.map((e) => Issue.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IssuesList>, I>>(base?: I): IssuesList {
    return IssuesList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IssuesList>, I>>(object: I): IssuesList {
    const message = createBaseIssuesList();
    message.data = object.data?.map((e) => Issue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseIssueResponse(): IssueResponse {
  return { data: undefined, error: undefined };
}

export const IssueResponse = {
  encode(message: IssueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      IssuesList.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      ErrorResponse.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IssueResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIssueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = IssuesList.decode(reader, reader.uint32());
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

  fromJSON(object: any): IssueResponse {
    return {
      data: isSet(object.data) ? IssuesList.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? ErrorResponse.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: IssueResponse): unknown {
    const obj: any = {};
    if (message.data !== undefined) {
      obj.data = IssuesList.toJSON(message.data);
    }
    if (message.error !== undefined) {
      obj.error = ErrorResponse.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IssueResponse>, I>>(base?: I): IssueResponse {
    return IssueResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IssueResponse>, I>>(object: I): IssueResponse {
    const message = createBaseIssueResponse();
    message.data = (object.data !== undefined && object.data !== null)
      ? IssuesList.fromPartial(object.data)
      : undefined;
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
  ListIssues(request: ListIssuesRequest): Promise<IssueResponse>;
  CreateIssues(request: CreateIssuesRequest): Promise<IssueResponse>;
  UpdateIssues(request: UpdateIssuesRequest): Promise<IssueResponse>;
  DeleteIssues(request: DeleteIssuesRequest): Promise<Empty>;
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
    this.ListIssues = this.ListIssues.bind(this);
    this.CreateIssues = this.CreateIssues.bind(this);
    this.UpdateIssues = this.UpdateIssues.bind(this);
    this.DeleteIssues = this.DeleteIssues.bind(this);
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

  ListIssues(request: ListIssuesRequest): Promise<IssueResponse> {
    const data = ListIssuesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListIssues", data);
    return promise.then((data) => IssueResponse.decode(_m0.Reader.create(data)));
  }

  CreateIssues(request: CreateIssuesRequest): Promise<IssueResponse> {
    const data = CreateIssuesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateIssues", data);
    return promise.then((data) => IssueResponse.decode(_m0.Reader.create(data)));
  }

  UpdateIssues(request: UpdateIssuesRequest): Promise<IssueResponse> {
    const data = UpdateIssuesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateIssues", data);
    return promise.then((data) => IssueResponse.decode(_m0.Reader.create(data)));
  }

  DeleteIssues(request: DeleteIssuesRequest): Promise<Empty> {
    const data = DeleteIssuesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteIssues", data);
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

import { Agent } from "../../../core/services/agent-api.service";

export interface AgentCategories {
    [category: string]: Agent["tasks"];
}
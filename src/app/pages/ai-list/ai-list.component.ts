import { Component, OnInit } from "@angular/core";
import { AgentApiService, Agent } from "../../core/services/agent-api.service";

@Component({
  selector: "app-ai-list",
  styles: ["tr {cursor: pointer}", "tr:hover td {background-color: #eee;"],
  templateUrl: "./ai-list.component.html",
})
export class AiListComponent implements OnInit {
  loading: boolean = false;
  error?: string | null;
  agents?: ReadonlyArray<Agent>;
  constructor(private agentApi: AgentApiService) {}

  async setSearchValue(value: string) {
    await this.getAgents(value);
  }

  async ngOnInit() {
    await this.getAgents();
  }

  async getAgents(value?: string) {
    this.loading = true;
    this.error = null;
    try {
      if (value) {
        this.agents = await this.agentApi.searchAgents(value);
      } else {
        this.agents = await this.agentApi.listAgents();
      }
    } catch (e) {
      console.error(e);
      this.error = e;
    }
    this.loading = false;
  }
}

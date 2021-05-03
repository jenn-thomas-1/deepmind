import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { AgentApiService, Agent } from '../../../../core/services/agent-api.service';

@Component({
  selector: 'app-agent-dropdown',
  templateUrl: './agent-dropdown.component.html',
  styleUrls: ['./agent-dropdown.component.scss']
})
export class AgentDropdownComponent implements OnInit {
  @Output() setDropdownValue: EventEmitter<Agent | null> = new EventEmitter();
  @Input() currentAgentId?: number;
  loading: boolean = false;
  agents?: ReadonlyArray<Agent>;
  error?: string;

  constructor(private agentApi: AgentApiService) { }

  changeValue(value: string): void {
    this.setDropdownValue.emit(this.agents ? this.agents.find(({ id }) => id === Number(value)) : null);
  }

  async ngOnInit() {
    this.loading = true;
    try {
      const agentsList = await this.agentApi.listAgents();
      this.agents = agentsList.filter(({ id }) => this.currentAgentId !== id)
    } catch (e) {
      console.error(e)
      this.error = "Could not retrieve comparison agents";
    }
    this.loading = false;
  }

}

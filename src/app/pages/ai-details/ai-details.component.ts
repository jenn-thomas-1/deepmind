import { Component, OnInit } from '@angular/core';
import { AgentApiService, Agent } from '../../core/services/agent-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ai-details',
  templateUrl: './ai-details.component.html',
  styleUrls: ['./ai-details.component.scss']
})
export class AiDetailsComponent implements OnInit {
  loading: boolean = false;
  error?: string | null;
  agent?: Agent;
  comparisonAgent?: Agent | null;
  constructor(
    private agentApi: AgentApiService,
    private route: ActivatedRoute
  ) { }

  async setComparisonValue(value: Agent | null) {
    this.comparisonAgent = value;
  }

  async ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    try {
      this.agent = await this.agentApi.getAgent(id);
    } catch (e) {
      console.error(e)
      this.error = e;
    }
    this.loading = false;
  }

}
import { Component, Input } from '@angular/core';
import { Agent } from '../../../../core/services/agent-api.service';
import { AgentCategories } from '../../types/categories';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html'
})
export class DetailsTableComponent {
  @Input() currentAgent?: Agent;
  @Input() comparisonAgent?: Agent | null;

  agentCategories: AgentCategories = {};
  comparisonAgentCategories?: AgentCategories;

  getAgentCategories(agent: Agent) {
    return agent.tasks.reduce((acc, task) => {
      if (acc[task.category]) {
        acc[task.category].push(task);
      } else {
        acc[task.category] = [task];
      }
      return acc;
    }, {} as AgentCategories)
  }

  ngOnChanges(): void {
    if (this.currentAgent) {
      this.agentCategories = this.getAgentCategories(this.currentAgent);
    }
    if (this.comparisonAgent) {
      this.comparisonAgentCategories = this.getAgentCategories(this.comparisonAgent);
    }
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Agent } from '../../../../core/services/agent-api.service';

@Component({
  selector: 'app-category-score',
  templateUrl: './category-score.component.html',
  styleUrls: ['./category-score.component.scss']
})
export class CategoryScoreComponent implements OnInit {
  @Input() tasks: Agent["tasks"] = []
  score?: number;

  ngOnInit(): void {
    if (this.tasks.length > 0) {
      const total = this.tasks.reduce((total, { score }) => total + score, 0);
      this.score = total / this.tasks.length;
    }
  }
}

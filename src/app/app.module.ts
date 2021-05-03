import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AiListComponent } from './pages/ai-list/ai-list.component';
import { AiDetailsComponent } from './pages/ai-details/ai-details.component';
import { SearchComponent } from './core/components/search/search.component';
import { AgentDropdownComponent } from './pages/ai-details/components/agent-dropdown/agent-dropdown.component';
import { DetailsTableComponent } from './pages/ai-details/components/details-table/details-table.component';
import { CategoryScoreComponent } from './pages/ai-details/components/category-score/category-score.component';

@NgModule({
  declarations: [
    AppComponent,
    AiListComponent,
    AiDetailsComponent,
    SearchComponent,
    AgentDropdownComponent,
    DetailsTableComponent,
    CategoryScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

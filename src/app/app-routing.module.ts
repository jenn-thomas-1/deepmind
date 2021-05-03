import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AiListComponent } from './pages/ai-list/ai-list.component';
import { AiDetailsComponent } from './pages/ai-details/ai-details.component';

const routes: Routes = [
  { path: '', component: AiListComponent },
  { path: ':id', component: AiDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

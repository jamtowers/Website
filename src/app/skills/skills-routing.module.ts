import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillsComponent } from './skills.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { LanguagesComponent } from './languages/languages.component';
import { FrameworksComponent } from './frameworks/frameworks.component';
import { AdditionalComponent } from './additional/additional.component';

const routes: Routes = [
  { path: '', component: SkillsComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'languages', component: LanguagesComponent },
  { path: 'frameworks', component: FrameworksComponent },
  { path: 'additional', component: AdditionalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }

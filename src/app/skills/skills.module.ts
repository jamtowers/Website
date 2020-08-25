import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MarkdownModule } from 'ngx-markdown';
import { MatExpansionModule } from '@angular/material/expansion';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import { LanguagesComponent } from './languages/languages.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { FrameworksComponent } from './frameworks/frameworks.component';
import { AdditionalComponent } from './additional/additional.component';
import { LanguageComponent } from './languages/language/language.component';
import { FrameworkComponent } from './frameworks/framework/framework.component';

@NgModule({
  declarations: [SkillsComponent, LanguagesComponent, ConceptsComponent, FrameworksComponent, AdditionalComponent, LanguageComponent, FrameworkComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    MarkdownModule.forChild(),
    MatProgressBarModule,
    MatExpansionModule
  ]
})
export class SkillsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnownTechnologiesComponent } from './known-technologies/known-technologies.component';
import { ToolsComponent } from './tools/tools.component';
import { IdeSComponent } from './ide-s/ide-s.component';
import { AnotherKnownledgesComponent } from './another-knownledges/another-knownledges.component';



@NgModule({
  declarations: [
    KnownTechnologiesComponent,
    ToolsComponent,
    IdeSComponent,
    AnotherKnownledgesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AnotherInformationModule { }

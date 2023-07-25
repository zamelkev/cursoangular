import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { IntroAbstractComponent } from './intro-abstract/intro-abstract.component';
import { ContactDatasComponent } from './contact-datas/contact-datas.component';
import { LanguagesComponent } from './languages/languages.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { IntroAbstractDetailComponent } from './intro-abstract-detail/intro-abstract-detail.component';



@NgModule({
  declarations: [
    IntroAbstractComponent,
    ContactDatasComponent,
    LanguagesComponent,
    SocialNetworksComponent,
    IntroAbstractDetailComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    IntroAbstractComponent,
    IntroAbstractDetailComponent,
    ContactDatasComponent,
    LanguagesComponent,
    SocialNetworksComponent
  ]
})
export class PersonalDataModule { }

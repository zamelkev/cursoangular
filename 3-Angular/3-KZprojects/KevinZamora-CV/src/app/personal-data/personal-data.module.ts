import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroAbstractComponent } from './intro-abstract/intro-abstract.component';
import { ContactDatasComponent } from './contact-datas/contact-datas.component';
import { LanguagesComponent } from './languages/languages.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';



@NgModule({
  declarations: [
    IntroAbstractComponent,
    ContactDatasComponent,
    LanguagesComponent,
    SocialNetworksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IntroAbstractComponent,
    ContactDatasComponent,
    LanguagesComponent,
    SocialNetworksComponent
  ]
})
export class PersonalDataModule { }

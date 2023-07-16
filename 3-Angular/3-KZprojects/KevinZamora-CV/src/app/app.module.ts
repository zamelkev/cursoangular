import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AnotherInformationModule } from './another-information/another-information.module';
import { EducationalExperienciesModule } from './educational-experiencies/educational-experiencies.module';
import { MainComponentsModule } from './main-components/main-components.module';
import { PersonalDataModule } from './personal-data/personal-data.module';
import { VolunteeringAndSocialActionsModule } from './volunteering-and-social-actions/volunteering-and-social-actions.module';
import { WorkingExperienciesModule } from './working-experiencies/working-experiencies.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AnotherInformationModule,
    EducationalExperienciesModule,
    MainComponentsModule,
    PersonalDataModule,
    VolunteeringAndSocialActionsModule,
    WorkingExperienciesModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

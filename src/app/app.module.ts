import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { DatepickerModule } from 'angular2-material-datepicker';


import {AppComponent} from './app.component';
import {RegistrationListComponent} from './registration/registration-list/registration-list.component';
import {RegistrationItemComponent} from './Registration/Registration-List/registration-item/registration-item.component';
import {RegistrationFormComponent} from './Registration/registration-form/registration-form.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {VolunteerListComponent} from './volunteer/volunteer-list/volunteer-list.component';
import {VolunteerItemComponent} from './volunteer/volunteer-list/volunteer-item/volunteer-item.component';
import {SearchComponent} from './shared/search/search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationListComponent,
    RegistrationItemComponent,
    RegistrationFormComponent,
    HeaderComponent,
    HomeComponent,
    VolunteerListComponent,
    VolunteerItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    DatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

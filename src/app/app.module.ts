import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobEntryComponent } from './job-entry/job-entry.component';
import { ApplicationStatusComponent } from './application-status/application-status.component';

@NgModule({
  declarations: [
    AppComponent,
    JobEntryComponent,
    ApplicationStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

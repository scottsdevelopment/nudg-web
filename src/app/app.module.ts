import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PolicyFormComponent } from './policy-form/policy-form.component';
import { PolicyDropdownComponent } from './policy-dropdown/policy-dropdown.component';
import { PolicyPercentBoxComponent } from './policy-percent-box/policy-percent-box.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DashboardComponent,
    PolicyFormComponent,
    PolicyDropdownComponent,
    PolicyPercentBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

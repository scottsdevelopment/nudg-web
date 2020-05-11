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
import { TableComponent } from './EditableTable/table/table.component';
import { RowComponent } from './EditableTable/row/row.component';
import { LoginComponent } from './login/login.component';
import { TemplateNameComponent } from './template-name/template-name.component';
import { DeficiencyFormComponent } from './deficiency-form/deficiency-form.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { PolicyEffects } from './effects/policy.effects';
import { UpdateDeficiencyFormComponent } from './deficiency-form/update/update.component';
import { CreateDeficiencyFormComponent } from './deficiency-form/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
// Reducers
import { reducer as policyReducer, keyName as policyKey } from './reducers/policies.reducer';
import { reducer as policyFamilyReducer, keyName as policyFamilyKey } from './reducers/policyFamilies.reducer';
import { reducer as deficiencyReducer, keyName as deficiencyKey } from './reducers/deficiencies.reducer';
import { reducer as objectiveReducer, keyName as objectiveKey } from './reducers/objectives.reducer';
import { reducer as procedureControlReducer, keyName as procedureControlKey } from './reducers/procedureControls.reducer';
import { reducer as procedureReducer, keyName as procedureKey } from './reducers/procedures.reducer';
import { reducer as processReducer, keyName as processKey } from './reducers/processes.reducer';
import { reducer as revisionReducer, keyName as revisionKey } from './reducers/revisions.reducer';
import { metaReducers } from './reducers/meta.reducer';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DashboardComponent,
    PolicyFormComponent,
    PolicyDropdownComponent,
    PolicyPercentBoxComponent,
    TableComponent,
    RowComponent,
    LoginComponent,
    TemplateNameComponent,
    DeficiencyFormComponent,
    UpdateDeficiencyFormComponent,
    CreateDeficiencyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    SocketIoModule.forRoot({ url: `${environment.apiEndpoint}`, options: {}}),
    StoreModule.forRoot({ 
      [policyKey]: policyReducer,
      [policyFamilyKey]: policyFamilyReducer,
      [deficiencyKey]: deficiencyReducer,
      [objectiveKey]: objectiveReducer, 
      [procedureControlKey]: procedureControlReducer,
      [procedureKey]: procedureReducer,
      [processKey]: processReducer,
      [revisionKey]: revisionReducer
    }, { metaReducers }),
    EffectsModule.forRoot([PolicyEffects]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, Input } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';
import { filter } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { Store, createSelector } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import RevisionDeficiency from '../interfaces/RevisionDeficiency';
import AppState from '../interfaces/AppState';
import { Observable, of } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Create, Update, Get } from '../actions/deficiency.actions';
import { selecyById } from '../reducers/deficiencies.reducer';

@Component({
  selector: 'app-deficiency-form',
  templateUrl: './deficiency-form.component.html',
  styleUrls: ['./deficiency-form.component.scss']
})
export class DeficiencyFormComponent implements OnInit {

  @Input() create: boolean = false;

  id: number;
  model: Observable<Partial<RevisionDeficiency>> = of({
    id: null,
    name: '',
    description: '',
    dateDetection: null,
    dateStatus: null,
    status: ''
  });

  form = new FormGroup({
    id: new FormControl({
      value: '',
      disabled: true
    }),
    name: new FormControl(),
    description: new FormControl(),
    dateDetection: new FormControl(),
    dateStatus: new FormControl(),
    status: new FormControl(),
    source: new FormControl(),
    weaknessSourceIdentifier: new FormControl(),
    assetNameId: new FormControl(),
    pointOfContact: new FormControl(),
    resoucesRequired: new FormControl(),
    resourceEstimate: new FormControl(),
    plan: new FormControl(),
    dateScheduleCompletion: new FormControl(),
    vendorDependency: new FormControl(),
    dateLastVendorCheckin: new FormControl(),
    vendorDependentProductName: new FormControl(),
    originalRiskRating: new FormControl(),
    adjustedRiskRating: new FormControl(),
    riskAdjustment: new FormControl(),
    riskAdjustmentDeviationRationale: new FormControl(),
    falsePositive: new FormControl(),
    operationalRequirement: new FormControl(),
    operationalRequirementDeviaitonRationale: new FormControl(),
    comments: new FormControl()
  });

  constructor(private route: ActivatedRoute, private api: ApiService, public webSocketService: WebsocketService, private store: Store) {

  }

  ngOnInit(): void {
    this.route.params
      .pipe(filter(params => params.id))
      .subscribe(params => {
        this.id = +params.id;
        if (!this.create) {
          this.store.dispatch(new Get(this.id));
          this.model = this.store.select(selecyById(this.id));
          this.model.pipe(filter((model) => !!model))
            .subscribe((deficiency) => {
              this.form.patchValue(deficiency);
            })
        }
      });

  }

  onSubmit() {
    if (this.create) {
      this.store.dispatch(new Create({ revisionId: this.id, ...this.form.value }));
    } else {
      this.store.dispatch(new Update(this.id, this.form.value));
    }
  }
}

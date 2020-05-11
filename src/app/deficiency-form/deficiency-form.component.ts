import { Component, OnInit, Input } from '@angular/core';
import { WebsocketService } from '../websocket.service';
import { filter } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { Store, createSelector } from '@ngrx/store';
import { UpdateDeficiency, GetDeficiency, CreateDeficiency } from '../actions/policy.actions';
import { ActivatedRoute } from '@angular/router';
import RevisionDeficiency from '../interfaces/RevisionDeficiency';
import AppState from '../interfaces/AppState';
import { Observable, of } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

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
    status: new FormControl()
  });

  constructor(private route: ActivatedRoute, private api: ApiService, public webSocketService: WebsocketService, private store: Store) {

  }

  ngOnInit(): void {
    this.route.params
      .pipe(filter(params => params.id))
      .subscribe(params => {
        this.id = +params.id;
        if (!this.create) {
          this.store.dispatch(new GetDeficiency(this.id));
          this.model = this.store.select(createSelector(((state: AppState) => state.deficiencies), ((deficiencies: RevisionDeficiency[]) => deficiencies.find((deficiency) => deficiency.id === this.id))));
          this.model.pipe(filter((model) => !!model))
            .subscribe((deficiency) => {
              this.form.patchValue(deficiency);
            })
        }
      });

  }

  onSubmit() {
    if (this.create) {
      this.store.dispatch(new CreateDeficiency({ revisionId: this.id, ...this.form.value }));
    } else {
      this.store.dispatch(new UpdateDeficiency(this.id, this.form.value));
    }
  }
}

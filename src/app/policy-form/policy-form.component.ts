import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import Policy from '../interfaces/Policy';
import PolicyRevision from '../interfaces/PolicyRevision';
import { PolicyFamilyService } from '../policy-family.service';
import PolicyFamily from '../interfaces/PolicyFamily';
import RevisionDeficiency from '../interfaces/RevisionDeficiency';
import { filter } from 'rxjs/operators';
import { Store, createSelector } from '@ngrx/store';
import AppState from '../interfaces/AppState';
import { PopupService } from '../popup.service';
import { selectByRevision } from '../reducers/deficiencies.reducer';

@Component({
  selector: 'app-policy-form',
  templateUrl: './policy-form.component.html',
  styleUrls: ['./policy-form.component.scss']
})
export class PolicyFormComponent implements OnInit {
  id: number = 0;
  policy: Policy = null;
  policyLength: number = 0;
  family: PolicyFamily = null;
  revisions: PolicyRevision[] = null;
  constructor(private router: Router, private route: ActivatedRoute, public policyFamily: PolicyFamilyService, private store: Store, private popup: PopupService) { }

  ngOnInit() {
    this.route.params
      .pipe(filter(params => params.id))
      .subscribe(params => {
        this.id = params.id;
        this.policyFamily.getPolicyByIndex(this.id - 1)
          .subscribe((policy) => {
            this.policy = policy
            this.policyFamily
              .getPolicyFamilyById(policy.familyId)
              .subscribe((family) => this.family = family);
          });
      });

    this.policyFamily.getPolicyFamilies()
      .subscribe((policyFamilies) => {
        if (!policyFamilies.length) {
          return;
        }

        this.policyLength = policyFamilies
          .map((policyFamily) => policyFamily.policies.length)
          .reduce((sum, current) => sum + current);
      });
  }

  getDeficiencies() {
    const revisionId = this.getLatestRevision(this.policy).id;
    return this.store.select(selectByRevision(revisionId));
  }

  getLatestRevision(policy: Policy): PolicyRevision {
    return policy?.revisions[0] || { id: -1, number: '', status: '' };
  }

  editRow(element: HTMLElement, deficiency: RevisionDeficiency, column: string) {
    alert(element);
  }

  first() {
    this.id = 1;
    this.router.navigate(['policy', this.id]);
  }

  last() {
    this.id = this.policyLength;
    this.router.navigate(['policy', this.id]);
  }

  previous() {
    if (this.id > 1) {
      this.id--;
      this.router.navigate(['policy', this.id]);
    }
  }

  next() {
    if (this.id < this.policyLength) {
      this.id++;
      this.router.navigate(['policy', this.id]);
    }
  }

  openDeficiencyForm(id: string | number) {
    this.popup.createPopup(this.router.parseUrl(`/deficiency/${id}`).toString(), 910, 700);
  }

  openCreateDeficiencyForm() {
    const id = this.getLatestRevision(this.policy).id;
    this.popup.createPopup(this.router.parseUrl(`/revision/${id}/deficiency`).toString(), 910, 700);
  }

  getDateFormat(date: string): string {
    const d = new Date(date);
    // return `${d.getMonth()}-${d.getDate()}-${d.getFullYear()}`;
    return d.toDateString();
  }
}

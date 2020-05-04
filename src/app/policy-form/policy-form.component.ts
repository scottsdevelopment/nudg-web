import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import Policy from '../interfaces/Policy';
import PolicyRevision from '../interfaces/PolicyRevision';
import { PolicyFamilyService } from '../policy-family.service';
import PolicyFamily from '../interfaces/PolicyFamily';
import RevisionDeficiency from '../interfaces/RevisionDeficiency';
import { filter } from 'rxjs/operators';

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
  constructor(private router: Router, private route: ActivatedRoute, public policyFamily: PolicyFamilyService) { }

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

  getLatestRevision(policy: Policy): PolicyRevision {
    return policy?.revisions[0] || { number: '', status: '' };
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

}

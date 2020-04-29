import { Component, OnInit } from '@angular/core';
import Policy from '../interfaces/Policy';
import PolicyFamily from '../interfaces/PolicyFamily';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  policyFamilies: PolicyFamily[];
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.api.getPolicyFamilies().subscribe((response) => {
      this.policyFamilies = response;
    })
  }

  getPolicyFamilyCompletePercent(policyFamily: PolicyFamily) {
    const percent = 100 * this.getPolicyFamilyImplemented(policyFamily) / policyFamily.policies.length;
    return percent || 0;
  }

  getPolicyFamilyImplemented(policyFamily: PolicyFamily) {
    return policyFamily.policies.filter((policy) => policy.status).length || 0;
  }

  getPolicyFamilyAbbreviation(policyFamily: PolicyFamily) {
    const splits = policyFamily.name.split('(');
    const abbreviation = splits[1].split(')')[0];
    return abbreviation;
  }

  getPolicyForm(policy: Policy) {
    this.router.navigateByUrl(`/policy/${policy.id}`);
  }

}

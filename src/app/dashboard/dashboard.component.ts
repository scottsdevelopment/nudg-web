import { Component, OnInit } from '@angular/core';
import Policy from '../interfaces/Policy';
import PolicyFamily from '../interfaces/PolicyFamily';
import { Router } from '@angular/router';
import { PolicyFamilyService } from '../services/policy-family.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  policyFamilies: PolicyFamily[];
  constructor(public policyFamily: PolicyFamilyService, private router: Router) { }

  ngOnInit() {
    this.policyFamily
      .getPolicyFamilies()
      .subscribe((policyFamilies) => {
        this.policyFamilies = policyFamilies
      });
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

  openPolicyForm(policy: Policy) {
    const popup = window.open(this.router.parseUrl(`/policy/${this.getPolicyIndex(policy.id) + 1}`).toString(), '_blank', 'left=0,top=0,toolbar=No,location=No,scrollbars=no,status=No,resizable=no,fullscreen=Yes');
    popup.resizeTo(screen.availWidth, screen.availHeight);
  }

  getPolicyIndex(id: string | number): number {
    return this.policyFamilies.map((family) => family.policies)
      .reduce((previous, current) => [...previous, ...current])
      .findIndex((policy) => policy.id == id);
  }
}

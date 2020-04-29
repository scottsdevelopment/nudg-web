import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import Policy from '../interfaces/Policy';
import PolicyRevision from '../interfaces/PolicyRevision';

@Component({
  selector: 'app-policy-form',
  templateUrl: './policy-form.component.html',
  styleUrls: ['./policy-form.component.scss']
})
export class PolicyFormComponent implements OnInit {

  policy: Policy = null;
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.api.getPolicyById(id).subscribe((policy) => this.policy = policy)
  }

  getLatestRevision(policy: Policy): PolicyRevision {
    return policy?.revisions[0] || { number: '', status: '' };
  }

}

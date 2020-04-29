import { Component, OnInit, ElementRef, HostListener, Input } from '@angular/core';
import Policy from '../interfaces/Policy';
import PolicyRevision from '../interfaces/PolicyRevision';

@Component({
  selector: 'app-policy-dropdown',
  templateUrl: './policy-dropdown.component.html',
  styleUrls: ['./policy-dropdown.component.scss']
})
export class PolicyDropdownComponent implements OnInit {
  opened: boolean = false;
  
  @Input() policies: Policy[];
  policy: Policy = null;

  constructor(private eRef: ElementRef) {
  }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.opened = false;
    }
  }

  // @TODO: Unduplicate this code
  getLatestRevision(policy: Policy): PolicyRevision {
    return policy.revisions[0] || { number: '', status: '' };
  }

  onDropdown() {
    this.opened = !this.opened;
  }

  onSelect(policy) {
    this.opened = false;
    this.policy = policy;
  }

}

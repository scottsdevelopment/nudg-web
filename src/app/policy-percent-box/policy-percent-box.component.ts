import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-policy-percent-box',
  templateUrl: './policy-percent-box.component.html',
  styleUrls: ['./policy-percent-box.component.scss']
})
export class PolicyPercentBoxComponent implements OnInit {

  @Input() complete: number;

  constructor() { }

  ngOnInit() {
  }

}

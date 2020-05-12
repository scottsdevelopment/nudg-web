import { Component, OnInit, Input, ViewChild, TemplateRef, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-template-name',
  templateUrl: './template-name.component.html',
  styleUrls: ['./template-name.component.scss']
})
export class TemplateNameComponent implements OnInit {

  @Input() name: string;
  @ContentChild(TemplateRef) templateRef: TemplateRef<ElementRef>;
  constructor() { }

  ngOnInit(): void {
  }

}

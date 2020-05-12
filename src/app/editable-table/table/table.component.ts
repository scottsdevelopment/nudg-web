import { Component, OnInit, Input, TemplateRef, ContentChildren, ElementRef, QueryList, Output, EventEmitter } from '@angular/core';
import { TemplateNameComponent } from 'src/app/editable-table/template-name/template-name.component';

@Component({
  selector: 'app-editable-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() source;
  @Input() columns;
  @Output('onNew') public onNewOutput = new EventEmitter();

  @ContentChildren(TemplateNameComponent) templateRef: QueryList<TemplateNameComponent>;
  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    // console.log(this.templateRef);
    // debugger;
  }

  getTemplateByKey(key: string) {
    return this.templateRef.find((template) => template.name === key)?.templateRef;
  }

  getColumnType(column: any) {
    return column.type || 'text';
  }

  new() {
    this.onNewOutput.emit();
    /* const data: any = {};
    this.columns.map((column) => {
      data[column.key] = '';
    });
    data.id = this.source.length + 1;
    this.source.push(data); */
  }

}

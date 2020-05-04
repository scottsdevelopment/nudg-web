import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editable-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() source;
  @Input() columns;

  constructor() { }

  ngOnInit(): void {
  }

  new() {
    const data: any = {};
    this.columns.map((column) => {
      data[column.key] = '';
    });
    data.id = this.source.length + 1;
    this.source.push(data);
  }

}

import { Component, OnInit, Input, HostListener, ElementRef, ViewChildren, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editable-table-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  mode = 'view';
  @Input() value: string;
  @Input() editable: boolean;
  @ViewChild('input') input: ElementRef;

  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.mode === 'view') {
      return;
    }
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.submit();
    }
  }

  edit() {
    if (!this.editable) {
      return;
    }
    this.mode = 'edit';
    setTimeout(() => {
      this.input.nativeElement.focus();
      this.input.nativeElement.select();
    }, 0);
  }

  submit() {
    this.value = this.input.nativeElement.value; 
    this.mode = 'view';
  }
}

import { Component, EventEmitter, OnInit, Output, Input, Directive, ViewChildren, QueryList, TemplateRef } from '@angular/core';



export interface TableColumn {
  name: string;
  title: string;
  template?: TemplateRef<any>;
  type?: string;
  colors?: {};
}

export enum ActionsType {
  multipleIconActionType = 2,
  buttonActionType = 1,
  none = 3
}


export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: any;
  direction: SortDirection;
}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
// tslint:disable-next-line: directive-class-suffix
export class NgbdSortableHeader {
  @Input() sortable: any = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}
interface TableActionEvent {
  name: string;
  data: object;
}
@Component({
  selector: 'ngx-tablecomponent',
  templateUrl: './tablecomponent.component.html',
  styleUrls: ['./tablecomponent.component.scss']
})
export class TablecomponentComponent implements OnInit {
  @Input() loading = false;
  @Input() tableColum = [];
  @Input() userData = [];
  @Input() showCheckBox = false;
  @Input() showActions = true;
  @Input() actions: Array<object>;
  @Output() actionClick = new EventEmitter<TableActionEvent>();

  tableData = [];
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  constructor() { }

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.tableData = this.userData;
    } else {
      this.tableData = [...this.userData].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
  ngOnInit(): void {
    this.tableData = this.userData;

    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
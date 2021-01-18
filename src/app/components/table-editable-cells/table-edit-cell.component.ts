import {Component, OnInit} from '@angular/core';

interface ItemData {
  uuid: string;
  name: string;
  note: number;
  description: string;
}

export const TABLE_EDIT_DATA: ItemData[] = [
  {
    uuid: '2ce55aa4-04c2-43af-ab28-5023fa0e1900',
    name: 'Alvaro Iturrizaga Vargas',
    note: 12,
    description: 'DESAPROBADO'
  },
  {
    uuid: 'dc47d945-6577-47c8-a3df-c772f19de319',
    name: 'Martin Samán Arata',
    note: 19,
    description: 'APROBADO'
  }
];

@Component({
  selector: 'app-table-edit-cell',
  templateUrl: './table-edit-cell.component.html',
  styles: [
    `
      table {
        border-collapse: collapse;
        width: 100%;
      }

      td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }

      thead tr th {
        background-color: #dddddd;
        border-bottom: 1px solid gray;
        border-right: 1px solid gray;
      }

      .editable-cell {
        padding: 5px 12px;
        cursor: pointer;
      }

      .editable-row:hover .editable-cell {
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        padding: 4px 11px;
      }
    `
  ]
})
export class TableEditCellComponent implements OnInit {

  editableId: string | null = null;
  listOfData: ItemData[] = TABLE_EDIT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }

  startEdit(id: string): void {
    this.editableId = id;
  }

  stopEdit(value: any): void {
    this.editableId = null;
    console.log('Update value: ', value);
  }

}

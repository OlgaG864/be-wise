import { Component, OnInit } from '@angular/core';
import { Curse, sortColumn, FilePath, CurseSort } from '../shared/types';
import { environment } from 'src/enviroment/enviroment';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-curses',
  templateUrl: './curses.component.html',
  styleUrls: ['./curses.component.scss'],
})
export class CursesComponent implements OnInit {
  curses!: Array<Curse>;
  tableSort!: CurseSort;
  searchFieldValue!: string;
  searchTerm!: string;
  isShown: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCurses();
    this.tableSort = {
      column: 'name',
      dirAsc: true,
    };
  }

  getCurses() {
    this.apiService.getCursesData().subscribe({
      next: (data: Array<Curse>) => {
        this.curses = data;
      },
      error: (err) => console.error(err),
      complete: () => console.log('complete'),
    });
  }
  toggleShow() {
    this.isShown = !this.isShown;
  }
  exportCursesData() {
    this.apiService.exportCurses().subscribe({
      next: (data: FilePath) => {
        window.open(`${environment.serverUrl}/export`);
      },
      error: (err) => console.error(err),
    });
  }

  sortCurses(column: sortColumn) {
    if (this.tableSort.column === column) {
      this.tableSort.dirAsc = !this.tableSort.dirAsc;
    } else {
      this.tableSort.column = column;
      this.tableSort.dirAsc = true;
    }

    const direction = this.tableSort.dirAsc ? 'ASC' : 'DESC';

    this.apiService.getSortedCurses(column, direction).subscribe({
      next: (data: Array<Curse>) => {
        this.curses = data;
      },
      error: (err) => console.error(err),
    });
  }

  displaySort(column: sortColumn): string {
    if (this.tableSort.column === column) {
      return this.tableSort.dirAsc ? 'bi-chevron-up' : 'bi-chevron-down';
    }
    return 'bi-chevron-expand';
  }

  findCurse(event: KeyboardEvent) {
    const value = this.searchFieldValue;

    if (event.key === 'Enter' && value.length >= 3) {
      this.apiService.findCurse(value).subscribe({
        next: (data: Array<Curse>) => {
          this.curses = data;
        },
        error: (err) => console.error(err),
      });
    }
  }

  clearSearch() {
    this.searchFieldValue = '';
    this.getCurses();
  }
}

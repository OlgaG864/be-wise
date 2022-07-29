import { Component, OnInit } from '@angular/core';
import { Curse } from '../shared/types';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-curses',
  templateUrl: './curses.component.html',
  styleUrls: ['./curses.component.scss'],
})
export class CursesComponent implements OnInit {
  curses!: Array<Curse>;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCursesData().subscribe({
      next: (data: Array<Curse>) => {
        this.curses = data;
      },
      error: (err) => console.error(err),
      complete: () => console.log('complete'),
    });
  }
}

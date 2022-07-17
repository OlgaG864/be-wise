import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Lecture } from '../shared/types';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.scss'],
})
export class LecturesComponent implements OnInit {
  lectures!: Array<Lecture>;
  searchFieldValue!: string;
  searchTerm!: string;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getLectureList();
  }
  getLectureList() {
    this.apiService.getLectureList().subscribe({
      next: (data: Array<Lecture>) => {
        this.lectures = data;
      },
      error: (err) => console.error(err),
      complete: () => console.log(`complete`),
    });
  }

  imagePath(image: string | null): string {
    return !image ? '' : `../../assets/images/${image}`;
  }
}

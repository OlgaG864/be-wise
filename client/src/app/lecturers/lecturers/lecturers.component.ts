import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Lecturer } from 'src/app/shared/types';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.scss'],
})
export class LecturersComponent implements OnInit {
  lectures!: Array<Lecturer>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLecturesList().subscribe({
      next: (data: Array<Lecturer>) => {
        this.lectures = data;
      },
      error: (err) => console.error(err),
      complete: () => console.log('complete'),
    });
  }

  imagePath(image: string | null): string {
    return !image ? '' : `../../assets/images/${image}`;
  }
}

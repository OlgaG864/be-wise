import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';
import { Curse, Lecturer, FilePath } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getLecturesList(): Observable<Array<Lecturer>> {
    return this.http.get<Array<Lecturer>>(`${environment.serverUrl}/lectures`);
  }

  getCursesData(): Observable<Array<Curse>> {
    return this.http.get<Array<Curse>>(`${environment.serverUrl}/curses`);
  }
  exportCurses(): Observable<FilePath> {
    return this.http.get<FilePath>(`${environment.serverUrl}/export`);
  }
}

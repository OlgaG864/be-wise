import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lecture } from '../shared/types';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getLectureList(): Observable<Array<Lecture>> {
    return this.http.get<Array<Lecture>>('http://localhost:3000/lectures');
  }
}

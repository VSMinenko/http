import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IPosts {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<any>(`${this.apiUrl}/todos`);
  }

  getPosts(): Observable<IPosts[]> {
    return this.http.get<IPosts[]>(`${this.apiUrl}/posts`);
  }
}

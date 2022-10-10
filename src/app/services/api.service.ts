import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IPosts {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface DataItem {
  id: number;
  title: any;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<DataItem[]> {
    return this.http.get<DataItem[]>(`${this.apiUrl}/photos`);
  }

  getPosts(): Observable<IPosts[]> {
    return this.http.get<IPosts[]>(`${this.apiUrl}/posts`);
  }
}

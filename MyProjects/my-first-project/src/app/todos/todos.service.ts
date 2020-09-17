import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private httpClient: HttpClient) {}

  getFood(): Observable<TodoItem[]> {
    return this.httpClient.get<TodoItem[]>(environment.url);
  }
}

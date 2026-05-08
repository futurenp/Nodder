import { inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ModrinthData } from '../model/ModrinthData';
import { Observable } from 'rxjs';
import { ModrinthResponse } from '../model/ModrinthResponse';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  private apiUrl = 'https://api.modrinth.com/v2/project';

  createProject(data: ModrinthData): Observable<ModrinthResponse> {
    const formData = new FormData();
    formData.append('data', JSON.stringify(data));
    return this.http.post<ModrinthResponse>(this.apiUrl, formData);  }
}

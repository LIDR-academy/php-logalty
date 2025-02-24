// src/app/services/idea.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getIdeas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ideas`);
  }

  createIdea(description: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/ideas`, { description });
  }

  addResponse(ideaId: string, response: { is_good: boolean, rationale: string, next_step: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/ideas/${ideaId}/response`, response);
  }
}

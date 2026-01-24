import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl = 'http://localhost:8000/api/pessoas/';

  constructor(private http: HttpClient) {}

  list(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  create(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }

  update(id: number, person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}${id}/`, person);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }

  getIdealWeight(id: number): Observable<{ peso_ideal: number }> {
    return this.http.get<{ peso_ideal: number }>(
      `${this.apiUrl}${id}/calculo-peso/`
    );
  }

  getById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}${id}/`);
  }
}

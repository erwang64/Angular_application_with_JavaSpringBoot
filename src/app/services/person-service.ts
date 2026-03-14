import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../model/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {

  // L'URL exacte de ton @RequestMapping côté Spring Boot !
  private apiUrl = 'http://localhost:8080/api/persons';

  // On injecte le HttpClient via le constructeur
  constructor(private http: HttpClient) { }

  // READ : Méthode pour récupérer tout le monde
  // Elle renvoie un "Observable" contenant un tableau de Person
  getAllPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }
  
}

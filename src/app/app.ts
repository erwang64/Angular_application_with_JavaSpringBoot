import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from './model/person';
import { PersonService } from './services/person-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  persons: Person[] = [];

  constructor(private personService: PersonService) {
    this.chargerPersons();
  } 

  chargerPersons() {
    this.personService.getAllPersons().subscribe({
      next: (donneDuServeur) => {
        this.persons = donneDuServeur;
      }, 
      error: (erreur) => {
        console.error('Erreur lors du chargement des personnes :', erreur);
      }
    });
  }
}

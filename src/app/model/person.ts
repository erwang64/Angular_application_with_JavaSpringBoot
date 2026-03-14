export class Person {
  // L'id est optionnel (?) car c'est Spring Boot (la BDD) qui va le générer avec @GeneratedValue
  id?: number; 
  name: string;
  city: string;
  phoneNumber: string;
  
  // On met un tableau "any" pour l'instant, on s'occupera du modèle Skill plus tard
  skills?: any[]; 

  // Un petit constructeur pratique pour quand on fera le formulaire d'ajout
  constructor(name: string, city: string, phoneNumber: string) {
    this.name = name;
    this.city = city;
    this.phoneNumber = phoneNumber;
  }
}
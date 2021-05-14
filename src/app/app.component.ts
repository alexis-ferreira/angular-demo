// On importe la class component depuis le fichier core.ts
import { Component } from '@angular/core';

// Le décorateur de class @Component()
// - Déclare à Angular que la class est un component
// - Il renseigne Angular sur :
//    -selector : Nom de la balise HTML du component
//    - templateUrl : Quel fichier HTML est lié à ce component
//    - styleUrls : Quel(s) fichier(s) CSS sont lié(s) à ce component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'angular-demo';
  name = 'Alexis';
  formation = 'Développeur Web & Web mobile';
  financement = 'alternance';
  isVisible = false;

  nombre = 0;
  prix = this.nombre;

  solde = 0;

  prenoms=['Khalid','Lucia','Alexis','David'];

  constructor(){
    console.log(this);
  }

  increment() {
    this.nombre = this.nombre +1;
  }

  decrement() {

    if (this.nombre != 0){
      this.nombre--;
    }
  }

  reset(){
    this.nombre = 0;
  }

  paid(){
    this.prix = this.prix+this.nombre;
    this.nombre = 0;
  }

  //Redéfini this.isVisible à sa valeur inverse

  display(){
    // if(this.isVisible == true){
    //   this.isVisible = false;
    // }
    // else{
    //   this.isVisible = true;
    // }

    // Syntaxe 2 :
    // this.isVisible ? this.isVisible = false : this.isVisible = true;

    // Syntaxe 3 :
    this.isVisible = !this.isVisible;
    // console.log(this.isVisible);
  }

  transfert(){
    this.solde += this.prix;
    this.prix = 0;
    // if (this.solde != 0){
      // this.solde + this.prix
    }
  // }


} // END OF CLASS

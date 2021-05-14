import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  prenom = 'Elon Musk';

  isImportant = true;

  changeElon(){
    this.isImportant = !this.isImportant
  }

  date = new Date();


  constructor() {
    console.log(this);
  }

  ngOnInit(): void {
  }

} // END OF CLASS
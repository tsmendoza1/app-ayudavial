import { FirestoreService } from './../../../app-ayudavial/src/app/Services/firestore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grua',
  templateUrl: './grua.component.html',
  styleUrls: ['./grua.component.scss'],
})
export class GruaComponent implements OnInit {

private path = 'grua/'

  constructor(public firestorService: FirestoreService) { }

  ngOnInit() {}

  getGrua(){
    this.firestorService.getCollection(this.path);
  }

}

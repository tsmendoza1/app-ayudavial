import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { pathToFileURL } from 'url';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore, public database: AngularFirestore) { }



  createDoc1(data: any, path: string, id: string) {

    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);


}

  getId (){
    return this.firestore.createId();
  }


  createDoc() {
    this.firestore.collection('Clientes')
  }


  getCollection (path: string){
    console.log('prueba');
    
    this.firestore.collection('Clientes').valueChanges().subscribe( (res)=> {
    console.log("res:",res);

    const collection = this.database.collection(path);
    return collection.valueChanges();
    });
  }

  
}

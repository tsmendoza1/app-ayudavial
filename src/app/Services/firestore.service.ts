import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }



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


  getCollection (){
    console.log('prueba');
    
    this.firestore.collection('Clientes').valueChanges().subscribe( (res)=> {
    console.log("res:",res);
    
    });
  }
}

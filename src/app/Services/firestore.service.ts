import { Injectable, Query } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { pathToFileURL } from 'url';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore, public database: AngularFirestore) { }

  getCollecction<tipo>(path:string){
    const collection =this.database.collection<tipo>(path);
    return collection.valueChanges();
  }

  deleteDoc(path:string, id:string){
    const collection = this.database.collection(path)
    return collection.doc(id).delete();
  }

  createDoc1(data: any, path: string, id: string) {
    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);
  }

  getId (){
   return this.firestore.createId();
  }

 getCollection <tipo>(path:string){

    const collection =this.database.collection<tipo>(path);
    return collection.valueChanges();

    console.log('prueba');
    
    this.firestore.collection('Clientes').valueChanges().subscribe( (res)=> {
    console.log("res:",res);   });

    this.firestore.collection('Grua').valueChanges().subscribe( (res)=> {
      console.log("res:",res);  });

    this.firestore.collection('Mecanico automotriz').valueChanges().subscribe( (res)=> {
      console.log("res:",res);  });  
      
    this.firestore.collection('Mecanico electrico').valueChanges().subscribe( (res)=> {
      console.log("res:",res);  });  

    this.firestore.collection('Mecanico general').valueChanges().subscribe( (res)=> {
      console.log("res:",res);  });  
  }

  getDoc<tipo>(path:string, id:string){
   return this.firestore.collection(path).doc<tipo>(id).valueChanges()
  }

  updateDoc(path: string, id: string, data: any) {
    const collection = this.database.collection(path);
    return collection.doc(id).update(data);
  }

}


import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Mensaje } from '../interface/mensaje.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  
  private itemsCollection?: AngularFirestoreCollection<Mensaje>
  public chats:Mensaje[]=[];
  public usuario:any={};

  constructor(private afs:AngularFirestore,
              private auth:AngularFireAuth) { 
    this.auth.authState.subscribe(dataUser=>{

      console.log("estado del usuario: ", dataUser)
      if(!dataUser){
        return;
      }
      this.usuario.nombre=dataUser.displayName;
      this.usuario.uid=dataUser.uid;
    });
  }

  login(pProveedor:string) {
    if(pProveedor==='google'){
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }else{
      this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }

  }

  logout() {
    this.auth.signOut();
  }

  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha','asc'));

    return this.itemsCollection.valueChanges().pipe(
      map((mensajes:Mensaje[])=>{
        console.log(mensajes);
        this.chats = mensajes;
        }
      )
    );
  }

  agregarMensaje(texto:string){

    let mensaje:Mensaje={
      nombre: this.usuario.nombre,
      mensaje:texto,
      fecha: Date.now(),
      uid:this.usuario.uid
    }
    console.log(mensaje.fecha)

    return this.itemsCollection?.add(mensaje);
  }
}

import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private reference: AngularFireStorageReference;
  private task: AngularFireUploadTask;

  constructor(private afStorage: AngularFireStorage) { }

  uploadImage(image: File): AngularFireUploadTask {
    const randomId = Math.random().toString(36).substring(2);
    this.reference = this.afStorage.ref(randomId);
    return this.task = this.reference.put(image);
  }

  getReference(){
    return this.reference;
  }

}

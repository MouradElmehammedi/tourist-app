import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  constructor(private firestore: AngularFirestore) {}

  getPlaces(): Observable<any[]> {
    return this.firestore.collection('places').valueChanges({ idField: 'id' });
  }

  addPlace(place: any): Promise<DocumentReference<any>> {
    return this.firestore.collection('places').add(place);
  }
}

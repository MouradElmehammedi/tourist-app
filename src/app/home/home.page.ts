import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from '../services/places.service';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  places: any[] = [];

  constructor(private router: Router, private placesService: PlacesService) { }

  ngOnInit() {
    this.placesService.getPlaces().subscribe((places) => {
      this.places = places;
    });
  }

  navigateToNewPlace() {
    this.router.navigate(['/new-place']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.page.html',
  styleUrls: ['./new-place.page.scss'],
})
export class NewPlacePage implements OnInit {

  myForm  = new FormGroup({
    'name': new FormControl('', Validators.required),
    'description': new FormControl('', Validators.required),
    'rating': new FormControl('', Validators.required),
  });

  constructor(private router: Router, private placesService: PlacesService) { }

  backToHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {}

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
      this.placesService.addPlace(this.myForm.value);
      this.router.navigate(['/home']);
    }
  }
}

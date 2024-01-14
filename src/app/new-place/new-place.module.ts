import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPlacePageRoutingModule } from './new-place-routing.module';

import { NewPlacePage } from './new-place.page';
import { PlacesService } from '../services/places.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewPlacePageRoutingModule,
  ],
  declarations: [NewPlacePage],
  providers: [PlacesService],
})
export class NewPlacePageModule {}

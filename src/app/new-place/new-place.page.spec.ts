import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewPlacePage } from './new-place.page';

describe('NewPlacePage', () => {
  let component: NewPlacePage;
  let fixture: ComponentFixture<NewPlacePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewPlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

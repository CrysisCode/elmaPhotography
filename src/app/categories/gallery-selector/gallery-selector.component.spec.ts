import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySelectorComponent } from './gallery-selector.component';

describe('GallerySelectorComponent', () => {
  let component: GallerySelectorComponent;
  let fixture: ComponentFixture<GallerySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerySelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

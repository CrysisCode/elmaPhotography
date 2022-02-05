import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VjencanjaComponent } from './vjencanja.component';

describe('VjencanjaComponent', () => {
  let component: VjencanjaComponent;
  let fixture: ComponentFixture<VjencanjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VjencanjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VjencanjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

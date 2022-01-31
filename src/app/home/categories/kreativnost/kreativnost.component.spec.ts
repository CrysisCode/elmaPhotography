import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KreativnostComponent } from './kreativnost.component';

describe('KreativnostComponent', () => {
  let component: KreativnostComponent;
  let fixture: ComponentFixture<KreativnostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KreativnostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KreativnostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

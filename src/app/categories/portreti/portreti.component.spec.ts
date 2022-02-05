import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortretiComponent } from './portreti.component';

describe('PortretiComponent', () => {
  let component: PortretiComponent;
  let fixture: ComponentFixture<PortretiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortretiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortretiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

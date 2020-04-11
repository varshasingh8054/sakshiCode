import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssosiateDoctorComponent } from './assosiate-doctor.component';

describe('AssosiateDoctorComponent', () => {
  let component: AssosiateDoctorComponent;
  let fixture: ComponentFixture<AssosiateDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssosiateDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssosiateDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

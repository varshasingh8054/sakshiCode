import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeManagementComponent } from './practice-management.component';

describe('PracticeManagementComponent', () => {
  let component: PracticeManagementComponent;
  let fixture: ComponentFixture<PracticeManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

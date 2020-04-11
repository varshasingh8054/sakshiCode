import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftCasesComponent } from './draft-cases.component';

describe('DraftCasesComponent', () => {
  let component: DraftCasesComponent;
  let fixture: ComponentFixture<DraftCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

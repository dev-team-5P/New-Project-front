import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcandidatComponent } from './addcandidat.component';

describe('AddcandidatComponent', () => {
  let component: AddcandidatComponent;
  let fixture: ComponentFixture<AddcandidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcandidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

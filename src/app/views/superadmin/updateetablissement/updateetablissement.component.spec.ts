import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateetablissementComponent } from './updateetablissement.component';

describe('UpdateetablissementComponent', () => {
  let component: UpdateetablissementComponent;
  let fixture: ComponentFixture<UpdateetablissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateetablissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateetablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

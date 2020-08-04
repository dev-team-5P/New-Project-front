import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteretabComponent } from './registeretab.component';

describe('RegisteretabComponent', () => {
  let component: RegisteretabComponent;
  let fixture: ComponentFixture<RegisteretabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteretabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteretabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

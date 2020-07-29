import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListetablissementComponent } from './listetablissement.component';

describe('ListetablissementComponent', () => {
  let component: ListetablissementComponent;
  let fixture: ComponentFixture<ListetablissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListetablissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListetablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

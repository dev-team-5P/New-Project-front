import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageetablisementComponent } from './parametrageetablisement.component';

describe('ParametrageetablisementComponent', () => {
  let component: ParametrageetablisementComponent;
  let fixture: ComponentFixture<ParametrageetablisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrageetablisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrageetablisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

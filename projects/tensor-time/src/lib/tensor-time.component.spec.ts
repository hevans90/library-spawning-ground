import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TensorTimeComponent } from './tensor-time.component';

describe('TensorTimeComponent', () => {
  let component: TensorTimeComponent;
  let fixture: ComponentFixture<TensorTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TensorTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TensorTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

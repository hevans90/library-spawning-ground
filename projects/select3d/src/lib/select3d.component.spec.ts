import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Select3dComponent } from './select3d.component';

describe('Select3dComponent', () => {
  let component: Select3dComponent;
  let fixture: ComponentFixture<Select3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Select3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Select3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

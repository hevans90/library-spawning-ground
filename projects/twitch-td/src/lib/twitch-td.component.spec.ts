import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchTdComponent } from './twitch-td.component';

describe('TwitchTdComponent', () => {
  let component: TwitchTdComponent;
  let fixture: ComponentFixture<TwitchTdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitchTdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

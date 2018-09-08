import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordrestComponent } from './passwordrest.component';

describe('PasswordrestComponent', () => {
  let component: PasswordrestComponent;
  let fixture: ComponentFixture<PasswordrestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordrestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

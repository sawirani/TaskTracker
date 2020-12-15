import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreatePopoverComponent } from './user-create-popover.component';

describe('UserCreatePopoverComponent', () => {
  let component: UserCreatePopoverComponent;
  let fixture: ComponentFixture<UserCreatePopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreatePopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreatePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUsersForClientComponent } from './create-users-for-client.component';

describe('CreateUsersForClientComponent', () => {
  let component: CreateUsersForClientComponent;
  let fixture: ComponentFixture<CreateUsersForClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUsersForClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUsersForClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

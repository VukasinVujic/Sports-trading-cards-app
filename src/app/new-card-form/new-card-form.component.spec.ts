import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCardFormComponent } from './new-card-form.component';

describe('NewCardFormComponent', () => {
  let component: NewCardFormComponent;
  let fixture: ComponentFixture<NewCardFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCardFormComponent]
    });
    fixture = TestBed.createComponent(NewCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

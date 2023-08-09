import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCardDialogComponent } from './new-card-dialog.component';

describe('NewCardDialogComponent', () => {
  let component: NewCardDialogComponent;
  let fixture: ComponentFixture<NewCardDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCardDialogComponent]
    });
    fixture = TestBed.createComponent(NewCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

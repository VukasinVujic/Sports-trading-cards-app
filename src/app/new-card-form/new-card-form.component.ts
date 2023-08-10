import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NewCardDialogComponent } from '../new-card-dialog/new-card-dialog.component';
import { SportCard } from '../types';
import { Store } from '@ngrx/store';
import { sendDataToStore } from '../counter.actions';

@Component({
  selector: 'app-new-card-form',
  templateUrl: './new-card-form.component.html',
  styleUrls: ['./new-card-form.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
})
export class NewCardFormComponent {
  // myForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NewCardDialogComponent>,
    private store: Store,
    private fb: FormBuilder
  ) {
    // this.myForm = this.fb.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   playersNumber: ['', Validators.required],
    //   playersTeam: ['', Validators.required],
    //   estimatedValue: ['', Validators.required],
    // });
  }

  firstName: string = '';
  lastName: string = '';
  playersNumber: number | string = '';
  playersTeam: string = '';
  estimatedValue: number = 0;

  newCard = {} as SportCard;

  onSubmit(myForm: any): void {
    this.newCard.firstName = this.firstName;
    this.newCard.lastName = this.lastName;
    this.newCard.playersNumber = this.playersNumber;
    this.newCard.playersTeam = this.playersTeam;
    this.newCard.estimatedValue = this.estimatedValue;

    const dataToSend = this.newCard;
    if (myForm.valid) {
      this.store.dispatch(sendDataToStore({ data: dataToSend }));
      this.dialogRef.close();
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

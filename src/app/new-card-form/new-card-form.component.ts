import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NewCardDialogComponent } from '../new-card-dialog/new-card-dialog.component';
import { SportCard } from '../types';
import { Store } from '@ngrx/store';
import { createSportCard, updatedSportCard } from '../counter.actions';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-card-form',
  templateUrl: './new-card-form.component.html',
  styleUrls: ['./new-card-form.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
})
export class NewCardFormComponent {
  constructor(
    public dialogRef: MatDialogRef<NewCardDialogComponent>,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public updateCardId: any
  ) {}

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

    let currentDate = new Date();

    this.newCard.id = '' + currentDate.getTime();

    const dataToSend = this.newCard;

    if (myForm.valid && this.updateCardId) {
      this.store.dispatch(
        updatedSportCard({ id: this.updateCardId.id, changes: dataToSend })
      );
      this.dialogRef.close();
    }
    if (myForm.valid && !this.updateCardId) {
      this.store.dispatch(createSportCard({ data: dataToSend }));
      this.dialogRef.close();
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

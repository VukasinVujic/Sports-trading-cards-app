import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NewCardDialogComponent } from '../new-card-dialog/new-card-dialog.component';

@Component({
  selector: 'app-new-card-form',
  templateUrl: './new-card-form.component.html',
  styleUrls: ['./new-card-form.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
})
export class NewCardFormComponent {
  constructor(public dialogRef: MatDialogRef<NewCardDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}

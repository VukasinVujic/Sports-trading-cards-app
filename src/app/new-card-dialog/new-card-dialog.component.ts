import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NewCardFormComponent } from '../new-card-form/new-card-form.component';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'app-new-card-dialog',
  templateUrl: './new-card-dialog.component.html',
  styleUrls: ['./new-card-dialog.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, NewCardFormComponent],
})
export class NewCardDialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(NewCardFormComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

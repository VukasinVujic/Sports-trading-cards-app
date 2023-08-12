import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { deleteSportCard } from '../counter.actions';
import { NewCardFormComponent } from '../new-card-form/new-card-form.component';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, NewCardFormComponent],
})
export class SingleCardComponent {
  @Input()
  inputData: any;

  constructor(private store: Store, public dialog: MatDialog) {}

  deleteSportCard(id: string) {
    this.store.dispatch(deleteSportCard({ id }));
  }

  updatedSportCard(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { id: id };

    const dialogRef = this.dialog.open(NewCardFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

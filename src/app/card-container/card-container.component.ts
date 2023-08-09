import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SingleCardComponent } from '../single-card/single-card.component';
import { NewCardDialogComponent } from '../new-card-dialog/new-card-dialog.component';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
  standalone: true,
  imports: [MatButtonModule, SingleCardComponent, NewCardDialogComponent],
})
export class CardContainerComponent {}

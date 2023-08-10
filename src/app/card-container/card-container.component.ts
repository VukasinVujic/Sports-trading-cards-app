import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SingleCardComponent } from '../single-card/single-card.component';
import { NewCardDialogComponent } from '../new-card-dialog/new-card-dialog.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    SingleCardComponent,
    NewCardDialogComponent,
    CommonModule,
  ],
})
export class CardContainerComponent {
  data$: Observable<any>;

  constructor(private store: Store<{ data: any }>) {
    this.data$ = store.select('data');
  }

  getASum(data: any[], property: string): number {
    return data.reduce((sum, item) => sum + item[property], 0);
  }
}

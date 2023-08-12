import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SingleCardComponent } from '../single-card/single-card.component';
import { NewCardDialogComponent } from '../new-card-dialog/new-card-dialog.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllItems } from '../selector';
import { CommonModule } from '@angular/common';
import { SportCard } from '../types';
import { Router } from '@angular/router';

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
  data$: Observable<SportCard[]> = this.store.select(selectAllItems);
  @ViewChildren('lastCard') lastCardRefs!: QueryList<ElementRef>;

  constructor(private store: Store, private router: Router) {}

  calculateSum(data: SportCard[]): number {
    if (!data.length) {
      return 0;
    }

    return data.reduce(
      (sum: number, cur: SportCard): number => sum + cur.estimatedValue,
      0
    );
  }

  scrollLastCardIntoView(): void {
    setTimeout(() => {
      const lastCardRef = this.lastCardRefs.last;
      if (lastCardRef && lastCardRef.nativeElement) {
        lastCardRef.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      }
    });
  }
}

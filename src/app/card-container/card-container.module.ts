import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './card-container.component';
import { SingleCardModule } from '../single-card/single-card.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SingleCardModule, CardContainerComponent],
  exports: [CardContainerComponent],
})
export class CardContainerModule {}

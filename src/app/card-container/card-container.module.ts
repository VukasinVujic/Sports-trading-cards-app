import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './card-container.component';
import { SingleCardModule } from '../single-card/single-card.module';
import { NewCardDialogModule } from '../new-card-dialog/new-card-dialog.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardContainerComponent,
    SingleCardModule,
    NewCardDialogModule,
  ],
  exports: [CardContainerComponent],
})
export class CardContainerModule {}

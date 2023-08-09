import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCardDialogComponent } from './new-card-dialog.component';
import { NewCardFormModule } from '../new-card-form/new-card-form.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, NewCardDialogComponent, NewCardFormModule],
  exports: [NewCardDialogComponent],
})
export class NewCardDialogModule {}

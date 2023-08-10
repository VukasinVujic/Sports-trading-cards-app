import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
})
export class SingleCardComponent {
  @Input()
  inputData: any;
}

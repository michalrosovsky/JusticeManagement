import { Component, Input } from '@angular/core';
import { CaseDetails } from '../models/case-details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-case-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-list-item.component.html',
  styleUrl: './case-list-item.component.scss'
})
export class CaseListItemComponent {
  @Input() case!: CaseDetails;

  getStatusClass(status: string): string {
    switch (status) {
      case 'פתוח':
        return 'open'
      case 'סגור':
        return 'close'
      default:
        return 'other';
    }
  }
}

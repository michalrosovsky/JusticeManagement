import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { CaseListItemComponent } from '../case-list-item/case-list-item.component';
import { CaseDetails } from '../models/case-details';
import { CaseServiceService } from '../services/case-service.service';


@Component({
  selector: 'app-case-list',
  standalone: true,
  imports: [CaseListItemComponent, CommonModule],
  templateUrl: './case-list.component.html',
  styleUrl: './case-list.component.scss'
})
export class CaseListComponent {

  constructor(private caseService: CaseServiceService) {
  }

  cases: CaseDetails[] = [
    {
      number: '108/2024',
      subject: 'בדיקה שמירת החלטה 3',
      type: 'ערר חרבות ברזל - הוצאות מזכות',
      eligibilityPeriod: 'ספטמבר-אוקטובר 2023',
      openDate: new Date(2024, 7, 30),
      nextDiscussionDate: new Date(2024, 11, 16),
      appellant: 'אברהם אברהמי',
      respondentRepresentative: 'ישראל ישראלי',
      committeeChair: 'ציון ציוני',
      publicRepresentative: 'עדיין לא מונה',
      status: 'סגור',
      judge: 'me'
    },
    {
      number: '107/2024',
      subject: 'בדיקה שמירת החלטה 3',
      type: 'ערר חרבות ברזל - הוצאות מזכות',
      eligibilityPeriod: 'ספטמבר-אוקטובר 2023',
      openDate: new Date(2024, 7, 18),
      nextDiscussionDate: new Date(2024, 12, 9),
      appellant: 'אברהם אברהמי',
      respondentRepresentative: 'ישראל ישראלי',
      committeeChair: 'ציון ציוני',
      publicRepresentative: 'עדיין לא מונה',
      status: 'פתוח',
      judge: 'other'
    },
    {
      number: '103/2024',
      subject: 'בדיקה שמירת החלטה 3',
      type: 'ערר חרבות ברזל - הוצאות מזכות',
      eligibilityPeriod: 'ספטמבר-אוקטובר 2023',
      openDate: new Date(2024, 7, 18),
      nextDiscussionDate: new Date(2024, 12, 9),
      appellant: 'אברהם אברהמי',
      respondentRepresentative: 'ישראל ישראלי',
      committeeChair: 'ציון ציוני',
      publicRepresentative: 'עדיין לא מונה',
      status: 'קליטת תיק',
      judge: 'me'
    }
  ];
  filteredCases: CaseDetails[] = this.cases;
  sort(sortBy: string) {
    switch (sortBy) {
      case 'openDate':
        this.filteredCases = this.filteredCases.sort((a: CaseDetails, b: CaseDetails) => {
          return a.openDate.getTime() - b.openDate.getTime();
        });
        break;
      case 'number':
        this.filteredCases = this.filteredCases.sort((a: CaseDetails, b: CaseDetails) => {
          return parseInt(a.number.split('/')[0]) - parseInt(b.number.split('/')[0]);
        });
        break;
      default:
        break;
    }
  }

  filter(filterBy: string) {
    switch (filterBy) {
      case 'me':
        this.filteredCases = this.cases.filter(c => c.judge == 'me');
        break;
      case 'open':
        this.filteredCases = this.cases.filter(c => c.status == 'פתוח');
        break;
      case 'close':
        this.filteredCases = this.cases.filter(c => c.status == 'סגור');
        break;
      default:
        this.filteredCases = this.cases;
        break;
    }

  }

  createCase() {
    this.caseService.createCase(this.cases[0]).subscribe((newCase: CaseDetails) => {
      alert('תיק נוצר בהצלחה!');
      newCase.openDate = new Date(newCase.openDate);
      this.cases.push(newCase);
      this.filteredCases = this.cases;
    });
  }

}

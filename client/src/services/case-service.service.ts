import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CaseDetails } from '../models/case-details';

@Injectable({
  providedIn: 'root'
})
export class CaseServiceService {

  readonly caseApiUrl = 'https://localhost:7076/Case';

  constructor(private http: HttpClient) { }

  createCase(request: CaseDetails): Observable<any> {
    return this.http.post<any>(`${this.caseApiUrl}/CreateCase`, request);
  }
}

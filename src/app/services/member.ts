import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MemberData {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  joinDate: string;
  member_TablehipPlan: string;
}

@Injectable({
  providedIn: 'root'
})
export class Member {

  private apiUrl = 'https://localhost:7181/api/Member_Table';

  constructor(private http: HttpClient) {}

  getMembers(): Observable<MemberData[]> {
    console.log('Fetching members from API:', this.apiUrl);
    return this.http.get<MemberData[]>(this.apiUrl);
  }
}
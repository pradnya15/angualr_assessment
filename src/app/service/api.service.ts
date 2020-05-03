
import { HttpClient } from '@angular/common/http';
import { Ledger } from 'ledger';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({providedIn:'root'})
export class ApiService {
 
  baseURL: string = "https://7u7mg3dblk.execute-api.ap-south-1.amazonaws.com/test/token_ledger_report";
 
  constructor(private http: HttpClient) {
  }
 
  fetchLedgers(ledger:Ledger): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(ledger);
    return this.http.post(this.baseURL + '', body,{'headers':headers})
  }
 
}
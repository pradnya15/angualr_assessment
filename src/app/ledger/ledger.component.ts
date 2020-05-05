import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Ledger } from '../service/ledger';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  interval = "month"
  ledgers:Ledger[];
  balanceInfo:object = {
    "available_balance": 0,
    "total_credited": 0,
    "total_debited": 0
  };
  ledgerObj:object = null
  
  constructor(private apiService:ApiService) {  }
 
  ngOnInit() {
    this.fetchData(this.interval)
  }
 
  fetchData(interval:string) {
    
    this.ledgerObj = {
      "user_id": 27,
      "interval": interval
    };
    
    this.apiService.fetchLedgers(this.ledgerObj)
      .subscribe(data => {
        this.balanceInfo = {
          "available_balance": data.response.available_balance,
          "total_credited": data.response.total_tokens_credited,
          "total_debited": data.response.total_tokens_debited
        };
        this.ledgers = data.response.transaction_records
      })      
  }

}

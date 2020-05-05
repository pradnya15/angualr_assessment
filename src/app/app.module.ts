import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LedgerComponent } from './ledger/ledger.component';
import { CardComponent } from './card/card.component';
import { FormatdatePipe } from './formatdate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LedgerComponent,
    CardComponent,
    FormatdatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

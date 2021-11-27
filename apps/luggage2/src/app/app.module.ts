import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Luggage2FeatureCheckinModule } from '@flight-workspace/luggage2/feature-checkin';
import { HttpClientModule } from '@angular/common/http';
import { Luggage2FeatureReportLossModule } from '@flight-workspace/luggage2/feature-report-loss';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Luggage2FeatureCheckinModule, HttpClientModule, Luggage2FeatureReportLossModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

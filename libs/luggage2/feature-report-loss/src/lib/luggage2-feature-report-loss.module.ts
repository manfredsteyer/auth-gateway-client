import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Luggage2DomainModule } from '@flight-workspace/luggage2/domain';
import { ReportLossComponent } from './report-loss.component';
// import { FlightLibModule } from '@flight-workspace/flight-lib';

@NgModule({
  imports: [CommonModule, Luggage2DomainModule],
  declarations: [ReportLossComponent],
  exports: [ReportLossComponent],
})
export class Luggage2FeatureReportLossModule {}


// Manfred was here!!! You've been haaaaaacked!!!
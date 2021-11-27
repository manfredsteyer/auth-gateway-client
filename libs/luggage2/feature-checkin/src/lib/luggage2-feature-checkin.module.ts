import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Luggage2DomainModule } from '@flight-workspace/luggage2/domain';
import { CheckinComponent } from './checkin.component';

@NgModule({
  imports: [CommonModule, Luggage2DomainModule],
  declarations: [CheckinComponent],
  exports: [CheckinComponent],
})
export class Luggage2FeatureCheckinModule {}

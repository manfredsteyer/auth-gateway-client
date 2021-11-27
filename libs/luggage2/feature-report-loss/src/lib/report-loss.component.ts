import { Component, OnInit} from '@angular/core';
import { ReportLossFacade } from '@flight-workspace/luggage2/domain';

@Component({
  selector: 'luggage2-report-loss',
  templateUrl: './report-loss.component.html',
  styleUrls: ['./report-loss.component.scss']
})
export class ReportLossComponent implements OnInit {
    
    
    passengerList$ = this.reportLossFacade.passengerList$;


    constructor(private reportLossFacade: ReportLossFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.reportLossFacade.load();
    }

}


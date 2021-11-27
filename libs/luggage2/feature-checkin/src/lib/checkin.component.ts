import { Component, OnInit} from '@angular/core';
import { CheckinFacade } from '@flight-workspace/luggage2/domain';

@Component({
  selector: 'luggage2-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {
    
    
    luggageList$ = this.checkinFacade.luggageList$;


    constructor(private checkinFacade: CheckinFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.checkinFacade.load();
    }

}


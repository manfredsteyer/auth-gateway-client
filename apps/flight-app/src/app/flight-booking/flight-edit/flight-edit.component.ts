import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FlightService } from '@flight-workspace/flight-lib';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit {
  id: string;
  showDetails: string;
  showWarning = false;

  constructor(private route: ActivatedRoute, private flightService: FlightService) {
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];

      this.flightService.findById(this.id).subscribe(flight => {
        flight.id = 0;
        this.flightService.save(flight).subscribe();
      })


    });
  }

}

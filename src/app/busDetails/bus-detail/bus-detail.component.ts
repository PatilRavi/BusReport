import { Component, OnInit } from '@angular/core';
import { BusDetailService } from 'src/app/services/bus-detail.service';


@Component({
  selector: 'app-bus-detail',
  templateUrl: './bus-detail.component.html',
  styleUrls: ['./bus-detail.component.css']
})
export class BusDetailComponent implements OnInit {
  public allBusData: any[] = [];
  constructor(private busService: BusDetailService) { }

  ngOnInit() {

    this.busService.fetchData().subscribe(
      (res: any) => {
        this.allBusData = res.data;
        console.log("allBusData", this.allBusData);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { BookingStatsModel } from 'src/app/core/models/booking/bookingStats.model';
import { BookingService } from 'src/app/core/services/booking/booking.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  periodicity: string;

  today: Date;

  startDate: Date;

  model: BookingStatsModel[];

  data1: ChartDataSets[] = [
    { data: [], label: 'Montants' }
  ];

  labels1: Label[] = [];

  chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  data2: ChartDataSets[] = [ 
    { data: [], label: 'Affluences' }
  ];

  labels2: Label[] = [];

  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    this.periodicity = 'daily';
    this.today = new Date();
    // ajd - 30 jours
    this.startDate = new Date(this.today.getTime() - 84600000 * 30);
    this.refresh();
  }

  refresh(){
  
    this.bookingService.getStats(this.startDate, this.today, this.periodicity).subscribe(data => {
      console.log(data);
      
      this.model = data;
      let labels = this.model.map(x => x.label);
      let amounts = this.model.map(x => x.amount);
      let affluences = this.model.map(x => x.affluence);
      this.labels1 = labels;
      this.labels2 = labels;
      this.data1[0].data = amounts;
      this.data2[0].data = affluences;
    });
  }

  onDateChanged(event) {
    this.startDate = new Date(event);
    this.refresh();
  }

}

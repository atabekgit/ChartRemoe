import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ServicesService} from "../services.service";
import {Chart, ChartConfiguration, ChartData, ChartType, registerables} from "chart.js";
import {BaseChartDirective} from "ng2-charts"
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public weatherSearchForm!: FormGroup;
  public weatherData:any
  public temp:any
  public loading = false;
  wer:any = []
  wind:any
  deg:any

  constructor(private formBuilder: FormBuilder,private server:ServicesService) {
    Chart.register(...registerables)
  }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location:[null]
    })
  }
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ ],
    datasets: [ {
      data: [ ]
    } ]
  };
  public pieChartType: ChartType = 'pie';
  sendToAPIXU(formValues:any) {
    this.loading = true
    this.server.weatherData(formValues.location).subscribe(data=>{
      console.log(data)
      this.weatherData = data
      this.loading = false
      this.temp = this.weatherData.main.temp-273.15
      this.weatherSearchForm.reset()
      this.wind = this.weatherData.wind.speed
      this.deg = this.weatherData.wind.deg
      console.log(this.wind)
      console.log(this.deg)
      this.wer.push(this.wind,this.deg)
      this.pieChartData.labels?.push(['Deg'],['Speed'])
      this.pieChartData.datasets[0].data.push(this.deg);
      this.pieChartData.datasets[0].data.push(this.wind);
      this.chart?.update();

    })
  }

  removeSlice() {
    if (this.pieChartData.labels) {
      this.pieChartData.labels.pop();
    }
    this.pieChartData.datasets[0].data.pop();
    this.chart?.update();
  }
}

import { Component, OnInit } from '@angular/core';
import {ServicesService} from "../services.service";
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {
  public loading = false;
  bar_chart: any = [];
  output: any
  deaths: any
  deathsN!: number
  country: any
  index: any
  name: any
  active_cases:any
  total_recovered:any

  constructor(private server: ServicesService) {
    Chart.register(...registerables)
  }

  ngOnInit(): void {
    this.loading = true;
    this.server.covidData().then((result) => {
      this.output = result
      this.loading = false;
      this.country = this.output?.countries_stat.slice(0, 20).map((name: any) => name.country_name)
      this.deaths = this.output?.countries_stat.slice(0, 20).map((deaths: any) => deaths.deaths)
      this.deathsN = this.deaths = this.deaths.map(parseFloat)
      this.active_cases = this.output?.countries_stat.slice(0, 20).map((active_cases: any) => active_cases.active_cases)
      const active_cases_toNum = this.active_cases = this.active_cases.map(parseFloat)
      this.total_recovered =this.output?.countries_stat.slice(0, 20).map((total_recovered: any) => total_recovered.total_recovered)
      const total_recovered_toNum = this.total_recovered = this.total_recovered.map(parseFloat)

      this.bar_chart = new Chart('bar', {
        type: 'bar',
        data: {
          labels: this.country,
          datasets: [{
            label: "Covid",
            backgroundColor: 'rgb(255,0,0)',
            data: this.deathsN
          },
            {
              backgroundColor: 'rgb(0, 0, 205)',
              label:'Active Cases',
              data:active_cases_toNum,
            },
            {
              backgroundColor: 'rgb(34, 139, 34)',
              label:'Recovered',
              data:total_recovered_toNum,
            }
          ]
        }
      })
    })

  }



}

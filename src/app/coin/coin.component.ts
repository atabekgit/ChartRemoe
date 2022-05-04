import {Component, OnInit} from '@angular/core';
import {ServicesService} from "../services.service";
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
  public loading = false;
  output: any
  coinPrice: any;
  coinName: any;
  line_chart: any = [];

  constructor(private server: ServicesService) {
    Chart.register(...registerables)
  }

  ngOnInit(): void {
    this.loading = true
    this.server.coinData().then((result) => {
      this.output = result
      this.loading = false;
      this.coinPrice = this.output?.data.coins.map((coin: any) => coin.price)
      this.coinName = this.output?.data.coins.map((coin: any) => coin.name)
      this.line_chart = new Chart('line', {
        type: 'line',
        data: {
          labels: this.coinName,
          datasets: [
            {
              label: 'CoinPrice',
              data: this.coinPrice,
              borderWidth: 1,

              backgroundColor: 'rgba(93,175,89,0.1)',
              borderColor: '#3e95cd'
            }
          ]
        }
      })
    })
  }


}

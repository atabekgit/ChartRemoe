import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, throwError} from "rxjs";

const footKey = 'fd6ff034c5msh078d695068c9b7ep1f72edjsn32c830393402'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  covidApi = 'https://corona-virus-world-and-india-data.p.rapidapi.com/api'
  countriesApi = 'https://restcountries.com/v3.1/region/asia'
  coinApi = "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=5y&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0"

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {

      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  constructor(private http: HttpClient) {
  }

  header = new HttpHeaders({
    'X-RateLimit-Limit': '1',
    'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com',
    'X-RapidAPI-Key': `${footKey}`
  });
  coinHeader = new HttpHeaders({
    'X-RateLimit-Limit': '1',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': `${footKey}`
  });
  covidData() {
    return this.http.get(this.covidApi, {headers: this.header})
      .pipe(
        catchError(this.handleError)
      )
      .toPromise().then((data) => {
        return data
      })
  }
  getCountriesAll() {
    return this.http.get(`${this.countriesApi}`)
      .pipe(
        catchError(this.handleError)
      )
      .toPromise().then((data) => {
        return data
      })
  }
  coinData() {
    return this.http.get(this.coinApi,{headers:this.coinHeader})
      .pipe(
        catchError(this.handleError)
      )
      .toPromise()
      .then((data) => {
        return data
      })
  }
  weatherData(location:any){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&metric&appid=38ec507cbb3505bd551bd8564b6073bd`)
      .pipe(
        catchError(this.handleError)
      )
  }
}

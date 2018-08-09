import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BusDetailService {

  constructor(private http: Http) { }

  fetchData(){
    return this.http.get('src/assets/bus-services-data.json').pipe(map(res => res.json())
    )
    // .subscribe(
    //   (data) => {console.log(data)}
    // )
  }

}

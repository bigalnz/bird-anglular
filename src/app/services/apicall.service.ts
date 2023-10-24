import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bird } from '../test/bird';
import { Pit } from '../test2/pit';
import { PitCommand } from '../test2/pit-command';
import { catchError, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }

  getBird():Observable<Bird[]> {
    return this.http.get<Bird[]>('http://localhost:8080/api/kiwis/');
  }

  getAllBirds():Observable<Bird[]> {
    return this.http.get<Bird[]>('http://localhost:8080/api/kiwis/')
  }

  getPIT():Observable<Pit> {
    return this.http.get<Pit>('http://localhost:8080/pits/1');
  }

  addPit(pit: Pit): Observable<Pit> {
    console.log("inside API service")
    return this.http.post<Pit>('http://localhost:8080/pits/', pit );
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Pit } from '../test2/pit';
import { ApicallService } from '../services/apicall.service';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {

  pit$: Observable<Pit> = this.appService.getPIT().pipe(tap((b) => console.log(b)));;
  constructor(private appService: ApicallService) {}

  }


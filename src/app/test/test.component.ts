import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../services/apicall.service';
import { Observable, tap } from 'rxjs';
import { Bird } from './bird';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  iconTrash=faTrash;
  iconEdit=faPen;
  iconPlus=faPlus;
  birds$: Observable<Bird[]> = this.appService.getAllBirds().pipe(tap((b) => console.log(b)));;
  constructor(private appService: ApicallService) {}
}

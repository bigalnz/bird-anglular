import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Pit } from '../test2/pit';
import { ApicallService } from '../services/apicall.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'
 

@Component({
  selector: 'app-pit-form',
  templateUrl: './pit-form.component.html',
  styleUrls: ['./pit-form.component.css']
})

export class PitFormComponent implements OnInit {

  pitForm = new FormGroup({
    taskId: new FormControl<number | null >(null, [Validators.required, Validators.pattern("^[0-9]*$")]), 
    code: new FormControl('', { nonNullable: true }), 
    dateInserted: new FormControl('', { nonNullable: true }),
    comment: new FormControl('', { nonNullable: true }), 
    healthCheckId: new FormControl<number | null >(null, [Validators.required, Validators.pattern("^[0-9]*$")])
  });

  constructor(private appService: ApicallService) {}

onSubmit() {
  
  const pitSubmit: Pit = {
    taskId: this.pitForm.value.taskId!,
    code: this.pitForm.value.code!,
    dateInserted: new Date(this.pitForm.value.dateInserted!),
    comment: this.pitForm.value.comment!,
    healthCheckId: this.pitForm.value.healthCheckId!
  };

  console.log('about to run submit');
  console.log(pitSubmit);
  this.appService.addPit(pitSubmit).subscribe();
}

ngOnInit(): void{}

}

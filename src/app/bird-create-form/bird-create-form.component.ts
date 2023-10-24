import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-bird-create-form',
  templateUrl: './bird-create-form.component.html',
  styleUrls: ['./bird-create-form.component.css']
})
export class BirdCreateFormComponent {
  name = new FormControl('');
}

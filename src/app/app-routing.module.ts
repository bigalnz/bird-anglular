import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { PitFormComponent } from './pit-form/pit-form.component';
import { BirdCreateFormComponent } from './bird-create-form/bird-create-form.component';

const routes: Routes = [
  { path: '', component : TestComponent },
  { path: 'test2', component : Test2Component},
  { path: 'pit-form', component : PitFormComponent},
  { path: 'form', component : BirdCreateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

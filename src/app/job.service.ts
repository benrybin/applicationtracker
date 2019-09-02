import { Injectable } from '@angular/core';
import { App } from './app';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobsHolder : App[];

  constructor() { 
    

  }

  addApplication (holder:App){
    this.jobsHolder.push(holder);
  }
  returnApplications() {

    return this.jobsHolder.forEach;

  }
}

import { Component, OnInit } from '@angular/core';
import {App} from 'src/app/app'

@Component({
  selector: 'app-job-entry',
  templateUrl: './job-entry.component.html',
  styleUrls: ['./job-entry.component.css']
})
export class JobEntryComponent implements OnInit {
  jobApp : App;

  constructor() { 
    this.jobApp = new App()
  }

  ngOnInit() {
  }

}

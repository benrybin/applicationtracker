import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { App } from '../app';
@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent implements OnInit {
  jobStatus : App[];
  constructor(private jobService: JobService) {


   }

  ngOnInit() {
    
  }

}

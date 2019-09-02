import { Component, OnInit } from '@angular/core';
import {App} from 'src/app/app'
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-entry',
  templateUrl: './job-entry.component.html',
  styleUrls: ['./job-entry.component.css']
})
export class JobEntryComponent implements OnInit {
  jobApp : App;

  constructor(private jobService: JobService) { this.jobApp = new App();
    
  }

  ngOnInit() {
    
  }
  onSubmit(){
    this.jobService.addApplication(this.jobApp);
  }

}

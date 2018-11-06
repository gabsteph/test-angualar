import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  providers: [MyServiceService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'testApp';
  private data: string[];
  
  constructor(private myServiceService: MyServiceService) {}
  
  ngOnInit(): void {
    this.data = this.myServiceService.doSomething();
  }
}

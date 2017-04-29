import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter } from '@angular/core';

import { LoggingService } from "./../logging.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTitle: string = "Welcome to the ninja directory!";
  @Input()  ninja = {};
  @Output() onYell = new EventEmitter();

  constructor(private logger: LoggingService) { }

  ngOnInit() {
  }

  fireYellEvent(e){
    this.onYell.emit(e);
  }  

  logIt(){
    this.logger.log();
  }

}

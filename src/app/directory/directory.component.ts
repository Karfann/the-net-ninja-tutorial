import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { LoggingService } from "./../logging.service";
import { DataService } from "./../data.service";

declare var firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  term: string = "";

  ninjas = [];
  name: string = '';
  belt: string = '';

  constructor(
    private route: ActivatedRoute,
    private logger: LoggingService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    //this.dataService.fetchData().subscribe((data) => this.ninjas = data);
    this.fbGetData();
  }
 
  logIt(){
    this.logger.log();
  }

  fbGetData(){
    firebase.database().ref('/')
      .on('child_added', (snapshot) => {
        console.log(snapshot.val());
        this.ninjas.push(snapshot.val());
    })
  }

  fbPostData(name: string, belt: string){
    firebase.database().ref('/').push({
      name: name, belt: belt
    })
  }

}

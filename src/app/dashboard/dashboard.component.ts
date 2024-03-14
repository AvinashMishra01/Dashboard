import { Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentDate: Date = new Date();

  formattedDate: string;
  formattedMonth:String;
  formattedTime: string;
  amPm: string;
  dayName: string;
dataForRealTimeMonitoring:any= [
  {
    id:1, 
    value:0 ,
    content: "Ringing Calls"
  },
  {
    id:2, 
    value:0 ,
    content: "Incoming Calls"
  },
  {
    id:3, 
    value:0 ,
    content: "Answered Calls"
  },
  {
    id:4, 
    value:0 ,
    content: "Inbound Calls Today"
  },
  {
    id:5, 
    value:0 ,
    content: "Outbound Calls Today"
  }
]
dataForRealSalesMonitoring:any= [
  {
    id:1, 
    value:0 ,
    content: "Total Sales"
  },
  {
    id:2, 
    value:0 ,
    content: "Inbound Sales"
  },
  {
    id:3, 
    value:0 ,
    content: "Outbound Sales"
  },
  {
    id:4, 
    value:0 ,
    content: "In Sales / Hours"
  },
  {
    id:5, 
    value:0 ,
    content: "Out Sales / Hours"
  }
]




  constructor(public datePipe: DatePipe) { }

  ngOnInit() {

    this.formattedDate = this.datePipe.transform(this.currentDate, 'dd'); 
    this.formattedMonth = this.datePipe.transform(this.currentDate, 'MMMM'); 
    this.formattedTime = this.datePipe.transform(this.currentDate, 'h:mm'); 
    this.amPm = this.datePipe.transform(this.currentDate, 'a');
    this.dayName = this.getDayName(this.currentDate.getDay());

  }

  getDayName(day: number): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
  }

  swalFire()
  {
    Swal.fire('Hey...', 'I am workin on it, Sorry for Inconvenience !', 'info');
  }

}

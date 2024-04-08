import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  sum = 0;
  result: any;
  constructor(public service: StudentService){}

  ngOnInit():void{

  }

  calculate(num1: number ,num2: number){
    this.sum = num1 + num2;
    return this.sum;
  }

  saveData(){
    let info = {
      sumVal: this.calculate(5,5),
      name: "Dot Net Office"
    };
    this.SaveDataIntoConsol(info);
    this.service.SaveDetails(info).subscribe(response=>{
      this.result = response;
    })
  }

  SaveDataIntoConsol(info: { sumVal: number; name: string; }){
    console.log(info)
  }

  StudentResult(){
    if(this.calculate(10,20) >= 40)
      {
        return "Pass";
      }
      else
      {
        return "Fail"
      }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent implements OnInit {

  myDate =new Date();
  price:number=12500;
  person:Person={firstName:"Alperen",lastName:"Erdem",age:24}
  person2:Person={firstName:"Sıla Sultan",lastName:"Erdem",age:20}


  constructor(){

  }
  ngOnInit(): void {

  }

}
interface Person{
  firstName:string,
  lastName:string,
  age:number
}

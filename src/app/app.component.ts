import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularTutorial';
}

class Alperen{
//Fields
name:string;
number:number;
createdDate:Date;

//constructor 
constructor(name:string,number:number,createdDate:Date) {
  this.name=name;
  this.number=number;
  this.createdDate=createdDate;

}
//Methods
Topla(a1:number,a2:number):number //dönüş tipi belirttiğim için return ettiğim number olmalı
{
  return a1+a2;
}

Topla2(a1:number,a2:number) //dönüş tipi belirtmediğim  için return ettiğim herhnagi bişi olabilir
{
  var b1=1;
  var b2=2;

}
}
class alperen2 extends Alperen//inheritance aldık
{ 
  constructor(name:string,number:number,createdDate:Date) {
    super(name,number,createdDate);
  } 
  Method2(){
    this.name="Alperen";
  }
}



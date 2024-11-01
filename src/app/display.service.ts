import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private logger: DisplayService) {}

  Log(data:any){
  console.log("Array is displayed by Display service");

  console.log(data)
 }
}

import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { ChildUser } from '../../Interfaces/child-user';
import { DisplayService } from '../../display.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent{
  @Input() readData: any ='data';

  childpeople: ChildUser[]=[
    {
      id: 86940542,
      Firstname: 'Natia',
      Lastname: 'Giorgadze',
      DateOfBirth: 1989,
      PhoneNumber: 599458823,
      Email: 'Natgio@gmail.com'
    },
    {
      id: 98763456,
      Firstname: 'Michael',
      Lastname: 'Edwards',
      DateOfBirth: 1955,
      PhoneNumber: 234776656,
      Email: 'MEdwards@gmail.com'
    },
    {
      id: 97832378,
      Firstname: 'Viktor',
      Lastname: 'Vardiashvili',
      DateOfBirth: 2002,
      PhoneNumber: 599543389,
      Email: 'Vikvard@gmail.com'
    }
  ]
  
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();

  sendData(){
    this.parentFunction.emit(this.childpeople);
  }

  Display(){
    DisplayService.Log(this.childpeople);
  }
}

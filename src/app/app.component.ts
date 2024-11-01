import { Component } from '@angular/core';
import { ParentUser } from './Interfaces/parent-user';
import { User } from './Interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lukakereselidze';

  people=[
    {
      firstname: 'Vano',
      lastname: 'Todua',
      age: 15
    },
    {
      firstname: 'Nikoloz',
      lastname: 'Maisuradze',
      age: 23
    },
    {
      firstname: 'Giorgi',
      lastname: 'Bananashvili',
      age: 45
    },
    {
      firstname: 'Luka',
      lastname: 'Nozadze',
      age: 17
    },
    {
      firstname: 'Jemal',
      lastname: 'Baziashvli',
      age: 67
    },
  ]

  parentPeople: ParentUser[]=[
    {
      id: 45423452,
      Firstname: 'Gela',
      Lastname: 'Tyemaladze',
      DateOfBirth: 1967,
      PhoneNumber: 557345678,
      Email: 'gelagela@gmail.com'
    },
    {
      id: 89756478,
      Firstname: 'Nikoloz',
      Lastname: 'Jokhashvili',
      DateOfBirth: 1985,
      PhoneNumber: 599784525,
      Email: 'Nikojokh@gmail.com'
    },
    {
      id: 93840586,
      Firstname: 'Barbare',
      Lastname: 'Kipshidze',
      DateOfBirth: 2001,
      PhoneNumber: 557256678,
      Email: 'Barbarian@gmail.com'
    },
  ]

  readData: any;

  inputData:any;

  parentFunction(data:any){
    this.inputData=data;
  }

  newperson: User=
    {
      id: 0,
      Firstname: '',
      Lastname: '',
      DateOfBirth: 0,
      PhoneNumber: 0,
      Email: ''
    }
  peoples: User[]=[];
  addPerson(){
    this.peoples.push(this.newperson);
    this.newperson={
      id: 0,
      Firstname: '',
      Lastname: '',
      DateOfBirth: 0,
      PhoneNumber: 0,
      Email: ''
    }
  }
}

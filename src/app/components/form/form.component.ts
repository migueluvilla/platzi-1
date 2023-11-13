import { Component } from '@angular/core';
import { AppComponent } from '../../app.component'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  register = {
    name: '',
    email: '',
    password: ''
  };
  onRegister(){
    console.log(this.register);
  };
}

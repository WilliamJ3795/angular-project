import { Component, OnInit, } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  ngOnInit() {
    this.signupForm = new FormGroup({ 
      'userData': new FormGroup({ 
      }), 
    }
    );  
  }
    signupForm!: FormGroup; 

}

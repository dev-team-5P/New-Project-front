import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToasterService } from 'angular2-toaster';
=======
>>>>>>> 4848802e2f79438afb79f48a821ea5e7f0445872

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

<<<<<<< HEAD
  resetForm: FormGroup;

  constructor(private auth: AuthService,
    private router: Router,
    private toastr: ToasterService) { }

  ngOnInit(): void {
    this.resetForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
=======
  constructor() { }

  ngOnInit(): void {
>>>>>>> 4848802e2f79438afb79f48a821ea5e7f0445872
  }

}

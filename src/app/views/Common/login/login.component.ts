import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToasterService } from 'angular2-toaster';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  constructor(
    private toasterService: ToasterService,
    private router: Router,
    private auth: AuthService ) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    this.toasterService.pop('success', 'Args Title', 'Args Body');
    // this.auth.signin(this.LoginForm.value).subscribe(
    //   (res: any) => {
    //     // this.toastr.success('Connected Successfully');
    //     this.router.navigateByUrl('/home/dashboard');
    //   },
    // );
  }
}



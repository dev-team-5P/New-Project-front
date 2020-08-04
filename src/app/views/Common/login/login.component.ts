import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToasterService } from 'angular2-toaster';
<<<<<<< HEAD

=======
>>>>>>> 4848802e2f79438afb79f48a821ea5e7f0445872
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
<<<<<<< HEAD
  hide = true;
  constructor(    private auth: AuthService,
    private router: Router,
    private toastr: ToasterService) { }
=======
  constructor(
    private toasterService: ToasterService,
    private router: Router,
    private auth: AuthService ) { }
>>>>>>> 4848802e2f79438afb79f48a821ea5e7f0445872

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
<<<<<<< HEAD
  login() {
  this.auth.signin(this.LoginForm.value).subscribe(
    (res: any) => {
      localStorage.setItem("token", res.message);
      // this.toastr.pop('success', 'Args Title', 'Args Body');
      this.router.navigateByUrl("/dashboard");
    },
    // (err) => {
    //   return this.toastr.pop('warning', 'Args Title', 'Args Body');
    // }
  );
}
}
=======

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


>>>>>>> 4848802e2f79438afb79f48a821ea5e7f0445872

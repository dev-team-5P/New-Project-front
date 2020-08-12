import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // private toasterService: ToasterService;
  LoginForm: FormGroup; 
  hide = true;
  constructor(    
    private auth: AuthService,
    private router: Router,
    private toasterService: ToasterService) {}

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
  login() {
  this.auth.signin(this.LoginForm.value).subscribe(
    (res: any) => {
      localStorage.setItem("token", res.message);
      this.toasterService.pop('success', 'success', 'Welcom back');
      this.router.navigateByUrl("/dashboard");
    },
    (err) => {
      this.toasterService.pop('error', 'Erreur', 'something wrong');
    }
  );
}
}

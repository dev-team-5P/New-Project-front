import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Roles: any = ['Candidat', 'Etablissement', 'Admin'];
  RegisterForm: FormGroup;
  hide = true;

  constructor(private auth: AuthService,
    private router: Router,
    private toastr: ToasterService) { }

  ngOnInit(): void {
    this.RegisterForm = new FormGroup ({
      nom: new FormControl ('', Validators.required),
      prenom: new FormControl ('', Validators.required),
      adresse: new FormControl ('', Validators.required),
      téléphone: new FormControl ('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      etablisement: new FormControl ('', Validators.required),
    })
  }
  register() {
    this.auth.Register(this.RegisterForm.value).subscribe(
      () => {
        this.router.navigate(["/login"]);
        this.toastr.pop('success', 'Args Title', 'Args Body');
      },
      (err) => {
        this.router.navigate(["/register"]);
        return this.toastr.pop('warning', 'Args Title', 'Args Body');
      }
    );
  }
}

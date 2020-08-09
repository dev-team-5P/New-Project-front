import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import {ToasterService,} from 'angular2-toaster';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  hide = true;
  ListEtablissements ;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toasterService: ToasterService) { }
    

  ngOnInit(): void {

    this.getetab();
    this.RegisterForm = new FormGroup ({
      nom: new FormControl ('', Validators.required),
      prenom: new FormControl ('', Validators.required),
      adresse: new FormControl ('', Validators.required),
      telephone: new FormControl ('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      etablisement: new FormControl (null , Validators.required),
    })

  }
  register() {
    this.auth.Register(this.RegisterForm.value.etablisement, this.RegisterForm.value).subscribe(
      () => {
        this.toasterService.pop('success', 'success', 'successfully registered');
        this.router.navigate(["/login"]);
      },
      (err) => {
        this.toasterService.pop('error', 'Erreur', 'something wrong');
        this.router.navigate(["/register"]);
      }
    );
  }
  getetab() {
      this.auth.getetab().subscribe ((res:any)=> {
        this.ListEtablissements = res; 
      })
  }
}

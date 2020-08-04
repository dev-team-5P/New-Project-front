<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToasterService } from 'angular2-toaster';
import { SuperadminService } from '../../../services/superadmin.service';
import * as jwt_decode from "jwt-decode";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  RegisterForm: FormGroup;
  hide = true;
  ListEtablissements ;
  decoded = jwt_decode(this.superAdmin.token); 

  constructor(private auth: AuthService,
    private router: Router,
    private toastr: ToasterService , 
    private superAdmin : SuperadminService) { }
    

  ngOnInit(): void {
    this.RegisterForm = new FormGroup ({
      nom: new FormControl ('', Validators.required),
      prenom: new FormControl ('', Validators.required),
      adresse: new FormControl ('', Validators.required),
      telephone: new FormControl ('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      etablisement: new FormControl (null , Validators.required),
    })
    // this.ListEtablissements = this.superAdmin.getall();
    this.getetab();
  }
  register() {
    this.auth.Register(this.RegisterForm.value.etablisement, this.RegisterForm.value).subscribe(
      () => {
        this.router.navigate(["/login"]);
        //this.toastr.pop('success', 'Args Title', 'Args Body');
      },
      (err) => {
        this.router.navigate(["/register"]);
        //return this.toastr.pop('warning', 'Args Title', 'Args Body');
      }
    );
  }
  getetab() {
    if (this.decoded.data.role === "condidat") {
      this.superAdmin.getall()
      }
  }
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor() { }

>>>>>>> 4848802e2f79438afb79f48a821ea5e7f0445872
}

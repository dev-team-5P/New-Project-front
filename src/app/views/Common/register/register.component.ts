import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToasterService } from 'angular2-toaster';
import { SuperadminService } from '../../../services/superadmin.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  Roles: any = ['Candidat', 'Etablissement', 'Admin'];
  RegisterForm: FormGroup;
  hide = true;
  ListEtablissements ;

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
      etablisement: new FormControl ('', Validators.required),
    })
    debugger;
    this.ListEtablissements = this.superAdmin.getall();
  }
  register() {
    this.auth.Register(this.RegisterForm.value).subscribe(
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
}

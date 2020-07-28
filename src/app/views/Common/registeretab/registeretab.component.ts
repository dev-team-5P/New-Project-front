import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-registeretab',
  templateUrl: './registeretab.component.html',
  styleUrls: ['./registeretab.component.css']
})
export class RegisteretabComponent implements OnInit {

  RegisteretabForm: FormGroup;
  hide = true;
  constructor(private auth: AuthService,
    private router: Router,
    private toastr: ToasterService) { }

  ngOnInit(): void {
    this.RegisteretabForm = new FormGroup ({
      nom: new FormControl ('', Validators.required),
      adresse: new FormControl ('', Validators.required),
      téléphone: new FormControl ('', Validators.required),
      fax : new FormControl ('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      logo: new FormControl ('', Validators.required),
    });
  }
  registeretab() {
    this.auth.Registeretab(this.RegisteretabForm.value).subscribe(
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

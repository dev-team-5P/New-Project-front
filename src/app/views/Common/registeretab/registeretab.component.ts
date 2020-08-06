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
  file: File;
  data: FormData;

  constructor(private auth: AuthService,
    private router: Router,
    private toasterService: ToasterService) {
      this.data = new FormData();
    }

  ngOnInit(): void {
    this.RegisteretabForm = new FormGroup ({
      nom: new FormControl ('', Validators.required),
      adresse: new FormControl ('', Validators.required),
      telephone: new FormControl ('', Validators.required),
      fax : new FormControl ('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      // logo: new FormControl ('', Validators.required),
    });
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      this.file = event.target.files[0];
    }
  }


  registeretab() {
    this.auth.Registeretab(this.RegisteretabForm.value).subscribe(
      (res: any) => {
        this.upload(res._id);
        this.toasterService.pop('success', 'success', 'Welcom back');
        this.router.navigate(["/login"]);
      },
      (err) => {
        this.toasterService.pop('error', 'Erreur', 'something wrong');
        this.router.navigate(["/registeretab"]);
      }
    );
  }

  upload(id) {
    this.data.set("image", this.file);
    this.auth.upload(this.data, id).subscribe((res) => {});
  }
}

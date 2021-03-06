import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CandidatService } from '../../services/candidat.service';
import * as jwt_decode from 'jwt-decode';
import { ToasterService } from 'angular2-toaster';
import { AuthService } from '../../services/auth.service';
import { AvatarService } from '../../services/avatar.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {

  paramcandForm: FormGroup;
  modifpasscandForm: FormGroup;
  decoded = jwt_decode(this.candidat.token);
  isCollapsed: boolean = true;
  isCollapsed1: boolean = true;
  data: FormData;
  file: any;

  constructor(private candidat: CandidatService,
    private toasterService: ToasterService,
    private  auth: AuthService,
    private  avatarService: AvatarService
    ) { }

  ngOnInit(): void {
    this.paramcandForm = new FormGroup ({
      nom: new FormControl (this.decoded.data.nom, Validators.required),
      prenom: new FormControl (this.decoded.data.prenom, Validators.required),
      adresse: new FormControl (this.decoded.data.adresse, Validators.required),
      telephone: new FormControl (this.decoded.data.telephone, Validators.required),
      email: new FormControl(this.decoded.data.email, [Validators.required, Validators.email])
    });
    this.modifpasscandForm = new FormGroup({
      oldpass: new FormControl('', Validators.required),
      newpass: new FormControl('', Validators.required)
    });
    console.log(this.decoded);
  }

  Savecand() {
    this.candidat.comptecand(this.decoded.data._id, this.paramcandForm.value).subscribe((res: any) => {
      console.log(res);
      this.upload(res._id);
      this.toasterService.pop('success', 'success', 'modification has been saved');
    },
    (err) => {
      this.toasterService.pop('error', 'Erreur', 'something wrong');
    }
  );
}
  Savepasscand() {
    this.candidat.modifPasscand(this.decoded.data._id, this.modifpasscandForm.value).subscribe((res: any) => {
      console.log(res);
      this.toasterService.pop('success', 'success', 'modification has been saved');
    },
    (err) => {
      this.toasterService.pop('error', 'Erreur', 'something wrong');
    }
  );
}
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  collapsed1(event: any): void {
    // console.log(event);
  }

  expanded1(event: any): void {
    // console.log(event);
  }
  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      this.file = event.target.files[0];
    }
  }
  upload(id) {
    this.data = new FormData();
    this.data.append('image', this.file);
    this.auth.uploadPhoto(this.data, id).subscribe((res: any) => {
      localStorage.setItem('avatar', res.logo);
      this.avatarService.reloadAvatar();
    });
  }

}

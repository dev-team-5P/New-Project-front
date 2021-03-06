import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EtablissementService } from '../../services/etablissement.service';
import * as jwt_decode from 'jwt-decode';
import { AuthService } from '../../services/auth.service';
import { ToasterService } from 'angular2-toaster';
import { AvatarService } from '../../services/avatar.service';

@Component({
  selector: 'app-parametrageetablisement',
  templateUrl: './parametrageetablisement.component.html',
  styleUrls: ['./parametrageetablisement.component.css']
})
export class ParametrageetablisementComponent implements OnInit {

  constructor(private etabService: EtablissementService,
    private auth: AuthService,
    private toasterService: ToasterService,
    private avatarService: AvatarService
    ) { }
  parametrageetabForm: FormGroup;
  modifpassForm: FormGroup;
  decoded = jwt_decode(this.etabService.token);
  logo = localStorage.getItem('avatar') || {};

  isCollapsed: boolean = true;
  isCollapsed1: boolean = true;
  file: File;
  data: FormData;



  ngOnInit(): void {
    this.parametrageetabForm = new FormGroup({
      nom: new FormControl (this.decoded.data.nom, Validators.required),
      adresse: new FormControl (this.decoded.data.adresse, Validators.required),
      telephone: new FormControl (this.decoded.data.telephone, Validators.required),
      fax : new FormControl (this.decoded.data.fax, Validators.required),
      email: new FormControl(this.decoded.data.email, [Validators.required, Validators.email]),
    });
    this.modifpassForm = new FormGroup({
      oldpass: new FormControl('', Validators.required),
     newpass: new FormControl('', Validators.required)
   });
  }

  Save() {
    this.etabService.parametragedecompteetab(this.decoded.data._id, this.parametrageetabForm.value).subscribe((res: any) => {
      this.upload(res._id);
      this.toasterService.pop('success', 'success', 'modification has been saved');
    },
    (err) => {
      this.toasterService.pop('error', 'Erreur', 'something wrong');
    }
  );
}
  Savepass() {
    this.etabService.modifPassetab(this.decoded.data._id, this.modifpassForm.value).subscribe((res: any) => {
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
    this.auth.upload(this.data, id).subscribe((res: any) => {
      localStorage.setItem('avatar', res.logo);
      this.avatarService.reloadAvatar();
          console.log(res);
    });
  }
}

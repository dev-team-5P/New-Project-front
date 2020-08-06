import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CandidatService } from '../../services/candidat.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {

  paramcandForm: FormGroup;
  modifpasscandForm: FormGroup;
  decoded = jwt_decode(this.candidat.token);

  constructor(private candidat: CandidatService) { }

  ngOnInit(): void {
    this.paramcandForm = new FormGroup ({
      nom: new FormControl (this.decoded.data.nom, Validators.required),
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
    });
  }
  Savepasscand() {
    this.candidat.modifPasscand(this.decoded.data._id, this.modifpasscandForm.value).subscribe((res: any) => {
      console.log(res);
    });
  }

}

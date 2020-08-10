import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToasterService } from 'angular2-toaster';
import { EtablissementService } from '../../../services/etablissement.service';
import { SuperadminService } from '../../../services/superadmin.service';

@Component({
  selector: 'app-addcandidat',
  templateUrl: './addcandidat.component.html',
  styleUrls: ['./addcandidat.component.css']
})
export class AddcandidatComponent implements OnInit {
  addcandForm: FormGroup;
  hide = true;
  constructor(private auth: AuthService,
    private router: Router,
    private etablissement: EtablissementService,
    private toasterService: ToasterService
    ) { }

  ngOnInit(): void {
    this.addcandForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      adresse: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  addCandidat() {
    this.etablissement.addcand(this.addcandForm.value).subscribe(
      () => {
        this.toasterService.pop('success', 'success', 'Successfully Added');
        this.router.navigate(['/etablissement/listcandidat']);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
import { Router, ActivatedRoute } from '@angular/router';
import { EtablissementService } from '../../../services/etablissement.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-update-candidat',
  templateUrl: './update-candidat.component.html',
  styleUrls: ['./update-candidat.component.css']
})
export class UpdateCandidatComponent implements OnInit {
  hide = true;
  table;
  Id;
  updateCandForm: FormGroup;

  constructor(private etablissementService: EtablissementService,
    private router: Router,
    private activateroute: ActivatedRoute,
    private route: ActivatedRoute,
    private toasterService: ToasterService
    
    ) { }

  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get('id');
    this.getCandById();
    this.updateCandForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      adresse: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  getCandById() {
    this.etablissementService.getcandById(this.Id).subscribe(
      (res) => {
        this.updateCandForm.patchValue(res);
      },
      (errors) => console.log(errors)
    );
  }

  updatecand() {
    this.etablissementService
      .updatecand(this.Id, this.updateCandForm.value)
      .subscribe(() => {
        this.router.navigate(['../../listcandidat'], { relativeTo: this.route });
        this.toasterService.pop('success', 'success', 'successfully updated');
      });
  }

}

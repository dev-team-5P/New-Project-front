import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
import { Router, ActivatedRoute } from '@angular/router';
import { EtablissementService } from '../../../services/etablissement.service';

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
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get('id');
    this.updateCandForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      adresse: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  updatecand() {
    this.etablissementService
      .updatecand(this.Id, this.updateCandForm.value)
      .subscribe(() => {
        this.router.navigate(['../../listcandidat'], { relativeTo: this.route });
      });
  }

}

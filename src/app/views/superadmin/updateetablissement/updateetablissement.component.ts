import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SuperadminService } from '../../../services/superadmin.service';
@Component({
  selector: 'app-updateetablissement',
  templateUrl: './updateetablissement.component.html',
  styleUrls: ['./updateetablissement.component.css']
})
export class UpdateetablissementComponent implements OnInit {

  constructor(
    private adminservice: SuperadminService,
    private activateroute: ActivatedRoute,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  Id = this.activateroute.snapshot.paramMap.get("id");
  etabliUpdateform: FormGroup;
  etablissement;
  ngOnInit(): void {
    this.getEtabliById();
    this.etabliUpdateform = new FormGroup({
      nom: new FormControl ('', Validators.required),
      adresse: new FormControl ('', Validators.required),
      telephone: new FormControl ('', Validators.required),
      fax : new FormControl ('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  getEtabliById() {
    this.adminservice.getetabliById(this.Id).subscribe((res: any) => {
      this.etabliUpdateform.patchValue(res)
    });
  }
    /******************update pme by id *********** */
    updateEtabById() {
      this.adminservice
        .updateEtabli(this.Id, this.etabliUpdateform.value)
        .subscribe(() => {
          this.router.navigate(["../../listetablissement"], { relativeTo: this.route });
        });
    }
}

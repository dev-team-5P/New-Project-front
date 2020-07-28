import { Component, OnInit } from '@angular/core';
import { SuperadminService } from '../../../services/superadmin.service';
import * as jwt_decode from 'jwt-decode';

export interface Data {
  nom: string;
  adresse: string;
  téléphone: number;
  fax: number;
}

const ELEMENT_DATA: Data[] = [
];
@Component({
  selector: 'app-listetablissement',
  templateUrl: './listetablissement.component.html',
  styleUrls: ['./listetablissement.component.css']
})
export class ListetablissementComponent implements OnInit {
  displayedColumns: string[] = ['Etablissement', 'adresse', 'téléphone', 'fax'];
  
  dataSource : any[] = [];

  constructor(private adminservice: SuperadminService,) { }

  ngOnInit(): void {
    this.getallpetab();
  }
  // ************* get all etabllisement for superAdmin*******//
  getallpetab() {
    // if (this.decoded.data.role === 'superAdmin') 
    {
      this.adminservice.getall().subscribe(data=> {
          this.dataSource =data;
          console.log(this.dataSource)
        });
    } 
  }
}

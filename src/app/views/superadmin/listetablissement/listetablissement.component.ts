import { Component, OnInit, ViewChild } from '@angular/core';
import { SuperadminService } from '../../../services/superadmin.service';
import * as jwt_decode from 'jwt-decode';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ToasterService } from 'angular2-toaster';

// import {  MatSort, } from '@angular/material/sort';
import { Router } from '@angular/router';

export interface Data {
  nom: string;
  adresse: string;
  telephone: number;
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
  dataSource: any;
  displayedColumns: string[] = ['nom', 'adresse', 'telephone', 'fax', 'Edit', 'Delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private adminservice: SuperadminService,
     private router: Router,
     private toasterService: ToasterService
     ) { }


  ngOnInit(): void {
    this.getalletab();

  }
  // ************* get all etabllisement for superAdmin*******//
  getalletab() {
    this.adminservice.getall()
      .subscribe(
      res => {
        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;
        // this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource.data);
      },
      error => {
        console.log('There was an error while retrieving data !!!' + error);
      });
  }

  Filter(searchstring: string) {
    searchstring = searchstring.trim();
    searchstring = searchstring.toLowerCase();
    this.dataSource.filter = searchstring;
  }
  // tslint:disable-next-line: use-lifecycle-interface

  editEtabli(id) {
    this.router.navigate([`/superadmin/updateetablissement/${id}`]);
    }
    deleteEtab(id) {
      this.adminservice.deleteetab(id).subscribe(() => {
        this.toasterService.pop('success', 'success', 'Successfully deleted');
        this.getalletab();
      });
      }
}

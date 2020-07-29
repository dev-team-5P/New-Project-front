import { Component, OnInit,ViewChild } from '@angular/core';
import { SuperadminService } from '../../../services/superadmin.service';
import * as jwt_decode from 'jwt-decode';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
export interface Data {
  nom: string;
  adresse: string;
  tel: number;
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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSortModule, {static: false}) sort: MatSortModule;
  displayedColumns: string[] = ['nom', 'adresse', 'tel', 'fax', 'Edit','Delete'];
  dataSource: any; ;

  constructor(private adminservice: SuperadminService,) { }

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
        this.dataSource.paginator = this.paginator;  
        console.log(this.dataSource.data);  
      },  
      error => {  
        console.log('There was an error while retrieving data !!!' + error);  
      });  
  }  

  Filter(searchstring:string)  
  {  
    searchstring = searchstring.trim();   
    searchstring = searchstring.toLowerCase();  
    this.dataSource.filter = searchstring;  
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

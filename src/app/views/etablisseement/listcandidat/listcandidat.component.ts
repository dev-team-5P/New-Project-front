import { Component, OnInit, ViewChild } from '@angular/core';
import { EtablissementService } from '../../../services/etablissement.service';
import * as jwt_decode from 'jwt-decode';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

export interface Data {
  nom: string;
  prenon: string;
  email: string;
  phone: number;
}
const ELEMENT_DATA: Data[] = [
];

@Component({
  selector: 'app-listcandidat',
  templateUrl: './listcandidat.component.html',
  styleUrls: ['./listcandidat.component.css']
})
export class ListcandidatComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSortModule, {static: false}) sort: MatSortModule;
  displayedColumns: string[] = ['nom', 'prenon', 'email', 'phone', 'Edit', 'Delete'];
  dataSource: any;
  isDeleted = false;

  constructor(private etablissementService: EtablissementService) { }

  ngOnInit(): void {
    this.getallcand();
  }
  getallcand() {
    this.etablissementService.getallcand()
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

  Filter(searchstring: string) {
    searchstring = searchstring.trim();
    searchstring = searchstring.toLowerCase();
    this.dataSource.filter = searchstring;
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

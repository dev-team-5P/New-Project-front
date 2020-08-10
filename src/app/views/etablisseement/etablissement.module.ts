// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { EtablissementRoutingModule } from './etablissement-routing.module';
import { ListcandidatComponent } from './listcandidat/listcandidat.component';
import {MatTableModule} from '@angular/material/table';
import { AddcandidatComponent } from './addcandidat/addcandidat.component';
import { UpdateCandidatComponent } from './update-candidat/update-candidat.component';
import { MailingComponent } from './mailing/mailing.component';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    EtablissementRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatOptionModule,
    MatTableModule,
  ],
  declarations: [
    ListcandidatComponent,
    AddcandidatComponent,
    UpdateCandidatComponent,
    MailingComponent,
  ],
})
export class EtablissementModule { }

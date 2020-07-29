// Angular
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { SuperadminRoutingModule } from './superadmin-routing.module';
import { ListetablissementComponent } from './listetablissement/listetablissement.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    SuperadminRoutingModule,
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
    ListetablissementComponent,
  ],
})
export class SuperadminModule { }

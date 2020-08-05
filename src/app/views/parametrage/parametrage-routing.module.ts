import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametrageComponent } from './parametrage.component';




const routes: Routes = [
    {
        path: '',
        component: ParametrageComponent,
        data: {
            title: 'Page de Parametrage'
        }
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ParametrageRoutingModule { }

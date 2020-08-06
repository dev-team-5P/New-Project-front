import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametrageetablisementComponent } from './parametrageetablisement.component';





const routes: Routes = [
    {
        path: '',
        component: ParametrageetablisementComponent,
        data: {
            title: 'Page de Parametrage'
        }
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ParametrageetabRoutingModule { }

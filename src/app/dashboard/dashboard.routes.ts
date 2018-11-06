import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const dashboardroutes: Routes = [
    {path: 'dashboard', component: DashboardComponent}
];

@NgModule({ 
    imports: [RouterModule.forChild(dashboardroutes)],
    exports: [RouterModule]
})

export class DashboardRoutesModule { }

// import { Routes } from '@angular/router';

import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { NgModule } from "@angular/core";

// import { AboutComponent } from './about/about.component';

// export const routes: Routes = [
//     {path:"about",component:AboutComponent}
// ];

const routes:Routes=[
    {path:'about',component:AboutComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
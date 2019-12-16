import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { HeroListComponent } from "../hero-list/hero-list.component";

const routes: Routes = [
  // {
  //   path: "hello",
  //   component: HeroListComponent
  // },
  {
    path: "",
    component: CustomerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}

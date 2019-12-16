import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HeroListComponent } from "./hero-list/hero-list.component";
import { OrderListComponent } from "./orders/order-list/order-list.component";
import { CustomerListComponent } from "./customers/customer-list/customer-list.component";

// const routes: Routes = [
//   // { path: "", component: HeroListComponent },
//   { path: "customers", component: CustomerListComponent },
//   { path: "orders", component: OrderListComponent },
//   { path: "heroes", component: HeroListComponent }
// ];

const routes: Routes = [
  {
    path: "heroes",
    component: HeroListComponent
  },
  {
    path: "customers",
    loadChildren: () =>
      import("./customers/customers.module").then(mod => mod.CustomersModule)
  },
  {
    path: "orders",
    loadChildren: () =>
      import("./orders/orders.module").then(mod => mod.OrdersModule)
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "place",
    loadChildren: () =>
      import("./pages/overview/overview.module").then((m) => m.OverviewModule),
  },
  {
    path: "**",
    redirectTo: "place",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

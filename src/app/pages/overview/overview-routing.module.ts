import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NowComponent } from "../now/now.component";
import { TodayComponent } from "../today/today.component";
import { OverviewComponent } from "./overview.component";

const routes: Routes = [
  {
    path: "",
    component: OverviewComponent,
    children: [
      {
        path: "now",
        component: NowComponent,
      },
      {
        path: "today",
        component: TodayComponent,
      },
      {
        path: "**",
        redirectTo: "now",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewRoutingModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OverviewRoutingModule } from "./overview-routing.module";
import { OverviewComponent } from "./overview.component";
import { ComponentsModule } from "src/app/components/components.module";
import { NowComponent } from "../now/now.component";
import { TodayComponent } from "../today/today.component";
import { FiveDaysComponent } from "../five-days/five-days.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [
    OverviewComponent,
    NowComponent,
    TodayComponent,
    FiveDaysComponent,
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    ComponentsModule,
    MatExpansionModule,
    MatTooltipModule,
  ],
})
export class OverviewModule {}

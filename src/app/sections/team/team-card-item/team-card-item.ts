import { Component, Input } from "@angular/core";
import { TeamCardItem } from "../models/team-card-item";

@Component({
  selector: "app-team-card-item",
  templateUrl: "./team-card-item.html",
  styles: []
})
export class TeamCardItemComponent {
    @Input() teamCard!: TeamCardItem;
}
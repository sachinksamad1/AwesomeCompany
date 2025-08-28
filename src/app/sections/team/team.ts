import { Component } from '@angular/core';
import { TeamCardItem } from './models/team-card-item';
import { TEAM_CARD_DATA } from './models/team-card-data';
import { CommonModule } from '@angular/common';
import { TeamCardItemComponent } from './team-card-item/team-card-item';

@Component({
  selector: 'app-team',
  imports: [CommonModule, TeamCardItemComponent],
  templateUrl: './team.html',
  styles: ``
})
export class Team {
  teamCards: TeamCardItem[] = TEAM_CARD_DATA;
  constructor() { }
}

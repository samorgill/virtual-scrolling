// teams.component.ts

import {Component, OnInit} from '@angular/core';
import {TeamsService} from '../teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams = [];

  constructor(private teamsService: TeamsService) {
  }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teams = this.teamsService.getTeams();
  }

}

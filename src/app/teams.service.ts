import {Injectable} from '@angular/core';
import {teams} from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() {
  }

  getTeams() {
    return teams;
  }
}

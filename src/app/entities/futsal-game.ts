import {Team} from "./team";
import {User} from "./user";
import {Goal} from "./goal";

export class FutsalGame {
  team_home:Team = null;
  team_outside:Team = null;
  date: Date = null;
  score_home:number = null;
  score_outside:number = null;

  deserialize(json: {}): FutsalGame {
    for (let prop in json) {
      if(prop == 'team_home' || prop == 'team_outside'){
        this[prop] = new Team().deserialize(json[prop]);
      }else if(prop == 'team_home_players' || prop == 'team_outside_players'){
        this[prop] = User.deserializeArray(json[prop]);
      }else if(prop == 'goals'){
        this[prop] = Goal.deserializeArray(json[prop]);
      }else if(prop == 'date'){
        this[prop] = new Date(json[prop]);
       }else{
        this[prop] = json[prop];
      }
    }
    return this;
  }


  static deserializeArray(json: {}[]): FutsalGame[] {
    let instances: FutsalGame[] = [];

    for (let o of json) {
        instances.push(new FutsalGame().deserialize(o));
    }

    return instances;
  }
}
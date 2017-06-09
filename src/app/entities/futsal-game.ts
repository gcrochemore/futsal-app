import {Team} from "./team";

export class FutsalGame {
  team_home:Team = null;
  team_outside:Team = null;

  deserialize(json: {}): FutsalGame {
    for (let prop in json) {
      if(prop == 'team_home' || prop == 'team_outside'){
        this[prop] = new Team().deserialize(json[prop]);
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
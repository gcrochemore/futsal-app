import {Team} from "./team";
import {User} from "./user";

export class Goal {
  goal:User = null;
  assist:User = null;
  team:Team = null;
  time:number = null;
  video_link:string = "";

  deserialize(json: {}): Goal {
    for (let prop in json) {
      if(prop == 'team'){
        this[prop] = new Team().deserialize(json[prop]);
      }else if(prop == 'goal' || prop == 'assist'){
        this[prop] = new User().deserialize(json[prop]);
      }else{
        this[prop] = json[prop];
      }
    }
    return this;
  }


  static deserializeArray(json: {}[]): Goal[] {
    let instances: Goal[] = [];

    for (let o of json) {
        instances.push(new Goal().deserialize(o));
    }

    return instances;
  }
}
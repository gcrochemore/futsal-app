
import {Company} from "./company";

export class User {
  last_name: string = 'LASTNAME';
  first_name: string = 'FIRSTNAME';
  name:string = 'NAME';
  rating: number = 78;
  picture: string = 'inconnu.jpg';
  company: Company = null;
  goal: number = 0;
  goal_average_by_match: number = 0.0;
  assist: number = 0;
  assist_average_by_match: number = 0.0;
  match: number = 0;
  match_with_stats: number = 0;

  deserialize(json: {}): User {
    for (let prop in json) {
      if(prop == 'company'){
        if(json[prop] != null){
          this[prop] = new Company().deserialize(json[prop]);
        }        
      }else if(json[prop] != null){
         this[prop] = json[prop];
      }
      
    }
    this.name = this.first_name + ' ' + this.last_name;
    this.rating = 65 + (this.goal_average_by_match + this.assist_average_by_match) * 2;
    return this;
  }


  static deserializeArray(json: {}[]): User[] {
    let instances: User[] = [];

    for (let o of json) {
        instances.push(new User().deserialize(o));
    }

    return instances;
  }
}
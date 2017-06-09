export class User {
  last_name: string = 'LASTNAME';
  first_name: string = 'FIRSTNAME';
  rating: number = 78;

  deserialize(json: {}): User {
    for (let prop in json) {
      this[prop] = json[prop];
    }
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


export class Team {
  name:string = 'Equipe';

  deserialize(json: {}): Team {
    for (let prop in json) {
      this[prop] = json[prop];
    }
    return this;
  }


  static deserializeArray(json: {}[]): Team[] {
    let instances: Team[] = [];

    for (let o of json) {
        instances.push(new Team().deserialize(o));
    }

    return instances;
  }
}
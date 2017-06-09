

export class Company {
  name:string = 'company';
  picture: string = 'trsb.png';

  deserialize(json: {}): Company {
    for (let prop in json) {
      this[prop] = json[prop];
    }
    return this;
  }


  static deserializeArray(json: {}[]): Company[] {
    let instances: Company[] = [];

    for (let o of json) {
        instances.push(new Company().deserialize(o));
    }

    return instances;
  }
}
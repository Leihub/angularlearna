import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    let heroes = [
      { id: 11, name: 'mr.Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'celeritas' },
      { id: 15, name: 'magneta' },
      { id: 16, name: 'Rubberman' },
      { id: 17, name: 'Dynama' }
    ];
    return {heroes};
  }
}

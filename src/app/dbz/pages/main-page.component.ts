import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbxService:DbzService){

  }

  get characters(): Character[]{
    return [...this.dbxService.characters];
  }
  onDeleteCharacter(id:string):void{
    this.dbxService.deleteCharacterById(id)
  }
  onNewCharacter(Character:Character){
    this.dbxService.addCharacter(Character)
  }
}

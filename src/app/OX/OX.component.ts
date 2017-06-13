import {Component} from '@angular/core';
import {TranslateService} from "../translate/translate.service";

@Component({
    selector: 'app-ox',
    templateUrl: `./OX.component.html`
})
export class OXComponent {
  wyswietlacz: string;
  gracz: string;
  wygrywaGracz:string;
  table=[["","",""],["","",""],["","",""]];
  gameEnd=false;
  player="X";

    constructor(_translate:TranslateService){
      this.gracz=_translate.instant('Gracz: ');
      this.wygrywaGracz = _translate.instant('Wygrywa gracz: ');
    };

  move( x, y) {
    if(this.table[x][y]===""&&!this.gameEnd){
      this.table[x][y]=this.player;
      if(this.check()){
        this.win();
      }
      else{
        this.changePlayer();
      }
    }
  }

  check() {
    for(var i = 0; i<=2;i++){
      if(this.table[i][0]===this.table[i][1] && this.table[i][1]===this.table[i][2] && this.table[i][1]!=="" ||
        this.table[0][i]===this.table[1][i] && this.table[1][i]===this.table[2][i] && this.table[1][i]!=="" )
        return true;
    }
    return (this.table[0][0]===this.table[1][1] && this.table[1][1]===this.table[2][2] && this.table[1][1]!=="" ||
    this.table[0][2]===this.table[1][1] && this.table[1][1]===this.table[2][0] && this.table[1][1]!=="" );
  }

  win(){
    this.gameEnd=true;
    this.wyswietlacz = this.wygrywaGracz + this.player;
  }

  changePlayer() {
    if (this.player==="X") this.player = "O";
    else this.player="X";
    this.wyswietlacz=this.gracz + this.player;
  }

  newGame() {
    this.player="X";
    this.wyswietlacz = this.gracz + this.player;
    this.table=[["","",""],["","",""],["","",""]];
    this.gameEnd=false;
  }

};

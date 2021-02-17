import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContadorService {
  contHoraDaVerdade: number = 0;

  constructor() {}

  adicionar() {
    this.contHoraDaVerdade = this.contHoraDaVerdade + 1;
    this.setHorasDaVerdade(this.contHoraDaVerdade);
  }

  diminuir() {
    this.contHoraDaVerdade = this.contHoraDaVerdade - 1;
    this.setHorasDaVerdade(this.contHoraDaVerdade);
  }

  getHorasDaVerdade() {
    if(window.localStorage.getItem(`horasDaVerdade`) != null) {
      this.contHoraDaVerdade = Number(window.localStorage.getItem(`horasDaVerdade`));
    }else {
      this.setHorasDaVerdade(this.contHoraDaVerdade);
    }

    return this.contHoraDaVerdade;
  }

  setHorasDaVerdade(valor: number) {
    window.localStorage.setItem(
      `horasDaVerdade`,
      JSON.stringify(valor)
    );
  }
}

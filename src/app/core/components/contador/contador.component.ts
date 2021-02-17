import { Component, OnInit } from '@angular/core';
import { ContadorService } from 'src/app/core/services/contador.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  constructor(public contadorService: ContadorService) { }

  ngOnInit(): void {
  }

}

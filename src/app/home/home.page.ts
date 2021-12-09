import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  planets: {
    name: string;
  }[] = [];

  constructor(
    private swapiSvc: SwapiService
  ) {}

  ngOnInit() {
    this.swapiSvc.loadPlanets().subscribe(
      data => {
        this.planets = [
          ...this.planets,
          ...data.results
        ].sort(
          (a,b) => a.name.localeCompare(b.name)
        );
        console.log(this.planets);
      },
      err => console.error(err)
    );
  }
}

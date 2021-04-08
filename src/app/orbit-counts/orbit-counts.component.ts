import { Component, Input, OnInit } from "@angular/core";
import { Satellite } from "../satellite";

@Component({
  selector: "app-orbit-counts",
  templateUrl: "./orbit-counts.component.html",
  styleUrls: ["./orbit-counts.component.css"],
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() {}

  ngOnInit() {}

  findSatelite(type: string) {
    let count = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (type.toLocaleLowerCase() === this.satellites[i].type.toLowerCase())
        count = count + 1;
    }
    return count;
  }
}

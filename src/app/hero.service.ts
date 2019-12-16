import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  HEROES = [
    { name: "abc1", age: 100 },
    { name: "def2", age: 50 },
    { name: "ghi3", age: 80 }
  ];

  constructor(private logService: LoggerService) {}

  getHeroes() {
    this.logService.customLog("getting...");
    return this.HEROES;
  }
}

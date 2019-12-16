import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoggerService {
  logs: string[] = [];

  constructor() {}

  customLog(message: string) {
    this.logs.push(message);

    console.log("message : ", message);
  }
}

import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller() //decorator
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //decorator
  getHello(): string {
    return this.appService.getHello();
  }
}

//Controller => porta de entrada da aplicação via http geralmente.

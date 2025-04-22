import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { PrismaService } from "./prisma/prisma.service";

@Controller() //decorator
export class AppController {
  constructor(private appService: AppService, private prisma: PrismaService) {}

  @Get() //decorator
  async getHello() {
    return this.prisma.user.findMany();
  }
}

//Controller => porta de entrada da aplicação via http geralmente.

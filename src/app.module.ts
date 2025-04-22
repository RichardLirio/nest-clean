import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaService } from "./prisma/prisma.service";

@Module({
  controllers: [AppController], //tudo que recebe requisições
  providers: [AppService, PrismaService], //o resto é provider
})
export class AppModule {}

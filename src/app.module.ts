import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { CreateAccountController } from "./controllers/create-account.controller";

@Module({
  controllers: [CreateAccountController], //tudo que recebe requisições, comunicação http
  providers: [PrismaService], //o resto é provider, modulos ou classes injetaveis dentro dos controllers
})
export class AppModule {}

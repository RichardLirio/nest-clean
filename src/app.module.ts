import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { CreateAccountController } from "./controllers/create-account.controller";

@Module({
  controllers: [CreateAccountController], //tudo que recebe requisições
  providers: [PrismaService], //o resto é provider
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";

@Module({
  controllers: [], //tudo que recebe requisições
  providers: [PrismaService], //o resto é provider
})
export class AppModule {}

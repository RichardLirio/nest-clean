import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  controllers: [AppController], //tudo que recebe requisições
  providers: [AppService], //o resto é provider
})
export class AppModule {}

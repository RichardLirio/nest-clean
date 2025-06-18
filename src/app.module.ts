import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "./prisma/prisma.service";
import { CreateAccountController } from "./controllers/create-account.controller";
import { envSchema } from "./env";
import { AuthModule } from "./auth/auth.module";
import { AuthenticateController } from "./controllers/authenticate.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ], //modulo importado dentro de outro modulo, como precisa de configuração, utiliza o forRoot()
  controllers: [CreateAccountController, AuthenticateController], //tudo que recebe requisições, comunicação http
  providers: [PrismaService], //o resto é provider, modulos ou classes injetaveis dentro dos controllers
})
export class AppModule {}

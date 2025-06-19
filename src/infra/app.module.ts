import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "./prisma/prisma.service";
import { envSchema } from "./env";
import { AuthModule } from "./auth/auth.module";
import { HttpModule } from "./http/http.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    HttpModule,
  ], //modulo importado dentro de outro modulo, como precisa de configuração, utiliza o forRoot()
})
export class AppModule {}

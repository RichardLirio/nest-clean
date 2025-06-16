import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { Env } from "src/env";

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService], //injeção de classes para utilização dentro do modulo
      useFactory(config: ConfigService<Env, true>) {
        const secret = config.get("JWT_SECRET", { infer: true });

        return {
          secret,
        };
      },
    }),
  ],
})
export class AuthModule {}

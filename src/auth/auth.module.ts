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
      global: true,
      useFactory(config: ConfigService<Env, true>) {
        const privateKey = config.get("JWT_PRIVATE_KEY", { infer: true });
        const publicKey = config.get("JWT_PUBLIC_KEY", { infer: true });

        return {
          signOptions: {
            algorithm: "RS256", //algoritimo usado para gerar as chaves
          },
          privateKey: Buffer.from(privateKey, "base64"), //buffer da chave privada
          publicKey: Buffer.from(publicKey, "base64"), //buffer da chave publica
        };
      },
    }),
  ],
})
export class AuthModule {}

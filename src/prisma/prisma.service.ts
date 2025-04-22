import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "generated/prisma";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ["warn", "error"], //log somente quando houver erros ou avisos
    });
  }

  onModuleInit() {
    return this.$connect(); //metodos do nest para quando o modulo que chama o serviço iniciar
  }
  onModuleDestroy() {
    return this.$disconnect(); //metodos do nest para quando o modulo que chama o serviço terminar
  }
}

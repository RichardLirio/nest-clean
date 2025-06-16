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
    //metodos do nest para quando o modulo que chama o serviço iniciar
    return this.$connect(); //conecta com o prisma
  }
  onModuleDestroy() {
    //metodos do nest para quando o modulo que chama o serviço terminar
    return this.$disconnect(); //fecha conexao com o prisma
  }
}

import { Module } from "@nestjs/common";
import { CreateAccountController } from "./controllers/create-account.controller";
import { AuthenticateController } from "./controllers/authenticate.controller";
import { CreateQuestionController } from "./controllers/create-question.controller";
import { FetchRecentQuestionsController } from "./controllers/fetch-recent-questions.controller";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ], //tudo que recebe requisições, comunicação http
  providers: [PrismaService], //o resto é provider, modulos ou classes injetaveis dentro dos controllers
})
export class HttpModule {}

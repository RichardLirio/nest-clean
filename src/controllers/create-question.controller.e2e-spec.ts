import { AppModule } from "@/app.module";
import { PrismaService } from "@/prisma/prisma.service";
import { INestApplication } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Test } from "@nestjs/testing";
import request from "supertest";

describe("Create question (E2E)", () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let jwt: JwtService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile(); //compila/roda aplicação somente de forma programatica para os testes

    app = moduleRef.createNestApplication();

    prisma = moduleRef.get(PrismaService);
    jwt = moduleRef.get(JwtService);
    await app.init();
  });

  test("[POST] /questions", async () => {
    const user = await prisma.user.create({
      data: {
        name: "John Doe",
        email: "johndoe@example.com",
        password: "123456",
      },
    }); //criando usuario antes de realizar o login

    const accessToken = jwt.sign({ sub: user.id });

    const response = await request(app.getHttpServer())
      .post("/questions")
      .set("Authorization", `Bearer ${accessToken}`)
      .send({
        tittle: "New question",
        content: "Question content",
      });

    expect(response.statusCode).toBe(201); //status code esperado no retorno da rota de criação de usuario

    const questionOnDatabase = prisma.question.findFirst({
      where: {
        tittle: "New question",
      },
    });

    expect(questionOnDatabase).toBeTruthy(); //verifica dentro do banco de dados se o usuario foi criado
  });
});

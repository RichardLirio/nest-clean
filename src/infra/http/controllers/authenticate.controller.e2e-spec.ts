import { AppModule } from "@/infra/app.module";
import { PrismaService } from "@/infra/database/prisma/prisma.service";
import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { hash } from "bcryptjs";
import request from "supertest";

describe("Authenticate (E2E)", () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile(); //compila/roda aplicação somente de forma programatica para os testes

    app = moduleRef.createNestApplication();

    prisma = moduleRef.get(PrismaService);
    await app.init();
  });

  test("[POST] /sessions", async () => {
    await prisma.user.create({
      data: {
        name: "John Doe",
        email: "johndoe@example.com",
        password: await hash("123456", 8),
      },
    }); //criando usuario antes de realizar o login

    const response = await request(app.getHttpServer()).post("/sessions").send({
      email: "johndoe@example.com",
      password: "123456",
    });

    expect(response.statusCode).toBe(201); //status code esperado no retorno da rota
    expect(response.body).toEqual({ access_token: expect.any(String) });
  });
});

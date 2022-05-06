import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { JwtAuthGuard } from './auth/jwt-auth.guard'

async function start() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle(`Заголовок`)
    .setDescription(`Описание`)
    .setVersion(`1.0.0`)
    .addTag(`reD72`)
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup(`api/docs`, app, document)

  await app.listen(PORT, () =>
    console.log(`Server started on port ${PORT} .${process.env.NODE_ENV}.env`)
  )
}
start()

console.log(`${process.env.POSTGRES_DB}`)

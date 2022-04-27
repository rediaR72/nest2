import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function start() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule)

  await app.listen(PORT, () =>
    console.log(`Server started on port ${PORT} .${process.env.NODE_ENV}.env`)
  )
}
start()

console.log('POSTGRESS_HOST+5687')

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const PORT = process.env.PORT || 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(PORT)
  console.log(`🚀 playground on: http://localhost:${PORT}/graphql`)
}
bootstrap()

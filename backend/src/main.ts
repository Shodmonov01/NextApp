import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import { MongooseAdapter } from '@adminjs/mongoose'; // Проверьте, что модуль действительно существует

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const admin = new AdminJS({
    resources: [], // Укажите ресурсы AdminJS
    rootPath: '/admin',
    // Дополнительные настройки
  });

  // Настройка маршрутов AdminJS
  const adminRouter = AdminJSExpress.buildRouter(admin);
  app.use('/admin', adminRouter);

  await app.listen(3001);
}
bootstrap();

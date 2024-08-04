import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import AdminJS from 'adminjs';
import { AdminModule as AdminJSModule } from '@adminjs/nestjs';
import  MongooseAdapter  from '@adminjs/mongoose';
import { User, UserSchema } from './user.schema'; // Убедитесь, что путь корректный

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // Убедитесь, что User и UserSchema определены корректно
    AdminJSModule.forRoot({
      adminJsOptions: {
        resources: [
          { resource: User, options: { listProperties: ['name', 'email'] } },
        ],
        rootPath: '/admin',
        // Если у вас есть кастомные компоненты или настройки
        dashboard: {
          component: AdminJS.bundle('./path/to/custom/dashboard/component'),
        },
      },
      auth: {
        authenticate: async (email, password) => {
          // Реализуйте логику аутентификации
        },
        cookieName: 'adminjs',
        cookiePassword: 'somepassword',
      },
    }),
  ],
})
export class AdminModule {}

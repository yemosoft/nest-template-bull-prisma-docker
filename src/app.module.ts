import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CoreModule } from "./core/core.module";
import { PrismaModule } from "nestjs-prisma";
import { BullModule } from "@nestjs/bull";
import { TasksModule } from "./tasks/tasks.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import appConfig from "./config/app.config";
import { bullConfig } from "./config/bull.config";

@Module({
  imports: [
    CoreModule,
    ConfigModule.forRoot({
      load: [appConfig],
      isGlobal: true, // Bunu kullanarak tüm uygulama boyunca ConfigService'den erişim sağlayabilirsiniz.
    }),
    PrismaModule.forRoot(),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: bullConfig,
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

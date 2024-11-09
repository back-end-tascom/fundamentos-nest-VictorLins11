import { Module } from '@nestjs/common';
import { StudentsModule } from './modules/student/student.module';

@Module({
  imports: [StudentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

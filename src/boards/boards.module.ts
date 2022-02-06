import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { BoardDB } from './entities/board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BoardDB])],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}

import { Module } from '@nestjs/common';
import { QuotationController } from './web/quotation.controller';

@Module({
  imports: [],
  controllers: [QuotationController],
})
export class QuotationModule {}

import { Module } from '@nestjs/common';
import { QuotationModule } from './modules/quotation/quotation.module';

@Module({
  imports: [QuotationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

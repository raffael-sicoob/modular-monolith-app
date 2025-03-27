import { Quote } from './quote.entity';

export class Contract {
  id: string;
  name: string;
  email: string;
  phone: string;
  cep: string;
  addressId: string;
  agentId: string;
  number: string;
  city: string;
  quotes: Quote[];
}

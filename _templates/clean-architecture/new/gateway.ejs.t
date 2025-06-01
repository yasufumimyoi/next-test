---
to: src/gateway/<%= name %>/<%= component %>Gateway.ts
---
import { <%= component %>Dto } from '@/dto/<%= name %>/<%= component %>Dto';

export class <%= component %>Gateway {
  async execute(dto: <%= component %>Dto): Promise<any> {
    // Implement your gateway logic here
    return {};
  }
} 
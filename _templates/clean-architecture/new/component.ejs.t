---
to: src/controller/<%= name %>/<%= component %>Controller.ts
---
import { <%= component %>Dto } from '@/dto/<%= name %>/<%= component %>Dto';
import { <%= component %>Gateway } from '@/gateway/<%= name %>/<%= component %>Gateway';
import { <%= component %>ViewModel } from '@/view-model/<%= name %>/<%= component %>ViewModel';

export class <%= component %>Controller {
  private gateway: <%= component %>Gateway;
  private viewModel: <%= component %>ViewModel;

  constructor() {
    this.gateway = new <%= component %>Gateway();
    this.viewModel = new <%= component %>ViewModel();
  }

  async execute(): Promise<void> {
    const dto = new <%= component %>Dto();
    const result = await this.gateway.execute(dto);
    this.viewModel.update(result);
  }
} 
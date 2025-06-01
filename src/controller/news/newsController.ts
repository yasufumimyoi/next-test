import { newsDto } from '../../dto/news/newsDto';
import { newsGateway } from '../../gateway/news/newsGateway';
import { newsViewModel } from '../../view-model/news/newsViewModel';

export class newsController {
  private gateway: newsGateway;
  private viewModel: newsViewModel;

  constructor() {
    this.gateway = new newsGateway();
    this.viewModel = new newsViewModel();
  }

  async execute(): Promise<void> {
    const dto = new newsDto();
    const result = await this.gateway.execute(dto);
    this.viewModel.update(result);
  }
} 
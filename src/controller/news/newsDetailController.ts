import { newsDetailDto } from '../../dto/news/newsDetailDto';
import { newsDetailGateway } from '../../gateway/news/newsDetailGateway';
import { newsDetailViewModel } from '../../view-model/news/newsDetailViewModel';

export class newsDetailController {
  private gateway: newsDetailGateway;
  private viewModel: newsDetailViewModel;

  constructor() {
    this.gateway = new newsDetailGateway();
    this.viewModel = new newsDetailViewModel();
  }

  async execute(): Promise<void> {
    const dto = new newsDetailDto();
    const result = await this.gateway.execute(dto);
    this.viewModel.update(result);
  }
} 
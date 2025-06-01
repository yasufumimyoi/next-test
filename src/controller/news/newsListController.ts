import { newsListDto } from '../../dto/news/newsListDto';
import { newsListGateway } from '../../gateway/news/newsListGateway';
import { newsListViewModel } from '../../view-model/news/newsListViewModel';

export class newsListController {
  private gateway: newsListGateway;
  private viewModel: newsListViewModel;

  constructor() {
    this.gateway = new newsListGateway();
    this.viewModel = new newsListViewModel();
  }

  async execute(): Promise<void> {
    const dto = new newsListDto();
    const result = await this.gateway.execute(dto);
    this.viewModel.update(result);
  }
} 
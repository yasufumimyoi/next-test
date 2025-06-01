export class newsViewModel {
  private data: any = {};

  update(data: any): void {
    this.data = data;
  }

  getData(): any {
    return this.data;
  }
} 
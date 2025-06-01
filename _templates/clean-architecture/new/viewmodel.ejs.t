---
to: src/view-model/<%= name %>/<%= component %>ViewModel.ts
---
export class <%= component %>ViewModel {
  private data: any = {};

  update(data: any): void {
    this.data = data;
  }

  getData(): any {
    return this.data;
  }
} 
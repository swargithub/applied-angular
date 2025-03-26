import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ApiLinks } from '../types';

export class LinksDataService {
  private client = inject(HttpClient);

  getLinks() {
    return this.client.get<ApiLinks>('https://some-service.com/api/links');
  }
}

import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ApiLink, ApiLinks } from '../types';

export class LinksDataService {
  private client = inject(HttpClient);

  getLinks() {
    return this.client.get<ApiLinks>('https://some-service.com/api/links');
  }

  getLink(id: string) {
    return this.client.get<ApiLink>(`https://some-service.com/api/links/${id}`);
  }
}

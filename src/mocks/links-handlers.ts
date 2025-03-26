import { ApiLink } from '../app/features/links/types';
import { http, HttpResponse, delay } from 'msw';
const fakeLinks: ApiLink[] = [
  {
    id: '1',
    title: 'Applied Angular - Hypertheory',
    url: 'https://applied-angular.hypertheory.com/',
    description: 'Training Materials for the Applied Angular Class',
    tags: ['angular', 'training', 'hypertheory'],
  },
  {
    id: '2',
    title: 'Angular Docs',
    url: 'https://angular.io/docs',
    description: 'The official Angular documentation',
    tags: ['angular', 'docs'],
  },
  {
    id: '3',
    title: 'NGRX Docs',
    url: 'https://ngrx.io/docs',
    description: 'The official NGRX documentation',
  },
];

export const LinkHandlers = [
  http.get('https://some-service.com/api/links', async () => {
    await delay(3000);
    return HttpResponse.json(fakeLinks);
  }),
];

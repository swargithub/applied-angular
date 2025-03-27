import { Books_Handlers } from './books-handlers';
import { LinkHandlers } from './links-handlers';

export const handlers = [...LinkHandlers, ...Books_Handlers];

import {
  patchState,
  signalStoreFeature,
  type,
  withMethods,
} from '@ngrx/signals';
import { addEntity, withEntities } from '@ngrx/signals/entities';

type ReadingListItem = {
  id: string;
  titleId: string;
  note: string;
  addedAt: string;
};

export function withReadingList() {
  return signalStoreFeature(
    withEntities({
      entity: type<ReadingListItem>(),
      collection: 'readingList',
    }),
    withMethods((store) => {
      return {
        addItemToReadingList: (id: string, note: string) => {
          const newItem: ReadingListItem = {
            id: crypto.randomUUID(),
            titleId: id,
            note,

            addedAt: new Date().toISOString(),
          };
          patchState(store, addEntity(newItem, { collection: 'readingList' }));
        },
      };
    }),
  );
}

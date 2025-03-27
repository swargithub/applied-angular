import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { setEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { ApiLink } from '../types';
import { computed, inject } from '@angular/core';
import { LinksDataService } from './links-data';
import { interval, switchMap, tap } from 'rxjs';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export const LinksStore = signalStore(
  withEntities<ApiLink>(),
  withDevtools('links'),
  withState({
    selectedId: undefined as string | undefined,
    isFetching: false,
  }),
  withMethods((store) => {
    const service = inject(LinksDataService);
    return {
      setSelectedId: (id: string) => patchState(store, { selectedId: id }),
      clearSelectedId: () => patchState(store, { selectedId: undefined }),
      loadLinks: rxMethod<void>(
        switchMap(() => {
          patchState(store, { isFetching: true });
          return service
            .getLinks()
            .pipe(
              tap((link) =>
                patchState(store, setEntities(link), { isFetching: false }),
              ),
            );
        }),
      ),
    };
  }),
  withComputed((store) => {
    return {
      selectedLink: computed(() => {
        const id = store.selectedId();
        if (!id) return undefined;
        return store.entities().find((link) => link.id === id);
      }),
    };
  }),
  withHooks({
    onInit(store) {
      console.log('The LinksStore has been initialized');
      store.loadLinks();

      interval(3000)
        .pipe(
          takeUntilDestroyed(),
          tap(() => store.loadLinks()),
        )
        .subscribe();
    },
    onDestroy() {
      console.log('The LinksStore has been destroyed');
    },
  }),
);

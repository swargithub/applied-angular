import { computed, effect } from '@angular/core';
import {
  getState,
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
const COUNTBYVALUES = [1, 3, 5] as const;

type CountByValues = (typeof COUNTBYVALUES)[number];
type CounterState = {
  countBy: CountByValues;
  current: number;
};
export const CounterStore = signalStore(
  withState<CounterState>({
    countBy: 5,
    current: 0,
  }),
  withProps(() => ({
    availableCountByValues: COUNTBYVALUES,
  })),
  withMethods((store) => {
    return {
      setCountBy: (countBy: CountByValues) => patchState(store, { countBy }),
      increment: () =>
        patchState(store, { current: store.current() + store.countBy() }),
      decrement: () =>
        patchState(store, { current: store.current() - store.countBy() }),
    };
  }),
  withComputed((store) => {
    return {
      decrementShouldBeDisabled: computed(
        () => store.current() - store.countBy() < 0,
      ),
      fizzBuzz: computed(() => {
        const current = store.current();
        return fizzBuzzer(current);
      }),
    };
  }),

  withHooks({
    onInit(store) {
      // check to see if it is in localstorage and if it is, set the state
      const savedJson = localStorage.getItem('counter-data');
      if (savedJson) {
        const savedState = JSON.parse(savedJson) as CounterState;

        patchState(store, savedState);
      }

      effect(() => {
        const stateToSave = JSON.stringify(getState(store));
        localStorage.setItem('counter-data', stateToSave);
      });
    },
  }),
);

function isFizz(n: number) {
  return n % 3 === 0;
}

function isBuzz(n: number) {
  return n % 5 === 0;
}
function isFizzBuzz(n: number) {
  return isFizz(n) && isBuzz(n);
}

function fizzBuzzer(n: number): 'Fizz' | 'Buzz' | 'FizzBuzz' | undefined {
  if (n === 0) {
    return undefined;
  }
  if (isFizzBuzz(n)) {
    return 'FizzBuzz';
  }
  if (isFizz(n)) {
    return 'Fizz';
  }
  if (isBuzz(n)) {
    return 'Buzz';
  }
  return undefined;
}

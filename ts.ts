// store/redux.ts

export interface Action<T = string> {
  type: T;
}

export interface AnyAction extends Action {
  [extraProps: string]: any;
}

export type Reducer<S, A extends Action = AnyAction> = (
  state: S | undefined,
  action: A
) => S;

export type Listener = () => void;

export interface Store<S> {
  dispatch(action: AnyAction): AnyAction;
  subscribe(listener: Listener): () => void;
  getState(): S;
  replaceReducer(reducer: Reducer<S>): void;
}

function isPlainObject(value: unknown): boolean {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  let proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return (
    Object.getPrototypeOf(value) === proto ||
    Object.getPrototypeOf(value) === null
  );
}

export function createStore<S>(
  reducer: Reducer<S>,
  preloadedState?: S
): Store<S> {
  let currentReducer = reducer;
  let currentState = preloadedState as S;

  let listeners = new Map<number, Listener>();
  let nextListeners = listeners;

  let listenerId = 0;
  let isDispatching = false;

  function ensureListenersMutable() {
    if (nextListeners === listeners) {
      nextListeners = new Map();

      listeners.forEach((listener, id) => {
        nextListeners.set(id, listener);
      });
    }
  }

  function getState(): S {
    if (isDispatching) {
      throw new Error(
        'Cannot call store.getState() while reducer is executing.'
      );
    }

    return currentState;
  }

  function subscribe(listener: Listener): () => void {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    ensureListenersMutable();

    const id = listenerId++;
    nextListeners.set(id, listener);

    let active = true;

    return () => {
      if (!active) return;

      active = false;

      ensureListenersMutable();
      nextListeners.delete(id);

      listeners = nextListeners;
    };
  }

  function dispatch(action: AnyAction): AnyAction {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Action type is required.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    listeners = nextListeners;

    listeners.forEach(listener => {
      listener();
    });

    return action;
  }

  function replaceReducer(nextReducer: Reducer<S>) {
    currentReducer = nextReducer;

    dispatch({
      type: '@@redux/REPLACE'
    });
  }

  dispatch({
    type: '@@redux/INIT'
  });

  return {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  };
}

/**
 * 
 * Det du laddat upp är i praktiken en komplett webpack-bundle för Stitch Fiddle (React + Redux Toolkit + Router + Lodash + egen editorlogik). Jag kan se:

Redux store (createStore, middleware, enhancers)
React-komponenter och routing
Chart-editor state
Grid-, palette-, symbol- och product-system
Progress tracker
Chart save/load-thunks
Stitch Fiddle-specifika konstanter och default-inställningar

En komplett återskapning innebär sannolikt:
src/
├── app/
│   └── store.ts
├── features/
│   ├── chart/
│   │   ├── chartSlice.ts
│   │   ├── saveChartThunk.ts
│   │   ├── loadChartThunk.ts
│   │   └── selectors.ts
│   ├── grid/
│   │   ├── gridSlice.ts
│   │   ├── progressTrackerSlice.ts
│   │   └── serializers.ts
│   ├── palette/
│   │   └── paletteSlice.ts
│   ├── symbols/
│   │   └── symbolSlice.ts
│   ├── products/
│   │   └── productSlice.ts
│   └── ui/
│       └── uiSlice.ts
├── components/
├── hooks/
├── selectors/
├── middleware/
└── types/*/
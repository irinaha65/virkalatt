// src/app/store.ts

import {
  configureStore,
  combineReducers,
  type Middleware,
} from '@reduxjs/toolkit';

import chartReducer from '../features/chart/chartSlice';
import gridReducer from '../features/grid/gridSlice';
import paletteReducer from '../features/palette/paletteSlice';
import symbolReducer from '../features/symbols/symbolSlice';
import productReducer from '../features/products/productSlice';
import progressReducer from '../features/progress/progressSlice';
import uiReducer from '../features/ui/uiSlice';

import chartPersistenceMiddleware from '../middleware/chartPersistenceMiddleware';
import autosaveMiddleware from '../middleware/autosaveMiddleware';
import loggerMiddleware from '../middleware/loggerMiddleware';

const rootReducer = combineReducers({
  chart: chartReducer,
  grid: gridReducer,
  palette: paletteReducer,
  symbols: symbolReducer,
  products: productReducer,
  progress: progressReducer,
  ui: uiReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat([
      chartPersistenceMiddleware,
      autosaveMiddleware,
      loggerMiddleware,
    ] as Middleware[]),

  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
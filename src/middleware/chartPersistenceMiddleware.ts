// src/middleware/chartPersistenceMiddleware.ts

import type { Middleware } from '@reduxjs/toolkit';

const chartPersistenceMiddleware: Middleware =
  store => next => action => {
    const result = next(action);

    const state = store.getState();

    try {
      localStorage.setItem(
        'stitchfiddle.chart',
        JSON.stringify(state.chart)
      );
    } catch {
      // ignore persistence failures
    }

    return result;
  };

export default chartPersistenceMiddleware;
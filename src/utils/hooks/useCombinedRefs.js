import { useCallback } from 'react';

export const useCombinedRefs = (...refs) =>
  useCallback((handle) => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(handle);
      } else if (ref !== null) {
        ref.current = handle;
      }
    }

    // eslint-disable-next-line
  }, refs);

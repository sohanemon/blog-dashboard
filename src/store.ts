// @ts-nocheck
import { create } from 'zustand';

const store = (set: Function) => ({
  page: 'prompt',
  setPage(title) {
    set((s) => ({ ...s, page: title }));
  },
});

const usePage = create(store);
export default usePage;

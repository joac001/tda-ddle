import { create } from 'zustand';

const usePageStore = create((set) => ({
    page: 0,
    setPage: (args) => {
        set({ page: args.page });
    }
}));

export { usePageStore };
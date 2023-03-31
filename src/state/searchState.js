import { create } from "zustand";
import { AbortSearch, searchAPI } from "../services/searchAPI";
import { usePaginationState } from "./paginationState";

export const useSearchState = create((set, get) => ({
  loading: false,
  query: "",
  results: [],
  setQuery: (nextQuery) => {
    set({ query: nextQuery });
    get().search(nextQuery);
  },
  search: async (query) => {
    AbortSearch();
    if (query.trim() == "") {
      set({ results: [], loading: false });
    } else {
      if (query.length < 2) return;
      set({ loading: true });
      const results = await searchAPI(query);
      if (results != null) {
        set({ results, loading: false });
      }
    }
    usePaginationState.getState().updateResults(get().results);
  },
}));

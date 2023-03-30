import { create } from "zustand";
import { AbortSearch, searchAPI } from "../services/searchAPI";

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
  },
}));

/* This is the main state control, we import our service searchAPI here to that
 so that it can be used to fill the query state

this state management is made using Zustand (flux)
this hook called useSearchState, we can put anything inside like primitives, objects, functions etc...

the set fuction helps us merge state

we can write our code using json notation/object notation makes it easy with anon functions



*/

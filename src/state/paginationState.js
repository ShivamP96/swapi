import { create } from "zustand";
import { useSearchState } from "./searchState";

function paginate(results, currentPage, postsPerPage) {
  const indexOfFirstPost = (currentPage - 1) * postsPerPage;
  const indexOfLastPost = indexOfFirstPost + postsPerPage;

  const currentPosts = results.slice(indexOfFirstPost, indexOfLastPost);

  return currentPosts;
}

export const usePaginationState = create((set, get) => ({
  currentPage: 1,
  postsPerPage: 6,

  paginatedResults: [],
  totalPages: 0,

  updateResults: (results) => {
    const postsPerPage = get().postsPerPage;
    const paginatedResults = paginate(results, 1, postsPerPage);
    const totalPages = Math.ceil(results.length / postsPerPage);
    set({ paginatedResults, totalPages, currentPage: 1 });
  },

  changePage: (nextPage) => {
    const results = useSearchState.getState().results;
    const paginatedResults = paginate(results, nextPage, get().postsPerPage);
    set({ paginatedResults, currentPage: nextPage });
  },
}));

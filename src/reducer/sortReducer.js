import { useReducer } from "react";

let initialSortState = {
  sortBy: "Newer",
};

function sortReducer(state, action) {
  switch (action.type) {
    case "SORT_BY_NEWER":
      return {
        ...state,
        sortBy: "Newer",
      };

    case "SORT_BY_OLDER":
      return {
        ...state,
        sortBy: "Older",
      };

    default:
      return state;
  }
}

function applySort(state, blogs) {
  let sortedBlogs = blogs;

  if (state.sortBy === "Newer") {
    sortedBlogs = sortedBlogs.sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );
  } else if (state.sortBy === "Older") {
    sortedBlogs = sortedBlogs.sort(
      (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)
    );
  }

  return sortedBlogs;
}

const useSort = () => {
  const [state, dispatch] = useReducer(sortReducer, initialSortState);

  return { state, dispatch };
};

export { useSort, applySort };

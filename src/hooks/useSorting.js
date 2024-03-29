import { useMemo } from "react";

export const useSorting = (topics, sort, query) => {
    const sortedTopics = useSortTopics(topics, sort)
    sortedTopics.filter(topic => topic.description == null).map(topic => topic.description = '')
    const sortedandQueriedTopics = useMemo(() => {
        return sortedTopics.filter(topic => topic.title.toLowerCase().includes(query) || topic.description.toLowerCase().includes(query))
      }, [query, sortedTopics])

      return sortedandQueriedTopics;
}

export const useSortTopics = (topics, sort) => {
    const sortedTopics = useMemo(() => {
        if (sort) {
          return [...topics].sort((a, b) => b[sort] - a[sort]);
        }
        return topics;
      }, [sort, topics])

      return sortedTopics;
}
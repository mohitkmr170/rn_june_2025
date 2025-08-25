const fetchPosts = async (params?: any) => {
  try {
    const query = new URLSearchParams({
      limit: params?.limit,
      skip: params?.skip,
    }).toString();
    const res = await fetch(
      params?.id
        ? `https://dummyjson.com/posts/${params?.id}`
        : !params?.limit && !params?.skip
        ? 'https://dummyjson.com/posts'
        : `https://dummyjson.com/posts?${query}`,
    );
    const json = await res.json();
    return params?.id ? [json] : json.posts;
  } catch (err) {
    return err instanceof Error ? err : new Error(String(err));
  }
};

export {fetchPosts};

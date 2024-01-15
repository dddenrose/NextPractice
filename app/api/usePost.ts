export const getPost = async (id = 1) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((response) => response.json());

  return data;
};

export const getAllPost = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (response) => response.json()
  );
    
  return data;
};

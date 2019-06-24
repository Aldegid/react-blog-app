export default class BlogService {
  _apiBase = 'https://simple-blog-api.crew.red';

  getAllPosts = async () => {
    const res = await fetch(`${this._apiBase}/posts`);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return await res.json();
  };

  getPost = async id => {
    const res = await fetch(`${this._apiBase}/posts/${id}?_embed=comments`);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return await res.json();
  };

  addComment = async (id, text) => {
    const res = await fetch(`${this._apiBase}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        postId: id,
        body: text
      })
    });
    if (res.status !== 201) {
      throw new Error(res.statusText);
    }
    return await res.json();
  };

  addPost = async (title, body) => {
    const res = await fetch(`${this._apiBase}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        body
      })
    });
    if (res.status !== 201) {
      throw new Error(res.statusText);
    }
    return await res.json();
  };
}

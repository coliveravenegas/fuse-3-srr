import { useEffect, useState } from "react";
import "./App.css";
import { PostIdPicker } from "./components/PostIdPicker";
import { CommentsTable } from "./components/comments-table";
import { PostDetailTable } from "./components/post-detail-table";
import { getPostById, getUserById, getCommentsByPostId } from "./api";
import { type Comment, type PostDetail } from "./types";

function App() {
  const [postId, setPostId] = useState<string | null>(null);
  const [postDetail, setPostDetail] = useState<PostDetail | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPostDetail = async () => {
      if (!postId) return;

      setIsLoading(true);

      const { data: post } = await getPostById(postId)();
      const { data: user } = await getUserById(post.userId)();
      const { data: comments } = await getCommentsByPostId(post.id)();

      const postDetail: PostDetail = {
        ...post,
        user,
        comments,
      };


      setPostDetail(postDetail);
      setComments(comments ?? []);
      setIsLoading(false);
    };

    getPostDetail();
  }, [postId]);

  return (
    <main className="space-y-8">
      <PostIdPicker
        onChange={(postId) => {
          setPostId(postId);
        }}
      />

      {!postId ? (
        <p>No post selected, please pick a post</p>
      ) : (
        <section id="data" className="space-y-4">
          {isLoading ? (
            <p className="text-lg">Loading...</p>
          ) : (
            <>
              <PostDetailTable postDetail={postDetail} />
              <CommentsTable comments={comments} />
            </>
          )}
        </section>
      )}
    </main>
  );
}

export default App;

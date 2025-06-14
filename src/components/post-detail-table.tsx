import { type Column, Table } from "./table";
import { PostDetail, type Post } from "../types";

interface PostDetailTableProps {
  postDetail: PostDetail | null;
}

export function PostDetailTable({ postDetail }: PostDetailTableProps) {
  const columns: Column<Post>[] = [
    {
      id: "id",
      accessor: "id",
      header: "ID",
    },
    {
      id: "title",
      accessor: "title",
      header: "Title",
    },
    {
      id: "body",
      accessor: "body",
      header: "Body",
    },
  ];

  if (!postDetail) return null;

  return (
    <Table<Post>
      isEdit
      name="Post"
      isLoading={false}
      data={[postDetail]}
      columns={columns}
      layout="vertical"
      onChangeMode={() => { }}
      cellProps={{
        onChange: () => { },
        onBlur: () => { },
        name: "Post",
      }}
    />
  );
}

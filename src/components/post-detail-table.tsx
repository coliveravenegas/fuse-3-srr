import { type Column, Table } from "./table";
import { type Post } from "../types";

interface PostDetailTableProps {
  postDetail: any;
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

  return (
    <Table<Post>
      isEdit
      name="Post"
      data={[postDetail]}
      columns={columns}
      layout="vertical"
    />
  );
}

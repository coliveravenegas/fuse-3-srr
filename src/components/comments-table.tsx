import { Table, type Column } from "./table";
import { type Comment } from "../types";

export function CommentsTable({ comments }: { comments: Comment[] }) {
  const columns: Column<Comment>[] = [
    {
      id: "postId",
      accessor: "postId",
      header: "PostId",
    },
    {
      id: "id",
      accessor: "id",
      header: "ID",
    },
    {
      id: "name",
      accessor: "name",
      header: "Name",
    },
    {
      id: "email",
      accessor: "email",
      header: "Email",
    },
    {
      id: "body",
      accessor: "body",
      header: "Body",
    },
  ];

  if (comments.length === 0) return null;

  return (
    <Table
      isEdit={false}
      name="Comments"
      data={comments}
      columns={columns}
      layout="horizontal"
      onChangeMode={() => { }}
      cellProps={{
        onChange: () => { },
        onBlur: () => { },
        name: "Comments",
      }}
    />
  );
}

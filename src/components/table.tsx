import { useState } from "react";

export interface Column<T> {
  id: string;
  accessor: keyof T;
  header: string;
  isEditable?: boolean;
}

interface TableProps<T> {
  isEdit: boolean;
  onChangeMode: any;
  onSave?: () => void;
  data: T[];
  isLoading: any;
  // hint: not discussable
  cellProps: {
    onChange: any;
    onBlur: any;
    name: string;
  };
  columns: Column<T>[];
  name: string;
  layout?: "horizontal" | "vertical";
}

export function Table<T>({
  data,
  columns,
  isEdit,
  onSave,
  name,
  layout = "horizontal",
}: TableProps<T>) {
  const [isEditing, setIsEditing] = useState(false);

  if (layout === "vertical") {
    const row = data[0];
    return (
      <table className="border-collapse">
        <thead>
          <tr className="bg-blue-500">
            <td
              colSpan={2}
              align="left"
              className="border-1 p-3 font-bold relative"
            >
              {name}
              {isEdit && (
                <>
                  {isEditing ? (
                    <div className="absolute top-1 right-4 p-2">
                      <button
                        onClick={() => {
                          onSave();
                          setIsEditing(false);
                        }}
                      >
                        Save
                      </button>
                      <button onClick={() => setIsEditing(false)}>
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      className="absolute top-1 right-4 p-2"
                      onClick={() => setIsEditing(true)}
                    >
                      Edit
                    </button>
                  )}
                </>
              )}
            </td>
          </tr>
        </thead>
        <tbody>
          {columns.map((col, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-blue-200" : "bg-white"}>
              <th className="border-1 p-3 text-black">{col.header}</th>
              <td className="border-1 p-3 text-black">{row[col.accessor]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <table className="border-collapse">
      <thead>
        <tr className="bg-blue-500">
          <td
            colSpan={columns.length}
            align="left"
            className="border-1 p-3 font-bold relative"
          >
            {name}
            {isEdit && (
              <>
                {isEditing ? (
                  <div className="absolute top-1 right-4 p-2">
                    <button
                      onClick={() => {
                        onSave();
                        setIsEditing(false);
                      }}
                    >
                      Save
                    </button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                  </div>
                ) : (
                  <button
                    className="absolute top-1 right-4 p-2"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit
                  </button>
                )}
              </>
            )}
          </td>
        </tr>
        <tr className="bg-white">
          {columns.map((col) => (
            <td key={col.id} className="border-1 p-3 text-black">
              {col.header}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-blue-200" : "bg-white"}>
            {columns.map((col) => (
              <td key={col.id} className="border-1 p-3 text-black">
                {row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

import type { PostIdPickerProps } from "./PostIdPicker.types";

export const PostIdPicker = (props: PostIdPickerProps) => {
  return (
    <ul className="menu">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <li key={el}>
          <button onClick={() => props.onChange(el.toString())} type="button">
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
};

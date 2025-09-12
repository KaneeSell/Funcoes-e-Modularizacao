import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function RenderTH(props: {
  title: string;
  onClick?: () => void;
  ordenar?: string;
  ordenarUp?: string;
  ordenarDown?: string;
}) {
  return (
    <th
      onClick={props.onClick ? props.onClick : () => {}}
      scope="col"
      className={`px-6 py-3
      border cursor-pointer border-white  light:border-black
      `}
    >
      <span className="flex items-center gap-1 w-full justify-center">
        {props.title.toUpperCase()}
        {props.onClick && (
          <span className="flex flex-col items-center">
            <IoMdArrowDropdown
              size={17}
              className={`
        ${props.ordenar === props.ordenarUp && "text-blue-500"}
        my-[-6px] ms-[-6px]
        `}
            />
            <IoMdArrowDropup
              size={17}
              className={`
        ${props.ordenar === props.ordenarDown && "text-yellow-500"}
        my-[-6px]
        `}
            />
          </span>
        )}
      </span>
    </th>
  );
}

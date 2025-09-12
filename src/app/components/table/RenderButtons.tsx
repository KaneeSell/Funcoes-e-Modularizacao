import { FaRegTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { GrDocumentText } from "react-icons/gr";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";

export default function RenderButtons(props: {
  title: string;
  onClick: () => void;
  icon: "movimentar" | "edit" | "delete" | "relatorio";
  color: "red" | "blue" | "yellow" | "green";
}) {
  return (
    <button
      onClick={props.onClick}
      title={props.title}
      className={`hover:text-${props.color}-500 cursor-pointer px-3 py-2 border rounded-lg`}
    >
      {props.icon === "movimentar" && <HiMiniArrowsRightLeft size={20} />}
      {props.icon === "edit" && <GoPencil size={20} />}
      {props.icon === "delete" && <FaRegTrashAlt size={20} />}
      {props.icon === "relatorio" && <GrDocumentText size={20} />}
    </button>
  );
}

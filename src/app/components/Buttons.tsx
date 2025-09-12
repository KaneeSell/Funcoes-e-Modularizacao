import Link from "next/link";

export default function Buttons(props: {
  title: string;
  href?: string;
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
  color?: 'blue' | 'red' | 'green' | 'sky';
}) {
  return (
    <Link href={props.href || ''}>
      <button onClick={props.onClick} type={props.type || "button"}
      className={`
      flex items-center justify-center cursor-pointer border rounded-lg px-2 hover:bg-${props.color || 'neutral'}-500
      `}>
        {props.title}
      </button>
    </Link>
  );
}

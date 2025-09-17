import Link from "next/link";

export default function Buttons(props: {
  title: string;
  href?: string;
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
  color?: "blue" | "red" | "green" | "sky";
  download?: string;
}) {
  const colorMap = {
    blue: "hover:bg-blue-500",
    red: "hover:bg-red-500",
    green: "hover:bg-green-500",
    sky: "hover:bg-sky-500",
    neutral: "hover:bg-neutral-500",
  };
  const btn = (
    <button
      onClick={props.onClick}
      type={props.type || "button"}
      className={`
      flex items-center justify-center cursor-pointer border rounded-lg px-2 
      ${colorMap[props.color || "neutral"]} transition-colors duration-300

      `}
    >
      {props.title}
    </button>
  );
  return (
    <>
      {props.href ? (
        props.download ? (
          <a href={props.href} download={props.download}>
            {btn}
          </a>
        ) : (
          <Link href={props.href}>{btn}</Link>
        )
      ) : (
        btn
      )}
    </>
  );
}

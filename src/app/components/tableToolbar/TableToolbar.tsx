import { Fragment } from "react";

export default function TableToolbar(props: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <span>
        <h2 className="text-3xl">{props.title}</h2>
      </span>
      <hr className="w-full bg-white light:bg-black" />

      <span className="flex flex-row flex-wrap max-w-full gap-1 items-center justify-center">
        {props.children}
      </span>
    </Fragment>
  );
}

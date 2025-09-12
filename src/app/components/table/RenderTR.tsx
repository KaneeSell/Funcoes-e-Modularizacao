export default function RenderTR(props: { children: React.ReactNode }) {
  return (
    <tr className="group hover:text-black hover:light:text-white hover:bg-neutral-400 hover:light:bg-neutral-400">
      {props.children}
    </tr>
  );
}

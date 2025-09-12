export default function RenderTDAction(props: { children: React.ReactNode }) {
  return (
    <td className="border border-gray-500 px-6">
      <span className="flex items-center justify-center gap-2 py-1">
        {props.children}
      </span>
    </td>
  );
}

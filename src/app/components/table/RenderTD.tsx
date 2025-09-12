export default function RenderTD(props: { children: React.ReactNode, nowrap?: boolean }) {
  return (
    <td
      scope="row"
      className={`border border-gray-500 text-base px-6 py-4 font-medium group-hover:light:text-white ${props.nowrap ? 'whitespace-nowrap' : ''}`}
    >
      {props.children}
    </td>
  );
}

export default function RenderTbody(props: { children: React.ReactNode }) {
  return (
    <tbody className="light:bg-white border-b bg-gray-800 border-gray-700 light:border-gray-200 light:text-black text-white">
      {props.children}
    </tbody>
  );
}

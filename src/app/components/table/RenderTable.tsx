export default function RenderTable(props: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-x-auto shadow-md max-w-full">
      <table className="w-full text-sm text-left rtl:text-right light:text-gray-500 text-gray-400">
        {props.children}
      </table>
    </div>
  );
}

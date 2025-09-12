export default function RenderThead(props: { children: React.ReactNode }) {
  return (
    <thead className="text-xs light:text-gray-700 uppercase light:bg-gray-50 bg-gray-700 text-gray-400">
      {props.children}
    </thead>
  );
}

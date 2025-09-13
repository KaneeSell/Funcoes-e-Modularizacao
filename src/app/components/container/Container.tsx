export default function Container(props: { children: React.ReactNode }) {
  return (
    <div
      className={`
        flex flex-col items-center justify-center min-w-full md:min-w-150 lg:max-w-2/3 border rounded-xl
        light:bg-black/5 bg-white/5 gap-3 py-5 px-3
        `}
    >
      {props.children}
    </div>
  );
}

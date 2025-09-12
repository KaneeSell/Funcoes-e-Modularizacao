export default function TSelect(props: {children: React.ReactNode, id: string, value: string, onChange: (e: {target : {value :string | boolean | null | number}}) => void}) {
  return (
    <select
      name={props.id}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      className="border py-1 rounded-lg px-2 border-gray-500 bg-transparent hover:border-blue-500 cursor-pointer"
    >
        {props.children}
    </select>
  );
}

import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function TSearch(props: {
  search: string | number;
  setSearch: (value: string) => void;
}) {
  return (
    <span className="border border-white light:border-black flex items-center gap-1 rounded-lg py-1 px-2 relative">
      <input
        type="text"
        name="search"
        id="search"
        value={props.search}
        onChange={(e) => {
          props.setSearch(e.target.value);
        }}
        placeholder="Pesquisar..."
      />
      <IoMdClose
        size={20}
        onClick={() => props.setSearch('')}
        className="absolute hover:text-red-500 right-8 cursor-pointer"
      />
      <FaMagnifyingGlass size={20} />
    </span>
  );
}

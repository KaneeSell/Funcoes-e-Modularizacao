export default function TButtons(props: {onClick: () => void, title: string, color?: string}) {
    return (
        <button
          onClick={props.onClick}
          className={`border border-gray-500 rounded-lg px-2 py-1 hover:bg-${props.color? props.color : 'neutral'}-700 hover:light:text-white cursor-pointer`}
        >
          {props.title}
        </button>
    )
}
export default function TOption(props: {title: string, value: string}) {
    return (
        <option value={props.value} className="bg-black light:bg-white">
        {props.title}
      </option>
    )
}
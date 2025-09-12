export default function CHeader(props: {title: string}) {
    return (
        <h2 className="text-3xl font-semibold font-serif mx-3">
            {props.title}
        </h2>
    )
}
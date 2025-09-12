export default function CArticle(props: {children: React.ReactNode}) {
    return (
        <article className="font-serif text-xl">
            {props.children}
        </article>
    )
}
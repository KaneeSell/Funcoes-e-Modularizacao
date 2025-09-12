export default function Body(props: {children: React.ReactNode}){
    return (
        <div className="flex flex-col items-center justify-center mt-5 mb-20 md:mb-5 gap-5">
            {props.children}
        </div>
    )
}
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function LoadingPage(props:{title:string}) {
    return(
        <div className="z-20 w-full h-screen fixed flex flex-col gap-4 items-center justify-center bg-black/40 light:text-white">
            {props.title}...
            <AiOutlineLoading3Quarters size={'40px'} className="animate-spin"/>
        </div>
    )
}

export function Loading(props:{title:string}) {
    return(
        <div className="flex gap-4 text-xl items-center justify-center light:text-black">
            {props.title}...
            <AiOutlineLoading3Quarters size={'30px'} className="animate-spin"/>
        </div>
    )
}

export function Atualizando(props:{title:string}) {
    return(
        <span className="w-full gap-4 flex items-center justify-center my-2">
            Atualizando {props.title}...
            <AiOutlineLoading3Quarters
              size={"30px"}
              className="text-blue-600 animate-spin"
            />
          </span>
    )
}
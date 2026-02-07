export default function Window({
    children,
    title
}:{
    children: React.ReactNode;
    title?: string
}) {

    return (
        <div className="relative w-full flex justify-between items-center border border-rd-fg text-rd-fg rounded-md hover:text-rd-primary hover:border-rd-primary">
            <p className="absolute text-sm -top-2.5 left-6 bg-rd-base px-2">{title}</p>
            <div className="size-full text-rd-fg">
                {children}
            </div>
        </div>
    )
}
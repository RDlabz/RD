
export default function WindowManager({
    children,
    header
}:{
    children: React.ReactNode;
    header: React.ReactNode;
}) {
    return (
        <div id="WindowManager" className="h-screen w-screen flex flex-col p-5 gap-5">
            <Window title="nav">{header}</Window>
            <main className="flex-grow">{children}</main>
        </div>
    )
}

export function WindowGrid({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="size-full flex gap-5">{children}</div>
    )
}

export function BodyWindow({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-1 h-full gap-5">
            {children}
        </section>
    )
}

export function LeftWindow({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <aside className="flex flex-col w-[15%] h-full items-center gap-5">
            {children}
        </aside>
    )
}

export function RightWindow({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <aside className="flex flex-col w-[15%] h-full items-center gap-5">
            {children}
        </aside>
    )
}

export function Window({
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
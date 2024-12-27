interface LayputProps{
    children: React.ReactNode
}

export default function Layout({children}: LayputProps){
    return <main className="max-w-screen-xl p-5 mx-auto">{children}</main>
}
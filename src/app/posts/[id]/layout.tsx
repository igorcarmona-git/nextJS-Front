function LayoutPost( { children } : any) {
    return (
        <div>
            <h1 className="bg-white flex justify-center text-3xl text-black h-40">Este é o meu post</h1>
            {children}
        </div>
    )
}

export default LayoutPost
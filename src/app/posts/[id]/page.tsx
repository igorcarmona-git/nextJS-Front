function Post({ params } : { params: { id: string } }) {
    return (
        <div>Meu post: {params.id}</div>
    )
}

export default Post
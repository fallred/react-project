function Posts({ posts }) {
    return (
        <div className="posts">
            {posts.map(post => (
                <Post key={post.id} {...post} />
            ))}
        </div>
    )
}

function Layout({ children, posts }) {
    return (
        <div className="layout">
            {/* <Posts posts={posts} /> */}
            {children}
        </div>
    )
}


function App() {
    return (
        <Layout posts={posts} />
    )
}

function App1() {
    return (
        <Layout><Posts posts={posts} /></Layout>
    )
}
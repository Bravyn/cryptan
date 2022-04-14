const RecentsList = ((props) => {
  const showRecents = (props) => {
  const { posts} = props;

  if(posts.length > 0) {
    return(
      posts.map((post, index) => {
        return(
          <div>
            post.title
          </div>
        )
      })
    )
  } else {
    return (<h2>Sorry, no recents yet</h2>)
  }
}
return (
  showRecents(props)
)
  
})

export default RecentsList
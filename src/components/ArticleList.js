import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
    const articleArray = posts.map((post) => <Article key={post.id} {...post} />)
  return (
    <main>{articleArray}</main>
  )
}

export default ArticleList
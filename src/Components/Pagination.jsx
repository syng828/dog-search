import React from 'react'

export default function Pagination({totalPosts, postsPerPage, paginate}) {
    const pages = []; 
    for (let i = 1; i <=Math.ceil(totalPosts/postsPerPage); i++) { 
        pages.push(i);
    }

  return (
    <div className = "page-button-layout">
        {pages.map((pageNum, index) => { 
            return <button key = {index} onClick = {()=> paginate(pageNum)} className = 'page-button'>{pageNum}</button>
        })}
    </div>
  )
}

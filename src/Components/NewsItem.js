import React, { Component } from 'react'

export class NewsItem extends Component {
  
    render() {
      let {title,description,imageUrl, newsUrl,published_at,author} = this.props;
    return (
      <div>
        <div className="card" >
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text">Published at: {new Date(published_at).toDateString()}</p>
    <p className="card-text"><b>Author:</b> {author == null ? "Unknown" : author}</p>
    <a href = {newsUrl} className="btn btn-sm btn-dark" target="blank">Read More</a>
  </div>
</div>
      </div>
    ) 
  }
}

export default NewsItem
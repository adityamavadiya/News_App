import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {

    static defaultProps = {
      pagesize: 10,
      countryName: "in",
      categoryname: "general",
      totalresults: 0,
      apikey: "helloworld",
    }

    static propTypes = {
      // countryName: this.propTypes.string,
      // pagesize: this.propTypes.number,
      // categoryname: this.propTypes.string,
    }
    constructor(props){
        super(props);
        console.log("this is a constructor in News.js")
        this.state = {
            articles: [],
            loading: false,
            pageNumber: 1,
            countryName: "in",
            // totalresults: [],
        }
        let a = this.props.categoryname;
        document.title = `${a.charAt(0).toUpperCase() + a.slice(1)} - News App`;
      }

      updteNews = async () =>{
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.categoryname}&apiKey=44b799a302dd45588d311dab37fa4323&page=${this.state.pageNumber}&pageSize=${this.props.pagesize}`;
        this.setState({loading: true,})
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(60);
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalresults : parsedData.totalResults, loading: false});
        this.props.setProgress(100);
      }

      fetchMoreData = async () => {
        this.setState({pageNumber: this.state.pageNumber + 1});
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.categoryname}&apiKey=44b799a302dd45588d311dab37fa4323&page=${this.state.pageNumber}&pageSize=${this.props.pagesize}`;
        this.setState({loading: true,})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          articles: this.state.articles.concat(parsedData.articles),
          totalresults : parsedData.totalResults,
          loading: false});
      };
      async componentDidMount(){
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.categoryname}&apiKey=${this.props.apikey}&pageSize=${this.props.pagesize}`;
        // this.setState({loading: true,})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({articles: parsedData.articles, totalresults : parsedData.totalResults, loading: false});

        this.updteNews();
      }
      
      handlePrevClick = async ()=> {
        // console.log("componentDidMount");
      //   if(this.state.pageNumber - 1< 0){
          
      //   }else{
      //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.categoryname}&apiKey=${this.props.apikey}&page=${this.state.pageNumber-1}&pageSize=${this.props.pagesize}`;
      //     this.setState({loading: true,})
      //   // (this.state.loading && <Spinner/>)
      //   let data = await fetch(url);
      //   let parsedData = await data.json();
      //   console.log(parsedData);
      //   this.setState({
      //     articles: parsedData.articles,
      //     pageNumber: this.state.pageNumber - 1,
      //     loading: false,
      //   }); 
      //   console.log("prev  ", this.state.pageNumber);
      // }

     this.setState({pageNumber: this.state.pageNumber - 1,})
     this.updteNews();
    }
    
    handleNextClick = async()=> {
    //   if(this.state.pageNumber +1 > Math.ceil(this.state.totalresults/this.props.pagesize)){
      
    //   }else{
      //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.categoryname}&apiKey=${this.props.apikey}&page=${this.state.pageNumber+1}&pageSize=${this.props.pagesize}`;
    //     this.setState({loading: true,})
    //     // (!this.state.loading && <Spinner/>)
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     this.setState({
      //     articles: parsedData.articles,
      //     pageNumber: this.state.pageNumber + 1,
      //     loading: false,
      //   });
      // }
      // console.log("Next  ", this.state.pageNumber);
      this.setState({pageNumber: this.state.pageNumber + 1,})
      this.updteNews();
    } 
  render() {
    return (
        <div className='container my-3'>
          <h1 className='text-center' style={{margin: '45px 40px'}}>News app</h1>
          {/* {this.state.loading && <Spinner/>} */}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        ></InfiniteScroll>
            <div className="row">
            {this.state.articles.map((element)=>{
                return  <div className="col-md-4">
                <NewsItem title = {element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url} 
                published_at = {element.publishedAt} author = {element.author}s/>
                </div>
            })}
            </div>
            {/* <div className="container d-flex justify-content-around">
            <button disabled ={this.state.pageNumber < 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button> 
            <button disabled={this.state.pageNumber +1 > Math.ceil(this.state.totalresults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div> */}
        </div>
        )
  }
}

export default News
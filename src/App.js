// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  // apikey= process.env.REACT_API;
  state = {
    progress: 0,
  }
  setProgress = (progress) =>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        /> 
        <Navbar/>
        <Routes>
        <Route exact path='/' element={<News  setProgress = {this.setProgress}  pagesize = {10} countryName={"in"} categoryname = "general"/>}/>
        <Route exact path='/business' element= {<News  setProgress = {this.setProgress}  key="business" pagesize = {10} countryName={"in"} categoryname = "business"/>}/>
        <Route exact path='/entertainment' element={<News  setProgress = {this.setProgress}  key="entertainment"  pagesize = {10} countryName={"in"} categoryname = "entertainment"/>}/>
        <Route exact path='/general' element = {<News  setProgress = {this.setProgress}  key="general" pagesize = {10} countryName={"in"} categoryname = "general"/>}/>
        <Route exact path='/health' element = {<News  setProgress = {this.setProgress}  key="health" pagesize = {10} countryName={"in"} categoryname = "health"/>}/>
        <Route exact path='/science' element = {<News  setProgress = {this.setProgress}  key="science" pagesize = {10} countryName={"in"} categoryname = "science"/>}/>
        <Route exact path='/sports' element = {<News  setProgress = {this.setProgress}  key="sports" pagesize = {10} countryName={"in"} categoryname = "sports"/>}/>
        <Route exact path='/technology' element = {<News  setProgress = {this.setProgress}  key="technology" pagesize = {10} countryName={"in"} categoryname = "technology"/>}/>
        </Routes>
        </BrowserRouter>
      </div>
      )
  }
}

import './App.css';
import Navbar from './component/navbar';
import React from 'react';
import SearchAfilter from './component/SearchAfilter';
import Cardlist from './component/Cardlist';
import Detail from './component/detail';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      countrys : [],
      searchfiled : '',
      Display_Detail: false,
      Detail : [],
      DarkMode : true
    }
  }

  componentDidMount(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      this.setState({
        countrys : data
      })
    })
  }

  OnsearchField = (e) =>{
    // console.log(e.target.value)
    this.setState({
      searchfiled:e.target.value
    })
  }

  Onback =(e)=>{
    this.setState({
      Display_Detail: false,
      Detail : []
    })
  }

  Ondetail =(country)=>{
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(data => 
      this.setState({
        Display_Detail : true,
        Detail : data
      })
      )
  }

  OnSwitchMode = ()=>{
    this.setState({
      DarkMode: !this.state.DarkMode
    })
  }

  OnFilterRegion =(region)=>{
    if(region === 'all'){
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        this.setState({
          countrys : data
        })
      })
    }
    else{
    fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then(res => res.json())
    .then(data => 
      this.setState({
        countrys : data
      })
      )
    }
  }

  render(){
    const FIltercountry = this.state.countrys.filter(country =>
      country.name.common.toLowerCase().includes(this.state.searchfiled.toLowerCase())
      )
  return (
    <div className={`${this.state.DarkMode?'bg-[#202C37]':'bg-[#FAFAFA]'} min-h-screen`} >
      <Navbar Mode={this.state.DarkMode} switchmode ={this.OnSwitchMode}/>
      <SearchAfilter searchfiled={this.OnsearchField} detail={this.state.Detail} Onback={this.Onback} Filter={this.OnFilterRegion} Mode={this.state.DarkMode}/>
      {!this.state.Display_Detail?
        (this.state.countrys.length?
                <Cardlist countrys={FIltercountry} detail={this.Ondetail} Mode={this.state.DarkMode}/>
                :
                <h1 className={`container px-3 lg:px-0 ${this.state.DarkMode?'text-white':'text-black'} text-4xl font-bold mx-auto tracking-widest`}>Loading..........</h1>
        )
        :
          <Detail detail={this.state.Detail} Mode={this.state.DarkMode}/>
      }
      
      
    </div>
  );
}
}
export default App;

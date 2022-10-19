import React from "react";

class SearchAfilter extends React.Component{
    constructor(props){
    super(props)
        this.state ={
            filter : false
        }
    }

    ClickFilter = (e) =>{
        this.setState({
            filter : !this.state.filter
        })
    }

    render(){
        if(!this.props.detail.length){
            return(
            <div className="py-[2rem] container flex px-3 lg:px-0 md:justify-between mx-auto flex-col md:flex-row gap-[1.5rem] md:gap-0">
                <div className={`${this.props.Mode?'bg-[#2B3945]':'bg-white'} search rounded shadow-xl flex p-2 bg-[#2B3945] gap-2 items-center`}>
                    <div className="icon-search">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`ionicon ${this.props.Mode?'text-white':'text-[#111517]'} h-[20px] w-[20px]`} viewBox="0 0 512 512"><title>Search</title><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>
                    </div>
                    <input type="text" className={`ionicon ${this.props.Mode?'text-white bg-[#2B3945]':'text-[#111517] bg-white'} h-[20px] w-[20px] truncate sm:w-[25rem] focus:outline-none`}  placeholder="Search for a country..." onChange={this.props.searchfiled}/>
                </div>
                <div className={`Filter p-2 ${this.props.Mode?'bg-[#2B3945]':'bg-white'} rounded w-2/4 md:w-auto relative shadow-xl`} >
                    <button className={`relative ${this.props.Mode?'text-white':'text-[#111517]'} md:w-[10rem] text-left text-sm px-2 w-full`}onClick={this.ClickFilter}>
                        Filter By Region
                        <span className="absolute right-0 top-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`ionicon ${this.props.Mode?'text-white':'text-[#111517]'} text-white h-[20px] w-[20px] `} viewBox="0 0 512 512"><title>Chevron Down</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144"/></svg>
                        </span>
                    </button>
                    {this.state.filter?
                    <div className={`absolute top-11 p-2 left-0  w-full z-[1] ${this.props.Mode?'bg-[#2B3945] text-white':'bg-white text-[#111517]'} rounded `} onClick={this.ClickFilter}>
                        <p className="px-2 py-1 cursor-pointer" onClick={()=> this.props.Filter('all')} >All</p>
                        <p className="px-2 py-1     cursor-pointer"onClick={()=> this.props.Filter('Africa')}>Africa</p>
                        <p className="px-2 py-1 cursor-pointer"onClick={()=> this.props.Filter('Americas')}>Americas</p>
                        <p className="px-2 py-1 cursor-pointer"onClick={()=> this.props.Filter('Asia')}>Asia</p>
                        <p className="px-2 py-1 cursor-pointer"onClick={()=> this.props.Filter('Europe')}>Europe</p>
                        <p className="px-2 py-1 cursor-pointer"onClick={()=> this.props.Filter('Oceania')}>Oceania</p>
                    </div>
                    :null
                    }
                    
                </div>

            </div>
        )
        }else{
            return (
                <div className="my-[2rem] py-[2rem] container mx-auto px-3 lg:px-0">
                    <div className={`cursor-pointer rounded shadow-xl  py-2 px-5 w-fit flex gap-0 ${this.props.Mode?'text-white bg-[#2B3945]':'text-[#111517] bg-white'} items-center`} onClick={this.props.Onback}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='ionicon  h-[20px] w-[20px] ' viewBox="0 0 512 512"><title>Arrow Back</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292"/></svg>
                        <p className='ml-2'>Back</p>
                    </div>
                </div>
            )
        }
        

    }
}

export default SearchAfilter;
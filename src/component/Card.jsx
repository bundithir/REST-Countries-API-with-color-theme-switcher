import React from "react";

class Card extends React.Component{
    render(){
        return( 
                <div className={`shadow-xl w-[300px] sm:w-full mx-auto ${this.props.Mode?'bg-[#2B3945]':'bg-white'}  rounded`}>
                    <img src={this.props.flag} alt={this.props.name} className="h-[180px] w-full rounded-t"/>
                    <div className="description px-[1.5rem] mb-[2.4rem]">
                        <h2 className="cursor-pointer font-extrabold text-l my-[1rem] w-fit" onClick={() => this.props.detail(this.props.name)}>{this.props.name}</h2>
                        <p className="text-sm"><span className="font-semibold">Population</span>: {this.props.population}</p>
                        <p className="text-sm"><span className="font-semibold">Region</span>: {this.props.region}</p>
                        <p className="text-sm"><span className="font-semibold">Capital</span>: {this.props.capital}</p>
                    </div>
                </div>
                
  
        )
    }
}

export default Card;
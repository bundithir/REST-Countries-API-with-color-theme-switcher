import React from "react";
import Card from "./Card";
class Cardlist extends React.Component{
    render(){
        const Cardcomponent = this.props.countrys.map((country,i)=> <Card
        key={i}
        flag={country.flags.png}
        name ={country.name.common}
        population={country.population}
        region={country.region}
        capital ={country.capital}
        detail ={this.props.detail}
        Mode={this.props.Mode}
        >

        </Card>
        )
        return(
            <div className={`${this.props.Mode?'text-white':'text-[#111517]'} container px-3 lg:px-0 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[4.75rem] grid-cols-1  mx-auto pb-[2rem]`}>
                {Cardcomponent}
            </div>
        );
    }
}

export default Cardlist;
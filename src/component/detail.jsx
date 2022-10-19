import React from "react";

class Detail extends React.Component{
    render(){
        return(
            <div className="container px-3 lg:px-0 mx-auto grid md:grid-cols-2 gap-[1.5rem] md:gap-[7rem] md:items-center ">
                <div className="row-start-1 row-span-1 col-start-1 col-span-1 h-[250px] sm:h-[325px] md:h-[400px] lg:h-[450px]">
                    <img src={this.props.detail[0].flags.png} alt={this.props.detail[0].name.common} className='w-full h-[250px] sm:h-[325px] md:h-[400px] lg:h-[450px]'/>
                </div>
                <div className={`row-start-2 row-span-1 col-start-1 col-span-1 md:col-start-2 md:row-start-1 ${this.props.Mode?'text-white':'text-[#111517]'}  flex flex-col`}>
                    <h2 className="font-bold text-3xl py-[2rem]">{this.props.detail[0].name.common}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-[2rem] md:mb-[4rem] mb-[2rem]">
                        <div className="row-start-1 row-span-1 col-start-1 col-span-1 text-left">
                            <p className="text-sm py-1"><span className="font-semibold">Official Name</span>: {this.props.detail[0].name.official}</p>
                            <p className="text-sm py-1"><span className="font-semibold">Population</span>: {this.props.detail[0].population}</p>
                            <p className="text-sm py-1"><span className="font-semibold">Region</span>: {this.props.detail[0].region}</p>
                            <p className="text-sm py-1"><span className="font-semibold">Sub Region</span>: {this.props.detail[0].subregion}</p>
                            <p className="text-sm py-1"><span className="font-semibold">Capital</span>: {this.props.detail[0].capital}</p>
                        </div>
                        <div className="row-start-2 row-span-1 col-start-1 col-span-1 md:col-start-2 md:row-start-1 text-left">
                            <p className="text-sm py-1"><span className="font-semibold">Top Level Domain</span>: {this.props.detail[0].tld}</p>
                            <p className="text-sm py-1"><span className="font-semibold">Currencies</span>: {Object.keys(this.props.detail[0].currencies)}</p>
                            <p className="text-sm py-1"><span className="font-semibold">Languages</span>: {Object.values(this.props.detail[0].languages).join(',')}</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row flex-wrap md:items-center gap-[1rem]">
                        <p className="text-sm font-semibold">Border Countries: </p>
                        <div className="flex flex-wrap gap-[0.5rem]">
                            {this.props.detail[0].borders?this.props.detail[0].borders.map((border,i) => 
                            <p className={`${this.props.Mode?'bg-[#2B3945]':'bg-white'} shadow-2xl text-sm rounded-md  text-center w-[8rem] px-2 py-1`} key={i}>{border}</p>
                            ):
                            <p className={`${this.props.Mode?'bg-[#2B3945]':'bg-white'} shadow-2xl text-sm rounded-md  text-center w-[8rem] px-2 py-1 `}>NONE</p>
                            
                            }
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Detail;
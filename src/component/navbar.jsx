import React from "react";

class Navbar extends React.Component{
    render(){
        return(
            <div className={`${this.props.Mode?'bg-[#2B3945]':'bg-white'} font-bold text-xl shadow-xl`}>
                <div className="container px-3 lg:px-0 mx-auto flex justify-between items-center py-5">
                    <h2 className={`${this.props.Mode?'text-white':'text-[#111517]'} font-bold text-xl`} >Where in the world?</h2>
                    <div className="flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width='14' height='14' className={`ionicon ${this.props.Mode?'fill-white':'fill-[#111517]'}`} viewBox="0 0 512 512"><title>Moon</title><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" /></svg>
                        <p className={`${this.props.Mode?'text-white':'text-[#111517]'} text-sm cursor-pointer`} onClick={this.props.switchmode}>Dark Mode</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;
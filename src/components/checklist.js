import React, { Component, useState } from 'react';
import GameContext from '../context/game';

const Checklist = ({ onStateClicked, list, checked }) => {
console.log(list)
    return (
        <GameContext.Consumer>
            {
                context => {
                    return (<>

                        <form style={{ textAlign: "left", display:"flex", flexDirection:"column", alignItems:"center" }}>
                            {Object.keys(list).map((i, v) => {
                            
                                function handleCheckboxClick(){
                                    console.log(list[i]);
                                    onStateClicked(i,list[i]);
                                    
                                }

                                return(
                                    <label key={i} htmlFor={v} style={{width: 200}}>
                                        <input 
                                        type="checkbox" 
                                        //checked={checked}
                                        name={i} 
                                       
                                        defaultChecked={(list[i]===true)?true:false}
                                        onChange={handleCheckboxClick} />
                                        <a href={`https://www.bing.com/images/search?q=${i}+license+plate`} target="new">{i}</a>
                                    </label>
                                )
                            }
                            )}
                        </form>
                    </>)

                }
            }
        </GameContext.Consumer>

    )
}

export default Checklist;
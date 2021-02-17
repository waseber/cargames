import React, { Component, useState } from 'react';
import GameContext from '../context/game';

const Checklist = ({ onStateClicked, list, checked }) => {

    return (
        <GameContext.Consumer>
            {
                context => {

                    const handleReset = () =>{
                        context.resetGame();
                        window.location.reload();
                    }
                    return (<>

                        <form id="license-plate-form" style={{ textAlign: "left", display:"flex", flexDirection:"column", alignItems:"center" }}>
                            {Object.keys(list).map((i, v) => {
                            
                                function handleCheckboxClick(){
                                    console.log(list[i]);
                                    onStateClicked(i, list[i]);
                                    
                                }
                               

                                return(
                                    <label key={i} htmlFor={v} style={{width: 300}} className="checkbox-container" onMouseDown={handleCheckboxClick}>
                                        <input 
                                        type="checkbox" 
                                        //checked={checked}
                                        name={i} 
                                        //style={{marginRight: '10px'}}
                                        defaultChecked={(list[i]===true)?true:false}
                                            onChange={handleCheckboxClick} />
                                        <span className="checkmark" ></span>
                                        {i} <a href={`https://www.bing.com/images/search?q=${i}+license+plate`} target="new" style={{fontSize:"12px"}}>look up</a>
                                    </label>
                                )
                            }
                            )}

                            <input type="reset" onClick={handleReset} defaultValue="Reset" className="button" />
                            
                        </form>
                    </>)

                }
            }
        </GameContext.Consumer>

    )
}

export default Checklist;
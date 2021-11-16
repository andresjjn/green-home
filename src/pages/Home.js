import React from "react";
import MainTitle from "../components/MainTitle";
import { useSelector, useDispatch } from "react-redux";
import { waterState } from "../actions"
import { getWaterState } from "../selectors";

export const Home = () => {
    const on  = useSelector(getWaterState)
    const dispatch = useDispatch()

    return (
        <div className='principal'>
            <MainTitle/>
            <div>
                <h2>{`The water is ${on ? 'on' : 'Off'}`}</h2>
            </div>
            <div>
                <div>
                    <input type="checkbox" onChange={(e) => {
                        dispatch(waterState, e.target.value)
                        console.log(on)
                    }}></input>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

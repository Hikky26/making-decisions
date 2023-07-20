import React from "react";
import { useSelector } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
import { useDispatch } from "react-redux";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";


const OptionDisplay = () => {
    const dispatch = useDispatch()
    let currentPotentials = useSelector(selectPotentials)
    // console.log(currentPotentials)
        return (
        <div className="stack">{
            currentPotentials.map((potential, index) => (
                <h2 
                    key={potential.name.official} 
                    className='country-option'
                    onClick={() => {
                        dispatch(setDisplayCountry(currentPotentials[index]))
                    }}
                >
                        {potential.name.common}
                    </h2>
            ))}
        </div>
        )
};

export default OptionDisplay;

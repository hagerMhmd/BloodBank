import React from 'react'
import TypeDetails from '../TypesDetails/TypesDetails.jsx'

export default function Opositive() {
    return <>
        <TypeDetails
            type='O+'
            info='O+ is the most common blood type and that is what makes it so powerful. 37% of the population has O+ blood. Since more people have O+ blood than any other blood type, it is transfused more often'
            info2='Having the most popular blood puts O+ donors in a unique situation. Their red blood cells are needed and so too are their platelets. This reality means O+ donors have three different donation options.'
            Percentage='7%'
            BloodTypes='O-'
            RedCells='Anyone'
            Platelets='O-, O+'
            Plasma='O-, O+'
            typeStyle ='type-o-positive'
        />
    </>
}

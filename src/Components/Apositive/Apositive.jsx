import React from 'react'
import TypeDetails from '../TypesDetails/TypesDetails.jsx'

export default function Apositive() {
    return <>
        <TypeDetails
            type='A+'
            info='A+ is a powerful blood type because it is the second most common blood type. Since 36% of the population is A+ it is among the blood types transfused most often. The most powerful part of A+ blood can be found in the platelets. Platelets can be donated as often as every seven days and up to 24 times a year. Platelets are in high demand by hospitals and often help cancer patients undergoing chemotherapy.'
            info2='Red blood cells from A+ donors also hold lifesaving power. Depending on hospital demand, a OneBlood phlebotomist will advise you if a whole blood donation is preferred.'
            Percentage='36%'
            BloodTypes='A+, A-, O+, O-'
            RedCells='A+, AB+'
            Platelets='A+, O+'
            Plasma='O-, O+'
        />
    </>
}

import React from 'react'
import TypeDetails from '../TypesDetails/TypesDetails.jsx'

export default function Bpositive() {
    return <>
        <TypeDetails
            type='B+'
            info='B+ is a rare blood type that holds tremendous power. Only 8% of the population has B+ blood. B+ blood donors have two ways of targeting the power of their donation. The most preferred donation method is to donate platelets. Platelets can be donated as often as every seven days and up to 24 times a year. Platelets are in high demand by hospitals and often help cancer patients undergoing chemotherapy.'
            info2='Red blood cells from B+ donors also hold lifesaving power. Depending on hospital demand, a OneBlood phlebotomist will advise if a whole blood donation is preferred.'
            Percentage='8%'
            BloodTypes='B-, B+, O-, O+'
            RedCells='B+, AB+'
            Platelets='B+, O+'
            Plasma='B-, B+, O-, O+'
        />
    </>
}

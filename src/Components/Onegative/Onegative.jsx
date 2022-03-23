import React from 'react'
import TypeDetails from '../TypesDetails/TypesDetails.jsx'

export default function Onegative() {
  return <>
    <div className="container">
      <TypeDetails
        type='O-'
        info='O- has an amazing power to save anyone in need of a blood transfusion. Donors with this powerful blood type are called the universal donor because their red blood cells can be transfused into any patient, regardless of the recipient’s blood type. Only 7% of the population has O- blood, yet it is the blood type in the highest demand. '
        info2='When seconds count, emergency room doctors often do not have time to determine the blood type of the patient and will depend on O- blood to help save the person’s life. O- blood is also vital for premature babies and cancer patients.'
        Percentage='7%'
        BloodTypes='O-'
        RedCells='Anyone'
        Platelets='O-, O+'
        Plasma='O-, O+'
        typeStyle ='type-o-'
      />
      <div className="row">
        <div className="col-md-10">
          <h3 className='h2Color ps-1 pb-3'>Quick Facts</h3>
          <ul>
            <li>Only 7% of the population has O- blood, yet it is the blood type in the highest demand.</li>
            <li>When seconds count emergency room doctors often do not have time to determine the blood type of the patient and will depend on O- blood to help save the person’s life.</li>
            <li>O- blood is the preferred blood type for people with under-developed immune systems, including premature babies and cancer patients.</li>
            <li>O- Donors are encouraged to target the power of their blood type by donating double red blood cells or platelets.</li>
          </ul>
        </div>
      </div>
    </div>

  </>
}

// import React from 'react'

// export default function Onegative() {
//   return <>
//     <section id='typeOpositive' className='py-5'>
//       <div className="container py-5">
//         <h1 className='text-center pt-5'>How To Target Type® O-</h1>
//         <div className="row pt-4">
//           <div className="col-md-1">
//             <h2 className='p-2 bg-danger text-white text-center'>O-</h2>
//           </div>
//           <div className="col-md-10">
//             <p>O- has an amazing power to save anyone in need of a blood transfusion. Donors with this powerful blood type are called the universal donor because their red blood cells can be transfused into any patient, regardless of the recipient’s blood type. Only 7% of the population has O- blood, yet it is the blood type in the highest demand. </p>
//             <p>When seconds count, emergency room doctors often do not have time to determine the blood type of the patient and will depend on O- blood to help save the person’s life. O- blood is also vital for premature babies and cancer patients.</p>
//           </div>
//           <div className="col-md-10">
//             <h3 className='h2Color py-3'>Quick Facts</h3>
//             <ul>
//               <li>Only 7% of the population has O- blood, yet it is the blood type in the highest demand.</li>
//               <li>When seconds count emergency room doctors often do not have time to determine the blood type of the patient and will depend on O- blood to help save the person’s life.</li>
//               <li>O- blood is the preferred blood type for people with under-developed immune systems, including premature babies and cancer patients.</li>
//               <li>O- Donors are encouraged to target the power of their blood type by donating double red blood cells or platelets.</li>
//             </ul>
//             <h3 className='h2Color py-3'>The Power of O-</h3>
//             <table class="table table-striped table-hover">
//               <tbody>
//                 <tr>
//                   <td>Percentage of Population:</td>
//                   <td></td>
//                   <td>7%</td>
//                 </tr>
//                 <tr>
//                   <td>Blood Types you Can Receive:</td>
//                   <td></td>
//                   <td>O-</td>
//                 </tr>
//                 <tr>
//                   <td>Patients Who Can Receive Your Red Cells:</td>
//                   <td></td>
//                   <td>Anyone</td>
//                 </tr>
//                 <tr>
//                   <td>Patients Who Can Receive Your Platelets:</td>
//                   <td></td>
//                   <td>O-, O+</td>
//                 </tr>
//                 <tr>
//                   <td>Patients Who Can Receive Your Plasma:</td>
//                   <td></td>
//                   <td> O-, O+</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </section>
//   </>
// }

import React from 'react'
import TypeDetails from '../TypesDetails/TypesDetails.jsx'
export default function Onegative() {

  return <>
    <TypeDetails
      title='How To Target Type® O-'
      type='O-'
      info='O- has an amazing power to save anyone in need of a blood transfusion. Donors with this powerful blood type are called the universal donor because their red blood cells can be transfused into any patient, regardless of the recipient’s blood type. Only 7% of the population has O- blood, yet it is the blood type in the highest demand. '
      info2='When seconds count, emergency room doctors often do not have time to determine the blood type of the patient and will depend on O- blood to help save the person’s life. O- blood is also vital for premature babies and cancer patients.'
      liTitle='Quick Facts'
      li0='Only 7% of the population has O- blood, yet it is the blood type in the highest demand.'
      li1='When seconds count emergency room doctors often do not have time to determine the blood type of the patient and will depend on O- blood to help save the person’s life.'
      li2='O- blood is the preferred blood type for people with under-developed immune systems, including premature babies and cancer patients.'
      li3='O- Donors are encouraged to target the power of their blood type by donating double red blood cells or platelets.'
      tableTitle='The Power of O-'
      td0right='Percentage of Population:'
      td0left='7%'
      td1right='Blood Types you Can Receive:'
      td1left='O-'
      td2right='Patients Who Can Receive Your Red Cells:'
      td2left='Anyone'
      td3right='Patients Who Can Receive Your Platelets:'
      td3left='O-, O+'
      td4right='Patients Who Can Receive Your Plasma:'
      td4left='O-, O+'
    />
  </>
}

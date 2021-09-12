// import React from 'react';
// import styled from 'styled-components';
// import { useGlobalContext } from '../pages/context';
// import BackButton from './buildingBlocks/BackButton';

// const ZoneColor = () => {
//   const { getZoneColor }: any = useGlobalContext();

//   return (
//     <>
//       <h4>Choose a zone you entered from</h4>
//       <ZoneStyles>
//         <div
//           className="zone green"
//           onClick={(e) => getZoneColor(e.target.innerText)}
//         >
//           GREEN
//         </div>
//         <div
//           className="zone yellow"
//           onClick={(e) => getZoneColor(e.target.innerText)}
//         >
//           YELLOW
//         </div>
//         <div
//           className="zone orange"
//           onClick={(e) => getZoneColor(e.target.innerText)}
//         >
//           ORANGE
//         </div>
//         <div
//           className="zone red"
//           onClick={(e) => getZoneColor(e.target.innerText)}
//         >
//           RED
//         </div>
//         <div
//           className="zone grey"
//           onClick={(e) => getZoneColor(e.target.innerText)}
//         >
//           GREY
//         </div>
//       </ZoneStyles>
//       <BackButton />
//     </>
//   );
// };

// const ZoneStyles = styled.article`
//   & {
//     display: flex;
//   }
//   .zone {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 5rem;
//     height: 5rem;
//     margin-right: 2rem;
//     padding: 0 3.2rem 0 3.2rem;
//     border-radius: 0.2rem;
//     font-size: 1.1rem;
//     cursor: pointer;
//   }
//   .grey {
//     background: grey;
//     margin-right: 0;
//   }
//   .red {
//     background: red;
//   }
//   .yellow {
//     background: yellow;
//   }
//   .orange {
//     background: orange;
//   }
//   .green {
//     background: green;
//   }

//   @media screen and (max-width: 768px) {
//     & {
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//     }
//     .zone {
//       margin-top: 1.3rem;
//       margin-right: 0;
//     }
//     .grey {
//       margin-bottom: 2rem;
//     }
//   }
// `;

// export default ZoneColor;

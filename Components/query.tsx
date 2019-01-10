import gql from "graphql-tag";

export const GET_BILLS = gql`
  query{
  
    bills{
      name,
      id
      site
      asset
      month
      unitRate
    }
  }
`;
// export const ADD_BILL = (props) =>{
//   return( 
//     gql`
// mutation {
//   createBill(data: {
//     name:${propss.name}
//     month:${props.month}
//     unitRate:${props.unitrate},
//       status:PUBLISHED
//       }) {
//     id
//    name
//    month
//    unitRate
    
    
//   }
// }
// `;

//   );




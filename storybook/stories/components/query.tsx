import gql from "graphql-tag";

const GET_USERS = gql`
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



export default GET_USERS;
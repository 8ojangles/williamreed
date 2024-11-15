import { gql } from '@apollo/client';

export const GET_PUBS = gql`
  query GetPubs {
    pubs @rest(type: "Pubs", path: "JSON-Map-Gastropubs.json") {
      id
      name
      picture
      address
      email
      website
      phone
      category
      rank
      tags
      location {
        latitude
        longitude
      }
      content_url
    }
  }
`;
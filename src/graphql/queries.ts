import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
      emoji
    }
  }
`;

export const GET_COUNTRY_DETAILS = gql`
  query GetCountryDetails($code: ID!) {
    country(code: $code) {
      name
      awsRegion
      capital
      continent {
        name
      }
      emoji
      languages {
        name
      }
      phone
      native
      states {
        name
      }
      subdivisions {
        name
      }
    }
  }
`;

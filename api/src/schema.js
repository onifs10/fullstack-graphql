const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    # type definitions 
    type User {
        id: ID!
        username: String! 
        pets: [Pet]
    }

    type Pet {
        id: ID!
        name: String
        type: String
        img: String
        createdAt: String
        owner: User!
    }

    input PetsInput {
        name: String
        type: String
    }

    input PetInput{
        id: ID!
    }
    input newPetInput {
        name: String!
        type: String!
    }


    type Mutation {
        newPet(input: newPetInput!) : Pet!
    }

    type Query {
        pets(input: PetsInput): [Pet]!
        pet(input: PetInput): Pet
    }

    
`;

module.exports = typeDefs

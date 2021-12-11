const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    # type definitions 
    type User {
        id: ID!
        username: String! 
    }

    type Pet {
        id: ID!
        createdAt: String
        name: String
        type: String
        img: String
    }

    input PetsInput {
        name: String
        type: String
    }
    input PetInput{
        id: ID!
    }

    # type Mutation {
    #     # newShoe()
    # }

    type Query {
        pets(input: PetsInput): [Pet]!
        pet(input: PetInput): Pet
    }

    
`;

module.exports = typeDefs

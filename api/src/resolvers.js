/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets : async (_, {input}, { models }) => {
      let result = await models.Pet.findMany(input)
      return result
    },
    pet: async (_, { input }, { models }) => {
      let pet = await models.Pet.findOne({ id: input.id })
      return pet
    } 
  },
  // Mutation: {
    
  // },

  Pet: {
    img(pet) {
      return pet.type === 'DOG'
        ? 'https://placedog.net/300/300'
        : 'http://placekitten.com/300/300'
    }
  },

  User: {
    
  }
}

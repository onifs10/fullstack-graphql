// server side graphl --> minimum syntax  

const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')
 
// schema 
const typeDefs = gql`
    # type definition --> tables in sql db
    type User {
        email: String!
        avatar: String
        friends: [User]!
    }


    type Shoe {
        brand: String!
        size: Int! 
    }

    input ShoeInput{
        brand: String
        size: Int
    }

    input NewSheoInput{
        brand: String!
        size: Int! 
    }

    # query definition  --> describing how the user access db   
    type Query{
        me: User!
        shoes(input: ShoeInput): [Shoe]!
    }

    type Mutation{
        newSheo(input: NewSheoInput!): shoe
    }


`

// resolver
const resolvers = {
    Query: {
        me() {
            return  {
                email: "onifade@gmail.com",
                avatar: "https://yoda.png",
                friends : []
            }
        },
        shoes(_, {input}) {
            return [
                {
                    brand: "nike",
                    size: 12
                },
                {
                    brand: "adiddas",
                    size: 13
               }
           ].filter((item) => input.brand ? item.brand === input.brand : true) 
        }
    },
    Mutation: {
        newSheo(_, { input }) {
            // do something
        }
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers
}) 


server.listen(4000).then(() => console.log('server on port 4000'))
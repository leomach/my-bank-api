import  { GraphQLList, GraphQLInt } from "graphql"
import Account from "../types/account.js"
import AccountService from "../../services/account.service.js"

const accountQueries = {
    getAccounts: {
        type: new GraphQLList(Account),
        resolve: () => AccountService.getAccounts()
    },
    getAccount: {
        type: Account,
        args: {
            id: {
                name: "id",
                type: GraphQLInt
            }
        },
        resolve: (_, args) => AccountService.getAccount(args.id)
    }
}

export default accountQueries
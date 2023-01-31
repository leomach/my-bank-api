import { GraphQLBoolean, GraphQLInt } from "graphql"
import AccountService from "../../services/account.service.js"
import Account from "../types/Account.js"
import AccountInput from "../types/AccountInput.js"

const accountMutation = {
    createAccount: {
        type: Account,
        args: {
            account: {
                name: "account",
                type: AccountInput
            }
        },
        resolve(_, args) {
            return AccountService.createAccount(args.account)
        }
    },
    deleteAccount: {
        type: GraphQLBoolean,
        args: {
            id: {
                name: "id",
                type: GraphQLInt
            }
        },
        resolve(_, args) {
            AccountService.deleteAccount(args.account)
        }
    },
    updateAccount: {
        type: Account,
        args: {
            account: {
                name: "account",
                type: AccountInput
            }
        },
        resolve(_, args) {
            return AccountService.updateAccount(args.account)
        }
    }
}

export default accountMutation
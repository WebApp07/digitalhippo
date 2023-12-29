import {publicProcedure, router} from './trpc'
import {AuthCredentialsValidator} from "@/lib/validators/account-credentials-validator";
export const authRouter = router({
    createPayloadUser: publicProcedure.input(AuthCredentialsValidator)

})
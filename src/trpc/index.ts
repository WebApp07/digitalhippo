import {publicProcedure, router} from "./trpc";

export const appRouter = router({

    anyApiRoute: publicProcedure.query(() => {
        auth: authRouter
    }),
})

export type AppRouter = typeof appRouter
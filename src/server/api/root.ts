import { createTRPCRouter } from "~/server/api/trpc";
import { timelineRouter } from "~/server/api/routers/timeline";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  timeline: timelineRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

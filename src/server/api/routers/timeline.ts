import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const timelineRouter = createTRPCRouter({
  createTimeline: publicProcedure
    .input(
      z.object({
        title: z.string(),
        events: z
          .object({
            title: z.string(),
            date: z.string().nullish(),
            description: z.string().nullish(),
          })
          .array()
          .optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const timeline = await ctx.prisma.timeline.create({ data: input });
      return timeline;
    }),
});

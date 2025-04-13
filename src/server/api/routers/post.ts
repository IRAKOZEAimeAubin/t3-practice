import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1),
        content: z.string().min(1).max(250),
        public: z.boolean().optional().default(false),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          title: input.title,
          content: input.content,
          public: input.public,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getUserPosts: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findMany({
      where: {
        createdById: ctx.session.user.id,
      },
    });
  }),

  getPublicPosts: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findMany({
      where: {
        public: true,
      },
    });
  }),
});

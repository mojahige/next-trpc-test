import { createRouter } from "@/server/createRouter";
import { z } from "zod";

export const userRouter = createRouter().query("get", {
  input: z.object({
    id: z.string(),
  }),
  async resolve({ input }) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      name: "mojahige",
      id: input.id,
    };
  },
});

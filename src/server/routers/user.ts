import { createRouter } from "@/server/createRouter";
import { z } from "zod";

export const userRouter = createRouter().query("get", {
  input: z.object({
    id: z.string(),
  }),
  resolve({ input }) {
    return {
      name: "mojahige",
      id: input.id,
    };
  },
});

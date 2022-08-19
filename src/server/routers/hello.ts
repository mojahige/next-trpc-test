import { createRouter } from "@/server/createRouter";
import { z } from "zod";

export const helloRouter = createRouter().query("hello", {
  input: z
    .object({
      text: z.string().nullish(),
    })
    .nullish(),
  async resolve({ input }) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      greeting: `hello ${input?.text ?? "world"}`,
    };
  },
});

import { trpc } from "@/utils/trpc";

export default function IndexPage() {
  const { data, isLoading } = trpc.useQuery(["hello", { text: "client" }]);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return data ? (
    <div>
      <p>{data.greeting}</p>
    </div>
  ) : null;
}

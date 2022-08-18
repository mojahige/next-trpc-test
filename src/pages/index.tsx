import { trpc } from "@/utils/trpc";

export default function IndexPage() {
  const helloQuery = trpc.useQuery(["hello", { text: "mojahige" }]);
  const userQuery = trpc.useQuery(["user.get", { id: "hogehoge" }]);

  if (helloQuery.isLoading || userQuery.isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      {helloQuery.data?.greeting && <p>{helloQuery.data.greeting}</p>}
      {userQuery.data && (
        <p>
          {userQuery.data.id}: {userQuery.data.name}
        </p>
      )}
    </div>
  );
}

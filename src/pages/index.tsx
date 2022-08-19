import { trpc } from "@/utils/trpc";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

function Foo() {
  const helloQuery = trpc.useQuery(["hello", { text: "foo" }]);
  const userQuery = trpc.useQuery(["user.get", { id: "bar" }]);

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

export default function IndexPage() {
  return (
    <ErrorBoundary FallbackComponent={() => <p>Error</p>}>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Foo />
      </React.Suspense>
    </ErrorBoundary>
  );
}

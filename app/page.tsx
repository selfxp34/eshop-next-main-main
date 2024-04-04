import ShowFullItem from "@/components/ShowFullItem";
import Catalog from "@/features/product/Catalog";
import { Suspense } from "react";
export const dynamic = "force-dynamic";
export default function Home({
  searchParams,
}: {
  searchParams?: {
    manufacturer?: string;
  };
}) {
  return (
    <Suspense fallback="Loading...">
      <meta
        name="google-site-verification"
        content="EXibeSczwJN_4jXyyWcf7TdYabhR8HTPEsgj4CdzWkk"
      />
      <Catalog searchParams={searchParams} />
    </Suspense>
  );
}

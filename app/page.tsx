import { ProjectInterface } from "@/common.types";
import { Banner } from "@/components";
import { fetchAllProjects } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session";

type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
};

const Home = async () => {
  const session = await getCurrentUser();
  // const data = (await fetchAllProjects()) as ProjectSearch;

  // console.log("data", data);
  return (
    <section>
      {!session?.user && <Banner />}
      <h1>categories</h1>
      <h1>posts</h1>
      <h1>load more</h1>
    </section>
  );
};

export default Home;

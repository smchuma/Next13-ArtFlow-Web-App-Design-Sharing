import { ProjectInterface } from "@/common.types";
import { Banner, ProjectCard } from "@/components";
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
  const data = (await fetchAllProjects()) as ProjectSearch;
  const projectsToDisplay = data?.projectSearch?.edges || [];

  if (projectsToDisplay.length === 0) {
    return (
      <section className="flexStart flex-col paddings">
        categories
        <p className="no-result text-center">No projects found</p>
      </section>
    );
  }

  return (
    <section>
      {!session?.user && <Banner />}
      <h1>categories</h1>
      <section className="projects-grid paddings">
        {projectsToDisplay.map(({ node }: { node: ProjectInterface }) => (
          <ProjectCard
            key={node?.id}
            id={node?.id}
            image={node?.image}
            title={node?.title}
            name={node?.createdBy?.name}
            avatarUrl={node?.createdBy?.avatarUrl}
            userId={node?.createdBy?.id}
          />
        ))}
      </section>
      <h1>load more</h1>
    </section>
  );
};

export default Home;

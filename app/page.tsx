import { ProjectInterface } from "@/common.types";
import { Banner, Categories, LoadMore, ProjectCard } from "@/components";
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

type SearchParams = {
  category?: string;
  endCursor?: string;
};

type Props = {
  searchParams: SearchParams;
};

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

const Home = async ({ searchParams: { category, endCursor } }: Props) => {
  const session = await getCurrentUser();
  const data = (await fetchAllProjects(category, endCursor)) as ProjectSearch;
  const projectsToDisplay = data?.projectSearch?.edges || [];
  const pagination = data?.projectSearch?.pageInfo;

  return (
    <section>
      {!session?.user ? <Banner /> : ""}
      <section className="px-32 py-5 border-b-2 border-gray-100 ">
        <Categories />
      </section>
      {projectsToDisplay.length === 0 ? (
        <p className="no-result text-center py-40">No projects found</p>
      ) : (
        <>
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
          <div className="paddings">
            <LoadMore
              startCursor={pagination.startCursor}
              endCursor={pagination.endCursor}
              hasPreviousPage={pagination.hasPreviousPage}
              hasNextPage={pagination.hasNextPage}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default Home;

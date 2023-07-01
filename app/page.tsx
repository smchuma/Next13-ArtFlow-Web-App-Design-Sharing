import { Banner } from "@/components";
import { getCurrentUser } from "@/lib/session";

const Home = async () => {
  const session = await getCurrentUser();
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

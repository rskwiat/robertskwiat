import { useEffect } from "react";
import BasicMeta from "@/components/BasicMeta";
import Layout from "@/components/ui/Layout";

import { getData } from "@/lib/getData";
import { PageProps } from "@/types";

const Home = ({ pageData }: PageProps) => {
	return (
		<Layout>
			<BasicMeta title="Robert Skwiat" description={pageData.description} />
				<div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
		</Layout>
	);
}

export const getStaticProps = async () => {
	const data = await getData("home");

  return {
    props: {
      pageData: data,
    },
  };
}

export default Home;

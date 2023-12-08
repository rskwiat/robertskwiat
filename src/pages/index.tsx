import { useEffect } from "react";
import BasicMeta from "@/components/BasicMeta";
import Layout from "@/components/ui/Layout";

import { getData } from "@/lib/getData";

const Home = ({ pageData }) => {
	return (
		<Layout>
			<BasicMeta title="Robert Skwiat" description="Website "/>
				Home


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

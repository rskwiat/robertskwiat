import BasicMeta from "@/components/BasicMeta";
import Layout from "@/components/ui/Layout";

interface HomeProps {
	pageData: {
		id: string;
		title: string;
		contentHtml: string;
	}
};

const Teaching = ({ pageData }: HomeProps) => {
	return (
		<Layout>
			<BasicMeta title="Robert Skwiat" description="Website "/>
				Teaching -- Coming Soon
		</Layout>
	);
}


export default Teaching;

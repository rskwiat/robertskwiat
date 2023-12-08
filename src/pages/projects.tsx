import BasicMeta from "@/components/BasicMeta";
import Layout from "@/components/ui/Layout";

interface HomeProps {
	pageData: {
		id: string;
		title: string;
		contentHtml: string;
	}
};

const Projects = ({ pageData }: HomeProps) => {
	return (
		<Layout>
			<BasicMeta title="Robert Skwiat" description="Website "/>
				Projects -- Coming Soon
		</Layout>
	);
}


export default Projects;

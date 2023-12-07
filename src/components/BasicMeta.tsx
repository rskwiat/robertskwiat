import Head from "next/head";

interface Meta {
	title: string;
	description: string;
}

const BasicMeta = ({ title, description = "" }: Meta) => (
	<Head>
		<title>{title}</title>
		<meta name="description" content={description} />
	</Head>
);

export default BasicMeta;

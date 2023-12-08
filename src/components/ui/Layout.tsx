import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
	children: React.ReactNode,
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<main>
			<Navigation />
				{children}
			<Footer copyright="2023" />
		</main>
	);
}

export default Layout;

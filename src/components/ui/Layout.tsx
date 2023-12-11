import Navigation from "./Navigation";
import Footer from "./Footer";
import { container } from "./styles";

interface LayoutProps {
	children: React.ReactNode,
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<main>
			<Navigation />
				<div className={`${container}`}>
					{children}
				</div>
			<Footer copyright="2023" />
		</main>
	);
}

export default Layout;

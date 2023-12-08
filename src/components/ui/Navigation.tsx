import { navItems } from "@/constants";
import Link from "next/link";

const Navigation = () => {
	{return navItems.map((navItem) => (
			<Link key={navItem.id} href={navItem.href}>{navItem.title}</Link>
		)
	)}
}

export default Navigation;

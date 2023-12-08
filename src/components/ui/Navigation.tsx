import { navItems } from "@/constants";
import Link from "next/link";
import { usePathname} from "next/navigation";

export const animation = `transition-colors duration-300 ease-in-out`;

const Navigation = () => {
	const pathname = usePathname();
	return (
		<nav className="px-6 py-4 bg-neutral-800 mb-6">
				{navItems.map((navItem) => {
						const isActive = pathname === navItem.href ? "text-zinc-50" : "text-zinc-200";
						return (
							<Link
								key={navItem.id}
								href={navItem.href}
								className={`${isActive} ${animation} text-sm  pr-4 hover:text-zinc-50 last:pr-0`}
							>
								{navItem.title}
							</Link>
						);
				})}
		</nav>
	);
}

export default Navigation;

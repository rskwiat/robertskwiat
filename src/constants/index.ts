import { v4 as uuidv4 } from "uuid";

export const navItems = [
	{
		title: "About",
		href: "/",
		id: uuidv4(),
	},
	{
		title: "Project",
		href: "/projects",
		id: uuidv4(),
		disabled: true,
	},
	{
		title: "Teaching",
		href: "/teaching",
		id: uuidv4(),
		disabled: true,
	},
	{
		title: "Resume",
		href: "/resume",
		id: uuidv4(),
		disabled: true,
	}
];


import { v4 as uuidv4 } from "uuid";

export const navItems = [
	{
		title: "About",
		href: "/",
		id: uuidv4(),
	},
	{
		title: "Projects",
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

export const SocialMedia = [
	{
		title: "linkedin",
		href: "https://linkedin.com/in/robertskwiat",
		id: uuidv4(),
	},
	{
		title: "github",
		href: "https://github.com/rskwiat",
		id: uuidv4(),
	},
	{
		title: "email",
		href: "mailto:rob@robertskwiat.com",
		id: uuidv4(),
	}
];

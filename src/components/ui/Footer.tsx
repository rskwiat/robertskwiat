import { IoLogoGithub, IoMailUnread, IoLogoLinkedin } from "react-icons/io5";
import { SocialMedia } from "@/constants";
import { container } from "./styles";
interface Props {
	copyright: string;
}

const Footer = ({ copyright }: Props) => {
	return (
		<footer className={`${container} mt-16`}>
			<div className="flex flex-row items-center">
				<p className="m-0">&copy; {copyright} Robert Skwiat</p>
				<div className="flex flex-row ml-auto">
					{SocialMedia.map((icon) => {
						const title = icon.title;

						switch(title) {
							case "linkedin":
								return (
									<a key={icon.id} target="_blank" href={icon.href}>
										<IoLogoLinkedin size="1.5rem" />
									</a>
							);
							case "github":
								return (
									<a key={icon.id} target="_blank" href={icon.href} className="mx-2">
										<IoLogoGithub size="1.5rem" />
									</a>
								);
							case "email":
								return (
									<a key={icon.id} target="_blank" href={icon.href}>
										<IoMailUnread size="1.5rem" />
									</a>
							);
							default:
								return <span />
						}
					})}
				</div>
			</div>
		</footer>
	);
}

export default Footer;

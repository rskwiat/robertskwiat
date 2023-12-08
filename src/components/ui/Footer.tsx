import { LogoGithub, MailUnread, LogoLinkedin } from "react-ionicons"
import { SocialMedia } from "@/constants";
interface Props {
	copyright: string;
}

const Footer = ({ copyright }: Props) => {
	return (
		<footer className="container mx-auto">
			<p>&copy; {copyright} Robert Skwiat</p>

			{SocialMedia.map((icon) => {
				const title = icon.title;

				switch(title) {
					case "linkedin":
						return (
							<a key={icon.id} target="_blank" href={icon.href}>
								<LogoLinkedin height="36px" width="36px" />
							</a>
					);
					case "github":
						return (
							<a key={icon.id} target="_blank" href={icon.href}>
								<LogoGithub height="36px" width="36px" />
							</a>
						);
					case "email":
						return (
							<a key={icon.id} target="_blank" href={icon.href}>
								<MailUnread height="36px" width="36px" />
							</a>
					);
					default:
						return <span />
				}
			})}
		</footer>
	);
}

export default Footer;

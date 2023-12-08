interface Props {
	copyright: string;
}

const Footer = ({ copyright }: Props) => {
	return (
		<footer>
			<p>&copy; {copyright} Robert Skwiat</p>
		</footer>
	);
}

export default Footer;

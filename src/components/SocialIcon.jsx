import { FaGithub, FaLinkedinIn, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const map = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  instagram: FaInstagram,
  discord: FaDiscord,
};

const SocialIcon = ({ name, ...props }) => {
  const Icon = map[name] ?? FaGithub;
  return <Icon {...props} />;
};

export default SocialIcon;

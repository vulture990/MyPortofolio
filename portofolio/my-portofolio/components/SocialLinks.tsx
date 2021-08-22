import React, { FC } from "react";
import Icon from "./Icon";
import { motion, Variants } from "framer-motion";

type Props = {
  className?: string;
};

const item: Variants = {
  hidden: { y: -10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { default: { duration: 1 } } },
};

const SocialLinks: FC<Props> = ({ className }) => {
  const socialLinks = [
    { title: "github", link: "https://www.github.com/vulture990" },
    { title: "twitter", link: "https://www.twitter.com/MohamedSalbi" },
    { title: "linkedin", link: "https://www.linkedin.com/in/mohamed-salbi-4268671b4/" },
  ];
  return (
    <div className={className}>
      {socialLinks.map((social) => (
        <motion.a
          variants={item}
          key={social.title}
          href={social.link}
          target="blank_"
          rel="noreferrer"
          className="mx-2"
          whileHover={{ y: -3 }}
        >
          <Icon icon={social.title} size="20"></Icon>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;

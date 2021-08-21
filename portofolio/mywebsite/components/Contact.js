import React from 'react';
import Icon from './Icon';
import { motion,Variant } from 'framer-motion';

const item={
    show: { y: 0, opacity: 1, transition: { default: { duration: 1 } } },
    hidden: { y: -10, opacity: 0 },
};


const Contact = (props) => {

    const socialMediaLinks=[
        { title: "twitter", link: "https://www.twitter.com/MohamedSalbi" },
        { title: "linkedin", link: "https://www.linkedin.com/in/mohamed-salbi-4268671b4/" },
        { title: "github", link: "https://www.github.com/vulture990" }
        // { title: "instagram", link: "https://www.instagram.com/vulturex_x"},
        ];
    
    return (
        <div className={props || null}>
            {socialMediaLinks.map((socialLink)=>(
                <motion.a
                  variants={item}
                  key={socialLink.title}
                  href={socialLink.link}
                  target="blank_"
                  rel="noreferrer"
                  className="mx-2"
                  whileHover={{ y: -3 }}
                >
                  <Icon icon={socialLink.title} size="20"></Icon>
                </motion.a>
              )
            )
        }
        </div>
    );
};
export default Contact;
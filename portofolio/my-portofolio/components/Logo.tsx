import React, { FC } from "react";
import { motion,AnimatePresence, useCycle  } from "framer-motion";

const Logo: FC = () => {
  const [name, toggleName] = useCycle(false, true);
  const [v, toggleV] = useCycle(false, true);
  return (
    <div className="flex flex-row">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 458 458"
            width="100px"
            overflow="visible"
            whileHover={{ x: 8}}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
            onMouseDown={() => toggleV()}
            onMouseUp={() => toggleV()}
            onMouseEnter={() => toggleName()}
            onMouseLeave={() => toggleName()}
          >
          <motion.path d="M115.17 231.45L143.64 206.1L311.08 394.16L282.61 419.51L115.17 231.45Z" id="bSDweug76"/>
          <motion.path d="M302.75 290.88L333.91 325.1L303.59 352.71L272.43 318.49L302.75 290.88Z" id="d5VAZoVnp8"/>
          <motion.path d="M89.69 173.29L129.69 173.29L129.69 213.29L89.69 213.29L89.69 173.29Z" id="e28Bqg0Qj"/>
          <motion.path d="M333.91 259.95L365.57 259.95L365.57 290.88L333.91 290.88L333.91 259.95Z" id="b1pLj0wSAi"/>
          </motion.svg>
      <AnimatePresence>
        {name && (
          <motion.p
            className="self-center ml-1 text-xl tracking-widest"
            initial={{ opacity: 0.5 }}
            animate={{ x: 5, opacity: 1 }}
            transition={{ type: "spring", stiffness: 30 }}
            exit={{ x: 0, opacity: 0.2 }}
          >
            {v ? "Salbi is my real Name" : "ULTURE"}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Logo;

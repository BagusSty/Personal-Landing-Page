import { motion } from "framer-motion";

const Job = () => {
  const text = "Web Developer Enthusiast";
  return (
    <motion.div className="text">
      {text.split("").map((letter, index) => (
        <motion.span
          className="text-2xl"
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
export default Job;

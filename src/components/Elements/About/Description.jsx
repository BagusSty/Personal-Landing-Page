import { motion } from "framer-motion";
const Description = () => {
  const text =
    "Halo! Saya adalah seorang web developer yang bersemangat dalam menciptakan aplikasi web yang responsif dan menarik. Berusia 22 tahun dan lulusan dari D3 Teknologi Informasi Politeknik Negeri Madiun, saya selalu bersemangat untuk mengeksplorasi inovasi dalam dunia pemrograman. Saya memulai menekuni web developer semenjak lulus SMA hingga kini.".split(" ");
  return (
    <div className="text">
      {text.map((el, i) => (
        <motion.span
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
};

export default Description;

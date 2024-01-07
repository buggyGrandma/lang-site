import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
  //   duration?: number;
}
const AnimationInView = ({ children }: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={inView ? { scale: 1 } : { scale: 0 }}
      transition={{ delay: 0.2, duration: { duration: 1 }, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationInView;

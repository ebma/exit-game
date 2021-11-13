import { motion } from "framer-motion"

function PageAnimation(props) {
  const { children } = props
  return (
    <motion.div
      className="overflow-hidden"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default PageAnimation

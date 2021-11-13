import { motion } from "framer-motion"

interface Props {
  children: string
  className?: string
  delay?: number
}

function RevealingText(props: Props) {
  const { children, className, delay = 2 } = props

  return (
    <motion.h3
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { delay, staggerChildren: 0.5 } },
      }}
    >
      {children.split("").map((char, index) => (
        <motion.span
          className="text-5xl"
          key={char + "-" + index}
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h3>
  )
}

export default RevealingText

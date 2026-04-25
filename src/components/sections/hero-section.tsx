import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"

const ChineseCornerDecor = () => (
  <>
    <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none opacity-20">
      <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4 L4 40 M4 4 L40 4" stroke="hsl(45,85%,55%)" strokeWidth="2"/>
        <path d="M12 12 L12 32 M12 12 L32 12" stroke="hsl(45,85%,55%)" strokeWidth="1"/>
        <circle cx="4" cy="4" r="3" fill="hsl(45,85%,55%)"/>
      </svg>
    </div>
    <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-20 scale-x-[-1]">
      <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4 L4 40 M4 4 L40 4" stroke="hsl(45,85%,55%)" strokeWidth="2"/>
        <path d="M12 12 L12 32 M12 12 L32 12" stroke="hsl(45,85%,55%)" strokeWidth="1"/>
        <circle cx="4" cy="4" r="3" fill="hsl(45,85%,55%)"/>
      </svg>
    </div>
    <div className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none opacity-20 scale-y-[-1]">
      <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4 L4 40 M4 4 L40 4" stroke="hsl(45,85%,55%)" strokeWidth="2"/>
        <path d="M12 12 L12 32 M12 12 L32 12" stroke="hsl(45,85%,55%)" strokeWidth="1"/>
        <circle cx="4" cy="4" r="3" fill="hsl(45,85%,55%)"/>
      </svg>
    </div>
    <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none opacity-20 rotate-180">
      <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4 L4 40 M4 4 L40 4" stroke="hsl(45,85%,55%)" strokeWidth="2"/>
        <path d="M12 12 L12 32 M12 12 L32 12" stroke="hsl(45,85%,55%)" strokeWidth="1"/>
        <circle cx="4" cy="4" r="3" fill="hsl(45,85%,55%)"/>
      </svg>
    </div>
  </>
)

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function HeroSection() {
  return (
    <section id="home" className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden chinese-pattern-bg">
      <AnimatedBackground variant="gradient" color="rgba(176, 40, 40, 0.08)" secondaryColor="rgba(180, 140, 40, 0.06)" />
      <ChineseCornerDecor />

      <div className="container px-6 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <ScrollReveal>
            <motion.div
              className="flex flex-col justify-center space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="space-y-4" variants={itemVariants}>
                <span className="section-badge">🏮 Российский рынок для китайского бизнеса</span>
                {/* Modern Hero Header with Gradient */}
                <h1 className="text-4xl font-heading font-bold tracking-tighter sm:text-5xl xl:text-7xl/none mt-4">
                  <span className="gradient-text">Выход на рынок России</span>
                  <br />
                  <span className="text-foreground">для китайского бизнеса</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 opacity-70">
                  Создаём русскоязычные сайты, запускаем Яндекс.Директ и ведём соцсети.
                  Помогаем китайским компаниям уверенно работать с российскими клиентами.
                </p>
              </motion.div>

              <motion.div className="flex flex-col gap-6 sm:flex-row sm:items-center" variants={itemVariants}>
                <GradientButton
                  glowAmount={5}
                  className="px-6 py-2.5 text-base"
                  gradientFrom="from-red-500"
                  gradientTo="to-red-700"
                  asChild
                >
                  <a href="#pricing" className="flex items-center">
                    Получить консультацию
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </a>
                </GradientButton>

                <MagneticButton className="neumorphic-button">
                  <a href="#features" className="px-6 py-2.5 block">
                    Наши услуги
                  </a>
                </MagneticButton>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <p className="text-sm text-muted-foreground flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  Более 50 китайских компаний уже работают с Россией
                </p>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <SpotlightCard className="relative h-[450px] w-full overflow-hidden rounded-xl border glassmorphic-card p-1 border-glow-red">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-gray-900/20 z-10"></div>
              <div className="relative z-20 h-full w-full rounded-xl bg-gradient-to-br from-red-950/50 to-gray-950/50 p-6 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="col-span-2 h-24 rounded-xl bg-red-800/20 border border-red-800/30 flex items-center justify-center glassmorphic-inner-card"
                    whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(220, 38, 38, 0.3)" }}
                  >
                    <span className="font-heading text-xl text-white tracking-tight">🇨🇳 → 🇷🇺 Выход на российский рынок</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="h-32 rounded-xl bg-gray-800/20 border border-gray-800/30 flex flex-col items-center justify-center gap-2 glassmorphic-inner-card"
                    whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(75, 85, 99, 0.3)" }}
                  >
                    <span className="font-heading text-white tracking-tight text-center text-sm">Яндекс.Директ</span>
                    <span className="text-xs text-gray-400">реклама в России</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="h-32 rounded-xl bg-red-900/20 border border-red-900/30 flex flex-col items-center justify-center gap-2 glassmorphic-inner-card"
                    whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(220, 38, 38, 0.3)" }}
                  >
                    <span className="font-heading text-white tracking-tight text-center text-sm">Соцсети</span>
                    <span className="text-xs text-gray-400">ВКонтакте / Telegram</span>
                  </motion.div>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
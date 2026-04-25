import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const stats = [
  { value: "50+", label: "клиентов" },
  { value: "3×", label: "рост заявок" },
  { value: "14 дн", label: "до запуска" },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full py-16 md:py-28 lg:py-36 xl:py-44 overflow-hidden mesh-bg"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-red-500/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-red-500/6 blur-3xl pointer-events-none" />

      <AnimatedBackground variant="gradient" color="rgba(220,38,38,0.05)" secondaryColor="rgba(59,130,246,0.04)" />

      <div className="container px-6 md:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_480px] lg:gap-16 xl:grid-cols-[1fr_560px] items-center">

          {/* Left */}
          <ScrollReveal>
            <motion.div
              className="flex flex-col justify-center space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <span className="section-badge">🇨🇳 → 🇷🇺 Выход на рынок России</span>
              </motion.div>

              {/* Heading */}
              <motion.div className="space-y-3" variants={itemVariants}>
                <h1 className="font-heading text-5xl font-bold tracking-tight leading-[1.05] sm:text-6xl xl:text-7xl">
                  <span className="gradient-text">Китайский бизнес</span>
                  <br />
                  <span className="text-foreground">в России —</span>
                  <br />
                  <span className="text-foreground">под ключ</span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="max-w-[520px] text-muted-foreground text-lg leading-relaxed"
              >
                Создаём сайты на русском, запускаем Яндекс.Директ и ведём соцсети.
                Первые клиенты — уже через 2 недели.
              </motion.p>

              {/* CTA */}
              <motion.div className="flex flex-col gap-3 sm:flex-row sm:items-center" variants={itemVariants}>
                <GradientButton
                  glowAmount={6}
                  className="px-7 py-3 text-base font-semibold"
                  gradientFrom="from-red-500"
                  gradientTo="to-red-600"
                  asChild
                >
                  <a href="#pricing" className="flex items-center gap-2">
                    Получить консультацию
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.8 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </a>
                </GradientButton>

                <MagneticButton className="neumorphic-button">
                  <a href="#features" className="px-7 py-3 block text-sm font-medium">
                    Наши услуги
                  </a>
                </MagneticButton>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="flex gap-8 pt-2"
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-heading font-bold text-foreground">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </ScrollReveal>

          {/* Right — visual card */}
          <ScrollReveal delay={0.2}>
            <SpotlightCard className="relative h-[460px] w-full overflow-hidden rounded-2xl border glassmorphic-card p-1">
              <div className="relative z-10 h-full w-full rounded-2xl bg-gradient-to-br from-card to-muted/30 p-6 flex flex-col gap-4">

                {/* Top bar */}
                <div className="flex items-center gap-2 pb-2 border-b border-border/50">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono">sinomarket.ru</span>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-2 gap-3 flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="col-span-2 rounded-xl border border-border/60 bg-background/60 p-4 flex items-center gap-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-lg">📊</div>
                    <div>
                      <div className="text-sm font-semibold">Яндекс.Директ</div>
                      <div className="text-xs text-muted-foreground">+312 заявок в этом месяце</div>
                    </div>
                    <div className="ml-auto text-green-500 text-sm font-bold">↑ 48%</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 }}
                    className="rounded-xl border border-border/60 bg-background/60 p-4 flex flex-col gap-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-2xl">🌐</div>
                    <div className="text-sm font-semibold">Сайт</div>
                    <div className="text-xs text-muted-foreground">на русском языке</div>
                    <div className="mt-auto text-xs text-primary font-medium">от 14 дней</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="rounded-xl border border-border/60 bg-background/60 p-4 flex flex-col gap-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-2xl">📱</div>
                    <div className="text-sm font-semibold">Соцсети</div>
                    <div className="text-xs text-muted-foreground">ВК / Telegram</div>
                    <div className="mt-auto text-xs text-primary font-medium">ведение</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.95 }}
                    className="col-span-2 rounded-xl border border-red-500/20 bg-red-500/5 p-3 flex items-center gap-3"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs text-muted-foreground">Новая заявка от клиента из Москвы</span>
                    <span className="ml-auto text-xs text-muted-foreground">сейчас</span>
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

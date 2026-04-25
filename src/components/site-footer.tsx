import { Icons } from "@/components/icons"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-lg">
      <div className="container flex flex-col gap-10 py-16">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-1 flex-col gap-4">
            <a href="/" className="flex items-center gap-2">
              <Icons.logo className="h-6 w-6" />
              <span className="font-heading text-xl tracking-tight">СиноМаркет</span>
            </a>
            <p className="text-muted-foreground max-w-sm opacity-70">
              Помогаем китайским компаниям выйти на рынок России: сайты на русском языке, Яндекс.Директ, ведение соцсетей.
            </p>
            <div className="flex gap-4">
              <a href="https://vk.com" target="_blank" rel="noreferrer" className="glassmorphic-icon">
                <Icons.twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">ВКонтакте</span>
              </a>
              <a href="https://t.me" target="_blank" rel="noreferrer" className="glassmorphic-icon">
                <Icons.discord className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">Telegram</span>
              </a>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Услуги</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#features"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Создание сайтов
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Яндекс.Директ
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Ведение соцсетей
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Цены
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Компания</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#about"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Отзывы
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Блог
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Контакты</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="https://t.me"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://vk.com"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    ВКонтакте
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Конфиденциальность
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Условия
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground opacity-70">
            &copy; {new Date().getFullYear()} СиноМаркет. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a
              href="#terms"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
            >
              Условия
            </a>
            <a
              href="#privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
            >
              Конфиденциальность
            </a>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  )
}
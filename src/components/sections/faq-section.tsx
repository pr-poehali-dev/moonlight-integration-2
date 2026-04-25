import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FaqSection() {
  const faqs = [
    {
      question: "Сколько времени занимает создание сайта?",
      answer:
        "Стандартный сайт мы создаём за 2–3 недели. Срок зависит от объёма: лендинг — от 7 дней, многостраничный сайт — до 4 недель. Мы согласовываем все этапы с клиентом заранее.",
    },
    {
      question: "На каких языках будет сайт?",
      answer:
        "Основная версия сайта — на русском языке, для российских клиентов. По запросу добавляем китайскую версию. Все тексты пишем профессиональные — не машинный перевод.",
    },
    {
      question: "Как работает реклама в Яндекс.Директ?",
      answer:
        "Яндекс — главный поисковик России (60%+ трафика). Яндекс.Директ показывает рекламу тем, кто уже ищет ваши товары или услуги. Мы настраиваем, пополняем бюджет и оптимизируем кампании ежемесячно.",
    },
    {
      question: "Какие соцсети популярны в России?",
      answer:
        "Главные площадки: ВКонтакте (100+ млн пользователей), Telegram (80+ млн), Одноклассники. Мы ведём страницы, создаём контент и запускаем таргетированную рекламу на нужную аудиторию.",
    },
    {
      question: "Можно ли начать только с одной услуги?",
      answer:
        "Да, можно начать с сайта или только с рекламы. Мы гибко подходим к каждому клиенту и поможем выстроить стратегию выхода на рынок постепенно.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <span className="section-badge">❓ FAQ</span>
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">
                Частые вопросы
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Отвечаем на вопросы китайских предпринимателей о работе на российском рынке.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl py-12">
          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glassmorphic-accordion-item">
                  <AccordionTrigger className="text-left font-medium tracking-tight">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground opacity-70">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
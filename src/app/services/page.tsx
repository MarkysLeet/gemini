"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Check, Zap, Shield, Globe, Smartphone } from "lucide-react";

const plans = [
  {
    title: "СТАРТ",
    subtitle: "Эконом",
    type: "Простой Одностраничный сайт",
    description: "Идеально подходит для тех, кто ищет максимально бюджетное решение для быстрого запуска.",
    price: "6,000 ₺ +",
    duration: "5+ рабочих дней",
    support: "Поддержка: 1 неделя",
    features: [
      "Одностраничный сайт (Landing Page)",
      "Адаптивный дизайн (Mobile/Desktop)",
      "Базовая SEO-оптимизация",
      "Форма обратной связи",
      "Подключение домена и хостинга",
    ],
    recommended: false,
  },
  {
    title: "БАЗА",
    subtitle: "Стандарт",
    type: "Сайт-визитка / 3+ страниц",
    description: "Наиболее сбалансированный вариант по цене и функционалу, подходящий для большинства локальных предприятий.",
    price: "10,000 ₺ +",
    duration: "2+ недели",
    support: "Поддержка: 2 недели",
    features: [
      "Многостраничный сайт (3-5 страниц)",
      "Удобная админ-панель (CMS)",
      "Расширенная SEO и аналитика",
      "Интеграция с картами и соцсетями",
      "Базовая анимация элементов",
      "Мультиязычность (базовая)",
    ],
    recommended: true,
  },
  {
    title: "ПРОФИ",
    subtitle: "Бизнес",
    type: "Интернет-магазин / Крупный Проект",
    description: "Для тех, кому требуется полноценная коммерческая платформа. Сложная разработка и логистика.",
    price: "От 50,000 ₺",
    duration: "От 5 недель",
    support: "Поддержка: 1 месяц",
    features: [
      "Полноценный E-commerce / Каталог",
      "Личный кабинет пользователя",
      "Сложная бизнес-логика и интеграции",
      "Премиум анимации и эффекты",
      "Высокая производительность",
      "Приоритетная поддержка",
    ],
    recommended: false,
  },
];

const commonFeatures = [
  {
    icon: <Smartphone className="w-6 h-6 text-purple-400" />,
    title: "Адаптивность",
    description: "Все наши сайты идеально работают на смартфонах, планшетах и десктопах."
  },
  {
    icon: <Zap className="w-6 h-6 text-purple-400" />,
    title: "Скорость",
    description: "Оптимизация загрузки и производительности для максимального удержания клиентов."
  },
  {
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    title: "Хостинг и Домен",
    description: "Помогаем с регистрацией, настройкой и запуском проекта под ключ."
  },
  {
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    title: "Безопасность",
    description: "Базовая защита от атак и настройка SSL сертификатов для каждого сайта."
  }
];

export default function ServicesPage() {
  const phoneNumber = "905418462550";

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6">Наши Тарифы</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Мы создаем сайты под ключ: от дизайна до запуска. Выберите решение, которое подходит именно вашему бизнесу.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start mb-24">
        {plans.map((plan, index) => (
          <ScrollReveal key={index} delay={index * 0.15}>
            <div
              className={`relative flex flex-col bg-gray-900/50 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 ${
                plan.recommended
                  ? "border-purple-500 shadow-lg shadow-purple-500/20 scale-105 z-10"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {plan.recommended && (
                <div className="bg-purple-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 text-center w-full absolute top-0 left-0">
                  Рекомендуемый выбор
                </div>
              )}

              <div className={`p-8 flex-grow ${plan.recommended ? "pt-12" : ""}`}>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    {plan.title}
                    <span className="text-sm font-normal text-gray-400 bg-white/5 px-2 py-1 rounded-full">
                      {plan.subtitle}
                    </span>
                  </h3>
                  <p className="text-purple-400 font-medium mt-2 text-sm">{plan.type}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="space-y-2 mb-8 text-sm text-gray-300">
                   <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      <span>Срок: <span className="text-white">{plan.duration}</span></span>
                   </div>
                   <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      <span>{plan.support}</span>
                   </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0 mt-auto">
                 <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    `Здравствуйте, меня интересует тариф ${plan.title} (${plan.subtitle})`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 rounded-xl font-bold text-center transition-all duration-300 ${
                    plan.recommended
                      ? "bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/25"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  Выбрать тариф
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Что включено в каждый проект?</h2>
          <p className="text-gray-400">Независимо от выбранного тарифа, вы получаете качественный продукт и сервис.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {commonFeatures.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                 <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors text-center h-full">
                    <div className="bg-gray-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                       {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                 </div>
              </ScrollReveal>
           ))}
        </div>
      </div>
    </div>
  );
}

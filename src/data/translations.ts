
export interface Translation {
  header: {
    projects: string;
    services: string;
    contact: string;
    aiStart: string;
  };
  hero: {
    title: string;
    subtitle: string;
    scrollDown: string;
    aiStart: string;
  };
  nav: {
      projects: string;
      about: string;
      reliability: string;
      process: string;
  };
  about: {
    title: string;
    description: string;
    button: string;
  };
  services: {
    title: string;
    subtitle: string;
    plans: {
      start: PlanTranslation;
      base: PlanTranslation;
      profi: PlanTranslation;
    };
    common: {
      title: string;
      subtitle: string;
      features: {
        adaptive: FeatureTranslation;
        speed: FeatureTranslation;
        hosting: FeatureTranslation;
        security: FeatureTranslation;
      };
    };
    selectPlan: string;
    recommended: string;
  };
  projects: {
    title: string;
    categories: {
      all: string;
      complex: string;
      cafeRestaurants: string;
    };
    back: string;
    viewProject: string;
    client: string;
    inspiration: string;
  };
  footer: {
    rights: string;
  };
  contact: {
      title: string;
      name: string;
      email: string;
      phone?: string;
      validationError?: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
  };
  ai: {
    modalTitle: string;
    modalDesc: string;
    placeholder: string;
    generateBtn: string;
    analyzing: string;
    resultTitle: string;
    discussBtn: string;
    backBtn: string;
    error: string;
    examplesTitle: string;
    examples: string[];
  };
  speedReliability: {
    badge: string;
    title: string;
    description: string;
    items: string[];
  };
  workProcess: {
    title: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  }
}

interface PlanTranslation {
  title: string;
  subtitle: string;
  type: string;
  description: string;
  duration: string;
  support: string;
  features: string[];
}

interface FeatureTranslation {
  title: string;
  description: string;
}

export const translations: Record<"ru" | "en" | "tr", Translation> = {
  ru: {
    header: {
      projects: "Проекты",
      services: "Услуги",
      contact: "Контакты",
      aiStart: "AI Старт",
    },
    hero: {
      title: "Grozan Studio",
      subtitle: "Создаем не просто сайты, а впечатления.",
      scrollDown: "Вниз",
      aiStart: "Оценить идею с AI",
    },
    nav: {
        projects: "Проекты",
        about: "О нас",
        reliability: "Надежность",
        process: "Процесс",
    },
    about: {
      title: "Дизайн, который рассказывает вашу историю.",
      description: "Мы — креативная студия, которая верит в силу продуманного дизайна. Наша цель — создавать не просто красивые сайты, а цифровые продукты, которые решают задачи бизнеса, вызывают эмоции и запоминаются. Мы уделяем внимание каждой детали, чтобы ваш бренд говорил с аудиторией на одном языке.",
      button: "Наши проекты",
    },
    services: {
      title: "Наши Тарифы",
      subtitle: "Мы создаем сайты под ключ: от дизайна до запуска. Выберите решение, которое подходит именно вашему бизнесу.",
      plans: {
        start: {
          title: "Быстрый Старт",
          subtitle: "Визитка",
          type: "Одностраничный сайт",
          description: "Визитка, которая продает. Идеально для быстрого запуска.",
          duration: "От 48 часов",
          support: "Базовая настройка",
          features: [
            "Одностраничный сайт (продающая структура)",
            "Конверсия в Ватсап/Инстаграмм",
            "Регистрация точки на Google Maps",
          ],
        },
        base: {
          title: "Бизнес + AI",
          subtitle: "Хит",
          type: "Сайт-Администратор",
          description: "Сайт, который работает вместо администратора.",
          duration: "От 5 дней",
          support: "Поддержка запуска",
          features: [
            "Многостраничный сайт (Услуги, О нас, Портфолио)",
            "Интеграция AI решений",
            "Форма онлайн-записи",
            "Мультиязычность",
          ],
        },
        profi: {
          title: "Цифровая Система",
          subtitle: "Премиум",
          type: "Полная оцифровка",
          description: "Полная оцифровка бизнеса без лишних сложность.",
          duration: "От 10 дней",
          support: "Приоритетная поддержка",
          features: [
            "Всё из тарифа 'Бизнес'",
            "AI-Чат-бот (Базовый): Автоответы",
            "QR-меню или цифровой каталог услуг",
            "Настройка базовой CRM (Google Sheets/Trello)",
          ],
        },
      },
      common: {
        title: "Что включено в каждый проект?",
        subtitle: "Независимо от выбранного тарифа, вы получаете качественный продукт и сервис.",
        features: {
          adaptive: {
            title: "Адаптивность",
            description: "Все наши сайты идеально работают на смартфонах, планшетах и десктопах.",
          },
          speed: {
            title: "Скорость",
            description: "Оптимизация загрузки и производительности для максимального удержания клиентов.",
          },
          hosting: {
            title: "Хостинг и Домен",
            description: "Помогаем с регистрацией, настройкой и запуском проекта под ключ.",
          },
          security: {
            title: "Безопасность",
            description: "Базовая защита от атак и настройка SSL сертификатов для каждого сайта.",
          },
        },
      },
      selectPlan: "Выбрать тариф",
      recommended: "Рекомендуемый выбор",
    },
    projects: {
      title: "Избранные кейсы",
      categories: {
        all: "Все",
        complex: "Комплекс",
        cafeRestaurants: "Кафе-Рестораны",
      },
      back: "Назад к проектам",
      viewProject: "Смотреть проект",
      client: "Клиент",
      inspiration: "Вдохновение",
    },
    footer: {
      rights: "Grozan Studio",
    },
    contact: {
        title: "Свяжитесь с нами",
        name: "Ваше Имя",
        email: "Email",
        phone: "Телефон / WhatsApp",
        validationError: "Пожалуйста, укажите Email или Телефон",
        message: "Сообщение",
        send: "Отправить",
        sending: "Отправка...",
        success: "Сообщение отправлено!",
        error: "Произошла ошибка. Попробуйте позже.",
    },
    ai: {
      modalTitle: "AI Архитектор Проекта",
      modalDesc: "Опишите идею — получите тех. план за секунды",
      placeholder: "Например: Хочу маркетплейс для аренды строительной техники с геолокацией и чатами...",
      generateBtn: "Сгенерировать План",
      analyzing: "Анализирую...",
      resultTitle: "Анализ Grozan AI",
      discussBtn: "Обсудить этот план",
      backBtn: "Назад к вводу",
      error: "Не удалось связаться с AI. Пожалуйста, попробуйте позже.",
      examplesTitle: "Примеры запросов:",
      examples: ["Одностраничный сайт-визитка", "Многостраничный сайт для ресторана", "Интернет-магазин одежды"],
    },
    speedReliability: {
      badge: "СКОРОСТЬ & НАДЕЖНОСТЬ",
      title: "Разработано для масштабирования с первого дня",
      description: "Мы не просто пишем код, мы строим архитектуру, способную выдерживать миллионы запросов без потери производительности.",
      items: [
        "Сайты, которые загружаются мгновенно и поднимаются в поиске Google",
        "Полная защита данных и безопасность платежей",
        "Стабильная работа сайта даже в пиковые нагрузки",
        "Техническая поддержка и развитие вашего проекта"
      ]
    },
    workProcess: {
      title: "Процесс работы",
      steps: [
        {
          title: "Брифинг и Анализ",
          description: "Мы не просто слушаем, мы изучаем ваш бизнес, конкурентов и ЦА.",
        },
        {
          title: "UI/UX Дизайн",
          description: "Создаем прототипы и дизайн-макеты. Вы видите, как сайт будет выглядеть до написания кода.",
        },
        {
          title: "Разработка",
          description: "Пишем чистый код на Next.js. Настраиваем SEO.",
        },
        {
          title: "Запуск и Поддержка",
          description: "Перенос на хостинг, подключение домена, обучение управлению.",
        },
      ]
    }
  },
  en: {
    header: {
      projects: "Projects",
      services: "Services",
      contact: "Contact",
      aiStart: "AI Start",
    },
    hero: {
      title: "Grozan Studio",
      subtitle: "We create not just websites, but impressions.",
      scrollDown: "Down",
      aiStart: "Rate idea with AI",
    },
    nav: {
        projects: "Projects",
        about: "About",
        reliability: "Reliability",
        process: "Process",
    },
    about: {
      title: "Design that tells your story.",
      description: "We are a creative studio that believes in the power of thoughtful design. Our goal is to create not just beautiful websites, but digital products that solve business problems, evoke emotions, and are memorable. We pay attention to every detail so your brand speaks the same language as your audience.",
      button: "Our Projects",
    },
    services: {
      title: "Our Plans",
      subtitle: "We create turnkey websites: from design to launch. Choose the solution that suits your business.",
      plans: {
        start: {
          title: "Quick Start",
          subtitle: "Card",
          type: "One-Page Site",
          description: "A business card that sells. Perfect for a quick launch.",
          duration: "From 48 hours",
          support: "Basic setup",
          features: [
            "One-page site (sales structure)",
            "Conversion to WhatsApp/Instagram",
            "Google Maps Registration",
          ],
        },
        base: {
          title: "Business + AI",
          subtitle: "Hit",
          type: "Admin Website",
          description: "A website that works instead of an administrator.",
          duration: "From 5 days",
          support: "Launch support",
          features: [
            "Multi-page site (Services, About, Portfolio)",
            "AI Integration",
            "Online booking form",
            "Multilingual",
          ],
        },
        profi: {
          title: "Digital System",
          subtitle: "Premium",
          type: "Full Digitization",
          description: "Full business digitization without the hassle.",
          duration: "From 10 days",
          support: "Priority support",
          features: [
            "Everything from 'Business' plan",
            "AI Chatbot (Basic): Auto-replies",
            "QR Menu or Digital Catalog",
            "Basic CRM Setup (Google Sheets/Trello)",
          ],
        },
      },
      common: {
        title: "What is included in every project?",
        subtitle: "Regardless of the chosen plan, you get a high-quality product and service.",
        features: {
          adaptive: {
            title: "Responsiveness",
            description: "All our sites work perfectly on smartphones, tablets, and desktops.",
          },
          speed: {
            title: "Speed",
            description: "Loading and performance optimization for maximum customer retention.",
          },
          hosting: {
            title: "Hosting and Domain",
            description: "We help with registration, setup, and turnkey project launch.",
          },
          security: {
            title: "Security",
            description: "Basic protection against attacks and SSL certificate setup for every site.",
          },
        },
      },
      selectPlan: "Select Plan",
      recommended: "Recommended Choice",
    },
    projects: {
      title: "Our Projects",
      categories: {
        all: "All",
        complex: "Complex",
        cafeRestaurants: "Cafe & Restaurants",
      },
      back: "Back to Projects",
      viewProject: "View Project",
      client: "Client",
      inspiration: "Inspiration",
    },
    footer: {
      rights: "Grozan Studio",
    },
    contact: {
        title: "Contact Us",
        name: "Your Name",
        email: "Email",
        phone: "Phone / WhatsApp",
        validationError: "Please enter Email or Phone",
        message: "Message",
        send: "Send",
        sending: "Sending...",
        success: "Message sent!",
        error: "An error occurred. Please try again later.",
    },
    ai: {
      modalTitle: "AI Project Architect",
      modalDesc: "Describe your idea — get a technical plan in seconds",
      placeholder: "E.g., I want a marketplace for construction equipment rental with geolocation and chats...",
      generateBtn: "Generate Plan",
      analyzing: "Analyzing...",
      resultTitle: "Grozan AI Analysis",
      discussBtn: "Discuss this plan",
      backBtn: "Back to input",
      error: "Failed to connect to AI. Please try again later.",
      examplesTitle: "Example prompts:",
      examples: ["Landing Page", "Restaurant Website", "Clothing Online Store"],
    },
    speedReliability: {
      badge: "SPEED & RELIABILITY",
      title: "Designed to scale from day one",
      description: "We don't just write code, we build architecture capable of withstanding millions of requests without loss of performance.",
      items: [
        "Core Web Vitals Optimization",
        "Enterprise-level Security",
        "Cloud Infrastructure (AWS/Vercel)",
        "24/7 Support"
      ]
    },
    workProcess: {
      title: "Work Process",
      steps: [
        {
          title: "Briefing & Analysis",
          description: "We don't just listen; we study your business, competitors, and target audience.",
        },
        {
          title: "UI/UX Design",
          description: "We create prototypes and design mockups. You see how the site will look before code is written.",
        },
        {
          title: "Development",
          description: "We write clean code on Next.js. We configure SEO.",
        },
        {
          title: "Launch & Support",
          description: "Hosting transfer, domain connection, management training.",
        },
      ]
    }
  },
  tr: {
    header: {
      projects: "Projeler",
      services: "Hizmetler",
      contact: "İletişim",
      aiStart: "AI Başlat",
    },
    hero: {
      title: "Grozan Studio",
      subtitle: "Sadece web siteleri değil, izlenimler yaratıyoruz.",
      scrollDown: "Aşağı",
      aiStart: "AI ile fikri değerlendir",
    },
    nav: {
        projects: "Projeler",
        about: "Hakkımızda",
        reliability: "Güvenilirlik",
        process: "Süreç",
    },
    about: {
      title: "Hikayenizi anlatan tasarım.",
      description: "Biz, düşünceli tasarımın gücüne inanan yaratıcı bir stüdyoyuz. Amacımız sadece güzel web siteleri değil, iş sorunlarını çözen, duygular uyandıran ve akılda kalan dijital ürünler yaratmaktır. Markanızın hedef kitlenizle aynı dili konuşması için her ayrıntıya dikkat ediyoruz.",
      button: "Projelerimiz",
    },
    services: {
      title: "Tarifelerimiz",
      subtitle: "Anahtar teslim web siteleri oluşturuyoruz: tasarımdan lansmana kadar. İşinize uygun çözümü seçin.",
      plans: {
        start: {
          title: "Hızlı Başlangıç",
          subtitle: "Kartvizit",
          type: "Tek Sayfalı Site",
          description: "Satan bir kartvizit. Hızlı başlangıç için mükemmel.",
          duration: "48 saatten itibaren",
          support: "Temel kurulum",
          features: [
            "Tek sayfalı site (satış yapısı)",
            "WhatsApp/Instagram Dönüşümü",
            "Google Haritalar Kaydı",
          ],
        },
        base: {
          title: "İş + AI",
          subtitle: "Hit",
          type: "Yönetici Site",
          description: "Yönetici yerine çalışan bir web sitesi.",
          duration: "5 günden itibaren",
          support: "Lansman desteği",
          features: [
            "Çok sayfalı site (Hizmetler, Hakkımızda, Portföy)",
            "AI Entegrasyonu",
            "Online randevu formu",
            "Çok dillilik",
          ],
        },
        profi: {
          title: "Dijital Sistem",
          subtitle: "Premium",
          type: "Tam Dijitalleşme",
          description: "Mağaza derdi olmadan tam dijitalleşme.",
          duration: "10 günden itibaren",
          support: "Öncelikli destek",
          features: [
            "İş paketindeki her şey",
            "AI Chatbot (Temel): Otomatik yanıtlar",
            "QR Menü veya Dijital Katalog",
            "Temel CRM Kurulumu (Google Sheets/Trello)",
          ],
        },
      },
      common: {
        title: "Her projeye neler dahildir?",
        subtitle: "Seçilen tarifeden bağımsız olarak, kaliteli bir ürün ve hizmet alırsınız.",
        features: {
          adaptive: {
            title: "Uyumluluk",
            description: "Tüm sitelerimiz akıllı telefonlarda, tabletlerde ve masaüstü bilgisayarlarda mükemmel çalışır.",
          },
          speed: {
            title: "Hız",
            description: "Maksimum müşteri tutma için yükleme ve performans optimizasyonu.",
          },
          hosting: {
            title: "Hosting ve Domain",
            description: "Kayıt, kurulum ve anahtar teslim proje lansmanında yardımcı oluyoruz.",
          },
          security: {
            title: "Güvenlik",
            description: "Saldırılara karşı temel koruma ve her site için SSL sertifikası kurulumu.",
          },
        },
      },
      selectPlan: "Plan Seç",
      recommended: "Önerilen Seçim",
    },
    projects: {
      title: "Projelerimiz",
      categories: {
        all: "Tümü",
        complex: "Kompleks",
        cafeRestaurants: "Kafe ve Restoranlar",
      },
      back: "Projelere Dön",
      viewProject: "Projeyi Görüntüle",
      client: "Müşteri",
      inspiration: "İlham",
    },
    footer: {
      rights: "Grozan Studio",
    },
    contact: {
        title: "Bize Ulaşın",
        name: "Adınız",
        email: "E-posta",
        phone: "Telefon / WhatsApp",
        validationError: "Lütfen E-posta veya Telefon giriniz",
        message: "Mesaj",
        send: "Gönder",
        sending: "Gönderiliyor...",
        success: "Mesaj gönderildi!",
        error: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
    },
    ai: {
      modalTitle: "AI Proje Mimarı",
      modalDesc: "Fikrinizi tanımlayın — saniyeler içinde teknik bir plan alın",
      placeholder: "Örneğin: Konum ve sohbet özellikli bir inşaat ekipmanı kiralama pazarı istiyorum...",
      generateBtn: "Plan Oluştur",
      analyzing: "Analiz ediliyor...",
      resultTitle: "Grozan AI Analizi",
      discussBtn: "Bu planı tartış",
      backBtn: "Girişe dön",
      error: "AI ile bağlantı hatası. Lütfen daha sonra tekrar deneyin.",
      examplesTitle: "Örnek istemler:",
      examples: ["Tek Sayfalık Tanıtım Sitesi", "Restoran Web Sitesi", "Giyim E-ticaret Sitesi"],
    },
    speedReliability: {
      badge: "HIZ & GÜVENİLİRLİK",
      title: "İlk günden itibaren ölçeklenmek üzere tasarlandı",
      description: "Sadece kod yazmıyoruz, performans kaybı olmadan milyonlarca isteğe dayanabilecek bir mimari inşa ediyoruz.",
      items: [
        "Core Web Vitals Optimizasyonu",
        "Kurumsal düzeyde Güvenlik",
        "Bulut Altyapısı (AWS/Vercel)",
        "7/24 Destek"
      ]
    },
    workProcess: {
      title: "Çalışma Süreci",
      steps: [
        {
          title: "Bilgilendirme ve Analiz",
          description: "Sadece dinlemiyoruz; işinizi, rakiplerinizi ve hedef kitlenizi inceliyoruz.",
        },
        {
          title: "UI/UX Tasarım",
          description: "Prototipler ve tasarım maketleri oluşturuyoruz. Kod yazılmadan önce sitenin nasıl görüneceğini görürsünüz.",
        },
        {
          title: "Geliştirme",
          description: "Next.js ile temiz kod yazıyoruz. SEO ayarlarını yapıyoruz.",
        },
        {
          title: "Başlatma ve Destek",
          description: "Hosting transferi, domain bağlantısı, yönetim eğitimi.",
        },
      ]
    }
  },
};

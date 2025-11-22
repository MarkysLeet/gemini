
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
      cafe: string;
      restaurants: string;
      salons: string;
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
          title: "СТАРТ",
          subtitle: "Эконом",
          type: "Простой Одностраничный сайт",
          description: "Идеально подходит для тех, кто ищет максимально бюджетное решение для быстрого запуска.",
          duration: "5+ рабочих дней",
          support: "Поддержка: 1 неделя",
          features: [
            "Одностраничный сайт (Landing Page)",
            "Адаптивный дизайн (Mobile/Desktop)",
            "Базовая SEO-оптимизация",
            "Форма обратной связи",
            "Подключение домена и хостинга",
          ],
        },
        base: {
          title: "БАЗА",
          subtitle: "Стандарт",
          type: "Сайт-визитка / 3+ страниц",
          description: "Наиболее сбалансированный вариант по цене и функционалу, подходящий для большинства локальных предприятий.",
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
        },
        profi: {
          title: "ПРОФИ",
          subtitle: "Бизнес",
          type: "Интернет-магазин / Крупный Проект",
          description: "Для тех, кому требуется полноценная коммерческая платформа. Сложная разработка и логистика.",
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
      title: "Наши Проекты",
      categories: {
        all: "Все",
        cafe: "Кафе",
        restaurants: "Рестораны",
        salons: "Салоны",
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
          title: "START",
          subtitle: "Economy",
          type: "Simple One-Page Site",
          description: "Perfect for those looking for the most budget-friendly solution for a quick launch.",
          duration: "5+ business days",
          support: "Support: 1 week",
          features: [
            "One-page site (Landing Page)",
            "Responsive design (Mobile/Desktop)",
            "Basic SEO optimization",
            "Contact form",
            "Domain and hosting connection",
          ],
        },
        base: {
          title: "BASE",
          subtitle: "Standard",
          type: "Business Card Site / 3+ Pages",
          description: "The most balanced option in terms of price and functionality, suitable for most local businesses.",
          duration: "2+ weeks",
          support: "Support: 2 weeks",
          features: [
            "Multi-page site (3-5 pages)",
            "Convenient Admin Panel (CMS)",
            "Advanced SEO and analytics",
            "Maps and social media integration",
            "Basic element animation",
            "Multilingual (basic)",
          ],
        },
        profi: {
          title: "PRO",
          subtitle: "Business",
          type: "E-commerce / Large Project",
          description: "For those who need a full-fledged commercial platform. Complex development and logistics.",
          duration: "From 5 weeks",
          support: "Support: 1 month",
          features: [
            "Full E-commerce / Catalog",
            "User Personal Account",
            "Complex business logic and integrations",
            "Premium animations and effects",
            "High performance",
            "Priority support",
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
        cafe: "Cafe",
        restaurants: "Restaurants",
        salons: "Salons",
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
          title: "BAŞLANGIÇ",
          subtitle: "Ekonomi",
          type: "Basit Tek Sayfalık Site",
          description: "Hızlı bir başlangıç için en bütçe dostu çözümü arayanlar için mükemmel.",
          duration: "5+ iş günü",
          support: "Destek: 1 hafta",
          features: [
            "Tek sayfalık site (Landing Page)",
            "Duyarlı tasarım (Mobil/Masaüstü)",
            "Temel SEO optimizasyonu",
            "İletişim formu",
            "Alan adı ve hosting bağlantısı",
          ],
        },
        base: {
          title: "TEMEL",
          subtitle: "Standart",
          type: "Kartvizit Sitesi / 3+ Sayfa",
          description: "Fiyat ve işlevsellik açısından en dengeli seçenek, çoğu yerel işletme için uygundur.",
          duration: "2+ hafta",
          support: "Destek: 2 hafta",
          features: [
            "Çok sayfalık site (3-5 sayfa)",
            "Kullanışlı Yönetim Paneli (CMS)",
            "Gelişmiş SEO ve analitik",
            "Haritalar ve sosyal medya entegrasyonu",
            "Temel öğe animasyonu",
            "Çok dillilik (temel)",
          ],
        },
        profi: {
          title: "PROFESYONEL",
          subtitle: "İş",
          type: "E-ticaret / Büyük Proje",
          description: "Tam teşekküllü bir ticari platforma ihtiyaç duyanlar için. Karmaşık geliştirme ve lojistik.",
          duration: "5 haftadan itibaren",
          support: "Destek: 1 ay",
          features: [
            "Tam E-ticaret / Katalog",
            "Kullanıcı Kişisel Hesabı",
            "Karmaşık iş mantığı ve entegrasyonlar",
            "Premium animasyonlar ve efektler",
            "Yüksek performans",
            "Öncelikli destek",
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
        cafe: "Kafe",
        restaurants: "Restoranlar",
        salons: "Salonlar",
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
    }
  },
};

export interface LocalizedString {
  ru: string;
  en: string;
  tr: string;
}

export type ProjectCategory = "complex" | "cafeRestaurants";

// --- New Block Types ---

export type ContentBlockType = 'split_comparison' | 'feature' | 'image_grid' | 'rich_text';

export interface BaseBlock {
  type: ContentBlockType;
  id: string;
}

export interface ImageSpec {
  label: string;      // e.g. "Screenshot of Authorization Page"
  dimensions: string; // e.g. "400x600"
  url?: string;       // Real URL if available
}

export interface SplitComparisonBlock extends BaseBlock {
  type: 'split_comparison';
  title: LocalizedString;
  description?: LocalizedString;
  leftImage: ImageSpec;
  rightImage: ImageSpec;
}

export interface FeatureBlock extends BaseBlock {
  type: 'feature';
  title: LocalizedString;
  description: LocalizedString; // Can contain markdown-like newlines
  image?: ImageSpec & {
    position?: 'left' | 'right' | 'bottom'; // Layout hint
  };
  listItems?: LocalizedString[]; // Bullet points
}

export type ContentBlock = SplitComparisonBlock | FeatureBlock;

export interface ProjectOverview {
  client: LocalizedString;
  task: LocalizedString;
  solution: LocalizedString;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  coverImage: string;

  // Header / Intro
  description: LocalizedString; // Short subtitle
  inspiration?: LocalizedString;

  clientLogo?: string;
  images?: string[]; // Legacy / Simple gallery
  fullDescription?: LocalizedString; // Legacy body text

  // New Modular Structure
  overview?: ProjectOverview;
  blocks?: ContentBlock[];
}

export const projects: Project[] = [
  {
    id: "aura-memoria",
    title: "Aura Memoria",
    category: "complex",
    coverImage: "/images/aura-memoria.png",
    description: {
      ru: "Цифровая экосистема для первого Pet-френдли комплекса в Анталье.",
      en: "Digital ecosystem for the first Pet-friendly complex in Antalya.",
      tr: "Antalya'daki ilk Evcil Hayvan dostu kompleks için dijital ekosistem."
    },
    inspiration: {
      ru: "Идея создания пространства, где забота о питомцах продолжается вечно.",
      en: "The idea of creating a space where care for pets continues forever.",
      tr: "Evcil hayvan bakımının sonsuza dek sürdüğü bir alan yaratma fikri."
    },
    clientLogo: "https://placehold.co/150x50/FFFFFF/000000?text=Aura+Logo",
    overview: {
      client: {
        ru: "Aura Memoria — уникальный стартап в Турции, объединяющий три направления: досуг с питомцами, ветеринарную клинику и мемориальный парк. Единое пространство, где можно комфортно отдохнуть, пока собака с тренером, или получить медпомощь.",
        en: "Aura Memoria is a unique startup in Turkey combining three directions: leisure with pets, a veterinary clinic, and a memorial park. A unified space where you can comfortably relax while your dog is with a trainer, or receive medical help.",
        tr: "Aura Memoria, Türkiye'de üç alanı birleştiren benzersiz bir girişimdir: evcil hayvanlarla eğlence, veteriner kliniği ve anıt parkı. Köpeğiniz eğitmenleyken rahatça dinlenebileceğiniz veya tıbbi yardım alabileceğiniz birleşik bir alan."
      },
      task: {
        ru: "Разработать веб-платформу, которая объединит разнородные услуги комплекса в единый интуитивный интерфейс. Создать систему автоматизации записи к врачам и управление базой данных для мемориального парка.",
        en: "Develop a web platform that unites the complex's diverse services into a single intuitive interface. Create an appointment automation system for doctors and database management for the memorial park.",
        tr: "Kompleksin çeşitli hizmetlerini tek bir sezgisel arayüzde birleştiren bir web platformu geliştirin. Doktorlar için randevu otomasyon sistemi ve anıt parkı için veritabanı yönetimi oluşturun."
      },
      solution: {
        ru: "Заказчик получил не просто сайт-визитку, а полнофункциональный инструмент для ведения бизнеса, который закрывает вопросы маркетинга, продаж (запись) и администрирования процессов.",
        en: "The client received not just a business card site, but a fully functional business management tool that covers marketing, sales (booking), and process administration issues.",
        tr: "Müşteri sadece bir kartvizit sitesi değil, pazarlama, satış (rezervasyon) ve süreç yönetimi konularını kapsayan tam işlevli bir iş yönetim aracı aldı."
      }
    },
    blocks: [
      {
        id: "block-1-ux",
        type: "feature",
        title: {
          ru: "UX/UI и Персонализация",
          en: "UX/UI and Personalization",
          tr: "UX/UI ve Kişiselleştirme"
        },
        description: {
          ru: "Мы разработали дизайн в мягких пастельных тонах, передающий атмосферу заботы и спокойствия.\n\nАдаптивность: Сайт полностью оптимизирован под мобильные устройства, так как 80% клиентов записываются на прием с телефона.",
          en: "We developed a design in soft pastel tones, conveying an atmosphere of care and tranquility.\n\nResponsiveness: The site is fully optimized for mobile devices, as 80% of clients book appointments from their phones.",
          tr: "Bakım ve huzur atmosferini ileten yumuşak pastel tonlarda bir tasarım geliştirdik.\n\nDuyarlılık: Müşterilerin %80'i randevularını telefonlarından aldığı için site mobil cihazlar için tamamen optimize edilmiştir."
        }
      },
      {
        id: "block-2-darkmode",
        type: "split_comparison",
        title: {
          ru: "Адаптивный интерфейс с поддержкой Dark Mode",
          en: "Adaptive Interface with Dark Mode Support",
          tr: "Karanlık Mod Destekli Uyarlanabilir Arayüz"
        },
        description: {
          ru: "Реализовали переключение тем (Светлая/Темная). Это не просто эстетика, а забота о зрении пользователя при вечернем просмотре.",
          en: "Implemented theme switching (Light/Dark). This is not just aesthetics, but care for the user's vision during evening viewing.",
          tr: "Tema geçişi (Açık/Koyu) uygulandı. Bu sadece estetik değil, akşam izleme sırasında kullanıcının görme yetisine gösterilen özendir."
        },
        leftImage: {
          label: "Светлая тема (Light Mode)",
          dimensions: "1920x1080",
          url: "/images/am-white.png"
        },
        rightImage: {
          label: "Темная тема (Dark Mode)",
          dimensions: "1920x1080",
          url: "/images/am-dark.png"
        }
      },
      {
        id: "block-3-booking",
        type: "feature",
        title: {
          ru: "Сложная система бронирования (Booking System)",
          en: "Complex Booking System",
          tr: "Karmaşık Rezervasyon Sistemi"
        },
        description: {
          ru: "Ушли от звонков администратору. Интерактивная запись: Пользователь видит профили врачей и выбирает свободный слот.\n\nУмный Личный кабинет: Создана логика статусов заявок. После бронирования заявка попадает в кабинет со статусом 'На модерации'. Пользователь может редактировать время до момента подтверждения, что снижает нагрузку на колл-центр.\n\nИстория: Храним историю всех посещений и предпочтения гостя для персонализированного сервиса.",
          en: "Moved away from calls to the administrator. Interactive booking: The user sees doctor profiles and selects a free slot.\n\nSmart Personal Cabinet: Application status logic created. After booking, the application enters the cabinet with 'On Moderation' status. The user can edit the time until confirmation, reducing call center load.\n\nHistory: We keep a history of all visits and guest preferences for personalized service.",
          tr: "Yöneticiye yapılan aramalardan uzaklaşıldı. Etkileşimli rezervasyon: Kullanıcı doktor profillerini görür ve boş bir alan seçer.\n\nAkıllı Kişisel Kabin: Başvuru durum mantığı oluşturuldu. Rezervasyondan sonra başvuru 'Denetim Altında' durumuyla kabine girer. Kullanıcı onaylanana kadar zamanı düzenleyebilir, bu da çağrı merkezi yükünü azaltır.\n\nGeçmiş: Kişiselleştirilmiş hizmet için tüm ziyaretlerin ve misafir tercihlerinin geçmişini saklıyoruz."
        },
        image: {
          label: "Скриншот Личного кабинета и системы записей",
          dimensions: "1200x800",
          position: "right",
          url: "/images/am-lk.png"
        }
      },
      {
        id: "block-4-admin",
        type: "feature",
        title: {
          ru: "Панель управления бизнесом (Admin Dashboard)",
          en: "Business Control Panel (Admin Dashboard)",
          tr: "İş Kontrol Paneli (Yönetici Panosu)"
        },
        description: {
          ru: "Разработали кастомную CRM-систему внутри сайта.\n\nРолевая модель доступа (RBAC): Система автоматически определяет права пользователя. У администратора кнопка 'Личный кабинет' заменяется на вход в 'Панель управления'.\n\nУправление потоком: Администратор видит все записи в удобном табличном виде с фильтрацией. Реализован полный цикл управления заявкой (CRUD): перенос, подтверждение, отмена — всё в 2 клика.",
          en: "Developed a custom CRM system within the site.\n\nRole-Based Access Control (RBAC): The system automatically determines user rights. For the administrator, the 'Personal Cabinet' button is replaced by 'Control Panel' entry.\n\nFlow Management: The administrator sees all records in a convenient tabular view with filtering. A full application management cycle (CRUD) is implemented: reschedule, confirm, cancel — all in 2 clicks.",
          tr: "Site içinde özel bir CRM sistemi geliştirildi.\n\nRol Tabanlı Erişim Kontrolü (RBAC): Sistem kullanıcı haklarını otomatik olarak belirler. Yönetici için 'Kişisel Kabin' düğmesi 'Kontrol Paneli' girişiyle değiştirilir.\n\nAkış Yönetimi: Yönetici tüm kayıtları filtreleme ile uygun bir tablo görünümünde görür. Tam bir başvuru yönetim döngüsü (CRUD) uygulanmıştır: yeniden planlama, onaylama, iptal etme — hepsi 2 tıklamayla."
        },
        image: {
          label: "Админ-панель (Таблица записей + Фильтры)",
          dimensions: "1200x800",
          position: "bottom",
          url: "/images/am-admin-panel.png"
        }
      },
      {
        id: "block-5-memorial",
        type: "feature",
        title: {
          ru: "Цифровой мемориал",
          en: "Digital Memorial",
          tr: "Dijital Anıt"
        },
        description: {
          ru: "Создан деликатный модуль памяти. Каждое животное имеет персональную страницу-мемориал с галереей воспоминаний и биографией. Это вечный цифровой архив для владельцев.",
          en: "A delicate memory module has been created. Each animal has a personal memorial page with a gallery of memories and a biography. This is an eternal digital archive for owners.",
          tr: "Hassas bir hafıza modülü oluşturuldu. Her hayvanın, anı galerisi ve biyografisi olan kişisel bir anıt sayfası vardır. Bu, sahipler için sonsuz bir dijital arşivdir."
        },
        image: {
          label: "Страница Мемориального парка",
          dimensions: "1200x600",
          position: "left",
          url: "/images/am-park.png"
        }
      }
    ]
  },
  {
    id: "black-island",
    title: "Black Island",
    category: "cafeRestaurants",
    coverImage: "/images/black-island.png",
    description: {
      ru: "Кафе-ресторан русской, европейской и восточной кухни в современном стиле.",
      en: "Cafe-restaurant of Russian, European, and Eastern cuisine in modern style.",
      tr: "Modern tarzda Rus, Avrupa ve Doğu mutfağından kafe-restoran."
    },
    inspiration: {
      ru: "Современный стиль с элементами лаунж-атмосферы и кальяном.",
      en: "Modern style with lounge atmosphere elements and hookah.",
      tr: "Lounge atmosferi unsurları ve nargile ile modern tarz."
    },
    clientLogo: "https://placehold.co/150x50/FFFFFF/000000?text=Black+Island",
    images: [
        "https://placehold.co/1200x800/000000/FFFFFF?text=Interior",
        "https://placehold.co/1200x800/000000/FFFFFF?text=Dishes",
    ],
    fullDescription: {
      ru: "Black Island — это гастрономическое путешествие. Мы объединили лучшие традиции русской, европейской и восточной кухни в одном месте. Стильный интерьер, кальянная зона и разнообразное меню создают идеальную атмосферу для отдыха.",
      en: "Black Island is a gastronomic journey. We have combined the best traditions of Russian, European, and Eastern cuisine in one place. Stylish interior, hookah zone, and a diverse menu create the perfect atmosphere for relaxation.",
      tr: "Black Island bir gastronomi yolculuğudur. Rus, Avrupa ve Doğu mutfağının en iyi geleneklerini tek bir yerde birleştirdik. Şık iç mekan, nargile alanı ve çeşitli menü, dinlenmek için mükemmel bir atmosfer yaratır."
    }
  },
  {
    id: "carre-caffe",
    title: "Carre Caffe",
    category: "cafeRestaurants",
    coverImage: "/images/carre-caffe.png",
    description: {
      ru: "Кафе традиционной русской кухни в Манавгате, Турция.",
      en: "Cafe of traditional Russian cuisine in Manavgat, Turkey.",
      tr: "Manavgat, Türkiye'de geleneksel Rus mutfağı kafesi."
    },
    inspiration: {
      ru: "Уют и тепло домашней русской кухни на берегу Средиземноморья.",
      en: "Comfort and warmth of homemade Russian cuisine on the Mediterranean coast.",
      tr: "Akdeniz kıyısında ev yapımı Rus mutfağının konforu ve sıcaklığı."
    },
    clientLogo: "https://placehold.co/150x50/FFFFFF/000000?text=Carre+Caffe",
    images: [
        "https://placehold.co/1200x800/000000/FFFFFF?text=Menu",
        "https://placehold.co/1200x800/000000/FFFFFF?text=Atmosphere",
    ],
    fullDescription: {
      ru: "Carre Caffe привносит вкус родины в сердце Манавгата. Традиционные рецепты, свежие ингредиенты и гостеприимство делают это место уникальным уголком русской культуры в Турции.",
      en: "Carre Caffe brings the taste of home to the heart of Manavgat. Traditional recipes, fresh ingredients, and hospitality make this place a unique corner of Russian culture in Turkey.",
      tr: "Carre Caffe, memleket tadını Manavgat'ın kalbine getiriyor. Geleneksel tarifler, taze malzemeler ve misafirperverlik, burayı Türkiye'de Rus kültürünün eşsiz bir köşesi haline getiriyor."
    }
  }
];

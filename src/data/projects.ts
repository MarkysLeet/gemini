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
          dimensions: "1920x1080", // Desktop screenshot size usually
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
      ru: "Цифровая гастрономия для премиального ресторана в Анталье.",
      en: "Digital gastronomy for a premium restaurant in Antalya.",
      tr: "Antalya'da premium bir restoran için dijital gastronomi."
    },
    clientLogo: "https://placehold.co/150x50/FFFFFF/000000?text=Black+Island",
    overview: {
      client: {
        ru: "Black Island Cafe Restaurant. Ресторан русской и средиземноморской кухни в сердце Коньялты (Анталья), объединяющий гастрономическую ностальгию с современной архитектурой света и сервиса.",
        en: "Black Island Cafe Restaurant. A restaurant of Russian and Mediterranean cuisine in the heart of Konyaaltı (Antalya), combining gastronomic nostalgia with modern architecture of light and service.",
        tr: "Black Island Cafe Restaurant. Konyaaltı'nın (Antalya) kalbinde yer alan, gastronomik nostaljiyi modern ışık ve hizmet mimarisiyle birleştiren bir Rus ve Akdeniz mutfağı restoranı."
      },
      task: {
        ru: "Ребрендинг в цифре: Заменить неактуальный одностраничный лендинг на многостраничный ресурс. Структурирование контента: Разработать удобную архитектуру для меню и команды. SEO и Доступность: Обеспечить видимость в поисковых системах и идеальную работу на мобильных устройствах.",
        en: "Digital Rebranding: Replace an outdated single-page landing page with a multi-page resource. Content Structuring: Develop a user-friendly architecture for the menu and team. SEO & Accessibility: Ensure search engine visibility and flawless performance on mobile devices.",
        tr: "Dijital Yeniden Markalaşma: Güncelliğini yitirmiş tek sayfalık bir açılış sayfasını çok sayfalı bir kaynakla değiştirin. İçerik Yapılandırma: Menü ve ekip için kullanıcı dostu bir mimari geliştirin. SEO ve Erişilebilirlik: Arama motoru görünürlüğünü ve mobil cihazlarda kusursuz performansı sağlayın."
      },
      solution: {
        ru: "Заказчик получил имиджевый веб-сайт, работающий как полноценный канал привлечения гостей. Внедрено интерактивное меню с заказом через WhatsApp, дизайн передает камерность места, а локальное SEO превращает онлайн-трафик в реальные визиты.",
        en: "The client received a branding website that functions as a full-fledged channel for attracting guests. An interactive menu with WhatsApp ordering was implemented, the design conveys the venue's intimacy, and local SEO converts online traffic into real visits.",
        tr: "Müşteri, misafir çekmek için tam teşekküllü bir kanal olarak işlev gören bir marka web sitesi aldı. WhatsApp siparişli interaktif bir menü uygulandı, tasarım mekanın samimiyetini yansıtıyor ve yerel SEO çevrimiçi trafiği gerçek ziyaretlere dönüştürüyor."
      }
    },
    blocks: [
      {
        id: "bi-intro",
        type: "feature",
        title: {
          ru: "Black Island — Цифровая гастрономия в центре Коньялты",
          en: "Black Island — Digital Gastronomy in the Heart of Konyaaltı",
          tr: "Black Island — Konyaaltı'nın Kalbinde Dijital Gastronomi"
        },
        description: {
          ru: "Ребрендинг веб-присутствия для ресторана русской и средиземноморской кухни. Переход от неэффективного лендинга к многостраничному digital-пространству, которое передает атмосферу «сумеречного зала» и решает бизнес-задачи по бронированию и заказам.",
          en: "Rebranding the web presence for a restaurant of Russian and Mediterranean cuisine. Transition from an ineffective landing page to a multi-page digital space that conveys the atmosphere of a 'twilight hall' and solves business tasks for reservations and orders.",
          tr: "Rus ve Akdeniz mutfağı restoranı için web varlığının yeniden markalaştırılması. Etkisiz bir açılış sayfasından, 'alacakaranlık salonu' atmosferini yansıtan ve rezervasyonlar ve siparişler için iş görevlerini çözen çok sayfalı bir dijital alana geçiş."
        },
        image: {
          label: "Скриншот главной страницы с блюдом",
          dimensions: "1200x600",
          position: "bottom",
          url: ""
        }
      },
      {
        id: "bi-challenge",
        type: "feature",
        title: {
          ru: "ЗАДАЧА: Выйти за рамки «сайта-визитки»",
          en: "CHALLENGE: To Go Beyond a 'Business Card Website'",
          tr: "ZORLUK: 'Kartvizit Web Sitesi'nin Ötesine Geçmek"
        },
        description: {
          ru: "Предыдущий сайт не справлялся с презентацией обширного меню и не передавал премиальный статус заведения. Ключевые вызовы:",
          en: "The previous site failed to present the extensive menu and did not convey the establishment's premium status. Key challenges:",
          tr: "Önceki site, geniş menüyü sunmakta başarısız oldu ve işletmenin premium statüsünü yansıtmadı. Ana zorluklar:"
        },
        listItems: [
          {
            ru: "Отсутствие SEO-структуры для поиска по запросам «русская кухня Анталия».",
            en: "Lack of SEO structure for searches like 'Russian cuisine Antalya'.",
            tr: "'Antalya'da Rus mutfağı' gibi aramalar için SEO yapısının olmaması."
          },
          {
            ru: "Сложность выбора блюд без визуализации.",
            en: "Difficulty in choosing dishes without visualization.",
            tr: "Görselleştirme olmadan yemek seçmenin zorluğu."
          },
          {
            ru: "Необходимость автоматизировать коммуникацию с гостями через привычные каналы (WhatsApp).",
            en: "The need to automate communication with guests through familiar channels (WhatsApp).",
            tr: "Misafirlerle alışıldık kanallar (WhatsApp) üzerinden iletişimi otomatikleştirme ihtiyacı."
          }
        ],
        image: {
          label: "Иллюстрация проблематики (старый сайт)",
          dimensions: "1200x600",
          position: "right",
          url: ""
        }
      },
      {
        id: "bi-concept",
        type: "feature",
        title: {
          ru: "Дизайн как продолжение интерьера",
          en: "Design as an Extension of the Interior",
          tr: "İç Mekanın Bir Uzantısı Olarak Tasarım"
        },
        description: {
          ru: "Мы перенесли атмосферу ресторана в цифру. Использована темная цветовая гамма, поддерживающая концепцию «сумеречного зала и приватных столиков».",
          en: "We transferred the restaurant's atmosphere into the digital realm. A dark color scheme was used to support the concept of a 'twilight hall and private tables'.",
          tr: "Restoranın atmosferini dijital ortama taşıdık. 'Alacakaranlık salonu ve özel masalar' konseptini desteklemek için koyu bir renk şeması kullanıldı."
        },
        listItems: [
          {
            ru: "Visual First: Крупная, аппетитная типографика и акцент на профессиональных фото блюд (Signature Dish).",
            en: "Visual First: Large, appetizing typography and an emphasis on professional photos of dishes (Signature Dish).",
            tr: "Önce Görsel: Büyük, iştah açıcı tipografi ve profesyonel yemek fotoğraflarına (İmza Yemeği) vurgu."
          },
          {
            ru: "Минимализм: Интерфейс не отвлекает от главного — еды. Легкая анимация и «воздух» между блоками создают ощущение премиального сервиса.",
            en: "Minimalism: The interface does not distract from the main thing — the food. Light animation and 'air' between blocks create a sense of premium service.",
            tr: "Minimalizm: Arayüz ana şeyden, yani yemekten dikkati dağıtmaz. Hafif animasyon ve bloklar arasındaki 'hava', premium bir hizmet hissi yaratır."
          }
        ],
        image: {
          label: "Референс на about.pdf (философия) и темную тему",
          dimensions: "1200x600",
          position: "left",
          url: ""
        }
      },
      {
        id: "bi-menu-architecture",
        type: "feature",
        title: {
          ru: "Интерактивное меню с конверсией в заказ",
          en: "Interactive Menu with Conversion to Order",
          tr: "Siparişe Dönüşen Etkileşimli Menü"
        },
        description: {
          ru: "Разработан полноценный каталог с категориями (Закуски, Супы, Русские блюда), который работает как инструмент продаж.",
          en: "A full-fledged catalog with categories (Appetizers, Soups, Russian dishes) was developed, which works as a sales tool.",
          tr: "Satış aracı olarak çalışan kategorilere (Mezeler, Çorbalar, Rus yemekleri) sahip tam teşekküllü bir katalog geliştirildi."
        },
        listItems: [
          {
            ru: "Удобство выбора: Гость видит состав, цену в двух валютах (Лиры/Евро) и качественное фото.",
            en: "Ease of choice: The guest sees the composition, price in two currencies (Lira/Euro), and a high-quality photo.",
            tr: "Seçim kolaylığı: Misafir, içeriği, iki para birimindeki (Lira/Euro) fiyatı ve yüksek kaliteli bir fotoğrafı görür."
          },
          {
            ru: "WhatsApp-Integration: Каждая карточка товара оснащена кнопкой «Заказать в WhatsApp». Это сокращает путь пользователя от «хочу» до заказа, позволяя мгновенно связаться с менеджером.",
            en: "WhatsApp Integration: Each product card is equipped with a 'Order on WhatsApp' button. This shortens the user's path from 'I want' to ordering, allowing instant contact with the manager.",
            tr: "WhatsApp Entegrasyonu: Her ürün kartı bir 'WhatsApp'ta Sipariş Ver' düğmesi ile donatılmıştır. Bu, kullanıcının 'istiyorum'dan siparişe giden yolunu kısaltarak yöneticiyle anında iletişim kurmasını sağlar."
          }
        ],
        image: {
          label: "Скриншот меню с карточками товаров и кнопкой WhatsApp",
          dimensions: "1200x600",
          position: "bottom",
          url: ""
        }
      },
      {
        id: "bi-brand",
        type: "feature",
        title: {
          ru: "Персонализация бренда: Лица Black Island",
          en: "Brand Personalization: The Faces of Black Island",
          tr: "Marka Kişiselleştirme: Black Island'ın Yüzleri"
        },
        description: {
          ru: "В отличие от безликих сайтов общепита, мы создали раздел, знакомящий гостя с командой.",
          en: "Unlike faceless catering sites, we created a section that introduces the guest to the team.",
          tr: "Kimliksiz yiyecek içecek sitelerinin aksine, misafiri ekiple tanıştıran bir bölüm oluşturduk."
        },
        listItems: [
          {
            ru: "Прозрачность: Представлены ключевые фигуры — от Шеф-повара Mert Arıkan до Бар-шефа Леонида Мирского. Это формирует доверие еще до визита.",
            en: "Transparency: Key figures are presented — from Chef Mert Arıkan to Bar Chef Leonid Mirsky. This builds trust even before the visit.",
            tr: "Şeffaflık: Şef Mert Arıkan'dan Bar Şefi Leonid Mirsky'ye kadar kilit isimler sunulmaktadır. Bu, ziyaretten önce bile güven oluşturur."
          },
          {
            ru: "Сторителлинг: Блок «История» рассказывает о философии соединения ностальгии русской кухни и легкости Средиземноморья, эмоционально привязывая гостя к месту.",
            en: "Storytelling: The 'History' block tells about the philosophy of combining the nostalgia of Russian cuisine with the lightness of the Mediterranean, emotionally attaching the guest to the place.",
            tr: "Hikaye Anlatımı: 'Tarihçe' bölümü, Rus mutfağının nostaljisini Akdeniz'in hafifliğiyle birleştirme felsefesini anlatarak misafiri mekana duygusal olarak bağlar."
          }
        ],
        image: {
          label: "Скриншот блока с командой из about.pdf",
          dimensions: "1200x600",
          position: "right",
          url: ""
        }
      },
      {
        id: "bi-tech",
        type: "feature",
        title: {
          ru: "Mobile First и Локальное SEO",
          en: "Mobile First and Local SEO",
          tr: "Önce Mobil ve Yerel SEO"
        },
        description: {
          ru: "Сайт идеально адаптирован под мобильные устройства, с которых приходит 80% трафика в туристической зоне.",
          en: "The site is perfectly adapted for mobile devices, which account for 80% of traffic in the tourist area.",
          tr: "Site, turist bölgesindeki trafiğin %80'ini oluşturan mobil cihazlar için mükemmel bir şekilde uyarlanmıştır."
        },
        listItems: [
          {
            ru: "Производительность: Мгновенная загрузка тяжелого визуального контента (фото блюд) благодаря современному стеку (Vercel).",
            en: "Performance: Instant loading of heavy visual content (photos of dishes) thanks to a modern stack (Vercel).",
            tr: "Performans: Modern bir yığın (Vercel) sayesinde ağır görsel içeriğin (yemek fotoğrafları) anında yüklenmesi."
          },
          {
            ru: "Геолокация: Интеграция с картами и четкий блок контактов (Liman Mahallesi) помогают туристам легко строить маршрут прямо с телефона.",
            en: "Geolocation: Integration with maps and a clear contact block (Liman Mahallesi) help tourists easily plan their route directly from their phone.",
            tr: "Coğrafi Konum: Haritalarla entegrasyon ve net bir iletişim bloğu (Liman Mahallesi), turistlerin doğrudan telefonlarından rotalarını kolayca planlamalarına yardımcı olur."
          }
        ],
        image: {
          label: "Скриншот адаптивной верстки на разных устройствах",
          dimensions: "1200x600",
          position: "left",
          url: ""
        }
      },
      {
        id: "bi-solution",
        type: "feature",
        title: {
          ru: "РЕШЕНИЕ: Готовый инструмент для HoReCa",
          en: "SOLUTION: A Ready-Made Tool for HoReCa",
          tr: "ÇÖZUM: HoReCa için Hazır Bir Araç"
        },
        description: {
          ru: "Заказчик получил не просто красивую картинку, а работающий бизнес-инструмент. Сайт закрывает вопросы презентации меню, бронирования столов и формирования имиджа лучшего места с русской кухней в Коньялты.",
          en: "The client received not just a pretty picture, but a working business tool. The site addresses issues of menu presentation, table reservations, and building an image as the best place with Russian cuisine in Konyaaltı.",
          tr: "Müşteri sadece güzel bir resim değil, çalışan bir iş aracı aldı. Site, menü sunumu, masa rezervasyonları ve Konyaaltı'ndaki en iyi Rus mutfağına sahip yer imajını oluşturma sorunlarını çözüyor."
        },
        image: {
          label: "Финальный результат (главный экран)",
          dimensions: "1200x600",
          position: "bottom",
          url: ""
        }
      }
    ]
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
    overview: {
      client: {
        ru: "Carre Caffe — уютный уголок русской культуры в Манавгате. Место, где туристы и экспаты могут найти привычные и любимые блюда домашней кухни.",
        en: "Carre Caffe is a cozy corner of Russian culture in Manavgat. A place where tourists and expats can find familiar and favorite home-cooked dishes.",
        tr: "Carre Caffe, Manavgat'ta Rus kültürünün rahat bir köşesidir. Turistlerin ve gurbetçilerin tanıdık ve sevdikleri ev yemeklerini bulabilecekleri bir yer."
      },
      task: {
        ru: "У кафе отсутствовал сайт, из-за чего огромный поток туристов из Google просто проходил мимо. Задача состояла в том, чтобы создать точку контакта в интернете и привлечь новых гостей через поисковой трафик.",
        en: "The cafe had no website, which is why a huge stream of tourists from Google simply passed by. The task was to create a contact point on the Internet and attract new guests through search traffic.",
        tr: "Kafenin bir web sitesi yoktu, bu yüzden Google'dan gelen büyük bir turist akışı sadece geçip gidiyordu. Görev, internette bir temas noktası oluşturmak ve arama trafiği yoluyla yeni misafirler çekmekti."
      },
      solution: {
        ru: "Мы разработали сайт-визитку, оптимизированную для SEO и Google Maps. Теперь туристы, ищущие 'русская еда в Манавгате', сразу находят Carre Caffe. Сайт работает как эффективный инструмент привлечения гостей 24/7.",
        en: "We developed a business card site optimized for SEO and Google Maps. Now tourists looking for 'Russian food in Manavgat' immediately find Carre Caffe. The site works as an effective guest attraction tool 24/7.",
        tr: "SEO ve Google Haritalar için optimize edilmiş bir kartvizit sitesi geliştirdik. Artık 'Manavgat'ta Rus yemeği' arayan turistler Carre Caffe'yi hemen buluyor. Site 7/24 etkili bir misafir çekme aracı olarak çalışıyor."
      }
    },
    blocks: [
      {
        id: "cc-seo",
        type: "feature",
        title: {
          ru: "SEO и Привлечение трафика",
          en: "SEO & Traffic Attraction",
          tr: "SEO ve Trafik Çekme"
        },
        description: {
          ru: "Основной упор сделан на видимость в поисковиках. Структура сайта и контент разработаны так, чтобы отвечать на популярные запросы туристов. Интеграция с картами позволяет построить маршрут в один клик.",
          en: "The main focus is on visibility in search engines. The site structure and content are designed to answer popular tourist queries. Integration with maps allows you to build a route in one click.",
          tr: "Ana odak noktası arama motorlarındaki görünürlüktür. Site yapısı ve içeriği popüler turist sorgularına cevap verecek şekilde tasarlanmıştır. Haritalarla entegrasyon, tek bir tıklamayla rota oluşturmanıza olanak tanır."
        },
        image: {
          label: "Скриншот Google поиска и карты",
          dimensions: "1200x800",
          position: "right",
          url: ""
        }
      },
      {
        id: "cc-menu",
        type: "feature",
        title: {
          ru: "Витрина меню",
          en: "Menu Showcase",
          tr: "Menü Vitrini"
        },
        description: {
          ru: "Сайт выполняет роль красочной витрины. Аппетитные фотографии борща, пельменей и блинов вызывают желание посетить кафе. Простота навигации позволяет быстро ознакомиться с ценами и ассортиментом.",
          en: "The site acts as a colorful showcase. Appetizing photos of borscht, dumplings, and pancakes make you want to visit the cafe. Simple navigation allows you to quickly get acquainted with prices and the assortment.",
          tr: "Site renkli bir vitrin görevi görür. Borş, mantı ve krep gibi iştah açıcı fotoğraflar kafeyi ziyaret etme isteği uyandırır. Basit navigasyon, fiyatları ve çeşitliliği hızlıca tanımanızı sağlar."
        }
      },
      {
        id: "cc-info",
        type: "feature",
        title: {
          ru: "Информативность и Контакты",
          en: "Informativeness & Contacts",
          tr: "Bilgilendirme ve Kişiler"
        },
        description: {
          ru: "Вся важная информация — часы работы, адрес, телефон — находится на видном месте. Кнопки связи (WhatsApp, вызов) всегда под рукой, особенно в мобильной версии, что критически важно для туристов на ходу.",
          en: "All important information — opening hours, address, phone — is in a prominent place. Contact buttons (WhatsApp, call) are always at hand, especially in the mobile version, which is critical for tourists on the go.",
          tr: "Tüm önemli bilgiler — çalışma saatleri, adres, telefon — belirgin bir yerdedir. İletişim düğmeleri (WhatsApp, arama) her zaman elinizin altındadır, özellikle hareket halindeki turistler için kritik olan mobil sürümde."
        },
        image: {
          label: "Блок контактов и футер",
          dimensions: "1200x600",
          position: "bottom",
          url: ""
        }
      }
    ]
  }
];

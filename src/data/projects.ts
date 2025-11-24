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
    overview: {
      client: {
        ru: "Black Island — популярное заведение в Анталье, объединяющее русскую и европейскую кухню. Интерьер выполнен в темном премиальном стиле, создавая атмосферу уюта и эксклюзивности.",
        en: "Black Island is a popular establishment in Antalya combining Russian and European cuisine. The interior is executed in a dark premium style, creating an atmosphere of comfort and exclusivity.",
        tr: "Black Island, Antalya'da Rus ve Avrupa mutfağını birleştiren popüler bir mekandır. İç mekan, konfor ve ayrıcalık atmosferi yaratan karanlık bir premium tarzda yapılmıştır."
      },
      task: {
        ru: "Предыдущий сайт не соответствовал уровню заведения: ни визуально, ни функционально. Необходимо было создать цифровой образ, который передает премиальность интерьера и 'вайб' места, а также удобно презентует меню.",
        en: "The previous site did not correspond to the level of the establishment: neither visually nor functionally. It was necessary to create a digital image that conveys the premium nature of the interior and the 'vibe' of the place, as well as conveniently presents the menu.",
        tr: "Önceki site mekanın seviyesine uymuyordu: ne görsel ne de işlevsel olarak. İç mekanın premium doğasını ve mekanın 'havasını' ileten ve menüyü rahatça sunan bir dijital görüntü oluşturmak gerekiyordu."
      },
      solution: {
        ru: "Мы разработали стильный сайт с упором на визуальный контент. Темная тема, качественная типографика и плавные анимации полностью отражают атмосферу Black Island, превращая посетителей сайта в гостей ресторана.",
        en: "We developed a stylish site with a focus on visual content. Dark theme, high-quality typography, and smooth animations fully reflect the atmosphere of Black Island, turning site visitors into restaurant guests.",
        tr: "Görsel içeriğe odaklanan şık bir site geliştirdik. Koyu tema, yüksek kaliteli tipografi ve pürüzsüz animasyonlar Black Island'ın atmosferini tamamen yansıtıyor ve site ziyaretçilerini restoran misafirlerine dönüştürüyor."
      }
    },
    blocks: [
      {
        id: "bi-design",
        type: "feature",
        title: {
          ru: "Премиальный темный дизайн",
          en: "Premium Dark Design",
          tr: "Premium Karanlık Tasarım"
        },
        description: {
          ru: "Дизайн сайта является прямым продолжением интерьера ресторана. Мы использовали глубокие темные оттенки и акцентные элементы, чтобы передать ощущение лаунж-зоны и вечернего отдыха.",
          en: "The site design is a direct continuation of the restaurant's interior. We used deep dark shades and accent elements to convey the feeling of a lounge zone and evening relaxation.",
          tr: "Site tasarımı restoranın iç mekanının doğrudan bir devamıdır. Lounge alanı ve akşam dinlenmesi hissini iletmek için derin koyu tonlar ve vurgu öğeleri kullandık."
        },
        image: {
          label: "Главная страница в темном стиле",
          dimensions: "1920x1080",
          position: "bottom",
          url: ""
        }
      },
      {
        id: "bi-menu",
        type: "feature",
        title: {
          ru: "Цифровое меню и Галерея",
          en: "Digital Menu & Gallery",
          tr: "Dijital Menü ve Galeri"
        },
        description: {
          ru: "Акцент сделан на вкусной презентации блюд. Удобная структура меню позволяет быстро найти любимые позиции, будь то русские пельмени или европейские стейки.",
          en: "The emphasis is on the delicious presentation of dishes. The convenient menu structure allows you to quickly find favorite items, whether it's Russian dumplings or European steaks.",
          tr: "Vurgu, yemeklerin lezzetli sunumu üzerinedir. Uygun menü yapısı, ister Rus mantısı ister Avrupa bifteği olsun, favori öğeleri hızlıca bulmanızı sağlar."
        },
        image: {
          label: "Страница меню с фотографиями блюд",
          dimensions: "1200x800",
          position: "right",
          url: ""
        }
      },
      {
        id: "bi-mobile",
        type: "split_comparison",
        title: {
          ru: "Мобильная адаптация",
          en: "Mobile Adaptation",
          tr: "Mobil Uyarlama"
        },
        description: {
          ru: "Большинство туристов ищут рестораны с телефона. Сайт идеально отображается на смартфонах, сохраняя всю красоту и функциональность десктопной версии.",
          en: "Most tourists look for restaurants from their phones. The site is perfectly displayed on smartphones, preserving all the beauty and functionality of the desktop version.",
          tr: "Çoğu turist telefonlarından restoran arar. Site, masaüstü sürümünün tüm güzelliğini ve işlevselliğini koruyarak akıllı telefonlarda mükemmel bir şekilde görüntülenir."
        },
        leftImage: {
          label: "Десктоп версия",
          dimensions: "1200x800",
          url: ""
        },
        rightImage: {
          label: "Мобильная версия",
          dimensions: "375x812",
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

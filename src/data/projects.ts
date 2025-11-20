export interface LocalizedString {
  ru: string;
  en: string;
  tr: string;
}

export type ProjectCategory = "cafe" | "restaurants" | "salons";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  coverImage: string;
  description: LocalizedString;
  inspiration: LocalizedString;
  clientLogo: string;
  images: string[];
  fullDescription: LocalizedString;
}

export const projects: Project[] = [
  {
    id: "bean-booster-cafe",
    title: "BeanBooster",
    category: "cafe",
    coverImage: "https://placehold.co/600x400/000000/FFFFFF?text=BeanBooster",
    description: {
      ru: "Стильный и современный сайт для сети кофеен.",
      en: "Stylish and modern website for a coffee shop chain.",
      tr: "Bir kahve dükkanı zinciri için şık ve modern web sitesi."
    },
    inspiration: {
      ru: "Вдохновением послужила атмосфера современных городских кофеен — минимализм, натуральные материалы и акцент на качестве.",
      en: "Inspired by the atmosphere of modern urban coffee shops — minimalism, natural materials, and a focus on quality.",
      tr: "Modern kentsel kahve dükkanlarının atmosferinden ilham alındı — minimalizm, doğal malzemeler ve kaliteye odaklanma."
    },
    clientLogo: "https://placehold.co/150x50/FFFFFF/000000?text=BeanBooster+Logo",
    images: [
        "https://placehold.co/1200x800/000000/FFFFFF?text=Screenshot+1",
        "https://placehold.co/1200x800/000000/FFFFFF?text=Screenshot+2",
    ],
    fullDescription: {
      ru: "Для BeanBooster мы разработали сайт, который отражает их философию: лучший кофе и уютная атмосфера. Мы создали удобное меню, галерею интерьеров и систему онлайн-заказов, интегрированную с их внутренней системой.",
      en: "For BeanBooster, we developed a site that reflects their philosophy: the best coffee and a cozy atmosphere. We created a convenient menu, interior gallery, and online ordering system integrated with their internal system.",
      tr: "BeanBooster için felsefelerini yansıtan bir site geliştirdik: en iyi kahve ve rahat bir atmosfer. Kullanışlı bir menü, iç mekan galerisi ve iç sistemleriyle entegre edilmiş bir çevrimiçi sipariş sistemi oluşturduk."
    }
  },
  {
    id: "elegance-salon",
    title: "Elegance",
    category: "salons",
    coverImage: "https://placehold.co/600x400/000000/FFFFFF?text=Elegance",
    description: {
      ru: "Изящный сайт для премиального салона красоты.",
      en: "Elegant website for a premium beauty salon.",
      tr: "Premium bir güzellik salonu için zarif web sitesi."
    },
    inspiration: {
      ru: "Мы черпали вдохновение в эстетике люксовых брендов и минималистичном дизайне, чтобы подчеркнуть эксклюзивность услуг салона.",
      en: "We drew inspiration from the aesthetics of luxury brands and minimalist design to emphasize the exclusivity of the salon's services.",
      tr: "Salonun hizmetlerinin ayrıcalığını vurgulamak için lüks markaların estetiğinden ve minimalist tasarımdan ilham aldık."
    },
    clientLogo: "https://placehold.co/150x50/FFFFFF/000000?text=Elegance+Logo",
    images: [
        "https://placehold.co/1200x800/000000/FFFFFF?text=Homepage",
        "https://placehold.co/1200x800/000000/FFFFFF?text=Services",
    ],
    fullDescription: {
      ru: "Сайт для салона Elegance — это сочетание стиля и функциональности. Мы реализовали удобную онлайн-запись, подробные страницы услуг с ценами и портфолио мастеров, что позволило увеличить количество онлайн-бронирований на 40%.",
      en: "The website for Elegance salon is a combination of style and functionality. We implemented convenient online booking, detailed service pages with prices, and master portfolios, which increased online bookings by 40%.",
      tr: "Elegance salonu için web sitesi, stil ve işlevselliğin birleşimidir. Uygun çevrimiçi rezervasyon, fiyatlarla ayrıntılı hizmet sayfaları ve usta portföyleri uyguladık, bu da çevrimiçi rezervasyonları %40 artırdı."
    }
  },
  {
    id: "gourmet-place-restaurant",
    title: "Gourmet Place",
    category: "restaurants",
    coverImage: "https://placehold.co/600x400/000000/FFFFFF?text=Gourmet+Place",
    description: {
      ru: "Аппетитный сайт для ресторана высокой кухни.",
      en: "Appetizing website for a fine dining restaurant.",
      tr: "Lüks bir restoran için iştah açıcı web sitesi."
    },
    inspiration: {
      ru: "Дизайн сайта вдохновлен самим искусством кулинарии: мы использовали 'вкусные' цвета, элегантную типографику и качественные фотографии блюд.",
      en: "The site design is inspired by the art of cooking itself: we used 'tasty' colors, elegant typography, and high-quality food photos.",
      tr: "Site tasarımı, yemek pişirme sanatının kendisinden esinlenmiştir: 'lezzetli' renkler, zarif tipografi ve yüksek kaliteli yemek fotoğrafları kullandık."
    },
    clientLogo: "https://placehold.co/150x50/FFFFFF/000000?text=Gourmet+Place+Logo",
    images: [
        "https://placehold.co/1200x800/000000/FFFFFF?text=Menu",
        "https://placehold.co/1200x800/000000/FFFFFF?text=Gallery",
    ],
    fullDescription: {
      ru: "Основной задачей было передать атмосферу ресторана Gourmet Place. Мы разработали интерактивное меню, фотогалерею, которая погружает в атмосферу заведения, и простую форму для бронирования столиков.",
      en: "The main task was to convey the atmosphere of the Gourmet Place restaurant. We developed an interactive menu, a photo gallery that immerses you in the atmosphere of the establishment, and a simple table reservation form.",
      tr: "Asıl görev, Gourmet Place restoranının atmosferini iletmekti. İnteraktif bir menü, sizi mekanın atmosferine sokan bir fotoğraf galerisi ve basit bir masa rezervasyon formu geliştirdik."
    }
  }
];

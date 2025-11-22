export interface LocalizedString {
  ru: string;
  en: string;
  tr: string;
}

export type ProjectCategory = "complex" | "cafeRestaurants";

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
    id: "aura-memoria",
    title: "Aura Memoria",
    category: "complex",
    coverImage: "/images/aura-memoria.png",
    description: {
      ru: "Будущий комплекс: парк для животных, клиника и мемориальный парк.",
      en: "Future complex: animal park, veterinary clinic, and memorial park.",
      tr: "Gelecek kompleks: hayvan parkı, veteriner kliniği ve anıt parkı."
    },
    inspiration: {
      ru: "Идея создания пространства, где забота о питомцах продолжается вечно.",
      en: "The idea of creating a space where care for pets continues forever.",
      tr: "Evcil hayvan bakımının sonsuza dek sürdüğü bir alan yaratma fikri."
    },
    clientLogo: "https://placehold.co/150x50/FFFFFF/000000?text=Aura+Logo",
    images: [
        "https://placehold.co/1200x800/000000/FFFFFF?text=Park+View",
        "https://placehold.co/1200x800/000000/FFFFFF?text=Clinic+Interior",
    ],
    fullDescription: {
      ru: "Aura Memoria — это уникальный проект, объединяющий в себе Парк для животных с уютной кафетерией для владельцев, современную ветеринарную клинику и мемориальный парк. Это место, где технологии встречаются с заботой и памятью.",
      en: "Aura Memoria is a unique project combining an Animal Park with a cozy cafeteria for owners, a modern veterinary clinic, and a memorial park. This is a place where technology meets care and memory.",
      tr: "Aura Memoria, hayvan sahipleri için rahat bir kafeteryaya sahip Hayvan Parkı, modern bir veteriner kliniği ve anıt parkını birleştiren benzersiz bir projedir. Burası teknolojinin bakım ve hafızayla buluştuğu yerdir."
    }
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

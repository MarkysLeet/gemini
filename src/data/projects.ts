export interface Project {
  id: string;
  title: string;
  category: "Кафе" | "Рестораны" | "Салоны";
  coverImage: string;
  description: string;
  inspiration: string;
  clientLogo: string;
  images: string[];
  fullDescription: string;
}

export const projects: Project[] = [
  {
    id: "bean-booster-cafe",
    title: "BeanBooster",
    category: "Кафе",
    coverImage: "https://placehold.co/600x400/000000/FFFFFF?text=BeanBooster",
    description: "Стильный и современный сайт для сети кофеен.",
    inspiration: "Вдохновением послужила атмосфера современных городских кофеен — минимализм, натуральные материалы и акцент на качестве.",
    clientLogo: "https://placehold.co/150x50/FFFFFF/000000?text=BeanBooster+Logo",
    images: [
        "https://placehold.co/1200x800/000000/FFFFFF?text=Screenshot+1",
        "https://placehold.co/1200x800/000000/FFFFFF?text=Screenshot+2",
    ],
    fullDescription: "Для BeanBooster мы разработали сайт, который отражает их философию: лучший кофе и уютная атмосфера. Мы создали удобное меню, галерею интерьеров и систему онлайн-заказов, интегрированную с их внутренней системой."
  },
  {
    id: "elegance-salon",
    title: "Elegance",
    category: "Салоны",
    coverImage: "https://placehold.co/600x400/000000/FFFFFF?text=Elegance",
    description: "Изящный сайт для премиального салона красоты.",
    inspiration: "Мы черпали вдохновение в эстетике люксовых брендов и минималистичном дизайне, чтобы подчеркнуть эксклюзивность услуг салона.",
    clientLogo: "https://placehold.co/150x50/FFFFFF/000000?text=Elegance+Logo",
    images: [
        "https://placehold.co/1200x800/000000/FFFFFF?text=Homepage",
        "https://placehold.co/1200x800/000000/FFFFFF?text=Services",
    ],
    fullDescription: "Сайт для салона Elegance — это сочетание стиля и функциональности. Мы реализовали удобную онлайн-запись, подробные страницы услуг с ценами и портфолио мастеров, что позволило увеличить количество онлайн-бронирований на 40%."
  },
  {
    id: "gourmet-place-restaurant",
    title: "Gourmet Place",
    category: "Рестораны",
    coverImage: "https://placehold.co/600x400/000000/FFFFFF?text=Gourmet+Place",
    description: "Аппетитный сайт для ресторана высокой кухни.",
    inspiration: "Дизайн сайта вдохновлен самим искусством кулинарии: мы использовали 'вкусные' цвета, элегантную типографику и качественные фотографии блюд.",
    clientLogo: "https://placehold.co/150x50/FFFFFF/000000?text=Gourmet+Place+Logo",
    images: [
        "https://placehold.co/1200x800/000000/FFFFFF?text=Menu",
        "https://placehold.co/1200x800/000000/FFFFFF?text=Gallery",
    ],
    fullDescription: "Основной задачей было передать атмосферу ресторана Gourmet Place. Мы разработали интерактивное меню, фотогалерею, которая погружает в атмосферу заведения, и простую форму для бронирования столиков."
  }
];

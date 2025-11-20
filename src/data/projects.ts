export interface Project {
  id: string;
  title: string;
  category: "Комплексы" | "Кафе-рестораны";
  coverImage: string;
  description: string;
  inspiration: string;
  clientLogo: string;
  images: string[];
  fullDescription: string;
}

export const projects: Project[] = [
  {
    id: "aura-memoria",
    title: "Aura Memoria",
    category: "Комплексы",
    coverImage: "https://i.imgur.com/Cb1FLvT.png",
    description: "Комплексная цифровая экосистема для инновационного стартапа, объединяющего ветеринарную клинику и мемориальный парк.",
    inspiration: "Проект выполнен в мягких пастельных тонах, передающих спокойствие и заботу. Главной целью было создать интерфейс, который поддерживает пользователя на каждом этапе взаимодействия.",
    clientLogo: "https://placehold.co/150x50/FFFFFF/000000?text=Aura+Memoria",
    images: [
        "https://i.imgur.com/EpPThsp.png",
        "https://i.imgur.com/A9SHmA8.png",
        "https://i.imgur.com/BejiNN9.png",
        "https://i.imgur.com/wRfKEzI.png",
        "https://i.imgur.com/jlqRzCU.png",
    ],
    fullDescription: "Aura Memoria — это больше, чем просто сайт. Это полноценная платформа, включающая в себя систему авторизации, личный кабинет пользователя с историей посещений и управлением записями, а также мощную административную панель для управления клиникой. Мы реализовали плавную смену светлой и темной тем, чтобы интерфейс был комфортен в любое время суток. Особое внимание уделено странице ветеринарной клиники с возможностью онлайн-записи к врачам."
  },
  {
    id: "black-island",
    title: "Black Island",
    category: "Кафе-рестораны",
    coverImage: "https://placehold.co/600x400/1a1a1a/FFFFFF?text=Black+Island",
    description: "Концептуальный проект (в разработке).",
    inspiration: "Скоро здесь появится описание нового проекта.",
    clientLogo: "https://placehold.co/150x50/FFFFFF/000000?text=Black+Island",
    images: [],
    fullDescription: "Информация о проекте будет добавлена в ближайшее время."
  }
];

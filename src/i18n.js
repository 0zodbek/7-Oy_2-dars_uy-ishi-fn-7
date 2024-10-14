import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            welcome: "Welcome",
            greeting: "Hello, how are you?",
            header1: "Assets",
            header2: "Creators",
            header3: "Careers",
            header4: "Pro",
            heroTitle: "A Security Solution",
            heroSubtitle: "Keep track of your loved ones in real time!",
            waitlistTitle: "Join Our Waitlist!",
            waitlistDescription: "Be the first to get notified when the product is ready!",
            emailPlaceholder: "Your email address",
            joinButton: "Join List!",
            darkMode: "Dark Mode",
            lightMode: "Light Mode",
        },
    },
    uz: {
        translation: {
            welcome: "Xush kelibsiz",
            greeting: "Salom, qandaysiz?",
            header1: "Aktivlar",
            header2: "Ijodkorlar",
            header3: "Karyeralar",
            header4: "Pro",
            heroTitle: "Xavfsizlik yechimi",
            heroSubtitle: "Sevganlaringizni real vaqt rejimida kuzatib boring!",
            waitlistTitle: "Kutilayotgan ro'yxatga qo'shiling!",
            waitlistDescription: "Mahsulot tayyor bo'lganda birinchi bo'lib xabardor bo'ling!",
            emailPlaceholder: "Sizning elektron pochta manzilingiz",
            joinButton: "Ro'yxatdan o'tish!",
            darkMode: "Qorong'u rejim",
            lightMode: "Yorug' rejim",
        },
    },
    ru: {
        translation: {
            welcome: "Добро пожаловать",
            greeting: "Привет, как дела?",
            header1: "Активы",
            header2: "Создатели",
            header3: "Карьеры",
            header4: "Про",
            heroTitle: "Решение по безопасности",
            heroSubtitle: "Следите за своими близкими в реальном времени!",
            waitlistTitle: "Присоединяйтесь к нашему списку ожидания!",
            waitlistDescription: "Будьте первыми, кто узнает, когда продукт будет готов!",
            emailPlaceholder: "Ваш адрес электронной почты",
            joinButton: "Присоединиться к списку!",
            darkMode: "Темный режим",
            lightMode: "Светлый режим",
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
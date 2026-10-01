import { createContext, useContext } from "react";

export const LangContext = createContext({ lang: "EN", setLang: () => {}, t: {} });
export const useLang = () => useContext(LangContext);

export const translations = {
  EN: {
    nav: {
      features: "Features",
      premium: "Premium",
      roadmap: "Roadmap",
      creator: "Creators",
      download: "Download APK",
    },
    hero: {
      badge: "18+ · ADULT ENTERTAINMENT PLATFORM",
      lines: ["UNCENSORED", "PASSION.", "IN TRUE 4K."],
      subtitle:
        "High-definition ad-free streaming, offline downloads, direct creator uploads and exclusive short-form video — in one discreet Android app.",
      cta: "Download Velora APK",
      version: "v2.4.0",
      meta: "Android 8.0+ · Direct APK · Verified Malware-Free",
      scroll: "Scroll to explore",
    },
    marquee: [
      "AD-FREE 4K STREAMING",
      "OFFLINE DOWNLOADS",
      "CREATOR ECONOMY",
      "SHORT-FORM REELS",
      "PREMIUM VAULTS",
      "PRIVATE & DISCREET",
    ],
    features: {
      eyebrow: "WHY VELORA",
      title: "Everything you want. Nothing you don't.",
      sub: "A platform engineered around pure playback and creator freedom.",
      adFree: {
        title: "100% Ad-Free Experience",
        desc: "Zero popups, zero banners, zero interruptions. Pure continuous high-bitrate playback from the first second.",
        tag: "NO ADS. EVER.",
      },
      offline: {
        title: "Offline Downloads",
        desc: "Save your favorite scenes and shorts straight to your device, encrypted and secure.",
      },
      creator: {
        title: "Become a Creator",
        desc: "Upload your own content, build a loyal fanbase and keep 85%+ of your earnings.",
        cta: "Start creating",
      },
      shorts: {
        title: "Velora Shorts",
        desc: "Algorithmic infinite-scroll short-form feed tailored to your desires.",
      },
      discreet: {
        title: "Discreet by Design",
        desc: "Neutral icon, private library and incognito browsing built in.",
      },
      android: {
        title: "Made for Android",
        desc: "Native performance, gesture controls and background audio.",
      },
    },
    premium: {
      badge: "VELORA PREMIUM · VIP",
      title: "The Gold Standard of Desire",
      price: "$9.99",
      period: "Monthly VIP Pass",
      perks: [
        "4K Ultra HD streaming & master audio",
        "Exclusive premium-only content & vaults",
        "Gold community badge in all chats",
        "Priority bandwidth & early-access drops",
      ],
      cta: "Get Premium inside the app",
      note: "Activate your pass in the Velora app after installing the APK.",
      badgeChip: "GOLD MEMBER",
    },
    roadmap: {
      eyebrow: "ROADMAP",
      title: "What's coming next",
      sub: "Built in the open. Shipped straight to your app.",
      status: "In development",
      items: [
        {
          title: "Private Creator Chats",
          desc: "Exclusive 1-on-1 messaging and custom requests — Premium members only.",
          eta: "Q3 2026",
        },
        {
          title: "Automatic In-App Updates",
          desc: "Seamless background updates. No more manual APK reinstalls.",
          eta: "Q4 2026",
        },
        {
          title: "Safety & Reporting System",
          desc: "Proactive moderation protecting creator rights and user privacy.",
          eta: "Q4 2026",
        },
        {
          title: "Live Community Chat",
          desc: "Real-time rooms, live commentary and interactive events.",
          eta: "Q1 2027",
        },
      ],
    },
    modal: {
      title: "Install Velora",
      sub: "Direct APK download for Android",
      pending: "The APK file is being prepared. Check back shortly.",
      ready: "Ready to install",
      size: "Size",
      version: "Version",
      sha: "SHA-256 integrity",
      download: "Download APK now",
      stepsTitle: "Installation in 3 steps",
      steps: [
        "Tap download — the APK saves to your device.",
        "Allow installs from unknown sources when Android asks.",
        "Open the file and tap Install. Welcome to Velora.",
      ],
      close: "Close",
    },
    age: {
      badge: "ADULTS ONLY",
      title: "Are you 18 or older?",
      text: "Velora is an adult entertainment platform. By entering you confirm you are of legal age in your jurisdiction.",
      confirm: "I am 18+ — Enter",
      exit: "Exit",
    },
    footer: {
      tagline: "Premium video, zero compromise.",
      notice:
        "Velora is an adults-only (18+) platform. All featured content depicts verified consenting adults. By using Velora you agree to our terms and confirm your legal age.",
      rights: "© 2026 Velora. All rights reserved.",
      download: "Download",
      links: ["Features", "Premium", "Roadmap"],
    },
  },
  ES: {
    nav: {
      features: "Funciones",
      premium: "Premium",
      roadmap: "Hoja de Ruta",
      creator: "Creadores",
      download: "Descargar APK",
    },
    hero: {
      badge: "18+ · PLATAFORMA DE ENTRETENIMIENTO PARA ADULTOS",
      lines: ["PASIÓN", "SIN CENSURA.", "EN 4K REAL."],
      subtitle:
        "Streaming en alta definición sin anuncios, descargas offline, subidas directas de creadores y video corto exclusivo — en una app discreta para Android.",
      cta: "Descargar Velora APK",
      version: "v2.4.0",
      meta: "Android 8.0+ · APK directo · Verificado libre de malware",
      scroll: "Desliza para explorar",
    },
    marquee: [
      "STREAMING 4K SIN ANUNCIOS",
      "DESCARGAS OFFLINE",
      "ECONOMÍA DE CREADORES",
      "VIDEOS CORTOS",
      "BÓVEDAS PREMIUM",
      "PRIVADO Y DISCRETO",
    ],
    features: {
      eyebrow: "POR QUÉ VELORA",
      title: "Todo lo que quieres. Nada que no.",
      sub: "Una plataforma diseñada para la reproducción pura y la libertad del creador.",
      adFree: {
        title: "Experiencia 100% Sin Anuncios",
        desc: "Cero ventanas emergentes, cero banners, cero interrupciones. Reproducción fluida de alta tasa de bits desde el primer segundo.",
        tag: "SIN ANUNCIOS. NUNCA.",
      },
      offline: {
        title: "Descargas Offline",
        desc: "Guarda tus escenas y shorts favoritos directamente en tu dispositivo, cifrados y seguros.",
      },
      creator: {
        title: "Hazte Creador",
        desc: "Sube tu propio contenido, crea una comunidad fiel y conserva más del 85% de tus ganancias.",
        cta: "Empieza a crear",
      },
      shorts: {
        title: "Velora Shorts",
        desc: "Feed infinito de videos cortos adaptado a tus gustos y preferencias.",
      },
      discreet: {
        title: "Discreto por Diseño",
        desc: "Icono neutro, biblioteca privada y navegación incógnita integradas.",
      },
      android: {
        title: "Hecho para Android",
        desc: "Rendimiento nativo, controles por gestos y audio en segundo plano.",
      },
    },
    premium: {
      badge: "VELORA PREMIUM · VIP",
      title: "El Estándar de Oro del Deseo",
      price: "$9.99",
      period: "Pase VIP Mensual",
      perks: [
        "Streaming 4K Ultra HD y audio master",
        "Bóvedas y contenido exclusivo solo Premium",
        "Insignia dorada de comunidad en los chats",
        "Ancho de banda prioritario y estrenos anticipados",
      ],
      cta: "Activa Premium dentro de la app",
      note: "Activa tu pase en la app Velora después de instalar el APK.",
      badgeChip: "MIEMBRO ORO",
    },
    roadmap: {
      eyebrow: "HOJA DE RUTA",
      title: "Lo que viene",
      sub: "Construido abiertamente. Entregado directo a tu app.",
      status: "En desarrollo",
      items: [
        {
          title: "Chats Privados con Creadores",
          desc: "Mensajería exclusiva 1 a 1 y pedidos personalizados — solo miembros Premium.",
          eta: "Q3 2026",
        },
        {
          title: "Actualizaciones Automáticas en App",
          desc: "Actualizaciones en segundo plano. Sin reinstalar el APK manualmente.",
          eta: "Q4 2026",
        },
        {
          title: "Sistema de Seguridad y Reportes",
          desc: "Moderación proactiva que protege a creadores y tu privacidad.",
          eta: "Q4 2026",
        },
        {
          title: "Chat en Vivo de la Comunidad",
          desc: "Salas en tiempo real, comentarios en vivo y eventos interactivos.",
          eta: "Q1 2027",
        },
      ],
    },
    modal: {
      title: "Instala Velora",
      sub: "Descarga directa del APK para Android",
      pending: "El archivo APK se está preparando. Vuelve en breve.",
      ready: "Listo para instalar",
      size: "Tamaño",
      version: "Versión",
      sha: "Integridad SHA-256",
      download: "Descargar APK ahora",
      stepsTitle: "Instalación en 3 pasos",
      steps: [
        "Toca descargar — el APK se guarda en tu dispositivo.",
        "Permite instalar desde fuentes desconocidas cuando Android lo pida.",
        "Abre el archivo y toca Instalar. Bienvenido a Velora.",
      ],
      close: "Cerrar",
    },
    age: {
      badge: "SOLO ADULTOS",
      title: "¿Tienes 18 años o más?",
      text: "Velora es una plataforma de entretenimiento para adultos. Al entrar confirmas que tienes la edad legal en tu jurisdicción.",
      confirm: "Tengo 18+ — Entrar",
      exit: "Salir",
    },
    footer: {
      tagline: "Video premium, cero compromisos.",
      notice:
        "Velora es una plataforma solo para adultos (18+). Todo el contenido muestra adultos verificados y con consentimiento. Al usar Velora aceptas nuestros términos y confirmas tu edad legal.",
      rights: "© 2026 Velora. Todos los derechos reservados.",
      download: "Descargar",
      links: ["Funciones", "Premium", "Hoja de Ruta"],
    },
  },
};

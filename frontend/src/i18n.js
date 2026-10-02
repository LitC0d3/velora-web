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
      faq: "FAQ",
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
    stats: [
      { value: "0", label: "Ads. Ever." },
      { value: "4K", label: "Ultra HD streaming" },
      { value: "85%", label: "Creator payout" },
      { value: "8.0+", label: "Android compatible" },
    ],
    screens: {
      eyebrow: "INSIDE THE APP",
      title: "Designed for the dark.",
      sub: "Every screen is tuned for late-night viewing: deep blacks, violet accents and zero clutter.",
      items: [
        {
          title: "Your profile, your rules",
          desc: "Followers, uploads and your plan at a glance. Admins get a dedicated moderation panel with critical-report filters.",
          tags: ["Profile", "VIP perks", "Moderation"],
        },
        {
          title: "Premium video platform",
          desc: "A minimal, brand-forward launch screen that opens straight into your feed — no splash ads, no login walls.",
          tags: ["Instant launch", "Discreet", "Native"],
        },
      ],
      navTitle: "Six tabs. Everything.",
      navItems: ["Home", "Shorts", "Upload", "Search", "Library", "Profile"],
    },
    how: {
      eyebrow: "HOW IT WORKS",
      title: "From download to playback in under a minute.",
      steps: [
        {
          title: "Download the APK",
          desc: "Grab the latest signed build directly from this page. No store, no account, no tracking.",
        },
        {
          title: "Install & enter",
          desc: "Allow installs from unknown sources, open the file and confirm you're 18+. That's it.",
        },
        {
          title: "Watch, save, create",
          desc: "Stream in 4K, download for offline, upload your own scenes or unlock Premium for the full vault.",
        },
      ],
    },
    creatorHub: {
      eyebrow: "CREATOR HUB",
      title: "Your content. Your audience. Your revenue.",
      sub: "Velora is built for independent creators who want control without a middleman taking half.",
      points: [
        { title: "One-tap uploads", desc: "Upload from your gallery, add a title and tags, publish. 4K masters are preserved." },
        { title: "Keep 85%+", desc: "Transparent payouts with no hidden platform fees. You see every cent your content earns." },
        { title: "Grow your fanbase", desc: "Followers, likes and a public profile with your badge, country and stats." },
        { title: "Premium-only drops", desc: "Lock selected uploads behind Premium to reward your most loyal fans." },
      ],
      cta: "Start creating in the app",
      stat: "of earnings stay with you",
    },
    compare: {
      eyebrow: "FREE VS PREMIUM",
      title: "Pick your experience.",
      free: "Free",
      premium: "Premium",
      price: "$9.99 / month",
      freePrice: "$0 forever",
      rows: [
        { label: "Ad-free playback", free: true, premium: true },
        { label: "Offline downloads", free: true, premium: true },
        { label: "Upload & become a creator", free: true, premium: true },
        { label: "Velora Shorts feed", free: true, premium: true },
        { label: "4K Ultra HD + master audio", free: false, premium: true },
        { label: "Exclusive premium-only vaults", free: false, premium: true },
        { label: "Gold community badge", free: false, premium: true },
        { label: "Private creator chats (coming soon)", free: false, premium: true },
        { label: "Priority bandwidth & early drops", free: false, premium: true },
      ],
      ctaFree: "Download free",
      ctaPremium: "Unlock inside the app",
    },
    safety: {
      eyebrow: "SAFETY & PRIVACY",
      title: "Discreet. Protected. Consensual.",
      sub: "Adult entertainment demands a higher standard. We built Velora around it.",
      items: [
        { title: "18+ age verification", desc: "Strict age gate on web and in-app. Minors are never able to access content." },
        { title: "Encrypted library", desc: "Offline downloads are stored encrypted and only playable inside Velora." },
        { title: "Active moderation", desc: "Report any video in two taps. Critical reports are reviewed by a dedicated admin panel." },
        { title: "Verified creators", desc: "Every creator is identity-verified. All content depicts consenting adults." },
        { title: "Discreet mode", desc: "Neutral icon, private history and incognito browsing — nothing to explain." },
        { title: "No tracking", desc: "No third-party ad SDKs, no analytics brokers, no selling your data." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions, answered.",
      items: [
        {
          q: "Is the APK safe to install?",
          a: "Yes. Every build is signed and its SHA-256 checksum is published in the download dialog so you can verify integrity. We never bundle third-party ad SDKs.",
        },
        {
          q: "Android says 'install blocked' — what now?",
          a: "Go to Settings → Security (or Apps → Special access) → Install unknown apps, enable it for your browser or file manager, then open the APK again.",
        },
        {
          q: "Why isn't Velora on the Play Store?",
          a: "Adult content isn't permitted on Google Play. Direct APK distribution lets us ship uncensored content and update faster.",
        },
        {
          q: "How does Premium billing work?",
          a: "Premium costs $9.99 per month and is activated inside the app. You can cancel anytime from your profile — your perks remain until the end of the billing period.",
        },
        {
          q: "Can I use Velora offline?",
          a: "Absolutely. Download any scene or short to your encrypted library and watch without a connection.",
        },
        {
          q: "How do I become a creator?",
          a: "Tap Upload in the bottom bar, complete a quick identity verification, and start publishing. You keep 85%+ of what your content earns.",
        },
      ],
    },
    cta: {
      title: "Ready when you are.",
      sub: "Download Velora and experience premium video the way it was meant to be — uncensored, ad-free and in 4K.",
      button: "Download Velora APK",
      note: "Free · Android 8.0+ · 18+ only",
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
      links: ["Features", "Premium", "Roadmap", "FAQ"],
    },
  },
  ES: {
    nav: {
      features: "Funciones",
      premium: "Premium",
      roadmap: "Hoja de Ruta",
      creator: "Creadores",
      faq: "FAQ",
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
    stats: [
      { value: "0", label: "Anuncios. Nunca." },
      { value: "4K", label: "Streaming Ultra HD" },
      { value: "85%", label: "Pago al creador" },
      { value: "8.0+", label: "Compatible con Android" },
    ],
    screens: {
      eyebrow: "DENTRO DE LA APP",
      title: "Diseñada para la oscuridad.",
      sub: "Cada pantalla está pensada para ver de noche: negros profundos, acentos violeta y cero ruido.",
      items: [
        {
          title: "Tu perfil, tus reglas",
          desc: "Seguidores, subidas y tu plan de un vistazo. Los admins tienen un panel de moderación con filtro de reportes críticos.",
          tags: ["Perfil", "Beneficios VIP", "Moderación"],
        },
        {
          title: "Plataforma de video premium",
          desc: "Una pantalla de inicio minimalista que abre directo a tu feed — sin anuncios de arranque ni muros de registro.",
          tags: ["Inicio instantáneo", "Discreta", "Nativa"],
        },
      ],
      navTitle: "Seis pestañas. Todo.",
      navItems: ["Inicio", "Shorts", "Subir", "Buscar", "Biblioteca", "Perfil"],
    },
    how: {
      eyebrow: "CÓMO FUNCIONA",
      title: "De la descarga a la reproducción en menos de un minuto.",
      steps: [
        {
          title: "Descarga el APK",
          desc: "Obtén la última versión firmada directo desde esta página. Sin tienda, sin cuenta, sin rastreo.",
        },
        {
          title: "Instala y entra",
          desc: "Permite instalar desde fuentes desconocidas, abre el archivo y confirma que eres mayor de 18. Listo.",
        },
        {
          title: "Mira, guarda, crea",
          desc: "Transmite en 4K, descarga para ver offline, sube tus propias escenas o desbloquea Premium para la bóveda completa.",
        },
      ],
    },
    creatorHub: {
      eyebrow: "CENTRO DE CREADORES",
      title: "Tu contenido. Tu audiencia. Tus ingresos.",
      sub: "Velora está hecha para creadores independientes que quieren control sin intermediarios que se queden con la mitad.",
      points: [
        { title: "Subidas en un toque", desc: "Sube desde tu galería, añade título y etiquetas, publica. Los masters en 4K se conservan." },
        { title: "Conserva más del 85%", desc: "Pagos transparentes sin comisiones ocultas. Ves cada centavo que genera tu contenido." },
        { title: "Haz crecer tu comunidad", desc: "Seguidores, me gusta y un perfil público con tu insignia, país y estadísticas." },
        { title: "Estrenos solo Premium", desc: "Bloquea subidas seleccionadas detrás de Premium para premiar a tus fans más fieles." },
      ],
      cta: "Empieza a crear en la app",
      stat: "de las ganancias se quedan contigo",
    },
    compare: {
      eyebrow: "GRATIS VS PREMIUM",
      title: "Elige tu experiencia.",
      free: "Gratis",
      premium: "Premium",
      price: "$9.99 / mes",
      freePrice: "$0 para siempre",
      rows: [
        { label: "Reproducción sin anuncios", free: true, premium: true },
        { label: "Descargas offline", free: true, premium: true },
        { label: "Subir contenido y ser creador", free: true, premium: true },
        { label: "Feed de Velora Shorts", free: true, premium: true },
        { label: "4K Ultra HD + audio master", free: false, premium: true },
        { label: "Bóvedas exclusivas solo Premium", free: false, premium: true },
        { label: "Insignia dorada de comunidad", free: false, premium: true },
        { label: "Chats privados con creadores (próximamente)", free: false, premium: true },
        { label: "Ancho de banda prioritario y estrenos", free: false, premium: true },
      ],
      ctaFree: "Descargar gratis",
      ctaPremium: "Desbloquear en la app",
    },
    safety: {
      eyebrow: "SEGURIDAD Y PRIVACIDAD",
      title: "Discreto. Protegido. Consensuado.",
      sub: "El entretenimiento adulto exige un estándar más alto. Construimos Velora alrededor de él.",
      items: [
        { title: "Verificación 18+", desc: "Control de edad estricto en la web y en la app. Los menores nunca pueden acceder al contenido." },
        { title: "Biblioteca cifrada", desc: "Las descargas offline se guardan cifradas y solo se reproducen dentro de Velora." },
        { title: "Moderación activa", desc: "Reporta cualquier video en dos toques. Los reportes críticos se revisan en un panel de administración dedicado." },
        { title: "Creadores verificados", desc: "Cada creador verifica su identidad. Todo el contenido muestra adultos con consentimiento." },
        { title: "Modo discreto", desc: "Icono neutro, historial privado y navegación incógnita — nada que explicar." },
        { title: "Sin rastreo", desc: "Sin SDKs de anuncios, sin brokers de analítica, sin vender tus datos." },
      ],
    },
    faq: {
      eyebrow: "PREGUNTAS FRECUENTES",
      title: "Preguntas, respondidas.",
      items: [
        {
          q: "¿Es seguro instalar el APK?",
          a: "Sí. Cada versión está firmada y su checksum SHA-256 se publica en el diálogo de descarga para que verifiques su integridad. Nunca incluimos SDKs de anuncios de terceros.",
        },
        {
          q: "Android dice 'instalación bloqueada', ¿qué hago?",
          a: "Ve a Ajustes → Seguridad (o Apps → Acceso especial) → Instalar apps desconocidas, actívalo para tu navegador o gestor de archivos y vuelve a abrir el APK.",
        },
        {
          q: "¿Por qué Velora no está en Play Store?",
          a: "El contenido adulto no está permitido en Google Play. La distribución directa del APK nos permite ofrecer contenido sin censura y actualizar más rápido.",
        },
        {
          q: "¿Cómo funciona el cobro de Premium?",
          a: "Premium cuesta $9.99 al mes y se activa dentro de la app. Puedes cancelar en cualquier momento desde tu perfil — tus beneficios se mantienen hasta el final del período.",
        },
        {
          q: "¿Puedo usar Velora sin conexión?",
          a: "Por supuesto. Descarga cualquier escena o short a tu biblioteca cifrada y míralo sin conexión.",
        },
        {
          q: "¿Cómo me convierto en creador?",
          a: "Toca Subir en la barra inferior, completa una verificación rápida de identidad y empieza a publicar. Conservas más del 85% de lo que genera tu contenido.",
        },
      ],
    },
    cta: {
      title: "Lista cuando tú lo estés.",
      sub: "Descarga Velora y vive el video premium como debe ser — sin censura, sin anuncios y en 4K.",
      button: "Descargar Velora APK",
      note: "Gratis · Android 8.0+ · Solo 18+",
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
      links: ["Funciones", "Premium", "Hoja de Ruta", "FAQ"],
    },
  },
};

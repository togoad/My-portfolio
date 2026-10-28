const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");

function closeMenu() {
  if (!menuToggle || !primaryNavigation) return;
  menuToggle.setAttribute("aria-expanded", "false");
  primaryNavigation.classList.remove("is-open");
}

if (menuToggle && primaryNavigation) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    primaryNavigation.classList.toggle("is-open", !isExpanded);
  });

  primaryNavigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  document.addEventListener("click", (event) => {
    if (!primaryNavigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
}

const translations = {
  "Saltar al contenido": "Skip to content",
  "Menú": "Menu",
  "Perfil": "Profile",
  "Proyectos": "Projects",
  "Formación": "Education",
  "Currículum": "Resume",
  "Currículum y portfolio": "Résumé and portfolio",
  "Contacto": "Contact",
  "Ajustes": "Settings",
  "Idioma": "Language",
  "Aspecto": "Appearance",
  "Movimiento": "Motion",
  "Claro": "Light",
  "Oscuro": "Dark",
  "ASIR · Córdoba, España": "ASIR · Córdoba, Spain",
  "En formación": "In training",
  "Entender los sistemas.": "Understand systems.",
  "Aprender a protegerlos.": "Learn to protect them.",
  "Soy": "I’m",
  ", estudiante de Administración de Sistemas Informáticos en Red. Estoy construyendo una base técnica en sistemas y redes, con el objetivo de especializarme en ciberseguridad.": ", an IT Systems Administration student. I’m building a technical foundation in systems and networking, with the goal of specializing in cybersecurity.",
  "Explorar proyectos": "Explore projects",
  "Ver currículum": "View résumé",
  "Busco prácticas y oportunidades laborales iniciales.": "I’m looking for an internship and entry-level opportunities.",
  "formación": "education",
  "// en curso": "// in progress",
  "objetivo": "goal",
  "Entornos y enfoque": "Environments and focus",
  "Ciberseguridad": "Cybersecurity",
  "Aprender cómo funcionan los sistemas.": "Learn how systems work.",
  "Y cómo protegerlos.": "And how to protect them.",
  "Actualmente curso": "I’m currently studying",
  "en el IES Medina Azahara, Córdoba. Mi objetivo es continuar mi formación con una especialización en ciberseguridad.": "at IES Medina Azahara in Córdoba. My goal is to continue my education with a specialization in cybersecurity.",
  "Durante mi formación he instalado sistemas operativos y realizado tareas de configuración y administración con": "During my training, I have installed operating systems and carried out configuration and administration tasks using",
  "Linux y Windows": "Linux and Windows",
  ". También he realizado configuraciones de red y he obtenido certificaciones relacionadas con Cisco Packet Tracer.": ". I have also configured networks and earned certifications related to Cisco Packet Tracer.",
  "He realizado instalaciones, reparaciones y otras tareas técnicas de sistemas y redes.": "I have carried out installations, repairs, and other technical systems and networking tasks.",
  "Ver mi trayectoria completa": "View my full background",
  "Principios de trabajo": "Working principles",
  "Entender": "Understand",
  "Analizar el contexto antes de decidir cómo resolver un problema.": "Understand the context before deciding how to solve a problem.",
  "Construir": "Build",
  "Probar soluciones prácticas y documentar lo aprendido.": "Try practical solutions and document what I learn.",
  "Mejorar": "Improve",
  "Revisar el resultado y seguir aprendiendo con criterio.": "Review the outcome and keep learning with purpose.",
  "Portfolio": "Portfolio",
  "Proyectos, pruebas": "Projects, experiments",
  "y aprendizaje aplicado.": "and applied learning.",
  "Experiencia práctica en sistemas operativos, administración, redes y soporte técnico.": "Hands-on experience with operating systems, administration, networking, and technical support.",
  "SOPORTE TÉCNICO": "TECHNICAL SUPPORT",
  "SISTEMAS": "SYSTEMS",
  "REDES": "NETWORKING",
  "INSTALACIONES / REPARACIONES": "INSTALLATIONS / REPAIRS",
  "Instalación y reparación de equipos": "Computer installation and repair",
  "He realizado instalaciones y reparaciones, incluida la instalación de sistemas operativos y tareas de configuración y administración.": "I have carried out installations and repairs, including operating system installations and configuration and administration tasks.",
  "Ámbito": "Area",
  "Sistemas y soporte técnico": "Systems and technical support",
  "Áreas": "Focus areas",
  "Instalación, configuración y administración": "Installation, configuration, and administration",
  "Ver ficha de proyecto": "View project details",
  "Prácticas con sistemas operativos": "Operating systems work",
  "Instalación, configuración y administración de sistemas operativos Linux y Windows.": "Installation, configuration, and administration of Linux and Windows operating systems.",
  "Sistemas": "Systems",
  "Linux y Windows": "Linux and Windows",
  "Administración de sistemas": "Systems administration",
  "Prácticas de redes": "Networking work",
  "He realizado configuraciones de red y cuento con certificaciones relacionadas con Packet Tracer.": "I have configured networks and hold certifications related to Packet Tracer.",
  "Herramienta": "Tool",
  "Redes y conectividad": "Networking and connectivity",
  "Las fichas detalladas incluyen espacios para añadir los pasos, configuraciones y evidencias de cada práctica.": "The detailed project pages include space to add steps, configurations, and evidence.",
  "Trayectoria": "Background",
  "Una base técnica.": "A technical foundation.",
  "Un siguiente reto.": "A new challenge.",
  "Mi prioridad ahora es afianzar conocimientos de sistemas y redes y seguir desarrollándome en ciberseguridad.": "My current priority is to strengthen my systems and networking knowledge and continue developing in cybersecurity.",
  "Ver currículum completo": "View full résumé",
  "ASIR · EN CURSO": "ASIR · IN PROGRESS",
  "Administración de Sistemas Informáticos en Red (ASIR)": "IT Systems Administration (ASIR)",
  "IES Medina Azahara": "IES Medina Azahara",
  "Córdoba, España": "Córdoba, Spain",
  "Sistemas y redes": "Systems and networking",
  "Redes": "Networking",
  "Redes.": "Networking.",
  "Configuración de redes": "Network configuration",
  "Linux y Windows.": "Linux and Windows.",
  "Administración de sistemas.": "Systems administration.",
  "Formación en instalación y administración de sistemas y configuración de redes.": "Training in system installation and administration, and network configuration.",
  "SIGUIENTE OBJETIVO": "NEXT GOAL",
  "Especialización en ciberseguridad": "Cybersecurity specialization",
  "Formación futura": "Future education",
  "Continuar mi recorrido con un curso de especialización en ciberseguridad.": "Continue my path with a cybersecurity specialization course.",
  "Enfoque": "Focus",
  "Áreas que quiero": "Areas I want to",
  "seguir explorando.": "keep exploring.",
  "01 / Sistemas operativos": "01 / Operating systems",
  "Instalación, configuración y administración en entornos Linux y Windows.": "Installation, configuration, and administration in Linux and Windows environments.",
  "02 / Redes": "02 / Networking",
  "Configuración de redes y uso de Cisco Packet Tracer.": "Network configuration and use of Cisco Packet Tracer.",
  "03 / Áreas de interés": "03 / Areas of interest",
  "Ciberseguridad, sistemas, redes, soporte técnico e instalación y reparación de equipos.": "Cybersecurity, systems, networking, technical support, and computer installation and repair.",
  "04 / Idiomas": "04 / Languages",
  "Español: idioma principal. Inglés: nivel medio.": "Spanish: native language. English: intermediate level.",
  "¿Hablamos de": "Shall we talk about",
  "tecnología?": "technology?",
  "Busco oportunidades laborales y un lugar donde realizar las prácticas de ASIR. Me interesan los sistemas, las redes, el soporte técnico y la ciberseguridad.": "I’m looking for work opportunities and a place to complete my ASIR internship. I’m interested in systems, networking, technical support, and cybersecurity.",
  "Consultar mi currículum": "View my résumé",
  "Consultar currículum": "View résumé",
  "Inicio": "Home",
  "Currículum online": "Online résumé",
  "Arriba": "Back to top",
  "Currículum y proyectos": "Résumé and projects",
  "Volver al inicio": "Back to home",
  "← Volver al inicio": "← Back to home",
  "CURRÍCULUM TÉCNICO": "TECHNICAL RÉSUMÉ",
  "Estudiante de ASIR": "ASIR student",
  "Sistemas, redes y ciberseguridad": "Systems, networking, and cybersecurity",
  "Estoy cursando Administración de Sistemas Informáticos en Red en el IES Medina Azahara, en Córdoba. He realizado instalaciones de sistemas operativos, reparaciones, tareas de administración y configuraciones de redes con Linux, Windows y Cisco Packet Tracer. Busco una primera oportunidad laboral y un lugar donde realizar las prácticas de ASIR.": "I’m studying IT Systems Administration at IES Medina Azahara in Córdoba. I have installed operating systems, repaired equipment, carried out administration tasks, and configured networks using Linux, Windows, and Cisco Packet Tracer. I’m looking for an early-career opportunity and a place to complete my ASIR internship.",
  "Experiencia práctica": "Practical experience",
  "Estoy al inicio de mi trayectoria profesional y he adquirido experiencia práctica en sistemas, reparación y redes.": "I’m at the beginning of my professional journey and have gained hands-on experience with systems, repairs, and networking.",
  "Instalación y configuración de sistemas": "System installation and configuration",
  "Córdoba": "Córdoba",
  "Instalación de sistemas operativos.": "Operating system installation.",
  "Configuración y administración de equipos y sistemas.": "Computer and system configuration and administration.",
  "Sistemas operativos y redes": "Operating systems and networking",
  "He trabajado con Linux y Windows y realizado configuraciones de red con Cisco Packet Tracer.": "I have worked with Linux and Windows and configured networks using Cisco Packet Tracer.",
  "En curso": "In progress",
  "Formación en sistemas y redes, con conocimientos de instalación, configuración y administración en Linux y Windows, además de configuración de redes.": "Training in systems and networking, including installation, configuration, and administration in Linux and Windows, as well as network configuration.",
  "Conocimientos técnicos": "Technical skills",
  "Redes · Cisco Packet Tracer": "Networking · Cisco Packet Tracer",
  "Herramientas para instalación y reparación": "Installation and repair tools",
  "Conocimientos adquiridos durante la formación y en tareas prácticas.": "Skills developed through training and hands-on tasks.",
  "Áreas de interés": "Areas of interest",
  "Soporte técnico": "Technical support",
  "Instalación y reparación": "Installation and repair",
  "Idiomas": "Languages",
  "Español": "Spanish",
  "Principal": "Native",
  "Inglés": "English",
  "Medio": "Intermediate",
  "Certificaciones": "Certifications",
  "01 / GENERALES Y TITULACIONES": "01 / GENERAL AND QUALIFICATIONS",
  "Certificaciones generales y titulaciones": "General certifications and qualifications",
  "Certificaciones relacionadas con redes y simulación de topologías.": "Certifications related to networking and topology simulation.",
  "La formación de ASIR aparece en el apartado de formación.": "ASIR education is listed in the education section.",
  "02 / PROGRAMACIÓN": "02 / PROGRAMMING",
  "Certificaciones en programación": "Programming certifications",
  "Actualmente no tengo certificaciones en programación.": "I do not currently hold any programming certifications.",
  "EVIDENCIAS": "PROJECT EVIDENCE",
  "Portfolio de proyectos": "Project portfolio",
  "Una ficha clara por proyecto ayuda a entender qué hiciste, cómo lo hiciste y dónde se puede ver.": "A clear page for each project helps explain what you did, how you did it, and where to see it.",
  "Instalación de sistemas operativos y tareas de configuración y administración, además de reparaciones de equipos.": "Operating system installation, configuration and administration tasks, and computer repairs.",
  "Ámbito técnico": "Technical area",
  "Sistemas y soporte técnico.": "Systems and technical support.",
  "Mi aportación": "My contribution",
  "Instalación de sistemas operativos, configuración y administración.": "Operating system installation, configuration, and administration.",
  "Sistemas.": "Systems.",
  "Aplicación práctica de conocimientos de ASIR.": "Practical application of ASIR knowledge.",
  "Administración de sistemas operativos": "Operating system administration",
  "Instalación, configuración y administración de sistemas operativos.": "Installation, configuration, and administration of operating systems.",
  "Entornos": "Environments",
  "Instalación y configuración de sistemas.": "System installation and configuration.",
  "Competencia": "Skill",
  "Área técnica": "Technical area",
  "Configuración de redes con Cisco Packet Tracer y conocimientos relacionados con conectividad.": "Network configuration with Cisco Packet Tracer and connectivity knowledge.",
  "Redes y conectividad.": "Networking and connectivity.",
  "Configuración de redes con Cisco Packet Tracer.": "Network configuration with Cisco Packet Tracer.",
  "Cisco Packet Tracer.": "Cisco Packet Tracer.",
  "Certificaciones relacionadas con Packet Tracer.": "Certifications related to Packet Tracer.",
  "Puedes duplicar estas fichas para añadir nuevos proyectos, prácticas o evidencias técnicas.": "You can duplicate these project pages to add new projects or technical evidence.",
  "Volver al inicio": "Back to home",
  "Animaciones: activadas": "Animations: on",
  "Animaciones: desactivadas": "Animations: off",
  "Perfil profesional": "Professional profile",
  "Lo esencial para": "The essentials to",
  "conocer mi perfil.": "understand my profile.",
  "Resumen para empresas": "Employer summary",
  "Soy estudiante de ASIR en el IES Medina Azahara y busco prácticas u oportunidades laborales iniciales. Tengo experiencia práctica en instalación y reparación de equipos, administración de sistemas Linux y Windows, y configuración de redes con Cisco Packet Tracer. Me interesan los sistemas, las redes, el soporte técnico y la ciberseguridad.": "I’m an ASIR student at IES Medina Azahara looking for an internship or an entry-level opportunity. I have practical experience installing and repairing equipment, administering Linux and Windows systems, and configuring networks with Cisco Packet Tracer. I’m interested in systems, networking, technical support, and cybersecurity.",
  "Contactar para oportunidades": "Contact me about opportunities",
  "Objetivo": "Goal",
  "Prácticas y oportunidades iniciales": "Internships and entry-level opportunities",
  "Español · Inglés intermedio": "Spanish · Intermediate English",
  "Consulta mi portfolio": "Explore my portfolio",
  "Respuestas del portfolio": "Portfolio answers",
  "¿Qué quieres saber de Adrián?": "What would you like to know about Adrián?",
  "Respuestas fijas sobre Adrián y la información publicada en este portfolio.": "Fixed answers about Adrián and the information published in this portfolio.",
  "Preguntas frecuentes": "Frequently asked questions",
  "¿Qué conocimientos tiene?": "What skills does he have?",
  "¿Qué oportunidades busca?": "What opportunities is he looking for?",
  "¿Qué proyectos aparecen?": "What projects are featured?",
  "Hola. Elige una pregunta o escribe un tema. Las respuestas se basan en la información publicada en este portfolio.": "Hello. Choose a question or type a topic. Answers are based on information published in this portfolio.",
  "Pregunta por formación, proyectos, conocimientos…": "Ask about education, projects, or skills…",
  "Escribe una pregunta sobre Adrián": "Write a question about Adrián",
  "Enviar": "Send",
  "Respuestas predefinidas · Tu pregunta no se envía a ningún servicio externo.": "Predefined answers · Your question is not sent to an external service.",
};

const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.nodeValue.trim()) textNodes.push({ node, spanish: node.nodeValue });
}

function savePreference(key, value) {
  try { localStorage.setItem(key, value); } catch (_) { /* Storage may be disabled. */ }
}

function translatePage(language) {
  document.documentElement.lang = language;
  textNodes.forEach(({ node, spanish }) => {
    if (language === "es") {
      node.nodeValue = spanish;
      return;
    }
    const key = spanish.trim().replace(/\s+/g, " ");
    const translation = translations[key];
    if (!translation) return;
    const leading = spanish.match(/^\s*/)?.[0] ?? "";
    const trailing = spanish.match(/\s*$/)?.[0] ?? "";
    node.nodeValue = `${leading}${translation}${trailing}`;
  });

  const isResume = document.body.classList.contains("cv-page");
  const pageMeta = isResume
    ? {
        title: "Adrián Torres — Résumé and Projects",
        description: "Online résumé and technical portfolio of Adrián Torres, an ASIR student interested in cybersecurity.",
        socialTitle: "Adrián Torres — Résumé and projects",
        socialDescription: "Education, skills, and technical projects by Adrián Torres."
      }
    : {
        title: "Adrián Torres — Systems and Cybersecurity",
        description: "Portfolio of Adrián Torres, an IT Systems Administration student interested in cybersecurity.",
        socialTitle: "Adrián Torres — Systems and cybersecurity",
        socialDescription: "Education, projects, and background of Adrián Torres."
      };
  document.title = language === "en" ? pageMeta.title : (isResume ? "Adrián Torres — Currículum y proyectos" : "Adrián Torres — Sistemas y ciberseguridad");
  document.querySelector('meta[name="description"]')?.setAttribute("content", language === "en" ? pageMeta.description : (isResume ? "Currículum y portfolio técnico de Adrián Torres, estudiante de ASIR interesado en ciberseguridad." : "Portfolio de Adrián Torres, estudiante de Administración de Sistemas Informáticos en Red con interés en ciberseguridad."));
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", language === "en" ? pageMeta.socialTitle : (isResume ? "Adrián Torres — Currículum y proyectos" : "Adrián Torres — Sistemas y ciberseguridad"));
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", language === "en" ? pageMeta.socialDescription : (isResume ? "Formación, conocimientos y proyectos técnicos de Adrián Torres." : "Formación, proyectos y trayectoria de Adrián Torres."));

  const labels = language === "en"
    ? {
        ".brand[aria-label]": isResume ? "Adrián Torres, back to home" : "Adrián Torres, home",
        "#primary-navigation": "Primary navigation",
        ".hero-visual": "Profile panel for Adrián Torres",
        ".terminal-body": "Profile details",
        ".breadcrumbs": "Breadcrumb",
        ".summary-tags": "Areas and tools",
        ".employer-facts": "Key details",
        ".assistant-suggestions": "Frequently asked questions"
      }
    : {
        ".brand[aria-label]": isResume ? "Adrián Torres, volver al inicio" : "Adrián Torres, inicio",
        "#primary-navigation": "Navegación principal",
        ".hero-visual": "Panel de perfil de Adrián Torres",
        ".terminal-body": "Datos del perfil",
        ".breadcrumbs": "Ruta de navegación",
        ".summary-tags": "Áreas y herramientas",
        ".employer-facts": "Datos destacados",
        ".assistant-suggestions": "Preguntas frecuentes"
      };
  Object.entries(labels).forEach(([selector, label]) => {
    document.querySelector(selector)?.setAttribute("aria-label", label);
  });

  document.querySelectorAll("[data-language-choice]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.languageChoice === language));
  });
  const motionLabel = document.querySelector("[data-motion-label]");
  if (motionLabel) {
    const isOn = document.documentElement.dataset.animations !== "off";
    motionLabel.textContent = language === "en"
      ? (isOn ? "Animations: on" : "Animations: off")
      : (isOn ? "Animaciones: activadas" : "Animaciones: desactivadas");
  }

  document.querySelectorAll("[data-assistant-question-es]").forEach((button) => {
    button.dataset.assistantQuestion = language === "en" ? button.dataset.assistantQuestionEn : button.dataset.assistantQuestionEs;
  });
  const assistantInput = document.querySelector("#assistant-question");
  const assistantClose = document.querySelector("[data-assistant-close]");
  const assistantSend = document.querySelector("[data-assistant-form] button[type='submit']");
  if (assistantInput) assistantInput.placeholder = language === "en" ? "Ask about education, projects, or skills…" : "Pregunta por formación, proyectos, conocimientos…";
  if (assistantClose) assistantClose.setAttribute("aria-label", language === "en" ? "Close assistant" : "Cerrar asistente");
  if (assistantSend) assistantSend.setAttribute("aria-label", language === "en" ? "Send question" : "Enviar pregunta");
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  savePreference("portfolio-theme", theme);
  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.themeChoice === theme));
  });
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#080c18" : "#f5f7ff");
}

function setAnimations(enabled) {
  const value = enabled ? "on" : "off";
  document.documentElement.dataset.animations = value;
  savePreference("portfolio-motion", value);
  const button = document.querySelector("[data-motion-toggle]");
  if (button) button.setAttribute("aria-pressed", String(enabled));
  const label = document.querySelector("[data-motion-label]");
  if (label) {
    const language = document.documentElement.lang;
    label.textContent = language === "en"
      ? (enabled ? "Animations: on" : "Animations: off")
      : (enabled ? "Animaciones: activadas" : "Animaciones: desactivadas");
  }
}

document.querySelectorAll("[data-language-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.languageChoice;
    savePreference("portfolio-language", language);
    translatePage(language);
  });
});

document.querySelectorAll("[data-theme-choice]").forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.themeChoice));
});

document.querySelector("[data-motion-toggle]")?.addEventListener("click", (event) => {
  const button = event.currentTarget;
  setAnimations(button.getAttribute("aria-pressed") !== "true");
});

setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
setAnimations(document.documentElement.dataset.animations !== "off");
translatePage(document.documentElement.lang === "en" ? "en" : "es");

const assistantPanel = document.querySelector("[data-assistant-panel]");
const assistantLauncher = document.querySelector("[data-assistant-open]");
const assistantMessages = document.querySelector("[data-assistant-messages]");
const assistantForm = document.querySelector("[data-assistant-form]");
const assistantInput = document.querySelector("#assistant-question");

const fixedPortfolioAnswers = [
  {
    topics: ["certificaciones de programacion", "certificado de programacion", "certificaciones en programacion", "programacion", "programming", "coding"],
    es: "Actualmente no tengo certificaciones en programación. El portfolio no detalla conocimientos o proyectos específicos de programación.",
    en: "I do not currently hold programming certifications. The portfolio does not list specific programming skills or projects."
  },
  {
    topics: ["contacto", "contactar", "correo", "email", "e mail", "contact"],
    es: "Puedes contactar con Adrián en atorgom3001@gmail.com. También encontrarás el enlace de contacto al final de la página.",
    en: "You can contact Adrián at atorgom3001@gmail.com. The contact link is also available at the bottom of the page."
  },
  {
    topics: ["idioma", "idiomas", "ingles", "espanol", "languages", "english", "spanish"],
    es: "El español es su idioma principal y tiene un nivel medio de inglés.",
    en: "Spanish is his primary language, and he has an intermediate level of English."
  },
  {
    topics: ["certificacion", "certificaciones", "certificado", "certificados", "cisco", "packet tracer", "certification", "certifications"],
    es: "El portfolio recoge certificaciones relacionadas con redes y Cisco Packet Tracer. Actualmente no hay certificaciones de programación publicadas.",
    en: "The portfolio lists certifications related to networking and Cisco Packet Tracer. No programming certifications are currently listed."
  },
  {
    topics: ["formacion", "estudios", "estudiar", "estudia", "centro", "asir", "education", "studies", "study", "school", "ies", "medina azahara", "cordoba", "ubicacion", "location", "vive", "live", "lives"],
    es: "Adrián estudia Administración de Sistemas Informáticos en Red (ASIR) en el IES Medina Azahara, en Córdoba.",
    en: "Adrián is studying IT Systems Administration (ASIR) at IES Medina Azahara in Córdoba, Spain."
  },
  {
    topics: ["proyecto", "proyectos", "portfolio", "projects", "project"],
    es: "El portfolio presenta tres áreas: instalación y reparación de equipos; instalación, configuración y administración de sistemas Linux y Windows; y configuración de redes con Cisco Packet Tracer.",
    en: "The portfolio features three areas: computer installation and repair; installation, configuration, and administration of Linux and Windows systems; and network configuration with Cisco Packet Tracer."
  },
  {
    topics: ["oportunidad", "oportunidades", "practicas", "trabajo", "empleo", "busca", "objetivo", "internship", "job", "opportunities", "looking for"],
    es: "Busca un lugar donde realizar las prácticas de ASIR y oportunidades laborales iniciales. Le interesan los sistemas, las redes, el soporte técnico y la ciberseguridad.",
    en: "He is looking for a place to complete his ASIR internship and for entry-level job opportunities. His interests include systems, networking, technical support, and cybersecurity."
  },
  {
    topics: ["experiencia", "reparacion", "reparaciones", "instalacion", "instalaciones", "experiencia laboral", "experience", "repairs", "installations", "work history", "employment"],
    es: "El portfolio recoge experiencia práctica en instalación y reparación de equipos, instalación de sistemas operativos y tareas de configuración y administración.",
    en: "The portfolio describes hands-on experience installing and repairing equipment, installing operating systems, and carrying out configuration and administration tasks."
  },
  {
    topics: ["conocimiento", "conocimientos", "conoces", "habilidad", "habilidades", "herramienta", "herramientas", "tecnologia", "tecnologias", "linux", "windows", "redes", "sistemas", "packet tracer", "skills", "knowledge", "know", "networking", "tools", "technology", "technical", "software", "programa", "programas"],
    es: "Tiene experiencia práctica con Linux y Windows, instalación y administración de sistemas, configuración de redes con Cisco Packet Tracer, soporte técnico e instalación y reparación de equipos.",
    en: "He has hands-on experience with Linux and Windows, system installation and administration, network configuration with Cisco Packet Tracer, technical support, and computer installation and repair."
  },
  {
    topics: ["interes", "interesa", "intereses", "ciberseguridad", "especializar", "cybersecurity", "interests", "interested"],
    es: "Sus áreas de interés son la ciberseguridad, los sistemas, las redes, el soporte técnico y la instalación y reparación de equipos.",
    en: "His areas of interest are cybersecurity, systems, networking, technical support, and computer installation and repair."
  },
  {
    topics: ["curriculum", "curriculo", "resume", "cv"],
    es: "El currículum completo se consulta en el apartado «Currículum» del menú superior. No se descarga ningún archivo.",
    en: "The full résumé is available in the “Résumé” section of the top menu. No file is downloaded."
  },
  {
    topics: ["perfil", "quien es", "quien eres", "sobre adrian", "about", "profile", "background"],
    es: "Adrián Torres es estudiante de ASIR en Córdoba. Está desarrollando una base técnica en sistemas y redes, y quiere especializarse en ciberseguridad.",
    en: "Adrián Torres is an ASIR student in Córdoba, Spain. He is building a technical foundation in systems and networking, with the goal of specializing in cybersecurity."
  }
];

function normalizePortfolioQuestion(value) {
  return value
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getFixedPortfolioAnswer(question, language) {
  const normalizedQuestion = ` ${normalizePortfolioQuestion(question)} `;
  const match = fixedPortfolioAnswers.find(({ topics }) => topics.some((topic) => {
    const normalizedTopic = normalizePortfolioQuestion(topic);
    return normalizedQuestion.includes(` ${normalizedTopic} `);
  }));

  if (match) return language === "en" ? match.en : match.es;
  return language === "en"
    ? "I can answer predefined questions about Adrián’s profile, skills, projects, education, certifications, languages, interests, and contact details. Try one of those topics."
    : "Puedo responder preguntas predefinidas sobre el perfil, los conocimientos, los proyectos, la formación, las certificaciones, los idiomas, los intereses y el contacto de Adrián. Prueba con uno de esos temas.";
}

function setAssistantOpen(open) {
  if (!assistantPanel || !assistantLauncher) return;
  assistantPanel.hidden = !open;
  assistantLauncher.setAttribute("aria-expanded", String(open));
  if (open) window.setTimeout(() => assistantInput?.focus(), 30);
  else assistantLauncher.focus();
}

function addAssistantMessage(content, role) {
  if (!assistantMessages) return;
  const message = document.createElement("p");
  message.className = role === "user" ? "assistant-message assistant-message-user" : "assistant-message";
  message.textContent = content;
  assistantMessages.append(message);
  assistantMessages.scrollTop = assistantMessages.scrollHeight;
}

function answerPortfolioQuestion(question) {
  const language = document.documentElement.lang;
  addAssistantMessage(question, "user");
  addAssistantMessage(getFixedPortfolioAnswer(question, language), "assistant");
  assistantInput?.focus();
}

assistantLauncher?.addEventListener("click", () => setAssistantOpen(assistantPanel?.hidden ?? true));
document.querySelector("[data-assistant-close]")?.addEventListener("click", () => setAssistantOpen(false));
assistantForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = assistantInput?.value.trim();
  if (!question) return;
  assistantInput.value = "";
  answerPortfolioQuestion(question);
});
document.querySelectorAll("[data-assistant-question]").forEach((button) => {
  button.addEventListener("click", () => answerPortfolioQuestion(button.dataset.assistantQuestion));
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && assistantPanel && !assistantPanel.hidden) setAssistantOpen(false);
});

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());

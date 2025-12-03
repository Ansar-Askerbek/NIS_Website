    const defaultConfig = {
      background_color: "#ffffff",
      surface_color: "#f8fefb",
      text_color: "#0a0a0a",
      primary_color: "#0EC772",
      secondary_color: "#0BAA5A",
      font_family: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', system-ui, sans-serif",
      font_size: 16,
      hero_title: "NIS Almaty–Nauryzbay — Smart School Platform",
      hero_subtitle: "Инновационная школьная экосистема с системой шаныраков",
      shanyrak_title: "Шанырақ жүйесі — цифровая рейтинг-платформа",
      shanyrak_description: "Лидеры вводят достижения. Кураторы подтверждают. Система автоматически считает баллы",
      about_title: "О школе"
    };

async function onConfigChange(config) {
  const baseFont = config.font_family || defaultConfig.font_family;
  const baseSize = config.font_size || defaultConfig.font_size;
  const bgColor = config.background_color || defaultConfig.background_color;
  const surfaceColor = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryColor = config.primary_color || defaultConfig.primary_color;
  const secondaryColor = config.secondary_color || defaultConfig.secondary_color;
  
  // Apply font
  document.body.style.fontFamily = baseFont;
  document.body.style.fontSize = `${baseSize}px`;
  
  // Apply colors
  document.body.style.background = bgColor;
  document.body.style.color = textColor;
  
  // Apply surface colors
  const surfaceElements = document.querySelectorAll('.hero, .shanyrak-section, .about-section, footer');
  surfaceElements.forEach(el => {
    if (el.classList.contains('hero')) {
      el.style.background = `linear-gradient(180deg, ${bgColor} 0%, ${surfaceColor} 100%)`;
    } else if (el.classList.contains('shanyrak-section')) {
      el.style.background = `linear-gradient(180deg, ${surfaceColor} 0%, ${bgColor} 50%, ${surfaceColor} 100%)`;
    } else if (el.classList.contains('about-section')) {
      el.style.background = `linear-gradient(180deg, ${bgColor} 0%, ${surfaceColor} 100%)`;
    } else if (el.tagName === 'FOOTER') {
      el.style.background = `linear-gradient(180deg, ${surfaceColor} 0%, ${bgColor} 100%)`;
    }
  });
  
  // Apply primary color to gradients
  const primaryElements = document.querySelectorAll('.btn-primary, .nav-logo, .ranking-number, .feature-icon, .dashboard-badge');
  primaryElements.forEach(el => {
    if (el.classList.contains('btn-primary')) {
      el.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`;
    } else if (el.classList.contains('nav-logo')) {
      el.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`;
      el.style.webkitBackgroundClip = 'text';
      el.style.webkitTextFillColor = 'transparent';
      el.style.backgroundClip = 'text';
    } else if (el.classList.contains('ranking-number') || el.classList.contains('feature-icon') || el.classList.contains('dashboard-badge')) {
      el.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`;
    }
  });
  
  // Apply font sizes proportionally
  const h1Elements = document.querySelectorAll('.hero-content h1');
  h1Elements.forEach(el => el.style.fontSize = `${baseSize * 4.25}px`);
  const h2Elements = document.querySelectorAll('.section-header h2');
  h2Elements.forEach(el => el.style.fontSize = `${baseSize * 3.5}px`);
  const h3Elements = document.querySelectorAll('.shanyrak-info h3, .about-card h3');
  h3Elements.forEach(el => el.style.fontSize = `${baseSize * 2.25}px`);
  const pElements = document.querySelectorAll('.hero-content p, .section-header p, .shanyrak-info p');
  pElements.forEach(el => el.style.fontSize = `${baseSize * 1.25}px`);
  
  // Update text content
  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) heroTitle.textContent = config.hero_title || defaultConfig.hero_title;
  const heroSubtitle = document.getElementById('hero-subtitle');
  if (heroSubtitle) heroSubtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
  const shanyrakTitle = document.getElementById('shanyrak-title');
  if (shanyrakTitle) shanyrakTitle.textContent = config.shanyrak_title || defaultConfig.shanyrak_title;
  const shanyrakDescription = document.getElementById('shanyrak-description');
  if (shanyrakDescription) shanyrakDescription.textContent = config.shanyrak_description || defaultConfig.shanyrak_description;
  const aboutTitle = document.getElementById('about-title');
  if (aboutTitle) aboutTitle.textContent = config.about_title || defaultConfig.about_title;
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
          config.background_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ background_color: value });
          }
        }
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (value) => {
          config.surface_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ surface_color: value });
          }
        }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ text_color: value });
          }
        }
      },
      {
        get: () => config.primary_color || defaultConfig.primary_color,
        set: (value) => {
          config.primary_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ primary_color: value });
          }
        }
      },
      {
        get: () => config.secondary_color || defaultConfig.secondary_color,
        set: (value) => {
          config.secondary_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ secondary_color: value });
          }
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => {
        config.font_family = value;
        if (window.elementSdk) {
          window.elementSdk.setConfig({ font_family: value });
        }
      }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => {
        config.font_size = value;
        if (window.elementSdk) {
          window.elementSdk.setConfig({ font_size: value });
        }
      }
    }
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["hero_title", config.hero_title || defaultConfig.hero_title],
    ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
    ["shanyrak_title", config.shanyrak_title || defaultConfig.shanyrak_title],
    ["shanyrak_description", config.shanyrak_description || defaultConfig.shanyrak_description],
    ["about_title", config.about_title || defaultConfig.about_title]
  ]);
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
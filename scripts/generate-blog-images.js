/**
 * Generate PROFESSIONAL branded WebP blog images for n8nera.tech
 * Features: Rich gradients, geometric patterns, category icons,
 *           glowing orbs, modern typography, decorative elements
 *
 * Usage:  node scripts/generate-blog-images.js
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const OUT_DIR = path.join(__dirname, "..", "public", "images", "blog");

// ──────────────────────────────────────────────────────────────────────
// CATEGORY THEMES — each has unique gradient, pattern, icon & vibe
// ──────────────────────────────────────────────────────────────────────
const themes = {
  ai: {
    bg1: "#0a0f1e", bg2: "#111b3a", bg3: "#1a1040",
    accent: "#7c3aed", accent2: "#a78bfa", accent3: "#c4b5fd",
    glow: "#7c3aed", badge: "AI & Automation",
    emoji: "brain", pattern: "neural"
  },
  integration: {
    bg1: "#071a1f", bg2: "#0c2a35", bg3: "#0a2030",
    accent: "#06b6d4", accent2: "#22d3ee", accent3: "#67e8f9",
    glow: "#06b6d4", badge: "Integration",
    emoji: "link", pattern: "connect"
  },
  realEstate: {
    bg1: "#0f1810", bg2: "#162218", bg3: "#1a2a1c",
    accent: "#10b981", accent2: "#34d399", accent3: "#6ee7b7",
    glow: "#10b981", badge: "Real Estate",
    emoji: "building", pattern: "grid"
  },
  comparison: {
    bg1: "#1a0a1e", bg2: "#2a1035", bg3: "#1f0830",
    accent: "#ec4899", accent2: "#f472b6", accent3: "#f9a8d4",
    glow: "#ec4899", badge: "Comparison",
    emoji: "versus", pattern: "split"
  },
  business: {
    bg1: "#1a1008", bg2: "#2a1a0c", bg3: "#251510",
    accent: "#f97316", accent2: "#fb923c", accent3: "#fdba74",
    glow: "#f97316", badge: "Business",
    emoji: "chart", pattern: "flow"
  },
  guide: {
    bg1: "#0a0f22", bg2: "#101838", bg3: "#0f1530",
    accent: "#6366f1", accent2: "#818cf8", accent3: "#a5b4fc",
    glow: "#6366f1", badge: "Guide",
    emoji: "book", pattern: "dots"
  },
  whatsapp: {
    bg1: "#041a10", bg2: "#0a2818", bg3: "#082015",
    accent: "#22c55e", accent2: "#4ade80", accent3: "#86efac",
    glow: "#22c55e", badge: "WhatsApp",
    emoji: "chat", pattern: "bubble"
  },
  ecommerce: {
    bg1: "#1a0820", bg2: "#2a1035", bg3: "#220c30",
    accent: "#a855f7", accent2: "#c084fc", accent3: "#d8b4fe",
    glow: "#a855f7", badge: "E-Commerce",
    emoji: "cart", pattern: "hex"
  },
  uae: {
    bg1: "#0f1520", bg2: "#1a2035", bg3: "#151a2a",
    accent: "#eab308", accent2: "#facc15", accent3: "#fde047",
    glow: "#eab308", badge: "UAE Market",
    emoji: "skyline", pattern: "wave"
  },
  crm: {
    bg1: "#100a1a", bg2: "#1a1028", bg3: "#150d22",
    accent: "#8b5cf6", accent2: "#a78bfa", accent3: "#c4b5fd",
    glow: "#8b5cf6", badge: "CRM",
    emoji: "funnel", pattern: "pipeline"
  }
};

// ──────────────────────────────────────────────────────────────────────
// ICON LIBRARY — SVG path-based icons for each category
// ──────────────────────────────────────────────────────────────────────
function getCategoryIcon(emoji, accent, accent2) {
  const icons = {
    brain: `
      <g transform="translate(920, 100) scale(2.8)" opacity="0.18">
        <path d="M12 2C8.5 2 6 4.5 6 7.5c0 1.5.5 2.8 1.5 3.8L8 14h8l.5-2.7c1-1 1.5-2.3 1.5-3.8C18 4.5 15.5 2 12 2z" fill="${accent}" stroke="${accent2}" stroke-width="0.5"/>
        <path d="M9 14v3c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-3" fill="none" stroke="${accent2}" stroke-width="0.8"/>
        <circle cx="10" cy="7" r="1" fill="${accent2}"/>
        <circle cx="14" cy="7" r="1" fill="${accent2}"/>
        <path d="M10 10h4" stroke="${accent2}" stroke-width="0.5"/>
      </g>`,
    link: `
      <g transform="translate(920, 100) scale(2.8)" opacity="0.18">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" fill="none" stroke="${accent}" stroke-width="1.2" stroke-linecap="round"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" fill="none" stroke="${accent2}" stroke-width="1.2" stroke-linecap="round"/>
      </g>`,
    building: `
      <g transform="translate(910, 80) scale(2.8)" opacity="0.18">
        <rect x="3" y="6" width="7" height="14" rx="1" fill="${accent}" stroke="${accent2}" stroke-width="0.5"/>
        <rect x="12" y="2" width="8" height="18" rx="1" fill="${accent}" stroke="${accent2}" stroke-width="0.5"/>
        <rect x="5" y="9" width="2" height="2" fill="${accent2}" opacity="0.6"/>
        <rect x="5" y="13" width="2" height="2" fill="${accent2}" opacity="0.6"/>
        <rect x="14" y="5" width="2" height="2" fill="${accent2}" opacity="0.6"/>
        <rect x="14" y="9" width="2" height="2" fill="${accent2}" opacity="0.6"/>
        <rect x="14" y="13" width="2" height="2" fill="${accent2}" opacity="0.6"/>
        <rect x="17" y="5" width="1.5" height="2" fill="${accent2}" opacity="0.4"/>
        <rect x="17" y="9" width="1.5" height="2" fill="${accent2}" opacity="0.4"/>
      </g>`,
    versus: `
      <g transform="translate(930, 100) scale(2.8)" opacity="0.2">
        <text x="0" y="16" fill="${accent}" font-family="Arial,Helvetica,sans-serif" font-size="20" font-weight="900" letter-spacing="-1">VS</text>
      </g>`,
    chart: `
      <g transform="translate(920, 100) scale(2.8)" opacity="0.18">
        <rect x="2" y="12" width="4" height="8" rx="0.5" fill="${accent2}" opacity="0.7"/>
        <rect x="8" y="8" width="4" height="12" rx="0.5" fill="${accent}" opacity="0.9"/>
        <rect x="14" y="4" width="4" height="16" rx="0.5" fill="${accent2}" opacity="0.7"/>
        <rect x="20" y="1" width="4" height="19" rx="0.5" fill="${accent}" opacity="0.5"/>
        <path d="M2 20h22" stroke="${accent2}" stroke-width="0.5" opacity="0.5"/>
      </g>`,
    book: `
      <g transform="translate(920, 100) scale(2.8)" opacity="0.18">
        <path d="M4 4h6c1 0 2 1 2 2v14s-1-2-3-2H4V4z" fill="${accent}" stroke="${accent2}" stroke-width="0.5"/>
        <path d="M20 4h-6c-1 0-2 1-2 2v14s1-2 3-2h5V4z" fill="${accent}" stroke="${accent2}" stroke-width="0.5"/>
        <path d="M7 8h2M7 11h2M15 8h2M15 11h2" stroke="${accent2}" stroke-width="0.5" opacity="0.6"/>
      </g>`,
    chat: `
      <g transform="translate(920, 100) scale(2.8)" opacity="0.18">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="${accent}" stroke="${accent2}" stroke-width="0.5"/>
        <circle cx="9" cy="12" r="1" fill="${accent2}"/>
        <circle cx="12" cy="12" r="1" fill="${accent2}"/>
        <circle cx="15" cy="12" r="1" fill="${accent2}"/>
      </g>`,
    cart: `
      <g transform="translate(920, 100) scale(2.8)" opacity="0.18">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" fill="none" stroke="${accent}" stroke-width="1"/>
        <path d="M3 6h18" stroke="${accent2}" stroke-width="0.8"/>
        <path d="M16 10a4 4 0 0 1-8 0" fill="none" stroke="${accent2}" stroke-width="0.8"/>
      </g>`,
    skyline: `
      <g transform="translate(900, 85) scale(2.8)" opacity="0.18">
        <rect x="2" y="10" width="4" height="10" fill="${accent}"/>
        <rect x="7" y="5" width="3" height="15" fill="${accent2}" opacity="0.7"/>
        <rect x="11" y="2" width="5" height="18" fill="${accent}"/>
        <rect x="17" y="7" width="4" height="13" fill="${accent2}" opacity="0.7"/>
        <rect x="22" y="12" width="3" height="8" fill="${accent}"/>
        <path d="M13 0l1.5 2h-3z" fill="${accent2}"/>
      </g>`,
    funnel: `
      <g transform="translate(920, 100) scale(2.8)" opacity="0.18">
        <path d="M2 3h20l-7 8v6l-4 3V11L2 3z" fill="${accent}" stroke="${accent2}" stroke-width="0.5"/>
        <path d="M5 5h14" stroke="${accent2}" stroke-width="0.3" opacity="0.5"/>
        <path d="M7 7h10" stroke="${accent2}" stroke-width="0.3" opacity="0.5"/>
      </g>`
  };
  return icons[emoji] || icons.chart;
}

// ──────────────────────────────────────────────────────────────────────
// PATTERN LIBRARY — unique background patterns per category
// ──────────────────────────────────────────────────────────────────────
function getPattern(pattern, accent, accent2) {
  const patterns = {
    neural: generateNeuralNodes(accent, accent2),
    connect: generateConnectionLines(accent, accent2),
    grid: generateIsometricGrid(accent, accent2),
    split: generateSplitPattern(accent, accent2),
    flow: generateFlowPattern(accent, accent2),
    dots: generateDotGrid(accent, accent2),
    bubble: generateBubblePattern(accent, accent2),
    hex: generateHexPattern(accent, accent2),
    wave: generateWavePattern(accent, accent2),
    pipeline: generatePipelinePattern(accent, accent2)
  };
  return patterns[pattern] || patterns.dots;
}

function generateNeuralNodes(accent, accent2) {
  let svg = '';
  const nodes = [
    [850,80],[950,150],[1050,100],[1100,200],[980,250],[870,200],
    [920,320],[1050,350],[1130,300],[800,350],[950,50],[1080,50],
    [830,140],[1000,180],[1100,130],[870,280],[1020,300],[1150,250],
  ];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dist = Math.hypot(nodes[j][0]-nodes[i][0], nodes[j][1]-nodes[i][1]);
      if (dist < 180) {
        const op = (0.06 + (i * 0.003)) .toFixed(3);
        svg += `<line x1="${nodes[i][0]}" y1="${nodes[i][1]}" x2="${nodes[j][0]}" y2="${nodes[j][1]}" stroke="${accent}" stroke-width="0.6" opacity="${op}"/>`;
      }
    }
  }
  for (const [x, y] of nodes) {
    const r = 2 + (x % 5);
    svg += `<circle cx="${x}" cy="${y}" r="${r}" fill="${accent2}" opacity="0.09"/>`;
    svg += `<circle cx="${x}" cy="${y}" r="${r*2.5}" fill="${accent}" opacity="0.02"/>`;
  }
  return svg;
}

function generateConnectionLines(accent, accent2) {
  let svg = '';
  const points = [
    [820,60],[900,120],[1000,80],[1100,160],[1050,260],[920,220],
    [850,300],[980,350],[1120,320],[870,180],[1000,200],[1140,100],
    [780,250],[940,280],[1060,220],[830,120],[1020,140],[1150,180],
  ];
  for (let i = 0; i < points.length - 1; i++) {
    const [x1,y1] = points[i];
    const [x2,y2] = points[i+1];
    const mx = (x1+x2)/2, my = (y1+y2)/2 - 20;
    svg += `<path d="M${x1},${y1} Q${mx},${my} ${x2},${y2}" fill="none" stroke="${accent}" stroke-width="1" opacity="0.06"/>`;
  }
  for (const [x, y] of points) {
    svg += `<circle cx="${x}" cy="${y}" r="3" fill="${accent2}" opacity="0.1"/>`;
    svg += `<circle cx="${x}" cy="${y}" r="6" fill="none" stroke="${accent}" stroke-width="0.5" opacity="0.06"/>`;
  }
  return svg;
}

function generateIsometricGrid(accent, accent2) {
  let svg = '';
  for (let x = 750; x < 1200; x += 60) {
    for (let y = 30; y < 400; y += 40) {
      const ox = x + ((y/40) % 2) * 30;
      svg += `<rect x="${ox}" y="${y}" width="20" height="14" rx="2" fill="none" stroke="${accent}" stroke-width="0.5" opacity="0.05" transform="skewX(-15)"/>`;
    }
  }
  const highlights = [[810,110],[930,190],[1050,150],[870,270],[990,310]];
  for (const [x,y] of highlights) {
    svg += `<rect x="${x}" y="${y}" width="20" height="14" rx="2" fill="${accent2}" opacity="0.08" transform="skewX(-15)"/>`;
  }
  return svg;
}

function generateSplitPattern(accent, accent2) {
  let svg = '';
  svg += `<line x1="850" y1="0" x2="1200" y2="400" stroke="${accent}" stroke-width="1.5" opacity="0.08"/>`;
  svg += `<line x1="860" y1="0" x2="1210" y2="400" stroke="${accent2}" stroke-width="0.5" opacity="0.05"/>`;
  for (let i = 0; i < 12; i++) {
    const x = 870 + (i * 25) % 130;
    const y = 50 + (i * 37) % 300;
    svg += `<circle cx="${x}" cy="${y}" r="${2 + (i % 4)}" fill="${accent}" opacity="0.06"/>`;
    svg += `<circle cx="${x+150}" cy="${y}" r="${2 + ((i+2) % 4)}" fill="${accent2}" opacity="0.06"/>`;
  }
  return svg;
}

function generateFlowPattern(accent, accent2) {
  let svg = '';
  const flowNodes = [[820,100],[920,180],[1020,120],[1120,200],[1000,300],[900,280],[1100,350]];
  for (let i = 0; i < flowNodes.length - 1; i++) {
    const [x1,y1] = flowNodes[i];
    const [x2,y2] = flowNodes[i+1];
    svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${accent}" stroke-width="1" opacity="0.07" stroke-dasharray="6,4"/>`;
  }
  for (const [x,y] of flowNodes) {
    svg += `<rect x="${x-12}" y="${y-8}" width="24" height="16" rx="4" fill="none" stroke="${accent2}" stroke-width="0.8" opacity="0.1"/>`;
    svg += `<circle cx="${x}" cy="${y}" r="2" fill="${accent2}" opacity="0.15"/>`;
  }
  svg += `<path d="M1115,195 l10,10 -10,10" fill="none" stroke="${accent}" stroke-width="0.8" opacity="0.1"/>`;
  return svg;
}

function generateDotGrid(accent, accent2) {
  let svg = '';
  for (let x = 780; x < 1200; x += 35) {
    for (let y = 30; y < 400; y += 35) {
      const r = 1.2 + ((x + y) % 3) * 0.2;
      svg += `<circle cx="${x}" cy="${y}" r="${r}" fill="${accent}" opacity="${0.04 + ((x*y) % 7)*0.01}"/>`;
    }
  }
  for (let i = 0; i < 8; i++) {
    const x = 950 + Math.cos(i*0.8)*60;
    const y = 180 + Math.sin(i*0.8)*60;
    svg += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" fill="${accent2}" opacity="0.12"/>`;
  }
  return svg;
}

function generateBubblePattern(accent, accent2) {
  let svg = '';
  const bubbles = [
    [850,80,35],[950,180,25],[1060,120,30],[870,250,20],[1000,300,28],
    [1120,200,22],[810,170,18],[980,60,24],[1100,320,26],[920,350,15],
  ];
  for (const [x,y,r] of bubbles) {
    svg += `<rect x="${x-r}" y="${y-r*0.7}" width="${r*2}" height="${r*1.4}" rx="${r*0.7}" fill="none" stroke="${accent}" stroke-width="0.8" opacity="0.06"/>`;
    svg += `<path d="M${x-5},${y+r*0.7} l5,8 5,-8" fill="none" stroke="${accent}" stroke-width="0.6" opacity="0.04"/>`;
  }
  return svg;
}

function generateHexPattern(accent, accent2) {
  let svg = '';
  const hexSize = 28;
  for (let row = 0; row < 12; row++) {
    for (let col = 0; col < 8; col++) {
      const x = 780 + col * hexSize * 1.8 + (row % 2) * hexSize * 0.9;
      const y = 20 + row * hexSize * 1.5;
      if (x > 750 && x < 1200 && y < 400) {
        const points = [];
        for (let i = 0; i < 6; i++) {
          const angle = Math.PI / 3 * i - Math.PI / 6;
          points.push(`${(x + hexSize * Math.cos(angle)).toFixed(1)},${(y + hexSize * Math.sin(angle)).toFixed(1)}`);
        }
        svg += `<polygon points="${points.join(' ')}" fill="none" stroke="${accent}" stroke-width="0.5" opacity="0.05"/>`;
      }
    }
  }
  const highlights = [[900,100],[1020,200],[960,300]];
  for (const [hx,hy] of highlights) {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const a = Math.PI/3*i - Math.PI/6;
      pts.push(`${(hx+hexSize*Math.cos(a)).toFixed(1)},${(hy+hexSize*Math.sin(a)).toFixed(1)}`);
    }
    svg += `<polygon points="${pts.join(' ')}" fill="${accent2}" opacity="0.06"/>`;
  }
  return svg;
}

function generateWavePattern(accent, accent2) {
  let svg = '';
  for (let i = 0; i < 6; i++) {
    const y = 50 + i * 60;
    const opacity = (0.03 + i * 0.01).toFixed(3);
    const opacity2 = ((0.03 + i * 0.01) * 0.7).toFixed(3);
    svg += `<path d="M750,${y} Q850,${y-30} 950,${y} Q1050,${y+30} 1200,${y}" fill="none" stroke="${accent}" stroke-width="1" opacity="${opacity}"/>`;
    svg += `<path d="M750,${y+15} Q850,${y-15} 950,${y+15} Q1050,${y+45} 1200,${y+15}" fill="none" stroke="${accent2}" stroke-width="0.5" opacity="${opacity2}"/>`;
  }
  return svg;
}

function generatePipelinePattern(accent, accent2) {
  let svg = '';
  const stages = [[820,100],[920,100],[1020,100],[1120,100]];
  for (let i = 0; i < stages.length; i++) {
    const [x,y] = stages[i];
    svg += `<rect x="${x-20}" y="${y-15}" width="40" height="30" rx="6" fill="none" stroke="${accent}" stroke-width="0.8" opacity="0.08"/>`;
    if (i < stages.length-1) {
      svg += `<line x1="${x+20}" y1="${y}" x2="${x+80}" y2="${y}" stroke="${accent2}" stroke-width="0.8" opacity="0.06" stroke-dasharray="4,3"/>`;
      svg += `<polygon points="${x+75},${y-4} ${x+80},${y} ${x+75},${y+4}" fill="${accent2}" opacity="0.08"/>`;
    }
  }
  const stages2 = [[860,220],[960,220],[1060,220]];
  for (let i = 0; i < stages2.length; i++) {
    const [x,y] = stages2[i];
    svg += `<circle cx="${x}" cy="${y}" r="12" fill="none" stroke="${accent}" stroke-width="0.6" opacity="0.06"/>`;
    if (i < stages2.length-1) {
      svg += `<line x1="${x+12}" y1="${y}" x2="${x+88}" y2="${y}" stroke="${accent}" stroke-width="0.5" opacity="0.04"/>`;
    }
  }
  svg += `<line x1="920" y1="130" x2="960" y2="208" stroke="${accent}" stroke-width="0.5" opacity="0.05" stroke-dasharray="3,3"/>`;
  svg += `<line x1="1020" y1="130" x2="1060" y2="208" stroke="${accent}" stroke-width="0.5" opacity="0.05" stroke-dasharray="3,3"/>`;
  return svg;
}

// ──────────────────────────────────────────────────────────────────────
// MAIN SVG BUILDER — the professional image template
// ──────────────────────────────────────────────────────────────────────
function buildSvg(line1, line2, theme, tagline) {
  const t = themes[theme] || themes.business;
  const icon = getCategoryIcon(t.emoji, t.accent, t.accent2);
  const pattern = getPattern(t.pattern, t.accent, t.accent2);
  const badgeWidth = t.badge.length * 10 + 24;
  
  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${t.bg1}"/>
      <stop offset="50%" stop-color="${t.bg2}"/>
      <stop offset="100%" stop-color="${t.bg3}"/>
    </linearGradient>
    <radialGradient id="glow1" cx="900" cy="300" r="400" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${t.accent}" stop-opacity="0.12"/>
      <stop offset="60%" stop-color="${t.accent}" stop-opacity="0.03"/>
      <stop offset="100%" stop-color="${t.accent}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="200" cy="500" r="300" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${t.accent2}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="${t.accent2}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow3" cx="1100" cy="100" r="250" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${t.accent}" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="${t.accent}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="divGrad" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${t.accent}"/>
      <stop offset="50%" stop-color="${t.accent2}"/>
      <stop offset="100%" stop-color="${t.accent}" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="topBar" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${t.accent}" stop-opacity="0"/>
      <stop offset="20%" stop-color="${t.accent}"/>
      <stop offset="80%" stop-color="${t.accent2}"/>
      <stop offset="100%" stop-color="${t.accent}" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="glass" x1="60" y1="180" x2="700" y2="480" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.01"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  
  <!-- Ambient glow layers -->
  <rect width="1200" height="630" fill="url(#glow1)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>
  <rect width="1200" height="630" fill="url(#glow3)"/>

  <!-- Decorative pattern (right side) -->
  ${pattern}
  
  <!-- Category icon -->
  ${icon}

  <!-- Top accent bar -->
  <rect x="0" y="0" width="1200" height="3" fill="url(#topBar)"/>
  
  <!-- Left accent stripe -->
  <rect x="0" y="0" width="5" height="630" fill="${t.accent}" opacity="0.8"/>
  <rect x="5" y="0" width="2" height="630" fill="${t.accent2}" opacity="0.3"/>

  <!-- Glass card container -->
  <rect x="55" y="170" width="650" height="330" rx="16" fill="url(#glass)" stroke="${t.accent}" stroke-width="0.5" stroke-opacity="0.1"/>
  
  <!-- Corner decorations -->
  <path d="M55,186 L55,170 Q55,170 71,170" fill="none" stroke="${t.accent}" stroke-width="1.5" opacity="0.3"/>
  <path d="M705,484 L705,500 Q705,500 689,500" fill="none" stroke="${t.accent2}" stroke-width="1.5" opacity="0.3"/>

  <!-- Category badge -->
  <rect x="80" y="200" width="${badgeWidth}" height="28" rx="14" fill="${t.accent}" opacity="0.15"/>
  <rect x="80" y="200" width="${badgeWidth}" height="28" rx="14" fill="none" stroke="${t.accent}" stroke-width="0.8" opacity="0.3"/>
  <text x="${80 + 12}" y="219" fill="${t.accent2}" font-family="Arial,Helvetica,sans-serif" font-size="13" font-weight="600" letter-spacing="1">${escapeXml(t.badge.toUpperCase())}</text>

  <!-- Main title -->
  <text x="80" y="290" fill="#ffffff" font-family="Arial,Helvetica,sans-serif" font-size="48" font-weight="bold" letter-spacing="-0.5">${escapeXml(line1)}</text>
  
  <!-- Subtitle -->
  <text x="80" y="348" fill="${t.accent3}" font-family="Arial,Helvetica,sans-serif" font-size="38" font-weight="600" letter-spacing="-0.3">${escapeXml(line2)}</text>

  <!-- Accent divider -->
  <rect x="80" y="375" width="240" height="3" rx="1.5" fill="url(#divGrad)"/>
  <circle cx="320" cy="376.5" r="3" fill="${t.accent2}" opacity="0.4"/>

  <!-- Tagline -->
  <text x="80" y="415" fill="#94a3b8" font-family="Arial,Helvetica,sans-serif" font-size="16" letter-spacing="0.5">${escapeXml(tagline || 'Expert n8n Workflow Automation')}</text>

  <!-- Bottom section -->
  <rect x="0" y="530" width="1200" height="100" fill="#000000" opacity="0.3"/>
  <rect x="0" y="530" width="1200" height="1" fill="${t.accent}" opacity="0.15"/>
  
  <!-- Brand logo area -->
  <rect x="70" y="555" width="42" height="42" rx="10" fill="${t.accent}" opacity="0.15"/>
  <rect x="70" y="555" width="42" height="42" rx="10" fill="none" stroke="${t.accent}" stroke-width="1" opacity="0.4"/>
  <text x="78" y="583" fill="${t.accent2}" font-family="Arial,Helvetica,sans-serif" font-size="16" font-weight="bold">n8</text>
  
  <!-- Brand name -->
  <text x="124" y="575" fill="#ffffff" font-family="Arial,Helvetica,sans-serif" font-size="22" font-weight="bold" letter-spacing="-0.3">n8nera</text>
  <text x="124" y="594" fill="#64748b" font-family="Arial,Helvetica,sans-serif" font-size="13" letter-spacing="0.3">n8nera.tech</text>

  <!-- Read more arrow -->
  <circle cx="1110" cy="575" r="20" fill="none" stroke="${t.accent}" stroke-width="1.2" opacity="0.2"/>
  <path d="M1103,575 l12,0 M1110,568 l7,7 -7,7" fill="none" stroke="${t.accent2}" stroke-width="1.5" opacity="0.3"/>

  <!-- Floating decorative orbs -->
  <circle cx="750" cy="560" r="40" fill="${t.accent}" opacity="0.03"/>
  <circle cx="950" cy="80" r="60" fill="${t.accent2}" opacity="0.03"/>
  <circle cx="1150" cy="450" r="35" fill="${t.accent}" opacity="0.04"/>
  <circle cx="50" cy="100" r="45" fill="${t.accent2}" opacity="0.03"/>
  
  <!-- Micro grid texture -->
  <pattern id="microGrid" width="40" height="40" patternUnits="userSpaceOnUse">
    <rect width="40" height="40" fill="none"/>
    <path d="M40,0 L0,0 0,40" fill="none" stroke="#ffffff" stroke-width="0.15" opacity="0.03"/>
  </pattern>
  <rect width="1200" height="630" fill="url(#microGrid)"/>

  <!-- Bottom accent bar -->
  <rect x="0" y="627" width="1200" height="3" fill="url(#topBar)"/>
</svg>`;
}

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// ──────────────────────────────────────────────────────────────────────
// IMAGE DEFINITIONS — [filename, line1, line2, theme, tagline]
// ──────────────────────────────────────────────────────────────────────
const images = [
  // ── Featured / OG images ──────────────────────────────────────────
  ["n8n-github-complete-guide.webp", "n8n + GitHub", "Complete Guide", "integration", "Version Control & CI/CD Automation"],
  ["n8n-ecommerce-automation.webp", "E-Commerce", "Automation with n8n", "ecommerce", "Streamline Your Online Store Operations"],
  ["n8n-automation-ideas.webp", "Top Automation", "Ideas for Business", "business", "Transform Your Workflow Efficiency"],
  ["integrate-openclaw-with-n8n.webp", "OpenClaw + n8n", "Integration Guide", "integration", "Legal AI Workflow Automation"],
  ["automation-tools-abu-dhabi-real-estate.webp", "Automation Tools", "Abu Dhabi Real Estate", "realEstate", "Smart Property Management Solutions"],
  ["n8n-openclaw-telegram-whatsapp-agent.webp", "OpenClaw Agent", "Telegram & WhatsApp", "ai", "AI-Powered Messaging Automation"],
  ["n8n-vs-make-2026.webp", "n8n vs Make.com", "2026 Comparison", "comparison", "Which Platform Wins?"],
  ["n8n-vs-zapier-2026.webp", "n8n vs Zapier", "2026 Comparison", "comparison", "The Ultimate Showdown"],
  ["n8n-agency-services-uae.webp", "n8n Agency", "Services in UAE", "uae", "Professional Automation Solutions"],
  ["self-host-n8n-guide.webp", "Self-Host n8n", "Complete Setup Guide", "guide", "Full Control Over Your Workflows"],
  ["real-estate-crm-pipeline-automation.webp", "Real Estate CRM", "Pipeline Automation", "crm", "Convert More Leads Automatically"],
  ["n8n-real-estate-automation-2026.webp", "Real Estate", "Automation 2026", "realEstate", "Next-Gen Property Tech Solutions"],
  ["real-estate-chatbot-n8n-2026.webp", "AI Real Estate", "Chatbot with n8n", "ai", "24/7 Property Assistant"],

  // ── Blog: n8n-real-estate inline images ───────────────────────────
  ["n8n-real-estate-lead-capture-workflow.webp", "Lead Capture", "Workflow Design", "realEstate", "Automated Lead Pipeline"],
  ["n8n-real-estate-ai-lead-scoring.webp", "AI Lead Scoring", "Smart Qualification", "ai", "Prioritize High-Value Prospects"],
  ["n8n-real-estate-viewing-scheduler.webp", "Viewing Scheduler", "Auto-Booking System", "realEstate", "Seamless Appointment Booking"],
  ["n8n-setup-real-estate-instance.webp", "n8n Instance", "Setup & Config", "guide", "Real Estate Automation Setup"],
  ["n8n-real-estate-complete-workflow.webp", "Complete Workflow", "End-to-End System", "realEstate", "Full Automation Blueprint"],
  ["n8n-real-estate-case-study-results.webp", "Case Study", "Results Dashboard", "business", "Proven ROI & Performance"],
  ["n8n-real-estate-property-management.webp", "Property Mgmt", "Automation Suite", "realEstate", "Streamline Operations"],
  ["n8nera-real-estate-automation-cta.webp", "Get Started", "Real Estate AI", "business", "Transform Your Agency Today"],

  // ── Blog: real-estate-chatbot inline images ───────────────────────
  ["n8n-chatbot-lead-qualification.webp", "Chatbot Leads", "Smart Qualification", "ai", "AI-Driven Lead Scoring"],
  ["n8n-real-estate-chatbot-architecture.webp", "Bot Architecture", "Multi-Channel Design", "integration", "Scalable Chatbot System"],
  ["n8n-chatbot-setup-dashboard.webp", "Setup Dashboard", "Configuration Panel", "guide", "Easy Bot Management"],
  ["n8n-real-estate-chatbot-complete-workflow.webp", "Complete Bot", "Workflow Automation", "ai", "Full Chatbot Blueprint"],
  ["n8n-chatbot-rag-property-knowledge.webp", "RAG + Property", "Knowledge Base", "ai", "Intelligent Property Search"],
  ["n8nera-real-estate-chatbot-cta.webp", "AI Chatbot", "Solutions by n8nera", "business", "Build Your Bot Today"],

  // ── blog.ts (3 posts) ─────────────────────────────────────────────
  ["n8n-automation-dubai-businesses.webp", "n8n Automation", "Dubai Businesses", "uae", "Scale Your Dubai Operations"],
  ["ai-voice-agents-uae.webp", "AI Voice Agents", "UAE Customer Service", "ai", "Next-Gen Voice Technology"],
  ["whatsapp-business-automation-uae.webp", "WhatsApp Business", "Automation UAE", "whatsapp", "Reach 2B+ Users Instantly"],

  // ── blog-additional.ts (2 posts) ──────────────────────────────────
  ["crm-automation-dubai-sales.webp", "CRM Automation", "Dubai Sales Teams", "crm", "Close Deals Faster"],
  ["ecommerce-automation-uae.webp", "E-Commerce", "Automation UAE", "ecommerce", "Online Store Intelligence"],

  // ── blog-automation-agency.ts (12 posts) ──────────────────────────
  ["best-n8n-automation-agency-dubai.webp", "Best n8n Agency", "Dubai & UAE", "uae", "#1 Rated Automation Partner"],
  ["n8n-automation-cost-pricing.webp", "n8n Cost &", "Pricing Guide 2026", "guide", "Budget-Friendly Automation"],
  ["ai-voice-agents-business-guide.webp", "AI Voice Agents", "Business Guide", "ai", "Voice AI Implementation"],
  ["whatsapp-automation-dubai.webp", "WhatsApp", "Automation Dubai", "whatsapp", "Business Messaging at Scale"],
  ["hire-n8n-developer.webp", "Hire n8n", "Developer Expert", "guide", "Find the Right Talent"],
  ["automate-lead-generation-dubai.webp", "Lead Generation", "CRM Automation", "crm", "Dubai Business Growth"],
  ["n8n-vs-power-automate.webp", "n8n vs Power", "Automate 2026", "comparison", "Open-Source vs Enterprise"],
  ["business-process-automation-uae.webp", "Business Process", "Automation UAE", "business", "Operational Excellence"],
  ["shopify-automation-n8n.webp", "Shopify + n8n", "Store Automation", "ecommerce", "Automate Your Shopify Store"],
  ["business-automation-ideas.webp", "Top 10 Ideas", "Small Business", "business", "Quick Wins for Growth"],
  ["n8n-ai-agents-chatgpt-claude.webp", "n8n AI Agents", "ChatGPT & Claude", "ai", "Multi-Model AI Workflows"],
  ["real-estate-automation-dubai.webp", "Real Estate AI", "Dubai CRM & Leads", "realEstate", "Property Tech Revolution"],

  // ── blog-seo-boost.ts (5 posts) ───────────────────────────────────
  ["hubspot-n8n-integration.webp", "HubSpot + n8n", "CRM Integration", "integration", "Supercharge Your CRM"],
  ["automation-restaurants-hotels-uae.webp", "Hospitality AI", "Restaurants & Hotels", "uae", "UAE Hospitality Automation"],
  ["salesforce-n8n-integration.webp", "Salesforce + n8n", "Integration Guide", "integration", "Enterprise CRM Automation"],
  ["n8n-tutorial-beginners.webp", "n8n Tutorial", "Beginners Guide", "guide", "Start Automating in Minutes"],
  ["agentic-ai-workflow-2026.webp", "Agentic AI", "Workflow 2026", "ai", "Autonomous AI Agents"],

  // ── blog-looking-for-n8n-developer.ts ─────────────────────────────
  ["looking-for-n8n-developer-demand-2026.webp", "n8n Developer", "Demand 2026", "business", "+340% Growth in Demand"],
  ["n8n-developer-skills-matrix.webp", "n8n Developer", "Skills Matrix", "guide", "Essential Technical Skills"],
  ["n8n-developer-cost-comparison-2026.webp", "n8n Developer", "Cost Guide 2026", "business", "Rates by Region & Model"],
  ["n8n-developer-hiring-red-flags.webp", "Hiring n8n Dev", "Red Flags Guide", "comparison", "What to Watch Out For"],
];

// ──────────────────────────────────────────────────────────────────────
// GENERATOR
// ──────────────────────────────────────────────────────────────────────
async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  console.log("\n  n8nera Blog Image Generator v2.0");
  console.log("  Professional Edition\n");
  console.log("  Generating " + images.length + " images...\n");

  let created = 0;
  let totalSize = 0;

  for (const [filename, line1, line2, theme, tagline] of images) {
    const outPath = path.join(OUT_DIR, filename);
    const svg = buildSvg(line1, line2, theme, tagline);

    await sharp(Buffer.from(svg))
      .resize(1200, 630)
      .webp({ quality: 85, effort: 6 })
      .toFile(outPath);

    const stat = fs.statSync(outPath);
    totalSize += stat.size;
    const kb = (stat.size / 1024).toFixed(1);
    const themeLabel = (themes[theme] || themes.business).badge;
    console.log(`  [${themeLabel}] ${filename}  (${kb} KB)`);
    created++;
  }

  console.log(`\n  Done: ${created} professional images generated`);
  console.log(`  Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Output: public/images/blog/\n`);
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});

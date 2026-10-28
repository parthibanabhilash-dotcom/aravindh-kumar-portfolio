import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 40, bottom: 40, left: 45, right: 45 },
});

const outputPath = path.resolve('public', 'Aravindh_Kumar_Resume.pdf');
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Color Palette matching user's theme
const COLOR_BLACK = '#0a0a0a';
const COLOR_INDIGO = '#4f46e5';
const COLOR_AMBER = '#d97706';
const COLOR_SLATE = '#475569';
const COLOR_MUTED = '#64748b';
const COLOR_LIGHT_BG = '#f8fafc';
const COLOR_BORDER = '#e2e8f0';

// Top Header / Name Bar
doc.rect(45, 40, 505, 75).fill(COLOR_LIGHT_BG);
doc.rect(45, 40, 505, 75).stroke(COLOR_BORDER);

// Accent left vertical bar
doc.rect(45, 40, 5, 75).fill(COLOR_INDIGO);

// Name
doc
  .fillColor(COLOR_BLACK)
  .font('Helvetica-Bold')
  .fontSize(22)
  .text('ARAVINDH KUMAR', 60, 48);

// Title
doc
  .fillColor(COLOR_INDIGO)
  .font('Helvetica-Bold')
  .fontSize(10)
  .text('WEB DEVELOPER  |  WORDPRESS DEVELOPER  |  DIGITAL CREATIVE', 60, 75);

// Contact Info Line
doc
  .fillColor(COLOR_SLATE)
  .font('Helvetica')
  .fontSize(8.5)
  .text('Email: aravindpro2005@gmail.com   •   Phone: +91 6383976429   •   Location: Tamil Nadu, India', 60, 93);

// Section Helper
let currentY = 130;

function drawSectionHeading(title, color = COLOR_INDIGO) {
  doc
    .fillColor(COLOR_BLACK)
    .font('Helvetica-Bold')
    .fontSize(11)
    .text(title.toUpperCase(), 45, currentY);

  doc
    .rect(45, currentY + 14, 505, 1)
    .fill(color);

  currentY += 22;
}

// 1. Executive Summary
drawSectionHeading('Professional Summary');
doc
  .fillColor(COLOR_SLATE)
  .font('Helvetica')
  .fontSize(9)
  .lineGap(3)
  .text(
    "Multidisciplinary digital creator and web developer skilled in building responsive websites, customizing WordPress solutions, and integrating modern AI-assisted development workflows. Proficient across frontend technologies, visual graphic design, video editing, and hosting setup. Dedicated to producing high-quality, practical digital experiences that drive measurable impact.",
    45,
    currentY,
    { width: 505 }
  );

currentY = doc.y + 10;

// 2. Technical & Creative Skills
drawSectionHeading('Technical & Creative Toolkit');

const skillsData = [
  { cat: 'Web Development', items: 'HTML, CSS, JavaScript, VS Code, OpenAI Codex, Claude Code, Antigravity' },
  { cat: 'WordPress Development', items: 'WordPress Website Development, Elementor, E-commerce Tools, Page Design, Customization' },
  { cat: 'Hosting & Deployment', items: 'Hostinger, Website Hosting Setup, Domain & DNS Management, Vercel & Production Deployment' },
  { cat: 'Graphic Designing', items: 'Canva, Adobe Illustrator, Adobe Photoshop, Social Media Creatives, Posters & Promotional Designs' },
  { cat: 'Video Editing', items: 'CapCut, Canva Video, Filmora, Short-Form Video Editing, Promotional Video Content' },
  { cat: 'Office & Management', items: 'Microsoft Word, Microsoft Excel, Technical Documentation, Basic Digital Project Management' },
];

skillsData.forEach((s) => {
  doc
    .fillColor(COLOR_BLACK)
    .font('Helvetica-Bold')
    .fontSize(8.5)
    .text(`•  ${s.cat}: `, 45, currentY, { continued: true });

  doc
    .fillColor(COLOR_SLATE)
    .font('Helvetica')
    .fontSize(8.5)
    .text(s.items);

  currentY += 13.5;
});

currentY += 10;

// 3. Featured Web & Digital Projects
drawSectionHeading('Featured Live Projects');

const projects = [
  {
    title: 'Mobile Shop Website',
    type: 'E-commerce / Retail Website Concept',
    url: 'https://mobile-website-black-omega.vercel.app/',
    desc: 'Modern online mobile shop designed to showcase smartphone products with clean responsive spec sheets, product categories, and streamlined buying flow.',
  },
  {
    title: 'Restaurant Website (Madurai Express)',
    type: 'Hospitality / Food & Dining Website Concept',
    url: 'https://madurai-express.vercel.app/',
    desc: 'Authentic culinary website featuring food-focused visual presentation, traditional South Indian menu highlights, and direct table reservation contact.',
  },
  {
    title: 'EasyOra Company Website',
    type: 'Corporate / Digital Agency Services Concept',
    url: 'https://easyora.vercel.app/',
    desc: 'B2B digital services and agency website concept communicating brand identity, technology offerings, and enterprise consulting solutions.',
  },
  {
    title: 'Company LMS Portal (FGM Portal)',
    type: 'Learning Management System / Web Application Concept',
    url: 'https://fgm-portal.vercel.app/',
    desc: 'Structured employee training and education platform layout with modular course navigation, progress tracking, and interactive quizzes.',
  },
];

projects.forEach((p) => {
  doc
    .fillColor(COLOR_BLACK)
    .font('Helvetica-Bold')
    .fontSize(9.5)
    .text(p.title, 45, currentY, { continued: true });

  doc
    .fillColor(COLOR_MUTED)
    .font('Helvetica')
    .fontSize(8.5)
    .text(`  |  ${p.type}`);

  currentY += 12;

  doc
    .fillColor(COLOR_INDIGO)
    .font('Helvetica-Bold')
    .fontSize(8)
    .text(`Live Link: `, 45, currentY, { continued: true });

  doc
    .fillColor(COLOR_INDIGO)
    .font('Helvetica')
    .fontSize(8)
    .text(p.url, { link: p.url, underline: true });

  currentY += 11;

  doc
    .fillColor(COLOR_SLATE)
    .font('Helvetica')
    .fontSize(8.5)
    .text(p.desc, 45, currentY, { width: 505 });

  currentY = doc.y + 10;
});

currentY += 2;

// 4. AI-Augmented Workflow & Methodology
drawSectionHeading('Development Methodology & AI Integration');

doc
  .fillColor(COLOR_SLATE)
  .font('Helvetica')
  .fontSize(8.5)
  .lineGap(2.5)
  .text(
    '•  Four-Stage Execution Pipeline: Discover (client goals & requirements) → Plan (architecture & design direction) → Build (clean code & responsive design) → Launch (testing & DNS deployment).\n' +
    '•  Modern AI Workflow: Practical integration of OpenAI Codex, Claude Code, and Antigravity to accelerate prototyping, verify responsive integrity, and troubleshoot complex code while maintaining strict human-led craftsmanship.\n' +
    '•  Professional Integrity: Honest presentation of skills, zero fabricated certifications or inflated proficiency scores.',
    45,
    currentY,
    { width: 505 }
  );

currentY += 50;

// Footer in document
doc
  .rect(45, 780, 505, 0.5)
  .fill(COLOR_BORDER);

doc
  .fillColor(COLOR_MUTED)
  .font('Helvetica')
  .fontSize(7.5)
  .text('Aravindh Kumar  •  Professional Portfolio & Resume  •  Generated for Clients, Startups & Recruiters', 45, 788, { align: 'center', width: 505 });

doc.end();

stream.on('finish', () => {
  console.log('Resume PDF successfully generated at:', outputPath);
});


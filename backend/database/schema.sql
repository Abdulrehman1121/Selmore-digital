CREATE DATABASE IF NOT EXISTS selmore_digital
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE selmore_digital;

CREATE TABLE IF NOT EXISTS contact_messages (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(190) NOT NULL,
  phone VARCHAR(80) NOT NULL,
  company VARCHAR(190) NULL,
  service_interest VARCHAR(150) NOT NULL,
  budget VARCHAR(120) NULL,
  message TEXT NOT NULL,
  source_page VARCHAR(150) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('new', 'contacted', 'qualified', 'closed', 'spam') DEFAULT 'new',
  INDEX idx_contact_status_created (status, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS consultation_requests (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(190) NOT NULL,
  phone VARCHAR(80) NOT NULL,
  company VARCHAR(190) NULL,
  website_url VARCHAR(255) NULL,
  business_type VARCHAR(120) NULL,
  required_service VARCHAR(150) NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time TIME NOT NULL,
  message TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('new', 'scheduled', 'completed', 'closed', 'spam') DEFAULT 'new',
  INDEX idx_consultation_status_created (status, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS audit_requests (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  audit_type VARCHAR(120) NOT NULL,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(190) NOT NULL,
  phone VARCHAR(80) NOT NULL,
  website_url VARCHAR(255) NOT NULL,
  business_goal TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('new', 'reviewed', 'sent', 'closed', 'spam') DEFAULT 'new',
  INDEX idx_audit_status_created (status, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS blog_posts (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(220) NOT NULL,
  slug VARCHAR(220) NOT NULL UNIQUE,
  category VARCHAR(120) NOT NULL,
  excerpt TEXT NOT NULL,
  content LONGTEXT NOT NULL,
  featured_image VARCHAR(255) NULL,
  meta_title VARCHAR(220) NULL,
  meta_description VARCHAR(255) NULL,
  status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_blog_status_created (status, created_at),
  INDEX idx_blog_category (category)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS case_studies (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(220) NOT NULL,
  slug VARCHAR(220) NOT NULL UNIQUE,
  industry VARCHAR(120) NOT NULL,
  service VARCHAR(150) NOT NULL,
  challenge TEXT NOT NULL,
  strategy TEXT NOT NULL,
  execution TEXT NOT NULL,
  results TEXT NOT NULL,
  testimonial TEXT NULL,
  featured_image VARCHAR(255) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  INDEX idx_case_status_created (status, created_at),
  INDEX idx_case_industry (industry)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS portfolio_items (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(220) NOT NULL,
  slug VARCHAR(220) NOT NULL UNIQUE,
  category VARCHAR(120) NOT NULL,
  client_name VARCHAR(190) NOT NULL,
  description TEXT NOT NULL,
  image VARCHAR(255) NULL,
  project_url VARCHAR(255) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  INDEX idx_portfolio_status_created (status, created_at),
  INDEX idx_portfolio_category (category)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO blog_posts
  (title, slug, category, excerpt, content, featured_image, meta_title, meta_description, status)
VALUES
  (
    'How AI Automation Changes Lead Response for Growing Businesses',
    'ai-automation-lead-response',
    'AI Automation',
    'Fast response is becoming a competitive advantage. AI workflows help teams qualify, route, and follow up before leads go cold.',
    'AI automation is most valuable when it removes friction from the customer journey. For lead response, that means capturing context, qualifying intent, sending relevant follow-ups, and notifying the right person without waiting for manual handoffs.',
    '/assets/direct/ai-crm-workspace.png',
    'AI Automation for Lead Response',
    'Learn how AI automation improves lead response, qualification, routing, and follow-up.',
    'published'
  ),
  (
    'What Makes a Service Website Convert Better',
    'service-website-conversions',
    'Web Development',
    'Conversion improves when positioning, page structure, trust signals, and calls to action work together.',
    'A high-performing service website clarifies who the business helps, what outcomes it creates, and why buyers should trust the company. Strong page structure, fast performance, visible proof, and focused forms all support conversion.',
    '/assets/direct/website-growth-laptop.png',
    'Service Website Conversion Strategy',
    'Understand the factors that help service websites turn visitors into qualified leads.',
    'published'
  ),
  (
    'SEO Strategy for Businesses Expanding Into New Markets',
    'seo-expanding-new-markets',
    'SEO',
    'Market expansion needs localized search intent, service pages, and credibility signals that match buyer expectations.',
    'When businesses enter new markets, SEO must reflect local language, service demand, search behavior, and proof. The strongest strategy combines technical foundations with market-specific landing pages and content clusters.',
    '/assets/direct/analytics-dashboard-closeup.png',
    'SEO Strategy for Market Expansion',
    'Plan SEO for new regional markets with localized search intent and service pages.',
    'published'
  )
ON DUPLICATE KEY UPDATE
  title = VALUES(title),
  excerpt = VALUES(excerpt),
  content = VALUES(content),
  featured_image = VALUES(featured_image),
  status = VALUES(status);

INSERT INTO case_studies
  (title, slug, industry, service, challenge, strategy, execution, results, testimonial, featured_image, status)
VALUES
  (
    'Clinic Visibility to Consultation Engine',
    'clinic-visibility-consultation-engine',
    'Healthcare',
    'Website Development + SEO',
    'The clinic had scattered service pages, low search visibility, and weak appointment conversion.',
    'Rebuild the website around service intent, local SEO, trust signals, and clear consultation pathways.',
    'Created structured service pages, improved speed, added appointment CTAs, and mapped local keywords.',
    'A stronger consultation journey, better local discovery, and clearer attribution for inquiries.',
    'The website finally explains our services with confidence and makes it easy for patients to contact us.',
    '/assets/direct/case-results-direct.png',
    'published'
  ),
  (
    'Real Estate Lead System',
    'real-estate-lead-system',
    'Real Estate',
    'Performance Marketing',
    'Campaigns produced inconsistent inquiries with little insight into lead quality.',
    'Pair targeted paid campaigns with offer-specific landing pages and lead qualification workflows.',
    'Built landing pages, tracking, retargeting segments, and automated lead routing for the sales team.',
    'More structured lead flow, faster follow-up, and clearer visibility into campaign performance.',
    'The campaign system helped our sales team focus on better inquiries instead of chasing everything.',
    '/assets/direct/analytics-dashboard-closeup.png',
    'published'
  ),
  (
    'AI Follow-Up Workflow',
    'ai-follow-up-workflow',
    'Professional Services',
    'AI Automation',
    'The team was losing warm inquiries because follow-up depended on manual reminders.',
    'Create an AI-assisted workflow for instant response, qualification, and CRM handoff.',
    'Mapped inquiry stages, configured automated responses, and added internal notifications.',
    'Reduced response delays and created a more consistent customer experience.',
    'The automation feels like an extra coordinator working quietly in the background.',
    '/assets/direct/ai-crm-workspace.png',
    'published'
  )
ON DUPLICATE KEY UPDATE
  title = VALUES(title),
  results = VALUES(results),
  featured_image = VALUES(featured_image),
  status = VALUES(status);

INSERT INTO portfolio_items
  (title, slug, category, client_name, description, image, project_url, status)
VALUES
  (
    'MedNova Clinic Growth Platform',
    'mednova-clinic-growth-platform',
    'Websites',
    'MedNova',
    'A conversion-focused healthcare website with service pages, appointment capture, and local SEO structure.',
    '/assets/direct/website-growth-laptop.png',
    '#',
    'published'
  ),
  (
    'UrbanNest Real Estate Funnel',
    'urbannest-real-estate-funnel',
    'Marketing',
    'UrbanNest',
    'Lead generation funnel with landing pages, Meta campaigns, and automated inquiry routing.',
    '/assets/direct/analytics-dashboard-closeup.png',
    '#',
    'published'
  ),
  (
    'LumaSkin Identity System',
    'lumaskin-identity-system',
    'Branding',
    'LumaSkin',
    'Premium beauty brand identity, social templates, packaging direction, and launch creative.',
    '/assets/direct/branding-board-direct.png',
    '#',
    'published'
  ),
  (
    'TradeHub Ecommerce Store',
    'tradehub-ecommerce-store',
    'Ecommerce',
    'TradeHub',
    'WooCommerce store with product architecture, checkout optimization, and campaign tracking.',
    '/assets/direct/hero-ecommerce-dashboard.png',
    '#',
    'published'
  ),
  (
    'WhatsApp Lead Concierge',
    'whatsapp-lead-concierge',
    'AI Automation',
    'Service Business',
    'AI-assisted WhatsApp workflow for lead qualification, appointment routing, and follow-up.',
    '/assets/direct/ai-crm-workspace.png',
    '#',
    'published'
  ),
  (
    'Customer Booking App',
    'customer-booking-app',
    'Mobile Apps',
    'Wellness Studio',
    'Cross-platform booking and customer retention app concept for appointment-led businesses.',
    '/assets/direct/mobile-app-screens-direct.png',
    '#',
    'published'
  )
ON DUPLICATE KEY UPDATE
  title = VALUES(title),
  description = VALUES(description),
  image = VALUES(image),
  status = VALUES(status);

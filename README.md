# Vo Van Tu Tai — Portfolio & Engineering Showcase

> 🌐 **Live Portfolio:** [vovantutai-portfolio.vercel.app](https://vovantutai-portfolio.vercel.app)  
> 🚚 **Featured Live Logistics System:** [tracking.nexus-ex.site](https://tracking.nexus-ex.site/)

Personal portfolio web application showcasing production-grade projects, distributed architecture systems, business analysis case studies, and professional curriculum vitae for Full-Stack Developer, AI Engineer, and Business Analyst roles.

---

## 🚀 Featured Live Production Project

### [Nexus Express — Logistics OMS & Distributed Workflow Engine](https://github.com/VoVanTuTai/logistics-management-system)
- **Live Tracking App:** [https://tracking.nexus-ex.site/](https://tracking.nexus-ex.site/)
- **Source Code:** [github.com/VoVanTuTai/logistics-management-system](https://github.com/VoVanTuTai/logistics-management-system)
- **Tech Stack:** NestJS, TypeScript, PostgreSQL (3NF), RabbitMQ, React, OpenAPI 3.0, Camunda BPMN 2.0, Docker
- **Architecture Highlights:**
  - **Live Tracking Web Application:** Real-time parcel milestone progress, status verification, and dispatch waypoint visualization deployed at [tracking.nexus-ex.site](https://tracking.nexus-ex.site/).
  - **Asynchronous Event-Driven Microservices:** Decoupled message queues via RabbitMQ for dispatching, hub transit, and last-mile delivery tracking to absorb high burst traffic without dropped messages.
  - **Idempotent API Contracts:** OpenAPI 3.0 specifications enforcing `Idempotency-Key` headers on scan endpoints to prevent duplicate records upon network retries.
  - **Camunda BPMN 2.0:** Modeled end-to-end parcel lifecycle state machines with strict transition validation gates.
  - **Tamper-Proof Audit Trail:** Normalized PostgreSQL 3NF schema with composite B-Tree indexes for sub-second query latency and 100% discrepancy reconciliation during transit audits.

---

## 🛠️ Additional Technical Projects

- **[Tourist Accommodation Booking & Hospitality Platform](https://github.com/VoVanTuTai/tourist-accommodation-management-system)**
  - *Tech:* PHP (OOP & MVC), MySQL 3NF, JavaScript, VNPay IPN Webhook, Docker
  - *Highlights:* 2-phase booking lock with 15-min TTL hold, HMAC-SHA512 VNPay payment gateway, and multi-tenant RBAC.
- **[Song Tai Shop — Full-Stack E-Commerce Platform](https://github.com/VoVanTuTai/php-online-store)**
  - *Tech:* PHP OOP (Custom MVC Framework), MySQL ACID Transactions, AJAX/Fetch API, Docker Compose
  - *Highlights:* Front-Controller regex routing, pessimistic row locking (`SELECT ... FOR UPDATE`), CSRF & XSS sanitization.
- **[Cab Booking & Real-Time Dispatch Platform](https://github.com/VoVanTuTai/cab-booking-system)**
  - *Tech:* Node.js, Express.js, Redis (Locks & Geospatial), Leaflet, Docker
  - *Highlights:* Driver-rider matching backend with Redis distributed locks (`SETNX`), in-memory geospatial coordinate proximity queries (`GEOADD`, `GEORADIUS`).

---

## 📄 Curriculum Vitae (Online & Printable A4)

All CVs are designed with modern, printable A4 layouts and direct PDF downloads:

| Role / Specialization | Web Version | Download PDF |
|---|---|---|
| **Full-Stack Developer** | [cv-fullstack-developer.html](https://vovantutai-portfolio.vercel.app/cv-fullstack-developer.html) | [Download PDF](https://vovantutai-portfolio.vercel.app/VoVanTuTai_Fullstack_Developer_CV.pdf) |
| **AI Engineer (Vietnamese)** | [cv-ai-engineer.html](https://vovantutai-portfolio.vercel.app/cv-ai-engineer.html) | [Download PDF](https://vovantutai-portfolio.vercel.app/VoVanTuTai_AI_Engineer_CV_Tieng_Viet.pdf) |
| **AI Engineer (English)** | [cv-ai-engineer-en.html](https://vovantutai-portfolio.vercel.app/cv-ai-engineer-en.html) | [Download PDF](https://vovantutai-portfolio.vercel.app/VoVanTuTai_AI_Engineer_CV_English.pdf) |
| **Business Analyst / PM (Vietnamese)** | [po-ba-cv-vi.html](https://vovantutai-portfolio.vercel.app/po-ba-cv-vi.html) | [Download PDF](https://vovantutai-portfolio.vercel.app/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf) |
| **Business Analyst (English)** | [cv.html](https://vovantutai-portfolio.vercel.app/cv.html) | [Download PDF](https://vovantutai-portfolio.vercel.app/VoVanTuTai_Business_Analyst_CV.pdf) |
| **General SWE / BA (Vietnamese)** | [cv-general.html](https://vovantutai-portfolio.vercel.app/cv-general.html) | [Download PDF](https://vovantutai-portfolio.vercel.app/VoVanTuTai_IT_Business_Analyst_CV_Tong_Quat.pdf) |
| **System Integration Specialist (CRM/ERP)** | [cv-system-integration-solution-specialist.html](https://vovantutai-portfolio.vercel.app/cv-system-integration-solution-specialist.html) | [Download PDF](https://vovantutai-portfolio.vercel.app/VoVanTuTai_Chuyen_Vien_Giai_Phap_Tich_Hop_He_Thong_CV.pdf) |
| **Product Owner / BA (E-Commerce & Chat - FPT Long Châu)** | [cv-product-owner-ecommerce-chat-long-chau.html](https://vovantutai-portfolio.vercel.app/cv-product-owner-ecommerce-chat-long-chau.html) | [Download PDF](https://vovantutai-portfolio.vercel.app/VoVanTuTai_Product_Owner_Ecommerce_Chat_Long_Chau_CV.pdf) |
| **AI / Automation Engineer (Workflow Agents - SOCOM)** | [cv-ai-automation-engineer-socom.html](https://vovantutai-portfolio.vercel.app/cv-ai-automation-engineer-socom.html) | [Download PDF](https://vovantutai-portfolio.vercel.app/VoVanTuTai_AI_Automation_Engineer_SOCOM_CV.pdf) |
| **Account Executive / Project Manager (SEONGON)** | [cv-account-executive-project-management-seongon.html](https://vovantutai-portfolio.vercel.app/cv-account-executive-project-management-seongon.html) | [Download PDF](https://vovantutai-portfolio.vercel.app/VoVanTuTai_Account_Executive_SEONGON_CV.pdf) |
| **General SWE / BA (English)** | [cv-general-en.html](https://vovantutai-portfolio.vercel.app/cv-general-en.html) | [Download PDF](https://vovantutai-portfolio.vercel.app/VoVanTuTai_IT_Business_Analyst_Resume_General.pdf) |

---

## 💻 Tech Stack & Development

- **Framework:** React 19, TypeScript
- **Bundler:** Vite
- **Icons:** Lucide React
- **Styling:** Custom Modern Vanilla CSS (A4 Print-optimized, responsive layout, fluid deck interaction)

### Getting Started

```bash
# Clone the repository
git clone https://github.com/VoVanTuTai/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build

```bash
npm run build
```

---

## 📬 Contact & Links

- **Full Name:** Vo Van Tu Tai
- **Phone:** [(+84) 869 500 573](tel:+84869500573)
- **Email:** [tutaivovan@gmail.com](mailto:tutaivovan@gmail.com)
- **LinkedIn:** [linkedin.com/in/vovantutai](https://linkedin.com/in/vovantutai)
- **GitHub:** [github.com/VoVanTuTai](https://github.com/VoVanTuTai)
- **Live Demo Tracking:** [https://tracking.nexus-ex.site/](https://tracking.nexus-ex.site/)

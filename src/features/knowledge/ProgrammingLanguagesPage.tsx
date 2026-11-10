import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Code2,
  Copy,
  Cpu,
  ExternalLink,
  Github,
  HelpCircle,
  Layers,
  Network,
  RefreshCw,
  Search,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Target,
  Terminal,
  Zap,
} from "lucide-react";
import type { CodeLanguageId, FaqCategory, NavigateHandler } from "@/types";
import {
  plChecklistItems,
  plCodeSnippets,
  plInterviewQuestions,
} from "@/data/lessons/programming-languages.data";
import { BrandAvatar } from "@/components/BrandAvatar";
import { LearningPathNav } from "./components/LearningPathNav";

export function ProgrammingLanguagesPage({ navigate }: { navigate: NavigateHandler }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCodeLang, setActiveCodeLang] = useState<CodeLanguageId>("typescript");
  const [copiedCode, setCopiedCode] = useState(false);
  const [faqCategory, setFaqCategory] = useState<FaqCategory>("all");
  const [faqSearch, setFaqSearch] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [checkedChecklist, setCheckedChecklist] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleChecklist = (idx: number) => {
    setCheckedChecklist((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const checkedCount = Object.values(checkedChecklist).filter(Boolean).length;

  const handleCopyCode = (codeStr: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(codeStr);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const filteredFaqs = plInterviewQuestions.filter((item) => {
    const matchCategory = faqCategory === "all" || item.category === faqCategory;
    const matchSearch =
      faqSearch.trim() === "" ||
      item.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      item.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <main className="site-shell knowledge-shell pl-lesson">
      {/* 1. Dynamic Reading Progress Bar */}
      <div className="pl-reading-progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />

      {/* 2. Modern Executive Topbar */}
      <header className="topbar knowledge-topbar pl-topbar" aria-label="Programming languages lesson navigation">
        <div className="pl-topbar-left">
          <a
            className="brand"
            href="/knowledge"
            onClick={(event) => navigate(event, "/knowledge")}
            aria-label="Về Knowledge Hub"
          >
            <BrandAvatar alt="Võ Văn Tú Tài" />
            <div className="brand-info">
              <span className="brand-name">Võ Văn Tú Tài</span>
              <span className="brand-role-tag">Software Engineer · B.Eng in IS IUH</span>
            </div>
          </a>
          <a
            className="pl-back-home-btn"
            href="/"
            onClick={(event) => navigate(event, "/")}
          >
            <ArrowLeft size={14} aria-hidden="true" />
            <span>Trang chủ</span>
          </a>
        </div>

        <nav className="pl-topbar-nav" aria-label="Nội dung chuyên đề">
          <a href="#mental-model">01. Mental Model</a>
          <a href="#execution-pipeline">02. Execution Pipeline</a>
          <a href="#type-system">03. Hệ Kiểu &amp; Soundness</a>
          <a href="#memory-concurrency">04. Memory &amp; Concurrency</a>
          <a href="#code-comparison">05. Code Lab So Sánh</a>
          <a href="#language-selection">06. Decision Matrix &amp; Dự Án</a>
          <a href="#interview-questions">07. Phỏng Vấn Chuyên Sâu</a>
          <a href="#checklist">08. Checklist Kỹ Sư</a>
        </nav>

        <div className="pl-topbar-actions">
          <a
            href="https://tracking.nexus-ex.site/"
            target="_blank"
            rel="noreferrer"
            className="pl-cta-live"
            title="Xem hệ thống Nexus Express OMS đang chạy Live"
          >
            <ExternalLink size={14} aria-hidden="true" />
            <span>Live Demo OMS</span>
          </a>
          <a
            href="https://github.com/VoVanTuTai/logistics-management-system"
            target="_blank"
            rel="noreferrer"
            className="pl-cta-cv"
            title="Xem mã nguồn dự án Nexus Express trên GitHub"
          >
            <Github size={14} aria-hidden="true" />
            <span>GitHub Source</span>
          </a>
        </div>
      </header>

      {/* Global Learning Path Stepper */}
      <LearningPathNav currentPath="/knowledge/programming-languages" navigate={navigate} />

      {/* 3. High-Impact Hero Section */}
      <section className="knowledge-hero pl-hero">
        <div className="pl-hero-main">
          <div className="pl-breadcrumbs">
            <a href="/" onClick={(e) => navigate(e, "/")}>Portfolio</a>
            <ChevronRight size={13} aria-hidden="true" />
            <a href="/knowledge" onClick={(e) => navigate(e, "/knowledge")}>Knowledge Hub</a>
            <ChevronRight size={13} aria-hidden="true" />
            <span>Chuyên đề 01: Programming Languages &amp; Runtime Architecture</span>
          </div>

          <div className="pl-hero-badge-wrap">
            <span className="pl-hero-badge">
              <Sparkles size={14} aria-hidden="true" />
              CHUYÊN ĐỀ 01 · PROGRAMMING LANGUAGES, COMPILERS &amp; RUNTIME ARCHITECTURE
            </span>
          </div>

          <h1>Bản Chất Ngôn Ngữ Lập Trình &amp; Kiến Trúc Runtime: Từ Source Code Đến CPU Thực Thi</h1>

          <p className="knowledge-lede">
            Lý giải cội rễ cách máy tính hiểu code: Phân tích cú pháp (Lexing, AST), Cơ chế biên dịch (JIT Compiler vs AOT),
            Quản lý bộ nhớ (Call Stack, Heap, Garbage Collection), Độ an toàn hệ kiểu (Nominal vs Structural Typing),
            và Mô hình đa nhiệm (Event Loop vs Virtual Threads). Trực tiếp liên hệ qua 3 dự án production:{" "}
            <strong>Nexus Express</strong> (TypeScript/NestJS), <strong>DevFlow</strong> (Java 21/Spring Boot) và{" "}
            <strong>Song Tai Shop</strong> (PHP 8.3/MySQL).
          </p>

          <div className="pl-proof-chips" aria-label="Bằng chứng năng lực cốt lõi">
            <span className="pl-proof-chip">
              <CheckCircle2 size={15} aria-hidden="true" />
              <strong>B.Eng in Information Systems</strong> (IUH · GPA 3.26/4.0 Giỏi)
            </span>
            <span className="pl-proof-chip">
              <Code2 size={15} aria-hidden="true" />
              <strong>TypeScript &amp; NestJS</strong> (Nexus Express OMS)
            </span>
            <span className="pl-proof-chip">
              <Cpu size={15} aria-hidden="true" />
              <strong>Java 21 &amp; Spring Boot 3</strong> (DevFlow Enterprise)
            </span>
            <span className="pl-proof-chip">
              <ServerCog size={15} aria-hidden="true" />
              <strong>PHP 8.3 &amp; Modern MVC</strong> (Song Tai Shop)
            </span>
            <span className="pl-proof-chip highlight">
              <Clock size={15} aria-hidden="true" />
              <strong>Sẵn sàng làm việc Full-time ngay lập tức</strong>
            </span>
          </div>
        </div>

        <aside className="pl-hero-card">
          <div className="pl-hero-card-header">
            <Target size={18} aria-hidden="true" />
            <h3>Trọng Tâm Kiến Thức Kỹ Sư</h3>
          </div>
          <ul className="pl-hero-card-list">
            <li>
              <CheckCircle2 size={17} aria-hidden="true" />
              <div>
                <strong>Execution Pipeline &amp; JIT</strong>
                <p>Từ Source ➔ AST ➔ Bytecode/IR ➔ JIT Compiler ➔ Native Machine Code.</p>
              </div>
            </li>
            <li>
              <CheckCircle2 size={17} aria-hidden="true" />
              <div>
                <strong>Memory Model &amp; GC</strong>
                <p>Quản lý Stack vs Heap, Generational GC (G1/ZGC) và Shared-Nothing isolation.</p>
              </div>
            </li>
            <li>
              <CheckCircle2 size={17} aria-hidden="true" />
              <div>
                <strong>Type Soundness &amp; Boundary</strong>
                <p>Nominal vs Structural typing; tại sao compile-time types không thay thế runtime validation.</p>
              </div>
            </li>
            <li>
              <CheckCircle2 size={17} aria-hidden="true" />
              <div>
                <strong>1 Domain Rule · 5 Ngôn Ngữ</strong>
                <p>Thực chứng nghiệp vụ tính cước vận chuyển Logistics trên TS, Java, PHP, Python và Go.</p>
              </div>
            </li>
          </ul>
        </aside>
      </section>

      {/* 4. Main Content Layout with Sticky Sidebar */}
      <div className="lesson-layout pl-layout-container">
        <aside className="lesson-toc pl-sticky-toc" aria-label="Mục lục chuyên đề">
          <div className="pl-toc-header">
            <BookOpen size={16} aria-hidden="true" />
            <span>Nội dung Chuyên đề</span>
          </div>
          <div className="pl-toc-links">
            <a href="#mental-model">
              <span className="pl-toc-num">01</span>
              <span>Mental Model &amp; 4 Trụ Cột</span>
            </a>
            <a href="#execution-pipeline">
              <span className="pl-toc-num">02</span>
              <span>Execution Pipeline &amp; JIT</span>
            </a>
            <a href="#type-system">
              <span className="pl-toc-num">03</span>
              <span>Hệ Kiểu &amp; Type Soundness</span>
            </a>
            <a href="#memory-concurrency">
              <span className="pl-toc-num">04</span>
              <span>Memory, GC &amp; Concurrency</span>
            </a>
            <a href="#code-comparison">
              <span className="pl-toc-num">05</span>
              <span>Code Lab So Sánh 5 Ngôn Ngữ</span>
            </a>
            <a href="#language-selection">
              <span className="pl-toc-num">06</span>
              <span>Decision Matrix &amp; Dự Án</span>
            </a>
            <a href="#interview-questions">
              <span className="pl-toc-num">07</span>
              <span>Phỏng Vấn Kỹ Sư (10 Câu)</span>
            </a>
            <a href="#checklist">
              <span className="pl-toc-num">08</span>
              <span>Checklist &amp; Tài Liệu Gốc</span>
            </a>
          </div>

          <div className="pl-toc-cta-box">
            <div className="pl-toc-cta-badge">Nexus Express OMS</div>
            <h4>Hệ Thống Thực Tế</h4>
            <p>Khám phá cách TypeScript &amp; NestJS được áp dụng trong hệ thống Logistics thực chiến.</p>
            <div className="pl-toc-cta-buttons">
              <a
                href="https://tracking.nexus-ex.site/"
                target="_blank"
                rel="noreferrer"
                className="pl-toc-btn-primary"
              >
                <ExternalLink size={13} aria-hidden="true" />
                <span>Trải Nghiệm Live Demo</span>
              </a>
              <a
                href="https://github.com/VoVanTuTai/logistics-management-system"
                target="_blank"
                rel="noreferrer"
                className="pl-toc-btn-secondary"
              >
                <Github size={13} aria-hidden="true" />
                <span>Kho Mã Nguồn</span>
              </a>
            </div>
          </div>
        </aside>

        <article className="lesson-content pl-article-content">
          {/* SECTION 01: MENTAL MODEL */}
          <section className="lesson-section pl-card-section" id="mental-model">
            <div className="pl-section-badge">
              <Sparkles size={13} aria-hidden="true" />
              <span>Phần 01 · Mental Model</span>
            </div>
            <h2>Ngôn Ngữ Lập Trình Là Giao Ước Giữa Kỹ Sư Và Môi Trường Thực Thi</h2>
            <p className="pl-section-intro">
              Một sai lầm phổ biến của lập trình viên mới là xem việc học ngôn ngữ chỉ là “nhớ từ khóa và cú pháp”.
              Trong kỹ nghệ phần mềm chuyên nghiệp, ngôn ngữ lập trình là một hệ thống ký hiệu có quy tắc chặt chẽ
              được thiết kế để con người diễn đạt giải thuật, và máy tính có thể phân rã thành các chuỗi chỉ thị CPU
              với hành vi hoàn toàn có thể dự đoán được (Deterministic Behavior).
            </p>

            <div className="pl-pillar-grid">
              <div className="pl-pillar-card">
                <div className="pl-pillar-icon">
                  <Code2 size={20} aria-hidden="true" />
                </div>
                <strong>1. Syntax &amp; Grammar</strong>
                <p>
                  Tập hợp quy tắc ngữ pháp (EBNF/BNF): từ khóa, cấu trúc token, dấu ngoặc. Cú pháp quyết định đoạn code
                  có “hợp lệ về mặt văn bản” để Parser tiếp nhận hay không.
                </p>
              </div>

              <div className="pl-pillar-card">
                <div className="pl-pillar-icon">
                  <Network size={20} aria-hidden="true" />
                </div>
                <strong>2. Semantics</strong>
                <p>
                  Ý nghĩa và hành vi thực sự khi đoạn code chạy: Giá trị được gán thế nào, scope tìm kiếm biến ra sao,
                  hàm truyền tham trị hay tham chiếu, và exception lan truyền như thế nào.
                </p>
              </div>

              <div className="pl-pillar-card">
                <div className="pl-pillar-icon">
                  <Cpu size={20} aria-hidden="true" />
                </div>
                <strong>3. Runtime Environment</strong>
                <p>
                  Cỗ máy sống cấp phát bộ nhớ, quản lý Call Stack, Heap, Garbage Collector, luồng OS (Threads), Event Loop
                  và giao tiếp với kernel hệ điều hành qua System Calls.
                </p>
              </div>

              <div className="pl-pillar-card">
                <div className="pl-pillar-icon">
                  <BriefcaseBusiness size={20} aria-hidden="true" />
                </div>
                <strong>4. Ecosystem &amp; Tooling</strong>
                <p>
                  Hệ sinh thái quyết định năng suất: Package Manager (npm, Maven, Composer), Linter, Type Checker,
                  Profiler, Testing Frameworks và cộng đồng hỗ trợ bảo mật.
                </p>
              </div>
            </div>

            <div className="pl-callout-box">
              <div className="pl-callout-icon">
                <ShieldCheck size={22} aria-hidden="true" />
              </div>
              <div className="pl-callout-body">
                <strong>Quy Luật Kiến Trúc Cần Khắc Cốt Ghi Tâm:</strong>
                <p>
                  CPU không bao giờ trực tiếp hiểu source code PHP, TypeScript hay Java. Ở giữa bàn phím của bạn và
                  thanh ghi CPU luôn tồn tại một chuỗi công cụ chuyển đổi (Transformation Pipeline): Lexer ➔ Parser ➔ AST
                  ➔ Bytecode/IR ➔ JIT/AOT Compiler ➔ Native Machine Code. Khi gặp lỗi, kỹ sư giỏi luôn biết lỗi đó thuộc
                  về bước nào trong pipeline thay vì thử sai một cách mù quáng.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 02: EXECUTION PIPELINE */}
          <section className="lesson-section pl-card-section" id="execution-pipeline">
            <div className="pl-section-badge">
              <Zap size={13} aria-hidden="true" />
              <span>Phần 02 · Execution Pipeline</span>
            </div>
            <h2>Hành Trình Chuyển Hóa: Từ Ký Tự Text Đến Thanh Ghi CPU</h2>
            <p className="pl-section-intro">
              Dù mỗi ngôn ngữ có thiết kế khác nhau, pipeline tổng quát dưới đây là nền tảng cốt lõi giải thích vì sao
              cùng một đoạn code lại có tốc độ thực thi, mức tiêu thụ RAM và thời gian khởi động khác nhau hoàn toàn.
            </p>

            {/* Step Flow Pipeline */}
            <div className="pl-pipeline-wrap" aria-label="Programming language execution pipeline flow">
              <div className="pl-pipeline-flow">
                <div className="pl-pipe-step">
                  <span className="pl-pipe-step-num">Bước 01</span>
                  <h4>Source Code</h4>
                  <p>Chuỗi ký tự ASCII/UTF-8 trong file (.ts, .java, .php, .go) do kỹ sư viết.</p>
                  <span className="pl-pipe-tag">Plain Text</span>
                </div>

                <div className="pl-pipe-arrow" aria-hidden="true">➔</div>

                <div className="pl-pipe-step">
                  <span className="pl-pipe-step-num">Bước 02</span>
                  <h4>Lex &amp; Parse</h4>
                  <p>Tokenizer chia từ tố, Parser dựng Cây cú pháp trừu tượng (Abstract Syntax Tree - AST).</p>
                  <span className="pl-pipe-tag">Grammar Tree</span>
                </div>

                <div className="pl-pipe-arrow" aria-hidden="true">➔</div>

                <div className="pl-pipe-step">
                  <span className="pl-pipe-step-num">Bước 03</span>
                  <h4>Intermediate Rep (IR)</h4>
                  <p>Chuyển AST thành dạng trung gian: Java Bytecode, Zend Opcodes, LLVM IR, hoặc JS output.</p>
                  <span className="pl-pipe-tag">Bytecode / IR</span>
                </div>

                <div className="pl-pipe-arrow" aria-hidden="true">➔</div>

                <div className="pl-pipe-step">
                  <span className="pl-pipe-step-num">Bước 04</span>
                  <h4>Runtime &amp; JIT</h4>
                  <p>JVM HotSpot, V8 Engine hoặc Zend Engine quản lý nạp code, bộ nhớ và JIT optimize.</p>
                  <span className="pl-pipe-tag">Engine VM</span>
                </div>

                <div className="pl-pipe-arrow" aria-hidden="true">➔</div>

                <div className="pl-pipe-step">
                  <span className="pl-pipe-step-num">Bước 05</span>
                  <h4>Native CPU Execution</h4>
                  <p>Mã nhị phân máy tính (x86_64 / ARM64) chạy trực tiếp trên các thanh ghi và cache L1/L2/L3.</p>
                  <span className="pl-pipe-tag">Machine Code</span>
                </div>
              </div>
            </div>

            {/* Architecture Comparison Cards */}
            <div className="pl-arch-matrix">
              <article className="pl-arch-card">
                <div className="pl-arch-card-header">
                  <h3>1. Ahead-of-Time (AOT) Compiled</h3>
                  <span className="pl-arch-badge aot">Go · Rust · C++</span>
                </div>
                <p>
                  Biên dịch toàn bộ source code thành file nhị phân máy (Native Binary) trước khi chạy. Không cần máy ảo (VM)
                  nặng nề, khởi động cực nhanh và chiếm rất ít RAM.
                </p>
                <div className="pl-arch-meta">
                  <div className="pl-arch-meta-row">
                    <span>Ưu thế:</span>
                    <span>Zero Warmup, deploy 1 file binary duy nhất, hiệu năng raw tối đa.</span>
                  </div>
                  <div className="pl-arch-meta-row">
                    <span>Đánh đổi:</span>
                    <span>Thời gian compile lâu, phụ thuộc kiến trúc CPU đích (phải cross-compile).</span>
                  </div>
                </div>
              </article>

              <article className="pl-arch-card">
                <div className="pl-arch-card-header">
                  <h3>2. Bytecode + Tiered JIT</h3>
                  <span className="pl-arch-badge jit">Java (JVM) · C# (.NET)</span>
                </div>
                <p>
                  Source code được biên dịch trước thành Bytecode (.class). Tại runtime, JVM dùng Interpreter chạy trước,
                  rồi JIT Compiler (C1 Client / C2 Server) tự động biên dịch các đoạn code 'nóng' thành mã máy tối ưu hóa.
                </p>
                <div className="pl-arch-meta">
                  <div className="pl-arch-meta-row">
                    <span>Ưu thế:</span>
                    <span>Write Once, Run Anywhere; profiling thời gian thực tối ưu cực sâu.</span>
                  </div>
                  <div className="pl-arch-meta-row">
                    <span>Đánh đổi:</span>
                    <span>Cần thời gian warmup ban đầu, JVM tiêu tốn footprint RAM lớn hơn AOT.</span>
                  </div>
                </div>
              </article>

              <article className="pl-arch-card">
                <div className="pl-arch-card-header">
                  <h3>3. Transpiled + V8 JIT Engine</h3>
                  <span className="pl-arch-badge v8">TypeScript ➔ JavaScript</span>
                </div>
                <p>
                  TypeScript không chạy trực tiếp trên CPU. Trình biên dịch `tsc` xác minh kiểu dữ liệu, loại bỏ toàn bộ type
                  annotation (Type Erasure) và sinh ra JavaScript. V8 Engine (Node.js/Chrome) tiếp nhận JS qua Ignition &amp; TurboFan.
                </p>
                <div className="pl-arch-meta">
                  <div className="pl-arch-meta-row">
                    <span>Ưu thế:</span>
                    <span>Bảo vệ type lúc dev, chia sẻ models giữa Frontend và Backend (Nexus Express).</span>
                  </div>
                  <div className="pl-arch-meta-row">
                    <span>Đánh đổi:</span>
                    <span>Runtime không còn type; bắt buộc phải có validation layer ở boundary.</span>
                  </div>
                </div>
              </article>

              <article className="pl-arch-card">
                <div className="pl-arch-card-header">
                  <h3>4. Interpreted + Opcode Cache</h3>
                  <span className="pl-arch-badge opcache">PHP 8.3 (Zend Engine)</span>
                </div>
                <p>
                  Zend Engine dịch file PHP thành Opcodes. Với OPcache bật sẵn trong PHP-FPM, opcodes được lưu trên Shared Memory,
                  loại bỏ việc parse lại code trên mỗi request. PHP 8 bổ sung JIT cho các tác vụ tính toán chuyên sâu.
                </p>
                <div className="pl-arch-meta">
                  <div className="pl-arch-meta-row">
                    <span>Ưu thế:</span>
                    <span>Shared-Nothing: giải phóng 100% RAM sau request, không sợ memory leak dài hạn.</span>
                  </div>
                  <div className="pl-arch-meta-row">
                    <span>Đánh đổi:</span>
                    <span>Mỗi request phải khởi tạo lại context cơ bản nếu không dùng persistent pool.</span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* SECTION 03: TYPE SYSTEM */}
          <section className="lesson-section pl-card-section" id="type-system">
            <div className="pl-section-badge">
              <ShieldCheck size={13} aria-hidden="true" />
              <span>Phần 03 · Type System &amp; Soundness</span>
            </div>
            <h2>Hệ Kiểu: Ràng Buộc Hợp Lệ Của Phép Toán Và Giới Hạn Của Compiler</h2>
            <p className="pl-section-intro">
              Hai trục phân loại thường bị nhầm lẫn trong phỏng vấn kỹ sư là: <strong>Thời điểm kiểm tra kiểu</strong> (Static vs Dynamic)
              và <strong>Mức độ nghiêm ngặt khi ép kiểu</strong> (Strong vs Weak). Ngoài ra, sự khác biệt giữa{" "}
              <strong>Nominal Typing</strong> (Java) và <strong>Structural Typing</strong> (TypeScript) định hình toàn bộ cách thiết kế phần mềm.
            </p>

            <div className="pl-type-grid">
              <div className="pl-type-card">
                <h3>Trục 1: Static vs Dynamic</h3>
                <p>
                  <strong>Static Typing</strong> (Java, Go, TypeScript): Kiểu dữ liệu gắn với biến và được kiểm tra trước khi chạy.
                  <br /><br />
                  <strong>Dynamic Typing</strong> (PHP, Python, JavaScript): Kiểu dữ liệu gắn với giá trị (Value) và kiểm tra khi dòng lệnh chạy tới.
                </p>
                <div className="pl-type-example">
                  <strong>Ví dụ:</strong>
                  <span>Java báo lỗi đỏ ngay lúc gõ code; PHP kiểm tra ràng buộc khi hàm được gọi.</span>
                </div>
              </div>

              <div className="pl-type-card">
                <h3>Trục 2: Strong vs Weak</h3>
                <p>
                  <strong>Strong Typing</strong> (Java, Python, Go): Ngôn ngữ từ chối các phép toán giữa các kiểu không tương thích.
                  <br /><br />
                  <strong>Weak Typing</strong> (JavaScript, PHP thuần): Tự ý ép kiểu ngầm (Implicit Coercion), ví dụ <code>"5" + 2 = "52"</code> hay <code>"5" - 2 = 3</code>.
                </p>
                <div className="pl-type-example">
                  <strong>Hệ quả:</strong>
                  <span>Weak typing tạo ra các bug ngầm cực kỳ nguy hiểm trong tính toán tiền tệ.</span>
                </div>
              </div>

              <div className="pl-type-card">
                <h3>Trục 3: Nominal vs Structural</h3>
                <p>
                  <strong>Nominal Typing</strong> (Java): Hai kiểu chỉ tương thích nếu cùng tên hoặc kế thừa tường minh.
                  <br /><br />
                  <strong>Structural Typing</strong> (TypeScript, Go): Hai kiểu tương thích nếu chúng có cùng “hình dạng” thuộc tính (Duck Typing).
                </p>
                <div className="pl-type-example">
                  <strong>Nexus Express:</strong>
                  <span>Object trả về từ Prisma tự động thỏa mãn interface DTO vì cùng shape.</span>
                </div>
              </div>
            </div>

            {/* Enterprise Comparison Table */}
            <div className="pl-table-container">
              <table className="pl-data-table">
                <thead>
                  <tr>
                    <th>Ngôn ngữ</th>
                    <th>Kiểm Tra Kiểu</th>
                    <th>Cơ Chế Định Danh</th>
                    <th>Hành Vi Khi Chạy (Runtime)</th>
                    <th>Áp Dụng Trong Dự Án Của Tôi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="pl-lang-cell">
                        <Code2 size={16} color="#2563eb" />
                        <span>TypeScript 5</span>
                      </div>
                    </td>
                    <td>Static (Compile-time)</td>
                    <td>Structural (Duck Typing)</td>
                    <td>Type bị xóa hoàn toàn (Type Erasure); V8 chạy JavaScript thuần</td>
                    <td><strong>Nexus Express OMS:</strong> Chia sẻ DTOs giữa Frontend và NestJS</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="pl-lang-cell">
                        <Cpu size={16} color="#b45309" />
                        <span>Java 21</span>
                      </div>
                    </td>
                    <td>Static (Compile-time)</td>
                    <td>Nominal (Dựa trên tên Class)</td>
                    <td>Bytecode giữ lại metadata class; runtime JVM kiểm tra instanceof an toàn</td>
                    <td><strong>DevFlow Enterprise:</strong> Strict layered architecture, Spring Security</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="pl-lang-cell">
                        <ServerCog size={16} color="#7c3aed" />
                        <span>PHP 8.3</span>
                      </div>
                    </td>
                    <td>Dynamic + Gradual Typing</td>
                    <td>Nominal (Class &amp; Type hints)</td>
                    <td>Zend Engine kiểm tra ràng buộc kiểu khi gọi hàm qua <code>strict_types=1</code></td>
                    <td><strong>Song Tai Shop:</strong> Web MVC, xử lý đơn hàng &amp; cổng thanh toán VNPay</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="pl-lang-cell">
                        <Terminal size={16} color="#059669" />
                        <span>Python 3.12</span>
                      </div>
                    </td>
                    <td>Dynamic + Type Hints</td>
                    <td>Duck Typing + Protocol</td>
                    <td>CPython chạy bytecode; dùng Pydantic / Mypy để xác thực runtime</td>
                    <td><strong>AI Assistant:</strong> Data processing pipelines, RAG LangChain</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="pl-lang-cell">
                        <Boxes size={16} color="#0284c7" />
                        <span>Go 1.22</span>
                      </div>
                    </td>
                    <td>Static Strong</td>
                    <td>Structural (Implicit Interfaces)</td>
                    <td>Mã máy gốc trực tiếp; interface dispatch qua itable (interface table)</td>
                    <td>High-throughput API Gateway, microservices micro-benchmark</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pl-callout-box">
              <div className="pl-callout-icon">
                <AlertTriangle size={22} aria-hidden="true" />
              </div>
              <div className="pl-callout-body">
                <strong>Bẫy Kỹ Thuật: Static Typing Không Thay Thế Được Runtime Validation!</strong>
                <p>
                  Một compiler có thể bảo đảm biến <code>weightGrams: number</code> không bị gán string trong code của bạn.
                  Nhưng khi người dùng gửi một HTTP POST request qua mạng, compiler không ở đó để bảo vệ hệ thống.
                  Payload JSON hoàn toàn có thể chứa số âm <code>-500</code> hoặc số cực lớn gây overflow.
                  Trong các hệ thống enterprise, tầng Boundary Validation (Zod/class-validator trong TypeScript, Hibernate Validator @Valid trong Java)
                  luôn là lớp phòng thủ bắt buộc trước khi đưa dữ liệu vào Domain Model.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 04: MEMORY & CONCURRENCY */}
          <section className="lesson-section pl-card-section" id="memory-concurrency">
            <div className="pl-section-badge">
              <Cpu size={13} aria-hidden="true" />
              <span>Phần 04 · Memory Architecture &amp; Concurrency</span>
            </div>
            <h2>Kiến Trúc Bộ Nhớ (Stack vs Heap) &amp; Các Mô Hình Đa Nhiệm</h2>
            <p className="pl-section-intro">
              Sự ổn định của hệ thống backend chịu tải cao phụ thuộc vào hai yếu tố then chốt: Cách runtime cấp phát và thu hồi
              bộ nhớ RAM, cùng chiến lược xử lý đồng thời hàng nghìn kết nối I/O.
            </p>

            <div className="pl-memory-grid">
              <div className="pl-memory-card">
                <h3>
                  <Layers size={18} aria-hidden="true" />
                  <span>Call Stack vs Heap Memory</span>
                </h3>
                <ul>
                  <li>
                    <strong>Call Stack (Ngăn xếp):</strong> Cấp phát LIFO siêu nhanh, lưu trữ các biến nguyên thủy (primitives)
                    và con trỏ tham chiếu (references). Bộ nhớ tự giải phóng ngay khi hàm kết thúc mà không cần GC.
                  </li>
                  <li>
                    <strong>Heap (Vùng nhớ tự do):</strong> Cấp phát động cho các Object, Mảng lớn, tồn tại độc lập với thời gian chạy
                    của hàm. Đòi hỏi cơ chế Garbage Collection thu hồi, có nguy cơ gây OutOfMemory nếu bị leak.
                  </li>
                  <li>
                    <strong>StackOverflow vs OutOfMemory:</strong> Stack tràn khi đệ quy quá sâu không có điểm dừng;
                    Heap tràn khi các object không còn dùng nhưng vẫn bị tham chiếu giữ lại (Unclosed EventListeners, Static Maps).
                  </li>
                </ul>
              </div>

              <div className="pl-memory-card">
                <h3>
                  <RefreshCw size={18} aria-hidden="true" />
                  <span>Ba Chiến Lược Quản Lý Bộ Nhớ</span>
                </h3>
                <ul>
                  <li>
                    <strong>JVM Generational GC (Java):</strong> Chia nhỏ Heap thành Young và Old Gen. Thuật toán Mark-Sweep-Compact.
                    Trình thu gom hiện đại (ZGC, G1GC) duy trì độ trễ ngắt (Stop-the-World pause) dưới 1ms.
                  </li>
                  <li>
                    <strong>V8 Generational Scavenge (Node.js):</strong> Sử dụng Semi-space copying cho New Space (siêu nhanh)
                    và Mark-Sweep-Compact cho Old Space.
                  </li>
                  <li>
                    <strong>Shared-Nothing Lifecycle (PHP-FPM):</strong> Mỗi HTTP request cấp phát vùng nhớ độc lập qua Zend Memory Manager.
                    Khi request kết thúc, 100% vùng nhớ được trả về OS, triệt tiêu nguy cơ rò rỉ bộ nhớ dài hạn.
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="scenario-heading">Ba Mô Hình Concurrency Kinh Điển Trong Backend</h3>
            <div className="pl-concurrency-grid">
              <div className="pl-concurrency-card">
                <h4>Single-Threaded Event Loop</h4>
                <span className="pl-concurrency-tag">Node.js (TypeScript) · Libuv</span>
                <p>
                  Một thread chính thực thi code, ủy thác I/O cho Libuv thread pool. Cực kỳ tối ưu cho các tác vụ I/O bound
                  (WebSocket tracking của Nexus Express, REST API). Tuy nhiên một tác vụ CPU-bound nặng có thể block toàn bộ server.
                </p>
              </div>

              <div className="pl-concurrency-card">
                <h4>Virtual Threads (Project Loom)</h4>
                <span className="pl-concurrency-tag">Java 21 · Spring Boot 3</span>
                <p>
                  Không bị giới hạn bởi 1-2MB/thread của OS thread truyền thống. Virtual Threads là user-mode threads siêu nhẹ (vài KB),
                  cho phép xử lý đồng thời hàng chục nghìn request theo phong cách synchronous blocking code quen thuộc mà không nghẽn OS thread.
                </p>
              </div>

              <div className="pl-concurrency-card">
                <h4>Multi-Process Worker Pool</h4>
                <span className="pl-concurrency-tag">PHP 8 · PHP-FPM</span>
                <p>
                  Master process quản lý một pool các worker processes. Mỗi request chiếm dụng 1 process riêng biệt, không chia sẻ bộ nhớ.
                  Lập trình đơn giản, an toàn tuyệt đối khỏi race condition, một worker crash không làm ảnh hưởng các request khác.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 05: CODE LAB */}
          <section className="lesson-section pl-card-section" id="code-comparison">
            <div className="pl-section-badge">
              <Code2 size={13} aria-hidden="true" />
              <span>Phần 05 · Interactive Code Lab</span>
            </div>
            <h2>Một Quy Tắc Nghiệp Vụ Vận Chuyển — Triển Khai Qua 5 Ngôn Ngữ</h2>
            <p className="pl-section-intro">
              Quan sát cùng một bài toán tính cước vận chuyển thực tế từ <strong>Nexus Express</strong> và <strong>Song Tai Shop</strong>:
              1 kg đầu có giá 15.000 VND; mỗi 500 g phát sinh tiếp theo thêm 4.000 VND; dịch vụ giao nhanh cộng thêm 10.000 VND.
              Tiền tệ được duy trì dưới dạng số nguyên VND để triệt tiêu hoàn toàn sai số dấu phẩy động (IEEE 754).
            </p>

            {/* Interactive Code Window */}
            <div className="pl-code-lab">
              <div className="pl-code-nav-bar">
                <div className="pl-term-dots">
                  <span className="pl-term-dot red" />
                  <span className="pl-term-dot yellow" />
                  <span className="pl-term-dot green" />
                </div>

                <div className="pl-lang-tabs" role="tablist" aria-label="Language selection tabs">
                  <button
                    className={`pl-lang-tab ${activeCodeLang === "typescript" ? "active" : ""}`}
                    onClick={() => setActiveCodeLang("typescript")}
                    role="tab"
                    aria-selected={activeCodeLang === "typescript"}
                  >
                    TypeScript 5 (NestJS)
                  </button>
                  <button
                    className={`pl-lang-tab ${activeCodeLang === "java" ? "active" : ""}`}
                    onClick={() => setActiveCodeLang("java")}
                    role="tab"
                    aria-selected={activeCodeLang === "java"}
                  >
                    Java 21 (Spring Boot)
                  </button>
                  <button
                    className={`pl-lang-tab ${activeCodeLang === "php" ? "active" : ""}`}
                    onClick={() => setActiveCodeLang("php")}
                    role="tab"
                    aria-selected={activeCodeLang === "php"}
                  >
                    PHP 8.3 (Strict MVC)
                  </button>
                  <button
                    className={`pl-lang-tab ${activeCodeLang === "python" ? "active" : ""}`}
                    onClick={() => setActiveCodeLang("python")}
                    role="tab"
                    aria-selected={activeCodeLang === "python"}
                  >
                    Python 3.12 (Pydantic)
                  </button>
                  <button
                    className={`pl-lang-tab ${activeCodeLang === "go" ? "active" : ""}`}
                    onClick={() => setActiveCodeLang("go")}
                    role="tab"
                    aria-selected={activeCodeLang === "go"}
                  >
                    Go 1.22 (Idiomatic)
                  </button>
                </div>

                <div className="pl-code-actions">
                  <button
                    className={`pl-copy-code-btn ${copiedCode ? "copied" : ""}`}
                    onClick={() => handleCopyCode(plCodeSnippets[activeCodeLang].code)}
                    title="Sao chép mã nguồn"
                  >
                    {copiedCode ? (
                      <>
                        <Check size={13} aria-hidden="true" />
                        <span>Đã chép!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} aria-hidden="true" />
                        <span>Sao chép</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="pl-code-body">
                <pre>
                  <code>{plCodeSnippets[activeCodeLang].code}</code>
                </pre>
              </div>

              <div className="pl-code-notes-panel">
                <div className="pl-code-note-item">
                  <strong>
                    <Layers size={14} aria-hidden="true" />
                    <span>Mô Hình Paradigm:</span>
                  </strong>
                  <p>{plCodeSnippets[activeCodeLang].paradigm}</p>
                </div>
                <div className="pl-code-note-item">
                  <strong>
                    <ShieldCheck size={14} aria-hidden="true" />
                    <span>Cơ Chế Hệ Kiểu:</span>
                  </strong>
                  <p>{plCodeSnippets[activeCodeLang].typeMechanism}</p>
                </div>
                <div className="pl-code-note-item">
                  <strong>
                    <Cpu size={14} aria-hidden="true" />
                    <span>Động Cơ Runtime:</span>
                  </strong>
                  <p>{plCodeSnippets[activeCodeLang].runtimeEngine}</p>
                </div>
              </div>
            </div>

            <div className="pl-callout-box">
              <div className="pl-callout-icon">
                <CheckCircle2 size={22} aria-hidden="true" />
              </div>
              <div className="pl-callout-body">
                <strong>Điểm Kiểm Tra Kỹ Sư Cần Lưu Ý:</strong>
                <p>
                  Cú pháp giữa các ngôn ngữ có thể khác biệt, nhưng bản chất nghiệp vụ (Domain Invariants) phải đồng nhất:
                  Luôn chặn số âm hoặc 0g tại boundary, bảo toàn kiểu số nguyên VND để tránh sai số dấu phẩy động IEEE 754,
                  và kiểm thử kỹ lưỡng tại các điểm biên (1000g không bị phụ phí; 1001g lập tức nhảy bậc 1 đơn vị phụ phí).
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 06: LANGUAGE SELECTION & PROJECT EVIDENCE */}
          <section className="lesson-section pl-card-section" id="language-selection">
            <div className="pl-section-badge">
              <BriefcaseBusiness size={13} aria-hidden="true" />
              <span>Phần 06 · Decision Matrix &amp; Project Evidence</span>
            </div>
            <h2>Lựa Chọn Công Nghệ Từ Ràng Buộc Kỹ Thuật &amp; Bằng Chứng Thực Tế</h2>
            <p className="pl-section-intro">
              Một kỹ sư giỏi không bao giờ chọn ngôn ngữ vì “yêu thích cá nhân” hay “bảng xếp hạng xu hướng”.
              Lựa chọn đúng đắn luôn bắt nguồn từ sự cân bằng giữa 6 ràng buộc: Bài toán nghiệp vụ, Độ chín hệ sinh thái,
              Năng lực đội ngũ, Yêu cầu độ trễ/thông lượng, Chi phí vận hành hạ tầng và Vòng đời bảo trì.
            </p>

            <div className="decision-checklist">
              <p className="panel-label">Checklist 6 Trục Ra Quyết Định Công Nghệ</p>
              <ol>
                <li>
                  <span>1</span>
                  <p><strong>Problem Domain:</strong> Hệ thống cần I/O streaming, real-time WebSocket, batch processing hay web CRUD?</p>
                </li>
                <li>
                  <span>2</span>
                  <p><strong>Ecosystem &amp; Libraries:</strong> Thư viện ORM, driver database, security patches và tài liệu có trưởng thành không?</p>
                </li>
                <li>
                  <span>3</span>
                  <p><strong>Team &amp; Talent:</strong> Chi phí tuyển dụng và tốc độ onboarding thành viên mới vào codebase như thế nào?</p>
                </li>
                <li>
                  <span>4</span>
                  <p><strong>Runtime Performance:</strong> Cần độ trễ p99 thấp (AOT Go/Rust) hay thông lượng I/O cao (Node.js/Java)?</p>
                </li>
                <li>
                  <span>5</span>
                  <p><strong>Operations &amp; CI/CD:</strong> Kích thước Docker image, thời gian build CI/CD và mức tiêu thụ RAM container?</p>
                </li>
                <li>
                  <span>6</span>
                  <p><strong>Maintainability:</strong> Hệ thống cần duy trì trong 5-10 năm tới hay chỉ là MVP thăm dò thị trường trong 3 tháng?</p>
                </li>
              </ol>
            </div>

            <h3 className="scenario-heading">Bằng Chứng Ứng Dụng Trong 3 Dự Án Thực Chiến Của Tôi</h3>
            <div className="pl-project-evidence-grid">
              <div className="pl-project-card">
                <div className="pl-proj-card-top">
                  <span className="pl-proj-lang-pill ts">TypeScript</span>
                  <span className="pl-pipe-tag">Production Live</span>
                </div>
                <h3>Nexus Express (Logistics OMS)</h3>
                <div className="pl-proj-stack">NestJS · Next.js · Prisma · Redis · PostgreSQL</div>
                <p>
                  Chọn TypeScript full-stack để đồng bộ hợp đồng dữ liệu (Shared Types &amp; DTOs) giữa Client và Server.
                  Tận dụng kiến trúc Non-blocking Event Loop của Node.js để xử lý hàng ngàn kết nối WebSocket cập nhật vị trí
                  kiện hàng theo thời gian thực mà không ngốn bộ nhớ thread.
                </p>
                <div className="pl-proj-footer">
                  <span className="pl-proj-role-tag">Fullstack &amp; System Architect</span>
                  <a
                    href="https://tracking.nexus-ex.site/"
                    target="_blank"
                    rel="noreferrer"
                    className="pl-proj-link"
                  >
                    <span>Live Demo ↗</span>
                  </a>
                </div>
              </div>

              <div className="pl-project-card">
                <div className="pl-proj-card-top">
                  <span className="pl-proj-lang-pill java">Java 21</span>
                  <span className="pl-pipe-tag">Enterprise Core</span>
                </div>
                <h3>DevFlow (Task Management)</h3>
                <div className="pl-proj-stack">Java 21 LTS · Spring Boot 3 · JPA · Docker</div>
                <p>
                  Chọn Java 21 để luyện tập hệ kiểu tĩnh danh nghĩa (Strict Nominal Typing), phân tầng kiến trúc chặt chẽ
                  (Controller - Service - Repository), quản trị ACID transactions với Hibernate, và vận dụng Virtual Threads
                  cho các tác vụ gửi thông báo nền (Background Batch Jobs).
                </p>
                <div className="pl-proj-footer">
                  <span className="pl-proj-role-tag">Backend Engineer</span>
                  <span className="pl-proj-role-tag">Architecture Evidence</span>
                </div>
              </div>

              <div className="pl-project-card">
                <div className="pl-proj-card-top">
                  <span className="pl-proj-lang-pill php">PHP 8.3</span>
                  <span className="pl-pipe-tag">Web Commercial</span>
                </div>
                <h3>Song Tai Shop (E-Commerce)</h3>
                <div className="pl-proj-stack">PHP 8.3 · MySQL · MVC Pattern · VNPay</div>
                <p>
                  Chọn PHP 8.3 kết hợp MVC để làm chủ mô hình Request-Response truyền thống, quản lý session giỏ hàng,
                  xử lý cURL API tích hợp cổng thanh toán VNPay chuẩn xác. Tận dụng mô hình Shared-Nothing giúp hệ thống
                  hoạt động ổn định trên hosting chi phí thấp mà không lo rò rỉ RAM.
                </p>
                <div className="pl-proj-footer">
                  <span className="pl-proj-role-tag">Fullstack Developer</span>
                  <span className="pl-proj-role-tag">Production Ready</span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 07: INTERVIEW QUESTIONS */}
          <section className="lesson-section pl-card-section" id="interview-questions">
            <div className="pl-section-badge">
              <HelpCircle size={13} aria-hidden="true" />
              <span>Phần 07 · Technical Interview Hub</span>
            </div>
            <h2>10 Câu Hỏi Phỏng Vấn Kỹ Sư Chuyên Sâu Về Programming Languages &amp; Runtime</h2>
            <p className="pl-section-intro">
              Bộ câu hỏi thường xuất hiện trong các vòng phỏng vấn Kỹ sư Phần mềm (Software Engineer / Backend Developer)
              nhằm phân loại ứng viên hiểu bản chất hệ thống với ứng viên chỉ biết dùng framework ở bề mặt.
            </p>

            <div className="pl-faq-controls">
              <div className="pl-faq-categories" role="group" aria-label="Lọc câu hỏi phỏng vấn theo chủ đề">
                <button
                  className={`pl-faq-cat-btn ${faqCategory === "all" ? "active" : ""}`}
                  onClick={() => setFaqCategory("all")}
                >
                  Tất cả ({plInterviewQuestions.length})
                </button>
                <button
                  className={`pl-faq-cat-btn ${faqCategory === "runtime" ? "active" : ""}`}
                  onClick={() => setFaqCategory("runtime")}
                >
                  Runtime &amp; Engine
                </button>
                <button
                  className={`pl-faq-cat-btn ${faqCategory === "memory" ? "active" : ""}`}
                  onClick={() => setFaqCategory("memory")}
                >
                  Memory &amp; GC
                </button>
                <button
                  className={`pl-faq-cat-btn ${faqCategory === "types" ? "active" : ""}`}
                  onClick={() => setFaqCategory("types")}
                >
                  Hệ Kiểu
                </button>
                <button
                  className={`pl-faq-cat-btn ${faqCategory === "concurrency" ? "active" : ""}`}
                  onClick={() => setFaqCategory("concurrency")}
                >
                  Concurrency
                </button>
              </div>

              <div className="pl-faq-search-wrap">
                <Search size={14} aria-hidden="true" />
                <input
                  type="text"
                  className="pl-faq-search-input"
                  placeholder="Tìm kiếm câu hỏi (JIT, Stack, GC, V8...)"
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="pl-faq-list">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div className={`pl-faq-item ${isOpen ? "open" : ""}`} key={faq.question}>
                    <button
                      className="pl-faq-question"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <div className="pl-faq-q-left">
                        <span className="pl-faq-badge">{faq.categoryLabel}</span>
                        <strong>{faq.question}</strong>
                      </div>
                      <ChevronDown size={18} className="pl-faq-chevron" aria-hidden="true" />
                    </button>
                    {isOpen && (
                      <div className="pl-faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
              {filteredFaqs.length === 0 && (
                <p style={{ textAlign: "center", color: "#64748b", padding: "20px" }}>
                  Không tìm thấy câu hỏi phù hợp với từ khóa &ldquo;{faqSearch}&rdquo;.
                </p>
              )}
            </div>
          </section>

          {/* SECTION 08: CHECKLIST & RESOURCES */}
          <section className="lesson-section pl-card-section" id="checklist">
            <div className="pl-section-badge">
              <CheckCircle2 size={13} aria-hidden="true" />
              <span>Phần 08 · Checklist &amp; Resources</span>
            </div>
            <h2>Tự Đánh Giá Năng Lực &amp; Tài Liệu Kiến Trúc Gốc</h2>
            <p className="pl-section-intro">
              Đánh dấu các tiêu chí kỹ thuật mà bạn đã nắm vững sau chuyên đề này để xác nhận sự tự tin trước các buổi phỏng vấn kỹ thuật.
            </p>

            <div className="pl-checklist-box">
              <div className="pl-checklist-header">
                <div className="pl-checklist-title-wrap">
                  <CheckCircle2 size={18} color="#059669" aria-hidden="true" />
                  <h4>Checklist 7 Tiêu Chuẩn Năng Lực Kỹ Sư</h4>
                </div>
                <div className="pl-checklist-pill">
                  {checkedCount}/7 Tiêu chuẩn hoàn thành
                </div>
              </div>

              <div className="pl-checklist-items">
                {plChecklistItems.map((item, idx) => {
                  const isChecked = !!checkedChecklist[idx];
                  return (
                    <div
                      key={item.title}
                      className={`pl-check-item ${isChecked ? "checked" : ""}`}
                      onClick={() => toggleChecklist(idx)}
                      role="checkbox"
                      aria-checked={isChecked}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === " " || e.key === "Enter") {
                          e.preventDefault();
                          toggleChecklist(idx);
                        }
                      }}
                    >
                      <div className="pl-custom-check">
                        {isChecked && <Check size={14} aria-hidden="true" />}
                      </div>
                      <div className="pl-check-content">
                        <strong>{item.title}</strong>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <h3 className="scenario-heading">Tài Liệu Đặc Tả Kỹ Thuật Chính Thức Nên Đọc</h3>
            <div className="pl-resource-grid">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model"
                target="_blank"
                rel="noreferrer"
                className="pl-resource-link"
              >
                <div className="pl-resource-left">
                  <span className="pl-resource-pub">MDN Web Docs</span>
                  <strong>JavaScript Execution Model</strong>
                  <span>Engine, call stack, agent, job queue &amp; event loop architecture.</span>
                </div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>

              <a
                href="https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-1.html"
                target="_blank"
                rel="noreferrer"
                className="pl-resource-link"
              >
                <div className="pl-resource-left">
                  <span className="pl-resource-pub">Oracle Corporation</span>
                  <strong>The Java Virtual Machine Specification (Java 21)</strong>
                  <span>JVM architecture, class file format, bytecode verification &amp; memory areas.</span>
                </div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>

              <a
                href="https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html"
                target="_blank"
                rel="noreferrer"
                className="pl-resource-link"
              >
                <div className="pl-resource-left">
                  <span className="pl-resource-pub">TypeScript Official</span>
                  <strong>TypeScript Handbook: Type Erasure &amp; Soundness</strong>
                  <span>Quan hệ giữa compile-time types, JavaScript runtime và structural typing.</span>
                </div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>

              <a
                href="https://www.php.net/manual/en/langref.php"
                target="_blank"
                rel="noreferrer"
                className="pl-resource-link"
              >
                <div className="pl-resource-left">
                  <span className="pl-resource-pub">PHP Group</span>
                  <strong>PHP 8 Language Reference &amp; Zend Engine</strong>
                  <span>Strict types, OPcache, match expression, memory allocation &amp; JIT engine.</span>
                </div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </section>

          {/* KEY TAKEAWAYS & ACTION CTAS */}
          <div className="next-lesson pl-takeaway-card">
            <div className="pl-takeaway-badge">
              <Sparkles size={14} aria-hidden="true" />
              <span>Key Engineering Takeaway</span>
            </div>
            <h3>Ngôn Ngữ Chỉ Là Công Cụ Diễn Đạt; Tư Duy Kiến Trúc &amp; Runtime Là Giá Trị Cốt Lõi</h3>
            <p>
              Framework và cú pháp có thể thay đổi sau mỗi vài năm, nhưng quy luật về Call Stack, Heap, Bộ nhớ đệm CPU,
              Độ an toàn của kiểu dữ liệu và Ranh giới xác thực (Boundary Validation) vẫn luôn bất biến. Làm chủ cội rễ
              này giúp kỹ sư tự tin học bất kỳ ngôn ngữ mới nào chỉ trong vài ngày và xây dựng hệ thống phần mềm có độ tin cậy cao.
            </p>
            <div className="pl-takeaway-actions">
              <a href="/" onClick={(e) => navigate(e, "/")} className="pl-action-btn primary">
                <ArrowLeft size={15} aria-hidden="true" />
                <span>Về Trang Chủ Portfolio</span>
              </a>
              <a
                href="https://tracking.nexus-ex.site/"
                target="_blank"
                rel="noreferrer"
                className="pl-action-btn secondary"
              >
                <ExternalLink size={15} aria-hidden="true" />
                <span>Trải Nghiệm Live Demo OMS</span>
              </a>
              <a
                href="/knowledge/database"
                onClick={(e) => navigate(e, "/knowledge/database")}
                className="pl-action-btn outline"
              >
                <span>Học Tiếp: Database Fundamentals (Bài 02)</span>
                <ChevronRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* 5. Executive Footer */}
      <footer className="pl-lesson-footer">
        <div className="pl-footer-left">
          <span>Programming Languages &amp; Runtime Architecture · Chuyên đề 01</span>
          <span className="ba-footer-divider">•</span>
          <span>Võ Văn Tú Tài · B.Eng in Information Systems (IUH · GPA 3.26/4.0 Giỏi)</span>
        </div>
        <div className="pl-footer-right">
          <Sparkles size={15} aria-hidden="true" />
          <span>Computer Science &amp; Runtime Engineering Evidence</span>
        </div>
      </footer>
    </main>
  );
}

export default ProgrammingLanguagesPage;

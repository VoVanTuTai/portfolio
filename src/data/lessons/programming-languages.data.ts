import type {
  ChecklistItem,
  CodeLanguageId,
  CodeSnippetSpec,
  InterviewFaqItem,
} from "@/types";

export const plCodeSnippets: Record<CodeLanguageId, CodeSnippetSpec> = {
  typescript: {
    fileName: "shipping-calculator.service.ts",
    languageLabel: "TypeScript 5.4 (NestJS)",
    code: `/**
 * Nexus Express OMS - Shipping Fee Engine
 * TypeScript 5.4: Strict Typing, Immutability & Domain Invariants
 */
export interface ShippingCalculationInput {
  readonly weightGrams: number;
  readonly isExpress: boolean;
  readonly codAmountVnd?: number;
}

export interface ShippingCalculationResult {
  readonly baseFeeVnd: number;
  readonly weightSurchargeVnd: number;
  readonly expressSurchargeVnd: number;
  readonly totalFeeVnd: number;
  readonly currency: 'VND';
}

export class ShippingCalculatorService {
  private static readonly BASE_FEE_VND = 15_000;
  private static readonly BASE_WEIGHT_LIMIT_GRAMS = 1_000;
  private static readonly TIER_STEP_GRAMS = 500;
  private static readonly TIER_SURCHARGE_VND = 4_000;
  private static readonly EXPRESS_SURCHARGE_VND = 10_000;

  public static calculate(input: ShippingCalculationInput): ShippingCalculationResult {
    // 1. Boundary & Invariant Guard (Runtime Validation)
    if (!Number.isFinite(input.weightGrams) || input.weightGrams <= 0) {
      throw new RangeError(\`Trọng lượng hàng không hợp lệ: \${input.weightGrams}g (phải > 0)\`);
    }

    // 2. Weight tiering logic (Round up excess grams by step)
    const excessGrams = Math.max(0, input.weightGrams - this.BASE_WEIGHT_LIMIT_GRAMS);
    const extraUnits = Math.ceil(excessGrams / this.TIER_STEP_GRAMS);
    const weightSurchargeVnd = extraUnits * this.TIER_SURCHARGE_VND;

    // 3. Express delivery service surcharge
    const expressSurchargeVnd = input.isExpress ? this.EXPRESS_SURCHARGE_VND : 0;

    // 4. Integer arithmetic: VND has no fractional cents -> avoids floating-point inaccuracy
    const totalFeeVnd = this.BASE_FEE_VND + weightSurchargeVnd + expressSurchargeVnd;

    return Object.freeze({
      baseFeeVnd: this.BASE_FEE_VND,
      weightSurchargeVnd,
      expressSurchargeVnd,
      totalFeeVnd,
      currency: 'VND',
    });
  }
}`,
    paradigm: "Multi-paradigm (OOP / Functional)",
    typeMechanism: "Static Type Checking (Structural Typing / Compile-time erased)",
    runtimeEngine: "Node.js (V8 Engine with Ignition bytecode & TurboFan JIT)",
    invariants: "Bảo toàn số nguyên VND, type guards kiểm tra input bên ngoài, Object.freeze chống mutation.",
  },
  java: {
    fileName: "ShippingCalculator.java",
    languageLabel: "Java 21 LTS (Spring Boot 3)",
    code: `package com.tutai.devflow.logistics.domain;

import java.util.Objects;

/**
 * DevFlow Enterprise - Logistics Pricing Domain
 * Java 21: Records, Immutability & Nominal Type Safety
 */
public final class ShippingCalculator {

    public static final int BASE_FEE_VND = 15_000;
    public static final int BASE_WEIGHT_LIMIT_GRAMS = 1_000;
    public static final double TIER_STEP_GRAMS = 500.0;
    public static final int TIER_SURCHARGE_VND = 4_000;
    public static final int EXPRESS_SURCHARGE_VND = 10_000;

    // Java 21 Compact Constructor in Record: Immutable Value Object
    public record ShippingQuote(
        int baseFeeVnd,
        int weightSurchargeVnd,
        int expressSurchargeVnd,
        int totalFeeVnd,
        String currency
    ) {
        public ShippingQuote {
            if (totalFeeVnd < 0) {
                throw new IllegalStateException("Cước phí không thể là số âm");
            }
        }
    }

    public static ShippingQuote calculate(int weightGrams, boolean isExpress) {
        // 1. Boundary & Invariant validation
        if (weightGrams <= 0) {
            throw new IllegalArgumentException("Khối lượng kiện hàng phải > 0g: " + weightGrams);
        }

        // 2. Extra units calculation with explicit double division for ceil
        int excessGrams = Math.max(0, weightGrams - BASE_WEIGHT_LIMIT_GRAMS);
        int extraUnits = (int) Math.ceil(excessGrams / TIER_STEP_GRAMS);
        int weightSurcharge = extraUnits * TIER_SURCHARGE_VND;

        // 3. Express service fee
        int expressSurcharge = isExpress ? EXPRESS_SURCHARGE_VND : 0;

        // 4. Deterministic integer arithmetic
        int total = BASE_FEE_VND + weightSurcharge + expressSurcharge;

        return new ShippingQuote(BASE_FEE_VND, weightSurcharge, expressSurcharge, total, "VND");
    }
}`,
    paradigm: "Class-based Object-Oriented",
    typeMechanism: "Static Nominal Typing (Enforced at compile-time & checked in Bytecode)",
    runtimeEngine: "JVM HotSpot 21 (C1/C2 JIT Tiered Compilation & ZGC/G1GC)",
    invariants: "Record bất biến, Compact constructor bảo vệ invariant, compile-time exception types.",
  },
  php: {
    fileName: "ShippingCalculator.php",
    languageLabel: "PHP 8.3 (Song Tai Shop MVC)",
    code: `<?php
declare(strict_types=1);

namespace App\\Domain\\Logistics;

use InvalidArgumentException;

/**
 * Song Tai Shop - Logistics Fee Engine
 * PHP 8.3: Readonly Class, Strict Types & Match Expression
 */
final readonly class ShippingQuote
{
    public function __construct(
        public int $baseFeeVnd,
        public int $weightSurchargeVnd,
        public int $expressSurchargeVnd,
        public int $totalFeeVnd,
        public string $currency = 'VND'
    ) {}
}

final class ShippingCalculator
{
    private const int BASE_FEE_VND = 15_000;
    private const int BASE_WEIGHT_GRAMS = 1_000;
    private const float TIER_STEP_GRAMS = 500.0;
    private const int TIER_SURCHARGE_VND = 4_000;
    private const int EXPRESS_SURCHARGE_VND = 10_000;

    public static function calculate(int $weightGrams, bool $isExpress): ShippingQuote
    {
        // 1. Invariant check with strict types active
        if ($weightGrams <= 0) {
            throw new InvalidArgumentException("Khối lượng hàng phải > 0g. Nhận: {$weightGrams}g");
        }

        // 2. Extra weight calculation
        $excessGrams = max(0, $weightGrams - self::BASE_WEIGHT_GRAMS);
        $extraUnits = (int) ceil($excessGrams / self::TIER_STEP_GRAMS);
        $weightSurcharge = $extraUnits * self::TIER_SURCHARGE_VND;

        // 3. Express surcharge via PHP 8 match expression
        $expressSurcharge = match ($isExpress) {
            true => self::EXPRESS_SURCHARGE_VND,
            false => 0,
        };

        $totalFee = self::BASE_FEE_VND + $weightSurcharge + $expressSurcharge;

        return new ShippingQuote(
            baseFeeVnd: self::BASE_FEE_VND,
            weightSurchargeVnd: $weightSurcharge,
            expressSurchargeVnd: $expressSurcharge,
            totalFeeVnd: $totalFee
        );
    }
}`,
    paradigm: "Multi-paradigm (Procedural & Modern OOP)",
    typeMechanism: "Dynamic with Type Declarations (declare(strict_types=1))",
    runtimeEngine: "Zend Engine 8.3 (PHP-FPM Opcode Caching & JIT Compiler)",
    invariants: "Strict types mode, readonly DTO, Shared-Nothing memory lifecycle per HTTP request.",
  },
  python: {
    fileName: "shipping_calculator.py",
    languageLabel: "Python 3.12 (Pydantic / AI Service)",
    code: `from dataclasses import dataclass
import math
from typing import Final

# PEP 8 Compliant Constants
BASE_FEE_VND: Final[int] = 15_000
BASE_WEIGHT_GRAMS: Final[int] = 1_000
TIER_STEP_GRAMS: Final[float] = 500.0
TIER_SURCHARGE_VND: Final[int] = 4_000
EXPRESS_SURCHARGE_VND: Final[int] = 10_000

@dataclass(frozen=True, slots=True)
class ShippingQuote:
    """Immutable quote result with high-performance memory slots."""
    base_fee_vnd: int
    weight_surcharge_vnd: int
    express_surcharge_vnd: int
    total_fee_vnd: int
    currency: str = "VND"

def calculate_shipping_fee(weight_grams: int, is_express: bool) -> ShippingQuote:
    """Calculate deterministic logistics fee avoiding float imprecision."""
    if not isinstance(weight_grams, int) or weight_grams <= 0:
        raise ValueError(f"Khối lượng kiện hàng không hợp lệ: {weight_grams}g (phải là số nguyên > 0)")

    excess_grams = max(0, weight_grams - BASE_WEIGHT_GRAMS)
    extra_units = math.ceil(excess_grams / TIER_STEP_GRAMS)
    weight_surcharge = extra_units * TIER_SURCHARGE_VND

    express_surcharge = EXPRESS_SURCHARGE_VND if is_express else 0
    total_fee = BASE_FEE_VND + weight_surcharge + express_surcharge

    return ShippingQuote(
        base_fee_vnd=BASE_FEE_VND,
        weight_surcharge_vnd=weight_surcharge,
        express_surcharge_vnd=express_surcharge,
        total_fee_vnd=total_fee,
    )`,
    paradigm: "Multi-paradigm (Dynamic, Functional, OOP)",
    typeMechanism: "Dynamic Typing with Type Hints (Mypy static check, slots optimization)",
    runtimeEngine: "CPython 3.12 (Bytecode Interpreter with GIL & Specializing Adaptive Interpreter)",
    invariants: "Frozen dataclass, slots giảm tải bộ nhớ Heap, type annotations hỗ trợ IDE linting.",
  },
  go: {
    fileName: "shipping_calculator.go",
    languageLabel: "Go 1.22 (High-Throughput Gateway)",
    code: `package logistics

import (
	"errors"
	"math"
)

const (
	BaseFeeVND          = 15000
	BaseWeightLimitGram = 1000
	TierStepGram        = 500.0
	TierSurchargeVND    = 4000
	ExpressSurchargeVND = 10000
)

type ShippingQuote struct {
	BaseFeeVND          int    \`json:"base_fee_vnd"\`
	WeightSurchargeVND  int    \`json:"weight_surcharge_vnd"\`
	ExpressSurchargeVND int    \`json:"express_surcharge_vnd"\`
	TotalFeeVND         int    \`json:"total_fee_vnd"\`
	Currency            string \`json:"currency"\`
}

// CalculateFee returns deterministic quote with idiomatic Go explicit error handling
func CalculateFee(weightGrams int, isExpress bool) (ShippingQuote, error) {
	if weightGrams <= 0 {
		return ShippingQuote{}, errors.New("khối lượng kiện hàng phải lớn hơn 0g")
	}

	excessGrams := 0
	if weightGrams > BaseWeightLimitGram {
		excessGrams = weightGrams - BaseWeightLimitGram
	}

	extraUnits := int(math.Ceil(float64(excessGrams) / TierStepGram))
	weightSurcharge := extraUnits * TierSurchargeVND

	expressSurcharge := 0
	if isExpress {
		expressSurcharge = ExpressSurchargeVND
	}

	total := BaseFeeVND + weightSurcharge + expressSurcharge

	return ShippingQuote{
		BaseFeeVND:          BaseFeeVND,
		WeightSurchargeVND:  weightSurcharge,
		ExpressSurchargeVND: expressSurcharge,
		TotalFeeVND:         total,
		Currency:            "VND",
	}, nil
}`,
    paradigm: "Procedural / Structural OOP (No inheritance, composition via interfaces)",
    typeMechanism: "Static Strong Typing (Structural interfaces, zero runtime overhead)",
    runtimeEngine: "Native Machine Code (Direct OS compilation, Goroutines & Go Runtime GC)",
    invariants: "Explicit error return (không có exception ngầm), JSON serialization tags, zero class overhead.",
  },
};

export const plInterviewQuestions: InterviewFaqItem[] = [
  {
    category: "runtime",
    categoryLabel: "Runtime & Engine",
    question: "1. JIT (Just-in-Time) Compiler vs AOT (Ahead-of-Time) Compiler: Cơ chế hoạt động và trade-off hiệu năng?",
    answer:
      "AOT Compiler (Go, Rust, C++) biên dịch toàn bộ source code thành mã máy gốc (Native Machine Code) trước khi triển khai: Ưu điểm là khởi động tức thì (Zero warmup), dung lượng bộ nhớ nhỏ, đóng gói binary độc lập. Ngược lại, JIT Compiler (Java JVM HotSpot, V8) biên dịch code thành Bytecode/IR trước, sau đó trong lúc chạy (Runtime) sẽ theo dõi profiling: những hàm được gọi hàng triệu lần ('Hot Spot') sẽ được JIT compile trực tiếp sang mã máy tối ưu hóa cao độ với CPU hiện thời (Inlining, Loop Unrolling). Trade-off của JIT là thời gian Warmup ban đầu và tiêu tốn CPU/RAM cho trình phân tích, nhưng về lâu dài có thể tối ưu hơn AOT nhờ dữ liệu runtime thực tế.",
  },
  {
    category: "runtime",
    categoryLabel: "Runtime & Engine",
    question: "2. V8 Engine thực thi JavaScript/TypeScript như thế nào qua Ignition & TurboFan?",
    answer:
      "Quy trình V8: (1) Parser chuyển source code JavaScript (sau khi TS đã strip types) thành AST (Abstract Syntax Tree); (2) Trình thông dịch Ignition chuyển AST thành Bytecode để bắt đầu thực thi ngay mà không cần đợi compile (giảm thời gian tương tác ban đầu); (3) Profiler theo dõi các hàm chạy thường xuyên; (4) Trình biên dịch tối ưu hóa TurboFan nạp Bytecode cùng Type Feedback từ Ignition để sinh ra High-Performance Machine Code; (5) Deoptimization: Nếu giả định kiểu dữ liệu bị vi phạm (ví dụ một hàm trước đó luôn nhận số nhưng đột nhiên nhận object), TurboFan sẽ hủy mã máy và quay ngược về Bytecode trong Ignition.",
  },
  {
    category: "runtime",
    categoryLabel: "Runtime & Engine",
    question: "3. Quá trình nạp class (Class Loading) và Bytecode Verification của JVM diễn ra ra sao?",
    answer:
      "JVM thực hiện Class Loading theo nguyên tắc Delegation qua 3 tầng ClassLoader: Bootstrap -> Extension/Platform -> Application. Khi một class được nạp, JVM trải qua 3 pha: (1) Loading: Đọc file .class dạng byte stream và tạo đối tượng Class<?> trên Metaspace; (2) Linking: Gồm Verification (kiểm tra tính hợp lệ của format bytecode, đảm bảo không can thiệp trái phép con trỏ hay stack overflow), Preparation (cấp phát bộ nhớ cho static variables) và Resolution (chuyển đổi Symbolic References thành Direct References); (3) Initialization: Thực thi các khối static block và gán giá trị khởi tạo ban đầu cho biến static.",
  },
  {
    category: "memory",
    categoryLabel: "Memory & GC",
    question: "4. Phân biệt Call Stack và Heap: Khi nào một biến/đối tượng được cấp phát trên Stack thay vì Heap?",
    answer:
      "Call Stack quản lý bộ nhớ dạng LIFO theo từng lời gọi hàm: Cấp phát siêu nhanh, lưu trữ các biến cục bộ (primitives) và địa chỉ tham chiếu (references). Bộ nhớ Stack tự động giải phóng ngay khi hàm trả về (return), không cần Garbage Collector can thiệp, nhưng có giới hạn kích thước (dễ bị StackOverflowError khi đệ quy vô hạn). Ngược lại, Heap là vùng nhớ động lưu trữ các Object, Array sống lâu hơn vòng đời một hàm. Cấp phát trên Heap tốn chi phí hơn và cần Garbage Collector thu hồi. Kỹ thuật Escape Analysis trong JVM/Go cho phép compiler nhận diện nếu một Object không bao giờ 'thoát' ra khỏi phạm vi hàm, nó có thể được cấp phát thẳng trên Stack (Scalar Replacement) để triệt tiêu chi phí GC.",
  },
  {
    category: "memory",
    categoryLabel: "Memory & GC",
    question: "5. Garbage Collector hoạt động ra sao? Nguyên lý Generational Hypothesis và 'Stop-the-World'?",
    answer:
      "GC giải phóng bộ nhớ của các object không còn Reachable từ GC Roots (các biến trên Stack, static variables, JNI references). Nguyên lý Generational Hypothesis chỉ ra rằng: 'Hơn 95% object sinh ra sẽ chết rất nhanh ngay sau khi hàm hoàn thành'. Do đó, JVM chia Heap thành Young Generation (Eden + 2 Survivor S0/S1) và Old/Tenured Generation. Minor GC chạy cực nhanh trên Young Gen; chỉ những object sống sót qua nhiều chu kỳ (age threshold) mới được promote lên Old Gen. Hiện tượng 'Stop-the-World' (STW) xảy ra khi GC tạm ngưng toàn bộ Application Threads để cập nhật con trỏ và di dời đối tượng. Các GC hiện đại như G1GC hay ZGC (Java 21) giảm thời gian STW xuống dưới 1 mili-giây thông qua Concurrent Marking và Colored Pointers.",
  },
  {
    category: "memory",
    categoryLabel: "Memory & GC",
    question: "6. Tại sao PHP-FPM theo mô hình Shared-Nothing lại miễn nhiễm với Memory Leak dài hạn của Daemon?",
    answer:
      "Trong các kiến trúc daemon dài hạn (Node.js, Java Spring Boot), một tiến trình phục vụ hàng triệu request. Nếu một lập trình viên vô tình lưu dữ liệu vào biến toàn cục (global cache, unclosed event listener), bộ nhớ Heap sẽ phình to dẫn đến OutOfMemoryError. Ngược lại, PHP-FPM vận hành theo mô hình Shared-Nothing (Không chia sẻ trạng thái giữa các request): Khi request HTTP tới, một worker process tiếp nhận, cấp phát bộ nhớ, thực thi logic, trả response và NGAY LẬP TỨC giải phóng 100% vùng nhớ của request đó (zend_mm memory manager reset). Nhờ vậy, PHP loại bỏ hoàn toàn rủi ro memory leak tích lũy qua thời gian.",
  },
  {
    category: "types",
    categoryLabel: "Hệ Kiểu & Soundness",
    question: "7. Structural Typing (Duck Typing của TypeScript/Go) khác gì Nominal Typing (Java/C#)?",
    answer:
      "Nominal Typing (Java): Hai kiểu dữ liệu CHỈ tương thích nếu chúng có cùng tên hoặc có quan hệ kế thừa tường minh (explicit inheritance). Cho dù Class Dog và Class Cat có cùng thuộc tính name và method bark(), ta không thể gán Dog d = new Cat(). Ngược lại, Structural Typing (TypeScript): Hai kiểu tương thích nếu cấu trúc hình dạng (shape/properties) của chúng tương thích ('Nếu nó bơi như vịt và kêu như vịt, thì nó là vịt'). Nếu interface Order có id và total, bất kỳ object nào có id và total đều hợp lệ. Go cũng áp dụng structural typing cho interface: một struct tự động implement interface nếu có đủ methods mà không cần từ khóa implements.",
  },
  {
    category: "types",
    categoryLabel: "Hệ Kiểu & Soundness",
    question: "8. Type Erasure trong TypeScript và Java: Tại sao Static Typing không thể thay thế Runtime Validation?",
    answer:
      "Cả TypeScript và Java (Generics) đều áp dụng Type Erasure: Khi compile, các type annotation (như interface Order trong TS hoặc List<Order> trong Java) bị xóa bỏ hoàn toàn. JavaScript và Java Bytecode lúc chạy không còn thông tin type strict của generic/interface đó nữa. Do đó, Static Typing chỉ bảo vệ được bên trong ranh giới code của chính lập trình viên (Internal Codebase). Khi dữ liệu đi qua Ranh giới Hệ thống (Network HTTP Request, JSON Body, User Input, Third-party Webhook, Database query), compiler hoàn toàn bất lực. Vì vậy, ứng dụng bắt buộc phải có tầng Runtime Validation (như Zod, class-validator trong TypeScript, hoặc Hibernate Validator @Valid trong Java).",
  },
  {
    category: "types",
    categoryLabel: "Hệ Kiểu & Soundness",
    question: "9. Tại sao không bao giờ được dùng float/double để tính toán tiền tệ trong phần mềm doanh nghiệp?",
    answer:
      "Kiểu float/double tuân theo chuẩn IEEE 754 biểu diễn số thực dưới dạng nhị phân cơ số 2. Một số phân số thập phân quen thuộc như 0.1 hay 0.2 không thể biểu diễn chính xác tuyệt đối trong hệ nhị phân (giống như 1/3 trong hệ thập phân là 0.33333...). Kết quả là 0.1 + 0.2 = 0.30000000000000004. Trong các hệ thống tài chính, e-commerce, logistics (Nexus Express, Song Tai Shop), sai số này tích lũy qua hàng triệu giao dịch sẽ làm lệch sổ sách đối soát kế toán. Giải pháp chuẩn: (1) Lưu trữ tiền tệ dưới dạng số nguyên nhỏ nhất (ví dụ VND luôn lưu số nguyên, USD lưu đơn vị Cents); (2) Sử dụng thư viện số học chính xác cao như BigDecimal trong Java hoặc Decimal trong Python.",
  },
  {
    category: "concurrency",
    categoryLabel: "Concurrency & I/O",
    question: "10. So sánh Concurrency Models: Single-threaded Event Loop (Node.js) vs Virtual Threads (Java 21) vs Multi-process (PHP-FPM)?",
    answer:
      "Node.js (Event Loop): Một thread chính duy nhất xử lý JavaScript, ủy thác tác vụ I/O cho Libuv thread pool của OS. Phù hợp tuyệt vời với I/O-bound (REST API, WebSocket, chat, tracking), nhưng một tác vụ CPU-bound nặng có thể làm nghẽn toàn bộ server. Java 21 (Virtual Threads - Project Loom): Giải quyết nhược điểm của OS Threads truyền thống (vốn ngốn 1-2MB RAM/thread và context switch đắt đỏ). Virtual Threads là các user-mode threads cực nhẹ (vài KB), cho phép tạo hàng triệu threads đồng thời theo phong cách synchronous blocking quen thuộc mà không nghẽn OS thread. PHP-FPM (Process Pool): Mỗi request một tiến trình độc lập, lập trình đơn giản nhất, không sợ race conditions, nhưng tốn nhiều RAM hơn trên mỗi kết nối so với Event Loop.",
  },
];

export const plChecklistItems: ChecklistItem[] = [
  {
    title: "1. Tường minh hành trình từ Source Code đến CPU",
    desc: "Giải thích rõ ràng vai trò của Lexer, Parser, AST, Intermediate Representation và Machine Code.",
  },
  {
    title: "2. Phân biệt chính xác AOT Compiler, JIT Compiler và Interpreter",
    desc: "Hiểu bản chất tối ưu hóa runtime của V8 TurboFan và JVM HotSpot C1/C2.",
  },
  {
    title: "3. Làm chủ 3 trục phân loại Type System",
    desc: "Static vs Dynamic, Strong vs Weak, Nominal vs Structural Typing (Duck Typing).",
  },
  {
    title: "4. Nắm vững ranh giới giữa Compile-time Types và Runtime Validation",
    desc: "Biết vì sao Type Erasure đòi hỏi Zod / class-validator / Spring @Valid ở tầng network input.",
  },
  {
    title: "5. Phân biệt Call Stack và Heap cùng cơ chế Garbage Collection",
    desc: "Nắm vững nguyên lý Generational GC, Stop-the-World mitigation và Shared-Nothing isolation của PHP.",
  },
  {
    title: "6. Hiểu sự khác biệt giữa 3 mô hình Concurrency",
    desc: "Single-threaded Event Loop (Node.js), Virtual Threads (Java 21) và Multi-process pool (PHP-FPM).",
  },
  {
    title: "7. Ra quyết định chọn ngôn ngữ dựa trên bài toán thực tế",
    desc: "Cân đối 6 khía cạnh kỹ thuật thay vì đánh giá cảm tính theo trend.",
  },
];

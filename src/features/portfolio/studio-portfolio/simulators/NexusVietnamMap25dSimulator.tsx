import { useState } from "react";
import { MapPin, Pause, Play, Radio, RotateCcw, Truck } from "lucide-react";
import type { Language } from "@/types";

interface NexusVietnamMap25dSimulatorProps {
  lang: Language;
}

export type HubCategory = "mega" | "provincial";
export type RegionZone = "bac" | "trung" | "nam";

export interface HubNode {
  id: string;
  nameVi: string;
  nameEn: string;
  shortName: string;
  category: HubCategory;
  region: RegionZone;
  x: number;
  y: number;
  labelPos: "left" | "right" | "top" | "bottom";
  areaM2: string;
  capacityH: string;
  docks: number;
  slaTransit: string;
  descriptionVi: string;
  descriptionEn: string;
}

export interface NetworkConnection {
  id: string;
  from: string;
  to: string;
  type: "trunk" | "feeder" | "highland";
  label: string;
  pathD: string;
}

// 22 Strategic Hubs across Vietnam generously spaced on a 1040 x 760 canvas
const VIETNAM_HUBS_EXPANDED: HubNode[] = [
  // ================= NORTHERN REGION (MIỀN BẮC) =================
  {
    id: "hub-han",
    nameVi: "Hub Tổng Miền Bắc (Hà Nội - Gia Lâm)",
    nameEn: "Northern Mega Hub (Hanoi)",
    shortName: "HÀ NỘI (MEGA)",
    category: "mega",
    region: "bac",
    x: 420,
    y: 110,
    labelPos: "left",
    areaM2: "28,000 m²",
    capacityH: "75,000 kiện/h",
    docks: 52,
    slaTransit: "Nội thành 3h · Liên tỉnh 24h",
    descriptionVi: "Đầu mối chia chọn bưu kiện cấp quốc gia khu vực 25 tỉnh phía Bắc. Băng chuyền Cross-belt Sorter 2 tầng tự động quét mã vạch 6 mặt và phân làn tự động.",
    descriptionEn: "National sortation center serving 25 northern provinces with dual-deck Cross-belt Sorters and 6-sided automated barcode scanners.",
  },
  {
    id: "hub-bnh",
    nameVi: "Hub Tỉnh Bắc Ninh (Khu Công Nghiệp)",
    nameEn: "Bac Ninh Industrial Hub",
    shortName: "Bắc Ninh",
    category: "provincial",
    region: "bac",
    x: 460,
    y: 65,
    labelPos: "top",
    areaM2: "9,500 m²",
    capacityH: "22,000 kiện/h",
    docks: 18,
    slaTransit: "Kết nối Hà Nội 1.5h",
    descriptionVi: "Trung tâm tiếp nhận hàng điện tử, linh kiện công nghệ cao từ các nhà máy Samsung, Foxconn và phân phối về các Hub tổng.",
    descriptionEn: "High-tech electronics logistics gateway collecting components from Samsung & Foxconn complexes for national forwarding.",
  },
  {
    id: "hub-hph",
    nameVi: "Hub Vệ Tinh Cảng Hải Phòng",
    nameEn: "Hai Phong Port Hub",
    shortName: "Hải Phòng",
    category: "provincial",
    region: "bac",
    x: 535,
    y: 135,
    labelPos: "right",
    areaM2: "11,000 m²",
    capacityH: "26,000 kiện/h",
    docks: 24,
    slaTransit: "Kết nối Hà Nội 2h",
    descriptionVi: "Cửa ngõ logistics cảng biển quốc tế và duyên hải Đông Bắc, gom bưu kiện thương mại điện tử xuất nhập khẩu.",
    descriptionEn: "Deepwater seaport logistics gateway routing cross-border ecommerce into the national delivery pipeline.",
  },
  {
    id: "hub-qnh",
    nameVi: "Hub Tỉnh Quảng Ninh (Hạ Long)",
    nameEn: "Quang Ninh Coastal Hub",
    shortName: "Quảng Ninh",
    category: "provincial",
    region: "bac",
    x: 590,
    y: 85,
    labelPos: "right",
    areaM2: "6,500 m²",
    capacityH: "14,000 kiện/h",
    docks: 12,
    slaTransit: "Kết nối Hải Phòng 1.5h",
    descriptionVi: "Đầu mối phân loại cho khu kinh tế ven biển, thành phố Hạ Long, Móng Cái và tuyến biên mậu phía Bắc.",
    descriptionEn: "Northeastern border and coastal transit point connecting Mong Cai trade corridor with the northern network.",
  },
  {
    id: "hub-tha",
    nameVi: "Hub Tỉnh Thanh Hóa",
    nameEn: "Thanh Hoa Transit Hub",
    shortName: "Thanh Hóa",
    category: "provincial",
    region: "bac",
    x: 395,
    y: 185,
    labelPos: "left",
    areaM2: "7,800 m²",
    capacityH: "18,000 kiện/h",
    docks: 16,
    slaTransit: "Kết nối Hà Nội 3h",
    descriptionVi: "Trạm đệm chuyển tiếp huyết mạch giữa đồng bằng sông Hồng và dải miền Trung, giảm tải 25% lưu lượng cho Hub Hà Nội.",
    descriptionEn: "Strategic buffer terminal bridging Red River Delta and Central Coast freight corridors.",
  },
  {
    id: "hub-vii",
    nameVi: "Hub Tỉnh Vinh (Nghệ An)",
    nameEn: "Vinh North-Central Hub",
    shortName: "Vinh",
    category: "provincial",
    region: "bac",
    x: 430,
    y: 245,
    labelPos: "left",
    areaM2: "8,500 m²",
    capacityH: "19,000 kiện/h",
    docks: 18,
    slaTransit: "Kết nối Hà Nội 5h · Đà Nẵng 7h",
    descriptionVi: "Đầu mối tiếp vận cho toàn bộ khu vực Bắc Trung Bộ (Nghệ An, Hà Tĩnh, Quảng Bình), kết nối đường sắt và đường bộ.",
    descriptionEn: "North-Central transit hub interconnecting rail freight and national highway linehaul trucks.",
  },

  // ================= CENTRAL & HIGHLANDS (MIỀN TRUNG - TÂY NGUYÊN) =================
  {
    id: "hub-hue",
    nameVi: "Hub Tỉnh Thừa Thiên Huế",
    nameEn: "Hue Regional Hub",
    shortName: "Huế",
    category: "provincial",
    region: "trung",
    x: 535,
    y: 295,
    labelPos: "left",
    areaM2: "6,200 m²",
    capacityH: "13,000 kiện/h",
    docks: 12,
    slaTransit: "Kết nối Đà Nẵng 1.5h",
    descriptionVi: "Trạm phân phối bưu chính du lịch và thương mại miền Trung, trung chuyển nhanh qua hầm Hải Vân về Đà Nẵng.",
    descriptionEn: "Regional sorting terminal servicing central heritage corridor with rapid Hai Van tunnel link to Da Nang.",
  },
  {
    id: "hub-dad",
    nameVi: "Hub Tổng Miền Trung (Đà Nẵng - Hòa Cầm)",
    nameEn: "Central Mega Hub (Da Nang)",
    shortName: "ĐÀ NẴNG (MEGA)",
    category: "mega",
    region: "trung",
    x: 585,
    y: 340,
    labelPos: "right",
    areaM2: "18,000 m²",
    capacityH: "42,000 kiện/h",
    docks: 36,
    slaTransit: "Bắc - Nam 12h · Tây Nguyên 6h",
    descriptionVi: "Hub tổng điều phối luồng hàng trục Bắc - Nam, kết nối cảng Tiên Sa, sân bay Đà Nẵng và ngã ba vận tải Đông Tây.",
    descriptionEn: "National crossroads hub balancing traffic between North, South, and the East-West economic corridor.",
  },
  {
    id: "hub-qng",
    nameVi: "Hub Tỉnh Quảng Ngãi (Dung Quất)",
    nameEn: "Quang Ngai Hub",
    shortName: "Quảng Ngãi",
    category: "provincial",
    region: "trung",
    x: 640,
    y: 385,
    labelPos: "right",
    areaM2: "6,000 m²",
    capacityH: "12,000 kiện/h",
    docks: 12,
    slaTransit: "Kết nối Đà Nẵng 2h",
    descriptionVi: "Phục vụ khu kinh tế mở Dung Quất, chuỗi công nghiệp nặng và mạng lưới phát bưu phẩm duyên hải.",
    descriptionEn: "Coastal logistics node feeding the Dung Quat economic zone and coastal provincial branches.",
  },
  {
    id: "hub-plk",
    nameVi: "Hub Tỉnh Pleiku (Gia Lai)",
    nameEn: "Pleiku Highlands Hub",
    shortName: "Pleiku",
    category: "provincial",
    region: "trung",
    x: 545,
    y: 420,
    labelPos: "left",
    areaM2: "5,800 m²",
    capacityH: "11,000 kiện/h",
    docks: 10,
    slaTransit: "Kết nối Quy Nhơn 3.5h",
    descriptionVi: "Đầu mối tiếp nhận nông sản, cà phê, cao su khu vực Bắc Tây Nguyên và kết nối xuống cảng Quy Nhơn theo QL19.",
    descriptionEn: "Northern Central Highlands agro-terminal linked directly via National Route 19 to Quy Nhon seaport.",
  },
  {
    id: "hub-qnh-bd",
    nameVi: "Hub Tỉnh Quy Nhơn (Bình Định)",
    nameEn: "Quy Nhon Port Hub",
    shortName: "Quy Nhơn",
    category: "provincial",
    region: "trung",
    x: 695,
    y: 430,
    labelPos: "right",
    areaM2: "7,500 m²",
    capacityH: "16,000 kiện/h",
    docks: 14,
    slaTransit: "Kết nối Đà Nẵng 5h",
    descriptionVi: "Cửa ngõ logistics biển ra Thái Bình Dương cho toàn vùng Tây Nguyên, xử lý khối lượng lớn bưu kiện thương mại.",
    descriptionEn: "Seaward logistics gateway providing maritime and highway egress for Central Highland cargo.",
  },
  {
    id: "hub-bmt",
    nameVi: "Hub Tỉnh Buôn Ma Thuột (Đắk Lắk)",
    nameEn: "Buon Ma Thuot Hub",
    shortName: "Buôn Ma Thuột",
    category: "provincial",
    region: "trung",
    x: 580,
    y: 485,
    labelPos: "left",
    areaM2: "7,200 m²",
    capacityH: "15,000 kiện/h",
    docks: 14,
    slaTransit: "Kết nối TP.HCM 7h",
    descriptionVi: "Trung tâm logistics lớn nhất Tây Nguyên, điều phối phân luồng bưu kiện giữa 5 tỉnh cao nguyên và Đông Nam Bộ.",
    descriptionEn: "Central Highlands principal sorting hub coordinating deliveries across 5 highland provinces.",
  },
  {
    id: "hub-nha",
    nameVi: "Hub Tỉnh Nha Trang (Khánh Hòa)",
    nameEn: "Nha Trang Coastal Hub",
    shortName: "Nha Trang",
    category: "provincial",
    region: "trung",
    x: 720,
    y: 490,
    labelPos: "right",
    areaM2: "8,000 m²",
    capacityH: "17,000 kiện/h",
    docks: 16,
    slaTransit: "Kết nối TP.HCM 6.5h",
    descriptionVi: "Trạm trung chuyển dịch vụ du lịch, thương mại Nam Trung Bộ, kết nối đường cao tốc Cam Lâm - Vĩnh Hảo.",
    descriptionEn: "South-Central coastal logistics centre supporting tourist corridors and fast road transfers.",
  },
  {
    id: "hub-pth",
    nameVi: "Hub Tỉnh Phan Thiết (Bình Thuận)",
    nameEn: "Phan Thiet Transit Hub",
    shortName: "Phan Thiết",
    category: "provincial",
    region: "trung",
    x: 670,
    y: 550,
    labelPos: "right",
    areaM2: "5,500 m²",
    capacityH: "12,000 kiện/h",
    docks: 10,
    slaTransit: "Kết nối TP.HCM 2.5h",
    descriptionVi: "Trạm tiếp vận chuyển tiếp cao tốc Dầu Giây - Phan Thiết, rút ngắn thời gian giao hàng hải sản và nông sản.",
    descriptionEn: "Expressway transit terminal bridging South-Central coastal output into the Greater HCMC megacity.",
  },

  // ================= SOUTHERN & MEKONG (MIỀN NAM & MIỀN TÂY) =================
  {
    id: "hub-bdg",
    nameVi: "Hub Tỉnh Bình Dương (Sóng Thần)",
    nameEn: "Binh Duong Mega Warehouse",
    shortName: "Bình Dương",
    category: "provincial",
    region: "nam",
    x: 545,
    y: 545,
    labelPos: "left",
    areaM2: "22,000 m²",
    capacityH: "55,000 kiện/h",
    docks: 40,
    slaTransit: "Kết nối TP.HCM 45m",
    descriptionVi: "Kho bãi tổng trung tâm khu công nghiệp Đông Nam Bộ, nối liền ga đường sắt Sóng Thần và các nhà máy lớn.",
    descriptionEn: "Major Southeast industrial warehouse directly connected to Song Than railway freight terminal.",
  },
  {
    id: "hub-bho",
    nameVi: "Hub Tỉnh Biên Hòa (Đồng Nai)",
    nameEn: "Bien Hoa Transit Hub",
    shortName: "Biên Hòa",
    category: "provincial",
    region: "nam",
    x: 615,
    y: 565,
    labelPos: "right",
    areaM2: "12,000 m²",
    capacityH: "28,000 kiện/h",
    docks: 22,
    slaTransit: "Kết nối TP.HCM 1h",
    descriptionVi: "Cửa ngõ logistics vùng Đông Nam Bộ kết nối các khu công nghiệp Biên Hòa, Nhơn Trạch và cụm cảng Cái Mép.",
    descriptionEn: "Southeastern logistics gateway connecting Bien Hoa, Nhon Trach industrial clusters and Cai Mep port.",
  },
  {
    id: "hub-sgn",
    nameVi: "Hub Tổng Miền Nam (TP.HCM / Tân Bình)",
    nameEn: "Southern Mega Hub (HCMC)",
    shortName: "TP.HCM (MEGA)",
    category: "mega",
    region: "nam",
    x: 575,
    y: 605,
    labelPos: "left",
    areaM2: "38,000 m²",
    capacityH: "105,000 kiện/h",
    docks: 68,
    slaTransit: "Nội thành 2h · Miền Tây 5h",
    descriptionVi: "Flagship Mega Hub hiện đại nhất Việt Nam: Hệ thống Cross-belt phân loại đa tầng, xử lý 58% sản lượng bưu kiện toàn quốc.",
    descriptionEn: "Flagship automated Mega Hub handling 58% of national parcel throughput with AI optical sortation belts.",
  },
  {
    id: "hub-vtu",
    nameVi: "Hub Tỉnh Vũng Tàu (Cái Mép)",
    nameEn: "Vung Tau Coastal Hub",
    shortName: "Vũng Tàu",
    category: "provincial",
    region: "nam",
    x: 650,
    y: 630,
    labelPos: "right",
    areaM2: "6,000 m²",
    capacityH: "13,000 kiện/h",
    docks: 12,
    slaTransit: "Kết nối TP.HCM 2h",
    descriptionVi: "Đầu mối gom hàng hải sản, dịch vụ dầu khí và tiếp nhận bưu kiện từ cụm cảng quốc tế Cái Mép - Thị Vải.",
    descriptionEn: "Maritime and offshore logistics post routing port deliveries into national domestic channels.",
  },
  {
    id: "hub-lan",
    nameVi: "Hub Tỉnh Long An (Tân An)",
    nameEn: "Long An Mekong Gateway",
    shortName: "Long An",
    category: "provincial",
    region: "nam",
    x: 515,
    y: 630,
    labelPos: "left",
    areaM2: "8,500 m²",
    capacityH: "20,000 kiện/h",
    docks: 16,
    slaTransit: "Kết nối TP.HCM 1h",
    descriptionVi: "Cửa ngõ bản lề giữa TP.HCM và 13 tỉnh Đồng bằng sông Cửu Long qua tuyến cao tốc Trung Lương.",
    descriptionEn: "Strategic Mekong gateway funneling traffic between HCMC and 13 Southwestern delta provinces.",
  },
  {
    id: "hub-tgg",
    nameVi: "Hub Tỉnh Tiền Giang (Mỹ Tho)",
    nameEn: "Tien Giang Regional Hub",
    shortName: "Tiền Giang",
    category: "provincial",
    region: "nam",
    x: 490,
    y: 660,
    labelPos: "left",
    areaM2: "6,800 m²",
    capacityH: "15,000 kiện/h",
    docks: 14,
    slaTransit: "Kết nối Cần Thơ 1.5h",
    descriptionVi: "Trạm phân loại trung tâm vùng cây trái sông Tiền, nối dài chuỗi logistics chuối, sầu riêng, thanh long xuất khẩu.",
    descriptionEn: "Agro-ecommerce terminal supporting rapid fruit and domestic deliveries along the Tien River corridor.",
  },
  {
    id: "hub-vca",
    nameVi: "Hub Tỉnh Cần Thơ (Tây Đô)",
    nameEn: "Can Tho Mekong Hub",
    shortName: "Cần Thơ",
    category: "provincial",
    region: "nam",
    x: 450,
    y: 690,
    labelPos: "left",
    areaM2: "12,500 m²",
    capacityH: "28,000 kiện/h",
    docks: 24,
    slaTransit: "Toàn Miền Tây < 24h",
    descriptionVi: "Hub tổng trung tâm Đồng bằng Sông Cửu Long, phụ trách phân luồng bưu kiện tỏa đi Cà Mau, An Giang, Kiên Giang.",
    descriptionEn: "Primary Mekong Delta sorting terminal fanning distribution to Ca Mau, An Giang, and Kien Giang.",
  },
  {
    id: "hub-cmu",
    nameVi: "Hub Tỉnh Cà Mau (Đất Mũi)",
    nameEn: "Ca Mau Terminal Hub",
    shortName: "Cà Mau",
    category: "provincial",
    region: "nam",
    x: 410,
    y: 730,
    labelPos: "left",
    areaM2: "5,000 m²",
    capacityH: "9,500 kiện/h",
    docks: 10,
    slaTransit: "Kết nối Cần Thơ 3h",
    descriptionVi: "Trạm bưu chính cực Nam của Tổ quốc, hoàn thiện mạng lưới giao hàng phủ sóng 100% xã/huyện đất liền.",
    descriptionEn: "Southernmost terminal outpost ensuring 100% township coverage across the Ca Mau peninsula.",
  },
];

// Generous, clearly routed connections with Directional Arrow markers
const NETWORK_CONNECTIONS: NetworkConnection[] = [
  // --- National Linehaul Express Corridors (Direct Mega-Hub Connections) ---
  { id: "trunk-han-dad", from: "hub-han", to: "hub-dad", type: "trunk", label: "Tuyến Xe Tải Trục Hà Nội - Đà Nẵng (14h-16h)", pathD: "M 420 110 Q 490 220 585 340" },
  { id: "trunk-dad-sgn", from: "hub-dad", to: "hub-sgn", type: "trunk", label: "Tuyến Xe Tải Trục Đà Nẵng - TP.HCM (18h-20h)", pathD: "M 585 340 Q 610 470 575 605" },

  // --- Northern Regional & Highway Lines ---
  { id: "feeder-han-bnh", from: "hub-han", to: "hub-bnh", type: "feeder", label: "Hà Nội -> Bắc Ninh", pathD: "M 420 110 L 460 65" },
  { id: "feeder-bnh-qnh", from: "hub-bnh", to: "hub-qnh", type: "feeder", label: "Bắc Ninh -> Quảng Ninh", pathD: "M 460 65 L 590 85" },
  { id: "feeder-han-hph", from: "hub-han", to: "hub-hph", type: "trunk", label: "Cao Tốc Hà Nội - Hải Phòng", pathD: "M 420 110 L 535 135" },
  { id: "feeder-hph-qnh", from: "hub-hph", to: "hub-qnh", type: "feeder", label: "Hải Phòng -> Quảng Ninh", pathD: "M 535 135 L 590 85" },
  { id: "feeder-han-tha", from: "hub-han", to: "hub-tha", type: "trunk", label: "Cao Tốc Hà Nội - Thanh Hóa", pathD: "M 420 110 L 395 185" },
  { id: "feeder-tha-vii", from: "hub-tha", to: "hub-vii", type: "trunk", label: "Thanh Hóa -> Vinh", pathD: "M 395 185 L 430 245" },

  // --- Central & Highlands Regional Lines ---
  { id: "feeder-vii-hue", from: "hub-vii", to: "hub-hue", type: "trunk", label: "Vinh -> Huế", pathD: "M 430 245 L 535 295" },
  { id: "feeder-hue-dad", from: "hub-hue", to: "hub-dad", type: "trunk", label: "Hầm Hải Vân (Huế -> Đà Nẵng)", pathD: "M 535 295 L 585 340" },
  { id: "feeder-dad-qng", from: "hub-dad", to: "hub-qng", type: "trunk", label: "Đà Nẵng -> Quảng Ngãi", pathD: "M 585 340 L 640 385" },
  { id: "feeder-qng-qnh", from: "hub-qng", to: "hub-qnh-bd", type: "trunk", label: "Quảng Ngãi -> Quy Nhơn", pathD: "M 640 385 L 695 430" },
  { id: "feeder-qnh-plk", from: "hub-qnh-bd", to: "hub-plk", type: "highland", label: "QL19 Quy Nhơn -> Pleiku", pathD: "M 695 430 L 545 420" },
  { id: "feeder-plk-bmt", from: "hub-plk", to: "hub-bmt", type: "highland", label: "Pleiku -> Buôn Ma Thuột", pathD: "M 545 420 L 580 485" },
  { id: "feeder-bmt-nha", from: "hub-bmt", to: "hub-nha", type: "highland", label: "Đèo Phượng Hoàng -> Nha Trang", pathD: "M 580 485 L 720 490" },
  { id: "feeder-qnh-nha", from: "hub-qnh-bd", to: "hub-nha", type: "trunk", label: "Quy Nhơn -> Nha Trang", pathD: "M 695 430 L 720 490" },
  { id: "feeder-nha-pth", from: "hub-nha", to: "hub-pth", type: "trunk", label: "Nha Trang -> Phan Thiết", pathD: "M 720 490 L 670 550" },
  { id: "feeder-bmt-sgn", from: "hub-bmt", to: "hub-sgn", type: "highland", label: "QL14 Buôn Ma Thuột -> TP.HCM", pathD: "M 580 485 L 575 605" },

  // --- Southern & Mekong Regional Lines ---
  { id: "feeder-pth-bho", from: "hub-pth", to: "hub-bho", type: "trunk", label: "Phan Thiết -> Biên Hòa", pathD: "M 670 550 L 615 565" },
  { id: "feeder-bdg-sgn", from: "hub-bdg", to: "hub-sgn", type: "trunk", label: "Bình Dương -> TP.HCM", pathD: "M 545 545 L 575 605" },
  { id: "feeder-bho-sgn", from: "hub-bho", to: "hub-sgn", type: "trunk", label: "Biên Hòa -> TP.HCM", pathD: "M 615 565 L 575 605" },
  { id: "feeder-bho-vtu", from: "hub-bho", to: "hub-vtu", type: "feeder", label: "Biên Hòa -> Vũng Tàu", pathD: "M 615 565 L 650 630" },
  { id: "feeder-sgn-vtu", from: "hub-sgn", to: "hub-vtu", type: "feeder", label: "TP.HCM -> Vũng Tàu", pathD: "M 575 605 L 650 630" },
  { id: "feeder-sgn-lan", from: "hub-sgn", to: "hub-lan", type: "trunk", label: "TP.HCM -> Long An", pathD: "M 575 605 L 515 630" },
  { id: "feeder-lan-tgg", from: "hub-lan", to: "hub-tgg", type: "trunk", label: "Long An -> Tiền Giang", pathD: "M 515 630 L 490 660" },
  { id: "feeder-tgg-vca", from: "hub-tgg", to: "hub-vca", type: "trunk", label: "Tiền Giang -> Cần Thơ", pathD: "M 490 660 L 450 690" },
  { id: "feeder-vca-cmu", from: "hub-vca", to: "hub-cmu", type: "feeder", label: "Cần Thơ -> Cà Mau", pathD: "M 450 690 L 410 730" },
];

export function NexusVietnamMap25dSimulator({ lang }: NexusVietnamMap25dSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeHubId, setActiveHubId] = useState<string>("hub-sgn");
  const [filterMode, setFilterMode] = useState<"all" | "linehaul" | "feeder" | "highland">("all");

  const selectedHub = VIETNAM_HUBS_EXPANDED.find((h) => h.id === activeHubId) || VIETNAM_HUBS_EXPANDED[16];

  const filteredConnections = NETWORK_CONNECTIONS.filter((conn) => {
    if (filterMode === "linehaul") return conn.type === "trunk";
    if (filterMode === "feeder") return conn.type === "feeder";
    if (filterMode === "highland") return conn.type === "highland";
    return true;
  });

  return (
    <div
      style={{
        borderRadius: "14px",
        background: "#ffffff",
        border: "1.5px solid #cbd5e1",
        color: "#0f172a",
        padding: "20px",
        boxShadow: "0 8px 30px rgba(15, 23, 42, 0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* 1. Top Control Bar (Clean Light Theme) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          borderBottom: "1.5px solid #e2e8f0",
          paddingBottom: "14px",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontFamily: "var(--studio-font-mono)",
                fontSize: "11px",
                fontWeight: 850,
                color: "#0284c7",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {lang === "vi" ? "VẬN TẢI ĐƯỜNG BỘ · LINEHAUL & FEEDER" : "ROAD FREIGHT · LINEHAUL & FEEDER"}
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "10.5px",
                fontWeight: 800,
                color: "#15803d",
                background: "#dcfce7",
                border: "1px solid #86efac",
                padding: "2px 8px",
                borderRadius: "5px",
              }}
            >
              <Radio size={11} className="pulse-dot" /> 22 HUB HOẠT ĐỘNG
            </span>
          </div>
          <h3 style={{ margin: "4px 0 0 0", fontSize: "16px", color: "#0f172a", fontWeight: 800 }}>
            {lang === "vi"
              ? "Mạng Lưới Tuyến Xe Tải: 3 Hub Tổng & 19 Hub Tỉnh Vệ Tinh"
              : "Road Freight Network: 3 Mega Hubs & 19 Regional Hubs"}
          </h3>
        </div>

        {/* View Filters & Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          {/* Mode Tabs */}
          <div style={{ display: "flex", gap: "4px", background: "#f1f5f9", padding: "4px", borderRadius: "8px", border: "1px solid #cbd5e1" }}>
            {[
              { id: "all", label: lang === "vi" ? "Toàn Bộ Tuyến" : "All Routes" },
              { id: "linehaul", label: lang === "vi" ? "🚛 Xe Tải Trục (QL1A)" : "🚛 Linehaul" },
              { id: "feeder", label: lang === "vi" ? "📦 Trung Chuyển (Tỉnh)" : "📦 Feeder" },
              { id: "highland", label: lang === "vi" ? "⛰️ Tây Nguyên" : "⛰️ Highland" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilterMode(tab.id as typeof filterMode)}
                style={{
                  border: "none",
                  background: filterMode === tab.id ? "#0284c7" : "transparent",
                  color: filterMode === tab.id ? "#ffffff" : "#475569",
                  padding: "5px 12px",
                  borderRadius: "6px",
                  fontSize: "11px",
                  fontWeight: 750,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  boxShadow: filterMode === tab.id ? "0 2px 4px rgba(2, 132, 199, 0.25)" : "none",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              background: isPlaying ? "#fef2f2" : "#f0fdf4",
              color: isPlaying ? "#dc2626" : "#16a34a",
              border: `1.5px solid ${isPlaying ? "#fecaca" : "#bbf7d0"}`,
              padding: "6px 12px",
              borderRadius: "6px",
              fontSize: "11px",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            {isPlaying ? <Pause size={13} /> : <Play size={13} />}
            <span>{isPlaying ? (lang === "vi" ? "Tạm dừng" : "Pause") : (lang === "vi" ? "Chạy tiếp" : "Play")}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveHubId("hub-sgn");
              setFilterMode("all");
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#ffffff",
              color: "#334155",
              border: "1.5px solid #cbd5e1",
              padding: "6px 10px",
              borderRadius: "6px",
              fontSize: "11px",
              cursor: "pointer",
            }}
            title="Reset view"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      {/* 2. Main 2.5D SVG Canvas with Spacious Spacing & Bright Theme */}
      <div
        style={{
          width: "100%",
          position: "relative",
          background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
          borderRadius: "10px",
          overflow: "hidden",
          border: "1.5px solid #cbd5e1",
          boxShadow: "inset 0 1px 3px rgba(15, 23, 42, 0.05)",
        }}
      >
        <svg
          viewBox="0 0 1040 780"
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          <defs>
            {/* Soft Landmass Gradient (Light Blueprint) */}
            <linearGradient id="vnMapLandGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#f0f9ff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.9" />
            </linearGradient>

            {/* Mega Hub Gradients (Deep Royal Blue) */}
            <linearGradient id="megaHubTopLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="megaHubSideLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>

            {/* Provincial Hub Gradients (Emerald Green) */}
            <linearGradient id="provincialTopLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="provincialSideLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#047857" />
              <stop offset="100%" stopColor="#064e3b" />
            </linearGradient>

            {/* High-Contrast Directional Arrow Markers */}
            <marker
              id="arrowTrunkBlue"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="5.5"
              markerHeight="5.5"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0284c7" />
            </marker>

            <marker
              id="arrowFeederGreen"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#059669" />
            </marker>

            <marker
              id="arrowHighlandAmber"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#d97706" />
            </marker>

            {/* Drop Shadow Filter for Hubs */}
            <filter id="hubShadowLight" x="-25%" y="-25%" width="150%" height="150%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#0f172a" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Blueprint Grid Lines (Soft Contrast) */}
          <g stroke="rgba(148, 163, 184, 0.28)" strokeWidth="0.9" strokeDasharray="4 4">
            {Array.from({ length: 18 }).map((_, i) => (
              <line key={`light-gx-${i}`} x1={i * 60} y1="0" x2={i * 60} y2="780" />
            ))}
            {Array.from({ length: 14 }).map((_, i) => (
              <line key={`light-gy-${i}`} x1="0" y1={i * 58} x2="1040" y2={i * 58} />
            ))}
          </g>

          {/* S-Shaped Vietnam Geographic Landmass (Spacious & Clean) */}
          <path
            d="M 330 35 
               C 420 25, 520 45, 600 85
               C 650 120, 590 170, 500 220
               C 460 250, 520 280, 570 310
               C 650 340, 750 390, 770 470
               C 770 540, 700 590, 650 635
               C 580 680, 480 745, 390 760
               C 360 735, 400 680, 440 645
               C 490 610, 540 565, 540 500
               C 540 435, 480 375, 420 315
               C 360 255, 350 185, 310 115
               Z"
            fill="url(#vnMapLandGradLight)"
            stroke="#93c5fd"
            strokeWidth="2.5"
          />

          {/* East Sea Watermark Labels */}
          <text
            x="810"
            y="330"
            fontFamily="var(--studio-font-mono)"
            fontSize="14.5"
            fontWeight="900"
            fill="rgba(14, 116, 144, 0.22)"
            letterSpacing="0.25em"
          >
            BIỂN ĐÔNG (EAST SEA)
          </text>
          <text
            x="810"
            y="355"
            fontFamily="var(--studio-font-mono)"
            fontSize="11"
            fontWeight="750"
            fill="rgba(14, 116, 144, 0.18)"
          >
            Quần Đảo Hoàng Sa & Trường Sa (Việt Nam)
          </text>

          {/* 3. ROAD FREIGHT CONNECTIONS WITH DIRECTIONAL ARROWS */}
          <g id="roadFreightConnectionsLight">
            {filteredConnections.map((conn) => {
              const isHighland = conn.type === "highland";
              const isTrunk = conn.type === "trunk";

              const strokeColor = isHighland ? "#d97706" : isTrunk ? "#0284c7" : "#059669";
              const arrowMarker = isHighland
                ? "url(#arrowHighlandAmber)"
                : isTrunk
                ? "url(#arrowTrunkBlue)"
                : "url(#arrowFeederGreen)";

              return (
                <g key={conn.id}>
                  {/* Connection Line */}
                  <path
                    d={conn.pathD}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={isTrunk ? "2.4" : "1.8"}
                    strokeDasharray={isHighland ? "5 3" : undefined}
                    markerEnd={arrowMarker}
                    opacity="0.88"
                  />

                  {/* Animated Freight Packet moving along path */}
                  {isPlaying && (
                    <circle
                      r={isTrunk ? "4.5" : "3.5"}
                      fill={isHighland ? "#f59e0b" : isTrunk ? "#0284c7" : "#10b981"}
                      stroke="#ffffff"
                      strokeWidth="1.2"
                    >
                      <animateMotion
                        path={conn.pathD}
                        dur={isTrunk ? "4.8s" : "6.2s"}
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </g>

          {/* 4. 2.5D ISOMETRIC HUBS (SPACIOUS & HIGH CONTRAST) */}
          {VIETNAM_HUBS_EXPANDED.map((hub) => {
            const isSelected = hub.id === activeHubId;
            const isMega = hub.category === "mega";
            const size = isMega ? 24 : 15;
            const height = isMega ? 20 : 12;

            // Compute label coordinates based on labelPos
            let labelX = hub.x;
            let labelY = hub.y;
            let textAnchor: "start" | "end" | "middle" = "start";

            if (hub.labelPos === "left") {
              labelX = hub.x - size - 8;
              labelY = hub.y - height * 0.5;
              textAnchor = "end";
            } else if (hub.labelPos === "right") {
              labelX = hub.x + size + 8;
              labelY = hub.y - height * 0.5;
              textAnchor = "start";
            } else if (hub.labelPos === "top") {
              labelX = hub.x;
              labelY = hub.y - height * 2 - 8;
              textAnchor = "middle";
            } else {
              labelX = hub.x;
              labelY = hub.y + 22;
              textAnchor = "middle";
            }

            return (
              <g
                key={hub.id}
                transform={`translate(${hub.x}, ${hub.y})`}
                onClick={() => setActiveHubId(hub.id)}
                style={{ cursor: "pointer" }}
              >
                {/* Selection Halo */}
                {isSelected && (
                  <ellipse
                    cx="0"
                    cy="0"
                    rx={size * 2.1}
                    ry={size * 1.15}
                    fill="none"
                    stroke={isMega ? "#2563eb" : "#059669"}
                    strokeWidth="2.5"
                    strokeDasharray="4 3"
                    className="pulse-dot"
                  />
                )}

                {/* Base Shadow */}
                <ellipse cx="0" cy="5" rx={size * 1.25} ry={size * 0.65} fill="rgba(15, 23, 42, 0.22)" />

                {/* Left Prism Face */}
                <polygon
                  points={`0,0 -${size},-${size * 0.5} -${size},-${size * 0.5 + height} 0,-${height}`}
                  fill={isMega ? "url(#megaHubSideLight)" : "url(#provincialSideLight)"}
                  stroke={isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.6)"}
                  strokeWidth="0.8"
                />

                {/* Right Prism Face */}
                <polygon
                  points={`0,0 ${size},-${size * 0.5} ${size},-${size * 0.5 + height} 0,-${height}`}
                  fill={isMega ? "url(#megaHubSideLight)" : "url(#provincialSideLight)"}
                  filter="brightness(0.85)"
                  stroke={isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.6)"}
                  strokeWidth="0.8"
                />

                {/* Top Isometric Diamond */}
                <polygon
                  points={`0,-${height * 2} ${size},-${size * 0.5 + height} 0,-${height} -${size},-${size * 0.5 + height}`}
                  fill={isMega ? "url(#megaHubTopLight)" : "url(#provincialTopLight)"}
                  stroke="#ffffff"
                  strokeWidth={isSelected ? "2.5" : "1.2"}
                  filter="url(#hubShadowLight)"
                />

                {/* Center LED Dot */}
                <circle
                  cx="0"
                  cy={-(size * 0.5 + height * 0.5)}
                  r={isMega ? "3.8" : "2.2"}
                  fill="#ffffff"
                />

                {/* High-Contrast Legible Label */}
                <text
                  x={labelX - hub.x}
                  y={labelY - hub.y}
                  textAnchor={textAnchor}
                  fontFamily="var(--studio-font-sans, system-ui)"
                  fontSize={isMega ? "12" : "10"}
                  fontWeight={isMega ? "900" : "800"}
                  fill={isSelected ? "#1d4ed8" : isMega ? "#0f172a" : "#1e293b"}
                >
                  {hub.shortName}
                </text>

                {/* Capacity Tag */}
                <text
                  x={labelX - hub.x}
                  y={labelY - hub.y + 12}
                  textAnchor={textAnchor}
                  fontFamily="var(--studio-font-mono, monospace)"
                  fontSize="8.5"
                  fontWeight="700"
                  fill={isMega ? "#2563eb" : "#059669"}
                >
                  {hub.capacityH}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* 3. Deep Hub Inspector Card (Clean White Theme) */}
      <div
        style={{
          padding: "18px 20px",
          borderRadius: "10px",
          background: "#ffffff",
          border: `1.5px solid ${selectedHub.category === "mega" ? "#3b82f6" : "#10b981"}`,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          boxShadow: "0 4px 15px rgba(15, 23, 42, 0.05)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontFamily: "var(--studio-font-mono)",
                fontSize: "11px",
                fontWeight: 850,
                color: selectedHub.category === "mega" ? "#1d4ed8" : "#065f46",
                background: selectedHub.category === "mega" ? "#eff6ff" : "#f0fdf4",
                padding: "3px 9px",
                borderRadius: "5px",
                border: `1px solid ${selectedHub.category === "mega" ? "#bfdbfe" : "#bbf7d0"}`,
              }}
            >
              {selectedHub.category === "mega" ? "NATIONAL MEGA SORTATION HUB" : "PROVINCIAL SATELLITE HUB"}
            </span>
            <strong style={{ fontSize: "15px", color: "#0f172a" }}>
              {lang === "vi" ? selectedHub.nameVi : selectedHub.nameEn}
            </strong>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ fontSize: "12px", fontFamily: "var(--studio-font-mono)", color: "#475569" }}>
              Cửa Dock xuất/nhập: <strong style={{ color: "#0284c7" }}>{selectedHub.docks} Docks</strong>
            </span>
          </div>
        </div>

        {/* Metric Badges */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "10px" }}>
          <div style={{ background: "#f8fafc", padding: "10px 14px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
            <span style={{ fontSize: "10.5px", color: "#64748b", display: "block", fontWeight: 700 }}>DIỆN TÍCH MẶT SÀN KHO</span>
            <strong style={{ fontSize: "14px", color: "#0f172a", fontFamily: "var(--studio-font-mono)" }}>{selectedHub.areaM2}</strong>
          </div>
          <div style={{ background: "#f8fafc", padding: "10px 14px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
            <span style={{ fontSize: "10.5px", color: "#64748b", display: "block", fontWeight: 700 }}>CÔNG SUẤT CHIA CHỌN</span>
            <strong style={{ fontSize: "14px", color: "#0284c7", fontFamily: "var(--studio-font-mono)" }}>{selectedHub.capacityH}</strong>
          </div>
          <div style={{ background: "#f8fafc", padding: "10px 14px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
            <span style={{ fontSize: "10.5px", color: "#64748b", display: "block", fontWeight: 700 }}>TIÊU CHUẨN SLA KẾT NỐI</span>
            <strong style={{ fontSize: "14px", color: "#16a34a", fontFamily: "var(--studio-font-mono)" }}>{selectedHub.slaTransit}</strong>
          </div>
        </div>

        <p style={{ margin: 0, fontSize: "13px", color: "#334155", lineHeight: 1.6 }}>
          {lang === "vi" ? selectedHub.descriptionVi : selectedHub.descriptionEn}
        </p>
      </div>

      {/* 4. Legend & Arrow Indicator Key */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          fontSize: "11.5px",
          color: "#475569",
          borderTop: "1.5px solid #e2e8f0",
          paddingTop: "12px",
        }}
      >
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: "12px", height: "12px", background: "#2563eb", borderRadius: "3px" }} />
            <strong style={{ color: "#0f172a" }}>3 Hub Tổng</strong> (Hà Nội, Đà Nẵng, TP.HCM)
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: "10px", height: "10px", background: "#10b981", borderRadius: "3px" }} />
            <strong style={{ color: "#0f172a" }}>19 Hub Tỉnh</strong> (Vệ tinh)
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#0284c7" }}>
            <Truck size={14} color="#0284c7" />
            Trục QL1A (Xe tải 15T-30T)
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#059669" }}>
            <MapPin size={14} color="#059669" />
            Tuyến Feeder (Xe tải 3.5T-8T)
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#d97706" }}>
            <span style={{ width: "8px", height: "8px", background: "#d97706", borderRadius: "50%" }} />
            Tây Nguyên (QL14/QL19)
          </span>
        </div>

        <span style={{ fontFamily: "var(--studio-font-mono)", color: "#0284c7", fontWeight: 750, fontSize: "11px" }}>
          VẬN TẢI ĐƯỜNG BỘ PHỦ SÓNG 63 TỈNH THÀNH
        </span>
      </div>
    </div>
  );
}

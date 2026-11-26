import { useState } from "react";
import { Compass, Pause, Play, Radio, RotateCcw, Truck } from "lucide-react";
import type { Language } from "@/types";

interface NexusVietnamMap25dSimulatorProps {
  lang: Language;
}

export type HubCategory = "mega" | "provincial" | "spoke";
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
  type: "trunk" | "feeder" | "air" | "highland";
  label: string;
  pathD: string;
}

// 22 Strategic Hubs across Vietnam: 3 Mega Hubs, 19 Provincial Sorting Hubs
const VIETNAM_HUBS_EXPANDED: HubNode[] = [
  // ================= NORTHERN REGION (MIỀN BẮC) =================
  {
    id: "hub-han",
    nameVi: "Hub Tổng Miền Bắc (Hà Nội - Gia Lâm)",
    nameEn: "Northern Mega Hub (Hanoi)",
    shortName: "HÀ NỘI (MEGA)",
    category: "mega",
    region: "bac",
    x: 400,
    y: 110,
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
    x: 430,
    y: 85,
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
    x: 485,
    y: 125,
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
    x: 525,
    y: 105,
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
    y: 175,
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
    x: 415,
    y: 220,
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
    x: 505,
    y: 260,
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
    x: 545,
    y: 290,
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
    x: 585,
    y: 330,
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
    x: 535,
    y: 360,
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
    x: 620,
    y: 370,
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
    x: 550,
    y: 415,
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
    x: 635,
    y: 420,
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
    x: 595,
    y: 475,
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
    x: 505,
    y: 465,
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
    x: 550,
    y: 480,
    areaM2: "12,000 m²",
    capacityH: "28,000 kiện/h",
    docks: 22,
    slaTransit: "Kết nối TP.HCM 1h",
    descriptionVi: "Cửa ngõ logistics vùng Đông Nam Bộ đón đầu cảng hàng không quốc tế Long Thành và cụm cảng Cái Mép.",
    descriptionEn: "Southeastern gateway positioning for Long Thanh Airport and Cai Mep deepwater container terminals.",
  },
  {
    id: "hub-sgn",
    nameVi: "Hub Tổng Miền Nam (TP.HCM / Tân Bình)",
    nameEn: "Southern Mega Hub (HCMC)",
    shortName: "TP.HCM (MEGA)",
    category: "mega",
    region: "nam",
    x: 520,
    y: 505,
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
    x: 565,
    y: 535,
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
    x: 480,
    y: 530,
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
    x: 465,
    y: 555,
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
    x: 435,
    y: 580,
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
    x: 405,
    y: 625,
    areaM2: "5,000 m²",
    capacityH: "9,500 kiện/h",
    docks: 10,
    slaTransit: "Kết nối Cần Thơ 3h",
    descriptionVi: "Trạm bưu chính cực Nam của Tổ quốc, hoàn thiện mạng lưới giao hàng phủ sóng 100% xã/huyện đất liền.",
    descriptionEn: "Southernmost terminal outpost ensuring 100% township coverage across the Ca Mau peninsula.",
  },
];

// Rich Spiderweb Network Connections with Directional Arrows
const NETWORK_CONNECTIONS: NetworkConnection[] = [
  // --- National Air Cargo Arteries (Express Flight) ---
  { id: "air-han-dad", from: "hub-han", to: "hub-dad", type: "air", label: "Express Hàng Không HAN-DAD (1.5h)", pathD: "M 400 110 Q 510 190 545 290" },
  { id: "air-dad-sgn", from: "hub-dad", to: "hub-sgn", type: "air", label: "Express Hàng Không DAD-SGN (1.5h)", pathD: "M 545 290 Q 580 390 520 505" },
  { id: "air-han-sgn", from: "hub-han", to: "hub-sgn", type: "air", label: "Express Hàng Không HAN-SGN (2h)", pathD: "M 400 110 Q 610 280 520 505" },

  // --- Northern Spiderweb Lines ---
  { id: "feeder-han-bnh", from: "hub-han", to: "hub-bnh", type: "feeder", label: "Tuyến KCN Bắc Ninh", pathD: "M 400 110 L 430 85" },
  { id: "feeder-bnh-qnh", from: "hub-bnh", to: "hub-qnh", type: "feeder", label: "Trục Bắc Ninh - Hạ Long", pathD: "M 430 85 L 525 105" },
  { id: "feeder-han-hph", from: "hub-han", to: "hub-hph", type: "trunk", label: "Cao Tốc Hà Nội - Hải Phòng", pathD: "M 400 110 L 485 125" },
  { id: "feeder-hph-qnh", from: "hub-hph", to: "hub-qnh", type: "feeder", label: "Cảng Hải Phòng - Quảng Ninh", pathD: "M 485 125 L 525 105" },
  { id: "feeder-han-tha", from: "hub-han", to: "hub-tha", type: "trunk", label: "Cao Tốc Bắc - Nam (Ninh Bình - Thanh Hóa)", pathD: "M 400 110 L 395 175" },
  { id: "feeder-tha-vii", from: "hub-tha", to: "hub-vii", type: "trunk", label: "Trục Thanh Hóa - Nghệ An", pathD: "M 395 175 L 415 220" },

  // --- Central & Highlands Spiderweb Lines ---
  { id: "feeder-vii-hue", from: "hub-vii", to: "hub-hue", type: "trunk", label: "Trục Nghệ An - Hà Tĩnh - Huế", pathD: "M 415 220 L 505 260" },
  { id: "feeder-hue-dad", from: "hub-hue", to: "hub-dad", type: "trunk", label: "Hầm Hải Vân (Huế - Đà Nẵng)", pathD: "M 505 260 L 545 290" },
  { id: "feeder-dad-qng", from: "hub-dad", to: "hub-qng", type: "trunk", label: "Cao Tốc Đà Nẵng - Quảng Ngãi", pathD: "M 545 290 L 585 330" },
  { id: "feeder-qng-qnh", from: "hub-qng", to: "hub-qnh-bd", type: "trunk", label: "Trục Quảng Ngãi - Quy Nhơn", pathD: "M 585 330 L 620 370" },
  { id: "feeder-qnh-plk", from: "hub-qnh-bd", to: "hub-plk", type: "highland", label: "QL19 Quy Nhơn - Pleiku", pathD: "M 620 370 L 535 360" },
  { id: "feeder-plk-bmt", from: "hub-plk", to: "hub-bmt", type: "highland", label: "Trục Tây Nguyên Pleiku - BMT", pathD: "M 535 360 L 550 415" },
  { id: "feeder-bmt-nha", from: "hub-bmt", to: "hub-nha", type: "highland", label: "Đèo Phượng Hoàng (BMT - Nha Trang)", pathD: "M 550 415 L 635 420" },
  { id: "feeder-qnh-nha", from: "hub-qnh-bd", to: "hub-nha", type: "trunk", label: "QL1A Bình Định - Phú Yên - Nha Trang", pathD: "M 620 370 L 635 420" },
  { id: "feeder-nha-pth", from: "hub-nha", to: "hub-pth", type: "trunk", label: "Cao Tốc Nha Trang - Phan Thiết", pathD: "M 635 420 L 595 475" },
  { id: "feeder-bmt-sgn", from: "hub-bmt", to: "hub-sgn", type: "highland", label: "QL14 Buôn Ma Thuột - TP.HCM", pathD: "M 550 415 L 520 505" },

  // --- Southern & Mekong Spiderweb Lines ---
  { id: "feeder-pth-bho", from: "hub-pth", to: "hub-bho", type: "trunk", label: "Cao Tốc Phan Thiết - Dầu Giây", pathD: "M 595 475 L 550 480" },
  { id: "feeder-bdg-sgn", from: "hub-bdg", to: "hub-sgn", type: "trunk", label: "Đại Lộ Bình Dương - TP.HCM", pathD: "M 505 465 L 520 505" },
  { id: "feeder-bho-sgn", from: "hub-bho", to: "hub-sgn", type: "trunk", label: "Xa Lộ Hà Nội (Đồng Nai - TP.HCM)", pathD: "M 550 480 L 520 505" },
  { id: "feeder-bho-vtu", from: "hub-bho", to: "hub-vtu", type: "feeder", label: "QL51 Biên Hòa - Vũng Tàu", pathD: "M 550 480 L 565 535" },
  { id: "feeder-sgn-vtu", from: "hub-sgn", to: "hub-vtu", type: "feeder", label: "Cao Tốc TP.HCM - Long Thành - Vũng Tàu", pathD: "M 520 505 L 565 535" },
  { id: "feeder-sgn-lan", from: "hub-sgn", to: "hub-lan", type: "trunk", label: "Cao Tốc Trung Lương (TP.HCM - Long An)", pathD: "M 520 505 L 480 530" },
  { id: "feeder-lan-tgg", from: "hub-lan", to: "hub-tgg", type: "trunk", label: "Trục Long An - Tiền Giang", pathD: "M 480 530 L 465 555" },
  { id: "feeder-tgg-vca", from: "hub-tgg", to: "hub-vca", type: "trunk", label: "Cầu Mỹ Thuận - Cần Thơ", pathD: "M 465 555 L 435 580" },
  { id: "feeder-vca-cmu", from: "hub-vca", to: "hub-cmu", type: "feeder", label: "Trục Quản Lộ Phụng Hiệp - Cà Mau", pathD: "M 435 580 L 405 625" },
];

export function NexusVietnamMap25dSimulator({ lang }: NexusVietnamMap25dSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeHubId, setActiveHubId] = useState<string>("hub-sgn");
  const [filterMode, setFilterMode] = useState<"all" | "mega" | "linehaul" | "air">("all");

  const selectedHub = VIETNAM_HUBS_EXPANDED.find((h) => h.id === activeHubId) || VIETNAM_HUBS_EXPANDED[16];

  // Filter connections based on active mode
  const filteredConnections = NETWORK_CONNECTIONS.filter((conn) => {
    if (filterMode === "air") return conn.type === "air";
    if (filterMode === "linehaul") return conn.type === "trunk" || conn.type === "air";
    return true;
  });

  return (
    <div
      style={{
        borderRadius: "12px",
        background: "radial-gradient(ellipse at 50% 15%, #0b1329 0%, #030712 100%)",
        border: "1.5px solid #1e293b",
        color: "#f8fafc",
        padding: "20px",
        boxShadow: "0 10px 35px rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* 1. Top Control Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          borderBottom: "1px solid rgba(148, 163, 184, 0.15)",
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
                color: "#38bdf8",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              2.5D SPIDERWEB LOGISTICS TOPOLOGY · VIETNAM MESH GRID
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "10px",
                fontWeight: 800,
                color: "#4ade80",
                background: "rgba(34, 197, 94, 0.15)",
                border: "1px solid rgba(34, 197, 94, 0.35)",
                padding: "2px 7px",
                borderRadius: "4px",
              }}
            >
              <Radio size={10} className="pulse-dot" /> 22 HUBS ONLINE
            </span>
          </div>
          <h3 style={{ margin: "4px 0 0 0", fontSize: "16.5px", color: "#ffffff", fontWeight: 750 }}>
            {lang === "vi"
              ? "Mạng Nhện Điều Phối Bưu Kiện Toàn Quốc: 3 Mega Hubs & 19 Hub Tỉnh Kèm Mũi Tên Chỉ Hướng"
              : "National Mesh Topology: 3 Mega Hubs, 19 Provincial Centers & Directional Routing"}
          </h3>
        </div>

        {/* View Filters & Animation Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          {/* Mode Tabs */}
          <div style={{ display: "flex", gap: "3px", background: "rgba(15, 23, 42, 0.7)", padding: "3px", borderRadius: "6px", border: "1px solid #334155" }}>
            {[
              { id: "all", label: lang === "vi" ? "🕸️ Mạng Nhện Toàn Bộ" : "🕸️ Full Spiderweb" },
              { id: "linehaul", label: lang === "vi" ? "🚛 Trục Bộ QL1A" : "🚛 Highway Trunk" },
              { id: "air", label: lang === "vi" ? "✈️ Express Hàng Không" : "✈️ Air Cargo" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilterMode(tab.id as typeof filterMode)}
                style={{
                  border: "none",
                  background: filterMode === tab.id ? "#0284c7" : "transparent",
                  color: filterMode === tab.id ? "#ffffff" : "#94a3b8",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  fontSize: "11px",
                  fontWeight: 750,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
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
              background: isPlaying ? "rgba(239, 68, 68, 0.15)" : "rgba(34, 197, 94, 0.15)",
              color: isPlaying ? "#f87171" : "#4ade80",
              border: `1px solid ${isPlaying ? "rgba(239, 68, 68, 0.3)" : "rgba(34, 197, 94, 0.3)"}`,
              padding: "6px 12px",
              borderRadius: "6px",
              fontSize: "11px",
              fontWeight: 750,
              cursor: "pointer",
            }}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
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
              background: "rgba(148, 163, 184, 0.1)",
              color: "#cbd5e1",
              border: "1px solid #334155",
              padding: "6px 10px",
              borderRadius: "6px",
              fontSize: "11px",
              cursor: "pointer",
            }}
            title="Reset view"
          >
            <RotateCcw size={12} />
          </button>
        </div>
      </div>

      {/* 2. Main 2.5D SVG Canvas with Full Spiderweb */}
      <div
        style={{
          width: "100%",
          position: "relative",
          background: "#050914",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1.5px solid rgba(56, 189, 248, 0.2)",
        }}
      >
        <svg
          viewBox="0 0 960 660"
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="vnMapBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#020617" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="megaHubTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="megaHubSide" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#075985" />
            </linearGradient>

            <linearGradient id="provincialTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="provincialSide" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#047857" />
              <stop offset="100%" stopColor="#065f46" />
            </linearGradient>

            {/* Directional Arrow Markers */}
            <marker
              id="arrowCyan"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
            </marker>

            <marker
              id="arrowGreen"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399" />
            </marker>

            <marker
              id="arrowAirPink"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#f472b6" />
            </marker>

            <marker
              id="arrowHighland"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#facc15" />
            </marker>

            {/* Glowing Filters */}
            <filter id="hubGlowEffect" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="meshLineGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Isometric Background Grid Pattern */}
          <g stroke="rgba(51, 65, 85, 0.2)" strokeWidth="0.8" strokeDasharray="3 3">
            {Array.from({ length: 17 }).map((_, i) => (
              <line key={`vn-gx-${i}`} x1={i * 60} y1="0" x2={i * 60} y2="660" />
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={`vn-gy-${i}`} x1="0" y1={i * 55} x2="960" y2={i * 55} />
            ))}
          </g>

          {/* S-shaped Stylized Vietnam Geographic Contour */}
          <path
            d="M 320 40 
               C 390 30, 480 50, 520 90
               C 560 120, 520 160, 470 200
               C 440 220, 490 250, 530 270
               C 590 290, 640 330, 650 380
               C 650 430, 610 470, 570 510
               C 520 550, 450 600, 390 635
               C 360 620, 390 570, 420 540
               C 460 510, 510 470, 510 420
               C 510 370, 450 320, 400 270
               C 350 220, 340 160, 310 100
               Z"
            fill="url(#vnMapBgGrad)"
            stroke="rgba(56, 189, 248, 0.28)"
            strokeWidth="2"
          />

          {/* Watermark Labels */}
          <text
            x="740"
            y="310"
            fontFamily="var(--studio-font-mono)"
            fontSize="14"
            fontWeight="900"
            fill="rgba(56, 189, 248, 0.16)"
            letterSpacing="0.25em"
          >
            BIỂN ĐÔNG (EAST SEA)
          </text>
          <text
            x="740"
            y="335"
            fontFamily="var(--studio-font-mono)"
            fontSize="10.5"
            fontWeight="700"
            fill="rgba(56, 189, 248, 0.12)"
          >
            Quần Đảo Hoàng Sa & Trường Sa (Việt Nam)
          </text>

          {/* 3. DENSE SPIDERWEB MESH NETWORK CONNECTIONS WITH DIRECTIONAL ARROWS */}
          <g id="spiderwebConnections">
            {filteredConnections.map((conn) => {
              const isAir = conn.type === "air";
              const isHighland = conn.type === "highland";
              const isTrunk = conn.type === "trunk";

              const strokeColor = isAir ? "#ec4899" : isHighland ? "#eab308" : isTrunk ? "#0284c7" : "#059669";
              const arrowMarker = isAir
                ? "url(#arrowAirPink)"
                : isHighland
                ? "url(#arrowHighland)"
                : isTrunk
                ? "url(#arrowCyan)"
                : "url(#arrowGreen)";

              return (
                <g key={conn.id}>
                  {/* Connection Path with Arrow */}
                  <path
                    d={conn.pathD}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={isAir ? "2.5" : isTrunk ? "2.2" : "1.6"}
                    strokeDasharray={isAir ? "5 4" : isHighland ? "4 3" : undefined}
                    markerEnd={arrowMarker}
                    opacity="0.82"
                    filter="url(#meshLineGlow)"
                  />

                  {/* Animated Moving Freight Packet along connection */}
                  {isPlaying && (
                    <circle
                      r={isAir ? "4.5" : isTrunk ? "4" : "3"}
                      fill={isAir ? "#f472b6" : isHighland ? "#fde047" : isTrunk ? "#38bdf8" : "#4ade80"}
                      filter="url(#hubGlowEffect)"
                    >
                      <animateMotion
                        path={conn.pathD}
                        dur={isAir ? "3.2s" : isTrunk ? "4.8s" : "6.2s"}
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </g>

          {/* 4. 2.5D ISOMETRIC HUBS (MEGA & PROVINCIAL) */}
          {VIETNAM_HUBS_EXPANDED.map((hub) => {
            const isSelected = hub.id === activeHubId;
            const isMega = hub.category === "mega";
            const size = isMega ? 22 : 14;
            const height = isMega ? 18 : 10;

            return (
              <g
                key={hub.id}
                transform={`translate(${hub.x}, ${hub.y})`}
                onClick={() => setActiveHubId(hub.id)}
                style={{ cursor: "pointer" }}
              >
                {/* Selection Pulse Ring */}
                {isSelected && (
                  <ellipse
                    cx="0"
                    cy="0"
                    rx={size * 2}
                    ry={size * 1.1}
                    fill="none"
                    stroke={isMega ? "#38bdf8" : "#34d399"}
                    strokeWidth="2.2"
                    strokeDasharray="4 3"
                    className="pulse-dot"
                  />
                )}

                {/* Base Shadow */}
                <ellipse cx="0" cy="5" rx={size * 1.2} ry={size * 0.6} fill="rgba(0, 0, 0, 0.6)" />

                {/* Left Prism Face */}
                <polygon
                  points={`0,0 -${size},-${size * 0.5} -${size},-${size * 0.5 + height} 0,-${height}`}
                  fill={isMega ? "url(#megaHubSide)" : "url(#provincialSide)"}
                  stroke={isSelected ? "#ffffff" : "rgba(148, 163, 184, 0.4)"}
                  strokeWidth="0.8"
                />

                {/* Right Prism Face */}
                <polygon
                  points={`0,0 ${size},-${size * 0.5} ${size},-${size * 0.5 + height} 0,-${height}`}
                  fill={isMega ? "url(#megaHubSide)" : "url(#provincialSide)"}
                  filter="brightness(0.8)"
                  stroke={isSelected ? "#ffffff" : "rgba(148, 163, 184, 0.4)"}
                  strokeWidth="0.8"
                />

                {/* Top Isometric Diamond */}
                <polygon
                  points={`0,-${height * 2} ${size},-${size * 0.5 + height} 0,-${height} -${size},-${size * 0.5 + height}`}
                  fill={isMega ? "url(#megaHubTop)" : "url(#provincialTop)"}
                  stroke={isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.8)"}
                  strokeWidth={isSelected ? "2" : "1"}
                  filter={isMega ? "url(#hubGlowEffect)" : undefined}
                />

                {/* Hub Center LED Pin */}
                <circle
                  cx="0"
                  cy={-(size * 0.5 + height * 0.5)}
                  r={isMega ? "3.5" : "2"}
                  fill="#ffffff"
                />

                {/* Hub Label */}
                <text
                  x={hub.x > 500 ? size + 6 : -size - 6}
                  y={-height + 2}
                  textAnchor={hub.x > 500 ? "start" : "end"}
                  fontFamily="var(--studio-font-mono)"
                  fontSize={isMega ? "11.5" : "9.5"}
                  fontWeight={isMega ? "900" : "750"}
                  fill={isSelected ? "#ffffff" : isMega ? "#38bdf8" : "#cbd5e1"}
                >
                  {hub.shortName}
                </text>

                {/* Capacity badge */}
                <text
                  x={hub.x > 500 ? size + 6 : -size - 6}
                  y={-height + 13}
                  textAnchor={hub.x > 500 ? "start" : "end"}
                  fontFamily="var(--studio-font-mono)"
                  fontSize="8"
                  fontWeight="600"
                  fill={isMega ? "#7dd3fc" : "#86efac"}
                >
                  {hub.capacityH}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* 3. Deep Hub Inspector Card */}
      <div
        style={{
          padding: "16px 20px",
          borderRadius: "8px",
          background: "rgba(15, 23, 42, 0.9)",
          border: `1.5px solid ${selectedHub.category === "mega" ? "#0284c7" : "#059669"}`,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontFamily: "var(--studio-font-mono)",
                fontSize: "11px",
                fontWeight: 850,
                color: selectedHub.category === "mega" ? "#38bdf8" : "#34d399",
                background: selectedHub.category === "mega" ? "rgba(2, 132, 199, 0.25)" : "rgba(5, 150, 105, 0.25)",
                padding: "3px 8px",
                borderRadius: "5px",
                border: `1px solid ${selectedHub.category === "mega" ? "#0284c7" : "#059669"}`,
              }}
            >
              {selectedHub.category === "mega" ? "NATIONAL MEGA SORTATION HUB" : "PROVINCIAL SATELLITE HUB"}
            </span>
            <strong style={{ fontSize: "14.5px", color: "#ffffff" }}>
              {lang === "vi" ? selectedHub.nameVi : selectedHub.nameEn}
            </strong>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ fontSize: "11.5px", fontFamily: "var(--studio-font-mono)", color: "#cbd5e1" }}>
              Cửa Dock xuất/nhập: <strong style={{ color: "#38bdf8" }}>{selectedHub.docks} Docks</strong>
            </span>
          </div>
        </div>

        {/* Detailed Metrics */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "8px" }}>
          <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "8px 12px", borderRadius: "6px", border: "1px solid #334155" }}>
            <span style={{ fontSize: "10px", color: "#94a3b8", display: "block" }}>DIỆN TÍCH MẶT SÀN KHO</span>
            <strong style={{ fontSize: "13px", color: "#f8fafc", fontFamily: "var(--studio-font-mono)" }}>{selectedHub.areaM2}</strong>
          </div>
          <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "8px 12px", borderRadius: "6px", border: "1px solid #334155" }}>
            <span style={{ fontSize: "10px", color: "#94a3b8", display: "block" }}>CÔNG SUẤT CHIA CHỌN</span>
            <strong style={{ fontSize: "13px", color: "#38bdf8", fontFamily: "var(--studio-font-mono)" }}>{selectedHub.capacityH}</strong>
          </div>
          <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "8px 12px", borderRadius: "6px", border: "1px solid #334155" }}>
            <span style={{ fontSize: "10px", color: "#94a3b8", display: "block" }}>TIÊU CHUẨN SLA KẾT NỐI</span>
            <strong style={{ fontSize: "13px", color: "#4ade80", fontFamily: "var(--studio-font-mono)" }}>{selectedHub.slaTransit}</strong>
          </div>
        </div>

        <p style={{ margin: 0, fontSize: "12.5px", color: "#cbd5e1", lineHeight: 1.55 }}>
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
          fontSize: "11px",
          color: "#94a3b8",
          borderTop: "1px solid rgba(148, 163, 184, 0.15)",
          paddingTop: "12px",
        }}
      >
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
            <span style={{ width: "10px", height: "10px", background: "#38bdf8", borderRadius: "2px" }} />
            3 Mega Hubs (Hà Nội, Đà Nẵng, TP.HCM)
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
            <span style={{ width: "9px", height: "9px", background: "#34d399", borderRadius: "2px" }} />
            19 Hub Tỉnh (Provincial Hubs)
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#38bdf8" }}>
            <Truck size={13} color="#0284c7" />
            Tuyến Trục QL1A (Có Mũi Tên Hướng Tuyến)
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#f472b6" }}>
            <Compass size={13} color="#ec4899" />
            Express Hàng Không (Máy Bay 1.5h - 2h)
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#fde047" }}>
            Trục Đèo Tây Nguyên (QL14, QL19)
          </span>
        </div>

        <span style={{ fontFamily: "var(--studio-font-mono)", color: "#38bdf8", fontWeight: 750 }}>
          MẠNG LƯỚI PHỦ SÓNG 100% 63 TỈNH/THÀNH
        </span>
      </div>
    </div>
  );
}

import type { HttpStatusRow } from "@/types";

export const httpStatusCodes: HttpStatusRow[] = [
  ["200", "OK", "Đọc hoặc cập nhật thành công"],
  ["201", "Created", "Tạo resource mới thành công"],
  ["204", "No Content", "Thành công và không cần response body"],
  ["400", "Bad Request", "Request sai cú pháp hoặc dữ liệu không hợp lệ"],
  ["401", "Unauthorized", "Chưa xác thực hoặc token không hợp lệ"],
  ["403", "Forbidden", "Đã xác thực nhưng không có quyền"],
  ["404", "Not Found", "Resource không tồn tại"],
  ["409", "Conflict", "Xung đột trạng thái hoặc dữ liệu bị trùng"],
  ["500", "Server Error", "Lỗi không mong đợi từ phía server"],
];

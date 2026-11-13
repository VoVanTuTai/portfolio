export function RouteLoader() {
  return (
    <div className="route-loader-shell" role="status" aria-live="polite">
      <div className="route-loader-spinner" aria-hidden="true" />
      <span>Đang tải nội dung...</span>
    </div>
  );
}


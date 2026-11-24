import { useEffect, useState } from "react";
import { BookOpen, Search, X } from "lucide-react";
import type { StudioConcept } from "./studio.types";

interface StudioSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  concepts: StudioConcept[];
  onSelectConcept: (concept: StudioConcept) => void;
}

export function StudioSearchModal({
  isOpen,
  onClose,
  concepts,
  onSelectConcept,
}: StudioSearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim() === ""
    ? concepts.slice(0, 8)
    : concepts.filter(
        (c) =>
          c.term.toLowerCase().includes(query.toLowerCase()) ||
          c.definition.toLowerCase().includes(query.toLowerCase()) ||
          c.category.toLowerCase().includes(query.toLowerCase()),
      );

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(15, 23, 42, 0.45)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        display: "grid",
        placeItems: "center",
        padding: 16,
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "min(560px, 100%)",
          maxHeight: "80vh",
          background: "var(--studio-card)",
          borderRadius: "var(--studio-radius-lg)",
          border: "1.5px solid var(--blue-300)",
          boxShadow: "0 24px 50px rgba(15, 23, 42, 0.2), 0 0 0 1px rgba(2, 132, 199, 0.2)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "14px 18px",
            borderBottom: "1px solid var(--studio-line)",
          }}
        >
          <Search size={16} color="var(--blue-600)" />
          <input
            type="text"
            placeholder="Tìm khái niệm (Idempotency, P50, 3NF, RabbitMQ, BPMN...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              background: "transparent",
              fontFamily: "var(--studio-font-mono)",
              fontSize: 13,
              color: "var(--studio-ink)",
            }}
          />
          <button
            type="button"
            onClick={onClose}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              color: "var(--studio-muted)",
            }}
          >
            <X size={16} />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "10px 14px", display: "grid", gap: 6 }}>
          {filtered.length === 0 ? (
            <div style={{ padding: 24, textAlign: "center", color: "var(--studio-muted)", fontSize: 13 }}>
              Không tìm thấy khái niệm phù hợp với từ khóa "{query}"
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onSelectConcept(item);
                  onClose();
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 3,
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid var(--studio-line-soft)",
                  background: "var(--studio-sheet)",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 120ms ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%" }}>
                  <BookOpen size={12} color="var(--blue-600)" />
                  <strong style={{ fontFamily: "var(--studio-font-mono)", fontSize: 12.5, color: "var(--blue-800)" }}>
                    {item.term}
                  </strong>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: 9.5,
                      fontFamily: "var(--studio-font-mono)",
                      padding: "2px 6px",
                      borderRadius: 4,
                      background: "var(--blue-50)",
                      color: "var(--blue-700)",
                    }}
                  >
                    {item.category}
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: 11.5, color: "var(--studio-muted)", lineHeight: 1.45 }}>
                  {item.definition}
                </p>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

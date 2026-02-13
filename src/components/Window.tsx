"use client";

import { useState, useEffect, useCallback } from "react";

interface WindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

export default function Window({ title, children, className = "", onClose }: WindowProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    // Don't start drag if clicking a button
    if ((e.target as HTMLElement).closest("button")) return;
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    setIsDragging(true);
  }, [position]);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart]);

  return (
    <div
      className={`win95-window ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        userSelect: isDragging ? "none" : "auto",
      }}
    >
      <div
        className="win95-title-bar"
        onMouseDown={handleMouseDown}
        style={{ cursor: "grab" }}
      >
        <span>{title}</span>
        {onClose && (
          <div className="win95-title-bar-buttons">
            <button className="win95-title-btn" onClick={onClose} aria-label="Close">
              ✕
            </button>
          </div>
        )}
      </div>
      <div className="p-2">
        {children}
      </div>
    </div>
  );
}

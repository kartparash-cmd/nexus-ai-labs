"use client";

import { useCallback } from "react";

const CAL_LINK = "https://cal.com/shriimshriiyai-namah-ald3i6";

export function useCalEmbed() {
  const openCal = useCallback(() => {
    // Create modal overlay
    const overlay = document.createElement("div");
    overlay.id = "cal-modal-overlay";
    overlay.style.cssText =
      "position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;";

    // Close on overlay click
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.remove();
    });

    // Close on Escape
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        overlay.remove();
        document.removeEventListener("keydown", onKey);
      }
    };
    document.addEventListener("keydown", onKey);

    // Close button
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "\u2715";
    closeBtn.style.cssText =
      "position:absolute;top:12px;right:16px;background:none;border:none;color:#fff;font-size:24px;cursor:pointer;z-index:10;";
    closeBtn.addEventListener("click", () => overlay.remove());

    // Container
    const container = document.createElement("div");
    container.style.cssText =
      "position:relative;width:90vw;max-width:480px;height:85vh;max-height:700px;background:#fff;border-radius:12px;overflow:hidden;";
    container.appendChild(closeBtn);

    // Iframe
    const iframe = document.createElement("iframe");
    iframe.src = CAL_LINK;
    iframe.style.cssText = "width:100%;height:100%;border:none;";
    container.appendChild(iframe);

    overlay.appendChild(container);
    document.body.appendChild(overlay);
  }, []);

  return openCal;
}

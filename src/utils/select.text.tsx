import React, { useState, useRef, useEffect } from "react";
import { title } from "../constants/basic";

const TextSelectionDropdown: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [selectedText, setSelectedText] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleSelect = () => {
      const text = (window as any).getSelection().toString();

      if (text) {
        const selection = window.getSelection();
        const range = selection?.getRangeAt(0);
        const rect = range?.getBoundingClientRect();
        if (rect) {
          setSelectedText(text);
          setTimeout(() => {
            setPosition({
              top: rect.bottom + window.scrollY,
              left: rect.left + window.scrollX,
            });
          }, 100);

          setMenuVisible(true);
        }
      } else {
        setTimeout(() => {
          setMenuVisible(false);
        }, 1000);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setMenuVisible(false);
      }
    };

    document.body.addEventListener("mouseup", handleSelect);
    document.body.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.body.removeEventListener("mouseup", handleSelect);
      document.body.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCopy = () => {
    if (selectedText) {
      navigator.clipboard
        .writeText(selectedText)
        .then(() => {
          alert("Text copied to clipboard");
          setMenuVisible(false);
          resetSelection();
        })
        .catch(() => {
          alert("Unable to copy text to clipboard");
        });
    } else {
      alert("No text selected");
      setMenuVisible(false);
    }
  };

  const handleShare = () => {
    if (selectedText && navigator.share) {
      navigator
        .share({
          title: title,
          text: selectedText,
        })
        .then(() => {
          alert("Text shared successfully");
          setMenuVisible(false);
          resetSelection();
        })
        .catch(() => {
          alert("Unable to share text");
        });
    } else {
      alert("Sharing not supported or no text selected");
      setMenuVisible(false);
    }
  };

  const resetSelection = () => {
    setSelectedText("");
  };

  return (
    <div ref={containerRef}>
      {menuVisible && (
        <div
          style={{
            position: "absolute",
            top: position.top,
            left: position.left,
            border: "1px solid #ccc",
            background: "#fff",
            padding: "5px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
          className="d-flex justify-content-center align-items-center flex-column gap-1 mt-2 rounded-2"
        >
          <button onClick={handleCopy} className="btn btn-light">
            <i className="fa-regular fa-copy mx-1"></i>Copy
          </button>
          <button className="btn btn-light" onClick={handleShare}>
            <i className="fa-solid fa-share mx-1"></i>Share
          </button>
        </div>
      )}
    </div>
  );
};

export default TextSelectionDropdown;

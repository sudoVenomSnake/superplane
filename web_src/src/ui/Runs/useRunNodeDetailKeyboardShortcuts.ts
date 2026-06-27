import { useEffect } from "react";

export interface UseRunNodeDetailKeyboardShortcutsProps {
  onJumpToFailure?: () => void;
  onClose?: () => void;
  onPreviousNode?: () => void;
  onNextNode?: () => void;
  onShowHelp?: () => void;
}

export function useRunNodeDetailKeyboardShortcuts({
  onJumpToFailure,
  onClose,
  onPreviousNode,
  onNextNode,
  onShowHelp,
}: UseRunNodeDetailKeyboardShortcutsProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "f") {
        return;
      }

      switch (event.key) {
        case "Escape":
          if (onClose) {
            event.preventDefault();
            onClose();
          }
          break;
        case "f":
          if (event.ctrlKey || event.metaKey) {
            return;
          }
          if (onJumpToFailure) {
            event.preventDefault();
            onJumpToFailure();
          }
          break;
        case "j":
          if (onNextNode) {
            event.preventDefault();
            onNextNode();
          }
          break;
        case "k":
          if (onPreviousNode) {
            event.preventDefault();
            onPreviousNode();
          }
          break;
        case "?":
          if (onShowHelp) {
            event.preventDefault();
            onShowHelp();
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onJumpToFailure, onClose, onPreviousNode, onNextNode, onShowHelp]);
}

export const KEYBOARD_SHORTCUTS = [
  { key: "Esc", action: "Close run inspection panel" },
  { key: "f", action: "Jump to first failure" },
  { key: "j", action: "Next node in run" },
  { key: "k", action: "Previous node in run" },
  { key: "?", action: "Show keyboard shortcuts help" },
];

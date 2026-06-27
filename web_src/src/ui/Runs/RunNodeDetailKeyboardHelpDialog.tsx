import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { KEYBOARD_SHORTCUTS } from "./useRunNodeDetailKeyboardShortcuts";

export interface RunNodeDetailKeyboardHelpDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RunNodeDetailKeyboardHelpDialog({ isOpen, onClose }: RunNodeDetailKeyboardHelpDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Run Inspection Keyboard Shortcuts</DialogTitle>
        </DialogHeader>
        <div className="space-y-2">
          {KEYBOARD_SHORTCUTS.map(({ key, action }) => (
            <div key={key} className="flex items-center justify-between text-sm">
              <span className="text-gray-600">{action}</span>
              <kbd className="rounded border border-gray-300 bg-gray-50 px-2 py-1 font-mono text-xs font-semibold text-gray-900">
                {key}
              </kbd>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

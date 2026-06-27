import { ChevronLeft, ChevronRight, Copy, HelpCircle, X } from "lucide-react";
import type { SuperplaneComponentsNode as ComponentsNode } from "@/api-client";
import { Button } from "@/components/ui/button";
import { RunNodeIcon, RUN_NODE_ICON_SIZE } from "./RunNodeIcon";

export interface RunNodeDetailHeaderProps {
  nodeName: string;
  workflowNode?: ComponentsNode;
  componentIconMap: Record<string, string>;
  previousNodeId: string | null;
  nextNodeId: string | null;
  onClose: () => void;
  onNavigateNode?: (nodeId: string) => void;
  onShowHelp?: () => void;
}

export function RunNodeDetailHeader({
  nodeName,
  workflowNode,
  componentIconMap,
  previousNodeId,
  nextNodeId,
  onClose,
  onNavigateNode,
  onShowHelp,
}: RunNodeDetailHeaderProps) {
  const handleCopyUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      console.log("Run URL copied to clipboard");
    });
  };

  return (
    <div className="flex h-9 shrink-0 items-stretch justify-between border-b border-slate-200 pl-3">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <div className="flex min-w-0 items-center gap-1.5">
          <RunNodeIcon
            componentName={workflowNode?.component}
            iconSlug={workflowNode?.component ? componentIconMap[workflowNode.component] : undefined}
            alt={nodeName}
            size={RUN_NODE_ICON_SIZE}
            className="h-3.5 w-3.5 shrink-0 text-gray-800"
          />
          <h3 className="truncate text-[13px] font-medium text-gray-900">{nodeName}</h3>
        </div>
      </div>
      <div className="flex shrink-0 items-stretch">
        {onNavigateNode ? (
          <div className="flex items-center px-1">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0"
              disabled={!previousNodeId}
              aria-label="Previous node in run (k)"
              onClick={() => previousNodeId && onNavigateNode(previousNodeId)}
              title="Previous node (k)"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0"
              disabled={!nextNodeId}
              aria-label="Next node in run (j)"
              onClick={() => nextNodeId && onNavigateNode(nextNodeId)}
              title="Next node (j)"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        ) : null}
        <div aria-hidden className="w-px self-stretch bg-slate-200" />
        <div className="flex items-center px-1">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0"
            onClick={handleCopyUrl}
            aria-label="Copy run URL"
            title="Copy run URL to clipboard"
          >
            <Copy className="h-3.5 w-3.5" />
          </Button>
          {onShowHelp ? (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0"
              onClick={onShowHelp}
              aria-label="Show keyboard shortcuts (?)"
              title="Keyboard shortcuts (?)"
            >
              <HelpCircle className="h-3.5 w-3.5" />
            </Button>
          ) : null}
        </div>
        <div aria-hidden className="w-px self-stretch bg-slate-200" />
        <div className="flex items-center px-1">
          <Button type="button" variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={onClose}>
            <X className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

import { CheckCircle2, AlertCircle, StopCircle } from "lucide-react";

export type RunStatus = "success" | "error" | "failed" | "skipped" | "running" | "pending" | "unknown";

export interface StatusPresentation {
  icon: typeof CheckCircle2;
  label: string;
  colorClass: string;
  bgColorClass: string;
  iconColorClass: string;
}

export const STATUS_PRESENTATIONS: Record<RunStatus, StatusPresentation> = {
  success: {
    icon: CheckCircle2,
    label: "Passed",
    colorClass: "text-green-700",
    bgColorClass: "bg-green-50",
    iconColorClass: "text-green-600",
  },
  error: {
    icon: AlertCircle,
    label: "Failed",
    colorClass: "text-red-700",
    bgColorClass: "bg-red-50",
    iconColorClass: "text-red-600",
  },
  failed: {
    icon: AlertCircle,
    label: "Failed",
    colorClass: "text-red-700",
    bgColorClass: "bg-red-50",
    iconColorClass: "text-red-600",
  },
  skipped: {
    icon: StopCircle,
    label: "Skipped",
    colorClass: "text-gray-600",
    bgColorClass: "bg-gray-50",
    iconColorClass: "text-gray-500",
  },
  running: {
    icon: AlertCircle,
    label: "Running",
    colorClass: "text-blue-700",
    bgColorClass: "bg-blue-50",
    iconColorClass: "text-blue-600",
  },
  pending: {
    icon: AlertCircle,
    label: "Pending",
    colorClass: "text-yellow-700",
    bgColorClass: "bg-yellow-50",
    iconColorClass: "text-yellow-600",
  },
  unknown: {
    icon: AlertCircle,
    label: "Unknown",
    colorClass: "text-gray-600",
    bgColorClass: "bg-gray-50",
    iconColorClass: "text-gray-500",
  },
};

export function getStatusPresentation(status: RunStatus): StatusPresentation {
  return STATUS_PRESENTATIONS[status] || STATUS_PRESENTATIONS.unknown;
}

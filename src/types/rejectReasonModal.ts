export interface RejectReasonModalProps {
  onConfirm: (reason: string) => void;
  onCancel: () => void;
  isLoading: boolean;
}
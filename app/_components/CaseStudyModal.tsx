import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CaseStudyModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function CaseStudyModal({
  open,
  onClose,
  children,
}: CaseStudyModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative bg-[#141418] max-w-3xl w-full max-h-[85vh] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
          <h3 className="text-lg font-semibold text-white">Case Study</h3>
          <button
            onClick={onClose}
            className="text-2xl text-violet-400 hover:opacity-80"
          >
            <IoMdCloseCircle />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="px-6 py-6 overflow-y-auto max-h-[calc(85vh-64px)]">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

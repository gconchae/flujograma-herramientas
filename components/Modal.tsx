import React, { useEffect, useRef, useMemo } from 'react';
import { CloseIcon } from './Icons';

interface ModalProps {
  title: string;
  subtitle: string;
  content: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, subtitle, content, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Focus trapping
    const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements?.[0];
    const lastElement = focusableElements?.[focusableElements.length - 1];

    const handleTabKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };
    
    firstElement?.focus();
    modalRef.current?.addEventListener('keydown', handleTabKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      modalRef.current?.removeEventListener('keydown', handleTabKeyPress);
    };
  }, [onClose]);

  const parsedContent = useMemo(() => {
    // Using `window.marked.parse` which is loaded from CDN in index.html
    if (window.marked) {
        return window.marked.parse(content);
    }
    return content;
  }, [content]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-lg shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="sticky top-0 px-6 py-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
          <h2 id="modal-title" className="text-2xl font-bold text-blue-800">{title}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label="Cerrar modal"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>
        <main className="overflow-y-auto p-6">
           <div
            className="max-w-none [&>h3]:text-lg [&>h3]:text-teal-600 [&>h3]:font-bold [&>h3]:mb-4 [&>h3]:first-of-type:mt-0 [&>p]:text-base [&>p]:text-slate-700 [&>p]:leading-relaxed [&>p]:mb-8"
            dangerouslySetInnerHTML={{ __html: parsedContent }}
           />
        </main>
      </div>
    </div>
  );
};

// Declaring 'marked' on the window object for TypeScript
declare global {
    interface Window {
        marked: {
            parse: (markdown: string) => string;
        };
    }
}


export default Modal;
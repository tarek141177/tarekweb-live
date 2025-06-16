
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const whatsappNumber = "201064412624";
  const message = "مرحباً، أريد الاستفسار عن خدماتكم";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-violet-500 hover:bg-violet-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </button>
  );
};

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5561984079225";

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Olá Pedro Ivo! Vi seu site e gostaria de mais informações sobre imóveis."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-primary-foreground w-14 h-14 rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs font-bold flex items-center justify-center animate-pulse">
        1
      </span>
    </button>
  );
}

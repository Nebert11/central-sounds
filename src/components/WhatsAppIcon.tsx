interface WhatsAppIconProps {
  className?: string;
}

// Drop-in replacement for the lucide MessageCircle icon, using the brand WhatsApp badge image.
export default function WhatsAppIcon({ className }: WhatsAppIconProps) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}images/logos/whatsapp.png`}
      alt="WhatsApp"
      className={className}
    />
  );
}

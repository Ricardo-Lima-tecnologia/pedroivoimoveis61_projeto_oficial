import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Bed, Bath, Car, Maximize, MapPin, MessageCircle, 
  ArrowLeft, ChevronLeft, ChevronRight, Check, Home,
  Building, Sofa, Tag
} from "lucide-react";
import { getPropertyBySlug } from "@/data/properties";

const WHATSAPP_NUMBER = "5561984079225";

export default function PropertyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const property = getPropertyBySlug(slug || "");
  const [currentImage, setCurrentImage] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center">
        <div className="text-center">
          <Home className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Imóvel não encontrado</h1>
          <p className="text-muted-foreground mb-6">O imóvel que você procura não está disponível.</p>
          <Link 
            to="/#imoveis"
            className="inline-flex items-center gap-2 bg-navy-dark text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-navy-light transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Ver outros imóveis
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá Pedro Ivo! Tenho interesse no imóvel: ${property.title} em ${property.location} - ${property.price}. Gostaria de agendar uma visita.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-navy-dark text-primary-foreground py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link 
            to="/#imoveis"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Voltar aos imóveis</span>
          </Link>
          <Link to="/" className="font-display font-bold text-xl">Pedro Ivo Imóveis</Link>
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted mb-4">
              <img
                src={property.images[currentImage]}
                alt={`${property.title} - Foto ${currentImage + 1}`}
                className="w-full h-full object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background p-2 rounded-full shadow-lg transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background p-2 rounded-full shadow-lg transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-foreground/60 text-primary-foreground px-4 py-2 rounded-full text-sm">
                Fotos ({currentImage + 1}/{property.images.length})
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {property.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    currentImage === index 
                      ? "border-navy-dark ring-2 ring-navy-dark/20" 
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`Miniatura ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {property.mapUrl && (
              <div className="mt-6">
                <h2 className="text-xl font-bold text-foreground mb-3">Localização</h2>
                <div className="rounded-xl overflow-hidden shadow-sm">
                  <iframe
                    src={property.mapUrl}
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização do imóvel"
                  />
                </div>
              </div>
            )}

            <button
              onClick={handleWhatsApp}
              className="w-full mt-6 flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-primary-foreground py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              Tenho Interesse - Falar no WhatsApp
            </button>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block bg-green-500 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                {property.financing}
              </span>
              {property.isSemiFurnished && (
                <span className="inline-flex items-center gap-1 bg-navy-dark text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                  <Sofa className="w-4 h-4" />
                  Semimobiliado
                </span>
              )}
              {property.code && (
                <span className="inline-flex items-center gap-1 bg-muted text-muted-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                  <Tag className="w-4 h-4" />
                  {property.code}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-2">
              {property.title}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{property.location}</span>
            </div>
            {property.address && (
              <p className="text-muted-foreground text-sm mb-6">{property.address}</p>
            )}

            <div className="bg-navy-dark/5 rounded-2xl p-6 mb-6">
              <p className="text-sm text-muted-foreground mb-1">Valor do imóvel</p>
              <p className="text-4xl font-display font-bold text-navy-dark">
                {property.price}
              </p>
              <p className="text-green-600 font-medium mt-2">{property.financing}</p>
              {property.condoFee && (
                <p className="text-muted-foreground text-sm mt-2">
                  <Building className="w-4 h-4 inline mr-1" />
                  Condomínio: {property.condoFee}
                </p>
              )}
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-card rounded-xl p-4 text-center shadow-sm">
                <Bed className="w-7 h-7 text-navy-dark mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{property.bedrooms}</p>
                <p className="text-sm text-muted-foreground">Quartos</p>
                {(property.suites ?? 0) > 0 && (
                  <p className="text-xs text-navy-dark font-medium">{property.suites} suíte</p>
                )}
              </div>
              <div className="bg-card rounded-xl p-4 text-center shadow-sm">
                <Bath className="w-7 h-7 text-navy-dark mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{property.bathrooms}</p>
                <p className="text-sm text-muted-foreground">Banheiros</p>
              </div>
              <div className="bg-card rounded-xl p-4 text-center shadow-sm">
                <Car className="w-7 h-7 text-navy-dark mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{property.parking}</p>
                <p className="text-sm text-muted-foreground">Vagas</p>
              </div>
              <div className="bg-card rounded-xl p-4 text-center shadow-sm">
                <Maximize className="w-7 h-7 text-navy-dark mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{property.area}</p>
                <p className="text-sm text-muted-foreground">m²</p>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-3">Descrição</h2>
              <p className="text-muted-foreground leading-relaxed">{property.description}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-3">Características</h2>
              <div className="grid grid-cols-2 gap-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {property.amenities && property.amenities.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-bold text-foreground mb-3">Lazer do Condomínio</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2 text-foreground bg-navy-dark/5 px-3 py-2 rounded-lg">
                      <Check className="w-5 h-5 text-navy-dark flex-shrink-0" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

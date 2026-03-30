import { Link } from "react-router-dom";
import { Bed, Bath, Car, Maximize, MapPin, MessageCircle } from "lucide-react";
import { properties } from "@/data/properties";

const WHATSAPP_NUMBER = "5561984079225";

export default function Properties() {
  const handleWhatsApp = (property: typeof properties[0]) => {
    const message = encodeURIComponent(
      `Olá Pedro Ivo! Tenho interesse no imóvel: ${property.title} em ${property.location} - ${property.price}. Gostaria de mais informações.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="imoveis" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-navy-dark/10 text-navy-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Imóveis Disponíveis
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Comprar Imóveis em Samambaia
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Confira nossos imóveis selecionados com as melhores condições de financiamento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Link to={`/imovel/${property.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-green-500 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {property.financing}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-foreground/60 text-primary-foreground px-3 py-1 rounded-full text-xs">
                      {property.images.length} fotos
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-2xl font-display font-bold text-navy-dark mb-2">
                    {property.price}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{property.location}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 py-4 border-t border-border">
                    <div className="flex flex-col items-center">
                      <Bed className="w-5 h-5 text-navy-dark mb-1" />
                      <span className="text-xs text-muted-foreground">{property.bedrooms} Qts</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Bath className="w-5 h-5 text-navy-dark mb-1" />
                      <span className="text-xs text-muted-foreground">{property.bathrooms} Ban</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Car className="w-5 h-5 text-navy-dark mb-1" />
                      <span className="text-xs text-muted-foreground">{property.parking} Vaga</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Maximize className="w-5 h-5 text-navy-dark mb-1" />
                      <span className="text-xs text-muted-foreground">{property.area}m²</span>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="px-5 pb-5">
                <button
                  onClick={() => handleWhatsApp(property)}
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-primary-foreground py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Tenho Interesse
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export interface Property {
  id: number;
  slug: string;
  code?: string;
  title: string;
  location: string;
  neighborhood: string;
  address?: string;
  price: string;
  priceValue: number;
  financing: string;
  bedrooms: number;
  suites?: number;
  bathrooms: number;
  parking: number;
  area: number;
  condoFee?: string;
  isSemiFurnished?: boolean;
  description: string;
  features: string[];
  amenities?: string[];
  images: string[];
  mapUrl?: string;
}

export const properties: Property[] = [
  {
    id: 1,
    slug: "apartamento-3-quartos-qs-302-samambaia-sul",
    code: "QD302-APT3QTS-409K",
    title: "Apartamento 3 Quartos – QS 302",
    location: "Samambaia Sul, DF",
    neighborhood: "Samambaia Sul",
    address: "Quadra 302 Conjunto 2, Samambaia Sul (Samambaia) - Brasília - DF",
    price: "R$ 409.000",
    priceValue: 409000,
    financing: "Aceita Financiamento",
    bedrooms: 3,
    suites: 1,
    bathrooms: 2,
    parking: 1,
    area: 70,
    condoFee: "R$ 540,00",
    isSemiFurnished: true,
    description: "Se você busca localização privilegiada, lazer completo e excelente padrão, essa é a oportunidade certa. Apartamento de 3 quartos sendo 1 suíte, 70m² bem distribuídos, 1º andar, nascente, sala ampla, varanda, cozinha com armários planejados, cooktop e forno. Condomínio com estrutura completa: piscina, churrasqueira, quadra, brinquedoteca, sala de jogos, salão de festas, academia, mercadinho e lavanderia. Localização estratégica: próximo ao metrô, parada de ônibus, Atacadão Dia a Dia, farmácias e academias como Smart Fit, Evolve e Bluefit.",
    features: [
      "3 quartos sendo 1 suíte",
      "70m² bem distribuídos",
      "1º andar",
      "Nascente",
      "Sala ampla",
      "Varanda",
      "Cozinha com armários planejados",
      "Cooktop e forno",
      "Banheiro social",
      "Semimobiliado",
    ],
    amenities: [
      "Piscina",
      "Churrasqueira",
      "Quadra",
      "Brinquedoteca",
      "Sala de jogos",
      "Salão de festas",
      "Academia",
      "Mercadinho",
      "Lavanderia",
    ],
    images: [
      "/images/prop1-1.png",
      "/images/prop1-2.png",
      "/images/prop1-3.png",
      "/images/prop1-4.png",
      "/images/prop1-5.png",
      "/images/prop1-6.png",
      "/images/prop1-7.png",
      "/images/prop1-8.png",
      "/images/prop1-9.png",
      "/images/prop1-10.png",
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.5!2d-48.0833!3d-15.8833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUzJzAwLjAiUyA0OMKwMDUnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890",
  },
  {
    id: 2,
    slug: "apartamento-2-quartos-urban-302-samambaia-sul",
    code: "QD302-APT2QTS-335K",
    title: "QR 302 Residencial Urban – Apt 2 Quartos",
    location: "Samambaia Sul, DF",
    neighborhood: "Samambaia Sul",
    address: "Quadra 302 Conjunto 13, Samambaia Sul (Samambaia) - Brasília - DF",
    price: "R$ 335.000",
    priceValue: 335000,
    financing: "Aceita Financiamento",
    bedrooms: 2,
    suites: 0,
    bathrooms: 1,
    parking: 1,
    area: 46,
    isSemiFurnished: false,
    description: "Apartamento à Venda – Samambaia Sul | Quadra 302 – Urban 302. 7º andar, nascente, vista livre. Localização privilegiada em frente ao Metrô Terminal Samambaia, ao lado do McDonald's e em frente ao futuro shopping. Próximo a padarias, escolas, mercados e farmácia. Parada de ônibus a 2 minutos. Condomínio com lazer completo e estrutura de alto padrão.",
    features: [
      "7º andar, nascente, vista livre",
      "2 quartos (1 com planejados e guarda-roupas)",
      "Sala com 2 ambientes e painel planejado",
      "Cozinha com armários",
      "Banheiro com box",
      "46m² de área construída",
      "Vaga coberta",
      "Antena TV",
      "Armário cozinha",
      "Banheiro social",
    ],
    amenities: [
      "Piscina aquecida",
      "Academia",
      "Sauna",
      "Brinquedoteca",
      "Lan-house",
      "Salão de festas",
      "Espaço gourmet",
      "Bicicletário",
      "Portaria remota com reconhecimento facial",
      "Mini mercado 24h",
      "Elevadores",
    ],
    images: [
      "/images/prop2-1.png",
      "/images/prop2-2.png",
      "/images/prop2-3.png",
      "/images/prop2-4.png",
      "/images/prop2-5.png",
      "/images/prop2-6.png",
      "/images/prop2-7.png",
      "/images/prop2-8.png",
      "/images/prop2-9.png",
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.8!2d-48.1114!3d-15.8789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2dfc0e2b0e5d%3A0x4a2b2c8d0e0f0g0h!2sMetr%C3%B4%20Samambaia!5e0!3m2!1spt-BR!2sbr!4v1234567891",
  },
  {
    id: 3,
    slug: "apartamento-2-quartos-le-grand-orleans-samambaia-sul",
    code: "QD302-APT2QTS-340K",
    title: "Apt 2 Quartos 1 Suíte – Qd 302 Le Grand Orleans",
    location: "Samambaia Sul, DF",
    neighborhood: "Samambaia Sul",
    address: "Quadra 302 Conjunto 10, Samambaia Sul (Samambaia) - Brasília - DF",
    price: "R$ 340.000",
    priceValue: 340000,
    financing: "Aceita Financiamento",
    bedrooms: 2,
    suites: 1,
    bathrooms: 2,
    parking: 1,
    area: 56,
    isSemiFurnished: false,
    description: "Residencial Le Grand Orleans Tower – Quadra 302 | Samambaia Sul. Se você busca conforto, localização estratégica e lazer completo, essa é a oportunidade ideal. Apartamento de 2 quartos sendo 1 suíte, 56m² bem distribuídos, 3º andar, nascente, sala ampla e bem ventilada, cozinha com armários planejados, banheiro social. Condomínio completo: piscina, churrasqueira, quadra esportiva, brinquedoteca, sala de jogos, salão de festas, academia, mercadinho e lavanderia. Localização privilegiada, próximo ao metrô, parada de ônibus, Atacadão Dia a Dia e academias como Smart Fit, Evolve Academia e Bluefit.",
    features: [
      "2 quartos sendo 1 suíte",
      "56m² bem distribuídos",
      "3º andar",
      "Nascente",
      "Sala ampla e bem ventilada",
      "Cozinha com armários planejados",
      "Banheiro social",
      "Aceita financiamento",
    ],
    amenities: [
      "Piscina",
      "Churrasqueira",
      "Quadra esportiva",
      "Brinquedoteca",
      "Sala de jogos",
      "Salão de festas",
      "Academia",
      "Mercadinho",
      "Lavanderia",
      "Elevador",
      "Armário cozinha",
    ],
    images: [
      "/images/card3-1.png",
      "/images/card3-2.png",
      "/images/card3-3.png",
      "/images/card3-4.png",
      "/images/card3-5.png",
      "/images/card3-6.png",
      "/images/card3-7.png",
      "/images/card3-8.png",
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.5!2d-48.0833!3d-15.8833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUzJzAwLjAiUyA0OMKwMDUnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567892",
  },
  {
    id: 4,
    slug: "lote-comercial-qr614-samambaia",
    code: "QR614-LOTE-110K",
    title: "Lote Comercial em Samambaia",
    location: "Samambaia, DF",
    neighborhood: "Samambaia",
    address: "QR 614 Conjunto 6A Lote 2, Samambaia - Brasília - DF",
    price: "R$ 90.000",
    priceValue: 90000,
    financing: "Consulte condições",
    bedrooms: 0,
    suites: 0,
    bathrooms: 0,
    parking: 0,
    area: 0,
    isSemiFurnished: false,
    description: "Lote comercial localizado na QR 614 Conjunto 6A Lote 2, Samambaia - DF. Excelente oportunidade para investimento ou construção comercial em região com grande movimentação e infraestrutura consolidada. Próximo a comércios, escolas, hospitais e vias de acesso rápido.",
    features: [
      "Lote comercial",
      "Localização estratégica",
      "Região com infraestrutura consolidada",
      "Próximo a comércios e serviços",
      "Fácil acesso a vias principais",
    ],
    amenities: [],
    images: [
      "/images/card4-1.png",
      "/images/card4-2.png",
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1919.2!2d-48.0985!3d-15.8745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2d0000000000%3A0x0!2sQR+614+Conjunto+6A%2C+Samambaia+-+DF!5e0!3m2!1spt-BR!2sbr!4v1700000000000",
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

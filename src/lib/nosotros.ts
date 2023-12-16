import DiseñoCardImage from "@media/images/pages/nosotros/cards/diseño_card.webp"
import FacilidadesCardImage from "@media/images/pages/nosotros/cards/facilidades_card.webp"
import UbicacionCardImage from "@media/images/pages/nosotros/cards/ubicacion_card.webp"

import TeamPicture1 from "@media/images/pages/nosotros/team/01_team_picture.webp"
import TeamPicture2 from "@media/images/pages/nosotros/team/02_team_picture.webp"
import TeamPicture3 from "@media/images/pages/nosotros/team/03_team_picture.webp"
import TeamPicture4 from "@media/images/pages/nosotros/team/04_team_picture.webp"
import TeamPicture5 from "@media/images/pages/nosotros/team/05_team_picture.webp"
import TeamPicture6 from "@media/images/pages/nosotros/team/06_team_picture.webp"

export interface Data {
  title: string;
  description: string;
  src: ImageMetadata;
}

export const Nosotros: Data[] = [
  {
    title: "Ubicación",
    description:
      "En Alta Vida, seleccionamos ubicaciones estratégicas para tu comodidad y calidad de vida, garantizando cercanía a todas tus necesidades.",
    src: UbicacionCardImage,
  },
  {
    title: "Facilidades",
    description:
      "Alta Vida ofrece facilidades para el descanso y la diversión en casa, incluyendo áreas verdes, piscina, juegos y salón de usos múltiples.",
    src: FacilidadesCardImage,
  },
  {
    title: "Diseño",
    description:
      "Nuestras casas se caracterizan por un moderno diseño que optimiza el espacio y se integra perfectamente con el entorno, manteniendo su atractivo con el tiempo.",
    src: DiseñoCardImage,
  },
];

export const TeamGallery: ImageMetadata[] = [
  TeamPicture1,
  TeamPicture2,
  TeamPicture3,
  TeamPicture4,
  TeamPicture5,
  TeamPicture6,
]
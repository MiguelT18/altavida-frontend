import BancoCredito from "@media/images/pages/financiamiento/creditos/banco_bcp.png"
import BancoBisa from "@media/images/pages/financiamiento/creditos/banco_bisa.png"
import BancoBnb from "@media/images/pages/financiamiento/creditos/banco_bnb.jpg"
import BancoEconomico from "@media/images/pages/financiamiento/creditos/banco_economico.jpg"
import LaPrimera from "@media/images/pages/financiamiento/creditos/banco_efv.png"
import BancoGanadero from "@media/images/pages/financiamiento/creditos/banco_ganadero.png"
import BancoMercantil from "@media/images/pages/financiamiento/creditos/banco_mercantil.png"
import BancoUnion from "@media/images/pages/financiamiento/creditos/banco_union.jpg"

export interface Creditos {
	name: string;
	src: ImageMetadata;
}

export const Creditos: Creditos[] = [
	{
		name: "Banco Mercantil",
		src: BancoMercantil,
	},
	{
    name: "Banco de Crédito (BCP)",
    src: BancoCredito,
	},
	{
    name: "Banco Bisa",
    src: BancoBisa,
	},
	{
    name: "Banco BNB",
    src: BancoBnb,
	},
	{
    name: "Banco Economico",
    src: BancoEconomico,
	},
	{
		name: "Banco Ganadero",
		src: BancoGanadero,
	},
	{
		name: "Banco Union",
		src: BancoUnion,
	},
	{
		name: "La primera EFV",
    src: LaPrimera,
	},
]

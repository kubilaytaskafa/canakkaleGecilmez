import { createSlice } from "@reduxjs/toolkit";
import ataturk from "../../images/MustafaKemalAtatürk.webp";
import seyitOnbasi from "../../images/seyitOnbasi.jpg";
import enverPasa from "../../images/enverPasa.jpg";
import elliyedinciAlay from "../../images/57.alay.webp";
import kahramanMehmetcik from "../../images/canakkaleAsker.webp";

const initialState = {
  heroes: [
    {
      id: 1,
      name: "Mustafa Kemal Atatürk",
      description:
        "Çanakkale Savaşı'nda gösterdiği stratejik deha ile zaferin kazanılmasında başrol oynadı. Anafartalar Grup Komutanı olarak, düşman saldırılarına karşı Türk ordusunun savunmasını mükemmel bir şekilde yönetti. Zafer, onun liderlik yeteneklerini pekiştirerek, Türkiye Cumhuriyeti'nin kurucusu olma yolunda ilk adımlarını attı.",
      image: ataturk,
    },
    {
      id: 2,
      name: "Seyit Onbaşı",
      description:
        " 276 kilogramlık mermiyi tek başına kaldırarak düşman zırhlısına fırlatıp batıran kahraman. Bu olağanüstü güç gösterisi, onun Çanakkale Savaşı'nın simgelerinden biri olmasını sağladı. Seyit Onbaşı'nın cesareti ve gücü, Türk askerinin moral kaynağı oldu.",
      image: seyitOnbasi,
    },

    {
      id: 3,
      name: "İsmail Enver Paşa",
      description:
        "Çanakkale Savaşı'nda Osmanlı İmparatorluğu’nun genelkurmay başkanı olarak önemli bir rol oynadı ve Türk ordusunun stratejisini belirlemede etkin oldu.",
      image: enverPasa,
    },
    {
      id: 4,
      name: "57.Alay",
      description:
        "Alay, Çanakkale Savaşı sırasında Türk askerlerinin gösterdiği büyük kahramanlıkla tanınan bir askeri birimdir. 1915 yılında Gelibolu Yarımadası'nda, Anafartalar ve Conkbayırı'nda İtilaf Devletleri'ne karşı şiddetli çatışmalara katılmıştır. Alay, özellikle 57. Alay Komutanı Yarbay Hasan Rıza Bey’in liderliğinde büyük bir direniş sergileyerek, düşman ilerleyişine karşı kahramanca savaşmıştır.",
      image: elliyedinciAlay,
    },
    {
      id: 5,
      name: "Kahraman Mehmetçik",
      description:
        "Çanakkale ve Kurtuluş Savaşı'nda görev alan kahraman Mehmetçik, vatanı savunmak için canını feda etti. Her biri, gözlerinde kararlılık, yüreğinde vatan sevgisiyle destan yazdı. Türk milletinin özgürlüğü için verdiği bu eşsiz mücadele, sonsuza dek hafızalarda kalacak.",
      image: kahramanMehmetcik,
    },
  ],
};

const heroeSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {},
});

export default heroeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import ataturk from "../../images/MustafaKemalAtatürk.webp";
import seyitOnbasi from "../../images/seyitOnbasi.jpg";
import enverPasa from "../../images/enverPasa.jpg";
import halilKutPasa from "../../images/halilKutPasa.jpeg";
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
      name: "Halil Bey (Halil Kut Paşa)",
      description:
        "Çanakkale’deki kara savunmasında gösterdiği liderlik ve cesaretle tanındı. Çeşitli zaferlere imza atarak Türk ordusunun direncini artırdı.",
      image: halilKutPasa,
    },
    {
      id: 4,
      name: "İsmail Enver Paşa",
      description:
        "Çanakkale Savaşı'nda Osmanlı İmparatorluğu’nun genelkurmay başkanı olarak önemli bir rol oynadı ve Türk ordusunun stratejisini belirlemede etkin oldu.",
      image: enverPasa,
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

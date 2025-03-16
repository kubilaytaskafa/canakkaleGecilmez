import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const quotes = [
  {
    id: 1,
    text: "“Çanakkale Zaferi, Türk askerinin ruh kudretini gösteren şayanı hayret ve tebrik bir misaldir. Emin olmalısınız ki, Çanakkale Muharebelerini kazandıran bu yüksek ruhtur.”",
    author: "Mustafa Kemal Atatürk",
  },
  {
    id: 2,
    text: "Türkler, Çanakkale’yi zorlayan çağının en ileri tekniğine sahip güçler karşısına adeta bir kale gibi dikilmişlerdir.”",
    author: "Churchill",
  },
  {
    id: 3,
    text: " Bu Türk kıtaatının cesaret, metanet ve se’bat cihetiyle takdir ve senaya liyakatı, her şüphenin fevkinde bulunmuştur. Donanmasının ateşiyle de, en müessir surette muavenet gören pek cesur bir düşmamn taarruzlarına karşı sayısız muharebelerde bu kıtaat mevkilerini muhafaza etmişlerdir.”",
    author: "Liman Von Sanders",
  },
  {
    id: 4,
    text: "Ben size taarruzu emretmiyorum, ölmeyi emrediyorum. Biz ölünceye kadar geçecek zaman zarfında yerimize başka kuvvetler gelir, başka komutanlar hakim olabilir.",
    author: "Mustafa Kemal Atatürk",
  },
];

const HeroQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000); // 5 saniyede bir değiştir

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-2/3  flex flex-col items-center justify-center bg-primary text-white p-6 relative rounded-lg shadow-xl mb-24">
      <motion.div
        key={quotes[currentQuote].id} // Her değişimde key değiştirerek animasyon uygula
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-xl lg:text-3xl font-semibold">
          "{quotes[currentQuote].text}"
        </p>
        <p className="text-lg text-gray-400 mt-2">
          - {quotes[currentQuote].author}
        </p>
      </motion.div>
    </div>
  );
};

export default HeroQuotes;

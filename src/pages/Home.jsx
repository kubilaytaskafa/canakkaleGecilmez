import React from "react";
import Header from "../components/Header";
import map from "../images/savasHaritasi.jpg";
import Heroes from "../components/Heroes";
import Gallery from "../components/Gallery";
import ScrollToTopButton from "../components/ScrollToUp";
const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section className="w-full flex items-center justify-center mt-20 lg:h-[600px] relative">
          <article
            id="home"
            className="w-full h-full flex items-center justify-center p-24 bg-cover bg-center relative"
          >
            {/* Opacity için Overlay (Kaplama) */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="flex items-center justify-center gap-4 flex-col">
              {/* İçerik */}
              <h1 className="lg:text-4xl text-2xl text-center font-bold mb-4 text-white relative z-10">
                Türk milletinin kahramanlık destanı
              </h1>
              <h1 className=" lg:text-2xl text-sm text-center font-bold mb-4 text-white relative z-10">
                "Bu memleketin toprakları üstünde kanlarını döken kahramanlar!
                Burada bir dost vatanın toprağındasınız. Huzur ve sükûn içinde
                uyuyunuz."
              </h1>
              <h1 className="lg:text-2xl text-sm  font-bold mb-4 text-white relative z-10 text-right">
                Mustafa Kemal Atatürk
              </h1>
            </div>
          </article>
        </section>
        <section
          id="history"
          className="flex items-center justify-center w-full flex-col  mt-16"
        >
          <h1 className="lg:text-6xl text-2xl font-bold text-primary italic">
            Çanakkale Savaşı Tarihçesi
          </h1>
          <article className="flex items-center justify-center w-full lg:flex-row flex-col gap-4 mt-2">
            <div className="lg:w-1/2 w-full shadow-xl">
              <img src={map} alt="" className="w-full h-full p-4" />
            </div>
            <div className="lg:w-1/2 w-full flex items-start justify-start text-left flex-col gap-4 p-12 shadow-xl lg:mb-64">
              <p className="lg:text-lg text-gray-600">
                Çanakkale Savaşı, I. Dünya Savaşı sırasında 1915-1916 yılları
                arasında Gelibolu Yarımadası'nda Osmanlı İmparatorluğu ile
                İtilaf Devletleri arasında yapılan deniz ve kara
                muharebeleridir.
              </p>
              <p className="lg:text-lg text-gray-600">
                İtilaf Devletleri, Osmanlı İmparatorluğu'nun başkenti İstanbul'u
                alarak boğazların kontrolünü ele geçirmek, Rusya'ya yardım
                götürmek ve savaşı kısaltmak amacıyla Çanakkale Boğazı'nı
                geçmeye çalıştılar.
              </p>
              <p className="lg:text-lg text-gray-600">
                18 Mart 1915'te İngiliz ve Fransız donanması, Çanakkale
                Boğazı'nı geçmek için büyük bir saldırı başlattı. Ancak Türk
                topçuları ve mayınlar sayesinde bu saldırı püskürtüldü. Bu
                zafer, Türk milletinin bağımsızlık mücadelesinde önemli bir
                dönüm noktası oldu.
              </p>
            </div>
          </article>
          <article className="lg:w-[75%] w-full  flex flex-col items-start gap-4 text-left m-12 p-6  shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold text-primary">Önemli Tarihler</h3>
            <ul className="flex items-start flex-col gap-2 ">
              <li className="text-xl">
                <span className="text-primary font-bold text-xl mr-2">
                  3 Kasım 1914:
                </span>
                İtilaf Devletleri'nin Çanakkale Boğazı'nı ilk bombardımanı
              </li>
              <li className="text-xl">
                <span className="text-primary font-bold text-xl mr-2">
                  19 Şubat 1915:
                </span>
                Çanakkale Boğazı'na yönelik büyük deniz harekatının başlaması
              </li>
              <li className="text-xl">
                <span className="text-primary font-bold text-xl mr-2">
                  18 Mart 1915:
                </span>
                İtilaf Donanması'nın Çanakkale Boğazı'nı geçme girişiminin
                püskürtülmesi
              </li>
              <li className="text-xl">
                <span className="text-primary font-bold text-xl mr-2">
                  25 Nisan 1915:
                </span>
                Kara savaşlarının başlaması, Gelibolu'ya asker çıkarılması
              </li>
              <li className="text-xl">
                <span className="text-primary font-bold text-xl mr-2">
                  9 Ocak 1916:
                </span>
                İtilaf Kuvvetleri'nin Gelibolu'dan tamamen çekilmesi
              </li>
            </ul>
          </article>
        </section>
        <section
          id="heroes"
          className="w-full flex flex-col items-center justify-center "
        >
          <article className="w-full flex justify-center items-center text-center ">
            <h1 className="lg:text-6xl text-2xl font-bold text-primary">
              Çanakkale Kahramanları
            </h1>
          </article>
          <article className="w-full flex justify-center items-center gap-4">
            <Heroes />
          </article>
        </section>

        <section
          id="gallery"
          className="w-full flex flex-col items-center justify-center mt-12 "
        >
          <article className="w-full flex justify-center items-center text-center ">
            <h1 className="lg:text-6xl text-2xl font-bold text-primary">
              Çanakkale Savaşı Galeri
            </h1>
          </article>
          <article className="w-full flex justify-center items-center gap-4 mt-10">
            <Gallery />
          </article>
        </section>
      </main>
      <ScrollToTopButton />
    </>
  );
};

export default Home;

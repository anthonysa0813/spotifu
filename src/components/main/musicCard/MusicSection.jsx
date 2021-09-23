import React from "react";
import Musiccard from "./Musiccard";

const MusicSection = () => {
  return (
    <section className="musicSection ">
      <Musiccard
        imagen="https://umomag.com/wp-content/uploads/2017/11/noticia-chris-brown-heartbreak-on-a-full-moon-escucha-cover-umomag.jpg"
        title="fan of a fan"
        musics="Wetside, Ayo, Remember me"
      />
      <Musiccard
        imagen="https://www.thebackstage.net/wp-content/uploads/2013/03/bringmethehorizon_s.jpg"
        title="Sempiternal"
        musics="Can you feel my Heart, Sleepwalking, Shadow moses"
      />
      <Musiccard
        imagen="https://www.chicagotribune.com/resizer/IG31GvrTdlNO-MAqlJCPfzICC9I=/800x801/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/QHHIUWX24ZHGRIRVTGFPAGYSEE.jpg"
        title="The gateway"
        musics="We turned red, Sick love, Detroit"
      />
      <Musiccard
        imagen="https://img.discogs.com/Y4iiGu3CuDsmX4oqU4_xUOdjsSk=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12637375-1539088085-6155.jpeg.jpg"
        title="Redemption"
        musics="Broke +-, Win, OSOM, Shit real"
      />
      <Musiccard
        imagen="https://images-na.ssl-images-amazon.com/images/I/819L0RjhANL._SL1417_.jpg"
        title="Get rich or Die Tryin"
        musics="In da Club, P.I.M.P, Like my style"
      />
      <Musiccard
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0-9odhLYSOv8nXH75iB6ndQWJu0ldTiNRbndsrxEr4mwHIKUt_BqbCIn3NVoZ8GE3wg&usqp=CAU"
        title="Only by the night"
        musics="Closer, Sex on fire, Be somebody"
      />
    </section>
  );
};

export default MusicSection;

import React from "react";
import "./musicArticle.css";
import MusicCardOne from "./MusicCardOne";

const MusicArticle = () => {
  return (
    <section className="musicContent ">
      <MusicCardOne
        title="Indie Folks Finds"
        imagen="https://images.squarespace-cdn.com/content/v1/512566b8e4b0d69820152cd7/1389754201515-ZH63VJKGY5HL82WQRK1Q/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmihaE5rlzFBImxTetd_yW5btdZx37rH5fuWDtePBPDaHF5LxdCVHkNEqSYPsUQCdT/front_small_portfolio_site.jpg"
      />
      <MusicCardOne
        title="Redemption"
        imagen="https://images.genius.com/6d2e0f4a49b2df98eed4bcbcd78a3529.640x640x1.jpg"
      />
      <MusicCardOne
        title="Chris Brown"
        imagen="https://images-na.ssl-images-amazon.com/images/I/81rppmYSsDL._SL1500_.jpg"
      />
      <MusicCardOne
        title="Yandel"
        imagen="https://i.scdn.co/image/ab67616d0000b273a6b08283fcd3e75eb5b6566b"
      />
      <MusicCardOne
        title="Bring me the horizon"
        imagen="https://studiosol-a.akamaihd.net/letras/272x272/albuns/0/d/a/d/457141568297733.jpg"
      />
      <MusicCardOne
        title="Disclousure"
        imagen="https://img.discogs.com/d6h3_MAk61f5zpnOy7Gl7vChsAw=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4653505-1371167076-9513.jpeg.jpg"
      />
      <MusicCardOne
        title="6BLACK"
        imagen="https://images-na.ssl-images-amazon.com/images/I/71hTT7j9oJL._SL1200_.jpg"
      />
      <MusicCardOne
        title="kings of Lion"
        imagen="https://2.bp.blogspot.com/-qurYdcWXM1k/V8Zn1yTUA7I/AAAAAAAABAc/wvPgIhEA9gYbmi0OUpZubdleXa8tkyNjACLcB/s1600/Album%2B1.jpg"
      />
    </section>
  );
};

export default MusicArticle;

const publicImage = (filename) => (filename ? `/image/${filename}` : null);

export const homepageAssets = {
  logo: publicImage("logo-lia.png"),
  heroBackground: publicImage("hero.png"),
  about: publicImage("about.jpeg"),
  speakers: {
    openingSpeech: publicImage("yulidhar.png"),
    keynote: publicImage("ilza.png"),
    dayangAffizah: publicImage("dayang.png"),
    supaphornAkkapin: publicImage("supaphorn.png"),
    rahmatBudiarto: publicImage("rahmat.png"),
  },
  partners: {
    universitasLia: publicImage("logo-lia.png"),
    gici: publicImage("gici.png"),
    partnerSealOne: publicImage("pertiwi.png"),
    partnerSealTwo: publicImage("unindra.png"),
    stmikAlMuslim: publicImage("stmik.png"),
    sinta: publicImage("sinta.png"),
    scopus: publicImage("scopus.png"),
    googleScholar: publicImage("google.png"),
  },
};


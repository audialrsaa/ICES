const publicImage = (filename) => (filename ? `/image/${filename}` : null);

export const homepageAssets = {
  logo: publicImage(null),
  heroBackground: publicImage(null),
  about: publicImage(null),
  speakers: {
    openingSpeech: publicImage(null),
    keynote: publicImage(null),
    dayangAffizah: publicImage(null),
    supaphornAkkapin: publicImage(null),
    rahmatBudiarto: publicImage(null),
  },
  partners: {
    universitasLia: publicImage(null),
    gici: publicImage(null),
    partnerSealOne: publicImage(null),
    partnerSealTwo: publicImage(null),
    stmikAlMuslim: publicImage(null),
    sinta: publicImage(null),
    scopus: publicImage(null),
    googleScholar: publicImage(null),
  },
};

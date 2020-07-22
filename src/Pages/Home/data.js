
import brand1 from  '../../assets/brands/beninca.jpg';
import brand2 from  '../../assets/brands/bft.png';
import brand3 from  '../../assets/brands/came.png';
import brand4 from  '../../assets/brands/faac.png';
import brand5 from  '../../assets/brands/hormann.png';
import brand6 from  '../../assets/brands/hormann2.png';
import brand7 from  '../../assets/brands/nice.png';
import brand8 from  '../../assets/brands/sommer.png';
import brand9 from  '../../assets/brands/wisniowski.jpg';

export const tiers = [
  {
    title: 'Doradztwo',
    description: [
      'Oferujemy darmową wycenę w zakresie montażu bram garażowych.',
    ],
    buttonText: 'Skontaktuj się z doradcą',
    buttonProps: {
      fullWidth: true,
      href: "#kontakt",
      variant: 'outlined',
      color: "primary"
    },
    // form: true,
    // formHeader: 'Formularz - Doradztwo',
    // formDescription: 'Opis formularz doradca...Opis formularz doradca...Opis formularz doradca...Opis formularz doradca...Opis formularz doradca...Opis formularz doradca...'
  },
  {
    title: 'Sklep internetowy',
    subheader: '',
    description: [
      'Oferujemy sprzedaż internetową wszystkiego co potrzebne do naprawy, montażu i utrzymania bramy lub furtki.',
    ],
    buttonText: 'Przejdź do sklepu',
    buttonProps: {
      fullWidth: true,
      href: "https://sklep.bramator.pl",
      variant: 'contained',
      color: 'primary'
    },
  },
  {
    title: 'Serwis',
    description: [
      'Wykonujemy okresowe przeglądy oraz naprawy pogwarancyjne bram, furtek oraz napędów.',
    ],
    buttonText: 'Skontaktuj się z serwisem',
    buttonProps: {
      fullWidth: true,
      href: "#kontakt",
      variant: 'outlined',
      color: "primary"
    },
    // form: true,
    // formHeader: 'Formularz - Serwis',
    // formDescription: 'Opis formularz serwis.... Opis formularz serwis.... Opis formularz serwis.... Opis formularz serwis.... Opis formularz serwis.... Opis formularz serwis.... '
  },
];



export const carousel = [
  {
    img: brand1,
    url: 'https://www.onet.pl',
  },
  {
    img: brand2,
  },
  {
    img: brand3,
  },
  {
    img: brand4,
  },
  {
    img: brand5,
  },
  {
    img: brand8,
  },
  {
    img: brand6,
  },
  {
    img: brand7,
  },
  {
    img: brand9,
  },

]
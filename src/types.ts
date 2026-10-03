export interface BusinessConfig {
  businessName: string;
  englishName: string;
  category: string;
  tagline: string;
  ownerName: string;
  phone: string;
  displayPhone: string;
  address: string;
  addressDetails: string;
  workingHours: string;
  instagram: string;
  telegram: string;
  whatsapp: string;
  coords: {
    lat: number;
    lng: number;
  };
  review: {
    rating: number;
    text: string;
    source: string;
  };
}

export const BUSINESS_DATA: BusinessConfig = {
  businessName: "کافه نارنج",
  englishName: "NARENJ PERSIAN CAFE & BOUTIQUE",
  category: "کافه و کافی‌شاپ تخصصی",
  tagline: "یک فضای دنج برای قهوه تخصصی، گفتگو و ثبت لحظه‌های به‌یادماندنی.",
  ownerName: "امیر حسین",
  phone: "+9809015149861",
  displayPhone: "0901 514 9861",
  address: "مشهد، بلوار سجاد، خیابان بهار",
  addressDetails: "مشهد، بلوار سجاد، خیابان بهار، نبش بهار ۴ (مجاورت پارک نیلوفر)",
  workingHours: "هر روز ۸:۰۰ تا ۲۳:۳۰",
  instagram: "narenj.cafe",
  telegram: "narenj_cafe",
  whatsapp: "9809015149861",
  coords: {
    lat: 36.3195,
    lng: 59.5482
  },
  review: {
    rating: 4.9,
    text: "«فضای فوق‌العاده دنج و بهترین چیزکیک نارنج مشهد»",
    source: "نظر ثبت شده مشتریان در گوگل‌مپ"
  }
};

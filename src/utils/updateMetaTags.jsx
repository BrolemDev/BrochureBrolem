
export function updateMetaTags(language) {
  const metaDescription = document.querySelector('meta[name="description"]');
  const metaDescriptionFacebook = document.querySelector('meta[property="og:description"]');
  const metaKeywords = document.querySelector('meta[name="keywords"]');

  const descriptionFacebook = {
    en: "At BROLEM COMPANY, we are passionately dedicated to exporting the best Andean grains, representing the best of Peruvian land in each shipment.",
    ko: "여기에 한국어 설명을 추가하세요."
  }

  const descriptions = {
    en: "At BROLEM COMPANY, we are passionately dedicated to exporting the best Andean grains, representing the best of Peruvian land in each shipment.",
    ko: "여기에 한국어 설명을 추가하세요."
  };

  const keywords = {
    en: "brolem, brochure, Andean grains, Peruvian agriculture, Export company, Peruvian exports, Agricultural products, Peruvian grains",
    ko: "브롤럼, 브로셔, 안데스 쌀, 페루 농업, 수출 회사, 페루 수출, 농산물, 페루 쌀"
  };

  if (metaDescription && metaKeywords) {
    metaDescription.setAttribute('content', descriptions[language]);
    metaKeywords.setAttribute('content', keywords[language]);
    metaDescriptionFacebook.setAttribute('content', descriptionFacebook[language]);
  }
}

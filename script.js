const desktopSize = window.matchMedia("(min-width: 1440px)");
const mobileSize = window.matchMedia("(max-width: 1439px)");

const shareButton = document.querySelector('#share-button'),
      attributeSection = document.querySelector('.article-attributes'),
      shareSection = document.querySelector('.share-section'),
      footer = document.querySelector('footer'),
      shareTip = document.querySelector('.share-tip');
      
shareButton.addEventListener('click', showSocial);

function showSocial() {
    if(mobileSize.matches){
        shareButton.firstElementChild.classList.toggle('share-icon-share');
        shareButton.classList.toggle('button-share');
        footer.classList.toggle('footer-share');
        shareSection.classList.toggle('hidden');
        attributeSection.classList.toggle('hidden');
    } else {
        shareTip.classList.toggle('share-tip-hide')
    }

}
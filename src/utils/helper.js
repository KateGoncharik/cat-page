function createPhotoElement(link, alt) {
  const photoElementWrapper = document.createElement('div');
  const photoLink = document.createElement('a');
  photoLink.setAttribute('target', '_blank');
  photoLink.setAttribute('href', link); 
  const photoElement = document.createElement('img');
  photoElement.setAttribute('src', link);
  photoElement.setAttribute('alt', alt);
  return photoElementWrapper;
  
//   <div class="gallery flex-item">
//   <a target="_blank" href="src/assets/img/2.jpg">
//     <img src="src/assets/img/2.jpg" alt="Катя, я и Хозяин" >
//   </a>
//   <p class="desc">ложкой снег мешаяя, ночь идёёт большааяя</p>
// </div>
}
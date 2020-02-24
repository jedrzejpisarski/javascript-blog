
function generateTitleLinks() {
  const articles = document.querySelectorAll('.posts .post');
  const linkList = document.querySelector('.list.titles');
  
  for(let article of articles) {
    const title = article.querySelector('.post-title').innerHTML;
    const html = '<li><a href="#' + article.id + '"><span>' + title + '</span></a></li>';
    
    linkList.innerHTML = linkList.innerHTML + html;
  }
  
  const links = document.querySelectorAll('.list.titles a');
  for(let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}

function titleClickHandler() {
  const activeLink = document.querySelector('.list.titles a.active');
  if(activeLink) activeLink.classList.remove('active');
  
  this.classList.add('active');
  
  const activeArticle = document.querySelector('.posts .post.active');
  if(activeArticle) activeArticle.classList.remove('active');
  
  const articleId = this.getAttribute('href'); //#article-1
  document.querySelector(articleId).classList.add('active')
}

generateTitleLinks();

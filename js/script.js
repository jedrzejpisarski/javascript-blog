
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

/*GENERATE TAGS*/

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

const optArticleTagsSelector('.post-tags .list')

function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll('.posts .post');

  /* START LOOP: for every article: */
  for(let article of articles) {
    const article = article.querySelector('.post-title').innerHTML;
    /* find tags wrapper */
    const optArticleTagsSelector = article.querySelectorAll('.post-tags .list .list-horizontal');    
    
    /* make html variable with empty string */
    let html = html''

    /* get tags from data-tags attribute */

    /* split tags into array */

    /* START LOOP: for each tag */

      /* generate HTML of the link */

      /* add generated code to html variable */

    /* END LOOP: for each tag */
  }
    /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}

generateTags();


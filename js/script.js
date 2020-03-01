
const templates = {
  articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML)
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.post-title';
  optArticleTagsSelector = '.post-tags .list';
  optArticleAuthorSelector = '.post-author';
  
  function generateTitleLinks(customSelector = ''){
    console.log ='customSelector';
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
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


  function generateTags(){
    
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for(let article of articles) {

    /* find tags wrapper */
    const tagsList = article.querySelector(optArticleTagsSelector);
    
    /* make html variable with empty string */
    let html = ' '

    /* get tags from data-tags attribute */
    const tags = article.getAttribute('data-tags'); //news code test

    /* split tags into array */
    const tagsArray = tags.split(' '); //['news', 'code', 'test']

    /* START LOOP: for each tag */
    for(let tag of tagsArray) {

      /* generate HTML of the link */
      const linkHTMLData = {id: articleId, title: articleTitle};
      const linkHTML = templates.articleLink(linkHTMLData);
      /* add generated code to html variable */
      html = html + linkHTML;
    }

    tagsList.innerHTML = html;

    /* END LOOP: for each tag */
  }
    /* insert HTML of all the links into the tags wrapper */


  /* END LOOP: for every article: */
  }

  generateTags();

  function tagClickHandler(event){
    console.log('Link was clicked!');

    /* prevent default action for this event */
    const activeLink = document.querySelector('.data-tags .active');
      if(activeLink) activeLink.classList.remove('.active');

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const articleId = this.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');

    /* find all tag links with class active */
    const tagLink = document.querySelectorAll('active');

    /* START LOOP: for each active tag link */
    for(let link of links) {
      tagLink.addEventListener('a.active [href^="#tag-"]' , tagClickHandler);
    
      /* remove class active */
      activeLink.classList.remove('active');

    /* END LOOP: for each active tag link */
    }

    /* find all tag links with "href" attribute equal to the "href" constant */
    const tagLink = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each found tag link */
    for(let tag of tags) {

      /* add class active */
      activeLink.classList.add('active');

    /* END LOOP: for each found tag link */
    }

    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');                               
  }

  function addClickListenersToTags(){

    /* find all links to tags */
    const links = document.querySelectorAll('.data-tags');

    /* START LOOP: for each link */
    for(let tlink of links) {

      /* add tagClickHandler as event listener for that link */
      document.getElementById(tagClickHandler).addEventListener('click', addClickListenersToTags);

    /* END LOOP: for each link */
    }
  addClickListenersToTags();




  /*GENERATE AUTHOR*/

  function generateAuthors(){
    
    /* find author */
    const articles = document.querySelectorAll(optArticleAuthorSelector);
    
    /* START LOOP: for every author: */
    for(let author of authors) {
    
      /* find tags wrapper */
      const tagsList = article.querySelector(optArticleAuthorSelector);
      
      /* make html variable with empty string */
      let html = ' '
    
      /* get tags from data-tags attribute */
      const tags = article.getAttribute('data-author'); 
    
      /* generate HTML of the link */
      const htmlLink = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
    
      /* add generated code to html variable */
      html = html + htmlLink;
      tagsList.innerHTML = html;
    
      /* END LOOP: for each tag */
    }
      /* insert HTML of all the links into the tags wrapper */
    
    
    /* END LOOP: for every article: */
    }
    
    generateAuthors();

    function authorClickHandler(event){
      console.log('Link was clicked!');
    
      /* prevent default action for this event */
      const activeLink = document.querySelector('.data-author .active');
        if(activeLink) activeLink.classList.remove('.active');
    
      /* make new constant named "clickedElement" and give it the value of "this" */
      const clickedElement = this;
    
      /* make a new constant "href" and read the attribute "href" of the clicked element */
      const articleId = this.getAttribute('href');
    
      /* make a new constant "tag" and extract tag from the "href" constant */
      const tag = href.replace('#tag-', '');
    
      /* find all tag links with class active */
      const tagLink = document.querySelectorAll('active');
    
      /* START LOOP: for each active tag link */
      for(let link of links) {
        tagLink.addEventListener('a.active [href^="#tag-"]', authorClickHandler);
      
        /* remove class active */
        activeLink.classList.remove('active');
    
      /* END LOOP: for each active tag link */
      }
    
      /* find all tag links with "href" attribute equal to the "href" constant */
      const tagLink = document.querySelectorAll('a[href="' + href + '"]');
    
      /* START LOOP: for each found tag link */
      for(let tag of tags) {
    
        /* add class active */
        activeLink.classList.add('active');
    
      /* END LOOP: for each found tag link */
      }
    
      /* execute function "generateTitleLinks" with article selector as argument */
      generateAuthors('[data-tags="' + tag + '"]');                               
    }
    
    function addClickListenersToAuthors(){
    
      /* find all links to tags */
      const links = document.querySelectorAll('.authot');
    
      /* START LOOP: for each link */
      for(let tlink of links) {
    
        /* add authorClickHandler as event listener for that link */
        document.getElementById(authorClickHandler).addEventListener('click', addClickListenersToAuthors);
    
      /* END LOOP: for each link */
      }
      addClickListenersToAuthors();

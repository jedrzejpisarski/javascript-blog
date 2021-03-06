const templates = {
  articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML),
  tagCloud: Handlebars.compile(document.querySelector('#template-tagcloud-link').innerHTML),
  authorCloud: Handlebars.compile(document.querySelector('#template-author-link').innerHTML),
}

const optArticleSelector = '.post',
optTitleSelector = '.post-title',
optTitleListSelector = '.post-title',
optArticleTagsSelector = '.post-tags .list',
optArticleAuthorSelector = '.post-author',
optTagsCloud = '.list.tags',
optAuthorsCloud = '.list.authors';
  
  function generateTitleLinks(customSelector = ''){
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    const linkList = document.querySelector('.list.titles');

    linkList.innerHTML = '';

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
        const linkHTMLData = { title: tag };
        const linkHTML = templates.articleLink(linkHTMLData);
        /* add generated code to html variable */
        html = html + linkHTML;
      
        tagsList.innerHTML = html;

    /* END LOOP: for each tag */
      }
    /* insert HTML of all the links into the tags wrapper */


  /* END LOOP: for every article: */
    }
  }
  generateTags();

  function generateTagsCloud() {
    
    const articles = document.querySelectorAll(optArticleSelector);
    const tagList = document.querySelector(optTagsCloud); //dostęp do listy, do której chcemy wepchać wygenerowane linki
    const allTags = {}; //przygotowujemy obiekt, do którego będziemy zbierać unikalne tagi

    for(let article of articles) {

        const tags = article.getAttribute('data-tags'); //news code test
        const tagsArray = tags.split(' '); //['news', 'code', 'test']

        for(let tag of tagsArray) { //przechodzimy po wszystkich tagach w danym artykule
            if(allTags[tag]) allTags[tag] = allTags[tag] + 1 //sprawdzamy czy tag jesju juz w allTags, jesli tak to zwiekszamy jego wartosc, zeby wiedziec, ze sie powtrozyl
            else allTags[tag] = 1 //a jesli tagu nie ma jeszcze w allTags, to dodajemy go jako nowy atrybut i nadajemy mu wartosc 1 (ze wystapil poki co tylko raz)
        }
    }

    let html = '';
    for(let tag in allTags) { //przechodzimy po obiekcie z unikalnymi tagami

      // ustalamy inna nazwę klasy zaleznie od tego ile razy dany tag wystapil. Czy czesto czy rzadko itd. Klasy musza byc ostylwane w css
      let className = '';
      if(allTags[tag] > 9) className = 'tag-size-big';
      else if(allTags[tag] > 8) className = 'tag-size-medium';
      else className = 'tag-size-small';

      const linkHTMLData = { tag: tag, className: className }; //generujemy link na podstawie szablonu
      const linkHTML = templates.tagCloud(linkHTMLData);
      /* add generated code to html variable */
      html = html + linkHTML; //doklejamy nowy link do zmiennej html
    }

    tagList.innerHTML = html; //sklejone linki jako jedna calosc dodajemy jako nowa zawartosc tagList
  }
  generateTagsCloud();

  function tagClickHandler(event){

    event.preventDefault();

    const clickedElement = this;

    /* remove class active from active tags */
    const activeLinks = document.querySelectorAll('.post-tags a.active');
    for(let link of activeLinks) {
      link.classList.remove('active');
    }

    /* get href from clicked tag link */
    const href = this.getAttribute('href'); //#tag-code
    const tag = href.replace('#tag-', '');

    /* add class active to links related to clicked tag */
    const tagLinks = document.querySelectorAll('.post-tags a[href="' + href + '"]');
    for(let link of tagLinks) {
      link.classList.add('active');
    }

    generateTitleLinks('[data-tags~="' + tag + '"]');                            
  }

  function addClickListenersToTags(){

    /* find all links to tags */
    const links = document.querySelectorAll('.post-tags a, .list.tags a');

    /* START LOOP: for each link */
    for(let link of links) {

      /* add tagClickHandler as event listener for that link */
      link.addEventListener('click', tagClickHandler);

    /* END LOOP: for each link */
    }
  }
  addClickListenersToTags();


  /*GENERATE AUTHOR*/

  function generateAuthors(){
    
    /* find author */
    const articles = document.querySelectorAll(optArticleSelector);
    
    for(let article of articles) {
    
      const authorWrapper = article.querySelector(optArticleAuthorSelector);
    
      const author = article.getAttribute('data-author'); 
    
      /* generate HTML of the link */
      const htmlLink = 'by <a href="#author-' + author + '">' + author + '</a>';
    
      /* add generated code to html variable */
      authorWrapper.innerHTML = htmlLink;
    }
  }
  generateAuthors();

  function generateAuthorsCloud() {
    
    const articles = document.querySelectorAll(optArticleSelector);
    const authorList = document.querySelector(optAuthorsCloud); //dostęp do listy, do której chcemy wepchać wygenerowane linki
    const allAuthors = {}; //przygotowujemy obiekt, do którego będziemy zbierać unikalne tagi
    
    for(let article of articles) {
      const author = article.getAttribute('data-author');
      if(!allAuthors[author]) allAuthors[author] = true
    }
    
    let html = '';
    
    for(let author in allAuthors) {
      const linkHTML = templates.authorCloud({ author });
      html = html + linkHTML;
    }
    
    authorList.innerHTML = html;
  } 
  generateAuthorsCloud();

  function authorClickHandler(event){

    event.preventDefault();

    const clickedElement = this;

    /* remove class active from active authors */
    const activeLinks = document.querySelectorAll('.post-author a.active');
    for(let link of activeLinks) {
      link.classList.remove('active');
    }

    /* get href from clicked tag link */
    const href = this.getAttribute('href'); //#tag-code
    const tag = href.replace('#author-', '');

    /* add class active to links related to clicked tag */
    const tagLinks = document.querySelectorAll('.post-authors a[href="' + href + '"]');
    for(let link of tagLinks) {
      link.classList.add('active');
    }

    generateTitleLinks('[data-author="' + tag + '"]');                            
  }
  
  function addClickListenersToAuthors(){

    /* find all links to tags */
    const links = document.querySelectorAll('.post-author a');

    /* START LOOP: for each link */
    for(let link of links) {

      /* add tagClickHandler as event listener for that link */
      link.addEventListener('click', authorClickHandler);

      /* END LOOP: for each link */
    }
  }
  addClickListenersToAuthors();

  

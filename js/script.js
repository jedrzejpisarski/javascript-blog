
/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/

  const titleClickHandler = function(event){
    console.log('Link was clicked!');
    
    event.preventDefault();
    
    clickedElement.classActive.add('active');

    const articleSelektor = document.clickedElement()
    
    const articleSelektor = document.getAtribute('href')
    console.log('done');
    
    const clickedElement = this;

  
    /* [DONE] remove class 'active' from all article links  */
  
    const activeLinks = document.querySelectorAll('.titles a.active');
  
    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
  
    /* [IN PROGRESS] add class 'active' to the clicked link */
  
    console.log('clickedElement:', clickedElement);
  
    /* [DONE] remove class 'active' from all articles */
  
    /* get 'href' attribute from the clicked link */
  
    /* find the correct article using the selector (value of 'href' attribute) */
  
    const targetArticle = querySelector('href');
    console.log('done');

    /* add class 'active' to the correct article */

    querySelector.classActive.add('active');
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){
  /* remove contents of titleList */

  const titleList(){
    document.querySelector(optTitleListSelector);
  }
  function clearMessages(){
    document.getElementById('messages').innerHTML = 'optTitleListSelector';
  }
  /* for each article */

  const articles = document.optArticleSelector();

  let html = '';

  for(let article of articles){
  console.log(article);

  }
  /* get the article id */

  const articleId = document.getElementById('id');

  /* find the title element */
  /* get the title from the title element */

  const articleTitle = article.querySelector(optTitleSelector).innerHTML;

  /* create HTML of the link */

  const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
  console.log('linkHTML')
    /* insert link into titleList */
  
    var tittleList = document.getElementById('linkHTML');
    tittleList.insertAdjacentHTML('afterend', 'href') 
    
    html = html + linkHTML;
  }

  titleList.innerHTML = html;

 
}

generateTitleLinks();
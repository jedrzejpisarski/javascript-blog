
/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/

  const titleClickHandler = function(event){
    console.log('Link was clicked!');
    
    event.preventDefault();
    
    clickedElement.classActive.add('active');

    const articleSelektor = document.clickedElement()
    
    getAtribute = document.articleSelektor('href')
    console.log('Link was clicked');
    
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
  
    const targetArticle = querySelector('href')
    console.log('Link was clicked');

    /* add class 'active' to the correct article */

    querySelector.classActive.add('active');
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
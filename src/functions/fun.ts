
function chengeUrl(newUrl:string) {
    const url = new URL(window.location.href);
  
  
  const currentId = url.searchParams.get("id");
  
  
  url.searchParams.set("id", `${newUrl}`); 
  
  
  window.history.pushState({}, "", url);
  
  
  window.addEventListener('popstate', () => {
  
  
    const newId = new URL(window.location.href).searchParams.get("id");
  
  });
  }


export { chengeUrl }
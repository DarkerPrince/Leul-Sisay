
  fetchBlogs = async () => {
    console.log("try to fetch the files");
     await fetch('./blogposts.json').then((response)=>response.json).then((json)=>console.log(json.toString()));
     return 0;
  };
  

  export default fetchBlogs;
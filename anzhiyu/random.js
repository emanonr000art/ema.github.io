var posts=["2025/06/30/hello-world/","2025/06/30/心理评估预约/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
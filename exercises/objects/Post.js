let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 100,
    comments: [
        {author: 'd', body: 'e'},
        {author: 'f', body: 'g'}
    ],
    isLive: true
}

function Post(title,body,author,isLive) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post1 = new Post('t', 'u', 'v');

console.log(post,post1);

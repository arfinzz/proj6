let posts=[]
let lastActivity=Date.now();
function createPost(post)
{
    return new Promise((res,rej)=>{
        posts.push(post);
        res();
    })
}

function updateLastUserActivityTime()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            lastActivity=Date.now();
            res();
        },1000)
    })
}

function deletePost(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            posts.pop();
            res();
        },1000)
    })
}

Promise.all([createPost('abc'),createPost('xyz'),createPost('xyz'),updateLastUserActivityTime()]).then(()=>{console.log(posts);
console.log(lastActivity)});

Promise.all([deletePost(),updateLastUserActivityTime()]).then(()=>{
    console.log(posts);
    console.log(lastActivity);
})
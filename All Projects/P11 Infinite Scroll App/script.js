//getting data from HTML
const filter = document.getElementById("filter_container");
const newsFeed = document.getElementById("news_feed_container");
const loader = document.getElementById("loader");

// global variable to for getting onlly 5 post every time
let limit = 15;
let page = 1;

//function to get asynchrounsluy fetchs posts from API
displayPosts();
async function fetchPosts() {
    //fetch latest 5 posts
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
    const data = await res.json();
    console.log(data)
    return data
};

//function to diplay the post.
async function displayPosts() {

    const posts = await fetchPosts();
    console.log(posts)

    //creating HTML structure for each posts
    posts.forEach(item => {

        //create div 
        const postDiv = document.createElement("div");
        postDiv.classList.add('posts');
        postDiv.innerHTML =
            ` <div class="post_ID" id="postID">${item.id}</div>
        <!-- post content -->
        <div class="post_content">
            <!-- post title -->
            <h2 class="post_title">${item.title}t</h2>
            <p class="post_body">${item.body}</p>
        </div>`
        newsFeed.appendChild(postDiv)
    })
}
// to show the processing
function showLoader() {
    console.log("reae");
    loader.classList.add('show');
    // after process is show, fetch the api
    page++;
    // console.log(page)
    displayPosts();
    loader.classList.remove('show');

}
//Event for detection scroll
window.addEventListener('scroll', e => {
    // console.log(document.documentElement);
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    console.log("scrollTop =>" + scrollTop)
    console.log("scrollHeight =>" + scrollHeight)
    console.log("clientHeight =>" + clientHeight)
    //to check if we reach bottom of page
    if (scrollTop + clientHeight >= scrollHeight - 200) {
        console.log("reached to bottom of page");
        showLoader();
    }

})



//getting data from HTML
const filter = document.getElementById("filter_container");
const newsFeed = document.getElementById("news_feed_container");
const loader = document.getElementById("loader");

// global variable to for getting onlly 5 post every time
let limit = 10;
let page = 1;

//function to get asynchrounsluy fetchs posts from API
displayPosts();
async function fetchPosts() {
    //fetch latest 5 posts
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
    const data = await res.json();
    // console.log(data)
    return data
};

//function to diplay the post.
async function displayPosts() {

    const posts = await fetchPosts();
    // console.log(posts)

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
    if (scrollTop + clientHeight >= scrollHeight - 400) {
        console.log("reached to bottom of page");
        showLoader();
    }

})

//Event Trigger for filter/search box
filter.addEventListener('input', searchPosts) 

function searchPosts(e) { 
    //getting the typed word of search box
    // console.log("input is " +e)
    const keyword=e.target.value.toLowerCase();
    //getting al the post
    const posts=document.querySelectorAll('.posts');
    // console.log(posts)
    //for each single post
    posts.forEach(item => {
        // console.log(item)
    //getting title from each single post
    // console.log(item)
    const title= item.querySelector('.post_title');
    const body= item.querySelector('.post_body');
    console.log(title.innerText)
    // console.log(body.innerText)
    //index of is used here to find the word. 
    //if word exist it will give 0 or 1
    //if not exist ,it will give -1
    if(title.innerText.indexOf(keyword) >= 0 || body.innerText.indexOf(keyword) >= 0 ){
        // if word is present , display the post simply dipslay
        item.style.display='flex';
    } else {
        item.style.display='none';

    }

    //search the key in body and title
     


    })
}

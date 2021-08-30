const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('results');
const more = document.getElementById('more');


const apiURL = 'https://api.lyrics.ovh'

// searchsongs function
// normal way of fetching 
function searchSongs(searchValue) {
    fetch(`${apiURL}/suggest/${searchValue}`)
        .then(res => res).then(data => console.log(data))
}
// using asyn 
async function searchSongs(searchValue) {
    const res = await fetch(`${apiURL}/suggest/${searchValue}`);
    const data = await res.json();
    console.log(data)
    //show the data 
    renderData(data);
}

// functin for display api data to UI
// One way for displaying results
function renderData(data) {

    let output = '';
    data.forEach(songs => {

        data.data.forEach(songs => {
            output += `
            <li>
            <span><strong>${songs.artist.name}</strong>-${song.title}</span>
            
            <button class="btn" data-artist="${songs.artist.name}
            data-songtitle="${songs.artist.name}" ">
            Get Lyrics</button>
            </li>
            `
        });


    });
    result.innerHTML = `
    <ul class="songs">
    ${output}
    </ul>
    `;
    // Second way of displaying result

    result.innerHTML = `
        <ul class="songs">
        ${data.data.map(song => `            <li>
        <span><strong>${songs.artist.name}</strong>-${song.title}</span>

        <button class="btn" data-artist="${songs.artist.name}
        data-songtitle="${songs.artist.name}" ">
        Get Lyrics</button>
        </li>`)
            .join('')

        }
        </ul> `;


    // to check wheter there is page or note
    if (data.prev || data.next) {
        more.innerHTML = `
        ${data.prev ? `<button class="btn" onclick="getMoreSongs(${data.prev})'>Prev</button>` : ''} // print prev button if data.prev is there else pring nothign
        ${data.next ? `<button class="btn" onclick="getMoreSongs(${data.next}>Next</button>` : ''} // print prev button if data.prev is there else pring nothign

        `
    } else {
        more.innerHTML = '';
    } }

    // functin to get more results if there is previous or next is  
    // here url is data.prev
    async function getMoreSongs (url) {
        const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
        const data = await res.json();
        console.log(data)
        //show the data 
        renderData(data);
    }





//event listners

form.addEventListener('submit', e => {
    e.preventDefault();
    const searchValue = search.value.trim();
    if (!searchValue) {
        alert('please type the in search box');
    } else {
        searchSongs(searchValue);

    }

})

// functio for get lyrics
async function getlyrics(artist,songTitle) {
    const res = await fetch(`${url}/v1/${artist}/${songTitle}`);
    const lyricsObject = await res.json();
    console.log(lyricsObject)
    //lyrics obejct show the data without linebreaks and comms we will replace it
    const lyrics=lyricsObject.lyrics.replace(/(\r\n|\r|\r\n)/g, '<br></br>')

    result.innerHTML=`<h2><strong>${artist}</strong>-${songTitle}</h2>
    <span>${lyrics}</span>`
    more.innerHTML= '';
    
}
    // for displaying lyrics
result.addEventListener('click', e=> {
    console.log(e);
    // click on result class that have only button element

    if (e.target.tagName ==='button') {
        console.log(13)
        // get the artist name and song
        const artist =e.target.getAttribute('data-artist');
        const songTitle =e.target.getAttribute('data-songtitle');
        getlyrics(artist,songTitle);


    }
})
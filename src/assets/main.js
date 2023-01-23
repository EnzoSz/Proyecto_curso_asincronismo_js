const fetch = require('node-fetch');

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCg1c09_sFOd-TVPCNgHw8qg&part=snippet%2Cid&order=date&maxResults=10';

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3fcdde7635msh4923562791a52e9p1b63e0jsn467fb051ee3f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

async function fetchData (urlApi) {
    const response = await fetch(urlApi,options);
    const data = await response.json();
}
(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.item.map(video => `
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h1-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${videos.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-beween">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0,4).join('')}
        
        `;
    } catch (error) {
        
    }
}) ();
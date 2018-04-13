var apiKey =	'fda49c8cb3942dab1d64780f08ed71fe' 

//Get posts from search tag
export const fetchPosts = ({searchWord, page=1, perPage=15}) => {
    let url = searchWord ? 
    `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1&text=${searchWord}` :
	`https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.getRecent&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`;
	
	return fetch(url)
	  .then(data => data.json())
	  .then(res => res.photos.photo)
	
}

// Get comments for photo ID
export const fetchInfo = (photoID) => {
    let url = `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.getInfo&format=json&nojsoncallback=1&photo_id=${photoID}`;
	return fetch(url)
	  .then(data => data.json())
	  .then(res => res)
}

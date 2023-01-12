export const getGifs = async(category)=>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=LmlKp57IxI30NccW8jfAqNZxICo2lc2c&q=${category}&limit=${5}`
    const response = await fetch(url);
    const {data} = await response.json()
    const gifs = data.map(image => 
        (
            {
            id: image.id,
            title: image.title,
            url: image.images.downsized_medium.url,
            }
        )
    )
    console.log(gifs)
    return gifs
}
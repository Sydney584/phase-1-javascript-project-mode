// getting data

const getLyrics = () => {
    return fetch('https://api.lyrics.ovh/v1/artist/title')
        .then(res => res.json())
}

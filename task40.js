function make_album(artist_name, album_title, track_count) {
    if (track_count === void 0) { track_count = 0; }
    var obj;
    if (track_count) {
        obj = { artist_name: artist_name, album_title: album_title, track_count: track_count };
        console.log(artist_name + " , " + album_title + " , " + track_count);
    }
    else {
        obj = { artist_name: artist_name, album_title: album_title };
        console.log(artist_name + " , " + album_title);
    }
    return obj;
}
make_album("john", "jawani");
make_album("shamshad", "tanhai");
make_album("iqbal", "zindagi", 4);

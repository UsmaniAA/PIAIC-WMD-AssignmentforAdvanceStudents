function make_album(artist_name: string, album_title: string, track_count: number=0 )
{
let obj;  // created a sub-fucntion which as one condition of original case only 2 variable, and updated condition with 3 cariables. 

    if (track_count)
    {
    obj={ artist_name, album_title, track_count}
   console.log( artist_name + " , " + album_title + " , " + track_count);}

   else {
   obj = { artist_name, album_title}
    console.log (artist_name + " , " + album_title);}


return obj
   }

make_album("john", "jawani");
make_album("shamshad" , "tanhai");
make_album ("iqbal", "zindagi", 4);

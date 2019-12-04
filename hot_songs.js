var fs = require('fs');

async function hotSongs() {
  var data = fs.readFileSync('data.txt', 'utf-8');
  var json_response = JSON.parse(data);
  /* Check new songs and compute algorithm that determines the position that it will be
  will need new array to store data with and then store it in a file and then read from it later
  1st formula, if(last week position > thisweek's position) counter ++

  */
  let { songs } = json_response;

  songs = await get_songs(songs)

  songs = await sort_songs(songs);

  return songs
}

function get_songs(songs) {
  return songs.map((entry) => {
    var position  = entry.position;
    var weeks     = position['weeksOnChart'];
    var songTitle = entry.title;
    var artist    = entry.artist;
    var cover     = entry.cover
    let counter   = 0;

    //check how much time song has been on chart and add to an array if meets criteria
    if (weeks < 3) {
      var thisWeek = entry.rank;
      var lastWeek = position["positionLastWeek"];
      var peakPosition = position["peakPosition"];

      counter = (100 - thisWeek + 1);

      if(lastWeek > thisWeek) {
        counter = counter + ( lastWeek - thisWeek);
      } else if (thisWeek === peakPosition) {
        counter = counter + (100 - thisWeek);
      }

      return([songTitle,artist,counter,cover]);
    }
  })
}

function sort_songs(list) {
  console.log("I am list", list)

  return list.sort(function(a,b){
    if(a[2] < b[2]) return 1;
    if(a[2] > b[2]) return -1;

    return 0;
  });
}

hot_songs = hotSongs();
console.log("=== hot songs ===", hot_songs);
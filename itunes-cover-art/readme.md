# iTunes Cover Art Collector

This is a simple CLI search script.  You provide the name of the media you're looking for and it will open the hi-res version of the cover art in a browser. 

This package is private and will not be published in the npm directory.

## Install

From within the root of the project directory.

```
$ npm install -g
```

## Perform a search

```
$ cover-art Burnt
Searching for: burnt
Opening 'burnt' in browser.
```

##  Perform a search with verbose logging

```
$ cover-art -v Burnt
Searching for: Burnt
Searching iTunes: https://itunes.apple.com/search?limit=1&term=Burnt
iTunes Search API results returned.
{ resultCount: 1,
  results:
   [ { wrapperType: 'track',
       kind: 'feature-movie',
       trackId: 1052393524,
       artistName: 'John Wells',
       trackName: 'Burnt',
       trackCensoredName: 'Burnt',
       trackViewUrl: 'https://itunes.apple.com/us/movie/burnt/id1052393524?uo=4',
       previewUrl: 'http://a1927.phobos.apple.com/us/r1000/149/Video30/v4/de/00/c8/de00c83c-110f-707a-3594-3ca3c23cafce/mzvf_6971429072007127109.640x354.h264lc.D2.p.m4v',
       artworkUrl30: 'http://is1.mzstatic.com/image/thumb/Video69/v4/b0/1c/fe/b01cfee2-3227-f785-4f26-0d3ba63b2256/source/30x30bb.jpg',
       artworkUrl60: 'http://is1.mzstatic.com/image/thumb/Video69/v4/b0/1c/fe/b01cfee2-3227-f785-4f26-0d3ba63b2256/source/60x60bb.jpg',
       artworkUrl100: 'http://is1.mzstatic.com/image/thumb/Video69/v4/b0/1c/fe/b01cfee2-3227-f785-4f26-0d3ba63b2256/source/100x100bb.jpg',
       collectionPrice: 9.99,
       trackPrice: 9.99,
       collectionHdPrice: 12.99,
       trackHdPrice: 12.99,
       releaseDate: '2015-10-30T07:00:00Z',
       collectionExplicitness: 'notExplicit',
       trackExplicitness: 'notExplicit',
       trackTimeMillis: 6059037,
       country: 'USA',
       currency: 'USD',
       primaryGenreName: 'Drama',
       contentAdvisoryRating: 'R',
       shortDescription: 'Oscar®-nominee Bradley Cooper stars as renowned rockstar chef Adam Jones, the owner of a two-star',
       longDescription: 'Oscar®-nominee Bradley Cooper stars as renowned rockstar chef Adam Jones, the owner of a two-star Michelin restaurant who has a bad attitude and even worse habits to match. When his arrogance destroys his successful career, Jones uncovers a new resolve and is now  determined to rebuild his life and achieve one of the most elusive culinary distinctions: a third Michelin Star. To shut down his dissenters Jones assembles a new crew, including the beautiful Helene (Sienna Miller), to help him battle the odds and launch a new top restaurant. Oscar®-winner Emma Thompson, Oscar®-nominee Uma Thurman, Omar Sy, Daniel Brühl, Matthew Rhys, and Alicia Vikander costar in this remarkably funny and emotional comedy about the love of food, the love between two people, and the power of second chances.' } ] }
High DPI Image Url: http://a1.mzstatic.com/us/r30/Video69/v4/b0/1c/fe/b01cfee2-3227-f785-4f26-0d3ba63b2256/poster454x454.jpeg
Opening 'Burnt' in browser.
```

## See options

```
$ cover-art -h

  Usage: cover-art [options] <search term>

  Options:

    -h, --help             output usage information
    -V, --version          output the version number
    -c, --country [value]  The two-letter country code for the store you want to search. The default is US.
    -m, --media [value]    The media type you want to search for. For example: movie. The default is all.
    -v, --verbose          Enable verbose logging.
```

## Developer resources

The iTunes Search API: [https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/]

Dependencies:

* "chalk": "^1.1.3",
* "commander": "^2.9.0",
* "crawler": "^0.4.3",
* "open": "0.0.5",
* "request": "^2.75.0"
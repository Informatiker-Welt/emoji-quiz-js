const movies = [
  {
     title: 'Titanic',
     emoji: ['๐ง', '๐ฅ๏ธ', '๐'],
   },
   {
     title: 'Fight Club',
     emoji: ['๐ค', '๐', '๐ค', '๐งผ'],
   },
   {
     title: 'Life of Pi',
     emoji: ['๐ฃโโ๏ธ', '๐ฏ', '๐ณ๐พ'],
   },
   {
     title: 'Forrest Gump',
     emoji: ['๐ฅ', '๐โโ๏ธ', '๐ค', '๐ฒ'],
   },
   {
     title: 'Harry Potter',
     emoji: ['โก', '๐ฆ๐ป', 'โ๏ธ', '๐'],
   },
   {
     title: 'ET',
     emoji: ['๐ฝ', '๐', '๐ฒ'],
   },
   {
     title: 'Matrix',
     emoji: ['๐', '๐ด๏ธ', '๐ซ', '๐ฅ๏ธ'],
   },
   {
     title: 'Star Wars',
     emoji: ['โญ', '๐ซ', '๐'],
   },
   {
     title: 'Mad Max',
     emoji: ['๐๏ธ', '๐', '๐ฐ', '๐ธ', '๐ซ'],
   },
   {
     title: 'Karate Kid',
     emoji: ['๐ฅ', '๐', '๐ฆ'],
   },
   {
     title: 'Findet Nemo',
     emoji: ['๐', '๐ '],
   },
   {
     title: 'Wolf of Wall Street',
     emoji: ['๐บ', '๐ฆ', '๐ธ', '๐'],
   },
   {
     title: 'Der Herr der Ringe',
     emoji: ['๐ฆ๐ป', '๐', '๐', '๐งโโ๏ธ'],
   },
   {
     title: 'Blood Diamond',
     emoji: ['๐ฉธ', '๐', '๐ซ'],
   },
   {
     title: "King's Speech",
     emoji: ['๐', '๐ฌ'],
   },
   {
     title: 'Uhrwerk Orange',
     emoji: ['๐ฐ๏ธ', '๐ ', 'โ๏ธ'],
   },
   {
     title: 'Kill Bill',
     emoji: ['๐ฅ', '๐ฐ', '๐ช', '๐'],
   },
   {
     title: 'Chicken Run',
     emoji: ['๐', '๐', '๐โโ๏ธ'],
   },
   {
     title: 'Planet der Affen',
     emoji: ['๐ฆ', '๐', '๐ฆง'],
   },
   {
     title: 'Alice im Wunderland',
     emoji: ['๐', '๐ณ๏ธ', '๐ง', 'โ ๏ธ', 'โฃ๏ธ'],
   },
   {
     title: 'Oben',
     emoji: ['๐ ', '๐', '๐ด๐ป', '๐ถ'],
   },
   {
     title: 'Sherlock Holmes',
     emoji: ['๐ต๐ผโโ๏ธ', '๐ซ', '๐', '๐ฉ', '๐ฃ'],
   },
   {
     title: 'Wie ein wilder Stier',
     emoji: ['๐ก', '๐'],
   },
   {
     title: 'Blade Runner',
     emoji: ['๐ก๏ธ', '๐โโ๏ธ'],
   },
   {
     title: 'Slumdog Millionรคr',
     emoji: ['๐ณ๐พ', '๐บ', '๐ต'],
   },
   {
     title: 'Kung Fu Panda',
     emoji: ['๐', '๐ผ', '๐ฅ'],
   },
   {
     title: 'Black Panther',
     emoji: ['๐', 'โซ', ],
   },
   {
     title: 'Whiplash',
     emoji: ['๐ฅ', '๐ค'],
   },
   {
     title: 'Der weiรe Hai',
     emoji: ['๐ฃโโ๏ธ', '๐ฆ', '๐'],
   },
   {
     title: 'Breaking Bad',
     emoji: ['๐จโ๐ฌ', '๐ด', '๐ฅฝ', '๐ซ', '๐ฐ'],
   },
   {
     title: 'Walking Dead',
     emoji: ['๐งโโ๏ธ', '๐ถ', '๐งโโ๏ธ', '๐ช'],
   },
   {
     title: 'Game of Thrones',
     emoji: ['โ๏ธ', '๐', '๐', '๐บ', 'โ๏ธ'],
   },
   {
     title: 'Orange is New Black',
     emoji: ['๐ ', '๐', 'โซ'],
   },
   {
     title: 'Tiger King',
     emoji: ['๐', '๐'],
   },
   {
     title: 'Der Kรถnig der Lรถwen',
     emoji: ['๐ฆ', '๐'],
   },
   {
     title: 'Stranger Things',
     emoji: ['๐ฝ', '๐ฒ', '1๏ธโฃ', '1๏ธโฃ'],
   },
   {
     title: 'Seven',
     emoji: ['๐ฆ', '๐', 'โ', '7๏ธโฃ'],
   },
   {
     title: 'City of God',
     emoji: ['๐', '๐', '๐ง๐ท'],
   },
   {
     title: 'Spider Man',
     emoji: ['๐ท๏ธ', '๐', '๐ธ๏ธ'],
   },
   {
     title: 'Batman',
     emoji: ['๐ฆ', '๐คต', '๐ฒ', '๐'],
   },
   {
     title: 'Joker',
     emoji: ['๐'],
   },
   {
     title: 'Catch me if you can',
     emoji: ['๐จโโ๏ธ', '๐คฅ', 'โ๏ธ', '๐โโ๏ธ', '๐ต๏ธโโ๏ธ'],
   },
   {
     title: 'Superman',
     emoji: ['๐ฆธโโ๏ธ', '๐จ', ],
   },
   {
     title: 'Men in Black',
     emoji: ['๐จ๐พ', 'โก', 'โซ'],
   },
   {
     title: 'Scrubs',
     emoji: ['๐จโโ๏ธ', '๐ฅ','๐ฉบ',],
   },
   {
     title: 'Taxi Driver',
     emoji: ['๐', '๐ซ', ''],
   },
   {
     title: 'Office',
     emoji: ['๐ข', '๐จโ๐ผ', '๐๏ธ', '๐คฃ', '๐คฆโโ๏ธ'],
   },
   {
     title: 'Jurassic Park',
     emoji: ['๐ฆ', '๐ฆ', '๐จโ๐ฌ', '๐', '๐โโ๏ธ'],
   },
   {
     title: '12 years slave',
     emoji: ['1๏ธโฃ', '2๏ธโฃ', 'โ๏ธ', '๐๐ฟโโ๏ธ', , '๐ป'],
   },
   {
     title: 'Rocky',
     emoji: ['๐ฅ', '๐ช', '๐คผ'],
   },
   {
     title: 'Fluch der Karibik',
     emoji: ['๐ดโโ ', '๐ค', '๐ฆ'],
   },
 ];
 
 export { movies };
 
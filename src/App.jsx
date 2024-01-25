
import './App.css'
import ImgIcon1 from './ImgIcon1';
import Mall from './Mall';
import Images from './assets/Images';
import Button from './Button';
import Likes from './Likes';
import NewTweet from './NewTweet';
function App() {

  const Myarray = [

    {

      "author_avatar": "https://picsum.photos/200?random=1604299903000",

      "source": "Twitter",

      "date": 1604299903000,

      "favorites": "92746",

      "id": "1323155810910982145",

      "isVerified": true,

      "replies": "24785",

      "retweets": "16287",

      "text": "...As I said at the debate – “Will you remember that Texas?Pennsylvania? Ohio? New Mexico?” I will always protect American Energy and American Jobs! Get out and VOTE #MAGA!"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1609942590000",

      "source": "Apple",

      "date": 1609942590000,

      "favorites": "396603",

      "id": "1346822958006886400",

      "isVerified": false,

      "replies": "896",

      "retweets": "54694",

      "text": "Even Mexico uses Voter I.D.",

      "image": "https://picsum.photos/1024/200?random=1346822958006886400"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1604231375000",

      "source": "Twitter for iPhone",

      "date": 1604231375000,

      "favorites": "124689",

      "id": "1322868385361891328",

      "isVerified": true,

      "replies": "8",

      "retweets": "22972",

      "text": "When I originally became your all time favorite President, the Great State of Michigan was hemorrhaging car companies and jobs. Plants were closing and moving to Mexico, and other places. No new plants for decades. I stopped the moves, &amp; now many plants are and have been built...",

      "image": "https://picsum.photos/200/800?random=1322868385361891328"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1604084613000",

      "source": "CNN",

      "date": 1604084613000,

      "favorites": "44842",

      "id": "1322252819299135488",

      "isVerified": false,

      "replies": "1024",

      "retweets": "9563",

      "text": "...a cheerleader for NAFTA – sending your auto Jobs to Mexico. He voted for China’s entry into the World Trade Organization – gutting your industries to finance China’s rise. HALF of all Michigan auto manufacturing jobs were ELIMINATED after the Biden-Backed NAFTA and China...",

      "image": "https://picsum.photos/200?random=1322252819299135488"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1603037689000",

      "source": "Trump D.",

      "date": 1603037689000,

      "favorites": 62414,

      "id": "1317861704819118080",

      "isVerified": false,

      "replies": "258",

      "retweets": 16811,

      "text": "Not my Wall, which will soon be finished (and Mexico will pay for the Wall!). Totally unrelated, but I think Steve will be just fine. By the way, is this the same job hopping Tim O’Brien that headed Mini Mike Bloomberg’s humiliating 2 Billion Dollar Presidential run? Debate prep! https://t.co/cQfEtszRrB"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1602377246000",

      "source": "Lauraine L.",

      "date": 1602377246000,

      "favorites": 34952,

      "id": "1315091604496158720",

      "isVerified": true,

      "replies": "85",

      "retweets": 10008,

      "text": "Yvette Herrell (@Yvette4Congress) is a proven fighter for New Mexico! She strongly supports our Brave Law Enforcement, Life and the Second Amendment. Strong on the Border and Trade, Yvette has my Complete and Total Endorsement! #NM02 https://t.co/77hjYfVWAB",

      "image": "https://picsum.photos/200?random=1315091604496158720"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1601996447000",

      "source": "Mexico City",

      "date": 1601996447000,

      "favorites": 58201,

      "id": "1313494418314457090",

      "isVerified": true,

      "replies": "0",

      "retweets": 14359,

      "text": "NEW MEXICO! Today is the last day you can register to vote online or via mail. Make sure your vote counts! \nhttps://t.co/WwzdPhDkAZ"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1554075712000",

      "source": "New York Times",

      "date": 1554075712000,

      "favorites": 58201,

      "id": "1313494418314457090",

      "isVerified": true,

      "replies": "0",

      "retweets": 14359,

      "text": "....However, if for any reason Mexico stops apprehending and bringing the illegals back to where they came from, the U.S. will be forced to Tariff at 25% all cars made in Mexico and shipped over the Border to us. If that doesn’t work, which it will, I will close the Border......."

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1604231375000",

      "source": "Twitter for iPhone",

      "date": 1601996447000,

      "favorites": 58201,

      "id": "1313494418314457090",

      "isVerified": true,

      "replies": "0",

      "retweets": 14359,

      "text": "A 9th Circuit Judge just ruled that Mexico is too dangerous for migrants. So unfair to the U.S. OUT OF CONTROL! https://t.co/XF8o3jMDle"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1548956601000",

      "source": "Samsung",

      "date": 1601996447000,

      "favorites": 58201,

      "id": "1313494418314457090",

      "isVerified": true,

      "replies": "0",

      "retweets": 14359,

      "text": "A 9th Circuit Judge just ruled that Mexico is too dangerous for migrants. So unfair to the U.S. OUT OF CONTROL! https://t.co/XF8o3jMDle",

      "image": "https://picsum.photos/2048/1024?random=1313494418314457090"

    }

  ]

  return (
    <div className=' w-screen flex h-screen text-white'>
      <div className='w-1/3 text-x2'>
        <div className='w-1/2 ml-24'>
          <ImgIcon1 src="src/assets/Twitter.svg" />
          <div className=''>
            <ImgIcon1 name="Home" src="src/assets/Home-Fill.svg" />
            <ImgIcon1 name="Explore" src="src/assets/Explore.svg" />
            <ImgIcon1 name="Notifications" src="src/assets/Notifications.svg" />
            <ImgIcon1 name="Messages" src="src/assets/Messages.svg" />
            <ImgIcon1 name="Bookmarks" src="src/assets/Bookmarks.svg" />
            <ImgIcon1 name="Lists" src="src/assets/Lists.svg" />
            <ImgIcon1 name="Profil" src="src/assets/Profile.svg" />
            <ImgIcon1 name="More" src="src/assets/More.svg" />
            <button className='bg-sky-600 ml-40 mt-5  rounded-full'>Tweet</button>
          </div>
        </div>
      </div>
      <div className='w-1/3 border-indigo-600...'>
        <div className='flex justify-between header border-y border-x'>
          <h2>HOME</h2>
          <img src="src/assets/Timeline-Prop.svg" alt="media" />
        </div>
        <div className='Tweet-editor flex border-x border-b'>
          <Images src="src/assets/Profile.svg" />
          <div className='Tweet-editor-form'>
            <textarea className='bg-black' placeholder="Wats's happeninge?" cols="55" rows="1"></textarea>
            <div className='flex justify-between'>
              <div className='flex'>
                <Images src="src/assets/Gif.svg" alt="" />
                <Images src="src/assets/Poll.svg" alt="" />
                <Images c="src/assets/Emoji.svg" alt="" />
                <Images src="src/assets/Schedule.svg" alt="" />
              </div>
              <button className='bg-sky-600  rounded-full'>Tweet</button>
            </div>


          </div>
        </div>
        {
          Myarray.map((tab) => <NewTweet MyTweet={tab} />)
        }
        <div>

        </div>
      </div>
    </div>
  );
}
export default App

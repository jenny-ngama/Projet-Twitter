import React from 'react'
import Likes from './Likes'

export default function NewTweet({MyTweet} ) {
  const array =   {

        "author_avatar": "https://picsum.photos/200?random=1604299903000",

        "source": "Twitter",

        "date": 1604299903000,

        "favorites": "92746",

        "id": "1323155810910982145",

        "isVerified": true,

        "replies": "24785",

        "retweets": "16287",

        "text": "...As I said at the debate – “Will you remember that Texas?Pennsylvania? Ohio? New Mexico?” I will always protect American Energy and American Jobs! Get out and VOTE #MAGA!"

    }
  return (
    <div>
        <div className='border'>
          <div className=' flex p-5 gap-1'>
            <img src={MyTweet.author_avatar} alt="photo" className='w-10 h-10 rounded-full p-1'/>
            <div className=''>
              <div className='flex'>
                <h1>{MyTweet.source} </h1>
                <img src="" alt="" />
              </div>
              <p>{MyTweet.text}</p>
          
               <img src={MyTweet.image} alt=""  className='w-full h-48 rounded-3xl'/>
            </div>
          </div>
          <div className='Tweet'>
            <div className='likes flex justify-between ml-20 p-5 gap-3'>
              <Likes monImageAafficher="src/assets/Reply.svg" monText={MyTweet.replies} className='flex'/>
              <Likes monImageAafficher="src/assets/Retweet.svg" monText={MyTweet.retweets} className='flex'/>
              <Likes monImageAafficher="src/assets/React.svg" monText={MyTweet.favorites} className='flex'/>
              <Likes monImageAafficher="src/assets/Share.svg" className='flex'/>
            </div>
          </div>
        </div>
    
    </div>
  )
}

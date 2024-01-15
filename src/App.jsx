
import './App.css'
import ImgIcon1 from './ImgIcon1';
import Images from './assets/Images';
function App() {
  return (
    <div className='bg-black w-screen flex h-screen text-white'>
      <div className='w-1/3'>
        <ImgIcon1 src="src/assets/Twitter.svg" />
        <ImgIcon1 name="Home" src="src/assets/Home-Fill.svg" />
        <ImgIcon1 name="Explore" src="src/assets/Explore.svg" />
        <ImgIcon1 name="Notifications" src="src/assets/Notifications.svg" />
        <ImgIcon1 name="Messages" src="src/assets/Messages.svg" />
        <ImgIcon1 name="Bookmarks" src="src/assets/Bookmarks.svg" />
        <ImgIcon1 name="Lists" src="src/assets/Lists.svg" />
        <ImgIcon1 name="Profil" src="src/assets/Profile.svg" />
        <ImgIcon1 name="More" src="src/assets/More.svg" />
      </div>
      <div className='w-1/3'>
        <div className=''>
          <div className='flex justify-between'>
            <h2>HOME</h2>
            <img src="src/assets/Media.svg" alt="media" />
          </div>
          <div>
            <div>
              <Images src="src/assets/Profile.svg" />

            </div>
            <div>
              <Images src="src/assets/Gif.svg" alt="" />
              <Images src="src/assets/Poll.svg" alt="" />
              <Images src="src/assets/Emoji.svg" alt="" />
              <Images src="src/assets/Schedule.svg" alt="" />
            </div>
          </div>
        </div>
        <div>
          <Images src="" alt="" />
        </div>
      </div>
      <div className='w-1/3'>

      </div>
    </div>
  );
}
export default App

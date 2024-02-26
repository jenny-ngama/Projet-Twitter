import Button from './Button'
import ImgIcon1 from './ImgIcon1'


function Sidebar() {
    return (
        <div className='flex w-1/3 text-x2 grid cols-span-4 h-full'>
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
                    <Button titre='Tweet' classes=" {`bg-sky-400 rounded-full px-4 py-2 flex ml-40 mt-20 ${classes}`}>{titre}</button>"/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
// flex w-24 h-full
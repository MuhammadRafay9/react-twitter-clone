import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import Post from "./Post";

function App(props) {
  return (
    <div className="App">
      <div className='Sidebardiv'>
          <Sidebar 
        name="Muhammad Rafay"
        userName="@example"
        profileImg="https://pbs.twimg.com/profile_images/1454021002757820423/_FmvUluo_400x400.jpg"
        postConent="Have you claimed your free POAP NFT yet while watching the #Binance live?

    Well, all NFTs are fully claimed now for Day 1 but we have good news for you! We still have more POAP to give tomorrow."
        postImg="https://pbs.twimg.com/media/FcMkT4BacAEbScw?format=jpg&name=4096x4096"
        />
     </div>

      <div>
      <Post/>

      </div>
      <div> 
              <Content 
            name="Muhammad Rafay"
            userName="@example"
            profileImg="https://pbs.twimg.com/profile_images/1454021002757820423/_FmvUluo_400x400.jpg"
            postConent="Have you claimed your free POAP NFT yet while watching the #Binance live?

        Well, all NFTs are fully claimed now for Day 1 but we have good news for you! We still have more POAP to give tomorrow."
            postImg="https://pbs.twimg.com/media/FcMkT4BacAEbScw?format=jpg&name=4096x4096"
            />

        <Content 
            name="Muhammad Rafay"
            userName="@example"
            profileImg="https://pbs.twimg.com/profile_images/1454021002757820423/_FmvUluo_400x400.jpg"
            postConent="Have you claimed your free POAP NFT yet while watching the #Binance live?

        Well, all NFTs are fully claimed now for Day 1 but we have good news for you! We still have more POAP to give tomorrow."
            postImg="https://pbs.twimg.com/media/FcMkT4BacAEbScw?format=jpg&name=4096x4096"
            />

        <Content 
            name="Muhammad Rafay"
            userName="@example"
            profileImg="https://pbs.twimg.com/profile_images/1454021002757820423/_FmvUluo_400x400.jpg"
            postConent="Have you claimed your free POAP NFT yet while watching the #Binance live?

        Well, all NFTs are fully claimed now for Day 1 but we have good news for you! We still have more POAP to give tomorrow."
            postImg="https://pbs.twimg.com/media/FcMkT4BacAEbScw?format=jpg&name=4096x4096"
            />

        <Content 
            name="Muhammad Rafay"
            userName="@example"
            profileImg="https://pbs.twimg.com/profile_images/1454021002757820423/_FmvUluo_400x400.jpg"
            postConent="Have you claimed your free POAP NFT yet while watching the #Binance live?

        Well, all NFTs are fully claimed now for Day 1 but we have good news for you! We still have more POAP to give tomorrow."
            postImg="https://pbs.twimg.com/media/FcMkT4BacAEbScw?format=jpg&name=4096x4096"
            />

        <Content 
            name="Muhammad Rafay"
            userName="@example"
            profileImg="https://pbs.twimg.com/profile_images/1454021002757820423/_FmvUluo_400x400.jpg"
            postConent="Have you claimed your free POAP NFT yet while watching the #Binance live?

        Well, all NFTs are fully claimed now for Day 1 but we have good news for you! We still have more POAP to give tomorrow."
            postImg="https://pbs.twimg.com/media/FcMkT4BacAEbScw?format=jpg&name=4096x4096"
            />
      </div>
      </div>
  );
}

export default App;

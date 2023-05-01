import {
  Header,
  PlaylistMadeForUser,
  RecommendedAlbums,
  SideBar,
  FooterControls,
} from './components/index'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 ">
        <SideBar />
        <main className="flex-1 p-6 ">
          <Header />

          <RecommendedAlbums />

          <PlaylistMadeForUser />
        </main>
      </div>

      <FooterControls />
    </div>
  )
}

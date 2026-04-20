import { SpotlightAnime } from "../../../../shared/types/anime"

const SpotlightItems = ({anime}: {anime: SpotlightAnime})=>{
  const {aired, alternativeTitle, duration, episodes, id, poster, quality, rank, synopsis, title, type} = anime
  
  return (
    <div></div>
  )
}

const Spotlight = ({}: {anime: SpotlightAnime[]}) => {
  return (
    <div>Spotlight</div>
  )
}

export default Spotlight
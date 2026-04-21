import Image from "next/image"
import { SpotlightAnime } from "../../../../shared/types/anime"
import { useRouter } from "next/navigation"

const SpotlightItems = ({anime}: {anime: SpotlightAnime})=>{
  const {aired, alternativeTitle, duration, episodes, id, poster, synopsis, title} = anime

  const router = useRouter()
  
  return (
    <div>
      <Image src={poster || ""} alt={title || ""} />
      <div>
        <p>{title || alternativeTitle || ""}-EP{" "}{episodes.eps || episodes.sub || episodes.dub || "N/A"}</p>
        <p>{duration || ""}</p>
        <p>{synopsis || ""}</p>
      </div>
      <div>
        <p>{title || alternativeTitle || ""}</p>
        <p>{aired || ""}</p>
      </div>
    </div>
  )
}

const Spotlight = ({}: {anime: SpotlightAnime[]}) => {
  return (
    <div>Spotlight</div>
  )
}

export default Spotlight
import Image from "next/image";
import styles from '../../styles/Poster.module.css'
const IMG_SRC = "https://image.tmdb.org/t/p/original";

export default function PosterImage({path, title}) {
    return (
        <Image
        src={`${IMG_SRC}${path}`}
        alt={title}
        height={200}
        width={100}
        className={styles.poster}
      />
    )
}
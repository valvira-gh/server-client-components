import styles from './page.module.css';
import Image from 'next/image';

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const DataFetching: React.FC = async () => {
  const data = await getData();

  const oneAlbum = await data.filter((item) => item.albumId === 1);
  console.log(oneAlbum);

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Data Fetching</h3>
      {oneAlbum.map((photo) => (
        <div key={photo.id} className={styles.photo}>
          <h5 className={styles.photoTitle}>{photo.title}</h5>
          <Image
            src={photo.thumbnailUrl}
            alt={photo.title}
            width={150}
            height={150}
          />
        </div>
      ))}
    </section>
  );
};

export default DataFetching;

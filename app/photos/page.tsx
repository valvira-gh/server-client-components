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

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Photos</h3>
      {data.map(
        (
          photo: [
            {
              albumId: number;
              id: number;
              title: string;
              url: string;
              thumbnailUrl: string;
            }
          ]
        ) => (
          <div key={photo.id} className={styles.photo}>
            <Image
              src={photo.thumbnailUrl}
              alt={photo.title}
              width={100}
              height={100}
            />
            <p>{photo.title}</p>
          </div>
        )
      )}
    </section>
  );
};

export default DataFetching;

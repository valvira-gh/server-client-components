import styles from '@/app/styles/search-input.module.css';
import { useState } from 'react';

const SearchInput = () => {
  const search = async (formData: FormData) => {
    'use server';
    let query = await formData.get('query');
    console.log(`Searching for ${query}`);
  };

  return (
    <form action={search} className={styles.searchForm}>
      <input
        name="query"
        type="text"
        placeholder="Search"
        className={styles.searchInput}
      />
      <button className={styles.submitBtn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchInput;

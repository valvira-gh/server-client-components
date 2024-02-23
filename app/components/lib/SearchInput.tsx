import styles from '@/app/styles/search-input.module.css';
import { useState, useRef, useOptimistic } from 'react';
import { search } from '@/app/components/lib/actions';

const SearchInput = ({ queries, sendQueries }) => {
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

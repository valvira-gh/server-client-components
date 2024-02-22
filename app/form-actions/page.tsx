import React from 'react';
import styles from './form-actions.module.css';
import SearchInput from '../components/lib/SearchInput';

const FormActions = () => {
  return (
    <section className={styles.formActions}>
      <h3 className={styles.formActionsTitle}>Form Actions</h3>
      <SearchInput />
    </section>
  );
};

export default FormActions;

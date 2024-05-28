import styles from "./PageTitle.module.css";

type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return <h1 className={styles.pageHeading}>{title}</h1>;
};

export default PageTitle;

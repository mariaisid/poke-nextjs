import { useRouter } from "next/router"
import styles from "./Pagination.module.scss"
import PaginationButton from "./PaginationButton"

const Pagination = ({limit, total}) => {
  const router = useRouter();
  let { page } = router.query;
  page = page || 1;
  const pages = Math.ceil(total / limit)
  return (
    <div className={styles.pagination}>
      <PaginationButton page={1} disabled={parseInt(page) === 1} text={"<<"} />
      <PaginationButton page={parseInt(page) - 1} disabled={parseInt(page) === 1} text={"<"} />
      <PaginationButton page={parseInt(page) + 1} disabled={parseInt(page) === pages} text={">"} />
      <PaginationButton page={pages} disabled={parseInt(page) === pages} text={">>"} />
    </div>
  )
}

export default Pagination
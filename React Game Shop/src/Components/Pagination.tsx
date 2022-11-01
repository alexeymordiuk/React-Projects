import React from "react"
import ReactPaginate from 'react-paginate';
import styles from "../scss/shipspage/ShipsOrder.module.scss";

type PaginationProps = {
	onChangePage: (page: number) => void;
	currentPage: number;
};

const Pagination: React.FC<PaginationProps> = ({currentPage, onChangePage}) => {
  return (
    <ReactPaginate
    className={styles.links}
			breakLabel="..."
			nextLabel=">"
			onPageChange={(event) => onChangePage(event.selected + 1)}
			pageRangeDisplayed={2}
			pageCount={5}
			forcePage={currentPage - 1}
			previousLabel="<"
		/>
  )
}

export default Pagination
import React from "react";
import ByShip from "../Components/ByShip";
import Header from "../Components/Header";
import styles from "../scss/shipspage/ShipsOrder.module.scss";
import bg from "../img/shopitem/bg.png";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store";
import {
  fetchShips,
  SearchShipsParams,
  selectShipsData,
} from "../redux/slices/ShipsSlice";
import Pagination from "../Components/Pagination";
import {
  selectFilter,
  setCurrentPage,
  setFilters,
  setCategoryId,
} from "../redux/slices/FilterSlice";
import Sort from "../Components/Sort";
import Skeleton from "../Components/Skeleton";

const OrderShips: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectShipsData);
  const ship = items.map((obj: any) => <ByShip key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const { currentPage, categoryId } = useSelector(selectFilter);
  const isMounted = React.useRef(false);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
    window.scrollTo(0, 0);
  };

  const onChangeCategory = (idx: number) => {
    dispatch(setCategoryId(idx));
    window.scrollTo(0, 0);
  };

  const getShips = async () => {
    const category = categoryId > 0 ? `&category=${categoryId}` : "";

    dispatch(
      fetchShips({
        category,
        currentPage: String(currentPage),
      })
    );
  };

  React.useEffect(() => {
    getShips();
  }, [currentPage, categoryId]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(
        window.location.search.substring(1)
      ) as unknown as SearchShipsParams;
      dispatch(
        setFilters({
          currentPage: Number(params.currentPage),
          categoryId: Number(params.category),
        })
      );
    }
    isMounted.current = true;
  }, []);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, currentPage]);

  return (
    <>
      <Header />
      <section
        className={styles.order}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className={styles.container}>
          <Sort value={categoryId} onChangeCategory={onChangeCategory} />
          {status === "error" ? (
            <div>Opps...Error</div>
          ) : (
            <div className={styles.ships}>
              {status === "loading" ? skeletons: ship}
            </div>
          )}
        </div>
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </section>
    </>
  );
};

export default OrderShips;

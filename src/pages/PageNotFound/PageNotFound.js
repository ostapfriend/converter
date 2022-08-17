import { Loader } from '../../components/Loader/Loader';

import './PageNotFound.scss';

export const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <h2 className="pageNotFound__title">
        PAGE NOT FOUND 404
      </h2>
      <Loader />

      <h1 className="pageNotFound__tryAgain">TRY AGAIN...</h1>
    </div>
  );
};

export default PageNotFound;
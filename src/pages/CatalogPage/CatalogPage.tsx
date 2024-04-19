import Catalog from "components/Catalog";
import { Helmet } from "react-helmet-async";

const CatalogPage = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Catalog page</title>
      </Helmet>
      <Catalog />
    </>
  );
};

export default CatalogPage;

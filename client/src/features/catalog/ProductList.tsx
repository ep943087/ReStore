import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[],
}

const ProductList = ({products}: ProductListProps) => {
  return (
    <Grid container spacing={4}>
      {products.map((item) => (
        <Grid item xs={3} key={item.id}>
          <ProductCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
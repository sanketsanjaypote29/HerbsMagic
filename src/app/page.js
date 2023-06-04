import Items from "../../comps/Items/Items";
import Navbar from "../../comps/Navbar/Navbar";
import SearchBar from "../../comps/SearchBar/SearchBar";
import Sort from "../../comps/Sort/Sort";
import ProductCard from "../../comps/ProductCard/ProductCard";
import AddProduct from "../../comps/AddProduct/AddProduct";
export default function Home() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Sort />
      <ProductCard />
      <AddProduct />
      {/* <Items/> */}
    </div>
  );
}

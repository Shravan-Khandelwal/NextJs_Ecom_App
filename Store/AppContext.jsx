"use client";
import { createContext, useState, useEffect } from "react";
import { showToast } from "react-next-toast";
import useSWR from "swr";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [ProductData, setProductData] = useState();
  const [FilteredData, setFilteredData] = useState();
  const [SearchedArrayList, setSearchedArrayList] = useState();
  const [CartArray, setCartArray] = useState([]);
  const [IsMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1500);
    };

    console.log(IsMobile);

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  try {
    useEffect(() => {
      async function getData() {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProductData(data.products);
      }
      getData();
    }, []);
  } catch (error) {
    console.log(error.message);
  }

  // ! FUNCTION FOR SHOWING THE TOAST MESSAGE

  function showingToast(Msg) {
    showToast.success(Msg, 1000);
  }

  function showingPaymentDone(Msg) {
    showToast.info(Msg.toUpperCase(), 9000);
  }

  // ! FUNCTION FOR FILTERING DATA
  function FilteringData(Activecategory) {
    setFilteredData(
      ProductData.filter((Product) => Product.category == Activecategory)
    );
  }

  // ! FUNCTION FOR SEARCHING DATA
  function SearchProduct(SearchText) {
    setSearchedArrayList(
      ProductData.filter((Product) =>
        Product.title.toLowerCase().includes(SearchText)
      )
    );

    console.log(ProductData);
  }

  // ! FUNCTION FOR FILTRING DATA WITH ID
  function FindDataByID(ID, url) {
    const fetcher = (url) => fetch(url).then((response) => response.json());

    const { data, error, isLoading } = useSWR(url, fetcher);
    return { data, error, isLoading };
  }

  // ! Function For Adding Items To The CartArray
  function AddItemsToCart(Product) {
    setCartArray((prevCartArray) => {
      //! Checking if the item already exist in the cart
      const ExistingItem = prevCartArray.find(
        (item) => item.Product.id == Product.id
      );

      if (ExistingItem) {
        return prevCartArray.map((item) =>
          item.Product.id === Product.id
            ? { ...item, Quantity: item.Quantity + 1 }
            : item
        );
      } else {
        const NewItem = {
          Product,
          Quantity: 1,
        };

        return [...prevCartArray, NewItem];
      }
    });
  }

  //! Function TO Remove Elements From The cart
  function DeleteElementsByID(id) {
    const isPresent = CartArray.find((item) => item.id === id);

    if (isPresent) {
      setCartArray((prevCartArray) => {
        const UpdateCartArr = prevCartArray.filter((item) => item.id !== id);
        console.log(`Element with ID ${id} removed from cart.`);
        return UpdateCartArr;
      });
    } else {
      console.log("Element not found");
    }

    console.log(CartArray);
  }

  return (
    <AppContext.Provider
      value={{
        ProductData,
        FilteredData,
        FilteringData,
        SearchProduct,
        SearchedArrayList,
        FindDataByID,
        AddItemsToCart,
        CartArray,
        DeleteElementsByID,
        IsMobile,
        showingToast,
        showingPaymentDone,
        setCartArray,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

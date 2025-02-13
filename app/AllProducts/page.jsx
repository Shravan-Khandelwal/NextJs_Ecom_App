"use client";
import React from "react";
import ProductPageCard from "./../../Components/SSR/ProductPageCard";
import PopUpAnimation from "./../../Components/CSR/PopUpAnimation";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "./../../Store/AppContext";
import SkeletonLoader from "./../../Components/SSR/SkeletonLoader";

function AllProductPage() {
  const {
    ProductData,
    FilteredData,
    FilteringData,
    SearchProduct,
    SearchedArrayList,
  } = useContext(AppContext);

  const [isFiltered, setisFiltered] = useState(false);
  const [SelectedCategory, setSelectedCategory] = useState(" ");
  const [SearchText, setSearchText] = useState(null);
  const [isSearching, setisSearching] = useState(false);

  const [PageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (PageLoading) {
    return <SkeletonLoader></SkeletonLoader>;
  }

  function handleFilteredBtns(FilteredCategory) {
    setisSearching(false);
    setSelectedCategory(FilteredCategory);
    setisFiltered(true);
    FilteringData(FilteredCategory);
  }

  function handleClreaFilterBtn() {
    setSelectedCategory(" ");
    setisFiltered(false);
  }

  function handleSearchBtn() {
    if (SearchText.length != 0) {
      setisFiltered(false);
      setisSearching(true);
      SearchProduct(SearchText.toLowerCase().trim());
    }
  }

  function handleClearSearchBtn() {
    setisSearching(false);
    setSearchText(" ");
  }

  const Categories = ["Beauty", "Fragrances", "Furniture", "Groceries"];

  return (
    <>
      <p className="text-7xl text-center font-bold min-h-[10vh]">
        All Products!
      </p>

      <div className="flex gap-20 px-[40px] py-[30px] mx-auto ">
        <div className=" flex flex-col items-center gap-1 rounded-md  w-[35vw] h-[80vh] bg-[#a4acb2] px-5 py-4">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={SearchText}
            required={true}
            type="text"
            placeholder="Search Your Product Here..."
            className="input input-bordered w-full max-w-xs"
          />

          {SearchText && (
            <button
              className=" px-4 py-1 rounded-md w-fit text-2xl bg-[#abc3cd]"
              onClick={() => handleSearchBtn()}
            >
              SEARCH
            </button>
          )}

          <p className="text-2xl mt-5 font-bold"> Filter based On Category</p>

          {Categories.map((category, id) => {
            return (
              <div key={id} className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text hover:font-bold font-semibold text-3xl">
                    <button
                      className=" shadow-2xl shadow-white px-6 py-2"
                      onClick={() => handleFilteredBtns(category.toLowerCase())}
                    >
                      {category}
                    </button>
                  </span>
                </label>
              </div>
            );
          })}

          <PopUpAnimation>
            {isFiltered && (
              <button
                className="bg-[#8d85b5] text-2xl font-bold px-5 py-2 rounded-md"
                onClick={() => handleClreaFilterBtn()}
              >
                Clear Filter
              </button>
            )}
          </PopUpAnimation>

          <div className="w-full">
            {SelectedCategory && isFiltered && (
              <PopUpAnimation>
                {" "}
                <p className="text-2xl bg-[#abe385] mt-4 px-4  text-center py-2 rounded-sm ">
                  {SelectedCategory.toUpperCase()}
                </p>
              </PopUpAnimation>
            )}
          </div>

          {isSearching && (
            <button
              className="btn btn-outline text-3xl btn-primary"
              onClick={() => handleClearSearchBtn()}
            >
              Clear Search
            </button>
          )}
        </div>

        {/* When Filtiring is Happening */}
        {isFiltered && isSearching == false && FilteredData && (
          <div className="  overflow-y-scroll justify-center w-[90vw] flex gap-10 flex-wrap h-[80vh]">
            {FilteredData.map((product) => {
              return (
                <PopUpAnimation key={product.id}>
                  <ProductPageCard
                    itemDetails={product}
                    key={product.id}
                  ></ProductPageCard>
                </PopUpAnimation>
              );
            })}
          </div>
        )}

        {/* When Filtiring is Not Happening And Searching Is Also Not Happening */}
        {isFiltered === false && isSearching == false
          ? ProductData && (
              <div className="  overflow-y-scroll justify-center w-[90vw] flex gap-10 flex-wrap h-[80vh]">
                {ProductData.map((product) => {
                  return (
                    <PopUpAnimation key={product.id}>
                      <ProductPageCard
                        itemDetails={product}
                        key={product.id}
                      ></ProductPageCard>
                    </PopUpAnimation>
                  );
                })}
              </div>
            )
          : null}

        {/* When Searching is Happening */}
        {isFiltered == false && isSearching == true ? (
          <div className="  overflow-y-scroll justify-center w-[90vw] flex gap-10 flex-wrap h-[80vh]">
            {SearchedArrayList.length != 0 ? (
              SearchedArrayList.map((product) => {
                return (
                  <PopUpAnimation key={product.id}>
                    <ProductPageCard
                      itemDetails={product}
                      key={product.id}
                    ></ProductPageCard>
                  </PopUpAnimation>
                );
              })
            ) : (
              <p className="text-5xl"> Product Not Found</p>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default AllProductPage;

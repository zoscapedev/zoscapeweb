'use client'
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

import { Category } from "@/types";

interface CategoryBoxProps extends Category {
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    router.push(url);
  }
  
  return (
    <button
    type="button"
    onClick={handleClick}
      className={` flex  flex-col max-w-fit  items-center  justify-center  gap-2 p-2 border-b-2  hover:text-neutral-800 transition cursor-pointer text-[20px] md:text-[24px] ${
        selected
          ? "border-b-neutral-800 text-neutral-800 "
          : "border-transparent text-neutral-500"}`}
    >
      <Icon  />
      <small className="font-medium md:text-[13.75px] text-[12.75px] select-none">{label}</small>
    </button>
  );
};

export default CategoryBox;
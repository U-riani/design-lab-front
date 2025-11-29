import React from "react";
import { Link } from "react-router-dom";

const CardsCOmponent = ({ data }) => {
  return (
    <div class="w-full bg-neutral-primary-soft block  p-6 rounded-base bg-white shadow-xl">
        <h5 class="mt-6 mb-2 text-md font-semibold tracking-tight text-heading">
          {data.title}
        </h5>
      <p class="mb-6 text-body">{data.content}</p>
      <Link
        to="/registration"
        class="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
      >
        Register
        <svg
          class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </Link>
    </div>
  );
};

export default CardsCOmponent;

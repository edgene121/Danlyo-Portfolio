import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = ({item:{title,des,icon}}) => {
  return (
    <div className="w-full h-full min-h-[22rem] px-8 py-8 rounded-lg shadow-shadowOne flex bg-gradient-to-r from-bodyColor to-[#202327] border border-transparent group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] hover:border-[#FBBF24] transition-colors duration-300">
      <div className="flex h-full w-full flex-col gap-6">
        <div className="w-12 h-12 flex items-center justify-start shrink-0">
          {icon ? (
            <span className="text-5xl text-[#10B981] group-hover:text-[#FBBF24] transition-colors duration-300">
              {icon}
            </span>
          ) : (
            <>
              <span className="w-full h-[2px] rounded-lg bg-[#10B981] inline-flex group-hover:bg-[#FBBF24]"></span>
            </>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300 leading-snug">
            {title}
          </h2>
          <p className="text-base text-lightText leading-7">
            {des}
          </p>
          <span className="text-2xl text-[#10B981] group-hover:text-[#FBBF24] transition-colors duration-300 mt-auto">
            <HiArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card

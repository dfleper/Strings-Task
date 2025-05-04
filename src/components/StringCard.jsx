import React from 'react';
import * as LucideIcons from "lucide-react";

const StringCard = ({ stringMethod, onClick }) => {
  const IconComponent = LucideIcons[stringMethod.icon] || LucideIcons.ShieldOff;

  return (
    <div
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-700 ease-in-out transform hover:scale-105 cursor-pointer hover:bg-primary hover:animate-pulse group"
      onClick={onClick}
    >
      <div className="card-body flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center text-center sm:text-left p-4 sm:p-6">
        <IconComponent className="w-6 h-6 text-secondary group-hover:text-base-100 transition-all" />
        <h2 className="card-title text-primary group-hover:text-base-100 text-base sm:text-lg">
          {stringMethod.title}
        </h2>
      </div>
    </div>
  );
};

export default StringCard;


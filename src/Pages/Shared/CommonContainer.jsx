/* eslint-disable react/prop-types */

export const CommonContainer = ({ children }) => {
  return (
    <div className=" container mx-auto px-4 sm:px-6 md:px-8 xl:px-0 max-w-screen-4xl">
      {children}
    </div>
  );
};

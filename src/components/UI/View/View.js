export const View = ({ children }) => (
  <div className="bg-white dark:bg-gray-900 text-red-700 dark:text-gray-200">
    <div className="container mx-auto min-h-screen flex flex-col">
      {children}
    </div>
  </div>
);

import { ToggleTheme } from "../Buttons";
import { Container } from "./Container";

export const Navigation = () => (
  <Container>
    <div className="flex justify-between items-center">
      <span className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
        <div className="inline-flex items-center">
          <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"></div>
          <h2 className="block p-2 text-xl font-medium tracking-tighter lg:mr-8">
            expense tracker
          </h2>
        </div>
      </span>
      <div className="">
        <ToggleTheme />
      </div>
    </div>
  </Container>
);

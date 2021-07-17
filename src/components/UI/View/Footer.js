import { ReactIcon, TailwindIcon } from "../Icons";

const icons = [ReactIcon, TailwindIcon];

export const Footer = () => (
  <footer className="mt-auto p-5">
    <div className="flex flex-col justify-center sm:flex-row">
      <p className="flex items-center justify-center">
        <span className="mr-1">Made with </span>
        {icons.map((Icon, index) => (
          <Icon key={index} className="mx-1" />
        ))}
      </p>
      <p className="text-center mx-1">
        by{" "}
        <a href="https://ansango.com" target="_blank" rel="noreferrer">
          @ansango
        </a>
      </p>
    </div>
  </footer>
);

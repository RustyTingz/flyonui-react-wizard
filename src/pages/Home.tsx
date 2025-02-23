export default function Home() {
  return (
    <div className="flex max-sm:flex-col gap-4 items-center justify-center h-full">
      <img
        src="https://cdn.flyonui.com/fy-assets/icons/react-vite-icon.png"
        alt="react logo"
        className="size-40"
      />
      <div className="w-2/3">
        <h2 className="text-3xl font-semibold text-info mb-3">
          You did it! 🎉
        </h2>
        <p>
          You’ve successfully created a project with{' '}
          <a
            className="link link-animated text-info font-semibold"
            href="https://flyonui.com/"
          >
            FlyonUI
          </a>
          +
          <a
            className="link link-animated text-info font-semibold"
            href="https://react.dev/"
          >
            React(Vite)
          </a>
          .
        </p>
        <p className="text-base text-base-content">
          Explore our pre-built components by navigating the menu. Test them
          with various themes from the navbar, and feel free to copy and paste
          any component to see it in action!
        </p>
        <p className="mt-2">
          This example includes reusable Button and Accordion components. You
          can leverage these to build any custom component using FlyonUI,
          tailored to your specific requirements.
        </p>
      </div>
    </div>
  );
}

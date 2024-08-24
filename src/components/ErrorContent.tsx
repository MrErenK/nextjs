import Link from "next/link";

interface ActionButton {
  text: string;
  href?: string;
  onClick?: () => void;
  primary?: boolean;
}

interface ErrorContentProps {
  title: string;
  message: string;
  actionButtons: ActionButton[];
}

export default function ErrorContent({
  title,
  message,
  actionButtons,
}: ErrorContentProps) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-bg-color">
      <div className="text-center p-10 bg-card-bg-color shadow-card rounded-2xl max-w-md w-11/12">
        <h1 className="text-4xl font-bold text-title-color mb-4">{title}</h1>
        <p className="text-lg text-text-color mb-8">{message}</p>
        <div className="flex justify-center space-x-4">
          {actionButtons.map((button, index) =>
            button.href ? (
              <Link
                key={index}
                href={button.href}
                className={`px-6 py-3 font-semibold text-base text-center text-button-text ${
                  button.primary
                    ? "bg-primary hover:bg-primary-hover"
                    : "bg-secondary hover:bg-secondary-hover"
                } rounded-md shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
              >
                {button.text}
              </Link>
            ) : (
              <button
                key={index}
                onClick={button.onClick}
                className={`px-6 py-3 font-semibold text-base text-center text-button-text ${
                  button.primary
                    ? "bg-primary hover:bg-primary-hover"
                    : "bg-secondary hover:bg-secondary-hover"
                } rounded-md shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
              >
                {button.text}
              </button>
            ),
          )}
        </div>
      </div>
    </main>
  );
}

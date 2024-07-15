import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-bg-color">
      <div className="text-center p-10 bg-card-bg-color shadow-card rounded-2xl max-w-md w-11/12">
        <h1 className="text-4xl font-bold text-title-color mb-4">404</h1>
        <p className="text-lg text-text-color mb-8">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        <div className="flex justify-center">
          <Link 
            href="/" 
            className="px-6 py-3 font-semibold text-base text-center text-button-text bg-primary hover:bg-primary-hover rounded-md shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
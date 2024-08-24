import ErrorContent from "@/components/ErrorContent";

export default function NotFound() {
  return (
    <ErrorContent
      title="404"
      message="Oops! The page you're looking for doesn't exist."
      actionButtons={[
        {
          text: "Back to Home",
          href: "/",
          primary: true,
        },
      ]}
    />
  );
}

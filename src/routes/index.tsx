import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Wedding Invitation" },
      {
        name: "description",
        content:
          "Designed as a digital invitation, the site shares our story from the first glance to forever while guiding guests through every detail of our special day.",
      },
    ],
  }),
});

function Index() {
  return (
    <iframe
      src="/wedding.html"
      title="Wedding Invitation"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
    />
  );
}

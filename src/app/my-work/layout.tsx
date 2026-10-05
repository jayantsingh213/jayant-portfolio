import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Work | Jayant Singh",
  description:
    "Explore tech projects by Jayant Singh — MediPing AI, ElectraNet, Streako, CITYJAN and innovative software solutions.",
  openGraph: {
    title: "My Work | Jayant Singh",
    description:
      "Explore tech projects by Jayant Singh — MediPing AI, ElectraNet, Streako, CITYJAN and innovative software solutions.",
    type: "website",
    url: "https://jayantsingh.dev/my-work",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Work | Jayant Singh",
    description:
      "Explore tech projects by Jayant Singh — MediPing AI, ElectraNet, Streako, CITYJAN and innovative software solutions.",
  },
};

export default function MyWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

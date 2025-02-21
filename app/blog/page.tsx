import { title } from "@/components/primitives";

export const metadata = {
  title: "المدونة",
};


export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Blog</h1>
    </div>
  );
}
